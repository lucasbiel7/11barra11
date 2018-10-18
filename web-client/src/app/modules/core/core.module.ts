import { NgModule, ModuleWithProviders } from '@angular/core';
/* Angular Core */
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Angular Material Design */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Angular Material Design - Forms */
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
/* Angular Material Design - Navigation */
import { MatSidenavModule } from '@angular/material/sidenav';
/* Angular Material Design - Layout */
/* Angular Material Design - Buttons & Indicators */
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
/* Angular Material Design - Popups & Modals */
/* Angular Material Design - Data table */


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
