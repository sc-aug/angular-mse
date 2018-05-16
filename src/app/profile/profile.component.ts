import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  get addressesArr(): FormArray {
    return <FormArray>this.profileForm.get('addresses');
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.profileForm = this.fb.group({
      firstName: [ 'Shichuan', [Validators.minLength(3)] ],
      lastName: [ 'Wang', [Validators.minLength(2), Validators.required] ],
      phone: [ '123', [Validators.required] ],
      email: this.fb.group({
        email: [ '', [Validators.required] ],
        emailConf: [ '', [Validators.required] ]
      }),
      addresses: this.fb.array([ this.newAddressFormGroup() ])
    });
  }

  addAddress(): void {
    this.addressesArr.push(this.newAddressFormGroup());
  }

  rmAddress(i): void {
    if (this.addressesArr.length > 1) {
      this.addressesArr.removeAt(i);
    } else {
      alert('Minimum One address required');
    }
  }

  newAddressFormGroup() {
    return this.fb.group({ // initial address
      street: [ 'Prarie Pointe', [Validators.required] ],
      city: [ 'St. Charles', [Validators.required] ],
      state: [ 'IL', [Validators.required]],
      zipcode: [ '60174' ]
    });
  }

  updateProfile() {
    console.log(this.profileForm.value);
  }

}


