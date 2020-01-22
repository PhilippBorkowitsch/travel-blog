import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import { BlogEntriesService } from "../blog-entries.service";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-form-new-post",
  templateUrl: "./form-new-post.component.html",
  styleUrls: ["./form-new-post.component.sass"]
})
export class FormNewPostComponent implements OnInit {
  @ViewChild("content", { static: false }) content: TemplateRef<NgbModalRef>;
  constructor(
    private modalService: NgbModal,
    private _bes: BlogEntriesService,
    private _router: Router
  ) {}

  ngOnInit() {}

  open() {
    this.modalService.open(this.content, {size: 'lg'});
  }

  addPost(password, author, title, post, date, citation, song, images) {
    let userid;
    if (password == "test123") {
      if (author == "Andrea") {
        userid = 1;
      } else if (author == "Philipp") {
        userid = 2;
      } else {
        userid = null;
      }

      this._bes
        .addNewPost(title, post, date, citation, song, userid)
        .subscribe(newPost => {
          // images need to be added still, doesn't work yet
          if (images != null) {
            images.forEach(img => {
              this._bes
                .addNewImage(img.name, img.description, 1)
                .subscribe(newImage => {
                  this.redirect(userid);
                });
            });
          } else {
            this.redirect(userid);
          }
        });
    } else {
      console.log("this is not a valid password");
    }
  }

  redirect(authorId) {
    // sollte so geändert werden, dass nur das /newpost wieder gelöscht wird
    if (authorId == 1) {
      this._router.navigate(["./"]);
    } else if (authorId == 2) {
      this._router.navigate(["philippsblog"]);
    } else {
      this._router.navigate(["mainpage"]);
    }
  }
}
