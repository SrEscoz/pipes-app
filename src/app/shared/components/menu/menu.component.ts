import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
	selector: 'shared-menu',
	templateUrl: './menu.component.html',
	styles: `
        img {
            height: 50px;
            margin-right: 10px
        }
	`
})
export class MenuComponent implements OnInit {

	public items: MenuItem[] = [];

	ngOnInit(): void {
		this.items = [
			{
				label: 'Pipes de Angular',
				icon: 'pi pi-desktop',
				items: [
					{
						label: 'Textos y Fechas',
						icon: 'pi pi-align-left',
						routerLink: '/'
					},
					{
						label: 'Números',
						icon: 'pi pi-dollar',
						routerLink: 'numbers'
					},
					{
						label: 'Poco cumunes',
						icon: 'pi pi-globe',
						routerLink: 'uncommon'
					}
				]
			},
			{
				label: 'Pipes Personalizados',
				icon: 'pi pi-cog',
				items: [
					{
						label: 'Otro elemento',
						icon: 'pi pi-cog',
					},
					{
						label: 'Otro elemento',
						icon: 'pi pi-cog',
					}
				]
			}
		];
	}

}
