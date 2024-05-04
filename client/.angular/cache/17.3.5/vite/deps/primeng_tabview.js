import {
  TimesIcon
} from "./chunk-5WXYMEF7.js";
import {
  Ripple,
  RippleModule
} from "./chunk-RKA4U5NR.js";
import {
  BaseIcon
} from "./chunk-OYMP3HZK.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-LZMSIMQG.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-YBJTPGKE.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-NCFBGS7G.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-TDR5BHHU.js";
import "./chunk-V2DXGMIT.js";
import "./chunk-UKEHM6V6.js";
import {
  __spreadValues
} from "./chunk-ZDOIMVJD.js";

// node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs
var ChevronLeftIcon = class _ChevronLeftIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵChevronLeftIcon_BaseFactory;
    return function ChevronLeftIcon_Factory(t) {
      return (ɵChevronLeftIcon_BaseFactory || (ɵChevronLeftIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronLeftIcon)))(t || _ChevronLeftIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronLeftIcon,
    selectors: [["ChevronLeftIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
    template: function ChevronLeftIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronLeftIcon, [{
    type: Component,
    args: [{
      selector: "ChevronLeftIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(t) {
      return (ɵChevronRightIcon_BaseFactory || (ɵChevronRightIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronRightIcon)))(t || _ChevronRightIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronRightIcon,
    selectors: [["ChevronRightIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: "ChevronRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var Tooltip = class _Tooltip {
  platformId;
  el;
  zone;
  config;
  renderer;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: UniqueComponentId() + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  scrollHandler;
  resizeListener;
  constructor(platformId, el, zone, config, renderer, viewContainer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.getOption("tooltipEvent") === "hover") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        } else if (this.getOption("tooltipEvent") === "focus") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.getTarget(this.el.nativeElement);
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = DomHandler.hasClass(e.relatedTarget, "p-tooltip") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-text") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }
  activate() {
    this.active = true;
    this.clearHideTimeout();
    if (this.getOption("showDelay"))
      this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
    else
      this.show();
    if (this.getOption("life")) {
      let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body")
      document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target")
      DomHandler.appendChild(this.container, this.el.nativeElement);
    else
      DomHandler.appendChild(this.container, this.getOption("appendTo"));
    this.container.style.display = "inline-block";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    this.align();
    DomHandler.fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto")
      zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else
      this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    switch (position) {
      case "top":
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "bottom":
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "left":
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case "right":
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign("right");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + DomHandler.getOuterWidth(this.el.nativeElement);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignLeft() {
    this.preAlign("left");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignTop() {
    this.preAlign("top");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignBottom() {
    this.preAlign("bottom");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return DomHandler.hasClass(el, "p-inputwrapper") ? DomHandler.findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(this.container);
    let height = DomHandler.getOuterHeight(this.container);
    let viewport = DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    if (this.getOption("tooltipEvent") === "hover") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    } else if (this.getOption("tooltipEvent") === "focus") {
      let target = this.getTarget(this.el.nativeElement);
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body")
        document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target")
        this.el.nativeElement.removeChild(this.container);
      else
        DomHandler.removeChild(this.container, this.getOption("appendTo"));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function Tooltip_Factory(t) {
    return new (t || _Tooltip)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Tooltip_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function Tooltip_keydown_escape_HostBindingHandler($event) {
          return ctx.onPressEscape($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: [InputFlags.HasDecoratorInputTransform, "escape", "escape", booleanAttribute],
      showDelay: [InputFlags.HasDecoratorInputTransform, "showDelay", "showDelay", numberAttribute],
      hideDelay: [InputFlags.HasDecoratorInputTransform, "hideDelay", "hideDelay", numberAttribute],
      life: [InputFlags.HasDecoratorInputTransform, "life", "life", numberAttribute],
      positionTop: [InputFlags.HasDecoratorInputTransform, "positionTop", "positionTop", numberAttribute],
      positionLeft: [InputFlags.HasDecoratorInputTransform, "positionLeft", "positionLeft", numberAttribute],
      autoHide: [InputFlags.HasDecoratorInputTransform, "autoHide", "autoHide", booleanAttribute],
      fitContent: [InputFlags.HasDecoratorInputTransform, "fitContent", "fitContent", booleanAttribute],
      hideOnEscape: [InputFlags.HasDecoratorInputTransform, "hideOnEscape", "hideOnEscape", booleanAttribute],
      content: [InputFlags.None, "pTooltip", "content"],
      disabled: [InputFlags.None, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hideDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionTop: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionLeft: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fitContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    onPressEscape: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(t) {
    return new (t || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    declarations: [Tooltip],
    imports: [CommonModule],
    exports: [Tooltip]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tabview.mjs
var _c0 = ["*"];
function TabPanel_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabPanel_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabPanel_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
  }
}
function TabPanel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵprojection(1);
    ɵɵtemplate(2, TabPanel_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hidden", !ctx_r0.selected);
    ɵɵattribute("id", ctx_r0.tabView.getTabContentId(ctx_r0.id))("aria-hidden", !ctx_r0.selected)("aria-labelledby", ctx_r0.tabView.getTabHeaderActionId(ctx_r0.id))("data-pc-name", "tabpanel");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.contentTemplate && (ctx_r0.cache ? ctx_r0.loaded : ctx_r0.selected));
  }
}
var _c1 = ["content"];
var _c2 = ["navbar"];
var _c3 = ["prevBtn"];
var _c4 = ["nextBtn"];
var _c5 = ["inkbar"];
var _c6 = ["elementToObserve"];
var _c7 = (a0) => ({
  "p-tabview p-component": true,
  "p-tabview-scrollable": a0
});
var _c8 = (a0, a1) => ({
  "p-highlight": a0,
  "p-disabled": a1
});
function TabView_button_3_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronLeftIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function TabView_button_3_3_ng_template_0_Template(rf, ctx) {
}
function TabView_button_3_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabView_button_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15, 4);
    ɵɵlistener("click", function TabView_button_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navBackward());
    });
    ɵɵtemplate(2, TabView_button_3_ChevronLeftIcon_2_Template, 1, 1, "ChevronLeftIcon", 16)(3, TabView_button_3_3_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("tabindex", ctx_r2.tabindex)("aria-label", ctx_r2.prevButtonAriaLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.previousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.previousIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 26);
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", tab_r5.leftIcon);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabView_ng_template_8_li_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 27);
    ɵɵtemplate(1, TabView_ng_template_8_li_0_ng_container_2_span_2_1_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tab_r5.leftIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 28);
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", tab_r5.rightIcon);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_1_ng_template_0_Template(rf, ctx) {
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabView_ng_template_8_li_0_ng_container_2_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 29);
    ɵɵtemplate(1, TabView_ng_template_8_li_0_ng_container_2_span_6_1_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tab_r5.rightIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabView_ng_template_8_li_0_ng_container_2_span_1_Template, 1, 1, "span", 21)(2, TabView_ng_template_8_li_0_ng_container_2_span_2_Template, 2, 1, "span", 22);
    ɵɵelementStart(3, "span", 23);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, TabView_ng_template_8_li_0_ng_container_2_span_5_Template, 1, 1, "span", 24)(6, TabView_ng_template_8_li_0_ng_container_2_span_6_Template, 2, 1, "span", 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", tab_r5.leftIcon && !tab_r5.leftIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", tab_r5.leftIconTemplate);
    ɵɵadvance(2);
    ɵɵtextInterpolate(tab_r5.header);
    ɵɵadvance();
    ɵɵproperty("ngIf", tab_r5.rightIcon && !tab_r5.rightIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", tab_r5.rightIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 32);
    ɵɵlistener("click", function TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const tab_r5 = ɵɵnextContext(3).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close($event, tab_r5));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-tabview-close");
  }
}
function TabView_ng_template_8_li_0_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 33);
  }
}
function TabView_ng_template_8_li_0_ng_container_4_3_ng_template_0_Template(rf, ctx) {
}
function TabView_ng_template_8_li_0_ng_container_4_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabView_ng_template_8_li_0_ng_container_4_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template, 1, 1, "TimesIcon", 30)(2, TabView_ng_template_8_li_0_ng_container_4_span_2_Template, 1, 0, "span", 31)(3, TabView_ng_template_8_li_0_ng_container_4_3_Template, 1, 0, null, 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", !tab_r5.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", tab_r5.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tab_r5.closeIconTemplate);
  }
}
function TabView_ng_template_8_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 19)(1, "a", 20);
    ɵɵlistener("click", function TabView_ng_template_8_li_0_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r4);
      const tab_r5 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.open($event, tab_r5));
    })("keydown", function TabView_ng_template_8_li_0_Template_a_keydown_1_listener($event) {
      ɵɵrestoreView(_r4);
      const tab_r5 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onTabKeyDown($event, tab_r5));
    });
    ɵɵtemplate(2, TabView_ng_template_8_li_0_ng_container_2_Template, 7, 5, "ng-container", 16)(3, TabView_ng_template_8_li_0_ng_container_3_Template, 1, 0, "ng-container", 17)(4, TabView_ng_template_8_li_0_ng_container_4_Template, 4, 3, "ng-container", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const tab_r5 = ctx_r6.$implicit;
    const i_r8 = ctx_r6.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(tab_r5.headerStyleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction2(19, _c8, tab_r5.selected, tab_r5.disabled))("ngStyle", tab_r5.headerStyle);
    ɵɵattribute("data-p-disabled", tab_r5.disabled);
    ɵɵadvance();
    ɵɵproperty("pTooltip", tab_r5.tooltip)("tooltipPosition", tab_r5.tooltipPosition)("positionStyle", tab_r5.tooltipPositionStyle)("tooltipStyleClass", tab_r5.tooltipStyleClass);
    ɵɵattribute("id", ctx_r2.getTabHeaderActionId(tab_r5.id))("aria-controls", ctx_r2.getTabContentId(tab_r5.id))("aria-selected", tab_r5.selected)("tabindex", tab_r5.disabled || !tab_r5.selected ? "-1" : ctx_r2.tabindex)("aria-disabled", tab_r5.disabled)("data-pc-index", i_r8)("data-pc-section", "headeraction");
    ɵɵadvance();
    ɵɵproperty("ngIf", !tab_r5.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tab_r5.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", tab_r5.closable);
  }
}
function TabView_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabView_ng_template_8_li_0_Template, 5, 22, "li", 18);
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    ɵɵproperty("ngIf", !tab_r5.closed);
  }
}
function TabView_button_11_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function TabView_button_11_3_ng_template_0_Template(rf, ctx) {
}
function TabView_button_11_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabView_button_11_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 34, 5);
    ɵɵlistener("click", function TabView_button_11_Template_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navForward());
    });
    ɵɵtemplate(2, TabView_button_11_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 16)(3, TabView_button_11_3_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("tabindex", ctx_r2.tabindex)("aria-label", ctx_r2.nextButtonAriaLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.nextIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.nextIconTemplate);
  }
}
var TabPanel = class _TabPanel {
  el;
  viewContainer;
  cd;
  /**
   * Defines if tab can be removed.
   * @group Props
   */
  closable = false;
  /**
   * Inline style of the tab header.
   * @group Props
   */
  get headerStyle() {
    return this._headerStyle;
  }
  set headerStyle(headerStyle) {
    this._headerStyle = headerStyle;
    this.tabView.cd.markForCheck();
  }
  /**
   * Style class of the tab header.
   * @group Props
   */
  get headerStyleClass() {
    return this._headerStyleClass;
  }
  set headerStyleClass(headerStyleClass) {
    this._headerStyleClass = headerStyleClass;
    this.tabView.cd.markForCheck();
  }
  /**
   * Whether a lazy loaded panel should avoid getting loaded again on reselection.
   * @group Props
   */
  cache = true;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "top";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Defines if tab is active.
   * @defaultValue false
   * @group Props
   */
  get selected() {
    return !!this._selected;
  }
  set selected(val) {
    this._selected = val;
    if (!this.loaded) {
      this.cd.detectChanges();
    }
    if (val)
      this.loaded = true;
  }
  /**
   * When true, tab cannot be activated.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return !!this._disabled;
  }
  set disabled(disabled) {
    this._disabled = disabled;
    this.tabView.cd.markForCheck();
  }
  /**
   * Title of the tabPanel.
   * @group Props
   */
  get header() {
    return this._header;
  }
  set header(header) {
    this._header = header;
    Promise.resolve().then(() => {
      this.tabView.updateInkBar();
      this.tabView.cd.markForCheck();
    });
  }
  /**
   * Left icon of the tabPanel.
   * @group Props
   * @deprecated since v15.4.2, use `lefticon` template instead.
   */
  get leftIcon() {
    return this._leftIcon;
  }
  set leftIcon(leftIcon) {
    this._leftIcon = leftIcon;
    this.tabView.cd.markForCheck();
  }
  /**
   * Left icon of the tabPanel.
   * @group Props
   * @deprecated since v15.4.2, use `righticon` template instead.
   */
  get rightIcon() {
    return this._rightIcon;
  }
  set rightIcon(rightIcon) {
    this._rightIcon = rightIcon;
    this.tabView.cd.markForCheck();
  }
  templates;
  closed = false;
  view = null;
  _headerStyle;
  _headerStyleClass;
  _selected;
  _disabled;
  _header;
  _leftIcon;
  _rightIcon = void 0;
  loaded = false;
  id;
  contentTemplate;
  headerTemplate;
  leftIconTemplate;
  rightIconTemplate;
  closeIconTemplate;
  tabView;
  constructor(tabView, el, viewContainer, cd) {
    this.el = el;
    this.viewContainer = viewContainer;
    this.cd = cd;
    this.tabView = tabView;
    this.id = UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "righticon":
          this.rightIconTemplate = item.template;
          break;
        case "lefticon":
          this.leftIconTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  ngOnDestroy() {
    this.view = null;
  }
  static ɵfac = function TabPanel_Factory(t) {
    return new (t || _TabPanel)(ɵɵdirectiveInject(forwardRef(() => TabView)), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabPanel,
    selectors: [["p-tabPanel"]],
    contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      closable: [InputFlags.HasDecoratorInputTransform, "closable", "closable", booleanAttribute],
      headerStyle: "headerStyle",
      headerStyleClass: "headerStyleClass",
      cache: [InputFlags.HasDecoratorInputTransform, "cache", "cache", booleanAttribute],
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      selected: "selected",
      disabled: "disabled",
      header: "header",
      leftIcon: "leftIcon",
      rightIcon: "rightIcon"
    },
    features: [ɵɵInputTransformsFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    consts: [["class", "p-tabview-panel", "role", "tabpanel", 3, "hidden", 4, "ngIf"], ["role", "tabpanel", 1, "p-tabview-panel", 3, "hidden"], [4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function TabPanel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, TabPanel_div_0_Template, 3, 6, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.closed);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanel, [{
    type: Component,
    args: [{
      selector: "p-tabPanel",
      template: `
        <div
            *ngIf="!closed"
            class="p-tabview-panel"
            role="tabpanel"
            [hidden]="!selected"
            [attr.id]="tabView.getTabContentId(id)"
            [attr.aria-hidden]="!selected"
            [attr.aria-labelledby]="tabView.getTabHeaderActionId(id)"
            [attr.data-pc-name]="'tabpanel'"
        >
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </ng-container>
        </div>
    `,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TabView,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => TabView)]
    }]
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }], {
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    headerStyle: [{
      type: Input
    }],
    headerStyleClass: [{
      type: Input
    }],
    cache: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    leftIcon: [{
      type: Input
    }],
    rightIcon: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TabView = class _TabView {
  platformId;
  el;
  cd;
  renderer;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether tab close is controlled at onClose event or not.
   * @defaultValue false
   * @group Props
   */
  controlClose;
  /**
   * When enabled displays buttons at each side of the tab headers to scroll the tab list.
   * @defaultValue false
   * @group Props
   */
  scrollable;
  /**
   * Index of the active tab to change selected tab programmatically.
   * @group Props
   */
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(val) {
    this._activeIndex = val;
    if (this.preventActiveIndexPropagation) {
      this.preventActiveIndexPropagation = false;
      return;
    }
    if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
      this.findSelectedTab().selected = false;
      this.tabs[this._activeIndex].selected = true;
      this.tabChanged = true;
      this.updateScrollBar(val);
    }
  }
  /**
   * When enabled, the focused tab is activated.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Used to define a string aria label attribute the forward navigation button.
   * @group Props
   */
  nextButtonAriaLabel;
  /**
   * Used to define a string aria label attribute the backward navigation button.
   * @group Props
   */
  prevButtonAriaLabel;
  /**
   * When activated, navigation buttons will automatically hide or show based on the available space within the container.
   * @group Props
   */
  autoHideButtons = true;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Callback to invoke on tab change.
   * @param {TabViewChangeEvent} event - Custom tab change event
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke on tab close.
   * @param {TabViewCloseEvent} event - Custom tab close event
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke on the active tab change.
   * @param {number} index - New active index
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  content;
  navbar;
  prevBtn;
  nextBtn;
  inkbar;
  tabPanels;
  templates;
  initialized;
  tabs;
  _activeIndex;
  preventActiveIndexPropagation;
  tabChanged;
  backwardIsDisabled = true;
  forwardIsDisabled = false;
  tabChangesSubscription;
  nextIconTemplate;
  previousIconTemplate;
  resizeObserver;
  container;
  list;
  buttonVisible;
  elementToObserve;
  constructor(platformId, el, cd, renderer) {
    this.platformId = platformId;
    this.el = el;
    this.cd = cd;
    this.renderer = renderer;
  }
  ngAfterContentInit() {
    this.initTabs();
    this.tabChangesSubscription = this.tabPanels.changes.subscribe((_) => {
      this.initTabs();
      this.refreshButtonState();
    });
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "previousicon":
          this.previousIconTemplate = item.template;
          break;
        case "nexticon":
          this.nextIconTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.autoHideButtons) {
        this.bindResizeObserver();
      }
    }
  }
  bindResizeObserver() {
    this.container = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="navcontent"]');
    this.list = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="nav"]');
    this.resizeObserver = new ResizeObserver(() => {
      if (this.list.offsetWidth >= this.container.offsetWidth) {
        this.buttonVisible = true;
      } else {
        this.buttonVisible = false;
      }
      this.updateButtonState();
      this.cd.detectChanges();
    });
    this.resizeObserver.observe(this.container);
  }
  unbindResizeObserver() {
    this.resizeObserver.unobserve(this.elementToObserve.nativeElement);
    this.resizeObserver = null;
  }
  ngAfterViewChecked() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.tabChanged) {
        this.updateInkBar();
        this.tabChanged = false;
      }
    }
  }
  ngOnDestroy() {
    if (this.tabChangesSubscription) {
      this.tabChangesSubscription.unsubscribe();
    }
    if (this.resizeObserver) {
      this.unbindResizeObserver();
    }
  }
  getTabHeaderActionId(tabId) {
    return `${tabId}_header_action`;
  }
  getTabContentId(tabId) {
    return `${tabId}_content`;
  }
  initTabs() {
    this.tabs = this.tabPanels.toArray();
    let selectedTab = this.findSelectedTab();
    if (!selectedTab && this.tabs.length) {
      if (this.activeIndex != null && this.tabs.length > this.activeIndex)
        this.tabs[this.activeIndex].selected = true;
      else
        this.tabs[0].selected = true;
      this.tabChanged = true;
    }
    this.cd.markForCheck();
  }
  onTabKeyDown(event, tab) {
    switch (event.code) {
      case "ArrowLeft":
        this.onTabArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onTabArrowRightKey(event);
        break;
      case "Home":
        this.onTabHomeKey(event);
        break;
      case "End":
        this.onTabEndKey(event);
        break;
      case "PageDown":
        this.onTabEndKey(event);
        break;
      case "PageUp":
        this.onTabHomeKey(event);
        break;
      case "Enter":
      case "Space":
        this.open(event, tab);
        break;
      default:
        break;
    }
  }
  onTabArrowLeftKey(event) {
    const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
    const index = DomHandler.getAttribute(prevHeaderAction, "data-pc-index");
    prevHeaderAction ? this.changeFocusedTab(event, prevHeaderAction, index) : this.onTabEndKey(event);
    event.preventDefault();
  }
  onTabArrowRightKey(event) {
    const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
    const index = DomHandler.getAttribute(nextHeaderAction, "data-pc-index");
    nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction, index) : this.onTabHomeKey(event);
    event.preventDefault();
  }
  onTabHomeKey(event) {
    const firstHeaderAction = this.findFirstHeaderAction();
    const index = DomHandler.getAttribute(firstHeaderAction, "data-pc-index");
    this.changeFocusedTab(event, firstHeaderAction, index);
    event.preventDefault();
  }
  onTabEndKey(event) {
    const lastHeaderAction = this.findLastHeaderAction();
    const index = DomHandler.getAttribute(lastHeaderAction, "data-pc-index");
    this.changeFocusedTab(event, lastHeaderAction, index);
    event.preventDefault();
  }
  changeFocusedTab(event, element, index) {
    if (element) {
      DomHandler.focus(element);
      element.scrollIntoView({
        block: "nearest"
      });
      if (this.selectOnFocus) {
        const tab = this.tabs[index];
        this.open(event, tab);
      }
    }
  }
  findNextHeaderAction(tabElement, selfCheck = false) {
    const headerElement = selfCheck ? tabElement : tabElement.nextElementSibling;
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") || DomHandler.getAttribute(headerElement, "data-pc-section") === "inkbar" ? this.findNextHeaderAction(headerElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
  }
  findPrevHeaderAction(tabElement, selfCheck = false) {
    const headerElement = selfCheck ? tabElement : tabElement.previousElementSibling;
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") || DomHandler.getAttribute(headerElement, "data-pc-section") === "inkbar" ? this.findPrevHeaderAction(headerElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
  }
  findFirstHeaderAction() {
    const firstEl = this.navbar.nativeElement.firstElementChild;
    return this.findNextHeaderAction(firstEl, true);
  }
  findLastHeaderAction() {
    const lastEl = this.navbar.nativeElement.lastElementChild;
    const lastHeaderAction = DomHandler.getAttribute(lastEl, "data-pc-section") === "inkbar" ? lastEl.previousElementSibling : lastEl;
    return this.findPrevHeaderAction(lastHeaderAction, true);
  }
  open(event, tab) {
    if (tab.disabled) {
      if (event) {
        event.preventDefault();
      }
      return;
    }
    if (!tab.selected) {
      let selectedTab = this.findSelectedTab();
      if (selectedTab) {
        selectedTab.selected = false;
      }
      this.tabChanged = true;
      tab.selected = true;
      let selectedTabIndex = this.findTabIndex(tab);
      this.preventActiveIndexPropagation = true;
      this.activeIndexChange.emit(selectedTabIndex);
      this.onChange.emit({
        originalEvent: event,
        index: selectedTabIndex
      });
      this.updateScrollBar(selectedTabIndex);
    }
    if (event) {
      event.preventDefault();
    }
  }
  close(event, tab) {
    if (this.controlClose) {
      this.onClose.emit({
        originalEvent: event,
        index: this.findTabIndex(tab),
        close: () => {
          this.closeTab(tab);
        }
      });
    } else {
      this.closeTab(tab);
      this.onClose.emit({
        originalEvent: event,
        index: this.findTabIndex(tab)
      });
    }
  }
  closeTab(tab) {
    if (tab.disabled) {
      return;
    }
    if (tab.selected) {
      this.tabChanged = true;
      tab.selected = false;
      for (let i = 0; i < this.tabs.length; i++) {
        let tabPanel = this.tabs[i];
        if (!tabPanel.closed && !tab.disabled) {
          tabPanel.selected = true;
          break;
        }
      }
    }
    tab.closed = true;
  }
  findSelectedTab() {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i];
      }
    }
    return null;
  }
  findTabIndex(tab) {
    let index = -1;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] == tab) {
        index = i;
        break;
      }
    }
    return index;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateInkBar() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.navbar) {
        const tabHeader = DomHandler.findSingle(this.navbar.nativeElement, "li.p-highlight");
        if (!tabHeader) {
          return;
        }
        this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + "px";
        this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar.nativeElement).left + "px";
      }
    }
  }
  updateScrollBar(index) {
    let tabHeader = this.navbar.nativeElement.children[index];
    if (tabHeader) {
      tabHeader.scrollIntoView({
        block: "nearest"
      });
    }
  }
  updateButtonState() {
    const content = this.content.nativeElement;
    const {
      scrollLeft,
      scrollWidth
    } = content;
    const width = DomHandler.getWidth(content);
    this.backwardIsDisabled = scrollLeft === 0;
    this.forwardIsDisabled = Math.round(scrollLeft) === scrollWidth - width;
  }
  refreshButtonState() {
    this.container = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="navcontent"]');
    this.list = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="nav"]');
    if (this.list.offsetWidth >= this.container.offsetWidth) {
      if (this.list.offsetWidth >= this.container.offsetWidth) {
        this.buttonVisible = true;
      } else {
        this.buttonVisible = false;
      }
      this.updateButtonState();
      this.cd.markForCheck();
    }
  }
  onScroll(event) {
    this.scrollable && this.updateButtonState();
    event.preventDefault();
  }
  getVisibleButtonWidths() {
    return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
  }
  navBackward() {
    const content = this.content.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft - width;
    content.scrollLeft = pos <= 0 ? 0 : pos;
  }
  navForward() {
    const content = this.content.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft + width;
    const lastPos = content.scrollWidth - width;
    content.scrollLeft = pos >= lastPos ? lastPos : pos;
  }
  static ɵfac = function TabView_Factory(t) {
    return new (t || _TabView)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabView,
    selectors: [["p-tabView"]],
    contentQueries: function TabView_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TabPanel, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabPanels = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TabView_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevBtn = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextBtn = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inkbar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elementToObserve = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      controlClose: [InputFlags.HasDecoratorInputTransform, "controlClose", "controlClose", booleanAttribute],
      scrollable: [InputFlags.HasDecoratorInputTransform, "scrollable", "scrollable", booleanAttribute],
      activeIndex: "activeIndex",
      selectOnFocus: [InputFlags.HasDecoratorInputTransform, "selectOnFocus", "selectOnFocus", booleanAttribute],
      nextButtonAriaLabel: "nextButtonAriaLabel",
      prevButtonAriaLabel: "prevButtonAriaLabel",
      autoHideButtons: [InputFlags.HasDecoratorInputTransform, "autoHideButtons", "autoHideButtons", booleanAttribute],
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute]
    },
    outputs: {
      onChange: "onChange",
      onClose: "onClose",
      activeIndexChange: "activeIndexChange"
    },
    features: [ɵɵInputTransformsFeature],
    ngContentSelectors: _c0,
    decls: 14,
    vars: 13,
    consts: [["elementToObserve", ""], ["content", ""], ["navbar", ""], ["inkbar", ""], ["prevBtn", ""], ["nextBtn", ""], [3, "ngClass", "ngStyle"], [1, "p-tabview-nav-container"], ["class", "p-tabview-nav-prev p-tabview-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabview-nav-content", 3, "scroll"], ["role", "tablist", 1, "p-tabview-nav"], ["ngFor", "", 3, "ngForOf"], ["role", "presentation", "aria-hidden", "true", 1, "p-tabview-ink-bar"], ["class", "p-tabview-nav-next p-tabview-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabview-panels"], ["type", "button", "pRipple", "", 1, "p-tabview-nav-prev", "p-tabview-nav-btn", "p-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "presentation", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "tab", "pRipple", "", 1, "p-tabview-nav-link", 3, "click", "keydown", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], ["class", "p-tabview-left-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-tabview-left-icon", 4, "ngIf"], [1, "p-tabview-title"], ["class", "p-tabview-right-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-tabview-right-icon", 4, "ngIf"], [1, "p-tabview-left-icon", 3, "ngClass"], [1, "p-tabview-left-icon"], [1, "p-tabview-right-icon", 3, "ngClass"], [1, "p-tabview-right-icon"], [3, "styleClass", "click", 4, "ngIf"], ["class", "tab.closeIconTemplate", 4, "ngIf"], [3, "click", "styleClass"], [1, "tab.closeIconTemplate"], ["type", "button", "pRipple", "", 1, "p-tabview-nav-next", "p-tabview-nav-btn", "p-link", 3, "click"]],
    template: function TabView_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 6)(1, "div", 7, 0);
        ɵɵtemplate(3, TabView_button_3_Template, 4, 4, "button", 8);
        ɵɵelementStart(4, "div", 9, 1);
        ɵɵlistener("scroll", function TabView_Template_div_scroll_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onScroll($event));
        });
        ɵɵelementStart(6, "ul", 10, 2);
        ɵɵtemplate(8, TabView_ng_template_8_Template, 1, 1, "ng-template", 11);
        ɵɵelement(9, "li", 12, 3);
        ɵɵelementEnd()();
        ɵɵtemplate(11, TabView_button_11_Template, 4, 4, "button", 13);
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 14);
        ɵɵprojection(13);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c7, ctx.scrollable))("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "tabview");
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.scrollable && !ctx.backwardIsDisabled && ctx.autoHideButtons);
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "navcontent");
        ɵɵadvance(2);
        ɵɵattribute("data-pc-section", "nav");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.tabs);
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "inkbar");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.scrollable && !ctx.forwardIsDisabled && ctx.buttonVisible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Tooltip, Ripple, TimesIcon, ChevronLeftIcon, ChevronRightIcon],
    styles: ["@layer primeng{.p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:inline-flex;min-width:100%;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabView, [{
    type: Component,
    args: [{
      selector: "p-tabView",
      template: `
        <div [ngClass]="{ 'p-tabview p-component': true, 'p-tabview-scrollable': scrollable }" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'tabview'">
            <div #elementToObserve class="p-tabview-nav-container">
                <button
                    *ngIf="scrollable && !backwardIsDisabled && autoHideButtons"
                    #prevBtn
                    class="p-tabview-nav-prev p-tabview-nav-btn p-link"
                    (click)="navBackward()"
                    [attr.tabindex]="tabindex"
                    [attr.aria-label]="prevButtonAriaLabel"
                    type="button"
                    pRipple
                >
                    <ChevronLeftIcon *ngIf="!previousIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                </button>
                <div #content class="p-tabview-nav-content" (scroll)="onScroll($event)" [attr.data-pc-section]="'navcontent'">
                    <ul #navbar class="p-tabview-nav" role="tablist" [attr.data-pc-section]="'nav'">
                        <ng-template ngFor let-tab [ngForOf]="tabs" let-i="index">
                            <li role="presentation" [ngClass]="{ 'p-highlight': tab.selected, 'p-disabled': tab.disabled }" [attr.data-p-disabled]="tab.disabled" [ngStyle]="tab.headerStyle" [class]="tab.headerStyleClass" *ngIf="!tab.closed">
                                <a
                                    role="tab"
                                    class="p-tabview-nav-link"
                                    [pTooltip]="tab.tooltip"
                                    [tooltipPosition]="tab.tooltipPosition"
                                    [positionStyle]="tab.tooltipPositionStyle"
                                    [tooltipStyleClass]="tab.tooltipStyleClass"
                                    [attr.id]="getTabHeaderActionId(tab.id)"
                                    [attr.aria-controls]="getTabContentId(tab.id)"
                                    [attr.aria-selected]="tab.selected"
                                    [attr.tabindex]="tab.disabled || !tab.selected ? '-1' : tabindex"
                                    [attr.aria-disabled]="tab.disabled"
                                    [attr.data-pc-index]="i"
                                    [attr.data-pc-section]="'headeraction'"
                                    (click)="open($event, tab)"
                                    (keydown)="onTabKeyDown($event, tab)"
                                    pRipple
                                >
                                    <ng-container *ngIf="!tab.headerTemplate">
                                        <span class="p-tabview-left-icon" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon && !tab.leftIconTemplate"></span>
                                        <span *ngIf="tab.leftIconTemplate" class="p-tabview-left-icon">
                                            <ng-template *ngTemplateOutlet="tab.leftIconTemplate"></ng-template>
                                        </span>
                                        <span class="p-tabview-title">{{ tab.header }}</span>
                                        <span class="p-tabview-right-icon" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon && !tab.rightIconTemplate"></span>
                                        <span *ngIf="tab.rightIconTemplate" class="p-tabview-right-icon">
                                            <ng-template *ngTemplateOutlet="tab.rightIconTemplate"></ng-template>
                                        </span>
                                    </ng-container>
                                    <ng-container *ngTemplateOutlet="tab.headerTemplate"></ng-container>
                                    <ng-container *ngIf="tab.closable">
                                        <TimesIcon *ngIf="!tab.closeIconTemplate" [styleClass]="'p-tabview-close'" (click)="close($event, tab)" />
                                        <span class="tab.closeIconTemplate" *ngIf="tab.closeIconTemplate"></span>
                                        <ng-template *ngTemplateOutlet="tab.closeIconTemplate"></ng-template>
                                    </ng-container>
                                </a>
                            </li>
                        </ng-template>
                        <li #inkbar class="p-tabview-ink-bar" role="presentation" aria-hidden="true" [attr.data-pc-section]="'inkbar'"></li>
                    </ul>
                </div>
                <button
                    *ngIf="scrollable && !forwardIsDisabled && buttonVisible"
                    #nextBtn
                    [attr.tabindex]="tabindex"
                    [attr.aria-label]="nextButtonAriaLabel"
                    class="p-tabview-nav-next p-tabview-nav-btn p-link"
                    (click)="navForward()"
                    type="button"
                    pRipple
                >
                    <ChevronRightIcon *ngIf="!nextIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                </button>
            </div>
            <div class="p-tabview-panels">
                <ng-content></ng-content>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:inline-flex;min-width:100%;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    controlClose: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    activeIndex: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nextButtonAriaLabel: [{
      type: Input
    }],
    prevButtonAriaLabel: [{
      type: Input
    }],
    autoHideButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    activeIndexChange: [{
      type: Output
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    navbar: [{
      type: ViewChild,
      args: ["navbar"]
    }],
    prevBtn: [{
      type: ViewChild,
      args: ["prevBtn"]
    }],
    nextBtn: [{
      type: ViewChild,
      args: ["nextBtn"]
    }],
    inkbar: [{
      type: ViewChild,
      args: ["inkbar"]
    }],
    tabPanels: [{
      type: ContentChildren,
      args: [TabPanel]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    elementToObserve: [{
      type: ViewChild,
      args: ["elementToObserve"]
    }]
  });
})();
var TabViewModule = class _TabViewModule {
  static ɵfac = function TabViewModule_Factory(t) {
    return new (t || _TabViewModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TabViewModule,
    declarations: [TabView, TabPanel],
    imports: [CommonModule, SharedModule, TooltipModule, RippleModule, TimesIcon, ChevronLeftIcon, ChevronRightIcon],
    exports: [TabView, TabPanel, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, TooltipModule, RippleModule, TimesIcon, ChevronLeftIcon, ChevronRightIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabViewModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, TooltipModule, RippleModule, TimesIcon, ChevronLeftIcon, ChevronRightIcon],
      exports: [TabView, TabPanel, SharedModule],
      declarations: [TabView, TabPanel]
    }]
  }], null, null);
})();
export {
  TabPanel,
  TabView,
  TabViewModule
};
//# sourceMappingURL=primeng_tabview.js.map
