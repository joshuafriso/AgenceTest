import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert  } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { User } from '../../models/user';

import { UserDaoProvider } from '../../providers/user-dao/user-dao';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public userName: string;
  public password: string;
  public confirmPwd: string;

  private _alert: Alert;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private _alertCtrl: AlertController,
  private _userDao: UserDaoProvider) {
  }

  doLogin() {
    console.log(this.userName);
    console.log(this.password);
    console.log(this.confirmPwd);

    if(this.password != this.confirmPwd){
      this._alertCtrl.create({
        title: 'Password don´t match!',
        buttons:[
          { text: 'Ok'}
        ]
      }).present();
      
      return;

    }

    let userReg: User = {
      userName: this.userName,
      password: this.password,
      confirmPwd: this.confirmPwd
    };

    this._userDao.isDuplicate(userReg).then(back => {
      if (back) {
        this._alertCtrl.create({
        title: 'User already exist!',
        buttons:[
          { text: 'Ok'}
        ]
      }).present();
      return;
      } else {
        this._userDao.save(userReg).then(back =>{
          this._alertCtrl.create({
        title: 'User saved!',
        buttons:[
          { text: 'Ok',
            handler: () => {
              this.navCtrl.setRoot(LoginPage);
            }
          }
        ]
      }).present();
      return;
        });
      }
    })     
  }

  goLogin(){
  this.navCtrl.setRoot(LoginPage);
  }

}
