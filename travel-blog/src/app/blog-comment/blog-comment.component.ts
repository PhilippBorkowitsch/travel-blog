import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-blog-comment",
  templateUrl: "./blog-comment.component.html",
  styleUrls: ["./blog-comment.component.sass"]
})
export class BlogCommentComponent implements OnInit {
  @Input() dataString: string;

  commentJSON;

  constructor() {}

  ngOnInit() {
    this.commentJSON = this.dataString;
    console.log(this.commentJSON);
  }
}
