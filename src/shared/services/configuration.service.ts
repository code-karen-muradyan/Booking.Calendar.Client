import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { IConfiguration } from '../models/configuration.model';
import { StorageService } from './storage.service';

import 'rxjs';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigurationService {
    serverSettings: any;
    // observable that is fired when settings are loaded from server
    private settingsLoadedSource = new Subject();
    settingsLoaded$ = this.settingsLoadedSource.asObservable();
    isReady = false;

    constructor(private http: Http, private storageService: StorageService) {this.load(); }

    load() {
        const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
        const url = `${baseURI}Home/Configuration`;
        this.serverSettings = <IConfiguration>{
            baseUrl: environment.baseUrl,
        };
        console.log('server settings loaded');
        console.log(this.serverSettings);
        this.storageService.store('baseUrl', this.serverSettings.baseUrl);
        this.storageService.store('activateCampaignDetailFunction', this.serverSettings.activateCampaignDetailFunction);
        this.isReady = true;
        this.settingsLoadedSource.next();
    }
}
