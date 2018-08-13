import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserDaoProvider } from '../../providers/user-dao/user-dao';

@IonicPage()
@Component({
  selector: 'page-list-users',
  templateUrl: 'list-users.html',
})
export class ListUsersPage {

  public users: User[];

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public viewCtrl: ViewController,
  public _userDao: UserDaoProvider) {
    this._userDao.listAll().then(users => this.users = users );
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Home');
  }

}
