import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteQuestionsExerciseComponent } from './write-questions-exercise.component';

describe('WriteQuestionsExerciseComponent', () => {
  let component: WriteQuestionsExerciseComponent;
  let fixture: ComponentFixture<WriteQuestionsExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteQuestionsExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteQuestionsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
