import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Handles async calls
import { Breakfast, Lunch, Dinner } from '../models/meal'; // Model is used for the data format
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MealData {

  constructor(private http: HttpClient) { }
  
  private apiurl = 'http://localhost:3000/api/meals'

  getMeals(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }

}
