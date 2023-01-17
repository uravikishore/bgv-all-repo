import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css'],
})
export class SearchEmployeeComponent implements OnInit {
  isSubmitted = false;

  // City Names
  City: any = [
    'Employee Name',
    'Employee Email',
    'Employee Contact No.',
    'Employee PF No.',
  ];

  constructor(public fb: FormBuilder) {}

  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]],
  });

  changeCity(e: any) {
    console.log(e.value);
    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get cityName() {
    return this.registrationForm.get('cityName');
  }
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      return true;
      alert(JSON.stringify(this.registrationForm.value));
    }
  }

  ngOnInit(): void {}
}
