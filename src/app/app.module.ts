import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; 
import { MatListModule } from '@angular/material/list';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    AboutComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     MatInputModule,
     MatCardModule,
     MatListModule,
     MatGridListModule,
     HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
