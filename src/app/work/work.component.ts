import { Component, OnInit } from "@angular/core";

class Project {
  constructor(public projectLink: String, public projectImg: String) {}
}

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"]
})
export class WorkComponent implements OnInit {
  public projects: Project[] = [
    new Project(
      "https://apps.apple.com/us/app/uc-one-connect/id1067459716",
      "../../assets/img/work/Connect.png"
    ),
    new Project(
      "https://apps.apple.com/us/app/sunrise-mobile-md-ii-for-ipad/id457564027",
      "../../assets/img/work/sunriseMD.png"
    ),
    new Project(
      "https://itunes.apple.com/us/app/nusale/id522080587?mt=8",
      "../../assets/img/work/Nusale.png"
    ),
    new Project(
      "https://apps.apple.com/in/app/cookbook-cuisine/id467334906",
      "../../assets/img/work/recipe.png"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
