import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoutComponent } from './aout.component';

describe('AoutComponent', () => {
  let component: AoutComponent;
  let fixture: ComponentFixture<AoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
