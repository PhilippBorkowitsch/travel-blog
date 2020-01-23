import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { BlogEntriesService } from "../blog-entries.service";
import { BlogEntryComponent } from "../blog-entry/blog-entry.component";
import { Router, ActivatedRoute } from "@angular/router";
import { ShareDataService } from "../share-data.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormNewPostComponent } from "../form-new-post/form-new-post.component";

@Component({
  selector: "app-blog-a",
  templateUrl: "./blog-a.component.html",
  styleUrls: ["./blog-a.component.sass"]
})
export class BlogAComponent implements OnInit {
  // Array mit allen Blogposts
  private entries = null;

  // macht bisher nichts
  // vielleicht: checkt, ob eingeloggter User ein Author ist?
  constructor(
    private _bes: BlogEntriesService,
    private _router: Router,
    private _sds: ShareDataService,
    private _activeRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    // das funktioniert erst, sobald der getter mit der db verknüpft ist
    this._bes.getAllBlogEntries().subscribe(entriesArray => {
      this.entries = entriesArray;
    });
  }

  // Funktion wird bisher nicht genutzt
  loadEntries() {
    this._bes.getAllBlogEntries().subscribe(entriesArray => {
      this.entries = entriesArray;
    });
  }

  openPost(entry) {
    this._sds.changePostData(entry);
  }

  open() {
    const modalRef = this.modalService.open(FormNewPostComponent);
  }
}
