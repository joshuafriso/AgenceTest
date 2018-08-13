import { Injectable } from '@angular/core';
import { User } from '../../models/user';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDaoProvider {

  constructor(private _storage: Storage) {
  }

  private _generateKey(user: User){
    return user.userName;
  }

  save(user: User){
    let key = this._generateKey(user);
    let promise = this._storage.set(key, user);

    return promise;
  }

  recover(user: User){
    let promise = this._storage.get(user.userName);

    return promise;
  }

  isDuplicate(user: User){
    let key = this._generateKey(user);
    let promise = this._storage.get(key);

    return promise;
  }

  listAll(){
    let users: User[] = [];

    let promise = this._storage.forEach((user: User) => {
      users.push(user);
    }).then(() => users);

    return promise;

  }

}
