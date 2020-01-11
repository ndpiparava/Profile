import { Component, OnInit } from "@angular/core";

class WorkHistory {
  constructor(
    public employer: String,
    public shortDescription: String,
    public position: String,
    public referenceDetail: { contactPerson: String; cellNumber: String },
    public workPeriod: String
  ) {}
}

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"]
})
export class ResumeComponent implements OnInit {
  public workHistoryDetails: WorkHistory[] = [
    new WorkHistory(
      "Cisco Systems",
      "I am currently with Cisco Systems as consulting engineer.",
      "Consulting Engineer",
      {
        contactPerson: "Manager: Vamshi Bhaskerabotla",
        cellNumber: "+91 9060924330"
      },
      "Since : 2017"
    ),
    new WorkHistory(
      "BroadSoft",
      "Worked as Senior Software engineer as part of mobile app development team.",
      "Senior Software Engineer",
      {
        contactPerson: "Manager: Vamshi Bhaskerabotla",
        cellNumber: "+91 9060924330"
      },
      "Dates:2015 - 2017"
    ),
    new WorkHistory(
      "AllScripts",
      "Worked as Software engineer and contributed in helathcare mobile app.",
      "SoftWare Engineer",
      {
        contactPerson: "Team Lead: Bhasker, KM",
        cellNumber: "+91 994550355"
      },
      "Dates:2013 - 2015"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
