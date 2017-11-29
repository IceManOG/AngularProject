import { AuthService } from './../auth/auth.service';
import { HttpService } from '../http.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {



  constructor(private recipeService : RecipeService,private http : HttpService, public authService: AuthService) {}

  onSaveData() {
    this.http.storeRecipe().subscribe(
      (response : Response) => console.log(response)
    );
  }

  onFetchData() {
    this.http.fetchRecipes();
  }

  onLogout() {
    this.authService.logOut();
  }
}
