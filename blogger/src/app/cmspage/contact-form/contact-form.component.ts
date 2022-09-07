import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CmspageService } from '../cmspage.service'
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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

  //contactForm: FormGroup;


  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
    private routet : Router,
    private cmspageService : CmspageService,
    //private model : Contact
  ) { }


  ngOnInit(): void {
  }

  get contactFormControl() {
    return this.contactForm.controls;
  }


  changeCity(e: any) {
    alert(e.target.value);

    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get cityName() {
    return this.contactForm.get('gender');
  }

  onSubmit() {

    console.log(
      this.contactForm.status
      //this.contactForm.controls.name.value,
    );  
      
    
    if (this.contactForm.valid) {
      this.submitted = true;

      return this.cmspageService.contactForm(this.contactForm.value).subscribe({
        next : (res) => {
          this.model = res
        },
        error : (err) => {
          this.error = err
        },
        complete : () => {},
      });

      console.log('this.model, this.model');

    }else{
      return false;
    }
    

    //return false;  


    /*
    this.contactForm = this.fb.group({
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
      ],*
      
    });
    */

    
   
  }

  gotoHome(){
    this.routet.navigate(['/']);
  }

}
