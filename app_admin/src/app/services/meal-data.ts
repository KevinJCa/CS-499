import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Handles async calls
import { Meal } from '../models/meal'; // Model is used for the data format
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})

export class MealData {

  constructor(private http: HttpClient, @Inject (BROWSER_STORAGE) private storage: Storage) { }
  
  private apiurl = 'http://localhost:3000/api/meals'; // API endpoint containing JSON data of the meals
  private baseurl = 'http://localhost:3000/api'; // To support additional endpoints

    // Call to our /login endpoint, returns JWT
  login (user: User, passwd: string) : Observable<AuthResponse> {
    // console.log('Inside TripData::login');
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to our /register endpoint, creates user and returns JWT
  register (user: User, passwd: string) : Observable<AuthResponse> {
    // console.log('Inside TripData::register');
    return this.handleAuthAPICall('register',  user, passwd);
  }

  // Helper method to process both login and register methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {
    // console.log('Inside TripData::handleAuthAPICall');
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(this.baseurl + '/' + endpoint, formData);
  }

  // Retrieves all of the meals embedded within the seeded JSON data from the api endpoint
  getData() : Observable<Meal[]> {
    // console.log('Inside MealData::getData');
    return this.http.get<Meal[]>(this.apiurl);
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

  removeMeal(mealCode: string) : Observable<Meal[]> {
    // console.log('Inside MealData::removeMeal);
    return this.http.delete<Meal[]>(this.apiurl + '/' + mealCode);
  }

}
