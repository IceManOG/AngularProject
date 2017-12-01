import { Subject } from 'rxjs/Subject';
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
  startedEditing: Subject<number> = new Subject<number>();

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

getIngredient(index : number) {
  return this.ingredients[index];
}

  addIngredients(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
  }

  editIngredient(index:number, ingredient : Ingredient) {
    this.ingredients[index].name = ingredient.name;
    this.ingredients[index].amount = ingredient.amount;
  }

  deleteIngredient(index : number) {
    this.ingredients.splice(index,1);
  }
}
