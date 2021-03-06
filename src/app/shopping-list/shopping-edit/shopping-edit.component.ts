import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('form')  form : NgForm;
  editingSubject : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;

  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit() {
    this.editingSubject = this.shoppingService.startedEditing.subscribe(
      (id : number) => {
        this.editedItemIndex = id;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(id);
        this.form.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount

        });
      }
    )
  }

  onSubmit(form : NgForm) {
    const value = form.value ;
    const ingredient = new Ingredient(value.name, value.amount);

    if(!this.editMode){
      this.shoppingService.addIngredient(ingredient);
    }
    else {
      this.shoppingService.editIngredient(this.editedItemIndex,ingredient);
    }
    this.form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.editingSubject.unsubscribe();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;    
  }

  onDelete() {
    this.onClear();
    this.shoppingService.deleteIngredient(this.editedItemIndex);
  }

}
