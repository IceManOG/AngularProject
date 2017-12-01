import { Recipe } from './recipes/recipe.model';
import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { RecipeService } from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http : HttpClient,private recipeService : RecipeService, private authService : AuthService) {}

    storeRecipe() {
        const token = this.authService.getToken();        
        return this.http.put('https://ng-recipe-book-3d9fb.firebaseio.com/recipes.json?auth=' + token   ,this.recipeService.recipes);
    }

    fetchRecipes() {
        const token = this.authService.getToken();
        return this.http.get<Recipe[]>('https://ng-recipe-book-3d9fb.firebaseio.com/recipes.json?auth=' + token).map(
            (recipes) => {
                for(let recipe of recipes) {
                    if (!recipe['ingredients'])
                    recipe['ingredients'] =[];
                }
                return recipes;
            }
        )
        
        .subscribe(
            (recipes : Recipe[]) => {
                this.recipeService.recipes = recipes;
                this.recipeService.recipeFetched.next();              
            }
        );
    }
}