import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';


import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root',
})

export class TripData {

  baseURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/api/trips';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    console.log('Inside TripData::getTrips');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip, tripCode: string = formData.code) : Observable<Trip> {
    console.log('Inside TripData::addTips');
    return this.http.put<Trip>(this.url + '/' + tripCode, formData);
  }

  // Call to our /login endpoint, return JWT
  login(user: User, passwd: string) : Observable<AuthResponse> {
    console.log('Inside TripDataService::login');
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to our /register endpoint, creates user and returns JWT
  register(user: User, passwd: string) : Observable<AuthResponse> {
    console.log('Inside TripDataService::register');
    return this.handleAuthAPICall('register', user, passwd);
  }

  // Helper method the help process both login and regiser methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {
    console.log('Inside TripDataService::handleAuthAPICall');
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    return this.http.post<AuthResponse>(this.baseURL + '/' + endpoint, formData);
  }

}
