import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-listing',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-listing.component.html',
  styleUrl: './recipe-listing.component.css',
})
export class RecipeListingComponent {
  recipeData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://forkify-api.herokuapp.com/api/v2/recipes?search=apple')
      .subscribe((responce) => {
        this.recipeData = responce;
      });
  }
}
