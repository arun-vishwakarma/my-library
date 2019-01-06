/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
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
export { AkvbuttonComponent };
if (false) {
    /** @type {?} */
    AkvbuttonComponent.prototype.clickCount;
    /** @type {?} */
    AkvbuttonComponent.prototype.OnclickButton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWt2YnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvYWt2YnV0dG9uL2FrdmJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RTtJQVdFO1FBTEEsZUFBVSxHQUFHLENBQUMsQ0FBQzs7O1FBR0wsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuRCxDQUFDOzs7O0lBRWpCLHFDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCw2Q0FBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsdU5BQXlDOztpQkFFMUM7Ozs7O2dDQUtFLE1BQU07O0lBWVQseUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSxrQkFBa0I7OztJQUM3Qix3Q0FBZTs7SUFHZiwyQ0FBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFrdmJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ha3ZidXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ha3ZidXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFrdmJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsaWNrQ291bnQgPSAwO1xuICAvL0BPdXRwdXQoKSBPbmNsaWNrQnV0dG9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvL29yXG4gIEBPdXRwdXQoKSBPbmNsaWNrQnV0dG9uOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYnRuQ2xpY2tGcm9tVmlldygpe1xuICAgIHRoaXMuY2xpY2tDb3VudCsrO1xuICAgIHRoaXMuT25jbGlja0J1dHRvbi5lbWl0KHRoaXMuY2xpY2tDb3VudCk7XG4gIH1cblxufVxuIl19