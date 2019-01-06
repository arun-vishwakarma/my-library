/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class AkvbuttonComponent {
    constructor() {
        this.clickCount = 0;
        //@Output() OnclickButton = new EventEmitter();
        //or
        this.OnclickButton = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    btnClickFromView() {
        this.clickCount++;
        this.OnclickButton.emit(this.clickCount);
    }
}
AkvbuttonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-akvbutton',
                template: "<button type=\"button\" mat-raised-button color=\"primary\" [matBadge]=\"clickCount\" \nmatBadgeColor=\"accent\" [matBadgeHidden]=\"clickCount===0\" \n(click)=\"btnClickFromView()\">Click Me\n</button>\n",
                styles: ["button{color:red}"]
            }] }
];
/** @nocollapse */
AkvbuttonComponent.ctorParameters = () => [];
AkvbuttonComponent.propDecorators = {
    OnclickButton: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AkvbuttonComponent.prototype.clickCount;
    /** @type {?} */
    AkvbuttonComponent.prototype.OnclickButton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWt2YnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvYWt2YnV0dG9uL2FrdmJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU94RSxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCO1FBTEEsZUFBVSxHQUFHLENBQUMsQ0FBQzs7O1FBR0wsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuRCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix1TkFBeUM7O2FBRTFDOzs7Ozs0QkFLRSxNQUFNOzs7O0lBSFAsd0NBQWU7O0lBR2YsMkNBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ha3ZidXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWt2YnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWt2YnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBa3ZidXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGlja0NvdW50ID0gMDtcbiAgLy9AT3V0cHV0KCkgT25jbGlja0J1dHRvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy9vclxuICBAT3V0cHV0KCkgT25jbGlja0J1dHRvbjogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGJ0bkNsaWNrRnJvbVZpZXcoKXtcbiAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICB0aGlzLk9uY2xpY2tCdXR0b24uZW1pdCh0aGlzLmNsaWNrQ291bnQpO1xuICB9XG5cbn1cbiJdfQ==