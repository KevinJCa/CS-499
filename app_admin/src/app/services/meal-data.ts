import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Handles async calls
import { Meal } from '../models/meal'; // Model is used for the data format

@Injectable({
  providedIn: 'root'
})

export class MealData {

  constructor(private http: HttpClient) { }
  
  private apiurl = 'http://localhost:3000/api/meals' // API endpoint containing JSON data of the meals

  // Retrieves all of the meals embedded within the seeded JSON data from the api endpoint
  getData() : Observable<Meal[]> {
    // console.log('Inside MealData::getData');
    return this.http.get<Meal[]>(this.apiurl)
  }

  addMeal(formData: Meal) : Observable<Meal> {
    // console.log('Inside MealData::addMeal);
    return this.http.post<Meal>(this.apiurl, formData);
  }

  getMeal(mealCode: string) : Observable<Meal[]> {
    // console.log('Inside MealData:getMeal);
    return this.http.get<Meal[]>(this.apiurl + '/' + mealCode);
  }

  updateMeal(formData: Meal) : Observable<Meal> {
    // console.log('Inside MealData::addMeal);
    return this.http.put<Meal>(this.apiurl + '/' + formData.code, formData);
  }

}
