import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBoxComponent } from './customer-box.component';

describe('CustomerBoxComponent', () => {
  let component: CustomerBoxComponent;
  let fixture: ComponentFixture<CustomerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
