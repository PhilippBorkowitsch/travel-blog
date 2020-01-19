import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogEntriesService {
  constructor(private http: HttpClient) {}

  getAllBlogEntries(author) {
    console.log("works");
    return [
      {
        title: "Day 1",
        description: "Heute war ein sonniger Tag. \n blabla",
        id: 3
      },
      { title: "Day 2", description: "Heute waren wir shoppen", id: 4 }
    ];
    // return this.http.post("api/login", author);
  }

  addNewPost(author, newPost) {}

  deletePost(author, postID) {}

  updatePost(author, postID) {}
}
