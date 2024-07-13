import { Component, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  searchTerm = '';
  selectedWorkoutType = '';
  workouts = [
    { username: 'John', workoutType: 'Running', workoutMinutes: 10, numberOfWorkouts: 2 },
    { username: 'Smith', workoutType: 'Swimming', workoutMinutes: 20, numberOfWorkouts: 1 },
    { username: 'Tina', workoutType: 'Cycling', workoutMinutes: 5, numberOfWorkouts: 2 }
  ];

  workoutChartData = [2, 1, 2];
  workoutChartLabels = ['John'],
