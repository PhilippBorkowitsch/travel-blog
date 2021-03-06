import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { BlogAComponent } from "./blog-a/blog-a.component";
import { BlogPComponent } from "./blog-p/blog-p.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BlogEntryComponent } from "./blog-entry/blog-entry.component";
import { FormNewPostComponent } from "./form-new-post/form-new-post.component";

const routes: Routes = [
  //if path empty, should be redirected to main or Login if user is logged out
  {
    path: "",
    redirectTo: "mainpage",
    pathMatch: "full"
  },
  {
    path: "mainpage",
    component: MainPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "andisblog",
    component: BlogAComponent,
    children: [
      {
        path: "newpost",
        component: FormNewPostComponent
      }
    ],
    runGuardsAndResolvers: "always"
  },
  {
    path: "philippsblog",
    component: BlogPComponent,
    children: [
      {
        path: "newpost",
        component: FormNewPostComponent
      }
    ],
    runGuardsAndResolvers: "always"
  },
  {
    path: "post/:date",
    component: BlogEntryComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
