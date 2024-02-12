import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteSentenceExerciseComponent } from './write-sentence-exercise.component';

describe('WriteSentenceExerciseComponent', () => {
  let component: WriteSentenceExerciseComponent;
  let fixture: ComponentFixture<WriteSentenceExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteSentenceExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteSentenceExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
