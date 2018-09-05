import { NgModule, ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@NgModule({
    imports: [
    ],
    declarations: [
    HeaderComponent],
    exports: [
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
