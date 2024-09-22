import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmSignalComponent } from './vm-signal.component';

describe('VmSignalComponent', () => {
  let component: VmSignalComponent;
  let fixture: ComponentFixture<VmSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
