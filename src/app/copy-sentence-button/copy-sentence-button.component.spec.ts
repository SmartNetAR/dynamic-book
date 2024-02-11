import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopySentenceButtonComponent } from './copy-sentence-button.component';

describe('CopySentenceButtonComponent', () => {
  let component: CopySentenceButtonComponent;
  let fixture: ComponentFixture<CopySentenceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopySentenceButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopySentenceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
