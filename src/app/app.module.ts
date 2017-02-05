import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { ResultsComponent } from './results/results.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';

@NgModule({
declarations: [
		AppComponent,
		SearchComponent,
		ResultsComponent,
		NavbarComponent,
		ModalComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [
		ModalService,
		SearchService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
