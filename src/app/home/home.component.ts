import { Component, OnInit } from "@angular/core";

// Model class to hold skill data.
class Skill {
  constructor(public skill: String, public expertise: number) {}
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  public mySkills: Skill[] = [
    new Skill("Objective-C", 80),
    new Skill("Swift", 75),
    new Skill("Angular", 75),
    new Skill("HTML", 80),
    new Skill("CSS", 80),
    new Skill("Bootstrap", 85)
  ];

  public test = "80%";

  ngOnInit() {}
}
