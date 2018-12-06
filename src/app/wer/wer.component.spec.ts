import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerComponent } from './wer.component';

describe('WerComponent', () => {
  let component: WerComponent;
  let fixture: ComponentFixture<WerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
