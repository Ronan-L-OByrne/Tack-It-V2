import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Message } from './db-messages';

@Injectable()
export class MessageSearchService
{
	constructor(private http: Http) {}

	search(term: string): Observable<Message[]>
	{
		return this.http.get('/api/messages/' + term).map((res) =>
		{
			console.log(res);
			return res.json();
		});
	}// end search()
}// end class MessageSearchService
