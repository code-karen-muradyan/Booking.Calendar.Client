import { NgModule, ModuleWithProviders } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot(),
        AngularDateTimePickerModule
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
            ]
        };
    }
}
