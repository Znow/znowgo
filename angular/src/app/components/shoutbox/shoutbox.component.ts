import { Component } from "@angular/core";


@Component({
  selector: "app-shoutbox",
  templateUrl: "./shoutbox.component.html",
  standalone: true,
})
export class ShoutboxComponent {
  shouts: string[] = [];
  message: string = "";
  #shoutMessage!: any;

  shout() {
    this.shouts.push(this.message );
    this.message = "";
    this.#shoutMessage.value = "";
  }
}