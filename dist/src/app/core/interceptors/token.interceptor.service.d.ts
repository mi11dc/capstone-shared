import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TokenInterceptService {
    constructor();
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    notByPassRoute(requestUrl: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TokenInterceptService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TokenInterceptService>;
}
