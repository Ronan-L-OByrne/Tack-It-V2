import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontpageComponent } from './frontpage.component';
import { MessageComponent } from './db-messages.component';
import { MessageDetailComponent } from './db-messages-detail.component';

const routes: Routes =
[
	{ path: '', redirectTo: '/frontpage', pathMatch: 'full' },
	{ path: 'frontpage', component: FrontpageComponent },
	{ path: 'detail/:_id', component: MessageDetailComponent },
	{ path: 'messages', component: MessageComponent }
];

@NgModule
({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule
{

}// end class AppRoutingModule
