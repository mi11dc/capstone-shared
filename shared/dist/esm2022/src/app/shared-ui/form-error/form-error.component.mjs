import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FormErrorComponent {
    errorMessage = "";
    errorClass = "";
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: FormErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: FormErrorComponent, selector: "app-form-label", inputs: { errorMessage: "errorMessage", errorClass: "errorClass" }, ngImport: i0, template: "<span [ngClass]=\"errorClass\">{{ errorMessage }}</span>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: FormErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-form-label', template: "<span [ngClass]=\"errorClass\">{{ errorMessage }}</span>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { errorMessage: [{
                type: Input
            }], errorClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL3NoYXJlZC11aS9mb3JtLWVycm9yL2Zvcm0tZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQtdWkvZm9ybS1lcnJvci9mb3JtLWVycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7QUFPdkQsTUFBTSxPQUFPLGtCQUFrQjtJQUVwQixZQUFZLEdBQVcsRUFBRSxDQUFDO0lBQzFCLFVBQVUsR0FBVyxFQUFFLENBQUM7SUFFakMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7dUdBUlUsa0JBQWtCOzJGQUFsQixrQkFBa0IsMEhDUC9CLDREQUNBOzsyRkRNYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsZ0JBQWdCOzBFQU1qQixZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWVycm9yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgZXJyb3JDbGFzczogc3RyaW5nID0gXCJcIjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIjxzcGFuIFtuZ0NsYXNzXT1cImVycm9yQ2xhc3NcIj57eyBlcnJvck1lc3NhZ2UgfX08L3NwYW4+XG4iXX0=