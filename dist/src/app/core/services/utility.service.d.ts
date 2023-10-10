import * as i0 from "@angular/core";
export declare class UtilityService {
    static convertObjectToJson(res: any): any;
    static setLocalStorage(property: string, value: string): void;
    static setMultiLocalStorage(array: any): void;
    static getLocalStorage(property: string): string | null;
    static removeItemLocalStorage(property: string): void;
    static clearLocalStorage(): void;
    static createParameterizedUrl(url: string, params: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UtilityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UtilityService>;
}
