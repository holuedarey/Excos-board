import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-add-excos',
  templateUrl: './add-excos.component.html',
  styleUrls: ['./add-excos.component.css']
})
export class AddExcosComponent implements OnInit {

  excoForm: FormGroup;
  submitAttempt;

  constructor(private formBuilder: FormBuilder, public service: DashboardService) {
    this.excoForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      post: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      department: ['', Validators.compose([Validators.required])],
      mobile: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
    });
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  };

  ngOnInit() {

  }

  addExcos() {
    this.submitAttempt = true;
    if (!this.excoForm.valid) {
      this.validateAllFormFields(this.excoForm);
      return;
    }
    // this.loader.showLoader();
    let payload = {
      name: this.excoForm.value.name,
      post: this.excoForm.value.post,
      email: this.excoForm.value.email,
      department: this.excoForm.value.department,
      mobile: this.excoForm.value.mobile,
      number: this.excoForm.value.number,
    }
    console.log('payload : ', payload);
    this.service.addExcos(payload).subscribe(user => {
      console.log('data saved')
    }, error => {
      console.log('Error : ', error.error)
      // this.loader.presentToast(error.error.error);
      // this.loader.presentToast(error.error.message);
    });
  }


}
