import { Routes } from '@angular/router';
import { RecipeListingComponent } from './components/recipe-listing/recipe-listing.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

export const routes: Routes = [
  {
    path: '',
    component: RecipeListingComponent,
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent,
  },
];
