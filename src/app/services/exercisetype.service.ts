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

export class ExercisetypeService{
  baseUrl: string = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  GetAll = (): Observable<ExerciseType[]> => {
    let exerciseType: Observable<ExerciseType[]>
    exerciseType = this.http.get<ExerciseType[]>(`${this.baseUrl}/exercise_type`, httpOptions)
    console.log("Get All Working")
    console.log(exerciseType)
    return exerciseType
  }
}
