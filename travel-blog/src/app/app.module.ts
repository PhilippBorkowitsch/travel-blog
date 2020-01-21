import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { BlogAComponent } from "./blog-a/blog-a.component";
import { BlogPComponent } from "./blog-p/blog-p.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BlogEntryComponent } from "./blog-entry/blog-entry.component";
import { HttpClientModule } from "@angular/common/http";
import { NgImageSliderModule } from "ng-image-slider";
import { BlogCommentComponent } from "./blog-comment/blog-comment.component";
import { FormNewPostComponent } from "./form-new-post/form-new-post.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BlogEntriesService } from "./blog-entries.service";
import { ShareDataService } from "./share-data.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    BlogAComponent,
    BlogPComponent,
    PageNotFoundComponent,
    BlogEntryComponent,
    BlogCommentComponent,
    FormNewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgImageSliderModule,
    NgbModule
  ],
  providers: [BlogEntriesService, ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
