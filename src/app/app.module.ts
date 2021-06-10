import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { EditStudentComponent } from './edit-student/edit-student.component'
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    AddStudentComponent,
    NotfoundComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
