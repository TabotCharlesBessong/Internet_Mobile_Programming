import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent  implements OnInit, AfterViewInit {

  @ViewChild('mapRef') mapRef!: ElementRef<HTMLElement>
  newMap!: GoogleMap
  activeStatus = 'active'

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
     this.initMap()
  }

  async initMap(){
    const { coords } = await Geolocation.getCurrentPosition()
    this.newMap = await GoogleMap.create({
      id: 'digitekisi-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.GOOGLE_MAP_API_KEY,
      config: {
        center: {
          lat: coords.latitude,
          lng: coords.longitude,
        },
        zoom: 8,
      },
    });
  }

}
