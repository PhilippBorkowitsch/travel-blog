import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgImageSliderComponent } from "ng-image-slider";
import { ShareDataService } from "../share-data.service";

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
  private imageObject = [
    {
      image: "../../assets/img/2020-01-13-Irland_01.jpg",
      thumbImage: "../../assets/img/2020-01-13-Irland_01.jpg"
    },
    {
      image: "../../assets/img/2020-01-13-Irland_02.jpg",
      thumbImage: "../../assets/img/2020-01-13-Irland_02.jpg"
    },
    {
      image: "../../assets/img/Creartograph_1.jpg",
      thumbImage: "../../assets/img/Creartograph_1.jpg"
    },
    {
      image: "../../assets/img/Creartograph_2.jpg",
      thumbImage: "../../assets/img/Creartograph_2.jpg"
    },
    {
      image: "../../assets/img/Creartograph_3.jpg",
      thumbImage: "../../assets/img/Creartograph_3.jpg"
    },
    {
      image: "../../assets/img/Creartograph_4.jpg",
      thumbImage: "../../assets/img/Creartograph_4.jpg"
    },
    {
      image: "../../assets/img/Creartograph_5.jpg",
      thumbImage: "../../assets/img/Creartograph_5.jpg"
    },
    {
      image: "../../assets/img/Creartograph_6.jpg",
      thumbImage: "../../assets/img/Creartograph_6.jpg"
    },
    {
      image: "../../assets/img/Creartograph_7.jpg",
      thumbImage: "../../assets/img/Creartograph_7.jpg"
    },
    {
      image: "../../assets/img/Creartograph_8.jpg",
      thumbImage: "../../assets/img/Creartograph_8.jpg"
    },
    {
      image: "../../assets/img/Creartograph_9.jpg",
      thumbImage: "../../assets/img/Creartograph_9.jpg"
    }
  ];

  constructor(private _sds: ShareDataService) {}

  ngOnInit() {
    this.postData = this._sds.getPostData();
    console.log(this.postData);
  }

  prevImageClick() {
    this.slider.prev();
    console.log("previous");
  }

  nextImageClick() {
    this.slider.next();
    console.log("next");
  }
}
