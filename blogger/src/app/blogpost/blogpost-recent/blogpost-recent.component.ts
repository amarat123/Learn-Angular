import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';


@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {

  blogs :any;
  error = {};

  constructor(private blogpostService : BlogpostService){

   }

  ngOnInit(): void {
    this.getRecentBlogs();
  }

  getRecentBlogs() {

    this.blogpostService.getRecentBlogs().subscribe( 
      (data: Blogpost) => this.blogs = data
    )

  }

}
