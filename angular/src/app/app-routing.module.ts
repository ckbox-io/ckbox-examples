import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineSampleComponent } from './inline-sample/inline-sample.component';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { CustomEventSampleComponent } from './custom-event-sample/custom-event-sample.component';

const routes: Routes = [
    { path: 'inline', component: InlineSampleComponent },
    { path: 'dialog', component: DialogSampleComponent },
    { path: 'custom-event', component: CustomEventSampleComponent },
    { path: '**', component: InlineSampleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
