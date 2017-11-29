import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,MatFormFieldControl, MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { CorsDialogComponent } from './cors-dialog/cors-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    CorsDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpModule,
    MatDialogModule,
    // MatFormFieldControl,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
