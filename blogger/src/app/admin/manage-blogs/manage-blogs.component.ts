import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

  title = 'Manage Blogs';
  //blogs: Blog;
  blogs: any;
  error: string;

  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs() {
    this.blogService.getBlogs().subscribe({
      complete:() => {
        (data: any) => this.blogs = data
      },
      error:(e) => {
        error => this.error = error
      },
      //next:(v) => {},
    })  

    console.log('blogs', this.blogs);

  }

}
