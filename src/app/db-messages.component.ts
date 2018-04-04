import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AppComponent } from './app.component';
import { Message } from './db-messages';
import { MessageService } from './db-messages.service';

@Component
({
	selector: 'app-messages',
	templateUrl: './db-messages.component.html',
	styleUrls: ['./db-messages.component.css']
})// end @Component

export class MessageComponent implements OnInit
{
	messages: Message[];
	selectedMessage: Message;

	constructor
	(
		private router: Router,
		private messageService: MessageService
	){}// end constructor

	ngOnInit(): void
	{
		this.getMessages();
	}// end ngOnInit()

	getMessages(): void
	{
		this.messageService.getMessages().subscribe((messages) =>
		{
			this.messages = messages;
		});
	}// end getMessages()

	add(nme: string, msg: string): void
	{
		if ( nme === '' || msg === '' )
		{
			return;
		}// end if
		else
		{
			let temp = new Message;
			temp.title = nme;
			temp.message = msg;

			this.messageService.create(temp).subscribe((message) =>
			{
				console.log(message);
			});

			this.getMessages();
		}// end else
	}// end add()

	onSelect(message: Message): void
	{
		this.selectedMessage = message;
	}// end OnSelect()

	gotoDetail(): void
	{
		this.router.navigate(['/detail', this.selectedMessage._id]);
	}// end gotoDetail()
}// end export class MessagesComponent


