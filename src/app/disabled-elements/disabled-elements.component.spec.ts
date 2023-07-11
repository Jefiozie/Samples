import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('DisabledElementsComponent', () => {
  let component: DisabledElementsComponent;
  let fixture: ComponentFixture<DisabledElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DisabledElementsComponent]
    });
    fixture = TestBed.createComponent(DisabledElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
