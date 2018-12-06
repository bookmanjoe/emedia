import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiesoComponent } from './wieso.component';

describe('WiesoComponent', () => {
  let component: WiesoComponent;
  let fixture: ComponentFixture<WiesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
