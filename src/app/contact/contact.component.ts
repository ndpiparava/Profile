import { Component, OnInit } from "@angular/core";
import {
  SocialProfileService,
  SocialProfile
} from "../shared/socialprofiles.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  public socialProfiles;
  constructor(private socialProfileService: SocialProfileService) {}

  ngOnInit() {
    this.socialProfiles = this.socialProfileService.socialProfiles;
  }

  onSendMail() {}
}
