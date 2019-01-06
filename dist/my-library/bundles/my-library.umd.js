(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('my-library', ['exports', '@angular/core', '@angular/material'], factory) :
    (factory((global['my-library'] = {}),global.ng.core,global.ng.material));
}(this, (function (exports,core,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AkvbuttonComponent = /** @class */ (function () {
        function AkvbuttonComponent() {
            this.clickCount = 0;
            //@Output() OnclickButton = new EventEmitter();
            //or
            this.OnclickButton = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'lib-akvbutton',
                        template: "<button type=\"button\" mat-raised-button color=\"primary\" [matBadge]=\"clickCount\" \nmatBadgeColor=\"accent\" [matBadgeHidden]=\"clickCount===0\" \n(click)=\"btnClickFromView()\">Click Me\n</button>\n",
                        styles: ["button{color:red}"]
                    }] }
        ];
        /** @nocollapse */
        AkvbuttonComponent.ctorParameters = function () { return []; };
        AkvbuttonComponent.propDecorators = {
            OnclickButton: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
                        declarations: [AkvbuttonComponent],
                        imports: [
                            material.MatBadgeModule,
                            material.MatButtonModule
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

    exports.AkvbuttonComponent = AkvbuttonComponent;
    exports.MyLibraryModule = MyLibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-library.umd.js.map