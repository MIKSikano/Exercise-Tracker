import { Component, EventEmitter, Output } from '@angular/core';
import { ExerciseData } from 'models/ExerciseData';
import { ExerciseType } from 'models/ExerciseType';
import { WorkoutRecord } from 'models/WorkoutRecord';
import { ExercisedataService } from 'src/app/services/exercisedata.service';
import { WorkoutrecordService } from 'src/app/services/workoutrecord.service';
import { ExercisetypeService } from 'src/app/services/exercisetype.service';

@Component({
  selector: 'app-exercise-data',
  templateUrl: './exercise-data.component.html',
  styleUrls: ['./exercise-data.component.scss']
})
export class ExerciseDataComponent {
  constructor(private exerciseDataService: ExercisedataService,
    private workoutRecordService: WorkoutrecordService,
    private exerciseTypeService: ExercisetypeService) {
  }
  exerciseData: ExerciseData = {
    CaloriesBurned: 0,
    CaloriesBurnedGoal: 0,
  }

  exerciseType: ExerciseType;

  workoutRecord: WorkoutRecord;

  ngOnInit(): void {
    this.workoutRecordService.GetLatest().subscribe((wRecord) => {
      this.workoutRecord = wRecord
    })

    this.exerciseTypeService.GetLatest().subscribe((eType) => {
      this.exerciseType = eType
    })

  }

  @Output() formEvent: EventEmitter<ExerciseData> = new EventEmitter<ExerciseData>();

  SaveExerciseData = () => {
    console.log("Exercise Data Entered!")
    let d = { ...this.exerciseData }
    //to set the latest input 
    d.ExerciseTypeId = this.exerciseType.Id;
    d.WorkoutRecordId = this.workoutRecord.Id;
    console.log(d);
    this.exerciseDataService.Save(d).subscribe((data) => {
      this.formEvent.emit(data)
  
    });
  }

}
