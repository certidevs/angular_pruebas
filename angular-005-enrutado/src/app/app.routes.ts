import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantBookingComponent } from './restaurant-booking/restaurant-booking.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HOMEComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HOMEComponent,
        
    },
    {
        path: 'restaurantes',
        component: RestaurantListComponent
    },
    {
        path: 'restaurantes/formulario',
        component: RestaurantFormComponent
    },
    {
        path: 'restaurantes/nuevo',
        component: RestaurantFormComponent
    },
    {
        path: 'restaurantes/:id/detalle',
        component: RestaurantDetailComponent
    },
    {
        path: 'restaurantes/:id/reservas',
        component: RestaurantBookingComponent
    },

    {
        path: '**',
        component: NotFoundComponent
    },
    {
        path: '**', redirectTo: '/not-found-404',
    }
];

