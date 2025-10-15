import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { breakfast, lunch, dinner } from '../data/meals';
import { MealCard } from '../meal-card/meal-card';
import { Breakfast, Lunch, Dinner } from '../models/meal';
import { MealData } from '../services/meal-data';

@Component({
  selector: 'app-meal-listing',
  standalone: true,
  imports: [CommonModule, MealCard],
  templateUrl: './meal-listing.html',
  styleUrl: './meal-listing.css',
  providers: [MealData]
})



export class MealListing implements OnInit {

  breakfast: Array<any> = breakfast;
  lunch: Array<any> = lunch;
  dinner: Array<any> = dinner;

  // breakfast!: Breakfast[];
  // lunch!: Lunch[];
  // dinner!: Dinner[];
  message: string = '';

  constructor(private MealData: MealData) {
    console.log('meal-listing constructor');
  }
  
  // Method that will call the getMeals() method in MealData
  /*
  private getStuff(): void {
    this.MealData.getMeals().subscribe({
      next: (value: any) => {
        this.breakfast = value;
        if(value.length > 0){
          this.message = 'There are ' + value.length + ' breakfast meals available';
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
  */

  ngOnInit(): void {
    console.log('ngOnInit');
    //this.getStuff();
  }

}
