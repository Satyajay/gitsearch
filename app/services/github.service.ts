import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = 'ebd9ae0fafecf46f359b';
    private client_secret = 'd56c6845fa0adadc8f1393c5e95d3dfd678be6f1';

    constructor(private _http: Http) {
        console.log('Github Service Started');
        this.username = 'satyajay';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    updateUser(username: string) {
        this.username = username;
    }
}