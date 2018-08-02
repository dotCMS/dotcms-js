import {Component, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {SiteBrowserState} from '../../core/util/site-browser.state';
import {JWTAuthService} from '../../core/util/jwt-auth.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'my-app',
    styleUrls: [
        './app.component.css',
        '../assets/css/prism.css',
        '../../node_modules/primeng/resources/themes/omega/theme.css',
        '../../node_modules/primeng/resources/primeng.min.css'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {
    private items: MenuItem[];

    constructor(private updateService: SiteBrowserState, authService: JWTAuthService) {
        authService.login('http://demo37.dotcms.com', 'admin@dotcms.com', 'admin').subscribe(token => {
        }, (err) => {
        });
    }

    ngOnInit() {
        // For showcase purposes, we initialize a host by default
        // this.updateService.changeSite(new Site'demo.dotcms.com');

        this.items = [
            {
                label: 'Introduction',
                routerLink: ['']
            },
            {
                label: 'Breadcrumb',
                routerLink: ['breadcrumb']
            },
            {
                label: 'Site Datatable',
                routerLink: ['site-datatable']
            },
            {
                label: 'Site Selector',
                routerLink: ['site-selector']
            },
            {
                label: 'Site Treetable',
                routerLink: ['site-treetable']
            },
            {
                label: 'Treeable Detail',
                routerLink: ['treable-detail']
            }
        ];
    }
}
