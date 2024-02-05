import { Component } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant.model';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {

  restaurants: Restaurant[] = [

    {
      id: 1,
      name: 'McDonalds',
      location: 'Madrid',
      rating: '4.5',
      phone: '915555555',
      imageUrl: 'https://placehold.co/300x300'
    },

   {  
      id: 2,
      name: 'Burger King',
      location: 'Madrid',
      rating: '5',
      phone: '915555555',
      imageUrl: 'https://placehold.co/300x300'
    },

    { id: 3,
      name: 'KFC',
      location: 'Madrid',
      rating: '4',
      phone: '915555555',
      imageUrl: 'https://placehold.co/300x300'
    },

    { id: 4,
      name: 'Pans & Company',
      location: 'Madrid',
      rating: '3.5',
      phone: '915555555',
      imageUrl: 'https://placehold.co/300x300' // Corrected property name
    },
    
  ];
  
}
