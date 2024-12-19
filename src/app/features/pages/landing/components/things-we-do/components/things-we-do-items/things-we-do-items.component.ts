import { Component } from '@angular/core';

@Component({
  selector: 'app-things-we-do-items',
  standalone: true,
  imports: [],
  templateUrl: './things-we-do-items.component.html',
  styleUrl: './things-we-do-items.component.scss'
})
export class ThingsWeDoItemsComponent {
  ThingsWeDoImagesName: string[] = [
    'CarftyMind.png',
    'Dynamic365.png',
    'Transformation.png',
    'Enovision (1).png',
    'Mask Group 17.png'
  ];
}
