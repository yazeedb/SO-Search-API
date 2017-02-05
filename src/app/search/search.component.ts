import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	@Output()
	searchEmitted = new EventEmitter();

	emitSearch(query: string) {
		if (!query || !query.length) {
			return;
		}

		this.searchEmitted.emit(query);
	}
}
