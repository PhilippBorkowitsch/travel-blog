import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogEntriesService {
  constructor(private http: HttpClient) {}

  getAllBlogEntries() {
    return this.http.get("http://localhost:3000/post");
  }

  addNewPost(_title, _text, _date, _citation, _song, _userId) {
    console.log("post");
    return this.http.post("http://localhost:3000/post", {
      title: _title,
      text: _text,
      date: _date,
      citation: _citation,
      song: _song,
      userId: _userId
    });
  }

  getUsers() {
    return this.http.get("http://localhost:3000/user");
  }

  getImagesOfPost(_postId) {
    return this.http.get("http://localhost:3000/image/post/" + _postId);
  }

  addNewImage(_imageFile, _imageName, _description, _postId) {
    const formData = new FormData();
    formData.append('picturefile', _imageFile);
    formData.append('imageName', _imageName);
    formData.append('description', _description);
    formData.append('postId', _postId);
    return this.http.post("http://localhost:3000/image", formData);
  }

  addNewComment(_text, _name, _postId, _userId) {
    return this.http.post("http://localhost:3000/comment", {
      text: _text,
      name: _name,
      postId: _postId,
      userId: _userId
    });
  }

  getCommentsOfPost(_postId) {
    return this.http.get("http://localhost:3000/comment/post/" + _postId);
  }

  // deletePost(author, postID) {}

  // updatePost(author, postID) {}
}
