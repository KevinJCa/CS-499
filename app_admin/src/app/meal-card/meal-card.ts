import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Meal } from '../models/meal';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-card.html',
  styleUrl: './meal-card.css'
})

export class MealCard implements OnInit {
  
  @Input('meal') meal: any;

  constructor(private router: Router, private Authentication: Authentication) {}

  ngOnInit(): void { }

  // Redirects the user to the edit-form when clicking on the edit button
  public editMeal(meal: Meal) {
    localStorage.removeItem('mealCode');
    localStorage.setItem('mealCode', meal.code);
    this.router.navigate(['edit-meal']);
  }

  // Redirects the user to the confirmation form to remove a meal when clicking on the remove button
  public removeMeal(meal: Meal) {
    localStorage.removeItem('mealCode');
    localStorage.setItem('mealCode', meal.code);
    this.router.navigate(['remove-meal']);
  }

  // Verifies if the user is logged in before accessing any admin controls
  public isLoggedIn() {
    return this.Authentication.isLoggedIn();
  }

}
