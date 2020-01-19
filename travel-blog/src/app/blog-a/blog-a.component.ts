import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { BlogEntriesService } from "../blog-entries.service";
import { BlogEntryComponent } from "../blog-entry/blog-entry.component";

@Component({
  selector: "app-blog-a",
  templateUrl: "./blog-a.component.html",
  styleUrls: ["./blog-a.component.sass"]
})
export class BlogAComponent implements OnInit {
  // Array mit allen Blogposts
  private entries;

  // macht bisher nichts
  // vielleicht: checkt, ob eingeloggter User ein Author ist?
  constructor(private bes: BlogEntriesService) {}

  ngOnInit() {
    // temporäre Lösung, muss später gelöscht werden
    this.entries = this.bes.getAllBlogEntries(1);

    // das funktioniert erst, sobald der getter mit der db verknüpft ist
    // this.bes.getAllBlogEntries(1).subscribe(entriesArray => {
    //   this.entries = entriesArray;
    // });
  }

  // Funktion wird bisher nicht genutzt
  loadEntries() {
    console.log("load");
  }
}
