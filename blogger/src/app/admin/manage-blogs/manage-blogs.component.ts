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
      
      next: (response) => {
        //(response: Blog) => this.blogs = response
        this.blogs = response
      },
      error:(err) => {
        //error => this.error = err
        this.error = err
      },
      // complete:()  => {},
      
    })  

  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.blogService.deleteBlog(+id).subscribe({

        next: (res) => {
          console.log(res);
          this.ngOnInit();
        },
        error: (err) => {
          this.error = err
        },
        complete: () => {},
        /*
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => this.error = error
        */
      });
    }
  }

}
