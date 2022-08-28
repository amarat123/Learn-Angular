import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  //categories: Category;
  categories: any;
  //error: {};

  constructor(
    private blogpostService: BlogpostService,
    //public categories: Category
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.blogpostService.getCategories().subscribe(
      (data: Category) => this.categories = data
    );  
  }

}
