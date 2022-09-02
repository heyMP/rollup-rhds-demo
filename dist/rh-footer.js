import { y as y$1, e as e$2, i as i$8, r as r$5, _ as __decorate, s as s$3, n as n$7, a as e$3, l as l$8, c as colorContextProvider, b as __classPrivateFieldGet, o as o$5 } from './color-chunk.js';
import './pfe-icon-chunk.js';

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=Symbol.for(""),l$7=t=>{if((null==t?void 0:t.r)===e$1)return null==t?void 0:t._$litStatic$},o$4=t=>({_$litStatic$:t,r:e$1}),s$2=new Map,a$6=t=>(r,...e)=>{const o=e.length;let i,a;const n=[],u=[];let c,$=0,f=!1;for(;$<o;){for(c=r[$];$<o&&void 0!==(a=e[$],i=l$7(a));)c+=i+r[++$],f=!0;u.push(a),n.push(c),$++;}if($===o&&n.push(r[o]),f){const t=n.join("$$lit$$");void 0===(r=s$2.get(t))&&(n.raw=n,s$2.set(t,r=n)),e=u;}return t(r,...e)},n$6=a$6(y$1);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$2(t){return e$2({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$3=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$7(i,n){return o$3({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

function n$5(t="pfe"){return `${t}-${Math.random().toString(36).substr(2,9)}`}

const styles$4 = i$8`/* TODO: RHDS tokens */
:host {
  --_icon-color: var(--rh-footer-icon-color, #8a8d90);
  --_icon-color-hover: var(--rh-footer-icon-color-hover, #b8bbbe);
  --_border-color: var(--rh-footer-border-color, #6a6e73);
  --_accent-color: var(--rh-footer-accent-color, #e00);
  --_section-side-gap: var(--rh-footer-section-side-gap, var(--pf-global--spacer--xl, 32px));

  /* Style Accordions */
  --pfe-accordion--Color: #fff;
  --pfe-accordion--Color--expanded: #fff;
  --pfe-accordion--Color--active: #fff;
  --pfe-accordion--BackgroundColor: transparent;
  --pfe-accordion--BackgroundColor--active: transparent;
  --pfe-accordion--BackgroundColor--expanded: #151515;
  --pfe-accordion--BorderColor: var(--_border-color);
  --pfe-accordion--FontSize--header: initial;
  --pfe-accordion--FontWeight--header: 300;
  --pfe-accordion--accent--expanded: var(--_accent-color);
  --pfe-accordion--accent--active: var(--_accent-color);

  /* apply sensible defaults based on redhat standards. */
  color: #fff;
  font-family: 'Red Hat Text', 'RedHatText', 'Overpass', Overpass, Arial, sans-serif;
  line-height: 150%;
  font-weight: 300;

  font-size: initial;
  display: flex;
  flex-direction: column;
}

pfe-accordion {
  --pfe-context-background-color: transparent;
}

* {
  box-sizing: border-box;
}

::slotted(:is(h1,h2,h3,h4,h5,h6)) {
  font-family: var(--rh-font-family-heading, "RedHatDisplay", "Overpass", Overpass, Helvetica, Arial, sans-serif) !important;
}

/**
 * Debugging
 */
:host([debug]) *:not(.spacer, .base, a, svg) {
  position: relative;
  outline: 2px dotted red;
  /* make sure we have some */
  min-height: 1.5625em;
}

:host([debug]) *:not(.spacer, .base, a, svg)::after {
  content: attr(part);
  display: block;
  position: absolute;
  color: white;
  background-color: darkslategray;
  padding: 0.3em;
  top: 0;
  right: 0;
  font-size: 0.7rem;
}

/**
 * Regions
 */
.section {
  padding: var(--pf-global--spacer--xl, 32px) var(--_section-side-gap);
}

.header {
  background-color: #212427;
  /* children should flex wrap on mobile */
  display: flex;
  flex-wrap: wrap;
  gap: var(--pf-global--spacer--xl, 32px);
  align-items: center;
  position: relative;
}

.header::after {
  display: block;
  content: '';
  background-color: var(--_border-color);
  height: 1px;
  position: absolute;
  bottom: 0px;
  width: calc(100% - var(--_section-side-gap) * 2);
  left: var(--_section-side-gap);
}

.header-primary {
  flex: 1 1 auto;
}

.header-secondary {
  /* secondary should be push to the end */
  /* of the line on mobile */
  flex: 0 1 auto;
}

.main {
  background-color: #212427;
  display: grid;
  gap: var(--pf-global--spacer--xl, 32px);
}

.global-base {
  --link-font-size: 0.75em;
  /* reduce the line-height for global links */
  line-height: 100%;
  background-color: #151515;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'logo'
    'primary'
    'spacer'
    'secondary'
    'tertiary';
  gap: 2em 1.5em;
}

.global-logo {
  grid-area: logo;
  width: 2.625em;
}

.global-logo-image {
  fill: var(--_icon-color);
}

.global-logo-image:is(:hover, :focus-within) {
  fill: var(--_icon-color-hover);
}

.global-primary {
  grid-area: primary;
}

.global-secondary {
  grid-area: secondary;
  color: #d2d2d2;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-between;
}

.global-tertiary {
  grid-area: tertiary;
  display: grid;
  justify-content: start;
  align-items: start;
}

.global-links-primary {
  display: flex;
  flex-direction: column;
  gap: 0.5em 1.5em;
}

.global-links-secondary {
  display: flex;
  flex-direction: column;
  gap: 0.5em 1.5em;
}

/* reduce the font size of the content in these regions */
:is(.global-primary, .global-secondary, .global-tertiary) ::slotted(*) {
  font-size: 0.75em;
}

.logo {
  /* fix wierd problem where there is extra space below logo */
  line-height: 0px;
}

.social-links {
  display: flex;
  margin-inline-start: 0;
  padding-inline-start: 0;
}

.social-links rh-footer-links,
.social-links slot::slotted(rh-footer-links) {
  display: flex;
  flex-direction: row;
  gap: 1.5em;
}

[part="base"]:not(.isMobile) .links {
  display: grid;
  grid-template-columns: repeat(1fr, 25%);
  grid-template-rows: repeat(2, min-content auto);
  gap: var(--rh-footer-links-column-gap, 32px);
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(1)) {
  grid-column: 1/2;
  grid-row: 1/2;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(2)) {
  grid-column: 2/3;
  grid-row: 1/2;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(3)) {
  grid-column: 3/4;
  grid-row: 1/2;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(4)) {
  grid-column: 4/5;
  grid-row: 1/2;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(5)) {
  grid-column: 1/2;
  grid-row: 3/4;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(6)) {
  grid-column: 2/3;
  grid-row: 3/4;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(7)) {
  grid-column: 3/4;
  grid-row: 3/4;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(8)) {
  grid-column: 4/5;
  grid-row: 3/4;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(1))) {
  grid-column: 1/2;
  grid-row: 2/3;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(2))) {
  grid-column: 2/3;
  grid-row: 2/3;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(3))) {
  grid-column: 3/4;
  grid-row: 2/3;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(4))) {
  grid-column: 4/5;
  grid-row: 2/3;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(5))) {
  grid-column: 1/2;
  grid-row: 4/5;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(6))) {
  grid-column: 2/3;
  grid-row: 4/5;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(7))) {
  grid-column: 3/4;
  grid-row: 4/5;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(8))) {
  grid-column: 4/5;
  grid-row: 4/5;
}

[part="base"]:not(.isMobile) .links ::slotted(ul) {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--rh-footer-links-gap, 10px);
  margin-block-start:
    calc(
      var(--rh-footer-links-column-gap, 32px)
      * -1
      + var(--rh-footer-links-gap, 10px)
    ) !important;
}

.isMobile .links ::slotted(ul) {
  --link-font-size: 1em;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--rh-footer-links-column-gap, 16px);
}

#footer-logo {
  width: 2.625em;
}

:is(.links, .global-links-primary, .global-links-secondary) ::slotted(ul) {
  padding: 0;
  margin: 0;
  display: contents;
}

:is(.links, .global-links-primary, .global-links-secondary) ::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: 500 !important;
  margin-block: 0 !important;
  font-size: var(--rh-footer-link-header-font-size, 0.875em) !important;
}
`;

const mobileBreakpoint = r$5 `700px`;
const mobileXlBreakpoint = r$5 `1008px`;
const desktopLargeBreakpoint = r$5 `1368px`;
r$5 `1200px`;
const tabletLandscapeBreakpoint = r$5 `992px`;
r$5 `768px`;
r$5 `576px`;
r$5 `320px`;

const responsiveStyles = i$8 `
  @media screen and (min-width: ${mobileBreakpoint}) {
    .global-base {
      grid-template-columns: 4fr 4fr 4fr;
      grid-template-areas:
        'logo      logo      logo'
        'primary   primary   primary'
        'spacer    spacer    spacer'
        'secondary secondary tertiary';
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .global-base {
      grid-template-columns: auto 10fr 2fr;
      grid-template-rows: 32px max-content;
      grid-template-areas:
        'logo primary   tertiary'
        'logo secondary tertiary';
      gap: 24px 32px;
    }

    .global-primary {
      display: flex;
    }

  }

  .spacer {
    grid-area: spacer;
    border-bottom: 1px solid var(--_border-color);
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .spacer {
      display: none;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .global-tertiary {
      display: grid;
      justify-content: flex-end;
      align-items: center;
    }
  }

  @media screen and (min-width: 500px) {
    .global-links-primary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .global-links-primary {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }

  @media screen and (min-width: 500px) {
    .global-links-secondary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileBreakpoint}) {
    .global-links-secondary {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .global-links-secondary {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px 24px;
    }
  }

  @media screen and (max-width: ${tabletLandscapeBreakpoint}) {
    .global-logo {
      grid-area: logo;
    }

    .global-primary {
      grid-area: primary;
    }
  }

  @media screen and (max-width: ${tabletLandscapeBreakpoint}) {
    /* Equalize padding on mobile */
    .section {
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 24px)
      );
    }

    /* hide the header border on mobile */
    .header:after {
      display: none;
    }

    /* force the mobile links menu to go flush against the header */
    .main {
      padding-top: 0;
    }

    .global-tertiary {
      margin-block-start: 16px;
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) and (max-width: ${desktopLargeBreakpoint}) {
    /* Equalize padding on mobile */
    .section {
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 32px)
      );
    }

    .global-tertiary {
      margin-block-start: 16px;
    }

    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${desktopLargeBreakpoint}) {
    .section {
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 64px)
      );
    }

    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${mobileBreakpoint}) {
    .isMobile .links ::slotted(ul) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

function o$2(n,e,t){if(typeof t?.value!="function")throw new TypeError(`Only methods can be decorated with @bound. <${e??n.name}> is not a method!`);return {configurable:!0,get(){let r=t.value.bind(this);return Object.defineProperty(this,e,{value:r,configurable:!0,writable:!0}),r}}}

class MatchMediaController {
    constructor(
    /** reference to the host element using this controller */
    host, mediaQuery = '', options) {
        this.host = host;
        this.mediaQuery = mediaQuery;
        /**
         * The matchMedia result
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
         */
        this.mediaQueryList = null;
        this.host.addController(this);
        this.mediaQueryList = matchMedia(mediaQuery);
        this.onChange = options?.onChange;
    }
    hostConnected() {
        this.evaluate();
        this.mediaQueryList?.addEventListener('change', this.evaluate);
    }
    hostDisconnected() {
        this.mediaQueryList?.removeEventListener('change', this.evaluate);
    }
    /** Requests a render and calls the onChange callback */
    evaluate() {
        this.host.requestUpdate();
        this.onChange?.(this.mediaQueryList ?? matchMedia(this.mediaQuery));
    }
}
__decorate([
    o$2
], MatchMediaController.prototype, "evaluate", null);

const styles$3 = i$8`:host {
  display: block;
  --pfe-icon--color: var(--_icon-color);
  --pfe-icon--size: var(--rh-footer--social-icon--size, 1.75em);
}

:host(:is(:hover, :focus-within)) {
  --pfe-icon--color: var(--_icon-color-hover);
}
`;

let RhFooterSocialLink = class RhFooterSocialLink extends s$3 {
    constructor() {
        super();
        this.logger = new n$7(this);
        this.icon = null;
        this.setAttribute('role', 'listitem');
    }
    render() {
        return y$1 `<slot></slot>`;
    }
    updated() {
        this.updateLightdom();
    }
    updateLightdom() {
        const oldDiv = this.querySelector('a');
        if (oldDiv) {
            const newDiv = oldDiv.cloneNode(true);
            // remove the _rendered content
            newDiv.querySelectorAll('[_rendered]').forEach(i => i.remove());
            newDiv.innerHTML = `<pfe-icon icon="${this.icon}">${newDiv.innerHTML}</pfe-icon>`;
            // add a11y settings
            /** @todo add logging that warns the user there is an empty label */
            newDiv.setAttribute('aria-label', newDiv.textContent || '');
            if (!newDiv.getAttribute('aria-label')) {
                this.logger.warn('Must add aria-label to links');
            }
            if (oldDiv.parentNode) {
                oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            }
        }
    }
};
RhFooterSocialLink.styles = styles$3;
__decorate([
    e$2()
], RhFooterSocialLink.prototype, "icon", void 0);
RhFooterSocialLink = __decorate([
    e$3('rh-footer-social-link')
], RhFooterSocialLink);

var c$6=Object.defineProperty;var m$4=Object.getOwnPropertyDescriptor;var a$5=(i,t,e,o)=>{for(var s=o>1?void 0:o?m$4(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&c$6(t,e,s),s};function u$3(i){return i.length===1&&typeof i[0]=="object"&&i[0]!==null}var p$4=i=>t=>i===l$6.anonymous?!t.hasAttribute("slot"):t.getAttribute("slot")===i,d$2=class{constructor(t,...e){this.host=t;this.nodes=new Map;this.firstUpdated=!1;this.mo=new MutationObserver(this.onMutation);this.deprecations={};if(this.logger=new n$7(this.host),u$3(e)){let[{slots:o,deprecations:s}]=e;this.slotNames=o,this.deprecations=s??{};}else e.length>=1?(this.slotNames=e,this.deprecations={}):this.slotNames=[null];t.addController(this);}hostConnected(){this.host.addEventListener("slotchange",this.onSlotChange),this.firstUpdated=!1,this.mo.observe(this.host,{childList:!0}),this.init();}hostUpdated(){this.firstUpdated||(this.slotNames.forEach(this.initSlot),this.firstUpdated=!0);}hostDisconnected(){this.mo.disconnect();}hasSlotted(...t){return t.length?t.some(e=>this.nodes.get(e)?.hasContent??!1):(this.logger.warn("Please provide at least one slot name for which to search."),!1)}getSlotted(...t){return t.length?t.flatMap(e=>this.nodes.get(e)?.elements??[]):this.nodes.get(d$2.anonymous)?.elements??[]}onSlotChange(t){let e=t.target.name;this.initSlot(e),this.host.requestUpdate();}async onMutation(t){let e=[];for(let{addedNodes:o,removedNodes:s}of t)for(let n of [...o,...s])n instanceof HTMLElement&&n.slot&&(this.initSlot(n.slot),e.push(n.slot));e.length&&this.host.requestUpdate();}getChildrenForSlot(t){return Array.from(this.host.children).filter(p$4(t))}initSlot(t){let e=t||d$2.anonymous,o=this.nodes.get(e)?.slot?.assignedElements?.()??this.getChildrenForSlot(e),s=t?`slot[name="${t}"]`:"slot:not([name])",n=this.host.shadowRoot?.querySelector?.(s)??null,r=!!o.length;this.nodes.set(e,{elements:o,name:t??"",hasContent:r,slot:n}),this.logger.log(t,r);}init(){this.nodes.clear(),this.slotNames.forEach(this.initSlot),Object.values(this.deprecations).forEach(this.initSlot),this.host.requestUpdate();}},l$6=d$2;l$6.anonymous=Symbol("anonymous slot"),a$5([o$2],l$6.prototype,"onSlotChange",1),a$5([o$2],l$6.prototype,"onMutation",1),a$5([o$2],l$6.prototype,"initSlot",1),a$5([o$2],l$6.prototype,"init",1);

function a$4(t,l,o=!1){let n;return function(...e){let u=this,c=function(){n=null,o||t.apply(u,e);},i=o&&!n;clearTimeout(n),n=window.setTimeout(c,l),i&&t.apply(u,e);}}

var p$3=Object.defineProperty;var l$5=Object.getOwnPropertyDescriptor;var h$2=(a,t,e,s)=>{for(var i=s>1?void 0:s?l$5(t,e):t,o=a.length-1,r;o>=0;o--)(r=a[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&p$3(t,e,i),i};var n$4=class{constructor(t,e){this.host=t;this.options=e;this.mo=new MutationObserver(this.parse);this.cache=new Map;this.class=t.constructor,this.logger=new n$7(this.host),n$4.instances.set(t,this);let s=this.options?.properties??{};for(let[i,o]of Object.entries(s))this.initProp(i,o);t.addController(this),this.cascadeProperties=a$4(this.cascadeProperties,1);}hostUpdated(){this.cascadeProperties();}hostConnected(){this.mo.observe(this.host,{attributes:!0,childList:!0}),this.cascadeProperties();}hostDisconnected(){this.mo.disconnect();}cascadeProperties(t=this.host.children){if(this.host.isConnected){let e=this.cache.keys();if(!t)return this._cascadeAttributes(e,this.cache);for(let s of t)if(s instanceof Element){for(let i of e)if(s.matches(i)){let o=this.cache.get(i);for(let r of o??[])this._copyAttribute(r,s);}}}}initProp(t,e){for(let s of [e].flat(1/0).filter(Boolean)){let{attribute:i}=this.class.getPropertyOptions(t),o=typeof i=="string"?i:t.toLowerCase();this.cache.get(s)?this.cache.get(s)?.push(o):this.cache.set(s,[o]);}}parse(t){for(let e of t??[])e.type==="childList"&&e.addedNodes.length?this.cascadeProperties(e.addedNodes):e.type==="attributes"&&this._cascadeAttributes(this.cache.keys(),this.cache);}async _copyAttribute(t,e){this.logger.log(`copying ${t} to ${e}`);let s=this.host.getAttribute(t);e.isConnected&&(s==null?e.removeAttribute(t):e.setAttribute(t,s));}_cascadeAttributes(t,e){for(let s of t)for(let i of e.get(s)??[])this._cascadeAttribute(i,s);}_cascadeAttribute(t,e){let s=[...this.host.querySelectorAll(e),...this.host.shadowRoot?.querySelectorAll(e)??[]];for(let i of s)this._copyAttribute(t,i);}},c$5=n$4;c$5.instances=new WeakMap,h$2([o$2],c$5.prototype,"parse",1);

function s$1(...n){return function(r,i){r.constructor.addInitializer(o=>{let e=o;c$5.instances.has(e)||c$5.instances.set(e,new c$5(e)),c$5.instances.get(e)?.initProp(i,n);});}}

function r$4(e,t){return {name:e,initialValue:t}}var n$3=class extends Event{constructor(o,l,x){super("context-request",{bubbles:!0,composed:!0});this.context=o;this.callback=l;this.multiple=x;}};

var u$2=Object.defineProperty;var m$3=Object.getOwnPropertyDescriptor;var i$6=(a,o,e,t)=>{for(var r=t>1?void 0:t?m$3(o,e):o,d=a.length-1,p;d>=0;d--)(p=a[d])&&(r=(t?p(o,e,r):p(r))||r);return t&&r&&u$2(o,e,r),r};var k=i$8`:host(:is([on=dark])){--context:dark}:host(:is([on=light])){--context:light}:host(:is([on=saturated])){--context:saturated}:host(:is([color-palette=darker],[color-palette=darkest])){--context:dark;--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}:host(:is([color-palette=lighter],[color-palette=lightest],[color-palette=base])){--context:light;--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}:host(:is([color-palette=accent],[color-palette=complement],[color-palette=saturated])){--context:saturated;--pfe-broadcasted--text:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-saturated, #fff);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-saturated, #fafafa);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-saturated, #fafafa);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-saturated, #d2d2d2);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-saturated, underline);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-saturated, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-saturated, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-saturated, underline)}:host(:is([color-palette=lightest])){--pfe-context-background-color:var(--pfe-theme--color--surface--lightest, #fff)}:host(:is([color-palette=lighter])){--pfe-context-background-color:var(--pfe-theme--color--surface--lighter, #ededed)}:host(:is([color-palette=base])){--pfe-context-background-color:var(--pfe-theme--color--surface--base, #ededed)}:host(:is([color-palette=darker])){--pfe-context-background-color:var(--pfe-theme--color--surface--darker, #393f44)}:host(:is([color-palette=darkest])){--pfe-context-background-color:var(--pfe-theme--color--surface--darkest, #292e34)}:host(:is([color-palette=complement])){--pfe-context-background-color:var(--pfe-theme--color--surface--complement, #004368)}:host(:is([color-palette=accent])){--pfe-context-background-color:var(--pfe-theme--color--surface--accent, #00659c)}:host(:is([color-palette])){background-color:var(--pfe-context-background-color,var(--pfe-theme--color--surface--base))}`,f$5=k;var h$1=new Map,c$4=class{constructor(o,e){this.host=o;this.prefix="pfe-";this.last=null;this.prefix=e?.prefix??"pfe-",this.context=r$4(`${this.prefix}-color-context`),this.logger=new n$7(o),this.styleController=new l$8(o,f$5),o.addController(this);}},n$2=class extends c$4{constructor(e,t){super(e,t);this.callbacks=new Set;this.mo=new MutationObserver(()=>this.update(this.contextVariable));this.style=window.getComputedStyle(e),this.attribute=t?.attribute??"color-palette";}get contextVariable(){return this.style.getPropertyValue("--context").trim()||null}hostConnected(){this.host.addEventListener("context-request",this.onChildContextEvent),this.mo.observe(this.host,{attributes:!0,attributeFilter:[this.attribute,"on"]}),this.update(this.contextVariable);for(let[e,t]of h$1)e.dispatchEvent(t);}hostDisconnected(){this.callbacks.forEach(e=>this.callbacks.delete(e)),this.mo.disconnect();}isColorContextEvent(e){return e.target!==this.host&&e.context.name===`${this.prefix}-color-context`}onChildContextEvent(e){this.isColorContextEvent(e)&&(e.stopPropagation(),e.callback(this.contextVariable),e.multiple&&this.callbacks.add(e.callback));}update(e){for(let t of this.callbacks)t(e);}};i$6([o$2],n$2.prototype,"onChildContextEvent",1),i$6([o$2],n$2.prototype,"update",1);var l$4=class extends c$4{constructor(e,t){super(e,t);this.override=null;this.attribute??(this.attribute="on");}hostConnected(){let e=new n$3(this.context,this.contextCallback,!0);this.override=this.host.getAttribute(this.attribute),this.host.dispatchEvent(e),h$1.set(this.host,e);}hostDisconnected(){this.dispose?.(),this.dispose=void 0,h$1.delete(this.host);}contextCallback(e,t){t&&t!==this.dispose&&(this.dispose?.(),this.dispose=t),this.update(e);}update(e){!this.override&&e!==this.last&&(this.last=e,this.logger.log(`setting context from ${this.host.getAttribute(this.attribute)} to ${e}`),e==null?this.host.removeAttribute(this.attribute):this.host.setAttribute(this.attribute,e));}};i$6([o$2],l$4.prototype,"contextCallback",1),i$6([o$2],l$4.prototype,"update",1);

function c$3(o){return function(e,n){e.constructor.addInitializer(t=>{t.__colorContextProvider=new n$2(t,o);});}}function x$1(o){return function(e,n){e.constructor.addInitializer(t=>{t.__colorContextConsumer=new l$4(t,o);});}}

function d$1(r){return function(e,t){let{alias:a,...n}=r,o=e.constructor,l=o.getPropertyOptions(a);o.createProperty(t,{...l,...n}),o.addInitializer(s=>{s.addController(new i$5(s,r,t));});}}var i$5=class{constructor(e,t,a){this.host=e;this.options=t;this.deprecatedKey=a;this.logged=!1;this.logger=new n$7(e);}hostUpdate(){let{deprecatedKey:e,options:{alias:t}}=this;this.host[e]&&this.host[t]!==this.host[e]&&(this.logged||(this.logger.warn(`${e} is deprecated, use ${t} instead`),this.logged=!0),this.host[t]=this.host[e]);}};

var i$4=class{constructor(t,e,s){this.host=t;this.options=s;this.initializer=e.bind(t),this.mo=new MutationObserver(this.initializer),this.logger=new n$7(this.host),t.addController(this);}hostConnected(){this.hasLightDOM()?this.initializer():this.options?.emptyWarning&&this.logger.warn(this.options?.emptyWarning),this.initObserver();}hostDisconnected(){this.mo.disconnect();}initObserver(){(this.options?.observe??!0)&&this.mo.observe(this.host,typeof this.options?.observe!="object"?{childList:!0}:this.options?.observe);}hasLightDOM(){return this.host.children.length>0||(this.host.textContent??"").trim().length>0}};

function c$2(n){return function(t,o){t.constructor.addInitializer(e=>{let i=t[o],r=new i$4(e,i,n);e.isConnected&&r.hostConnected();});}}

var l$3=Symbol("observed properties controller"),t$1=class{constructor(e){this.host=e;this.values=new Map;if(t$1.hosts.get(e))return t$1.hosts.get(e);e.addController(this),e[l$3]=this;}delete(e){this.values.delete(e);}hostUpdate(){for(let[e,[o,[r,s]]]of this.values)this.host[o]?.(r,s),this.delete(e);}hostUpdated(){this.host.removeController(this);}cache(e,o,...r){this.values.set(e,[o,r]);}},a$3=t$1;a$3.hosts=new WeakMap;

function p$2(...o){if(o.length===1){let[e]=o;return function(t,r){t.constructor.addInitializer(n=>new a$3(n)),c$1(t,r,e);}}else {let[e,t]=o;e.constructor.addInitializer(r=>new a$3(r)),c$1(e,t);}}function c$1(o,e,t){let r=Object.getOwnPropertyDescriptor(o,e);Object.defineProperty(o,e,{...r,configurable:!0,set(n){let i=this[e];if(r?.set?.call(this,n),typeof t=="function")t.call(this,i,n);else {let s=t||`_${e}Changed`;this.hasUpdated?this[s]?.(i,n):this[l$3].cache(e,s,i,n);}}});}

var o$1=Symbol();function r$3(e){return document.head.querySelector(`meta[name="${e}"]`)?.content}function l$2(e=o$1){return e!==o$1&&(window.PfeConfig.trackPerformance=!!e),window.PfeConfig.trackPerformance}var i$3={fromAttribute(e){return typeof e!="string"?null:e.split(",").map(t=>t.trim()).map(t=>parseInt(t,10))},toAttribute(e){return e.join(",")}},n$1=class extends Event{constructor(t,f){super(t,{bubbles:!0,composed:!0,...f});}},a$2=document.body.hasAttribute("no-auto-reveal");window.PfeConfig=Object.assign(window.PfeConfig??{},{trackPerformance:window.PfeConfig?.trackPerformance??r$3("pfe-track-performance")==="true",autoReveal:window.PfeConfig?.autoReveal??(a$2?!a$2:r$3("pfe-auto-reveal")==="true"),get log(){return !!localStorage.pfeLog},set log(e){e?localStorage.setItem("pfeLog",`${!0}`):localStorage.removeItem("pfeLog");}});

var r$2=class{constructor(e){this.host=e;this.hasMeasured=!1;e.addController(this),e.id?e.id.startsWith("pfe-")&&!e.id.startsWith(e.localName)?this.markId=e.id.replace("pfe",e.localName):this.markId=`${e.localName}-${e.id}`:this.markId=n$5(e.localName),performance.mark(`${this.markId}-defined`);}hostUpdate(){this.hasMeasured||this.measure();}measure(){this.hasMeasured=!0,performance.mark(`${this.markId}-rendered`),performance.measure(`${this.markId}-from-navigation-to-first-render`,void 0,`${this.markId}-rendered`),performance.measure(`${this.markId}-from-defined-to-first-render`,`${this.markId}-defined`,`${this.markId}-rendered`),this.host.removeController(this);}};

function m$2(e){return typeof e.addInitializer=="function"}var a$1=!1,i$2=new Set;async function f$4(e){if(i$2.add(e),!a$1){for(a$1=!0;i$2.size;){let n=[];for(let o of i$2)n.push(o.updateComplete),i$2.delete(o);await Promise.all(n);}document.body.removeAttribute("unresolved");}}function d(e){let n=e?.attribute??"pfelement",o=e?.className??"PFElement";return function(r){if(!m$2(r))throw new Error(`@pfelement may only decorate ReactiveElements. ${r.name} is does not implement ReactiveElement.`);r.addInitializer(t=>{window.PfeConfig.autoReveal&&f$4(t),t.addController({hostConnected(){t.setAttribute(n,""),t.classList.add(o);}}),l$2()&&new r$2(t);});}}

const styles$2 = i$8`:host {
  display: flex;
  flex-direction: column;
  gap: 0.625em;
}

[part] {
  display: contents;
}

::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: 500;
  font-size: 0.875em;
  margin-top: 0;
  margin-bottom: 0;
}

:host([header-hidden]) .header ::slotted(*) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

`;

let RhFooterLinks = class RhFooterLinks extends s$3 {
    constructor() {
        super(...arguments);
        /**
         * Visibily hide the header slot. Setting this to true will not affect
         * aria-labelledby.
         */
        this.headerHidden = false;
        this.logger = new n$7(this);
        this.slots = new l$6(this, {
            slots: ['header'],
        });
    }
    updateAccessibility() {
        // ensure we've rendered to our shadowroot
        const header = this.querySelector('[slot="header"]');
        const ul = this.querySelector('ul');
        if (header && ul) {
            // ensure there is an id on the header slot
            header.id || (header.id = n$5('rh-footer-links'));
            ul.setAttribute('aria-labelledby', header.id);
        }
        else {
            this.logger.warn('This links set doesn\'t have a valid header associated with it.');
        }
    }
    render() {
        return y$1 `
      <div part="header" class="header">
        <slot name="header"></slot>
      </div>
      <div part="default" class="default">
        <slot name="panel"></slot>
        <slot></slot>
      </div>
    `;
    }
};
RhFooterLinks.styles = styles$2;
__decorate([
    e$2({ type: Boolean, attribute: 'header-hidden', reflect: true })
], RhFooterLinks.prototype, "headerHidden", void 0);
__decorate([
    c$2()
], RhFooterLinks.prototype, "updateAccessibility", null);
RhFooterLinks = __decorate([
    e$3('rh-footer-links')
], RhFooterLinks);

const styles$1 = i$8`:host {
  display: block;
  position: relative;
}

/** Add margin to blocks that aren't first in the sidebar. */
:host(:not(:first-of-type)) {
  margin-top: 1.5em;
}
/** Add the separator to blocks in the middle */
:host(:not(:last-of-type, :first-of-type)) {
  border-bottom: 1px solid var(--_border-color);
  padding-bottom: 1.5em;
}

::slotted(*) {
  color: #fff;
  font-size: 0.875em;
  text-decoration: none;
}

::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: 500 !important;
  font-size: 0.875em !important;
  margin-block-start: 0px !important;
  margin-block-end: 1em !important;
}

.content ::slotted(*) {
  color: #d2d2d2;
  font-family: 'Red Hat Text', 'RedHatText', 'Overpass', Overpass, Arial, sans-serif;
  font-weight: 400;
}
`;

let RhFooterBlock = class RhFooterBlock extends s$3 {
    render() {
        return y$1 `
      <div class="base" part="base">
        <div class="header" part="header">
          <slot name="header"></slot>
        </div>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `;
    }
};
RhFooterBlock.styles = styles$1;
RhFooterBlock = __decorate([
    e$3('rh-footer-block')
], RhFooterBlock);

const styles = i$8`:host {
  flex: 1 1 auto;
  display: block;
  width: 100%;
}
`;

const currentYear = new Date().getFullYear();
let RhFooterCopyright = class RhFooterCopyright extends s$3 {
    render() {
        return y$1 `<slot>&copy; ${currentYear} Red Hat, Inc.</slot>`;
    }
};
RhFooterCopyright.styles = styles;
RhFooterCopyright = __decorate([
    e$3('rh-footer-copyright')
], RhFooterCopyright);

/**
 * @csspart base
 * @csspart base
 * @slot    logo
 * @csspart logo
 * @slot    logo-image
 * @csspart logo-image
 * @slot    primary
 * @csspart primary
 * @slot    primary-start
 * @csspart primary-start
 * @slot    primary-end
 * @csspart primary-end
 * @slot    secondary
 * @csspart secondary
 * @slot    secondary-start
 * @csspart secondary-start
 * @slot    secondary-end
 * @csspart secondary-end
 * @slot    links-primary
 * @csspart links-primary
 * @slot    links-secondary
 * @csspart links-secondary
 * @slot    tertiary
 * @csspart tertiary
 */
let RhGlobalFooter = class RhGlobalFooter extends s$3 {
    constructor() {
        super(...arguments);
        this.colorPalette = 'darker';
    }
    render() {
        return y$1 `
      <div class="section global-base" part="section base">
        <slot name="base">
          <div class="global-logo" part="logo">
            <slot name="logo">
              <a class="global-logo-anchor"
                  part="logo-anchor"
                  href="/en"
                  alt="Visit Red Hat">
                <svg title="Red Hat logo"
                    class="global-logo-image"
                    part="logo-image"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192 145">
                  <defs>
                    <style>
                      .band {
                        fill: transparent;
                      }
                    </style>
                  </defs>
                  <path class="band" d="M157.77,62.61a14,14,0,0,1,.31,3.42c0,14.88-18.1,17.46-30.61,17.46C78.83,83.49,42.53,53.26,42.53,44a6.43,6.43,0,0,1,.22-1.94l-3.66,9.06a18.45,18.45,0,0,0-1.51,7.33c0,18.11,41,45.48,87.74,45.48,20.69,0,36.43-7.76,36.43-21.77,0-1.08,0-1.94-1.73-10.13Z" />
                  <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78" />
                </svg>
              </a>
            </slot>
          </div>
          <div class="global-primary" part="primary">
            <slot name="primary">
              <div class="global-primary-start" part="primary-start">
                <slot name="primary-start"></slot>
              </div>
              <div class="global-links-primary" part="links-primary">
                <slot name="links-primary"></slot>
              </div>
              <div class="global-primary-end" part="primary-end">
                <slot name="primary-end"></slot>
              </div>
            </slot>
          </div>
          <div class="spacer" part="spacer"></div>
          <div class="global-secondary" part="secondary">
            <slot name="secondary">
              <div class="global-secondary-start" part="secondary-start">
                <slot name="secondary-start"></slot>
              </div>
              <div class="global-links-secondary" part="links-secondary">
                <slot name="links-secondary"></slot>
              </div>
              <div class="global-secondary-end" part="secondary-end">
                <slot name="secondary-end"></slot>
              </div>
            </slot>
          </div>
          <div class="global-tertiary" part="tertiary">
            <slot name="tertiary"></slot>
          </div>
        </slot>
      </div>
    `;
    }
};
RhGlobalFooter.styles = [styles$4, responsiveStyles];
__decorate([
    colorContextProvider(),
    e$2({ reflect: true, attribute: 'color-palette' })
], RhGlobalFooter.prototype, "colorPalette", void 0);
RhGlobalFooter = __decorate([
    e$3('rh-global-footer')
], RhGlobalFooter);

function n(e,t){return new CustomEvent(e,{bubbles:!0,composed:!0,detail:t})}

var v$1=Object.defineProperty;var m$1=Object.getOwnPropertyDescriptor;var t=(a,n,e,r)=>{for(var c=r>1?void 0:r?m$1(n,e):n,d=a.length-1,p;d>=0;d--)(p=a[d])&&(c=(r?p(n,e,c):p(c))||c);return r&&c&&v$1(n,e,c),c};var u$1=i$8`:host{transition-property:box-shadow,border;transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946));transition-duration:calc(var(--pfe-theme--animation-speed, .3s) / 2)}:host(.animating),:host([expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,var(--pfe-theme--color--surface--lightest,#fff));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text, #3c3f42));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent, #06c))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, 0 5px 4px rgba(140, 140, 140, 0.35))}:host([on=dark].animating),:host([on=dark][expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,rgba(247,247,249,.1));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-dark, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-dark, #73bcf7))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host([on=saturated].animating),:host([on=saturated][expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,rgba(0,0,0,.2));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-saturated, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-saturated, #fff))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host{position:relative;display:block;outline:0;box-sizing:border-box;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));box-shadow:var(--pfe-accordion--BoxShadow,0 5px 4px transparent);--pfe-icon--color:var(--pfe-accordion--Color, var(--pfe-broadcasted--text, #3c3f42));--pfe-icon--size:14px}:host([hidden]){display:none}:host *,:host ::after,:host ::before{box-sizing:border-box}#heading{margin:0}.pf-c-accordion__toggle{cursor:pointer;outline:0;position:relative;width:100%;margin:0;display:flex;align-items:center;justify-content:flex-start;gap:calc(var(--pfe-theme--container-padding,1rem) * 1.5);padding:var(--pfe-accordion--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding,1rem) * 1.5));background-color:transparent;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));text-align:left;font-family:var(--pfe-theme--font-family--heading, "Red Hat Display", "RedHatDisplay", "Overpass", Overpass, Arial, sans-serif);font-size:var(--pfe-accordion--FontSize--header, var(--pf-global--FontSize--xl, 1.25rem));font-weight:var(--pfe-accordion--FontWeight--header,var(--pfe-theme--font-weight--normal,400));text-align:var(--pfe-accordion--TextAlign,left);line-height:var(--pfe-theme--line-height, 1.5);--_typography-offset:calc((1em * var(--pfe-theme--line-height, 1.5) - 1em) / 2);border-style:var(--pfe-theme--surface--border-style,solid);border-width:var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));border-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-right-color:transparent;border-left-color:transparent}.pf-c-accordion__toggle::before{position:absolute;content:"";top:-2px;left:-2px;width:calc(100% + var(--pfe-theme--ui--border-width--active,3px));height:calc(100% + var(--pfe-theme--ui--border-width--active,3px));border-radius:var(--pfe-theme--ui--border-radius,2px);border:var(--pfe-theme--ui--border-width--md,2px) var(--pfe-theme--ui--border-style,solid) transparent}.pf-c-accordion__toggle:focus::before{border-color:#6b9ff0}.pf-c-accordion__toggle:focus:not(:focus-visible)::before{border:unset}.pf-c-accordion__toggle .pf-c-accordion__toggle-icon{--_typography-offset:calc((1em * var(--pfe-theme--line-height, 1.5) - var(--pfe-icon--size, 14px)) / 2)}.pf-c-accordion__toggle .pf-c-accordion__toggle-text{margin-top:calc(-1 * var(--_typography-offset,5px));margin-bottom:calc(-1 * var(--_typography-offset,5px))}.pf-c-accordion__toggle .pf-c-accordion__toggle-icon{margin-top:calc(var(--_typography-offset,5px)/ 4)}:host(:not(:first-of-type)) .pf-c-accordion__toggle{border-top-width:0}.pf-c-accordion__toggle::after{position:absolute;content:"";top:-1px;left:-1px;bottom:-1px;background-color:var(--pfe-accordion--accent,transparent);width:calc(var(--pfe-accordion--accent--width,var(--pfe-theme--surface--border-width--active,3px)) - -1px);height:calc(100% - -1px - -1px);z-index:4;z-index:calc(var(--pfe-accordion--ZIndex,3) + 1)}.pf-c-accordion__toggle:active,.pf-c-accordion__toggle:hover,:host(:not([expanded])) .pf-c-accordion__toggle:focus{background-color:var(--pfe-accordion--BackgroundColor--active,var(--pfe-theme--color--surface--lighter,#f0f0f0));--pfe-accordion--Color:var(--pfe-accordion--Color--active, var(--pfe-broadcasted--text, #3c3f42))}:host(:not([expanded])) .pf-c-accordion__toggle:active,:host(:not([expanded])) .pf-c-accordion__toggle:focus,:host(:not([expanded])) .pf-c-accordion__toggle:hover{--pfe-accordion--accent:var(--pfe-accordion--accent--active, var(--pfe-theme--color--ui-accent, #06c))}:host([on=dark]) .pf-c-accordion__toggle:active,:host([on=dark]) .pf-c-accordion__toggle:hover,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:focus{background-color:var(--pfe-accordion--BackgroundColor--active,rgba(247,247,249,.1));--pfe-accordion--Color:var(--pfe-accordion--Color--active, var(--pfe-broadcasted--text, #3c3f42))}:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:active,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:focus,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:hover{--pfe-accordion--accent:var(--pfe-accordion--accent--active, var(--pfe-theme--color--ui-accent--on-dark, #73bcf7))}:host([on=saturated]) .pf-c-accordion__toggle:active,:host([on=saturated]) .pf-c-accordion__toggle:hover,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:focus{background-color:var(--pfe-accordion--BackgroundColor--active,rgba(0,0,0,.2));--pfe-accordion--Color:var(--pfe-accordion--Color--active, var(--pfe-broadcasted--text, #3c3f42))}:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:active,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:focus,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:hover{--pfe-accordion--accent:var(--pfe-accordion--accent--active, var(--pfe-theme--color--ui-accent--on-saturated, #fff))}:host(.animating) .pf-c-accordion__toggle,:host([expanded]) .pf-c-accordion__toggle{border-bottom-width:0}:host(.animating) .pf-c-accordion__toggle,:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle,:host([expanded]) .pf-c-accordion__toggle{border-right-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-left-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2))}:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle{gap:calc(var(--pfe-theme--container-padding,1rem)/ 2);font-family:var(--pfe-theme--font-family, "Red Hat Text", "RedHatText", "Overpass", Overpass, Arial, sans-serif);font-size:var(--pfe-accordion--FontSize--header, var(--pf-global--FontSize--md, 1rem));font-weight:var(--pfe-accordion--FontWeight--header,var(--pfe-theme--font-weight--semi-bold,600))}.pf-c-accordion__toggle-wrapper{flex-grow:1;display:flex;align-items:center;justify-content:flex-start;gap:calc(var(--pfe-theme--container-padding,1rem) * 1.5)}.pf-c-accordion__toggle-text{max-width:var(--pfe-accordion--MaxWidth--content,80ch)}.pf-c-accordion__toggle-icon{align-self:flex-start;transition-property:transform;transition-duration:var(--pfe-theme--animation-speed, .3s);transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946))}:host([expanded]) .pf-c-accordion__toggle-icon{transform:rotate(90deg)}:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle-icon{order:-1}.pf-c-accordion__toggle-accents{flex-grow:1}`,f$3=u$1;var M=a=>a instanceof HTMLElement&&!!a.tagName.match(/P|^H[1-6]/),l$1=class extends n$1{constructor(e,r){super("change");this.expanded=e;this.toggle=r;}},o=class extends s$3{constructor(){super();this.expanded=!1;this.headingText="";this.headingTag="h3";this.slots=new l$6(this,"accents",null);this.logger=new n$7(this);this.addEventListener("click",this._clickHandler);}get ariaExpandedState(){return String(!!this.expanded)}connectedCallback(){super.connectedCallback(),this.hidden=!0,this.id||(this.id=n$5("pfe-accordion"));}async _init(){let e=await this._getHeaderElement();e!==this._generatedHtag&&(this._generatedHtag=void 0),this.headingTag=e?.tagName.toLowerCase()??"h3",this.headingText=e?.textContent?.trim()??"",this.hidden=!1;}render(){let e=o$4(this.headingTag);return n$6`
      <${e} id="heading">${y$1`<button id="button" aria-expanded="${this.ariaExpandedState}" class="pf-c-accordion__toggle"><span class="pf-c-accordion__toggle-wrapper"><span class="pf-c-accordion__toggle-text" part="text">${this.headingText||y$1`<slot></slot>`} </span>${this.slots.hasSlotted("accents")?y$1`<span class="pf-c-accordion__toggle-accents" part="accents"><slot name="accents"></slot></span>`:""}</span><pfe-icon icon="web-icon-caret-thin-right" on-fail="collapse" part="icon" class="pf-c-accordion__toggle-icon"></pfe-icon></button>`}
      </${e}>
    `}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._clickHandler);}async _getHeaderElement(){if(await this.updateComplete,!this.firstElementChild&&!this.firstChild)return void this.logger.warn("No header content provided");if(this.firstElementChild){let[e,...r]=this.slots.getSlotted().filter(M);if(e)r.length&&this.logger.warn("Heading currently only supports 1 tag; extra tags will be ignored.");else return void this.logger.warn("No heading information was provided.");return e}else return this._generatedHtag||this.logger.warn("Header should contain at least 1 heading tag for correct semantics."),this._generatedHtag=document.createElement("h3"),this.firstChild?.nodeType===Node.TEXT_NODE?this._generatedHtag.textContent=this.firstChild.textContent:this._generatedHtag.textContent=this.textContent,this._generatedHtag}_clickHandler(){let e=!this.expanded;this.dispatchEvent(new l$1(e,this)),this.dispatchEvent(n("pfe-accordion:change",{expanded:e,toggle:this}));}_expandedChanged(){this.button?.setAttribute("aria-expanded",this.ariaExpandedState);}};o.version="{{version}}",o.styles=[f$3],o.shadowRootOptions={...s$3.shadowRootOptions,delegatesFocus:!0},t([e$2({attribute:"aria-controls",reflect:!0})],o.prototype,"ariaControls",2),t([e$2({type:String,reflect:!0})],o.prototype,"disclosure",2),t([p$2,e$2({type:Boolean,reflect:!0})],o.prototype,"expanded",2),t([e$2({reflect:!0,attribute:"heading-text"})],o.prototype,"headingText",2),t([e$2({reflect:!0,attribute:"heading-tag"})],o.prototype,"headingTag",2),t([x$1(),e$2({reflect:!0})],o.prototype,"on",2),t([i$7(".pf-c-accordion__toggle")],o.prototype,"button",2),t([c$2()],o.prototype,"_init",1),t([o$2],o.prototype,"_getHeaderElement",1),t([o$2],o.prototype,"_clickHandler",1),o=t([e$3("pfe-accordion-header"),d()],o);

var u=Object.defineProperty;var f$2=Object.getOwnPropertyDescriptor;var r$1=(o,a,e,t)=>{for(var n=t>1?void 0:t?f$2(a,e):a,s=o.length-1,l;s>=0;s--)(l=o[s])&&(n=(t?l(a,e,n):l(n))||n);return t&&n&&u(a,e,n),n};var v=i$8`:host{display:none;overflow:hidden;will-change:height}:host([expanded]){display:block;position:relative}:host(.animating){display:block;transition:height .3s ease-in-out}`,c=v;var p$1=class extends n$1{constructor(e,t){super("animation-start");this.panel=e;this.state=t;}},m=class extends n$1{constructor(e,t){super("animation-end");this.panel=e;this.expanded=t;}},i$1=class extends s$3{constructor(){super(...arguments);this.expanded=!1;}get animates(){return this.animation!=="false"}connectedCallback(){super.connectedCallback(),this.expanded=!1,this.id||(this.id=n$5("pfe-collapse-panel"));}render(){return y$1`<slot></slot>`}_expandedChanged(e,t){t?this._maybeAnimate("opening"):e&&this._maybeAnimate("closing");}async _maybeAnimate(e){if(this.animates){e==="opening"&&await this.updateComplete;let{height:t}=this.getBoundingClientRect();this._fireAnimationEvent(e);let n=[0,t];e==="closing"&&n.reverse(),this._animate(...n);}}_animate(e,t){this.classList.add("animating"),this.style.height=`${e}px`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.style.height=`${t}px`,this.classList.add("animating"),this.addEventListener("transitionend",this._transitionEndHandler,{once:!0});});});}_transitionEndHandler(e){let t=e.target;t.style.height="",t.classList.remove("animating");let n$1=this,{expanded:s}=this;this.dispatchEvent(n("pfe-collapse-panel:animation-end",{expanded:s,panel:n$1})),this.dispatchEvent(new m(this,s));}_fireAnimationEvent(e){this.dispatchEvent(n("pfe-collapse-panel:animation-start",{state:e,panel:this})),this.dispatchEvent(new p$1(this,e));}};i$1.version="{{version}}",i$1.styles=[c],r$1([p$2,e$2({type:Boolean,reflect:!0})],i$1.prototype,"expanded",2),r$1([e$2({reflect:!0})],i$1.prototype,"animation",2),i$1=r$1([e$3("pfe-collapse-panel"),d()],i$1);

var s=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var a=(d,r,c,n)=>{for(var o=n>1?void 0:n?l(r,c):r,i=d.length-1,p;i>=0;i--)(p=d[i])&&(o=(n?p(r,c,o):p(o))||o);return n&&o&&s(r,c,o),o};var x=i$8`:host{transition-property:box-shadow,border;transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946));transition-duration:calc(var(--pfe-theme--animation-speed, .3s) / 2)}:host(.animating),:host([expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,var(--pfe-theme--color--surface--lightest,#fff));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text, #3c3f42));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent, #06c))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, 0 5px 4px rgba(140, 140, 140, 0.35))}:host([on=dark].animating),:host([on=dark][expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,rgba(247,247,249,.1));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-dark, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-dark, #73bcf7))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host([on=saturated].animating),:host([on=saturated][expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,rgba(0,0,0,.2));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-saturated, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-saturated, #fff))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host{display:none;overflow:hidden;will-change:height;border-color:transparent;opacity:0;position:relative;box-sizing:border-box;width:100%;z-index:0;margin:0;padding:0;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));box-shadow:var(--pfe-accordion--BoxShadow,0 5px 4px transparent);box-sizing:border-box;border-style:var(--pfe-theme--surface--border-style,solid);border-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-width:var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));border-top-width:0;border-bottom-width:0}:host *,:host ::after,:host ::before{box-sizing:border-box}:host ::slotted(*){--pfe-accordion--BoxShadow:none}:host::after{position:absolute;content:"";bottom:calc(-1 * var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px)));left:calc(-1 * var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px)));background-color:var(--pfe-accordion--accent,transparent);width:calc(var(--pfe-accordion--accent--width,var(--pfe-theme--surface--border-width--active,3px)) - calc(-1 * var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px))));height:calc(100% - calc(-1 * var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px))));z-index:calc(var(--pfe-accordion--ZIndex,3) + 1)}.pf-c-accordion__expanded-content{position:relative;display:block;width:100%;padding:var(--pfe-theme--container-spacer,1rem);display:inline-block;padding:var(--pfe-accordion--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding,1rem) * 1.5))}.pf-c-accordion__expanded-content::after{clear:both;content:"";display:table}:host([disclosure=true]) .pf-c-accordion__expanded-content{padding:var(--pfe-accordion__panel-container--Padding,0 calc(var(--pfe-theme--container-padding,1rem) * 3) calc(var(--pfe-theme--container-padding,1rem)) calc(var(--pfe-theme--container-padding,1rem) * 1.5))}:host(:not([full-width])) .pf-c-accordion__expanded-content{max-width:var(--pfe-accordion--MaxWidth--content,80ch)}:host(.animating){border-left-color:var(--pfe-accordion--accent,transparent);opacity:1}:host(.animating[hidden]),:host([expanded]:not(.animating)){margin-bottom:0;border-bottom-width:var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));display:block!important;position:relative;opacity:1}:host([expanded]:not(.animating)){overflow:visible}:host{transition-property:box-shadow,border;transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946));transition-duration:calc(var(--pfe-theme--animation-speed, .3s) / 2)}:host(.animating),:host([expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, var(--pfe-theme--color--surface--lightest, #fff));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text, #3c3f42));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent, #06c))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, 0 5px 4px rgba(140, 140, 140, 0.35))}:host([on=dark].animating),:host([on=dark][expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, rgba(247, 247, 249, 0.1));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-dark, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-dark, #73bcf7))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host([on=saturated].animating),:host([on=saturated][expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, rgba(0, 0, 0, 0.2));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-saturated, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-saturated, #fff))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}`,f$1=x;var e=class extends s$3{constructor(){super(...arguments);this.expanded=!1;}connectedCallback(){super.connectedCallback(),this.id||(this.id=n$5("pfe-accordion-panel")),this.setAttribute("role","region");}render(){return y$1`<div tabindex="-1"><div id="container" class="pf-c-accordion__expanded-content" part="container"><slot></slot></div></div>`}};e.version="{{version}}",e.styles=[...i$1.styles,f$1],a([e$2({type:String,reflect:!0})],e.prototype,"disclosure",2),a([e$2({type:Boolean,reflect:!0})],e.prototype,"expanded",2),a([e$2({attribute:"aria-labelledby",reflect:!0})],e.prototype,"ariaLabelledby",2),a([x$1(),e$2({reflect:!0})],e.prototype,"on",2),e=a([e$3("pfe-accordion-panel"),d()],e);

var b=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var i=(s,d,e,a)=>{for(var t=a>1?void 0:a?_(d,e):d,n=s.length-1,o;n>=0;n--)(o=s[n])&&(t=(a?o(d,e,t):o(t))||t);return a&&t&&b(d,e,t),t};var y=i$8`:host{transition-property:box-shadow,border;transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946));transition-duration:calc(var(--pfe-theme--animation-speed, .3s) / 2)}:host(.animating),:host([expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,var(--pfe-theme--color--surface--lightest,#fff));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text, #3c3f42));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent, #06c))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, 0 5px 4px rgba(140, 140, 140, 0.35))}:host([on=dark].animating),:host([on=dark][expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,rgba(247,247,249,.1));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-dark, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-dark, #73bcf7))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host([on=saturated].animating),:host([on=saturated][expanded]){background-color:var(--pfe-accordion--BackgroundColor--expanded,rgba(0,0,0,.2));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-saturated, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-saturated, #fff))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host{display:block;position:relative;overflow:hidden;margin:0;width:var(--pfe-accordion--Width,100%)}:host{overflow:visible}:host([hidden]),[hidden]{display:none!important}`,f=y;function F(s){return s instanceof Element&&s.tagName.toLowerCase()==="pfe-accordion-panel"}var p=class extends n$1{constructor(e,a){super("expand");this.toggle=e;this.panel=a;}},h=class extends n$1{constructor(e,a){super("collapse");this.toggle=e;this.panel=a;}},z=/^[0-9.]+(?<unit>[a-zA-Z]+)/g,r=class extends s$3{constructor(){super(...arguments);this.on="light";this.history=!1;this.expandedIndex=[];this._updateHistory=!0;this.expandedSets=new Set;this.initialized=!1;this.logger=new n$7(this);this.styles=getComputedStyle(this);this.transitionDuration=this.getAnimationDuration();}static isHeader(e){return e instanceof o}static isPanel(e$1){return e$1 instanceof e}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this._changeHandler),this.addEventListener("keydown",this._keydownHandler);}render(){return y$1`<slot></slot>`}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._updateStateFromURL);}async _init(){this.initialized||(this._manualDisclosure=this.getAttribute("disclosure"),await this.updateComplete,this.initialized=!0),this.updateAccessibility(),this._updateStateFromURL();}_changeHandler(e){if(this.classList.contains("animating"))return;let a=this._getIndex(e.target);e.expanded?this.expand(a):this.collapse(a),this._updateURLHistory();}_expandHeader(e){let a=this._getIndex(e);this.expandedSets.add(a),e.expanded=!0;}async _expandPanel(e){if(!e){this.logger.error("Trying to expand a panel that doesn't exist.");return}if(e.expanded)return;e.expanded=!0,e.hidden=!1,await e.updateComplete;let a=e.getBoundingClientRect();this._animate(e,0,a.height);}_collapseHeader(e){let a=this._getIndex(e);this.expandedSets.delete(a),e.expanded=!1;}async _collapsePanel(e){if(!e){this.logger.error("Trying to collapse a panel that doesn't exist");return}if(await e.updateComplete,!e.expanded)return;let a=e.getBoundingClientRect();e.expanded=!1,e.hidden=!0,this._animate(e,a.height,0);}getAnimationDuration(){if("computedStyleMap"in this)return this.computedStyleMap().get("transition-duration")?.to("ms").value;{let{transitionDuration:e}=this.styles,a=z.exec(e)?.groups;if(!a)return 0;let t=parseFloat(e);return a.unit==="s"?t*1e3:t}}async _animate(e,a,t){if(e){let n=e.previousElementSibling,o=this.getAnimationDuration();o&&(this.transitionDuration=o);let v=this.transitionDuration??0;n?.classList.add("animating"),e.classList.add("animating");let u=e.animate({height:[`${a}px`,`${t}px`]},{duration:v});u.play(),await u.finished,n?.classList.remove("animating"),e.classList.remove("animating"),e.style.removeProperty("height"),e.hidden=!e.expanded;}}async _keydownHandler(e){let a=e.target;if(!r.isHeader(a))return;let t;switch(e.key){case"ArrowDown":e.preventDefault(),t=this._nextHeader();break;case"ArrowUp":e.preventDefault(),t=this._previousHeader();break;case"Home":e.preventDefault(),t=this._firstHeader();break;case"End":e.preventDefault(),t=this._lastHeader();break;default:return}t?.focus?.();}_allHeaders(){return Array.from(this.children).filter(r.isHeader)}_allPanels(){return Array.from(this.children).filter(r.isPanel)}_panelForHeader(e){let a=e.nextElementSibling;if(!!a){if(!F(a)){this.logger.error("Sibling element to a header needs to be a panel");return}return a}}_previousHeader(){let e=this._allHeaders(),a=e.findIndex(t=>t.matches(":focus,:focus-within"))-1;return e[(a+e.length)%e.length]}_nextHeader(){let e=this._allHeaders(),a=e.findIndex(t=>t.matches(":focus,:focus-within"))+1;return e[a%e.length]}_firstHeader(){return this._allHeaders()[0]}_lastHeader(){let e=this._allHeaders();return e[e.length-1]}async _expandedIndexChanged(e,a){await this.updateComplete,!(e===a||!Array.isArray(a))&&[...a].reverse().forEach(t=>this.expand(t-1));}_getIndex(e){return r.isHeader(e)?this._allHeaders().findIndex(t=>t.id===e.id):r.isPanel(e)?this._allPanels().findIndex(t=>t.id===e.id):(this.logger.warn("The _getIndex method expects to receive a header or panel element."),-1)}_getIndexesFromURL(){let e=new URLSearchParams(window.location.search);if(e.has(this.id)){let t=(e.get(this.id)??"").split("-");return t.length<0?[]:t.map(n=>parseInt(n.trim(),10)-1)}}_updateURLHistory(){if(!this.history||!this._updateHistory)return;if(!this.id){this.logger.error("The history feature cannot update the URL without an ID added to the pfe-accordion tag.");return}let e=Array.from(this.expandedSets,t=>t+1).sort((t,n)=>t-n).join("-"),a=new URL(window.location.href);this.expandedSets.size>0?a.searchParams.set(this.id,e):a.searchParams.delete(this.id),history.replaceState({},"",a.toString());}_updateStateFromURL(){let e=this._getIndexesFromURL()??[];this._updateHistory=!1,e.forEach(a=>this.expand(a)),this._updateHistory=!0;}updateAccessibility(){let e=this._allHeaders();e.forEach(a=>{let t=this._panelForHeader(a);t&&(a.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",a.id),t.hidden=!t.expanded);}),e.length===1?this.disclosure=this._manualDisclosure??"true":e.length>1&&(this.disclosure="false");}toggle(e){this._allHeaders()[e].expanded?this.collapse(e):this.expand(e);}expand(e){if(e==null)return;e=parseInt(`${e}`,10);let t=this._allHeaders()[e];if(!t)return;let n$1=this._panelForHeader(t);!t||!n$1||(this._expandHeader(t),this._expandPanel(n$1),t.focus(),this.dispatchEvent(new p(t,n$1)),this.dispatchEvent(n("pfe-accordion:expand",{toggle:t,panel:n$1})));}expandAll(){let e=this._allHeaders(),a=this._allPanels();e.forEach(t=>this._expandHeader(t)),a.forEach(t=>this._expandPanel(t));}collapse(e){let a=this._allHeaders(),t=this._allPanels(),n$1=a[e],o=t[e];!n$1||!o||(this._collapseHeader(n$1),this._collapsePanel(o),this.dispatchEvent(new h(n$1,o)),this.dispatchEvent(n("pfe-accordion:collapse",{toggle:n$1,panel:o})));}collapseAll(){let e=this._allHeaders(),a=this._allPanels();e.forEach(t=>this._collapseHeader(t)),a.forEach(t=>this._collapsePanel(t));}};r.version="{{version}}",r.styles=[f],i([c$3(),e$2({reflect:!0,attribute:"color-palette"})],r.prototype,"colorPalette",2),i([d$1({alias:"colorPalette",attribute:"color"})],r.prototype,"color",2),i([x$1(),e$2({reflect:!0})],r.prototype,"on",2),i([s$1("pfe-accordion-header","pfe-accordion-panel"),e$2({type:String,reflect:!0})],r.prototype,"disclosure",2),i([p$2,e$2({type:Boolean})],r.prototype,"history",2),i([p$2,e$2({attribute:"expanded-index",converter:i$3})],r.prototype,"expandedIndex",2),i([t$2()],r.prototype,"_updateHistory",2),i([c$2()],r.prototype,"_init",1),i([o$2],r.prototype,"_changeHandler",1),i([o$2],r.prototype,"_getIndexesFromURL",1),i([o$2],r.prototype,"_updateURLHistory",1),i([o$2],r.prototype,"_updateStateFromURL",1),r=i([e$3("pfe-accordion"),d()],r);

var _RhFooter_instances, _RhFooter_matchMedia, _RhFooter_logger, _RhFooter_renderLinksTemplate;
function isHeader(tagName) {
    return !!tagName.match(/^H[1-6]$/i);
}
/**
 * @element rh-footer
 * @csspart base - main footer element, containing all footer content
 * @slot    base - Overrides everything. Do not use.
 * @slot    header - Overrides `header-*`, `logo`, `social-links`
 * @csspart header - footer header, typically containing main logo and social links
 * @slot    header-primary - primary footer header content, e.g. main logo. Overrides `logo`
 * @csspart header-primary - primary footer header content, e.g. main logo
 * @slot    header-secondary - secondary footer header content, e.g. social links. Overrides `social-links`
 * @csspart header-secondary - secondary footer header content, e.g. social links
 * @slot    logo - main page or product logo. Defaults to Red Hat corporate logo
 * @csspart logo - main page or product logo container
 * @slot    social-links - social media links (icons). Contains a default set of links
 * @csspart social-links - social links container `<rh-footer-links>`
 * @slot    main - main footer content. Overrides `main-*`
 * @csspart main - main content container.
 * @slot    main-primary - main footer links. typically a columnar grid
 * @csspart main-primary - container for main footer links
 * @slot    main-secondary - typically contains prose or promotional content
 * @csspart main-secondary - container fro prose or promotional content
 * @slot    global - must contain `<rh-global-footer>`
 *
 * @cssprop --rh-footer-icon-color - {@default #8a8d90}
 * @cssprop --rh-footer-icon-color-hover - {@default #b8bbbe}
 * @cssprop --rh-footer-border-color - {@default #6a6e73}
 * @cssprop --rh-footer-accent-color - {@default #e00}
 * @cssprop --rh-footer-section-side-gap - {@default 32px}
 * @cssprop --rh-footer-links-column-gap - {@default 32px}
 * @cssprop --rh-footer-links-gap - {@default 32px}
 * @cssprop --rh-footer-link-header-font-size - {@default 0.875em}
 */
class RhFooter extends s$3 {
    constructor() {
        super(...arguments);
        _RhFooter_instances.add(this);
        _RhFooter_matchMedia.set(this, new MatchMediaController(this, `(max-width: ${tabletLandscapeBreakpoint})`));
        _RhFooter_logger.set(this, new n$7(this));
        this.colorPalette = 'darker';
    }
    /**
     * Isomorphic import.meta.url function
     * Requires a node.js dom shim that sets window.location
     */
    static getImportURL(relativeLocation) {
        const url = new URL(relativeLocation, import.meta.url);
        if (url.protocol === 'file:') {
            return new URL(relativeLocation, window.location.href);
        }
        return url;
    }
    connectedCallback() {
        super.connectedCallback();
        // wire up accessbility aria-labels with unordered lists
        this.updateAccessibility();
    }
    render() {
        const isMobile = __classPrivateFieldGet(this, _RhFooter_matchMedia, "f").mediaQueryList?.matches ?? false;
        return y$1 `
      <footer class="base ${o$5({ isMobile })}" part="base">
        <slot name="base">
          <div class="section header" part="section header">
            <slot name="header">
              <div class="header-primary" part="header-primary">
                <slot name="header-primary">
                  <div class="logo" part="logo">
                    <slot name="logo">
                      <a href="/en">
                        <img alt="Red Hat" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"/>
                      </a>
                    </slot>
                  </div>
                </slot>
              </div>
              <div class="header-secondary" part="header-secondary">
                <slot name="header-secondary">
                  <div class="social-links">
                    <rh-footer-links class="social-links-item"
                      part="social-links"
                      aria-label="Red Hat social media links">
                      <slot name="social-links"></slot>
                    </rh-footer-links>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
          <div class="section main" part="section main">
            <slot name="main">
              <div class="main-primary" part="main-primary">
                <slot name="main-primary">
                  <div class="links" part="links">
                    ${__classPrivateFieldGet(this, _RhFooter_instances, "m", _RhFooter_renderLinksTemplate).call(this, isMobile)}
                  </div>
                </slot>
              </div>
              <div class="main-secondary" part="main-secondary">
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          <slot name="global"></slot>
        </slot>
      </footer>
    `;
    }
    /**
     * Get any `<ul>`s that are in the designated link slots
     * and syncronously update each list and header if we need to.
     */
    updateAccessibility() {
        const listsSelector = ':is([slot^=links],[slot=footer-links-primary],[slot=footer-links-secondary]):is(ul)';
        for (const list of this.querySelectorAll(listsSelector)) {
            // if we already have a label then we assume that the user
            // has wired this up themselves.
            if (!list.hasAttribute('aria-labelledby')) {
                // get the corresponding header that should be the previous sibling
                const header = isHeader(list.previousElementSibling?.tagName ?? '') ? list.previousElementSibling : null;
                if (!header) {
                    return __classPrivateFieldGet(this, _RhFooter_logger, "f").warn('This links set doesn\'t have a valid header associated with it.');
                }
                else {
                    // add an ID to the header if we need it
                    header.id || (header.id = n$5('rh-footer'));
                    // add that header id to the aria-labelledby tagk
                    list.setAttribute('aria-labelledby', header.id);
                }
            }
        }
    }
}
_RhFooter_matchMedia = new WeakMap(), _RhFooter_logger = new WeakMap(), _RhFooter_instances = new WeakSet(), _RhFooter_renderLinksTemplate = function _RhFooter_renderLinksTemplate(isMobile = false) {
    // gather all of the links that need to be wrapped into the accordion
    // give them a designation of either 'header' or 'panel'
    const children = Array.from(this.querySelectorAll(':scope > [slot^=links]'), ref => ({
        type: isHeader(ref.tagName) ? 'header' : 'panel',
        ref,
    }));
    // Update the dynamic slot names if on mobile
    children.forEach(({ ref }, i) => ref.setAttribute('slot', isMobile ? `links-${i}` : 'links'));
    return !(isMobile && children) ? y$1 `
      <slot name="links"></slot>
      ` : y$1 `
      <pfe-accordion on="dark" color-palette="darkest">${children.map((child, index) => n$6 `
        <pfe-accordion-${o$4(child.type)}>
          <slot name="links-${index}"></slot>
         </pfe-accordion-${o$4(child.type)}>`)}
      </pfe-accordion>
    `;
};
RhFooter.version = '{{version}}';
RhFooter.styles = [styles$4, responsiveStyles];
__decorate([
    colorContextProvider(),
    e$2({ reflect: true, attribute: 'color-palette' })
], RhFooter.prototype, "colorPalette", void 0);

customElements.define('rh-footer', RhFooter);
