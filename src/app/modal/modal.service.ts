import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
	isOpen: boolean;
	title: string;
	bodies: string[];

	constructor() {}

	open(title?: string, bodies?: string[]): void {
		this.isOpen = true;
		this.title = title;
		this.bodies = bodies;
	}

	close(): void {
		this.isOpen = false;
	}
}
