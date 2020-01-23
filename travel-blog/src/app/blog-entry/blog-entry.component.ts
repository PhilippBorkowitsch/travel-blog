import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgImageSliderComponent } from "ng-image-slider";
import { ShareDataService } from "../share-data.service";
import { BlogEntriesService } from "../blog-entries.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-blog-entry",
  templateUrl: "./blog-entry.component.html",
  styleUrls: ["./blog-entry.component.sass"]
})
export class BlogEntryComponent implements OnInit {
  // für die Foto Slideshow
  @ViewChild("nav", { static: false }) slider: NgImageSliderComponent;

  // die Blogpost Daten im JSON Format
  private postData;
  public comments;
  private imageObject = [];

  constructor(
    private _sds: ShareDataService,
    private _bes: BlogEntriesService,
    private _router: Router
  ) {}

  ngOnInit() {
    console.log(this.imageObject);
    this.postData = this._sds.getPostData();
    this._bes.getCommentsOfPost(this.postData.id).subscribe(comArray => {
      this.comments = comArray;
    });
    this._bes.getImagesOfPost(this.postData.id).subscribe(imgArray => {
      let tempImgArray = JSON.parse(JSON.stringify(imgArray));
      tempImgArray.forEach(img => {
        this.imageObject.push({
          image:
            "https://api.irblog.wuest.dev/images/" + img.imageName + ".png",
          thumbImage:
            "https://api.irblog.wuest.dev/images/" +
            img.imageName +
            ".png" /*,
          description: img.description*/
        });
      });
    });
  }

  createNewComment(name, comment) {
    if (name != "" && comment != "") {
      this._bes
        .addNewComment(comment, name, this.postData.id, null)
        .subscribe(newCom => {
          this.comments.push(newCom);
        });
    } else {
      alert("you have to fill in the forms");
    }
  }
}
