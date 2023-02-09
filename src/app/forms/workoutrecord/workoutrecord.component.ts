import { Component, EventEmitter, Output } from '@angular/core';
import { WorkoutRecord } from 'models/WorkoutRecord';
import { WorkoutrecordService } from 'src/app/services/workoutrecord.service';

@Component({
  selector: 'app-workoutrecord',
  templateUrl: './workoutrecord.component.html',
  styleUrls: ['./workoutrecord.component.scss']
})
export class WorkoutrecordComponent {
  constructor(private workoutRecordService: WorkoutrecordService) { }

  workoutRecord: WorkoutRecord = {
    Date: new Date(),
    StartTime: new Date(),
    EndTime: new Date(),
  }

  @Output() formEvent: EventEmitter<WorkoutRecord> = new EventEmitter<WorkoutRecord>();

  SaveWorkoutRecord = () => {
    console.log("Exercise Type Entered!")
    let w = { ...this.workoutRecord }
    this.workoutRecordService.Save(w).subscribe((record) => {
      this.formEvent.emit(record)
    });
  }
}
