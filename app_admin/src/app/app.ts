import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MealListing } from './meal-listing/meal-listing';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MealListing, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Town Restaurant Admin'
}
