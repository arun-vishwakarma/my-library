import { OnInit, EventEmitter } from '@angular/core';
export declare class AkvbuttonComponent implements OnInit {
    clickCount: number;
    OnclickButton: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    btnClickFromView(): void;
}
