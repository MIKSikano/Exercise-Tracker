import { Component, EventEmitter, Output } from '@angular/core';
import { ExerciseType } from 'models/ExerciseType';
import { ExercisetypeService } from 'src/app/services/exercisetype.service';


@Component({
  selector: 'app-exercisetype',
  templateUrl: './exercisetype.component.html',
  styleUrls: ['./exercisetype.component.scss']
})

export class ExercisetypeComponent {
  constructor(private exerciseTypeService : ExercisetypeService) {
  }
      exerciseType : ExerciseType = {
        ExerciseName : '',
        ExerciseDescription : ''
      }

      @Output() formEvent: EventEmitter<ExerciseType> = new EventEmitter<ExerciseType>();
      
      SaveExerciseType = () => {
        console.log("Exercise Type Entered!")
        let t = {...this.exerciseType}
        this.exerciseTypeService.Save(t).subscribe((type)=>{
          this.formEvent.emit(type)
        });
      }
}


