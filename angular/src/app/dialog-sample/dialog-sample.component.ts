import { Component, ElementRef, ViewChild } from '@angular/core';
import * as CKBox from 'ckbox';

@Component({
    standalone: true,
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
                tokenUrl: 'https://ogq0jhtp46z5.cke-cs.com/token/dev/89a92c6541a37db33b6bf789356c34caeada2f87e7279a22199e70575199?limit=10',
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
