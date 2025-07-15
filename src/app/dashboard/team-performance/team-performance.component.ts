import { Component } from '@angular/core';

@Component({
  selector: 'app-team-performance',
  templateUrl: './team-performance.component.html',
  styleUrls: ['./team-performance.component.css']
})
export class TeamPerformanceComponent {
topUsers = [
  { name: 'Alice Roy', tasksCompleted: 42,  photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Bob Marley', tasksCompleted: 38, photoUrl: 'https://randomuser.me/api/portraits/men/35.jpg' },
  { name: 'Charlie Dey', tasksCompleted: 33, photoUrl: 'https://randomuser.me/api/portraits/men/60.jpg' },
  { name: 'David Khanna', tasksCompleted: 28,photoUrl: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Eva Iry', tasksCompleted: 24, photoUrl: 'https://randomuser.me/api/portraits/women/55.jpg' }
];

}
