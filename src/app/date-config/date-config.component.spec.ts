import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateConfigComponent } from './date-config.component';

describe('DateConfigComponent', () => {
  let component: DateConfigComponent;
  let fixture: ComponentFixture<DateConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DateConfigComponent]
    });
    fixture = TestBed.createComponent(DateConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
