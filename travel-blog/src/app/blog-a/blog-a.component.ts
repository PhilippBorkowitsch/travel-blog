import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { BlogEntriesService } from "../blog-entries.service";
import { BlogEntryComponent } from "../blog-entry/blog-entry.component";
import { Router, ActivatedRoute } from "@angular/router";
import { ShareDataService } from "../share-data.service";

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
  constructor(
    private _bes: BlogEntriesService,
    private _router: Router,
    private _sds: ShareDataService,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // temporäre Lösung, muss später gelöscht werden
    this.entries = this._bes.getAllBlogEntries(1);

    // das funktioniert erst, sobald der getter mit der db verknüpft ist
    // this.bes.getAllBlogEntries(1).subscribe(entriesArray => {
    //   this.entries = entriesArray;
    // });
  }

  // Funktion wird bisher nicht genutzt
  loadEntries() {
    console.log("load");
  }

  openPost(entry) {
    this._sds.changePostData(entry);
    console.log(this._sds.getPostData());
  }
}
