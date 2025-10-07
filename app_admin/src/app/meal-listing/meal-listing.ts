import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealCard } from '../meal-card/meal-card';
import { Meal } from '../models/meal';
import { MealData } from '../services/meal-data';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-meal-listing',
  standalone: true,
  imports: [CommonModule, MealCard],
  templateUrl: './meal-listing.html',
  styleUrl: './meal-listing.css',
  providers: [MealData]
})



export class MealListing implements OnInit {

  meals!: Meal[];
  message: string = '';

  constructor(private mealData: MealData, private router: Router, private Authentication: Authentication) {
    console.log('meal-listing constructor');
  }
  
  // Navigates the user to the add-meal form
  public addMeal(): void {
    this.router.navigate(['add-meal'])
  }

  // Verifies if the user is logged in to ensure the user has the right to add meals
  public isLoggedIn() {
    return this.Authentication.isLoggedIn();
  }

  // Method that will call the getMeals() method in MealData
  private getMeals(): void {
    this.mealData.getData().subscribe({
      next: (data: any) => {
        this.meals = data;
        if(data.length > 0){
          this.message = 'There are ' + data.length + ' breakfast meals available';
        } else {
          this.message = 'There were no meals retrieved from the database';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error ' + error);
      }
    })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getMeals();
  }

}
