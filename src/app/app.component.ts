import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
	title = 'pipes-app';

	constructor(private primeConfig: PrimeNGConfig) {
	}

	ngOnInit(): void {
		this.primeConfig.ripple = true;
	}
}
