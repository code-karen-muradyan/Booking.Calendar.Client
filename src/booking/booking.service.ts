import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { SecurityService } from '../shared/services/security.service';
import { IRoom } from '../shared/models/Room.model';
import { ConfigurationService } from '../shared/services/configuration.service';
import { StorageService } from '../shared/services/storage.service';
import { map, catchError } from 'rxjs/operators';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { from as _observableFrom, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { Appointment } from '../shared/models/appointment.model';

@Injectable()
export class BookingService {
    private baseUrl = '';


    private basketDropedSource = new Subject();
    basketDroped$ = this.basketDropedSource.asObservable();

    constructor(private service: DataService,
                private authService: SecurityService,
                private router: Router,
                private configurationService: ConfigurationService,
                private storageService: StorageService) {
                this.baseUrl = this.configurationService.serverSettings.baseUrl;
    }

    getRooms(): Observable<IRoom[]> {
        const url = this.baseUrl + '/api/v1/booking/rooms';
        return this.service.get(url).pipe(_observableMergeMap((response_: any) => {
            const res =  response_.json();
         return   _observableOf(res);
        }));
    }

    registeruser(email: string): Observable<string> {
        const url = this.baseUrl + '/api/v1/authentication/registeruser';
        return this.service.post(url, email).pipe(_observableMergeMap((response_: any) => {
            const res =  response_.json();
         return   _observableOf(res);
        }));
    }

    createapponitment(appointment: Appointment): Observable<string> {
        const url = this.baseUrl + '/api/v1/booking/items';
        return this.service.postWithId(url, appointment).pipe(_observableMergeMap((response_: any) => {
            const res =  response_.json();
         return   _observableOf(res);
        }));
    }


}
