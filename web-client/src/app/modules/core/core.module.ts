import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
    imports: [
        SharedModule.forRoot(),
        /* Angular Material Design */
        CoreRoutingModule
    ],
    exports: [
    ],
    declarations: []
})
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
