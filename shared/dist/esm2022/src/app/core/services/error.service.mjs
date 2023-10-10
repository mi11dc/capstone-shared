import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ErrorService {
    getClientErrorMessage(error) {
        return error.message ?
            error.message :
            error.toString();
    }
    getServerErrorMessage(error) {
        return navigator.onLine ?
            error.error.message ? error.error.message : error.message :
            'No Internet Connection';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ErrorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ErrorService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: ErrorService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29yZS9zZXJ2aWNlcy9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBTyxZQUFZO0lBRXJCLHFCQUFxQixDQUFDLEtBQVk7UUFDOUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHFCQUFxQixDQUFDLEtBQXdCO1FBQzFDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNELHdCQUF3QixDQUFDO0lBQ3JDLENBQUM7dUdBWlEsWUFBWTsyR0FBWixZQUFZOzsyRkFBWixZQUFZO2tCQUR4QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVycm9yU2VydmljZSB7XHJcblxyXG4gICAgZ2V0Q2xpZW50RXJyb3JNZXNzYWdlKGVycm9yOiBFcnJvcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA6XHJcbiAgICAgICAgICAgICAgICBlcnJvci50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcnZlckVycm9yTWVzc2FnZShlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3Iub25MaW5lID9cclxuICAgICAgICAgICAgICAgIGVycm9yLmVycm9yLm1lc3NhZ2UgPyBlcnJvci5lcnJvci5tZXNzYWdlIDogZXJyb3IubWVzc2FnZSA6XHJcbiAgICAgICAgICAgICAgICAnTm8gSW50ZXJuZXQgQ29ubmVjdGlvbic7XHJcbiAgICB9XHJcbn1cclxuIl19