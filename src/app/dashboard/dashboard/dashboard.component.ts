import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 doughnutData: any;
  doughnutOptions: any; 

    stackedBarData: any;
  stackedBarOptions: any;

  comboChartData:any;
  comboChartOptions:any;

  userPieChartData: any;
userPieChartOptions: any;
  ngOnInit() {
    this.loadStackedBarChartData();
    this.loadDoughNutData();
    this.loadUserDeptComboChart();
    this.loadUserPieChart();
  }

loadDoughNutData():void{
    this.doughnutData = {
      labels: ['Completed', 'Pending', 'On Hold'],
      datasets: [
        {
          data: [45, 25, 10], // Replace these with your dynamic counts
          backgroundColor: ['#42A5F5', '#FFA726', '#EF5350'],
          hoverBackgroundColor: ['#64B5F6', '#FFB74D', '#E57373']
        }
      ]
    };

    this.doughnutOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#555'
          }
        }
      }
    };
}

loadStackedBarChartData(): void {
  this.stackedBarData = {
    labels: ['Bug Fixes', 'New Features', 'Testing', 'Documentation'],
    datasets: [
      {
        label: 'Completed',
        backgroundColor: '#4ade80', // green
        data: [10, 8, 5, 6],
      },
      {
        label: 'In Progress',
        backgroundColor: '#60a5fa', // blue
        data: [2, 5, 4, 2],
      },
      {
        label: 'Pending',
        backgroundColor: '#fbbf24', // yellow
        data: [1, 2, 3, 1],
      },
    ],
  };

  this.stackedBarOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#374151',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: '#374151',
        },
        grid: {
          color: '#e5e7eb',
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: '#374151',
        },
        grid: {
          color: '#e5e7eb',
        },
      },
    },
  };
}
loadUserDeptComboChart(): void {
  this.comboChartData = {
    labels: ['Engineering', 'Marketing', 'HR', 'Sales', 'Support'],
    datasets: [
      {
        type: 'bar',
        label: 'Active Users',
        backgroundColor: '#42A5F5',
        data: [30, 20, 10, 25, 15]
      },
      {
        type: 'bar',
        label: 'Inactive Users',
        backgroundColor: '#FFA726',
        data: [5, 3, 2, 4, 1]
      },
      {
        type: 'line',
        label: 'Total Users',
        borderColor: '#66BB6A',
        borderWidth: 2,
        fill: false,
        data: [35, 23, 12, 29, 16]
      }
    ]
  };

  this.comboChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#374151'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#374151'
        },
        grid: {
          color: '#e5e7eb'
        }
      },
      y: {
        ticks: {
          color: '#374151'
        },
        grid: {
          color: '#e5e7eb'
        }
      }
    }
  };
}
loadUserPieChart(): void {
  this.userPieChartData = {
    labels: ['Engineering', 'Marketing', 'HR', 'Sales', 'Support'],
    datasets: [
      {
        data: [40, 25, 15, 30, 20],
        backgroundColor: [
          '#42A5F5',
          '#66BB6A',
          '#FFA726',
          '#AB47BC',
          '#FF7043'
        ],
        hoverBackgroundColor: [
          '#64B5F6',
          '#81C784',
          '#FFB74D',
          '#BA68C8',
          '#FF8A65'
        ]
      }
    ]
  };

  this.userPieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151'
        }
      }
    }
  };
}
}
