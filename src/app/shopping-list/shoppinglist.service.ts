import { Ingredient } from './../shared/ingredient.model';
import { RecipeService } from "./../recipes/recipe.service";
import { Recipe } from "./../recipes/recipe.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeWasSelected.subscribe(
      (ingredients: Ingredient[]) => {
        for (var ingredient of ingredients) {
          this.ingredients.push(ingredient);
        }
      }
    );
  }

  addIngredients(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
