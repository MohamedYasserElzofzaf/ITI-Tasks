import { Component } from "@angular/core";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"],
})
export class SecondComponent {
  imgsrc: string = "assets/Images/1.jpg";
  i: number = 1;
  timer: any;

  Next() {
    if (this.i < 3) this.i++;
    this.imgsrc = "assets/Images/" + this.i + ".jpg";
  }
  slsh() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.i == 3) {
          this.i = 1;
        } else {
          console.log("hello");
          this.i++;
          this.imgsrc = "assets/Images/" + this.i + ".jpg";
        }
      }, 2000);
    }
  }
  hold() {
    clearInterval(this.timer);
    this.timer = "";
  }
  prev() {
    if (this.i > 1) this.i--;
    this.imgsrc = "assets/Images/" + this.i + ".jpg";
    console.log("hello");
  }
}
