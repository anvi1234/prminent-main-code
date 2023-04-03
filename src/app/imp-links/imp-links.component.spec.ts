import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpLinksComponent } from './imp-links.component';

describe('ImpLinksComponent', () => {
  let component: ImpLinksComponent;
  let fixture: ComponentFixture<ImpLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
