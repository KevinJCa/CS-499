import { Routes } from '@angular/router';
import { AddMeal } from './add-meal/add-meal';
import { MealListing } from './meal-listing/meal-listing';
import { EditMeal } from './edit-meal/edit-meal';

export const routes: Routes = [
    { path: 'add-meal', component: AddMeal},
    { path: 'edit-meal', component: EditMeal },
    { path: '', component: MealListing, pathMatch: 'full'}
];
