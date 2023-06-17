import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register()

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.component.html',
  styleUrls: ['./walkthrough.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    NgIf,
    NgFor
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class WalkthroughComponent  implements OnInit {

  slideData: {header: string; synopsis: string; imageUrl: string; highlight: string;}[] = [
    {
      header: 'Taking you to the Cloud',
      synopsis: 'We have no change wahalas and want you to experience this joy too',
      imageUrl: 'assets/icon/walkthrough_one.svg',
      highlight: 'Secure your ride with the click of a button'
    },
    {
      header: 'You Tekisi with us, You Win!',
      synopsis: 'You don’t need to find out at Bonduma about traffic, we pass around it!',
      imageUrl: 'assets/icon/walkthrough_two.svg',
      highlight: 'When others persevere through traffic, you go around it',
    },
    {
      header: 'We know where TaxiMan Is',
      synopsis: 'You want to book a ride, we’ll find the closest taxis to you. You just have to do... nothing',
      imageUrl: 'assets/icon/walkthrough_three.svg',
      highlight: 'Where are all the taxis at the moment? Well no need for imagination. Just click'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
