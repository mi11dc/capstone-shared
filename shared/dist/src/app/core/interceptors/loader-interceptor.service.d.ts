import { Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoaderInterceptorService implements HttpInterceptor {
    private loaderService;
    private injector;
    private totalRequests;
    constructor(loaderService: LoaderService, injector: Injector);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private onEnd;
    private showLoader;
    private hideLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderInterceptorService>;
}
