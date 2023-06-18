import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMap } from '@capacitor/google-maps';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookComponent  implements OnInit, AfterViewInit {

  @ViewChild('mapRef') mapRef!: ElementRef<HTMLElement>
  newMap!: GoogleMap
  activeStatus = 'active'

  constructor() { }

  ngOnInit() {}

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
