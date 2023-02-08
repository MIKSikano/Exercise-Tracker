import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTemplateComponent } from './output-template.component';

describe('OutputTemplateComponent', () => {
  let component: OutputTemplateComponent;
  let fixture: ComponentFixture<OutputTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
