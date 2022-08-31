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

  error = {};

  constructor(
    private routet : Router,
    private cmspageService : CmspageService,
    //private model : Contact
  ) { }

  ngOnInit(): void {
  }

  gotoHome(){
    this.routet.navigate(['/']);
  }

}
