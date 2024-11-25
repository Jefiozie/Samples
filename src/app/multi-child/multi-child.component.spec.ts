import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChildComponent } from './multi-child.component';

describe('MultiChildComponent', () => {
  let component: MultiChildComponent;
  let fixture: ComponentFixture<MultiChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
