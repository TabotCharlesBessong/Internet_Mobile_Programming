import { IonicModule } from '@ionic/angular';
import { Component } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { GpsComponent } from './gps/gps.component';
import { AccountComponent } from './account/account.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'digitekisi-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [IonicModule, HomeComponent, FormsModule, BookComponent, DashboardComponent, GpsComponent, AccountComponent, RouterOutlet]
})
export class DashboardComponent {
  selectedUser = 'As Passenger'
}
