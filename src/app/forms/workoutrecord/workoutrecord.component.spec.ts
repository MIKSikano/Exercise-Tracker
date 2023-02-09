import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutrecordComponent } from './workoutrecord.component';

describe('WorkoutrecordComponent', () => {
  let component: WorkoutrecordComponent;
  let fixture: ComponentFixture<WorkoutrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
