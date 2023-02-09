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

  Save = (exerciseData: ExerciseData): Observable<ExerciseData> => {
    let item: Observable<ExerciseData>
    if (exerciseData.Id) {
      //Perform Update: Put /exercise.id data
      const url = `${this.baseUrl}/exercise_data/${exerciseData.Id}`
      item = this.http.put<ExerciseData>(url, exerciseData, httpOptions)
    } else {
      // perform Create: POST /exercises
      item = this.http.post<ExerciseData>(`${this.baseUrl}/exercise_data`, exerciseData, httpOptions)
    }
    return item
  }
}
