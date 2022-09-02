import { b as __classPrivateFieldGet, i, _ as __decorate, e, c as colorContextProvider, d as colorContextConsumer, s, n, y, o, f as __classPrivateFieldSet, a as e$1 } from './color-chunk.js';
import './pfe-icon-chunk.js';

var _DirController_instances, _DirController_getDirContext;
/**
 * Discovers and reports the host element's closest `dir`,
 * even across shadow roots. Does not observe DOM changes.
 * @see https://caniuse.com/css-dir-pseudo
 */
class DirController {
    constructor(host) {
        this.host = host;
        _DirController_instances.add(this);
        this.dir = __classPrivateFieldGet(this, _DirController_instances, "m", _DirController_getDirContext).call(this);
    }
    hostConnected() {
        this.dir = __classPrivateFieldGet(this, _DirController_instances, "m", _DirController_getDirContext).call(this);
    }
}
_DirController_instances = new WeakSet(), _DirController_getDirContext = function _DirController_getDirContext() {
    let host = this.host;
    while (host) {
        const dirContext = host.closest('[dir]');
        if (dirContext?.hasAttribute('dir')) {
            return dirContext?.getAttribute('dir') || 'ltr';
        }
        else {
            ({ host } = host?.getRootNode() ?? {});
        }
    }
    return 'ltr';
};

const styles = i`:host {
  display: inline-flex;
  position: relative;
  z-index: 0;
  align-items: center;
  max-width: max-content;
  background-color: var(--rh-cta-background-color);
  border-radius: var(--rh-border-radius-default, 0.1875rem);
  border: var(--rh-border-width-sm, 0.0625rem) solid var(--rh-cta-border-color, transparent);
  cursor: pointer;
  --rh-context-background-color: var(--rh-cta-background-color) !important;
}

::slotted(*) {
  white-space: normal;
  display: inline;
  padding: 0.6rem, 0 !important;
  color: inherit !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  text-decoration: inherit !important;
}

::slotted(button),
::slotted(input) {
  background-color: transparent;
  border: medium none;
  margin: 0px;
  padding: 0px;
  text-align: left;
}

#container {
  display: block;
  white-space: nowrap;
  min-width: 100%;
  color: var(--rh-cta-color);
  font-family: var(--rh-font-family-heading, "RedHatDisplay", "Overpass", Helvetica, Arial, sans-serif);
  font-size: var(--rh-font-size-text-xl, 1.125rem);
  font-weight: var(--rh-font-weight-bold, 600);
  line-height: var(--rh-line-height-lg, 1.5);
  text-decoration: var(--rh-cta-text-decoration);
  --_arrow-size: 13px;
}

/** Inner border */
#container::after {
  --_offset: 1px;
  content: '';
  display: block;
  height: calc(100% - var(--_offset) * 2);
  width: calc(100% - var(--_offset) * 2);

  box-sizing: border-box;
  position: absolute;
  top: var(--_offset);
  left: var(--_offset);
  z-index: -1;

  border: var(--rh-border-width-sm, 0.0625rem) solid var(--rh-cta-inner-border-color);
  border-radius: 2px;
  outline: none;
}

/* Default CTA arrow wrap fix for Firefox */
@media all and (min-moz-device-pixel-ratio:0) {
  :host(:not([variant])) #container {
    max-width: calc(100% - 1ch - var(--_arrow-size));
  }
}

/** Default variant arrow icon */
svg {
  display: inline;
  fill: currentColor;
  width: var(--_arrow-size);
  height: var(--_arrow-size);
  margin-bottom: -1px;
  padding-inline: 3px;
  translate: 0 0;
  transition: translate var(--_trans);
  --_trans:
    var(--rh-animation-speed, 0.3s)
    var(--rh-animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946));
}

#container.rtl svg {
  rotate: 180deg;
}

/*****************************************************************************
 * FOCUS STATE                                                               *
 *****************************************************************************/

:host(:is(:focus, :focus-within)),
:host(:is(:focus, :focus-within)) ::slotted(*),
::slotted(:focus) {
  outline: none !important;
}

:host(:is(:focus, :focus-within)) {
  border-color: var(--rh-cta-focus-border-color);
  --rh-cta-inner-border-color: var(--rh-cta-focus-inner-border-color);
  --rh-cta-background-color: var(--rh-cta-focus-background-color) !important;
}

:host(:is(:focus, :focus-within)) #container {
  --rh-cta-color: var(--rh-cta-focus-color);
  --rh-cta-text-decoration: var(--rh-cta-focus-text-decoration);
  background-color: var(--rh-cta-focus-container-background-color, var(--rh-cta-focus-background-color));
}

/*****************************************************************************
 * HOVER STATE                                                               *
 *****************************************************************************/

:host(:hover) {
  background-color: var(--rh-cta-hover-background-color);
  border-color: var(--rh-cta-hover-border-color);
  --rh-cta-inner-border-color: var(--rh-cta-hover-inner-border-color);
}

:host(:hover) #container {
  color: var(--rh-cta-hover-color);
  --rh-cta-text-decoration: var(--rh-cta-hover-text-decoration);
}

:host(:hover) svg {
  translate: 3px 0;
}

:host(:hover) #container.rtl svg {
  translate: -3px 0;
}

/*****************************************************************************
 * ACTIVE STATE                                                              *
 *****************************************************************************/

:host(:active) {
  background-color: var(--rh-cta-active-background-color);
  --rh-cta-inner-border-color: var(--rh-cta-active-inner-border-color) !important;
}

:host(:active) #container {
  --rh-cta-background-color: var(--rh-cta-active-container-background-color, var(--rh-cta-active-background-color));
}

/*****************************************************************************
 * VARIANTS                                                                  *
 *****************************************************************************/

:host([variant]) #container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  background-color: transparent;
}

:host([variant\$=ary]) ::slotted(*) {
  font-size: var(--rh-cta-font-size-priority, var(--rh-font-size-text-lg, 1rem));
  text-align: center;
}

:host([variant]) ::slotted(*) {
  padding: var(--rh-space-lg, 1rem) var(--rh-space-2xl, 2rem) !important;
}

:host([variant]) svg {
  display: none;
}

/*****************************************************************************
 * DEFAULT
 *****************************************************************************/

:host(:not([variant])) {
  --rh-cta-background-color: transparent;
  --rh-cta-border-color: transparent;
  --rh-cta-color: var(--rh-color-interactive-blue, #0066cc);
  --rh-cta-hover-background-color: transparent;
  --rh-cta-hover-border-color: transparent;
  --rh-cta-hover-inner-border-color: transparent;
  --rh-cta-hover-color: var(--rh-context-color-link-hover, #004080);
  --rh-cta-hover-text-decoration: none;
  --rh-cta-focus-background-color: transparent;
  --rh-cta-focus-container-background-color: #0066cc1a; /* --rh-color-border-interactive-on-light with 10% opacity */
  --rh-cta-focus-border-color: transparent;
  --rh-cta-focus-color: var(--rh-context-light-color-focus, #0066cc);
  --rh-cta-focus-inner-border-color: transparent;
  --rh-cta-focus-text-decoration: none;
  --rh-cta-active-container-background-color: #0066cc1a; /* --rh-color-border-interactive-on-light with 10% opacity */
  --rh-cta-active-inner-border-color: transparent;
  --rh-cta-active-text-decoration: none;
}

:host(:not([variant])[on=dark]) {
  --rh-cta-color: var(--rh-color-interactive-blue-lighter, #73BCF7);
  --rh-cta-hover-color: var(--rh-color-interactive-blue-lightest, #bee1f4);
  --rh-cta-focus-container-background-color: #73BCF740; /* --rh-color-interactive-blue-lighter with 25% opacity */
  --rh-cta-focus-border-color: transparent;
  --rh-cta-focus-color: var(--rh-color-interactive-blue-lighter, #73BCF7);
  --rh-cta-focus-inner-border-color: transparent;
  --rh-cta-focus-text-decoration: none;
  --rh-cta-active-container-background-color: #73BCF740; /* --rh-color-interactive-blue-lighter with 25% opacity */
  --rh-cta-active-text-decoration: none;
}

/*****************************************************************************
 * PRIMARY
 *****************************************************************************/

:host([variant=primary]) {
  --rh-cta-background-color: var(--rh-color-brand-red-on-light, #ee0000);
  --rh-cta-border-color: var(--rh-color-brand-red-on-light, #ee0000);
  --rh-cta-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --rh-cta-hover-background-color: var(--rh-color-brand-red-dark, #be0000);
  --rh-cta-hover-border-color: var(--rh-color-brand-red-dark, #be0000);
  --rh-cta-hover-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --rh-cta-focus-background-color: var(--rh-color-brand-red-on-light, #ee0000);
  --rh-cta-focus-border-color: var(--rh-color-brand-red-on-light, #ee0000);
  --rh-cta-focus-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --rh-cta-focus-inner-border-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --rh-cta-active-background-color: var(--rh-color-brand-red-dark, #be0000);
  --rh-cta-active-inner-border-color: var(--rh-color-text-primary-on-dark, #ffffff);
}

/*****************************************************************************
 * SECONDARY
 *****************************************************************************/

:host([variant=secondary]) {
  --rh-cta-background-color: transparent;
  --rh-cta-border-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-color: var(--rh-color-text-primary-on-light, #151515);
  --rh-cta-hover-background-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-hover-border-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-hover-color: var(--rh-color-primary-on-dark, #ffffff);
  --rh-cta-focus-background-color: var(--rh-color-surface-light, #f0f0f0);
  --rh-cta-focus-border-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-focus-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-focus-inner-border-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-active-color: var(--rh-color-surface-lightest, #ffffff);
  --rh-cta-active-background-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-active-inner-border-color: var(--rh-color-surface-light, #f0f0f0);
}

:host([variant=secondary][on=dark]) {
  --rh-cta-border-color: var(--rh-color-border-strong-on-dark, #FFFFFF);
  --rh-cta-color: var(--rh-color-text-primary-on-dark, #FFFFFF);
  --rh-cta-hover-background-color: var(--rh-color-surface-lightest, #ffffff);
  --rh-cta-hover-border-color: var(--rh-color-surface-lightest, #ffffff);
  --rh-cta-hover-color: var(--rh-color-text-primary-on-light, #151515);
  --rh-cta-focus-background-color: var(--rh-color-surface-dark, #3c3f42);
  --rh-cta-focus-border-color: var(--rh-color-border-strong-on-dark, #FFFFFF);
  --rh-cta-focus-inner-border-color: var(--rh-color-border-strong-on-dark, #FFFFFF);
  --rh-cta-focus-color: var(--rh-color-text-primary-on-dark, #FFFFFF);
  --rh-cta-active-color: var(--rh-color-text-primary-on-light, #151515);
  --rh-cta-active-background-color: var(--rh-color-surface-lightest, #FFFFFF);
  --rh-cta-active-inner-border-color: var(--rh-color-border-strong-on-light, #151515);
}

/*****************************************************************************
 * BRICK
 *****************************************************************************/

:host([variant=brick]) #container {
  font-weight: var(--rh-font-weight-body-text-regular, 400);
}

:host([variant=brick]) {
  --rh-cta-background-color: transparent;
  --rh-cta-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-color: var(--rh-color-interactive-blue-darker, #06c);
  --rh-cta-hover-background-color: var(--rh-color-surface-lighter, #f5f5f5);
  --rh-cta-hover-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-hover-color: var(--rh-color-interactive-blue-darkest, #004080);
  --rh-cta-hover-text-decoration: underline;
  --rh-cta-focus-color: var(--rh-color-interactive-blue-darker, #06c);
  --rh-cta-focus-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-focus-inner-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-focus-text-decoration: none;
  --rh-cta-active-background-color: var(--rh-color-surface-lighter, #f5f5f5);
  --rh-cta-active-inner-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-active-text-decoration: underline;
}

:host([variant=brick][on=dark]) {
  --rh-cta-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-color: var(--rh-color-interactive-blue-lighter, #73bcf7);
  --rh-cta-hover-background-color: var(--rh-color-surface-darker, #212427);
  --rh-cta-hover-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-hover-color: var(--rh-color-interactive-blue-lightest, #bee1f4);
  --rh-cta-hover-text-decoration: underline;
  --rh-cta-focus-color: var(--rh-color-interactive-blue-lighter, #73bcf7);
  --rh-cta-focus-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-focus-inner-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-focus-text-decoration: none;
  --rh-cta-active-background-color: var(--rh-color-surface-darker, #212427);
  --rh-cta-active-inner-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-active-text-decoration: underline;
}

/* chrome <= 103 */
@supports not (translate: 0 0) {
  svg {
    transform: translate(0, 0);
    transition: transform var(--_trans);
  }
  #container.rtl svg {
    transform: translate(0, 0) rotate(180deg);
  }
  :host(:hover) svg { transform: translate(3px, 0); }
  :host(:hover) #container.rtl svg { transform: translate(-3px, 0) rotate(180deg); }
}

`;

var _RhCta_instances, _RhCta_initializing, _RhCta_dir, _RhCta_logger, _RhCta_isDefault_get;
const supportedTags = ['a', 'button']; // add input later
function isSupportedContent(el) {
    return !!el && supportedTags.includes(el.localName);
}
const CONTENT = new WeakMap();
function contentInitialized(el) {
    return !!el && !!CONTENT.get(el);
}
function isButton(element) {
    return element.tagName.toLowerCase() === 'button';
}
/**
 * Call to action stands out from regular hypertext links, and is used for linking users to webpages.
 *
 * @summary Directs a user to other pages or displays extra content
 *
 * @slot - We expect an anchor tag, `<a>` with an `href`, to be the first child inside `rh-cta` element. Less preferred but allowed for specific use-cases include: `<button>` (note however that the `button` tag is not supported for the default CTA styles).
 *
 * @csspart container - container element for slotted CTA
 *
 */
let RhCta = class RhCta extends s {
    constructor() {
        super(...arguments);
        _RhCta_instances.add(this);
        /** The slotted `<a>` or `<button>` element */
        this.cta = null;
        /** true while the initializer method is running - to prevent double-execution */
        _RhCta_initializing.set(this, false);
        /** Is the element in an RTL context? */
        _RhCta_dir.set(this, new DirController(this));
        _RhCta_logger.set(this, new n(this));
    }
    render() {
        const rtl = __classPrivateFieldGet(this, _RhCta_dir, "f").dir === 'rtl';
        return y `
      <span id="container" part="container" class="${o({ rtl })}">
        <slot @slotchange=${this.firstUpdated}></slot>${!__classPrivateFieldGet(this, _RhCta_instances, "a", _RhCta_isDefault_get) && !this.icon ? '' : this.icon ? y `
        <pfe-icon icon=${this.icon} size="sm"></pfe-icon>` : y `&nbsp;<svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.56 31.56" focusable="false" width="1em">
          <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z" />
        </svg>`}
      </span>
    `;
    }
    firstUpdated() {
        let [cta] = this.shadowRoot?.querySelector('slot')?.assignedElements() ?? [];
        while (cta instanceof HTMLSlotElement) {
            [cta] = cta.assignedElements();
        }
        if (contentInitialized(cta) || __classPrivateFieldGet(this, _RhCta_initializing, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _RhCta_initializing, true, "f");
        // If the first child does not exist or that child is not a supported tag
        if (!isSupportedContent(cta)) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`The first child in the light DOM must be a supported call-to-action tag (<a>, <button>)`);
        }
        else if (isButton(cta) && !this.variant) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`Button tag is not supported semantically by the default link styles`);
        }
        else {
            // Capture the first child as the CTA element
            this.cta = cta;
            CONTENT.set(this.cta, true);
            __classPrivateFieldSet(this, _RhCta_initializing, false, "f");
        }
    }
};
_RhCta_initializing = new WeakMap(), _RhCta_dir = new WeakMap(), _RhCta_logger = new WeakMap(), _RhCta_instances = new WeakSet(), _RhCta_isDefault_get = function _RhCta_isDefault_get() {
    return !this.hasAttribute('variant');
};
RhCta.version = '{{version}}';
RhCta.styles = [styles];
__decorate([
    e({ reflect: true })
], RhCta.prototype, "variant", void 0);
__decorate([
    colorContextProvider(),
    e({ reflect: true, attribute: 'color-palette' })
], RhCta.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer(),
    e({ reflect: true })
], RhCta.prototype, "on", void 0);
__decorate([
    e({ reflect: true })
], RhCta.prototype, "icon", void 0);
RhCta = __decorate([
    e$1('rh-cta')
], RhCta);

export { RhCta };
