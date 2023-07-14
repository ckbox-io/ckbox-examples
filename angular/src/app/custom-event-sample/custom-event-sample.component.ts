import { Component, ElementRef, ViewChild } from '@angular/core';
import * as CKBox from 'ckbox';

@Component({
    selector: 'ckbox-custom-event-sample',
    templateUrl: './custom-event-sample.component.html',
    styleUrls: ['./custom-event-sample.component.css']
})
export class CustomEventSampleComponent {
    @ViewChild('ckbox') ckboxRoot?: ElementRef;
    selectedItems: { id: string; name: string; imageUrl: string }[] = [];

    ngAfterViewInit(): void {
        CKBox.mount(this.ckboxRoot?.nativeElement, {
            tokenUrl: 'https://dev.ckbox.io/demo/token/',
            assets: {
                onChoose: (assets) => {
                    this.selectedItems = assets.map((asset) => ({
                        ...asset.data,
                        imageUrl: asset.getUrl()
                    }));
                }
            }
        });
    }
}
