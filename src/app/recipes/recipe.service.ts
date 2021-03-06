import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';
import { Output,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {
    // recipes: Recipe[] = [
    //     new Recipe('French fries',
    //     'Very tasty',
    //       'http://chatteringkitchen.com/wp-content/uploads/2011/07/French-Fries.jpg',
    //       [new Ingredient('Oil', 5),new Ingredient('Potato', 10)]
    //     ),
    //     new Recipe('Donut',
    //      'Soft and sweet',
    //       'https://livinginpursuit.files.wordpress.com/2014/02/assorted-donuts.jpg',
    //     [new Ingredient('Chocolate', 10),new Ingredient('Sugar', 15)])
    //   ];
      recipes: Recipe[] = [];

 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 recipeFetched = new Subject();
 
 
 getRecipe(pos : number) {
   return this.recipes[pos];
 }

 addRecipe(recipe : Recipe) {
  this.recipes.push(recipe);
 }
      
 updateRecipe(index : number,recipe : Recipe) {
  this.recipes[index] = recipe;
 }

 deleteRecipe(index : number) {
    this.recipes.splice(index,1)
 }

}