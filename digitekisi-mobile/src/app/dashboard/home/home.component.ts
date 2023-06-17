import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent  implements OnInit {

  @ViewChild('map') map!: ElementRef
  activeStatus = 'active'

  constructor() { }

  ngOnInit() {
    this.initMap()
  }

  async initMap(){
    const newMap = await GoogleMap.create({
      id: 'map',
      element: this.map.nativeElement,
      apiKey: environment.GOOGLE_MAP_API_KEY,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }

}
