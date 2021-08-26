import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'table', component: TablePageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TablePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
