import { Component, OnInit } from "@angular/core";
import { GoogleServices } from "../shared/google.service";
import { fileSave } from "file-saver";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor(private googleService: GoogleServices) {}

  ngOnInit() {
    console.log("ngOnInit footer");
  }

  onDownloadResume() {
    // var file = new File(["Hello, world!"], "", {
    //   type: "png"
    // });
    // fileSave("../../assets/img/work/Connect.png", "image.jpg");
    console.log("onDownloadResume");
    this.googleService.getProfilePDF();
  }
}
