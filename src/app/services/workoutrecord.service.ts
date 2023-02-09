import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { WorkoutRecord } from 'models/WorkoutRecord';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class WorkoutrecordService {
  baseUrl: string = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  GetAll = (): Observable<WorkoutRecord[]> => {
    let workoutRecord: Observable<WorkoutRecord[]>
    workoutRecord = this.http.get<WorkoutRecord[]>(`${this.baseUrl}/workout_record`, httpOptions)
    console.log(workoutRecord)
    return workoutRecord
  }

  Save = (workoutRecord: WorkoutRecord): Observable<WorkoutRecord> => {
    let item: Observable<WorkoutRecord>
    if (workoutRecord.Id) {
      //Perform Update: Put /exercise.id data
      const url = `${this.baseUrl}/workout_record/${workoutRecord.Id}`
      item = this.http.put<WorkoutRecord>(url, workoutRecord, httpOptions)
    } else {
      // perform Create: POST /exercises
      item = this.http.post<WorkoutRecord>(`${this.baseUrl}/workout_record`, workoutRecord, httpOptions)
    }
    return item
  }

  GetLatest = (): Observable<WorkoutRecord> => {
    let workoutRecord: Observable<WorkoutRecord>
    workoutRecord = this.http.get<WorkoutRecord>(`${this.baseUrl}/workout_record/latest`, httpOptions)
    console.log(workoutRecord)
    return workoutRecord
  }
}
