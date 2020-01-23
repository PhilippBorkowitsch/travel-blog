import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShareDataService {
  private postData = null;

  constructor() {}

  changePostData(postData) {
    this.postData = postData;
  }

  getPostData() {
    return this.postData;
  }
}
