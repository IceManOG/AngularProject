import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { ActivatedRoute, Params,Router } from "@angular/router";
import { ShoppingListService } from "./../../shopping-list/shoppinglist.service";
import { Component, OnInit, Input } from "@angular/core";

import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = this.recipeService.recipes[0];
  id : number;

  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      console.log(this.recipeService.recipes);
      console.log(this.id);
     this.recipe = this.recipeService.recipes[this.id];
    });

    
  }

  addToShoppingList() {
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo : this.route})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes']);
  }
}
