import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ExerciseType } from 'models/ExerciseType';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ExercisetypeService {
  baseUrl: string = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  GetAll = (): Observable<ExerciseType[]> => {
    let exerciseType: Observable<ExerciseType[]>
    exerciseType = this.http.get<ExerciseType[]>(`${this.baseUrl}/exercise_type`, httpOptions)
    console.log("Get All Working")
    console.log(exerciseType)
    return exerciseType
  }

  Save = (exerciseType: ExerciseType): Observable<ExerciseType> => {
    let item: Observable<ExerciseType>
    if (exerciseType.Id) {
      //Perform Update: Put /exercise.id data
      const url = `${this.baseUrl}/exercise_type/${exerciseType.Id}`
      item = this.http.put<ExerciseType>(url, exerciseType, httpOptions)
    } else {
      // perform Create: POST /exercises
      item = this.http.post<ExerciseType>(`${this.baseUrl}/exercise_type`, exerciseType, httpOptions)
    }
    return item
  }

  GetLatest = (): Observable<ExerciseType> => {
    let exerciseType: Observable<ExerciseType>
    exerciseType = this.http.get<ExerciseType>(`${this.baseUrl}/exercise_type/latest`, httpOptions)
    console.log("Get All Working")
    console.log(exerciseType)
    return exerciseType
  }

}
