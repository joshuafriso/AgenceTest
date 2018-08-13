import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert  } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { HomePage } from '../home/home';

import { UserDaoProvider } from '../../providers/user-dao/user-dao';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public userName: string;
  public password: string;
  public confirmPwd: string;

  private _alert: Alert;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private _alertCtrl: AlertController,
  private _userDao: UserDaoProvider) {
  }

doLogin(){

  let userLogin: User = {
    userName: this.userName,
    password: this.password,
    confirmPwd: this.confirmPwd
  };

  this._userDao.recover(userLogin)
  .then((returnUser) => {
    console.log(returnUser);
    if (!returnUser || returnUser.password != userLogin.password) {
      console.log('error: invalid password');
      this._alertCtrl.create({
        title: 'Incorrect user/password combination.',
        buttons:[
          { text: 'Ok'}
        ]
      }).present();
      
      return;
    } else { 
      console.log('success');
      this.navCtrl.setRoot(HomePage);
    }
  })

}

goRegister(){
  this.navCtrl.setRoot(RegisterPage);
}

}
