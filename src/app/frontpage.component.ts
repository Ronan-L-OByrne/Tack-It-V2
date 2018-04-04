import { Component, OnInit } from '@angular/core';

import { Message } from './db-messages';
import { MessageService } from './db-messages.service';

@Component
({
	selector: 'app-frontpage',
	templateUrl: './frontpage.component.html',
	styleUrls: ['./frontpage.component.css']
})// end @Component

export class FrontpageComponent implements OnInit
{
	messages: Message[] = [];

	constructor(private messageService: MessageService) { }

	ngOnInit(): void
	{
		this.messages = [];
		this.messageService.getMessages().subscribe((messages) =>
		{
			this.messages = messages;
		});
	}// end ngOnInit
}// end DasboardComponent
