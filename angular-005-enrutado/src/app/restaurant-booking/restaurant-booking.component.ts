import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-restaurant-booking',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-booking.component.html',
  styleUrl: './restaurant-booking.component.css'
})
export class RestaurantBookingComponent implements OnInit{ 


  constructor(private activateRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
    
      console.log(params ['id']);
    });
  }
}