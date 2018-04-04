import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MessageSearchService } from './db-messages-search.service';
import { Message } from './db-messages';

@Component
({
	selector: 'app-message-search',
	templateUrl: './db-messages-search.component.html',
	styleUrls: [ './db-messages-search.component.css' ],
	providers: [MessageSearchService]
})// end Component

export class MessageSearchComponent implements OnInit
{
	messages: Observable<Message[]>;
	private searchTerms = new Subject<string>();

	constructor
	(
		private messageSearchService: MessageSearchService,
		private router: Router
	) {}// end constructor

	// Push a search term into the observable stream.
	search(term: string): void
	{
		this.searchTerms.next(term);
	}// end search()

	ngOnInit(): void
	{
		this.messages = this.searchTerms
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(term => term
			? this.messageSearchService.search(term)
			: Observable.of<Message[]>([]))
			.catch(error =>
			{
				console.log(error);
				return Observable.of<Message[]>([]);
			}); // end this.distinctUntilChanged()
	}// end ngOnInit()

	gotoDetail(message: Message): void
	{
		const link = ['/detail', message._id];
		this.router.navigate(link);
	}// end gotoDetail()
}// end class MessageSearchComponent
