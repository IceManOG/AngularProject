import { Recipe } from './recipes/recipe.model';
import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { RecipeService } from './recipes/recipe.service';


@Injectable()
export class HttpService {

    constructor(private http : Http,private recipeService : RecipeService) {}

    storeRecipe() {
        return this.http.put('https://ng-recipe-book-3d9fb.firebaseio.com/recipes.json',this.recipeService.recipes);
    }

    fetchRecipes() {
        return this.http.get('https://ng-recipe-book-3d9fb.firebaseio.com/recipes.json')
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