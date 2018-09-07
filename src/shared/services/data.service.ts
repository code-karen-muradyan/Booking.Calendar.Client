import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { catchError, retry , tap, map, finalize } from 'rxjs/operators';
import 'rxjs';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, from as _observableFrom, throwError as _observableThrow, of as _observableOf } from 'rxjs';

import {throwError as observableThrowError } from 'rxjs';
import {DOCUMENT} from '@angular/platform-browser';
import { SecurityService } from './security.service';
import { Guid } from '../../guid';
import { LoaderService } from './loader.service';

// Implementing a Retry-Circuit breaker policy
// is pending to do for the SPA app
@Injectable()
export class DataService {
    constructor(@Inject(DOCUMENT) private document, private http: Http,
                private securityService: SecurityService,
                private loaderService: LoaderService) { }

    get(url: string, params?: any): Observable<Response> {
        this.showLoader();
        const options: RequestOptionsArgs = {};
        if (this.securityService) {
            options.headers = new Headers();
            options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        }
      return  this.http.get(url, options).pipe(catchError(this.onCatch),
      tap((res: Response) => {
          this.onSuccess(res);
      }, (error: any) => {
          this.onError(error);
      }),
      finalize(() => {
          this.onEnd();
      }));
    }

    postWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, true, params);
    }

    post(url: string, data: any, params?: any): Observable<Response> {
        this.showLoader();
        return this.doPost(url, data, false, params);
    }

    putWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPut(url, data, true, params);
    }

    private doPost(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        const options: RequestOptionsArgs = {};
        options.headers = new Headers();
        if (this.securityService) {
            options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        }
        if (needId) {
            const guid = Guid.newGuid();
            options.headers.append('x-requestid', guid);
        }

        return this.http.post(url, data, options).pipe(catchError(this.onCatch),
        tap((res: Response) => {
            this.onSuccess(res);
        }, (error: any) => {
            this.onError(error);
        }),
        finalize(() => {
            this.onEnd();
        }));
    }

    private doPut(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        const options: RequestOptionsArgs = {};

        options.headers = new Headers();
        if (this.securityService) {
            options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        }
        if (needId) {
            const guid = Guid.newGuid();
            options.headers.append('x-requestid', guid);
        }

        return this.http.put(url, data, options).pipe(catchError(this.onCatch),
        tap((res: Response) => {
            this.onSuccess(res);
        }, (error: any) => {
            this.onError(error);
        }),
        finalize(() => {
            this.onEnd();
        }));
    }

    delete(url: string, params?: any) {
        const options: RequestOptionsArgs = {};

        if (this.securityService) {
            options.headers = new Headers();
            options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        }

        console.log('data.service deleting');
        // return this.http.delete(url, options).subscribe(
        //        return res;
        //    );

        this.http.delete(url, options).subscribe((res) => {
            console.log('deleted');
        });
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json();
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }


    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return observableThrowError(error);
    }

    private onSuccess(res: Response): void {
        console.log('Request successful');
    }

    private onError(res: Response): void {
        console.log('Error, status code: ' + res.status);
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
       this.loaderService.hide();
    }
}
