import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { LandingComponent } from "./landing/landing.component";
import { WalkthroughComponent } from "./walkthrough/walkthrough.component";

@Component({
  selector: 'digitekisi-welcome',
  template: `
    <ion-router-outlet></ion-router-outlet>
  `,
  imports: [IonicModule, LandingComponent, WalkthroughComponent],
  standalone: true,
})
export class WelcomeComponent { }
