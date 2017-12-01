import { HomeComponent } from './core/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';


const appRoutes : Routes = [
    {path : '',component : HomeComponent}, 
    {path : 'recipes', loadChildren : './recipes/recipes.module#RecipesModule'}       
];
    
@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules})
    ],
    exports : [RouterModule]
})
export class AppRoutingModule {}