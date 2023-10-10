import { HttpErrorResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class ErrorService {
    getClientErrorMessage(error: Error): string;
    getServerErrorMessage(error: HttpErrorResponse): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorService>;
}
