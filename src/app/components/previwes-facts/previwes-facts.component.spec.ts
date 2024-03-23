import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviwesFactsComponent } from './previwes-facts.component';

describe('PreviwesFactsComponent', () => {
  let component: PreviwesFactsComponent;
  let fixture: ComponentFixture<PreviwesFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviwesFactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviwesFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
