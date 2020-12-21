import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DashboardInfo } from '../models/dashboardModel';

@Injectable()
export class BloomService {

    apiUrl: String = environment.apiUrl;

    constructor(public http : HttpClient) {

    }

    getStreamers() {
        return this.http.get(`${this.apiUrl + environment.routes.get_streamers}/all`);
    }

    getStreamerByName(name: String) {
        return this.http.get(`${this.apiUrl + environment.routes.get_streamers}/${name}`);
    }

    getDashboardInfo(): Observable<DashboardInfo> {
        let headers = new Headers({'cache-control':'no-cache'});
        return this.http.get<DashboardInfo>(`${this.apiUrl + environment.routes.get_dashboard_info}/?x=1235`);
    }
}