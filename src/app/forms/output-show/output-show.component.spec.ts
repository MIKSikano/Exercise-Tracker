import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputShowComponent } from './output-show.component';

describe('OutputShowComponent', () => {
  let component: OutputShowComponent;
  let fixture: ComponentFixture<OutputShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
