import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDataComponent } from './exercise-data.component';

describe('ExerciseDataComponent', () => {
  let component: ExerciseDataComponent;
  let fixture: ComponentFixture<ExerciseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
