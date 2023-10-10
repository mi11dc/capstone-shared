import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// import { ToastrService } from 'ngx-toastr';
export class NotificationService {
    zone;
    constructor(
    // private toastService: ToastrService,
    zone) {
        this.zone = zone;
    }
    showSuccess(message) {
        // Had an issue with the snackbar being ran outside of angular's zone.
        this.zone.run(() => {
            // this.toastService.success(message, 'Success');
        });
    }
    showError(message) {
        this.zone.run(() => {
            // The second parameter is the text in the button. 
            // In the third, we send in the css class for the snack bar.
            // this.toastService.error(message, 'Error');
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NotificationService, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NotificationService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvcmUvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFDbkQsOENBQThDO0FBRzlDLE1BQU0sT0FBTyxtQkFBbUI7SUFJaEI7SUFGWjtJQUNJLHVDQUF1QztJQUMvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNwQixDQUFDO0lBRUwsV0FBVyxDQUFDLE9BQWU7UUFDdkIsc0VBQXNFO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNmLGlEQUFpRDtRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTLENBQUMsT0FBZTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDZixtREFBbUQ7WUFDbkQsNERBQTREO1lBQzVELDZDQUE2QztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7dUdBcEJRLG1CQUFtQjsyR0FBbkIsbUJBQW1COzsyRkFBbkIsbUJBQW1CO2tCQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8vIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHNob3dTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vIEhhZCBhbiBpc3N1ZSB3aXRoIHRoZSBzbmFja2JhciBiZWluZyByYW4gb3V0c2lkZSBvZiBhbmd1bGFyJ3Mgem9uZS5cclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy50b2FzdFNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlLCAnU3VjY2VzcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgdGhlIHRleHQgaW4gdGhlIGJ1dHRvbi4gXHJcbiAgICAgICAgICAgIC8vIEluIHRoZSB0aGlyZCwgd2Ugc2VuZCBpbiB0aGUgY3NzIGNsYXNzIGZvciB0aGUgc25hY2sgYmFyLlxyXG4gICAgICAgICAgICAvLyB0aGlzLnRvYXN0U2VydmljZS5lcnJvcihtZXNzYWdlLCAnRXJyb3InKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=