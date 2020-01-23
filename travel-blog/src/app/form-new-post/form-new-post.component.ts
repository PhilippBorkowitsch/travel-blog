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

  // images-array
  images = [];

  constructor(
    private modalService: NgbModal,
    private _bes: BlogEntriesService,
    private _router: Router
  ) {}

  ngOnInit() {}

  open() {
    this.images = [];
    this.modalService.open(this.content, { size: "lg" });
  }

  addPost(password, author, title, post, date, citation, song) {
    let userid;
    // the process.env doesn't work
    if (password == "sB4q?tzpya%") {
      if (author == "Andrea") {
        userid = 1;
      } else if (author == "Philipp") {
        userid = 2;
      } else {
        alert("This author does not exist!");
        userid = 0;
      }

      if (citation == "") {
        citation = null;
      }

      if (song == "") {
        song = null;
      }

      this._bes
        .addNewPost(title, post, date, citation, song, userid)
        .subscribe(newPost => {
          let newPostParam = JSON.parse(JSON.stringify(newPost));
          // description of images need to be added still, doesn't work yet
          if (this.images != null) {
            this.images.forEach(img => {
              //console.log(img);
              this._bes
                .addNewImage(
                  img.name,
                  /*img.description*/ null,
                  newPostParam.id
                )
                .subscribe(newImage => {
                  this.redirect(userid);
                });
            });
          } else {
            this.redirect(userid);
          }
        });
    } else {
      alert("this is not a valid password");
    }
  }

  redirect(authorId) {
    // sollte so geändert werden, dass nur das /newpost wieder gelöscht wird
    if (authorId == 1) {
      this._router.navigate(["mainpage"]);
    } else if (authorId == 2) {
      this._router.navigate(["mainpage"]);
    } else {
      this._router.navigate(["mainpage"]);
    }
  }

  addImages(event) {
    //console.log(event.target.files[0]);
    //console.log(event.target.files[0].name);
    this.images.push(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  onUpload() {
    // upload code goes here
  }

  addDescription(image, description) {
    // this is not working, needs a concept.
  }
}
