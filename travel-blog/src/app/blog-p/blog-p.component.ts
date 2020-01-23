import { Component, OnInit } from "@angular/core";
import { BlogEntriesService } from "../blog-entries.service";

@Component({
  selector: "app-blog-p",
  templateUrl: "./blog-p.component.html",
  styleUrls: ["./blog-p.component.sass"]
})
export class BlogPComponent implements OnInit {
  private entries = [];

  constructor(private bes: BlogEntriesService) {}

  ngOnInit() {}
}
