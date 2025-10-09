import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as CKBox from 'ckbox';

@Component({
    standalone: true,
    selector: 'ckbox-inline-sample',
    templateUrl: './inline-sample.component.html',
    styleUrls: ['./inline-sample.component.css']
})
export class InlineSampleComponent implements AfterViewInit {
    @ViewChild('ckbox') ckboxRoot?: ElementRef;

    ngAfterViewInit(): void {
        CKBox.mount(this.ckboxRoot?.nativeElement, {
            tokenUrl: 'https://ogq0jhtp46z5.cke-cs.com/token/dev/89a92c6541a37db33b6bf789356c34caeada2f87e7279a22199e70575199?limit=10'
        });
    }
}
