import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {}

  signIn() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(googleProvider);
  }
  signOut() {
    this.auth.signOut();
  }
}
