import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wer2CarouselComponent } from './wer2-carousel.component';

describe('Wer2CarouselComponent', () => {
  let component: Wer2CarouselComponent;
  let fixture: ComponentFixture<Wer2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wer2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wer2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
