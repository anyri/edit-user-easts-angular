import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { UsersService } from './services/users.service';

import { UsersListComponent } from './users/users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    HeaderComponent,
    EditUserComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    TabsModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
