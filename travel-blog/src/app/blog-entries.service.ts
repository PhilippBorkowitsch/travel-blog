import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogEntriesService {
  constructor(private http: HttpClient) {}

  getAllBlogEntries() {
    return this.http.get("https://api.irblog.wuest.dev/post");
  }

  addNewPost(_title, _text, _date, _citation, _song, _userId) {
    return this.http.post("https://api.irblog.wuest.dev/post", {
      title: _title,
      text: _text,
      date: _date,
      citation: _citation,
      song: _song,
      userId: _userId
    });
  }

  getUsers() {
    return this.http.get("https://api.irblog.wuest.dev/user");
  }

  getImagesOfPost(_postId) {
    return this.http.get("https://api.irblog.wuest.dev/image/post/" + _postId);
  }

  addNewImage(_imageName, _description, _postId) {
    return this.http.post("https://api.irblog.wuest.dev/image", {
      imageName: _imageName,
      description: _description,
      postId: _postId
    });
  }

  addNewComment(_text, _name, _postId, _userId) {
    return this.http.post("https://api.irblog.wuest.dev/comment", {
      text: _text,
      name: _name,
      postId: _postId,
      userId: _userId
    });
  }

  getCommentsOfPost(_postId) {
    return this.http.get(
      "https://api.irblog.wuest.dev/comment/post/" + _postId
    );
  }

  // deletePost(author, postID) {}

  // updatePost(author, postID) {}
}
