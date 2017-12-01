import { AuthGuard } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shoppinglist.service';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HttpService } from '../http.service';

@NgModule({
    declarations : [
        HomeComponent,
        HeaderComponent
    ],
    imports : [
        SharedModule,
        AppRoutingModule
    ],
    exports : [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
      ShoppingListService,
      RecipeService,
      HttpService,
      AuthService,
      AuthGuard
    ]
})
export class CoreModule {

}