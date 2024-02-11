import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutWordsExerciseComponent } from './put-words-exercise.component';

describe('PutWordsExerciseComponent', () => {
  let component: PutWordsExerciseComponent;
  let fixture: ComponentFixture<PutWordsExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutWordsExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutWordsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
