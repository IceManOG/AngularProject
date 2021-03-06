import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService : RecipeService, private router : Router, private route : ActivatedRoute,private http : HttpService) { }

  ngOnInit() {
      this.recipeService.recipeFetched.subscribe(
        ()=> {
          this.recipes = this.recipeService.recipes;
        }
      );
      this.recipes = this.recipeService.recipes;      
  }

  onRecipeSelected(recipe: Recipe) {
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo : this.route});
  }
}