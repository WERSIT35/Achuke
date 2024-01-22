import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquetsAllComponent } from './boquets-all.component';

describe('BoquetsAllComponent', () => {
  let component: BoquetsAllComponent;
  let fixture: ComponentFixture<BoquetsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoquetsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoquetsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
