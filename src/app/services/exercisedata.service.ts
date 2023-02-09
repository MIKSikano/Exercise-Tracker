import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ExerciseData } from 'models/ExerciseData';
import { ExerciseType } from 'models/ExerciseType';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ExercisedataService {
  baseUrl: string = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  GetAll = (): Observable<ExerciseData[]> => {
    let exerciseData: Observable<ExerciseData[]>
    exerciseData = this.http.get<ExerciseData[]>(`${this.baseUrl}/exercise_data`, httpOptions)
    return exerciseData
  }

 
}
