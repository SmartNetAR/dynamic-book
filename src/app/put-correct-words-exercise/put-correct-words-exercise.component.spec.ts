import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCorrectWordsExerciseComponent } from './put-correct-words-exercise.component';

describe('PutCorrectWordsExerciseComponent', () => {
  let component: PutCorrectWordsExerciseComponent;
  let fixture: ComponentFixture<PutCorrectWordsExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutCorrectWordsExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutCorrectWordsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
