import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Message } from './db-messages';
import { MessageService } from './db-messages.service';

@Component
({
	selector: 'app-message-detail',
	templateUrl: './db-messages-detail.component.html',
	styleUrls: ['./db-messages-detail.component.css']
})// end @Component

export class MessageDetailComponent implements OnInit
{
	message: Message;

	constructor
	(
		private messageService: MessageService,
		private route: ActivatedRoute,
		private location: Location
	) {}// end constructor

	ngOnInit(): void
	{
		let curId = window.location.href;
		this.route.params.subscribe((params: ParamMap) =>
		{
			curId = params['_id'];
		});

		this.messageService.getMessage(curId).subscribe((messages) =>
		{
			this.message = messages[0];
		});
	}// end ngOninit()

	goBack(): void
	{
		this.location.back();
	}// end goBack()
}// end class MessageDetailComponent
