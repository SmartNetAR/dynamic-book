import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePreviewerComponent } from './exercise-previewer.component';

describe('ExercisePreviewerComponent', () => {
  let component: ExercisePreviewerComponent;
  let fixture: ComponentFixture<ExercisePreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisePreviewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExercisePreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
