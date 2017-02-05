import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
	private baseSearchUrl = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=';

	constructor(private http: Http) {}

	search(query: string) {
		return this.http
		.get(this.baseSearchUrl + query)
		.map(res => res.json());
	}

	getAnswer(questionId: number) {
		return this.http
		.get(this.makeFullAnswerUri(questionId))
		.map(res => res.json());
	}

	private makeFullAnswerUri(questionId: number) {
		return `https://api.stackexchange.com/2.2/questions/${questionId.toString()}/answers?order=desc&sort=activity&site=stackoverflow&filter=withBody`;
	}
}
