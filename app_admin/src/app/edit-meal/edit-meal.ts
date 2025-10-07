import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { MealData } from '../services/meal-data';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-edit-meal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-meal.html',
  styleUrl: './edit-meal.css'
})
export class EditMeal {

  public editForm!: FormGroup;
  meal!: Meal;
  submitted = false;
  message : string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mealData: MealData
  ) {}

  ngOnInit() : void {
    
    // Retrieve stashed meal ID
    let mealCode = localStorage.getItem("mealCode");
    if (!mealCode) {
      alert("Couldn't find where the mealCode is stashed!");
      this.router.navigate(['']);
      return;
    }

    // Prints current method accessed to the console with associated meal
    console.log('EditMeal::ngOnInit');
    console.log('mealcode:' + mealCode);
  
    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });

    // Retrieves meal using its unique code
    this.mealData.getMeal (mealCode)
      .subscribe({
        next: (value:any) => {
          this.meal = value;
          //Populate our record into the form
          this.editForm.patchValue(value[0]);
          if (!value)
          {
            this.message = 'No Meal Retrieved!';
          }
          else {
            this.message = 'Meal: ' + mealCode + ' retrieved';
          }
        console.log(this.message);
      },
      error: (error:any) => {
        console.log('Error ' + error);
      }
    });
  }

  // Updates the selected meal using the inputted edit-form values
  public onSubmit()
  {
    this.submitted = true;

    if(this.editForm.valid)
    {
      this.mealData.updateMeal(this.editForm.value)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

}