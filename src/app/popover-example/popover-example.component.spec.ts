import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverExampleComponent } from './popover-example.component';

describe('PopoverExampleComponent', () => {
  let component: PopoverExampleComponent;
  let fixture: ComponentFixture<PopoverExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
