import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TableSearchPipe implements PipeTransform {
    transform(array: any, query: string, searchfrom: string[]): any;
    filter(query: string, array: any, from: string[]): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSearchPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TableSearchPipe, "tableFilter", false>;
}
