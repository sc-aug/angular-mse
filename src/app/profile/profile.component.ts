import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProfileService } from '../core/profile.service';

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
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.initForm();
    this.initFormData();
  }

  addAddress(s?, c?, st?, zip?): void {
    this.addressesArr.push(this.newAddressFormGroup(s, c, st, zip));
  }

  rmAddress(i): void {
    if (this.addressesArr.length > 1) {
      this.addressesArr.removeAt(i);
    } else {
      // alert('Minimum One address required');
    }
  }

  newAddressFormGroup(s?, c?, st?, zip?) {
    return this.fb.group({ // initial address
      street: [ s , [Validators.required] ],
      city: [ c, [Validators.required] ],
      state: [ st, [Validators.required]],
      zipcode: [ zip ]
    });
  }

  updateProfile() {
    console.log(this.profileForm.value);
    this.profileService.updateProfile(this.profileForm.value)
      .subscribe(
        (res) => console.log(res)
      );
  }

  initForm() {
    this.profileForm = this.fb.group({
      firstName: [ '', [Validators.minLength(3)] ],
      lastName: [ '', [Validators.minLength(2), Validators.required] ],
      phone: [ '', [Validators.required] ],
      email: this.fb.group({
        email: [ '', [Validators.required] ],
        emailConf: [ '', [Validators.required] ]
      }),
      addresses: this.fb.array([ this.newAddressFormGroup() ])
    });
  }

  initFormData() {
    this.profileService.getProfile()
      .subscribe((p) => {
        console.log(p);
        // load data
        this.profileForm.patchValue({
          firstName: p['firstName'],
          lastName: p['lastName'],
          phone: p['phone'],
          email: {
            email: p['email']['email'],
            emailConf: p['email']['email']
          },
          // rating: p['rating'],
          // sendCatalog: false
        });

        // load address
        const ads = p['addresses'];
        for (let k in ads) {
          this.addAddress(
            ads[k]['street'], ads[k]['city'],
            ads[k]['state'], ads[k]['zipcode']);
        }
        if (this.addressesArr.length > 1) {
          this.rmAddress(0);
        }
      });
  }

}


