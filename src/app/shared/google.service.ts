import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { fileSave } from "file-saver";

/* apiKey: "AIzaSyAhvd7IUCUjAZ-FqXiUireLEeB6pIVNB7k",
          clientId:
            "151864777641-pstgdc4r4ae1oaa4ks34aadv6dv3gnmo.apps.googleusercontent.com"*/

@Injectable({ providedIn: "root" })
export class GoogleServices {
  constructor(private http: HttpClient) {}

  //https://drive.google.com/open?id=1F2fotLhxJhCC25dQc5guxEyOqjgX-ZHm
  getProfilePDF() {
    console.log("getProfilePDF");

    //fileSave("../../assets/img/work/Connect.png", "test.png");
    this.http
      .post(
        "https://www.googleapis.com/drive/v2/files/1F2fotLhxJhCC25dQc5guxEyOqjgX-ZHm",
        {
          apiKey: "AIzaSyAhvd7IUCUjAZ-FqXiUireLEeB6pIVNB7k",
          clientId:
            "151864777641-pstgdc4r4ae1oaa4ks34aadv6dv3gnmo.apps.googleusercontent.com"
        }
      )
      .subscribe(responseData => {
        console.log("responseData");
        console.log(responseData);
        fileSave(responseData, "test.pdf");
      });
  }
}
