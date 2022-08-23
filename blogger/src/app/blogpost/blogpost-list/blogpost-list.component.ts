import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  title:string = 'Blogs';
  blogs : Array<object> = Blogpost;

  //blogs = Blogpost;
  error = {};

  constructor(
    private titleServise : Title,
    private blogpostService : BlogpostService
  ) { }

  ngOnInit(): void {

    this.titleServise.setTitle(this.title); 
    /*
    this.blogpostService.getBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
     */
    
    this.blogpostService.getBlogs()
    of().subscribe((data: Blogpost) => this.blogs = data,
  );

  }

}
