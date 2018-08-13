import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { DrawPage } from '../draw/draw';
import { ListUsersPage } from '../list-users/list-users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  goDraw(){
    this.navCtrl.push(DrawPage.name);
  }

  goUsers(){
    this.navCtrl.push(ListUsersPage.name);
  }

}
