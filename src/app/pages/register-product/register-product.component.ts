import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  /*public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};*/
  public myForm: FormGroup;
  forma: FormGroup;

  constructor() { }

  ngOnInit() {
    /*this.myForm = this.formBuilder.group({
      // Empty string or null means no initial value. Can be also specific date for
      // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
      // value.

      myDate: [null, Validators.required]
      // other controls are here...
  });*/
  }

  setDate(): void {
    // Set today date using the patchValue function
    let date1 = new Date();
    this.myForm.patchValue({myDate: {
    date1: {
        year: date1.getFullYear(),
        month: date1.getMonth() + 1,
        day: date1.getDate()}
    }});
}

clearDate(): void {
    // Clear the date using the patchValue function
    this.myForm.patchValue({myDate: null});
}
  onDateChanged(event) {
    console.log(event);
  }
}
