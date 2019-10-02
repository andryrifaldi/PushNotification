import { Component } from '@angular/core';
import { NotificationMiddlewareService } from './core/notification-middleware.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'app';

    constructor(private notificationMiddleware: NotificationMiddlewareService) {
    }

    ngOnInit() {
        this.notificationMiddleware.init();
    }
}
