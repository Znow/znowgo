import { Component } from "@angular/core";


@Component({
  selector: "app-shoutbox",
  templateUrl: "./shoutbox.component.html",
  standalone: true,
})
export class ShoutboxComponent {
  shouts: Shout[] = [];

  shout(message: string) {
    this.shouts.push({ message });
  }
}