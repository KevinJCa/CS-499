import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import { Router } from "@angular/router";
import { MealData } from '../services/meal-data';

@Component({
  selector: 'app-add-meal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-meal.html',
  styleUrl: './add-meal.css'
})

export class AddMeal {
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mealService: MealData
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  public onSubmit() {
    this.submitted = true;
    if(this.addForm.valid){
      this.mealService.addMeal(this.addForm.value)
      .subscribe( {
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['']);
  },
  error: (error: any) => {
    console.log('Error: ' + error);
    }});
  }
}
// get the form short name to access the form fields
get f() { return this.addForm.controls; }
}