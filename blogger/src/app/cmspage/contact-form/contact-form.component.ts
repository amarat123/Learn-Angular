import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CmspageService } from '../cmspage.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  //model = new Contact();
  model : any;
  submitted = false;
  error: any = {};

  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private routet : Router,
    private cmspageService : CmspageService,
    //private model : Contact
  ) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;


    this.signUpForm = this.fb.group({
      first_name: ['', [
          Validators.required,
          Validators.maxLength(100)
      ]]
      /*
      email: ['', [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(3),
          Validators.email
      ]
      ],*/
      
    });



    return this.cmspageService.contactForm(this.model).subscribe({
        next : (res) => {
          this.model = res
        },
        error : (err) => {
          this.error = err
        },
        complete : () => {},
      }
    );
  }

  gotoHome(){
    this.routet.navigate(['/']);
  }

}
