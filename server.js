const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const application = express();
application.use(cors());
application.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rajshri',
    database: 'taskmanagementapp'
});
db.connect(err => {
    if (err) {
        console.log("Database connection failed");
        return;
    }
    console.log("Successfully connected to database");
})
//login 
application.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email= ? AND password = ?`;
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database Error' });
        }
        if (result.length > 0) {
            const user = result[0];
            return res.json({ 
              id: user.id,
              name: user.name,
              email: user.email,
              mobileNo: user.mobileNo
            });
        } else {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }
    })
})
// logged in user details
application.get('/add-user/:id',(req,resp)=>{
    const userId = req.params.id
  const query = 'SELECT id, name, email, mobileNo FROM users WHERE id = ?'
  db.query(query, [userId], (err, results) => {
    if (err) return resp.status(500).json({ error: 'Database error' });
    if (results.length === 0) return resp.status(404).json({ message: 'User not found' });

    resp.json(results[0]);
  });
});
///update logged in user details
application.put('/update-user/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, mobileNo } = req.body;

  const sql = `UPDATE users SET name = ?, email = ?, mobileNo = ? WHERE id = ?`;

  db.query(sql, [name, email, mobileNo, userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error while updating user' });
    }
    res.json({ message: 'User updated successfully' });
  });
});




///signup
application.post('/add-user', (req, res) => {
    const { name, email, mobileNo,password } = req.body;
    console.log('Incoming request:', req.body);
    if (!name || !email || !mobileNo || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const sql = `SELECT * FROM USERS WHERE email = ? OR mobileNo = ?`;
    db.query(sql, [email, mobileNo], (error, result) => {

        if (error) {
            return res.status(500).json({ message: 'Database Error' });
        }
        if (result.length > 0) {
            return res.status(409).json({ message: 'User is already registered' });
        }
        const insertUser = `INSERT INTO USERS(name,email,mobileNo,password) VALUES (?,?,?,?)`;
        db.query(insertUser, [name, email, mobileNo,password], (insertErr, insertRes) => {
            if (insertErr) {
                  console.error('Insert error:', insertErr);
                if (insertErr.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ message: 'Email already registered' });
                }
                return res.status(500).json({ message: 'Failed to Create User' });
            } 
            return res.status(200).json({ message: 'User Created Successfully' });
        })
    })
})

//create task
application.post('/tasks',(req,res)=>{
    const{title,description,due_date,priority,status,assigned_by} = req.body;
    //   console.log('Received JSON body:', req.body);
    const sql = `INSERT INTO tasks(title,description,due_date,priority,status,assigned_by) VALUES (?,?,?,?,?,?)`;
    db.query(sql,[title,description,due_date,priority,status,assigned_by],(err,result)=>{
        if(err) return res.status(500).json({
        message: 'Failed to create task',
        error: err.sqlMessage || err.message || err,
      });
        res.status(201).json({id:result.insertId,message:'Task created Successfully'})
    })
})
//read all tasks
application.get('/tasks',(req,res)=>{
    db.query(`SELECT * FROM tasks ORDER BY created_at DESC`,(err,results)=>{
        if(err) return res.status(500).json({error:err});
        res.json(results);
    })
})
//read one task by id
application.get('/tasks/:id',(req,res)=>{
    db.query('SELECT * FROM tasks WHERE id = ?',[req.params.id],(errr,resultt)=>{
        if(errr) return res.status(500).json({error:errr});
        res.json(resultt[0])
    })
})
///update tasks
application.put('/tasks/:id',(req,resp)=>{
    const {title,description,due_date,priority,status,assigned_by} = req.body;
    const sql = `UPDATE tasks SET title = ?,description = ?,due_date = ?,priority = ?,status = ?,assigned_by = ? WHERE id = ?`
    db.query(sql,[title,description,due_date,priority,status,assigned_by, req.params.id],(err)=>{
        if(err) return resp.status(500).json({error:err});
        resp.json({message:'Task updated Successfully'})
    })
})
//delete tasks
application.delete('/tasks/:id',(req,resp)=>{
    db.query('DELETE FROM tasks WHERE id = ?',[req.params.id],(err)=>{
        if(err) return resp.status(500).json({error:err});
        resp.json({message:"Task deleted Successfully"})
    })
})

const port = 3000;
application.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})