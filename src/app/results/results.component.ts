import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { ModalService } from '../modal/modal.service';
import { SearchService } from '../search/search.service';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
	@HostBinding('class.accepted')
	isAnswered: boolean;

	@Input()
	question: any;

	acceptedAnswer: any;
	answers: any[];

	constructor(private modalService: ModalService, private searchService: SearchService) { }

	ngOnInit() {
		if (this.question.answer_count > 0) {
			this.isAnswered = true;

			this.searchService
			.getAnswer(this.question.question_id)
			.subscribe(res => {
				this.answers = res.items;
				this.acceptedAnswer = res.items.find(item => item.is_accepted);
			});
		}
	}

	showAnswers() {
		if (!this.isAnswered) {
			return;
		}

		this.modalService.open(this.question.title, this.answers.map(d => d.body));
	}

}
