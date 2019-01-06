import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AkvbuttonComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibraryModule {
}
MyLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AkvbuttonComponent],
                imports: [
                    MatBadgeModule,
                    MatButtonModule
                ],
                exports: [AkvbuttonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AkvbuttonComponent, MyLibraryModule };

//# sourceMappingURL=my-library.js.map