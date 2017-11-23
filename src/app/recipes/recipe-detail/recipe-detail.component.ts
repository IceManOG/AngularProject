import { ShoppingListService } from './../../shopping-list/shoppinglist.service';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe = this.recipeService.recipes[0];

  constructor(private recipeService : RecipeService, private shoppingService : ShoppingListService) { 
   
  }

  ngOnInit() {
    this.recipeService.recipeWasSelected.subscribe(
      (recipeSelected : Recipe) => { this.recipe = recipeSelected}
    );
  }

  addToShoppingList() {
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

}
