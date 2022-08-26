import { Component, OnInit, Injectable  } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})



export class BlogpostListComponent  {

  title:string = 'Blogs';
  blogs :any;
  error = {};

  constructor(
    private titleServise : Title,
    private blogpostService : BlogpostService,
    //private blogs: Blogpost
  ) {

    
   }


  ngOnInit(): void {

    this.titleServise.setTitle(this.title); 
    this.getAllBlogs();
  }

  getAllBlogs() {

    /*
    this.blogpostService.getBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
    */
    this.blogpostService.getBlogs().subscribe( 
      (data: Blogpost) => this.blogs = data
    )

  }



}
