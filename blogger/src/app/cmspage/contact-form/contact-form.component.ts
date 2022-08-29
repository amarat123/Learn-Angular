import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CmspageService } from '../cmspage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact();
  //model : any;
  submitted  = false;
  error = {};

  constructor(
    private routet : Router,
    private cmspageService : CmspageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    console.log('test', this.model);

    // return this.cmspageService.contactForm(this.model).subscribe(
    //   data => this.model = data,
    //   error => this.error = error
    // );


    return this.cmspageService.contactForm(this.model).subscribe({
      complete: () => { data => this.model = data }, // completeHandler
      error: () => { error => this.error = error },    // errorHandler 
      //next: () => { ... },     // nextHandler
    });




  }

  gotoHome(){
    this.routet.navigate(['/']);
  }

}
