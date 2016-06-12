import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/services/index';
import { IJoke } from '../shared/interfaces/index';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: string[];
  public jokeOfCategory: IJoke[];

  constructor(private jokeSvc: JokeService) {}

  ngOnInit() {
    this.jokeSvc.getCategories().subscribe(
      success => {this.categories = success}
    )
  }

  getJokesFromCategory(category: string) {
    this.jokeSvc.getJokesByCategories(category).subscribe(
      success => { this.jokeOfCategory = success }
    )
  }

}
