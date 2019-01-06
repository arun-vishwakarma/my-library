import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AkvbuttonComponent = /** @class */ (function () {
    function AkvbuttonComponent() {
        this.clickCount = 0;
        //@Output() OnclickButton = new EventEmitter();
        //or
        this.OnclickButton = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AkvbuttonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AkvbuttonComponent.prototype.btnClickFromView = /**
     * @return {?}
     */
    function () {
        this.clickCount++;
        this.OnclickButton.emit(this.clickCount);
    };
    AkvbuttonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-akvbutton',
                    template: "<button type=\"button\" mat-raised-button color=\"primary\" [matBadge]=\"clickCount\" \nmatBadgeColor=\"accent\" [matBadgeHidden]=\"clickCount===0\" \n(click)=\"btnClickFromView()\">Click Me\n</button>\n",
                    styles: ["button{color:red}"]
                }] }
    ];
    /** @nocollapse */
    AkvbuttonComponent.ctorParameters = function () { return []; };
    AkvbuttonComponent.propDecorators = {
        OnclickButton: [{ type: Output }]
    };
    return AkvbuttonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibraryModule = /** @class */ (function () {
    function MyLibraryModule() {
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
    return MyLibraryModule;
}());

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