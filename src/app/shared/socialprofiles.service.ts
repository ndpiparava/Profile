import { Injectable } from "@angular/core";

export class SocialProfile {
  constructor(
    public profileName: String,
    public profileLink: String,
    public profileBrandImg: String
  ) {}
}

@Injectable({ providedIn: "root" })
export class SocialProfileService {
  constructor() {}

  public socialProfiles: SocialProfile[] = [
    new SocialProfile(
      "linkedin",
      "https://www.linkedin.com/in/nitin-piparava-9558852a/",
      "fa-linkedin"
    ),
    new SocialProfile(
      "twitter",
      "https://twitter.com/Ndpiparava",
      "fa-twitter"
    ),
    new SocialProfile(
      "github",
      "https://github.com/Nitin-BSFT?tab=repositories",
      "fa-github"
    ),
    new SocialProfile(
      "stackoverflow",
      "https://stackoverflow.com/users/1077457/nitin",
      "fa-stack-overflow"
    )
  ];
}
