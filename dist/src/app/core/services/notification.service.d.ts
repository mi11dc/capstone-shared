import { NgZone } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NotificationService {
    private zone;
    constructor(zone: NgZone);
    showSuccess(message: string): void;
    showError(message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationService>;
}
