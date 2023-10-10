import { ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class GlobalErrorHandlerService implements ErrorHandler {
    private injector;
    constructor(injector: Injector);
    handleError(error: Error | HttpErrorResponse): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalErrorHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalErrorHandlerService>;
}
