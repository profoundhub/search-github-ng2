import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username; // Github Username
  constructor(private _http:Http){
  }

  // Get User Profile Info
  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username)
      .map(res => res.json());
  }

  // Get User Repos
  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
      .map(res => res.json());
  }

  // Update User Names
  updateUser(username) {
  this.username = username;
  }
  
}
