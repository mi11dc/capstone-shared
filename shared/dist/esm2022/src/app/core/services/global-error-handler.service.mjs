import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import { LoggingService } from './logging.service';
import { ErrorService } from './error.service';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export class GlobalErrorHandlerService {
    injector;
    constructor(injector) {
        this.injector = injector;
    }
    handleError(error) {
        const errorService = this.injector.get(ErrorService);
        // const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);
        const router = this.injector.get(Router);
        let message;
        if (error instanceof HttpErrorResponse) {
            // Server error
            console.log('server');
            if (error.status !== 401) {
                // UtilityService.clearLocalStorage();
                // router.navigate(['auth']);
                // console.log('status')
                message = errorService.getServerErrorMessage(error);
                notifier.showError(message);
            }
        }
        else {
            // Client Error
            // console.log('client')
            // message = errorService.getClientErrorMessage(error);
            // notifier.showError(message);
        }
        // Always log errors
        // logger.logError(message, stackTrace);
        console.error(error);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: GlobalErrorHandlerService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: GlobalErrorHandlerService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: GlobalErrorHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29yZS9zZXJ2aWNlcy9nbG9iYWwtZXJyb3ItaGFuZGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELHNEQUFzRDtBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUd6QyxNQUFNLE9BQU8seUJBQXlCO0lBQ2Q7SUFBcEIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFMUMsV0FBVyxDQUFDLEtBQWdDO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELG9EQUFvRDtRQUNwRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7WUFDeEMsZUFBZTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsc0NBQXNDO2dCQUN0Qyw2QkFBNkI7Z0JBQzdCLHdCQUF3QjtnQkFDeEIsT0FBTyxHQUFHLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtTQUNKO2FBQU07WUFDUCxlQUFlO1lBQ2Ysd0JBQXdCO1lBQ3hCLHVEQUF1RDtZQUN2RCwrQkFBK0I7U0FDOUI7UUFDRCxvQkFBb0I7UUFDcEIsd0NBQXdDO1FBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzt1R0E1QlEseUJBQXlCOzJHQUF6Qix5QkFBeUI7OzJGQUF6Qix5QkFBeUI7a0JBRHJDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4vLyBpbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gJy4vbG9nZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2xvYmFsRXJyb3JIYW5kbGVyU2VydmljZSBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgICBoYW5kbGVFcnJvcihlcnJvcjogRXJyb3IgfCBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEVycm9yU2VydmljZSk7XHJcbiAgICAgICAgLy8gY29uc3QgbG9nZ2VyID0gdGhpcy5pbmplY3Rvci5nZXQoTG9nZ2luZ1NlcnZpY2UpO1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWVyID0gdGhpcy5pbmplY3Rvci5nZXQoTm90aWZpY2F0aW9uU2VydmljZSk7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuICAgICAgICBsZXQgbWVzc2FnZTtcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG4gICAgICAgIC8vIFNlcnZlciBlcnJvclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmVyJylcclxuICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVdGlsaXR5U2VydmljZS5jbGVhckxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gcm91dGVyLm5hdmlnYXRlKFsnYXV0aCddKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0dXMnKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yU2VydmljZS5nZXRTZXJ2ZXJFcnJvck1lc3NhZ2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgbm90aWZpZXIuc2hvd0Vycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBDbGllbnQgRXJyb3JcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xpZW50JylcclxuICAgICAgICAvLyBtZXNzYWdlID0gZXJyb3JTZXJ2aWNlLmdldENsaWVudEVycm9yTWVzc2FnZShlcnJvcik7XHJcbiAgICAgICAgLy8gbm90aWZpZXIuc2hvd0Vycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbHdheXMgbG9nIGVycm9yc1xyXG4gICAgICAgIC8vIGxvZ2dlci5sb2dFcnJvcihtZXNzYWdlLCBzdGFja1RyYWNlKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=