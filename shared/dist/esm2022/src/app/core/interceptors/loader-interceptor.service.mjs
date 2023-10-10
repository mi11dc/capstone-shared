import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';
import { UtilityService } from '../services/utility.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/loader.service";
export class LoaderInterceptorService {
    loaderService;
    injector;
    totalRequests = 0;
    constructor(loaderService, injector) {
        this.loaderService = loaderService;
        this.injector = injector;
    }
    intercept(req, next) {
        this.totalRequests++;
        this.showLoader();
        const notifier = this.injector.get(NotificationService);
        return next.handle(req).pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (event.body) {
                    // const doNotShowMsgUrl = Constants.DO_NOT_SHOW_MSG.find(url => event.url.indexOf(url) >= 0 || event.url.indexOf('display') >= 0);
                    const doNotShowMsgUrl = '';
                    if (!doNotShowMsgUrl) {
                        const { message } = UtilityService.convertObjectToJson(event);
                        if (message) {
                            notifier.showSuccess(message);
                        }
                    }
                }
                this.onEnd();
            }
        }, (err) => {
            this.onEnd();
        }));
    }
    onEnd() {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.hideLoader();
        }
    }
    showLoader() {
        this.loaderService.show();
    }
    hideLoader() {
        this.loaderService.hide();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderInterceptorService, deps: [{ token: i1.LoaderService }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderInterceptorService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderInterceptorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.LoaderService }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLWludGVyY2VwdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvcmUvaW50ZXJjZXB0b3JzL2xvYWRlci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUtILFlBQVksRUFDZixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQUc3RCxNQUFNLE9BQU8sd0JBQXdCO0lBRWI7SUFBc0M7SUFEbEQsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUMxQixZQUFvQixhQUE0QixFQUFVLFFBQWtCO1FBQXhELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFaEYsU0FBUyxDQUNMLEdBQXFCLEVBQ3JCLElBQWlCO1FBRWpCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUN4QixHQUFHLENBQ0MsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDMUIsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUMvQixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7b0JBQ1osbUlBQW1JO29CQUNuSSxNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUU7d0JBQ2xCLE1BQU0sRUFBQyxPQUFPLEVBQUMsR0FBRyxjQUFjLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzVELElBQUksT0FBTyxFQUFFOzRCQUNiLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQzdCO3FCQUNKO2lCQUNKO2dCQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtRQUNELENBQUMsRUFDRCxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FDSixDQUNKLENBQUM7SUFDTixDQUFDO0lBQ08sS0FBSztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFDTyxVQUFVO1FBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ08sVUFBVTtRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQzt1R0E3Q1Esd0JBQXdCOzJHQUF4Qix3QkFBd0I7OzJGQUF4Qix3QkFBd0I7a0JBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgSHR0cEV2ZW50LFxyXG4gICAgSHR0cEludGVyY2VwdG9yLFxyXG4gICAgSHR0cEhhbmRsZXIsXHJcbiAgICBIdHRwUmVxdWVzdCxcclxuICAgIEh0dHBSZXNwb25zZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvYWRlckludGVyY2VwdG9yU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBwcml2YXRlIHRvdGFsUmVxdWVzdHMgPSAwO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2FkZXJTZXJ2aWNlOiBMb2FkZXJTZXJ2aWNlLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgICBpbnRlcmNlcHQoXHJcbiAgICAgICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxyXG4gICAgICAgIG5leHQ6IEh0dHBIYW5kbGVyXHJcbiAgICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgICAgdGhpcy50b3RhbFJlcXVlc3RzKys7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyKCk7XHJcbiAgICAgICAgY29uc3Qgbm90aWZpZXIgPSB0aGlzLmluamVjdG9yLmdldChOb3RpZmljYXRpb25TZXJ2aWNlKTtcclxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoXHJcbiAgICAgICAgICAgICAgICAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkb05vdFNob3dNc2dVcmwgPSBDb25zdGFudHMuRE9fTk9UX1NIT1dfTVNHLmZpbmQodXJsID0+IGV2ZW50LnVybC5pbmRleE9mKHVybCkgPj0gMCB8fCBldmVudC51cmwuaW5kZXhPZignZGlzcGxheScpID49IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb05vdFNob3dNc2dVcmwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb05vdFNob3dNc2dVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHttZXNzYWdlfSA9IFV0aWxpdHlTZXJ2aWNlLmNvbnZlcnRPYmplY3RUb0pzb24oZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWVyLnNob3dTdWNjZXNzKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FbmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkVuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvdGFsUmVxdWVzdHMtLTtcclxuICAgICAgICBpZiAodGhpcy50b3RhbFJlcXVlc3RzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUxvYWRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd0xvYWRlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2Uuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoaWRlTG9hZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5oaWRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19