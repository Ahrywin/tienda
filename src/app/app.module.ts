import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ShareModuleModule } from './components/modules/share-module/share-module.module';
import { LayoutComponent } from './Layout/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserTableComponent } from './components/user-table/user-table.component';
import { TiendasTableComponent } from './components/tiendas-table/tiendas-table.component';
import { ArticleTableComponent } from './components/article-table/article-table.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { HttpClientModule } from '@angular/common/http';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UserTableComponent,
    TiendasTableComponent,
    ArticleTableComponent,
    ClientFormComponent,
    SnackbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModuleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
