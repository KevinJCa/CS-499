import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-card.html',
  styleUrl: './meal-card.css'
})

export class MealCard implements OnInit {
  
  @Input('meal') meal: any;

  constructor() {}

  ngOnInit(): void {
    
  }
}
