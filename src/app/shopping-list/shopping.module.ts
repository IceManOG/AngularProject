import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping.routing.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports : [
        ShoppingRoutingModule,
        CommonModule,
        FormsModule
    ]
})
export class ShoppingModule {

}