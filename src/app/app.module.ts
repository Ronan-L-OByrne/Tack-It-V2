// Import @angular/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import Routing
import { AppRoutingModule } from './app-routing.module';

// Import Components
import { AppComponent } from './app.component';
import { MessageDetailComponent } from './db-messages-detail.component';
import { MessageComponent } from './db-messages.component';
import { MessageSearchComponent } from './db-messages-search.component';
import { FrontpageComponent } from './frontpage.component';

// Import Database Service
import { MessageService } from './db-messages.service';

@NgModule
({
	imports:
	[
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	], // end Imports[]
	declarations:
	[
		AppComponent,
		FrontpageComponent,
		MessageComponent,
		MessageDetailComponent,
		MessageSearchComponent,
	], // end declarations[]
	providers:
	[
		MessageService
	], // end providers[]
	bootstrap:
	[
		AppComponent
	] // end bootstrap[]
}) // end NgModule()

export class AppModule{ }// end class AppModule
