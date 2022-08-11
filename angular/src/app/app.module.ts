import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineSampleComponent } from './inline-sample/inline-sample.component';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { CustomEventSampleComponent } from './custom-event-sample/custom-event-sample.component';

@NgModule({
    declarations: [
        AppComponent,
        InlineSampleComponent,
        DialogSampleComponent,
        CustomEventSampleComponent
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
