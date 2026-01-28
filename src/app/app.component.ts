import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RecipeListingComponent } from './components/recipe-listing/recipe-listing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RecipeListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe_app';
}
