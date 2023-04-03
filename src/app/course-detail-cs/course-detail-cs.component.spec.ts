import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailCsComponent } from './course-detail-cs.component';

describe('CourseDetailCsComponent', () => {
  let component: CourseDetailCsComponent;
  let fixture: ComponentFixture<CourseDetailCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailCsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
