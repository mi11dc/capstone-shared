import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ApiService {
    private http;
    constructor(http: HttpClient);
    get(path: string, queryParms: any, baseUrl?: string): Observable<any>;
    getSingle(path: string, httpHeaders?: any, baseUrl?: string): Observable<any>;
    post(path: string, requestObject: any, httpHeaders?: any, baseUrl?: string): Observable<any>;
    postFormEncoded(path: string, requestObject: any, httpHeaders?: any, baseUrl?: string): Observable<any>;
    uploadFile(path: string, requestObject: any, baseUrl?: string): Observable<any>;
    put(path: string, requestObject: any, httpHeaders?: any, baseUrl?: string): Observable<any>;
    delete(path: string, httpHeaders?: any, baseUrl?: string): Observable<any>;
    private getQueryParams;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiService>;
}
