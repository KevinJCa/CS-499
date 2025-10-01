import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-card.html',
  styleUrl: './meal-card.css'
})

export class MealCard implements OnInit {
  
  @Input('meal') meal: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  public editMeal(meal: Meal) {
    localStorage.removeItem('mealCode');
    localStorage.setItem('mealCode', meal.code);
    this.router.navigate(['edit-meal']);
  }
}
