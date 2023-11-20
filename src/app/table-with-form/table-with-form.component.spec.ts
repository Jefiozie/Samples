import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithFormComponent } from './table-with-form.component';

describe('TableWithFormComponent', () => {
  let component: TableWithFormComponent;
  let fixture: ComponentFixture<TableWithFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
