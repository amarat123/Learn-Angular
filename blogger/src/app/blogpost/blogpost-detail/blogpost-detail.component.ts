import { Component, OnInit } from '@angular/core';
    import { Router, ActivatedRoute, ParamMap} from '@angular/router';
    import { BlogpostService } from '../blogpost.service';
    import { Blogpost } from '../blogpost';
    import { Title } from '@angular/platform-browser';
    import { Observable } from 'rxjs';
    import { switchMap } from 'rxjs/operators';

    @Component({
      selector: 'app-blogpost-detail',
      templateUrl: './blogpost-detail.component.html',
      styleUrls: ['./blogpost-detail.component.css']
    })
    export class BlogpostDetailComponent implements OnInit {

      //blog$: Observable<Blogpost>;
      blog$: any;     
      blogId : any;

      constructor(
        private route: ActivatedRoute,
        private router: Router,
        private blogpostService: BlogpostService,
        private titleService: Title,
      ) { 
        }

      ngOnInit() {
        this.titleService.setTitle('Blog Detail');
        this.getBlogDetail();
      }


      getBlogDetail(){
        /*
        this.blog$ = this.route.paramMap.pipe(
          switchMap((params: ParamMap) =>
            //this.blogpostService.getBlog(+params.get('id'))
            this.blogpostService.getBlog(2)
          )
        );
        */
        this.blogId = this.route.snapshot.paramMap.get('id');

        this.blogpostService.getBlog(this.blogId).subscribe( 
          (data: Blogpost) => this.blog$ = data
        )
      }





    }

    