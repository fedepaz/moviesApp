import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-movies-box",
  templateUrl: "./movies-box.component.html",
})
export class MoviesBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  constructor() {}
  ngOnInit(): void {}
}
