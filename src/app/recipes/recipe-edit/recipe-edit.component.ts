import { RecipeService } from './../recipe.service';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray,Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm : FormGroup;

  constructor(private route : ActivatedRoute, private recipeService : RecipeService, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let ingredients = new FormArray([]);
    
    
    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingredients']) {
        for(let ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
            'name' : new FormControl(ingredient.name,Validators.required),
            'amount' : new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(imagePath,Validators.required),
      'description' : new FormControl(description,Validators.required),
      'ingredients' :ingredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount' :new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onSubmit() {
    console.log('submitting');
    if(this.editMode) {
      console.log('editing');
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }
    else {
      console.log('adding');
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
    
  }


  onCancel() {
    this.router.navigate(['/recipes']);
    
  }

  onRemoveIngredient(index : number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
