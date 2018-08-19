/* Angular Core */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  imports: [
    /* Angular Core */
    BrowserModule,
    CommonModule,
    HttpModule,
    /* Angular Material Design */
    BrowserAnimationsModule,
    /* Angular Material Design - Forms */
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    /* Angular Material Design - Navigation */
    MatSidenavModule,
    /* Angular Material Design - Layout */
    /* Angular Material Design - Buttons & Indicators */
    MatButtonModule,
    MatProgressBarModule,
    /* Angular Material Design - Popups & Modals */
    /* Angular Material Design - Data table */
  ],
  exports: [
    /* Angular Core */
    BrowserModule,
    CommonModule,
    HttpModule,
    /* Angular Material Design */
    BrowserAnimationsModule,
    /* Angular Material Design - Forms */
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    /* Angular Material Design - Navigation */
    MatSidenavModule,
    /* Angular Material Design - Layout */
    /* Angular Material Design - Buttons & Indicators */
    MatButtonModule,
    MatProgressBarModule,
    /* Angular Material Design - Popups & Modals */
    /* Angular Material Design - Data table */
  ],
  declarations: []
})
export class CoreModule { }
