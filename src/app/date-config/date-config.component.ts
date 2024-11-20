import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
// import * as moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
export const pro = [
  {
    provide: MAT_DATE_FORMATS,
    useValue: MY_FORMATS,
  },
];
// using the makeEnvironmentProviders function from @angular/core is making sure it is not instantiated in the component
// export const dateEnv = () => makeEnvironmentProviders([...pro]);
export const dateP = () => [...pro];

@Component({
    selector: 'app-date-config',
    imports: [
        CommonModule,
        MatNativeDateModule,
        MatDatepickerModule,
        FormsModule,
    ],
    templateUrl: './date-config.component.html',
    styleUrls: ['./date-config.component.css'],
    providers: [
        // we need to provide the datepicker with the current date format
        // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
        // or we can use the dateP() function
        // this is the same as using the pro array from app.config.ts
        // the function approach is the newer way of doing it
        dateP(),
    ]
})
export default class DateConfigComponent<D> {
  date = new Date()
  // date = moment();
  format = inject(MAT_DATE_FORMATS)
  doSomething(
    normalizedMonthAndYear: Moment,
    datePicker: MatDatepicker<D>,
    dateInput: NgModel
  ): void {
    console.log(normalizedMonthAndYear);
    datePicker.close();
  }
}
