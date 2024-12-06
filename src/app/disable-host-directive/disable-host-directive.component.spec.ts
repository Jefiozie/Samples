import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableHostDirectiveComponent } from './disable-host-directive.component';

describe('DisableHostDirectiveComponent', () => {
  let component: DisableHostDirectiveComponent;
  let fixture: ComponentFixture<DisableHostDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisableHostDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableHostDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
