import { ShoppingListComponent } from './shopping-list.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';




const shoppingRoutes : Routes = [     
    {path : 'shopping-list', component : ShoppingListComponent}    
]
    
@NgModule({
    imports : [
        RouterModule.forChild(shoppingRoutes)
    ],
    exports : [RouterModule]
})
export class ShoppingRoutingModule {}