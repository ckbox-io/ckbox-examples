import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as CKBox from 'ckbox';

@Component({
    selector: 'ckbox-inline-sample',
    templateUrl: './inline-sample.component.html',
    styleUrls: ['./inline-sample.component.css']
})
export class InlineSampleComponent implements AfterViewInit {
    @ViewChild('ckbox') ckboxRoot?: ElementRef;

    ngAfterViewInit(): void {
        CKBox.mount(this.ckboxRoot?.nativeElement, {
            tokenUrl: 'https://your.token.url/'
        });
    }
}
