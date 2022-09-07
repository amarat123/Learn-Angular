import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CmspageService } from '../cmspage.service';
import { Page } from '../page';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  //page: Page;
  page: any;
  error: {};
  //error: any;

  pageSlug : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cmspageService: CmspageService
  ) { }

  ngOnInit(): void {
    this.getPageDetail();
  }

  getPageDetail(){
    /*
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cmspageService.getPage(params.get('slug'))
      )
    ).subscribe(
      (data: Page) => this.page = data,
      error => this.error = error
    );
    */

    this.pageSlug = this.route.snapshot.paramMap.get('slug');
    alert(this.pageSlug);
    this.cmspageService.getPage(this.pageSlug).subscribe({
      //(data: Page) => this.page = data

      next: (res) => {
        this.page = res
      },
      error: (err) => {
        this.error = err
      },
      complete: () => {}

    })

      console.log('page_detail',this.page)

  }


}
