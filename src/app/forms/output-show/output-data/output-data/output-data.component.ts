import { Component, Input } from '@angular/core';
import { ExerciseData } from 'models/ExerciseData';


import { ExerciseType } from 'models/ExerciseType';
import { WorkoutRecord } from 'models/WorkoutRecord';
import { ExercisedataService } from 'src/app/services/exercisedata.service';
import { ExercisetypeService } from 'src/app/services/exercisetype.service';
import { WorkoutrecordService } from 'src/app/services/workoutrecord.service';

@Component({
  selector: 'app-output-data',
  templateUrl: './output-data.component.html',
  styleUrls: ['./output-data.component.scss']
})
export class OutputDataComponent{

  @Input() eShow: ExerciseData;
  




  exerciseDataList: ExerciseData[] = []
  exerciseType: ExerciseType[] = [];
  workoutRecord: WorkoutRecord[] = [];
 
 

  constructor(private exerciseDataService: ExercisedataService, private exerciseTypeService: ExercisetypeService, private workoutRecordService: WorkoutrecordService) { }

  ngOnInit(): void {
    console.log("outdata component fired!")

    this.exerciseDataService.GetAll().subscribe((exerciseData) => {
      console.log("Exercise Data Subscribe Working!")
      this.exerciseDataList = exerciseData
      console.log(exerciseData);
    })

    this.exerciseTypeService.GetAll().subscribe((exerciseType) => {
      console.log("Exercise Type Subscribe Working!")
      this.exerciseType = exerciseType;
      console.log(exerciseType)
    })

    this.workoutRecordService.GetAll().subscribe((workoutRecord) => {
      console.log("Workout Record Subscribe Working!")
      this.workoutRecord = workoutRecord;
      console.log(this.workoutRecord)
    })

  

    
  }
}