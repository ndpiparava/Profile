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
    new Skill("Swift", 90),
    new Skill("Objective-C", 79),
    new Skill("React Native", 76),
    new Skill("JavaScript", 73),
    new Skill("HTML", 76),
    new Skill("CSS", 83),
    new Skill("Bootstrap", 73)
  ];

  ngOnInit() {}
}
