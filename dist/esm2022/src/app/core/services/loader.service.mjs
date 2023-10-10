import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class LoaderService {
    // loader state maintain: not any
    loaderSubject = new Subject();
    loaderState = this.loaderSubject.asObservable();
    constructor() { }
    show() {
        // loader state maintain
        this.loaderSubject.next({ show: true });
    }
    hide() {
        // loader state maintain
        this.loaderSubject.next({ show: false });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvcmUvc2VydmljZXMvbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUcvQixNQUFNLE9BQU8sYUFBYTtJQUN0QixpQ0FBaUM7SUFDekIsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFDM0MsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFaEQsZ0JBQWUsQ0FBQztJQUNoQixJQUFJO1FBQ0Esd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUk7UUFDQSx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO3VHQWJRLGFBQWE7MkdBQWIsYUFBYTs7MkZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9hZGVyU2VydmljZSB7XHJcbiAgICAvLyBsb2FkZXIgc3RhdGUgbWFpbnRhaW46IG5vdCBhbnlcclxuICAgIHByaXZhdGUgbG9hZGVyU3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIGxvYWRlclN0YXRlID0gdGhpcy5sb2FkZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgLy8gbG9hZGVyIHN0YXRlIG1haW50YWluXHJcbiAgICAgICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQoeyBzaG93OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICAvLyBsb2FkZXIgc3RhdGUgbWFpbnRhaW5cclxuICAgICAgICB0aGlzLmxvYWRlclN1YmplY3QubmV4dCh7IHNob3c6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==