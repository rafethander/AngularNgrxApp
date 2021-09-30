import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxPopupModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInformationComponent } from './Components/user-information/user-information.component';
import { UserInformationDetailComponent } from './Components/user-information/user-information-detail/user-information-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './Store/Reducers';


@NgModule({
  declarations: [
    AppComponent,
    UserInformationComponent,
    UserInformationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    HttpClientModule,
    DxPopupModule,
    ReactiveFormsModule,
    StoreModule.forRoot({users: userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
