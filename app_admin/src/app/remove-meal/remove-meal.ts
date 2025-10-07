import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MealData } from '../services/meal-data';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-remove-meal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remove-meal.html',
  styleUrl: './remove-meal.css'
})
export class RemoveMeal {

  meal!: Meal;
  submitted = false;
  message : string = '';

  constructor(
    private router: Router,
    private mealData: MealData
  ) {}

  // Retrieve stashed meal ID
  private mealCode = localStorage.getItem("mealCode")!;

  // Confirms the meal selected is valid using its unique code
  ngOnInit() : void {
    if (!this.mealCode) {
      alert("Couldn't find where the mealCode is stashed!");
      this.router.navigate(['']);
      return;
    }

    // Displays current method accessed to the console associated with the meal's code
    console.log('RemoveMeal::ngOnInit');
    console.log('mealcode:' + this.mealCode);
  }

  // Completes removal of a meal from the database
  public onConfirm() {
    this.mealData.removeMeal(this.mealCode)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Could not remove meal due to invalid ID: ' + error);
        }
    });
  }

  // Redirects the user back to the page if selecting 'no' to removing the meal
  public onDeny(): void {
    console.log('Meal was not removed');
    this.router.navigate(['']);
  }

}