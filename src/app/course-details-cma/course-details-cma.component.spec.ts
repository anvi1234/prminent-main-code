import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsCmaComponent } from './course-details-cma.component';

describe('CourseDetailsCmaComponent', () => {
  let component: CourseDetailsCmaComponent;
  let fixture: ComponentFixture<CourseDetailsCmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsCmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailsCmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
