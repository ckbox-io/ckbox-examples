import { Component, ElementRef, ViewChild } from '@angular/core';
import * as CKBox from 'ckbox';

@Component({
    selector: 'ckbox-custom-event-sample',
    templateUrl: './custom-event-sample.component.html',
    styleUrls: ['./custom-event-sample.component.css']
})
export class CustomEventSampleComponent {
    @ViewChild('ckbox') ckboxRoot?: ElementRef;
    selectedItems: { id: string; name: string; url?: string }[] = [];

    ngAfterViewInit(): void {
        CKBox.mount(this.ckboxRoot?.nativeElement, {
            tokenUrl: 'https://your.token.url',
            assets: {
                onChoose: (assets) => {
                    this.selectedItems = assets.map(({ data }) => ({
                        id: data.id,
                        name: data.name,
                        url: data.url
                    }));
                }
            }
        });
    }
}
