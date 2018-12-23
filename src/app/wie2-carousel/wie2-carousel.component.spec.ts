import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wie2CarouselComponent } from './wie2-carousel.component';

describe('Wie2CarouselComponent', () => {
  let component: Wie2CarouselComponent;
  let fixture: ComponentFixture<Wie2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wie2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wie2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
