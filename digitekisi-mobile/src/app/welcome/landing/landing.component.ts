import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'digitekisi-landing',
  templateUrl: './landing.component.html',
  standalone: true,
  imports: [IonicModule, RouterLink]
})
export class LandingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
