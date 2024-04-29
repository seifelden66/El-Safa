import {
  SharedModule
} from "./chunk-XI47K54R.js";
import {
  CommonModule,
  NgClass
} from "./chunk-NCFBGS7G.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-TDR5BHHU.js";
import "./chunk-V2DXGMIT.js";
import "./chunk-UKEHM6V6.js";
import "./chunk-ZDOIMVJD.js";

// node_modules/primeng/fesm2022/primeng-inputicon.mjs
var _c0 = ["*"];
var InputIcon = class _InputIcon {
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  static ɵfac = function InputIcon_Factory(t) {
    return new (t || _InputIcon)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _InputIcon,
    selectors: [["p-inputIcon"]],
    inputs: {
      styleClass: "styleClass"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [[1, "p-input-icon", 3, "ngClass"]],
    template: function InputIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.styleClass);
      }
    },
    dependencies: [NgClass],
    styles: ["@layer primeng{.p-fluid .p-icon-field-left,.p-fluid .p-icon-field-right{width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIcon, [{
    type: Component,
    args: [{
      selector: "p-inputIcon",
      template: `<span class="p-input-icon" [ngClass]="styleClass"><ng-content></ng-content></span>`,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["@layer primeng{.p-fluid .p-icon-field-left,.p-fluid .p-icon-field-right{width:100%}}\n"]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }]
  });
})();
var InputIconModule = class _InputIconModule {
  static ɵfac = function InputIconModule_Factory(t) {
    return new (t || _InputIconModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputIconModule,
    declarations: [InputIcon],
    imports: [CommonModule],
    exports: [InputIcon, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputIcon, SharedModule],
      declarations: [InputIcon]
    }]
  }], null, null);
})();
export {
  InputIcon,
  InputIconModule
};
//# sourceMappingURL=primeng_inputicon.js.map
