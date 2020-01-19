import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-blog-entry",
  templateUrl: "./blog-entry.component.html",
  styleUrls: ["./blog-entry.component.sass"]
})
export class BlogEntryComponent implements OnInit {
  // die Blogpost Daten, die von blog-a oder blog-b als String übergeben werden
  @Input() dataString: string;

  // die Blogpost Daten im JSON Format
  private entryJSON;

  constructor() {}

  ngOnInit() {
    this.entryJSON = JSON.parse(JSON.stringify(this.dataString)); //Stringify to remove any JSON-specific remains and re-parse the resulting string to actual JSON-Object
    console.log("success");
  }
}
