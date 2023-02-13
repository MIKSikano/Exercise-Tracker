import { Component, Input, OnInit } from '@angular/core';
import { ExerciseData } from 'models/ExerciseData';
import { ExercisedataService } from 'src/app/services/exercisedata.service';

@Component({
  selector: 'app-output-show',
  templateUrl: './output-show.component.html',
  styleUrls: ['./output-show.component.scss']
})
export class OutputShowComponent implements OnInit {
  @Input() exerciseDataShow : ExerciseData[] = [];
  constructor(private exerciseShow : ExercisedataService) {}

  ngOnInit(): void {
    console.log("outpu-show onInit Fired!")

    this.exerciseShow.GetAll().subscribe((eShow) => {
      console.log("Exercise Data Show!")
      this.exerciseDataShow = eShow;
    })
  }
}
