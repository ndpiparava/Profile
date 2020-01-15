import { Component, OnInit, Input } from "@angular/core";

// export class ElementData {
//   constructor(public displayString: String, public elementValue: String) {}
// }

@Component({
  selector: "app-phonenumber",
  templateUrl: "./phonenumber.component.html",
  styleUrls: ["./phonenumber.component.css"]
})
export class PhonenumberComponent implements OnInit {
  @Input() elementDisplayString: string;
  @Input() PhoneNumber: string;
  @Input() Email: string;

  public hrefValue: String;

  constructor() {}

  ngOnInit() {
    this.hrefValue = this.PhoneNumber
      ? "tel:" + this.PhoneNumber
      : "mailto:" + this.Email;
  }

  copyElementValue() {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = this.PhoneNumber ? this.PhoneNumber : this.Email;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }
}
