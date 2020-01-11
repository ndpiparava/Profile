import { Component, OnInit } from "@angular/core";
import {
  SocialProfileService,
  SocialProfile
} from "../shared/socialprofiles.service";

class PortItem {
  constructor(
    public title: String,
    public route: String,
    public iconImg: String,
    public colorClass: String
  ) {}
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public socialProfiles;
  public portItems: PortItem[] = [
    new PortItem("Home", "/home", "fa-home", "bg-info"),
    new PortItem("Resume", "/resume", "fa-graduation-cap", "bg-success"),
    new PortItem("Work", "/work", "fa-folder-open", "bg-warning"),
    new PortItem("Contact", "/contact", "fa-envelope", "bg-danger")
  ];

  constructor(private socialProfileService: SocialProfileService) {}

  ngOnInit() {
    this.socialProfiles = this.socialProfileService.socialProfiles;
  }
}
