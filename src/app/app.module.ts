import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PostService } from "./services/post.service";
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
