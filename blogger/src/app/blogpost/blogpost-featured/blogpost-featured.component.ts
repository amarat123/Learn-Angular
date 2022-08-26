import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  blogs :any;
  error = {};

  constructor(
    private blogpostService : BlogpostService,
    //private blogs: Blogpost
  ) { 

  }

  ngOnInit(): void {

    this.getFeaturedBlogs();
  }

  getFeaturedBlogs() {
    this.blogpostService.getFeaturedBlogs().subscribe( 
      (data: Blogpost) => this.blogs = data
    )
  }

}
