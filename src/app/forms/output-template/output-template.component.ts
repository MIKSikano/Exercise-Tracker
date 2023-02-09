import { Component } from '@angular/core';
import { ExerciseData } from 'models/ExerciseData';
import { ExerciseType } from 'models/ExerciseType';
import { WorkoutRecord } from 'models/WorkoutRecord';
import { ExercisedataService } from 'src/app/services/exercisedata.service';
import { ExercisetypeService } from 'src/app/services/exercisetype.service';
import { WorkoutrecordService } from 'src/app/services/workoutrecord.service';

@Component({
  selector: 'app-output-template',
  templateUrl: './output-template.component.html',
  styleUrls: ['./output-template.component.scss']
})
export class OutputTemplateComponent {

  exerciseDataList : ExerciseData[] = []
  exerciseData: ExerciseData = {
    CaloriesBurned : 0,
    CaloriesBurnedGoal : 0,

  }
  exerciseType: ExerciseType[] = [];
  workoutRecord: WorkoutRecord[] = [];

  constructor(private exerciseDataService: ExercisedataService, private exerciseTypeService: ExercisetypeService, private workoutRecordService : WorkoutrecordService,) {}

  ngOnInit(): void {
    console.log("ngOnit Fired!")

    this.exerciseDataService.GetAll().subscribe((exerciseData) => {
      this.exerciseDataList = exerciseData
    })

    this.exerciseTypeService.GetAll().subscribe((exerciseType) => {
      console.log("inside subscribe")
      console.log(exerciseType)
      this.exerciseType = exerciseType;
      console.log(this.exerciseType)
    })
    this.workoutRecordService.GetAll().subscribe((workoutRecord) => {
      this.workoutRecord = workoutRecord;
      console.log(this.workoutRecord)
    })

    
    
    
  }
}
