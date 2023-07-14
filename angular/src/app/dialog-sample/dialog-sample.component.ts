import { Component, ElementRef, ViewChild } from '@angular/core';
import * as CKBox from 'ckbox';

@Component({
    selector: 'ckbox-dialog-sample',
    templateUrl: './dialog-sample.component.html',
    styleUrls: ['./dialog-sample.component.css']
})
export class DialogSampleComponent {
    @ViewChild('ckbox') ckboxRoot?: ElementRef;
    isOpen = false;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    unmountCallback = () => {};

    toggleDialog() {
        if (this.isOpen) {
            this.isOpen = false;
            this.unmountCallback();
        } else {
            const { unmount } = CKBox.mount(this.ckboxRoot?.nativeElement, {
                tokenUrl: 'https://dev.ckbox.io/demo/token/',
                dialog: {
                    height: 600,
                    width: 800,
                    onClose: () => {
                        this.isOpen = false;
                    }
                }
            });

            this.isOpen = true;
            this.unmountCallback = unmount;
        }
    }
}
