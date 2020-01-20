import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogEntriesService {
  constructor(private http: HttpClient) {}

  getAllBlogEntries() {
    return this.http.get("http://localhost:3000/post");
    // [
    //   {
    //     title: "Day 1",
    //     description: "Heute war ein sonniger Tag. \n blabla",
    //     id: 3,
    //     date: "2019_01_13"
    //   },
    //   {
    //     title: "Day 2",
    //     description: "Heute waren wir shoppen",
    //     id: 4,
    //     date: "2019_01_14"
    //   }
    // ];
    // return this.http.post("api/login", author);
  }

  addNewPost(_title, _text, _citation, _song, _userId) {
    this.http
      .post("http://localhost:3000/post", {
        title: "test",
        text: "only just a test",
        citation: "if you know, you know",
        song: "baby shark",
        userId: 1
      })
      .subscribe(bla => {
        console.log("new post: ", bla);
        return bla;
      });
  }

  getUsers() {
    this.http.get("http://localhost:3000/user").subscribe(bla => {
      console.log(bla);
    });
  }

  // deletePost(author, postID) {}

  // updatePost(author, postID) {}
}
