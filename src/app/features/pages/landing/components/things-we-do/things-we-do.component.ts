import { Component } from '@angular/core';
import { ThingsWeDoItemsComponent } from "./components/things-we-do-items/things-we-do-items.component";

@Component({
  selector: 'app-things-we-do',
  standalone: true,
  imports: [ThingsWeDoItemsComponent],
  templateUrl: './things-we-do.component.html',
  styleUrl: './things-we-do.component.scss'
})
export class ThingsWeDoComponent {

}
