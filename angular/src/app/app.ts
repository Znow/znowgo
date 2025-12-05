import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoutboxComponent } from "./components/shoutbox/shoutbox.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShoutboxComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular');
}
