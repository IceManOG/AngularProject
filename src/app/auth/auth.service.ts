import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class AuthService {
    token : string;

    constructor(private router : Router,private recipeService : RecipeService){}
    signUpUser(email : string, password :string) {
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(
            error => console.log(error)
        );
    }

    signInUser(email : string, password :string) {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken().then(
                    (token :string) => this.token = token
                )
            }
        ).catch(
            error => console.log(error)
        )
    }

    getToken() {
        firebase.auth().currentUser.getToken().then(
            (token :string) => this.token = token
        );
        return this.token;
    }
        
    isAuthenticated() {
        return this.token != null;
    }

    logOut() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/signin']);
        this.recipeService.recipes = [];
    }
}