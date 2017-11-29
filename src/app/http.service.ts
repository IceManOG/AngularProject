import { Recipe } from './recipes/recipe.model';
import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { RecipeService } from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';


@Injectable()
export class HttpService {

    constructor(private http : Http,private recipeService : RecipeService, private authService : AuthService) {}

    storeRecipe() {
        const token = this.authService.getToken();        
        return this.http.put('https://ng-recipe-book-3d9fb.firebaseio.com/recipes.json?auth=' + token   ,this.recipeService.recipes);
    }

    fetchRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://ng-recipe-book-3d9fb.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (response : Response) => {
                const recipes : Recipe[] = response.json();
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