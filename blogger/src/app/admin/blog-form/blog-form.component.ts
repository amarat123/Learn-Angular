import { Component, OnInit } from '@angular/core';
import { BlogService }  from '../../services/blog.service';
import { FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  pageTitle: String;
  error: string;
  uploadError: string;
  imagePath: string; 
  blogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.pageTitle = 'Edit Blog';
      this.blogService.getBlog(+id).subscribe(

        res => {
          this.blogForm.patchValue({
            title: res.title,
            description: res.description,
            is_featured: res.is_featured,
            is_active: res.is_active,
            id: res.id
          });
          this.imagePath = res.image;
        }

        /*
        next: (res) => {
          this.blogForm.patchValue({
            title: res.title,
            description: res.description,
            is_featured: res.is_featured,
            is_active: res.is_active,
            id: res.id
          });


        },
        error: () => {},
        complete: () => {}
        */  
      )  
    }else{
      this.pageTitle = 'Create Blog';
    }


    this.blogForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      is_featured: ['0'],
      is_active: ['1'],
      image: ['']  
    });

  }


  onSelectedFile(event){
    if(event.target.file.length > 0){
      const file = event.target.file[0];
      this.blogForm.get('image').setValue(file);
    }  
  }

  get title() { 
    return this.blogForm.get('title'); 
  }

  get description() { 
    return this.blogForm.get('description'); 
  }


  onSubmit(){
    const formdata = new FormData();
    formdata.append('title', this.blogForm.get('title').value);
    formdata.append('description', this.blogForm.get('description').value);
    formdata.append('is_featured', this.blogForm.get('is_featured').value);
    formdata.append('is_active', this.blogForm.get('is_active').value);
    formdata.append('image', this.blogForm.get('image').value);

    const id = this.blogForm.get('id').value;

    if (id) {
      this.blogService.updateBlog(formdata, +id).subscribe({
        next:(res) => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/blogs']);
          }
        },
        error:(err) => {
          this.error = err
        },
        complete:() => {}

      })
    }else{

      this.blogService.createBlog(formdata).subscribe({
        next:(res) => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/blogs']);
          }
        },
        error:(err) => {
          this.error = err
        },
        complete:() => {}
      })
    }



  }



}
