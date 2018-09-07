import { Routes, RouterModule } from '@angular/router';
import { ApponitmentComponent } from '../booking/apponitment/apponitment.component';
export const routes: Routes = [
    { path: '', redirectTo: 'booking', pathMatch: 'full' },
    { path: 'booking', component: ApponitmentComponent },
];

export const routing = RouterModule.forRoot(routes);
