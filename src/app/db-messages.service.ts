import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Require } from '@types/node';

import 'rxjs/add/operator/toPromise';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { Message } from './db-messages';

@Injectable()
export class MessageService
{
	constructor( private http: Http ){}

	create(mess: Message)
	{
		console.log(mess);
		return this.http.post('/api/togos', mess).map((res) =>
		{
			console.log(res);
			return res;
		});
	}// end add()

	getMessages()
	{
		return this.http.get('/api/messages').map((res) =>
		{
			return res.json();
		});
	}// end getMessages()

	getMessage(id: string)
	{
		return this.http.get('/api/message/' + id).map((res) =>
		{
			console.log(res);
			return res.json();
		});
	}// end getMessage(id)

	private handleError(error: any): Promise<any>
	{
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}// end handleError
}// end class MessageService


