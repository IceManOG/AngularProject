import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAf99Qm_2Cb5n8BGVBKIutgVg2ZyXdHwSU",
      authDomain: "ng-recipe-book-3d9fb.firebaseapp.com"  
    })
  }
}
