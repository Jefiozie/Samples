import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTabsWindowsComponent } from './multi-tabs-windows.component';

describe('MultiTabsWindowsComponent', () => {
  let component: MultiTabsWindowsComponent;
  let fixture: ComponentFixture<MultiTabsWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiTabsWindowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiTabsWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
