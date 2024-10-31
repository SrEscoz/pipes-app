import {Component} from '@angular/core';

@Component({
	selector: 'app-basic-page',
	templateUrl: './basic-page.component.html',
	styles: ``
})
export class BasicPageComponent {

	public nameLower = 'Escoz';
	public nameUper = 'ESCOZ';
	public fullName = 'EScoz VILches';

	public primaryBorder = {
		'border': '1px solid var(--primary-color)'
	};

}
