import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfromaComponent } from './profroma.component';

describe('ProfromaComponent', () => {
  let component: ProfromaComponent;
  let fixture: ComponentFixture<ProfromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfromaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
