import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealListing } from './meal-listing/meal-listing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MealListing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Town Restaurant Admin'
}
