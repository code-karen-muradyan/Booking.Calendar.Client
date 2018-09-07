import { NgModule, ModuleWithProviders } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
// Services
import { DataService } from './services/data.service';
import { SecurityService } from './services/security.service';
import { ConfigurationService } from './services/configuration.service';
import { StorageService } from './services/storage.service';
import { LoaderService } from './services/loader.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot(),
        AngularDateTimePickerModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
    HeaderComponent],
    exports: [
        MDBBootstrapModule,
        AngularDateTimePickerModule,
        HeaderComponent
    ],
    providers: [
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                DataService,
                SecurityService,
                ConfigurationService,
                StorageService,
                LoaderService
            ]
        };
    }
}
