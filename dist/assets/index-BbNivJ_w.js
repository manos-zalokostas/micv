(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,ee=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),se=new WeakMap;let fe=class{constructor(e,a,s){if(this._$cssResult$=!0,s!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(ee&&e===void 0){const s=a!==void 0&&a.length===1;s&&(e=se.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&se.set(a,e))}return e}toString(){return this.cssText}};const _e=i=>new fe(typeof i=="string"?i:i+"",void 0,te),u=(i,...e)=>{const a=i.length===1?i[0]:e.reduce((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new fe(a,i,te)},ke=(i,e)=>{if(ee)i.adoptedStyleSheets=e.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of e){const s=document.createElement("style"),o=B.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=a.cssText,i.appendChild(s)}},oe=ee?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let a="";for(const s of e.cssRules)a+=s.cssText;return _e(a)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ee,defineProperty:Ae,getOwnPropertyDescriptor:qe,getOwnPropertyNames:Ce,getOwnPropertySymbols:$e,getPrototypeOf:De}=Object,V=globalThis,ne=V.trustedTypes,Me=ne?ne.emptyScript:"",Pe=V.reactiveElementPolyfillSupport,N=(i,e)=>i,Y={toAttribute(i,e){switch(e){case Boolean:i=i?Me:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let a=i;switch(e){case Boolean:a=i!==null;break;case Number:a=i===null?null:Number(i);break;case Object:case Array:try{a=JSON.parse(i)}catch{a=null}}return a}},ve=(i,e)=>!Ee(i,e),re={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ve};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;class P extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=re){if(a.state&&(a.attribute=!1),this._$Ei(),this.elementProperties.set(e,a),!a.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,a);o!==void 0&&Ae(this.prototype,e,o)}}static getPropertyDescriptor(e,a,s){const{get:o,set:n}=qe(this.prototype,e)??{get(){return this[a]},set(r){this[a]=r}};return{get(){return o?.call(this)},set(r){const p=o?.call(this);n.call(this,r),this.requestUpdate(e,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const e=De(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const a=this.properties,s=[...Ce(a),...$e(a)];for(const o of s)this.createProperty(o,a[o])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[s,o]of a)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[a,s]of this.elementProperties){const o=this._$Eu(a,s);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)a.unshift(oe(o))}else e!==void 0&&a.push(oe(e));return a}static _$Eu(e,a){const s=a.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const s of a.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,a,s){this._$AK(e,s)}_$EC(e,a){const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:Y).toAttribute(a,s.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,a){const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=s.getPropertyOptions(o),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Y;this._$Em=o,this[o]=r.fromAttribute(a,n.type),this._$Em=null}}requestUpdate(e,a,s){if(e!==void 0){if(s??=this.constructor.getPropertyOptions(e),!(s.hasChanged??ve)(this[e],a))return;this.P(e,a,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,a,s){this._$AL.has(e)||this._$AL.set(e,a),s.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(a)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach(a=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(a=>this._$EC(a,this[a])),this._$EU()}updated(e){}firstUpdated(e){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[N("elementProperties")]=new Map,P[N("finalized")]=new Map,Pe?.({ReactiveElement:P}),(V.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,K=ie.trustedTypes,le=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,ye="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,we="?"+k,Re=`<${we}>`,D=document,L=()=>D.createComment(""),Z=i=>i===null||typeof i!="object"&&typeof i!="function",ae=Array.isArray,je=i=>ae(i)||typeof i?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,de=/>/g,A=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,pe=/"/g,be=/^(?:script|style|textarea|title)$/i,Oe=i=>(e,...a)=>({_$litType$:i,strings:e,values:a}),l=Oe(1),M=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),me=new WeakMap,q=D.createTreeWalker(D,129);function Te(i,e){if(!ae(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return le!==void 0?le.createHTML(e):e}const Ie=(i,e)=>{const a=i.length-1,s=[];let o,n=e===2?"<svg>":e===3?"<math>":"",r=O;for(let p=0;p<a;p++){const c=i[p];let g,v,d=-1,x=0;for(;x<c.length&&(r.lastIndex=x,v=r.exec(c),v!==null);)x=r.lastIndex,r===O?v[1]==="!--"?r=ce:v[1]!==void 0?r=de:v[2]!==void 0?(be.test(v[2])&&(o=RegExp("</"+v[2],"g")),r=A):v[3]!==void 0&&(r=A):r===A?v[0]===">"?(r=o??O,d=-1):v[1]===void 0?d=-2:(d=r.lastIndex-v[2].length,g=v[1],r=v[3]===void 0?A:v[3]==='"'?pe:he):r===pe||r===he?r=A:r===ce||r===de?r=O:(r=A,o=void 0);const _=r===A&&i[p+1].startsWith("/>")?" ":"";n+=r===O?c+Re:d>=0?(s.push(g),c.slice(0,d)+ye+c.slice(d)+k+_):c+k+(d===-2?p:_)}return[Te(i,n+(i[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class H{constructor({strings:e,_$litType$:a},s){let o;this.parts=[];let n=0,r=0;const p=e.length-1,c=this.parts,[g,v]=Ie(e,a);if(this.el=H.createElement(g,s),q.currentNode=this.el.content,a===2||a===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=q.nextNode())!==null&&c.length<p;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(ye)){const x=v[r++],_=o.getAttribute(d).split(k),W=/([.?@])?(.*)/.exec(x);c.push({type:1,index:n,name:W[2],strings:_,ctor:W[1]==="."?Le:W[1]==="?"?Ze:W[1]==="@"?He:F}),o.removeAttribute(d)}else d.startsWith(k)&&(c.push({type:6,index:n}),o.removeAttribute(d));if(be.test(o.tagName)){const d=o.textContent.split(k),x=d.length-1;if(x>0){o.textContent=K?K.emptyScript:"";for(let _=0;_<x;_++)o.append(d[_],L()),q.nextNode(),c.push({type:2,index:++n});o.append(d[x],L())}}}else if(o.nodeType===8)if(o.data===we)c.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(k,d+1))!==-1;)c.push({type:7,index:n}),d+=k.length-1}n++}}static createElement(e,a){const s=D.createElement("template");return s.innerHTML=e,s}}function R(i,e,a=i,s){if(e===M)return e;let o=s!==void 0?a._$Co?.[s]:a._$Cl;const n=Z(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,a,s)),s!==void 0?(a._$Co??=[])[s]=o:a._$Cl=o),o!==void 0&&(e=R(i,o._$AS(i,e.values),o,s)),e}class Ne{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:s}=this._$AD,o=(e?.creationScope??D).importNode(a,!0);q.currentNode=o;let n=q.nextNode(),r=0,p=0,c=s[0];for(;c!==void 0;){if(r===c.index){let g;c.type===2?g=new U(n,n.nextSibling,this,e):c.type===1?g=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(g=new Ue(n,this,e)),this._$AV.push(g),c=s[++p]}r!==c?.index&&(n=q.nextNode(),r++)}return q.currentNode=D,o}p(e){let a=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,a),a+=s.strings.length-2):s._$AI(e[a])),a++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,s,o){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=R(this,e,a),Z(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=H.createElement(Te(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(a);else{const n=new Ne(o,this),r=n.u(this.options);n.p(a),this.T(r),this._$AH=n}}_$AC(e){let a=me.get(e.strings);return a===void 0&&me.set(e.strings,a=new H(e)),a}k(e){ae(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let s,o=0;for(const n of e)o===a.length?a.push(s=new U(this.O(L()),this.O(L()),this,this.options)):s=a[o],s._$AI(n),o++;o<a.length&&(this._$AR(s&&s._$AB.nextSibling,o),a.length=o)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,s,o,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=a,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(e,a=this,s,o){const n=this.strings;let r=!1;if(n===void 0)e=R(this,e,a,0),r=!Z(e)||e!==this._$AH&&e!==M,r&&(this._$AH=e);else{const p=e;let c,g;for(e=n[0],c=0;c<n.length-1;c++)g=R(this,p[s+c],a,c),g===M&&(g=this._$AH[c]),r||=!Z(g)||g!==this._$AH[c],g===m?e=m:e!==m&&(e+=(g??"")+n[c+1]),this._$AH[c]=g}r&&!o&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Le extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class Ze extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class He extends F{constructor(e,a,s,o,n){super(e,a,s,o,n),this.type=5}_$AI(e,a=this){if((e=R(this,e,a,0)??m)===M)return;const s=this._$AH,o=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==m&&(s===m||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,a,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const We=ie.litHtmlPolyfillSupport;We?.(H,U),(ie.litHtmlVersions??=[]).push("3.2.1");const Be=(i,e,a)=>{const s=a?.renderBefore??e;let o=s._$litPart$;if(o===void 0){const n=a?.renderBefore??null;s._$litPart$=o=new U(e.insertBefore(L(),n),n,void 0,a??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Be(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}}h._$litElement$=!0,h.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:h});const Ke=globalThis.litElementPolyfillSupport;Ke?.({LitElement:h});(globalThis.litElementVersions??=[]).push("4.1.1");const w={PAGE_TRANSIT:"page-transit",INTRO_TRANSIT:"intro-transit",CONTENT_TRANSIT:"content-transit",MONITOR_CONTENT:"monitor-content",DOMAIN_CHANGE:"domain-change",TOOL_CHANGE:"tool-change",PROJECT_SELECT:"project-select",TOOL_SELECT:"tool-select"},E={LAND:1,WORK:2,CERT:3},C={LAND:{INTRO:1,RESU:2,DOCU:3},WORK:{NAVI:1,CONT:2},CERT:{}},S={WORK:"WORK",STUD:"STUDY",TOOL:"TOOL"},y={WORK:S.WORK,TOOL:S.TOOL,PAUS:3,PREV:4,NEXT:5},ze={PAGE:E.LAND,VIEW:C.LAND.RESU};customElements.define("site-index",class extends h{static properties={active:{type:Number},display:{type:String}};constructor(){super(),this.display=ze.PAGE}action(e){this.active=e}evtPageTransit(e){this.display=e.detail.code}async evtProjectSelect(e){this.display=E.WORK,await this.updateComplete,this.shadowRoot.querySelector("page-content").evtContentTransit({detail:{transit:!0,entryId:e.detail.id}})}async evtToolSelect(e){this.display=E.WORK,await this.updateComplete,this.shadowRoot.querySelector("page-content").evtToolChange({detail:{tool:e.detail.tool}})}render=()=>l`

            <div id="view"
                 @page-transit=${this.evtPageTransit}
                 @project-select=${this.evtProjectSelect}
                 @tool-select=${this.evtToolSelect}>

                <div id="wrapper">

                    <header>
                        <global-menu></global-menu>
                        <global-search></global-search>
                    </header>

                    <article>
                        ${E.LAND===this.display&&l`
                                    <div id="introduction">
                                        <page-introduction></page-introduction>
                                    </div>
                                `||E.WORK===this.display&&l`
                                    <div id="content">
                                        <page-content></page-content>
                                    </div>
                                `||""}
                    </article>
                </div>

            </div>
        `;static styles=u`

            #view {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background: linear-gradient(180deg, black, transparent);

                #wrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                    padding: 15px;

                    header {
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        width: 95vw;
                        padding: 10px 25px;

                    }


                    article {
                        position: absolute;
                        left: 0;
                        width: 100vw;
                        height: 100vh;


                        #introduction {
                            top: 0;
                        }

                        #content {
                            top: 100%;
                        }

                        #credentials {
                            top: 200%;
                        }

                    }


                }

            }

        `});customElements.define("badge-category",class extends h{static properties={entry:{type:String}};constructor(){super()}action(e){}render=()=>l`
            <button class="cat_key"
                    @click="${this.action}">
                <span>${this.entry}</span>
            </button>
        `;static styles=u`
            button {
                color: white;
                font-family: verdana;
                padding: 4px 10px;
                border-radius: 10px;
                border: none;
                outline: none;
                background-color: indianred;
            }
        `});const Ve=()=>["mi-scale-min","mi-scale-mid","mi-scale-max"][+(Math.random()*10%3).toFixed()],Fe=i=>{const e=+(Math.random()*10).toFixed();return i.forEach((a,s)=>s%e&&i.unshift(s%2?i.shift():i.pop())),i};customElements.define("badge-tool",class extends h{static properties={active:{type:Number},entries:{type:Array}};constructor(){super(),this.active=1}action(e){this.active=e}render=()=>l`
            <aside>
                ${Fe(this.entries).map(e=>l`
                                    <img class="${Ve()}"
                                         src="/images/tech_logos/${e}.jpg" alt="icon ${e}"/>
                                `)}
            </aside>
        `;static styles=u`
            aside {
                position: fixed;
                z-index: 1;
                bottom: 10%;
                opacity: 0.09;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100vw;
                pointer-events: none;

                * {
                    pointer-events: none;
                }

                img {
                    width: 175px;
                    //height: 150px;
                    padding: 12px;
                    background-color: white;
                    border-radius: 10px;

                    &.mi-scale-min {
                        transform: scale(1.3);
                    }

                    &.mi-scale-mid {
                        transform: scale(1);
                    }

                    &.mi-scale-max {
                        transform: scale(.8);
                    }

                }

            }


        `});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Je=i=>(...e)=>({_$litDirective$:i,values:e});class Qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,s){this._$Ct=e,this._$AM=a,this._$Ci=s}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class X extends Qe{constructor(e){if(super(e),this.it=m,e.type!==Ge.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===M)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const a=[e];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}}X.directiveName="unsafeHTML",X.resultType=1;const b=Je(X),t={ACCE:"access",ACCO:"accounting",AJAX:"ajax",ANAL:"analysis",ANDR:"android",APAC:"apache",BOOT:"bootstrap",BUSI:"business",CENT:"centos",CHRO:"chrome_developer_tools",CLAN:"c_language",COMM:"communication",CSHA:"c_sharp",CSS3:"css3",DMAI:"data_maintenance",DATA:"data_mining",DBAP:"database_application",DESK:"desktop_application",DOCK:"docker",DCOM:"docker_compose",DREA:"dreamweaver",ECLI:"eclipse",ES6:"es6",EXCE:"excel",EXPR:"expressjs",FLAS:"flash",GIT:"git",GOAC:"goaccess",GRAF:"grafana",HTML:"html",HTM5:"html5",ILLU:"illustrator",JAVA:"java",JSCR:"javascript",JOOM:"joomla",JQUE:"jquery",JSON:"json",KEYC:"keycloak",LARA:"laravel",LINU:"linux_terminal",MARK:"marketing",MATL:"matlab",MOBI:"mobile",MONI:"monitoring",MVC:"mvc",MYSQ:"mysql",NETB:"netbeans",NEXT:"nextjs",NGIN:"nginx",NODE:"nodejs",OOP:"oop",ORAC:"oracle",PHOT:"photoshop",PHP:"php",PHPS:"phpstorm",POWE:"powerpoint",PRIS:"prisma",PROJ:"project",PMAN:"project_management",PROM:"prometheus",PMOT:"promotion",RABB:"rabbitmq",REAC:"reactjs",REDI:"redis",REQU:"requirements",RESE:"research",RESP:"responsive_design",REST:"rest_api",RISK:"risk_management",SCSS:"scss",SECU:"security",SEO:"seo",SEQU:"sequelize",SOUR:"sourcetree",SQLS:"sql_server",SVEL:"sveltekit",SVN:"svn",SWAG:"swagger",TEAM:"teamwork",TEST:"testing",TWIG:"twig",UBUN:"ubuntu",VBA:"vba",VIRT:"virtualbox",VISI:"visio",VISU:"visual_studio",VITE:"vite",WEBA:"web_application",WEBP:"webpack",WEB_:"web_standards",WEKA:"weka",XML:"xml",XPAT:"xpath",XSLT:"xslt",YIIM:"yii_mvc",ZEND:"zend"},j=[{domain:"WORK",id:"WK25",section:"Facilities Monitoring",category:"Design and Development",title:"Electro  - Facilities Management",tools:[t.WEBA,t.JSCR,t.SVEL,t.VITE,t.ES6,t.CSS3,t.SCSS,t.ANAL,t.REQU,t.NODE,t.GIT,t.REST,t.DOCK,t.DCOM,t.KEYC,t.SQLS,t.PROM,t.GRAF,t.MONI,t.PRIS,t.RABB],description:`<p>scope of the project</p><ul><li> analyze business processes, gather and structure their data relations</li><li> responsive layouts for desktop / mobile viewing</li><li> users can register numerous companies that they maintain</li><li> provide numerous searching / filtering features that apply special meaning to units-status / -damages /-services /-freon installments</li><li> crud operations on units, units status and scheduling</li><li> data importing / exporting w/ .xsl files + .xls templates for consistent usage of the services</li><li> units actions scheduling and historical search</li><li> register multiple entries w/ single commands / .xls imports</li><li> application parameters configuration + create new properties etc</li><li> user profile + authentication / authorization integrations</li><li> qrcodes that when scanned will direct users to unit status page where all unit details are presentable</li><li> exportable qrcodes for printing in high resolution + company log on top</li><li> multiple language support</li><li> installed on google cloud platform</li><li> refreshable app access while using the app</li><li> user authentication - resources access authorization</li><li> sw | service worker integration for better app performance and static asset caching</li><li> published online / nginx server w/ reverse proxy</li><li> https renewable ssl certificates</li></ul>
`,score:"-",tutor:"-",comment:"-",links:"",shots:["images/electro/elec-dam-handl.png","images/electro/elec-dam-multi.png","images/electro/elec-land.png","images/electro/elec-param.png","images/electro/elec-sche-freon.png","images/electro/elec-serv-new.png","images/electro/elec-unit-filter.png","images/electro/elec-unit-qrcode.png","images/electro/elec-unit-search.png","images/electro/elec-unit-status.png"]},{domain:"WORK",id:"WK24",section:"Merchandise",category:"Design and Development",title:"Marine Service Parts",tools:[t.WEBA,t.JSCR,t.SVEL,t.VITE,t.ES6,t.CSS3,t.SCSS,t.ANAL,t.REQU,t.NODE,t.GIT,t.REST,t.DOCK,t.DCOM,t.KEYC,t.SQLS,t.PROM,t.GRAF,t.MONI,t.PRIS,t.RABB],description:"<ul><li> internal housekeeping + eshop services for marine service parts</li><li> analyze business processes, gather and structure their data relations</li><li> responsive layouts for desktop / mobile viewing</li><li> integrate payments online / offline w/ paypal and on-delivery respectively</li><li> create carts and bookmark features</li><li> send emails after online / offline purchases commited</li><li> provide several filters / search areas for products indexing + global search w/ barcode / service part keywords indxing</li><li> user profile + authentication / authorization integrations</li><li> provide meaningfull urls / page content for increased seo indexability</li><li> multiple language support</li><li> https renewable ssl certificates</li></ul>",score:"-",tutor:"-",comment:"-",links:"",shots:["images/mare/mare-land.png","images/mare/mare-part-prev.png","images/mare/mare-search-thermo.png","images/mare/mare-book.png","images/mare/mare-buy-conf.png","images/mare/mare-buy-end.png","images/mare/mare-cart.png","images/mare/mare-engine.png","images/mare/mare-engine-part.png","images/mare/mare-search.png","images/mare/mare-search-belt.png","images/mare/mare-search-gasket.png","images/mare/mare-user.png"]},{domain:"WORK",id:"WK23",section:"Energy",category:"Design and Development",title:"R2D2 - Reliability Resilience & Grid Defence",tools:[t.WEBA,t.JSCR,t.SVEL,t.VITE,t.ES6,t.CSS3,t.SCSS,t.ANAL,t.REQU,t.NODE,t.GIT,t.REST,t.DOCK,t.DCOM,t.KEYC,t.SQLS,t.PROM,t.GRAF,t.MONI,t.PRIS,t.RABB],description:`<p>deliverable was a part of multi european endevour that roots and founded by greater movement “horizon 2020"</p><ul><li> 2 energy web appls</li><li> remote user authentication "keycloak" + sso</li><li> resposive mobile / desktop layouts</li><li> integrate python api to simulate feedback</li><li> run preconfigured daily scheduling to run simulations</li><li> use redis for session management / caching</li><li> use monitoring tools to supervise the infrastructure status</li><li> publish applications onlne w/ nginx proxy</li></ul><h6>> app 'flexibility'</h6><ul><li> integrate layouts for 3 different roles 'tso / dso / aggregators'</li><li> numerous charts to provide a solid understanding of the data flow in a daily basis</li><li> numerous filters + chronological searches to examine data</li></ul><h6>> app 'planning'</h6><ul><li> scenarios builder forms</li><li> build scenarios and use numerous charts to gain understanding of the resuts</li><li> push effective results to remove services</li></ul>
`,score:"-",tutor:"-",comment:"-",links:"",shots:["images/r2d2/r2d2-search.png","images/r2d2/r2d2-resilience.png","images/r2d2/r2d2-create.png","images/r2d2/r2d2-latest.png","images/r2d2/r2d2-spat.png"]},{domain:"WORK",id:"WK22",section:"Energy",category:"Design and Development",title:"Synergies",tools:[t.WEBA,t.JSCR,t.SVEL,t.VITE,t.ES6,t.CSS3,t.SCSS,t.ANAL,t.REQU,t.NODE,t.GIT,t.REST,t.DOCK,t.DCOM,t.KEYC,t.SQLS,t.PROM,t.GRAF,t.MONI,t.PRIS,t.RABB],description:`<p>Deliverable was a part of multi European big-data project ‘Synergies” that comes as a continuity of v.1 "Synergy" project  that roots and founded by greater movement “Horizon 2020”. Project customers are major national energy suppliers across Europe</p><ul><li> 2 energy web appls</li><li> remote user authentication "keycloak" + sso</li><li> resposive mobile / desktop layouts</li><li> integrate python api to simulate feedback</li><li> run preconfigured daily scheduling to run simulations</li><li> use redis for session management / caching</li><li> use monitoring tools to supervise the infrastructure status</li><li> publish applications onlne w/ nginx proxy</li></ul><h6>> app 'flexibility'</h6><ul><li> integrate layouts for 3 different roles 'tso / dso / aggregators'</li><li> numerous charts to provide a solid understanding of the data flow in a daily basis</li><li> numerous filters + chronological searches to examine data</li></ul><h6>> app 'planning'</h6><ul><li> scenarios builder forms</li><li> build scenarios and use numerous charts to gain understanding of the resuts</li><li> push effective results to remove services</li></ul>
`,score:"-",tutor:"-",comment:"-",links:"",shots:["images/synergies/sgsflex-agr-search.png","images/synergies/sgsflex-land.png","images/synergies/sgsflex-log.png","images/synergies/sgsflex-tso.png","images/synergies/sgsflex-tso-asset.png","images/synergies/sgsplan-planres.png","images/synergies/sgsplan-scen-res.png","images/synergies/sgsplan-scennew.png","images/synergies/sgsplan-scenover.png"]},{domain:"WORK",id:"WK21",section:"Energy",category:"Design and Development",title:"EcoEms Energy Analytics - Denmark",tools:[t.WEBA,t.JSCR,t.SVEL,t.VITE,t.ES6,t.CSS3,t.SCSS,t.ANAL,t.REQU,t.NODE,t.GIT,t.REST,t.DOCK,t.DCOM,t.KEYC,t.SQLS,t.PROM,t.GRAF,t.MONI,t.PRIS,t.RABB],description:"<p>the scope of the project was to attain a good overview of partners resources state and in return simulate and pushback an optimised schedule for their resources in order to achieve this we would requilarly consume data like forecasts, weather reports, temperature levels, resources status etc in different intervals during the day. internally then after maintaining and evaluating data we would dispatch python simulations and come up w/ the base case scenarios. eventually we would push back our estimations to partners remote services.</p><ul><li>compose a complete system infrastructure to perform respective routines at each phase - subscribe to remote channels w/ rabbitmq & mqtt to retrieve datasets in spare intervals - create internal scheduling system that would invoke procedures at predefined times - create a python api that would provide endpoints for simulating different tasks - publish our processes estimations at several remote channels</li><li>invole keycloak iam controls server to control the authentication, authorization of users and resources</li><li>retrieve daily measurements from extrnal resources, both real-time / scheduled-time using mqtt protocol</li><li>provide the visuals for the administrators to analylize the original datasets consumed daily/hourly by remote services but also for the final results pushed back after performing simlulations</li><li>monitor the infrastructure safety with prometheus and grafana tools</li></ul>,",score:"-",tutor:"-",comment:"-",links:"",shots:["images/ecodk/ecodk-elec.png","images/ecodk/ecodk-tank.png","images/ecodk/ecodk-heatdem.png","images/ecodk/ecodk-dem.png","images/ecodk/ecodk-heat.png"]},{domain:"WORK",id:"WK20",section:"Energy",category:"Design and Development",title:"EcoEms Energy Analytics - Greece",tools:[t.WEBA,t.JSCR,t.SVEL,t.VITE,t.ES6,t.CSS3,t.SCSS,t.ANAL,t.REQU,t.NODE,t.GIT,t.REST,t.DOCK,t.DCOM,t.KEYC,t.SQLS,t.PROM,t.GRAF,t.MONI,t.PRIS,t.RABB],description:"< <p> The scope of the project was to structure and visualize the overall energy consumption generated by conventional units and eventually use input for administrators to perform simulations so that renewable empowered energy could find and claim its effective margin on the daily demand. </p> <ul> <li> In technical perspective, the workload dealt with design and implement the infrastructure and 2 web applications for the Greek and Denmark counterparts. </li> <li> Invole Keycloak IAM controls server to control the authentication, authorization of users and resources </li> <li> Retrieve daily measurements from extrnal resources, both real-time / scheduled-time using MQTT protocol </li> <li> Provide the visuals for the administrators to analylize load / demand / deficit of energy </li> <li> Monitor the infrastructure safety with Prometheus and Grafana tools </li> </ul>",score:"-",tutor:"-",comment:"-",links:"",shots:["images/ecoems/ecosys.png","images/ecoems/ecostn.png","images/ecoems/ecoliveq.png","images/ecoems/ecospec.png","images/ecoems/ecoform.png"]},{domain:"WORK",id:"WK19",section:"Energy",category:"Design and Development",title:"Synergy - Energy Analytics Apps",tools:[t.WEBA,t.JSCR,t.REAC,t.NEXT,t.EXPR,t.SWAG,t.ES6,t.CSS3,t.SCSS,t.ANAL,t.REQU,t.NODE,t.WEBP,t.GIT,t.REST,t.DOCK,t.DCOM,t.REDI,t.KEYC,t.MYSQ,t.PROM,t.GRAF,t.MONI,t.SEQU,t.GOAC,t.NGIN],description:"<ul> <li> Scopes of the project are to build infrastructure for the Greek domains hosting the 2 GUI Applications </li> <li> Delegate apps 'authentication / authorization' processes and SSO features to remote core platform invoking the Keycloak IAM controls </li> <li> Provide analytics and chart visualizations in a way to enhance the customers understanding and tendencies of excessive, collaborative amounts of data </li> <li> Dockerized infrastructure utilized to maintain the interconnections active between infrastructure nodes </li> <li> Monitor the infrastructure safety with Prometheus, Grafana and GoAccess tools </li> </ul>",score:"-",tutor:"-",comment:"-",links:"",shots:["images/synergy/sfreq.png","images/synergy/sintro.png","images/synergy/splan.png","images/synergy/sscen.png","images/synergy/ssel.png"]},{domain:"WORK",id:"WK18",section:"Energy",category:"Design and Development",title:"Hybrid Power Management",tools:[t.WEBA,t.JSCR,t.REAC,t.NEXT,t.ES6,t.CSS3,t.SCSS,t.REQU,t.ANAL,t.NODE,t.WEBP,t.GIT,t.REST,t.DOCK,t.MYSQ,t.NGIN],description:" <ul> <li> Core scopes of the project: Power Production / Load / Availability, Technical status of units and ultimately alignment with the official Schedule announced by the national supplier on daily basis </li> <li> The project consists of several policy restrictions applied at all levels and impose strict time submissions compliance and algorithmic data dependencies </li> <li> Communication amongst all members addressed within the app with Notifications and Message exchanges </li> <li> Dockerized infrastructure was installed remotely to national supplier premises at project completion </li> </ul>",score:"-",tutor:"-",comment:"-",links:"",shots:["images/hybrid/htos.png","images/hybrid/hintro.png","images/hybrid/hload.png","images/hybrid/hprod.png","images/hybrid/hshed.png"]},{domain:"WORK",id:"WK17",section:"Hospitality",category:"Design and Development",title:"Rateparity - Hospitality Tools",tools:[t.WEBA,t.JSCR,t.REAC,t.ES6,t.CSS3,t.SCSS,t.REQU,t.NODE,t.WEBP,t.GIT,t.REST],description:"<h3>Employed as standalone Frontend Developer to build fully customizable UI widgets and the backend configuration app  in association with a backend data api developer.</h3> <p> The objective was to create a new product that would explore the potentials of UI widgets and thus enter a new market for the company <br /> My role as a Frontend developer was to create the independable CORS empowered Javascript widgets that would load on affiliate sites. The widgets should invoke the latest Js trends, load on sites without causing or receiving Js / CSS defects and should be as lightweight as possible restraining from vaguely loading countless libraries. Additianally I was attached to build the backend configuration application. </p> <h4>Main Developments</h4> <u>FRONTEND WIDGETS</u> <ul> <li>Design and develop the app's Installer that can be used on affiliate sites with a single HTML “Head”entry</li> <li>Design and develop decoupled SPA widgets, that reside on their own domains and can be launched by installer on demand</li> <li> <p> Publish 5 distinct widget types, with 4 viewport layouts for each, to accommodate diversity of screen displays: <br /> - Price checks::          Integrates calendar that helps users check hotel prices per accommodation and compare with major booking channels <br />- Active offers::          Registered offers can be displayed with a user click <br />- Notifications::          Intresting metrics, in the form of notifications are displayed on sites screen <br />- Popup offers::          Offers can popup on user display at navigation time, based on submitted configuration </p> </li> <li>Utilize the latest React 16.8 build and make use of powerful features like Hooks, Code splitting, Lazy loading, Context api, Dynamic imports etc</li> <li>Make extensive use of cache so that widgets restrain from excessive calls to the remote service</li> <li>Structure the development environment with NodeJs, Webpack, Babel etc</li> </ul> <br /> <u>BACKEND APPLICATION</u> <ul> <li> <p>Create a React 16.4 application based on a helper theme with some main group activities <br />- Configuration domains per widget <br />- Metrics and evaluation of widget usage <br />- Main Dashboard, Install and more.. </p> </li> <li> <p> The widgets configuration includes <br />- Configurable, on screen, positioning <br />- Configurable colors and literals <br />- Configurable activation / deactivation periods </p> </li> </ul>",score:"-",tutor:"-",comment:"-",links:"",shots:["images/rateparity/widget_max_roomstream.png","images/rateparity/widget_price_full.png","images/rateparity/widget_offer_full.png","images/rateparity/config_price_position.png","images/rateparity/config_offer_colors.png"]},{domain:"WORK",id:"WK16",section:"Hospitality",category:"Design and Development",title:"Cosmores Booking Engine",tools:[t.WEBA,t.PHP,t.JSCR,t.JQUE,t.CSS3,t.OOP,t.REQU,t.MYSQ,t.CENT,t.SECU,t.GIT,t.REST],description:"<h3>Employed as standalone Fullstack Developer to maintain and extend the company's products.</h3> <p> The objective was to update the company's products, increase and enforce security on critical fields and launch new tools and features <br /> My role as a fullstack developer was to update the overall environment of a more than a decade past developed PHP system, without any coding formation style and mixed up technologies (php, js, css) on huge pages. Additionally I would need to create some common reusable helper structures to assist me build new things properly. </p> Main Developments <ul> <li>Build common and explicit PHP helper structures to make development lifecycle natively simple and secure</li> <li> <p> Build a configurable, Javascript CORS widget for displaying best price of an affiliate hotels.</p> <br />- A new REST-like, PHP API build to accommodate the exchange of CORS data consumed by widget <br />- The widget travels from Cosmores to customer site in string formate and then self-installed with included javascript launcher <br />- The widget is build with vanilla Js and plain CSS in order to avoid confiict with installed Jquery / Bootstrap or own site styles <br />- The widget is compatible with IE 8, Safari, Chrome etc <br />- The widget is fully controllable and customizable from respective backend app. </p> </li> <li>Put the application under GIT versioning and create a master repository on a remote server</li> <li>Create a portable, local virtual clone (vbox) of the Production environment server, so that development and testing activities</li> restrain from Production.</li> <li> <p>Leverage the security processes overall: <br /> - Leverage the security of entry by blocking the front entrance and allow only recognizable devices to log in. The activity uses expirable tokens that are only accepted for limited amount of time, and provide respective messages to users for guidance. <br />- Enforce strong passwords with mixed char types and length <br />- Leverage the encryption/decryption procedures for all sensitive data in the DB, which led to more than 1M rows update <br />- Enforce a finite number of times informative data can be displayed before locked for ever <br />- Leverage the restriction rules for image uploads and malicious code indexing methods <br />- Invoke sanitize/filtering on data import/display respectively <br />- Enforce PDO with MySQL inserts <br />- Make extensive use of .httaccess for filtering urls, root and child directories with explicit rules for each </p> </li> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/cosmores/compareme_config.png","images/cosmores/compareme_info.png"]},{domain:"WORK",id:"WK15",section:"Warehouse",category:"Design and Development",title:"Ecep Technologies Inventory",tools:[t.WEBA,t.JSCR,t.PHP,t.CSS3,t.PHP,t.OOP,t.REQU,t.MYSQ,t.LARA,t.BOOT,t.GIT,t.PHPS,t.MVC,t.REST],description:" <p> The objective was to build a web system that would allow company's employees to perform daily workflow procedures handily and reduce the times needed to perform such tasks with spreadsheets and manpower. <br /> My role was to bring that system to life right from the ground, by communicating with the entrepreneur on a daily basis, to collect and elicit requirements. <br /> The initial task was to design and build a database of a centralized inventory application for company's products, and replace spreadsheets that were used instead. Following steps would issue the extensions  activities required to cover companies processes like purchases, deliveries, sales etc.</p> <h4>Main Developments</h4> <ul> <li>Design and build an efficient DB system by analyzing and evaluating legacy spreadsheet procedures for more than 500K distinct barcodes</li> <li>Use the Laravel MVC 5.1 Framework to as a robust and secure foundation to build the application and a REST-like API</li> <li>Use remote Git Repository to control development progress but also for deployments</li> <li>Create a Local virtual (VBOX) clone of Production for development purposes</li> <li> <p>Develop the core parts of the Application, ilke <br />- Product Imports with spreadsheets, barcode recognition, manually <br />- Product CRUD & Products Indexing w/ numerous filter combinations <br />- Indexing products lack / surplus <br />- Indexing of Purchases / Deliveries / Sales <br />- Instant evaluation of a devery in a way to identify lack / surplus on time <br />- Instant monitoring of past delivery status like complete / pending items </p> </li> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/ecep/delivery_status.png","images/ecep/pending_purchaces.png","images/ecep/search_tool.png","images/ecep/purchase_details.png"]},{domain:"WORK",id:"WK14",section:"Conferences",category:"Design and Development",title:"Noblelinx CRM",tools:[t.WEBA,t.JSCR,t.PHP,t.CSS3,t.JQUE,t.CHRO,t.OOP,t.REQU,t.JSON,t.SVN,t.PHPS,t.VIRT,t.LINU,t.MYSQ,t.SECU,t.PMAN,t.TEST,t.MVC,t.APAC,t.UBUN,t.CENT],description:" <p>The overall objective was to upgrade, extend and maintain a legacy CRM commercial system that was build on top of PHP legacy constructs. My role was to make the app portable by detaching all hardcoded paths of the project from the server, invoke svn versioning, launch on an updated server and afterwards extend with new features. <br /> The project was large, consisting of more than 500 DB tables and the lack of any viable coding formation to separate diverse technologies was making it difficult to maintain. <br /> The result was to work on the same page with all mixed-up  on  thousand-lined pages. </p> <h4>Main Developments</h4> <ul> <li>Put application under SVN Versioning control</li> <li>Provide portability: Unroot the project that was harcoded  on the host and move all configuration data and links to custom-made external '.ini' configuration,</li> <li>Install and setup a Centos 5 copy of the Production to run as Staging environment and perform tests before updates publishing to Production.</li> <li>Set up a Ubuntu-based virtual 'Local' and Centos-based remote 'Staging' hosts to deploy and test application before move on 'Production'</li> <li>Set up a clone virtual machine (vbox) for development environment</li> <li>Implement Utility classes and a Core class, with MVC-like capabilities, as a root class to extend and inherit all essential activities for the newly invoked classes afterwards.</li> <li>Amongst others, newly initialized child classes, would genuinely have access to: Main and own Configuration, Database storage, Session storage, Access Restrictions, Self-Debug, Debug-Logs, Exceptions, Helper methods, and more.</li> <li>Synchronize 2 legacy Calendar libraries (1 php, 1 js) with Exchange Web Services (EWS) to enable control over Microsoft Calendar Events, User Tasks, Emails, Contacts etc</li> <li>Launch time evaluated,filtered, charts for performance auditing Employees / Teams / Managers / Directors</li> <li>Enforce 90-Days expiring passwords for all users, validated with unique tokens and time restricted activation boundaries,</li> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/noblelinx/performance-manager.png","images/noblelinx/performance-director.png","images/noblelinx/logs.png"]},{domain:"WORK",id:"WK13",section:"Banking",category:"Design and Development",title:"Commerzbank Infobroker",tools:[t.WEBA,t.JSCR,t.PHP,t.CSS3,t.JQUE,t.CHRO,t.OOP,t.REQU,t.TEAM,t.JSON,t.ZEND,t.TWIG,t.BOOT,t.SVN,t.PHPS,t.SECU,t.TEST,t.MVC],description:"<p>The objective was for the team to build a concurrent web solution for the German Commerzbank that would be used internally by company's employees, namely Infobroker.  The intranet would assist bank's employees to monitor,  evaluate and gain insight from data visualizations. <br /> My role was to adhere to design blueprints dictated by company's UI/UX experts and deliver interactive pages and widgets. Enabling daily web meetings with with foreign colleagues and data maintainers, we would need to resolve the required data and the paths to collect before delivering the solutions. <br /> Data would need to get collected with the use of a graphical interface that would ensure data security all the way through. By the time the project reached to a certain level of completeness, my job was moved to provide ticketing support services. </p> Key Responsibilities: <ul> <li>Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)</li> <li>Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs</li> <li>Provide ticketing solutions for acknowledged bugs</li> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/commerzbank/certificates.png","images/commerzbank/indexsystem.png","images/commerzbank/indexwerte.png","images/commerzbank/stockexchange.png","images/commerzbank/topflop.png"]},{domain:"WORK",id:"WK12",section:"Safekeeping",category:"Design and Development",title:"DeltaComsos ERP",tools:[t.WEBA,t.PHP,t.MVC,t.YIIM,t.MYSQ,t.OOP,t.JQUE,t.CSS3],description:` <p> Company's Employee Management systems build with the power of MVC, Yii Framework, that extends to thousands lines long functionality. The system mainly implements PHP, MySQL, JQuery and multiple Javascript plugins like Bootstrap for CSS, Ajaxplorer file sytems, Lightbox and more. During a short time period that I was employeed for the company I have delivered the following results: </p> <ul> <span> <li>1. Plan an all-over from-scratch design for measuring employees monthly workhours. The legacy design had to be upgraded so that we could now count each working second instead of simply adding the succeeding hours. The proccess revealed erronous deliverables granted by the legacy workhour counter. The new design delivered accurate-to-second results, taking into perception each correlation among the business rules listed above: </li> <li> • DateZone Type: Simple Day - Holiday/Sunday.</li> <li> • ShiftZone Type : Plain Shift (8 Hours) - OverHour (81 Hour) - ExtraHours (9+ Hours).</li> <li> • HourZone Type: Morning - Night .</li> <li>2. Moreover the Shifts display, figured on an Interactive Board, would now need to visually alert Administration when the following conflicts occured: </li> <li> • Employees were prohibited from taking a Shift 12 Hours before their last Shift</li> <li> • Employees would need to follow a "5-2" Shifts Rule, issuing 5 working days and 2 Dayoffs during a week long time period</li> <li>3. An application migration to a new Host Server that brough various mulfunctions to extension plugins operation</li> <li>4. A major front-end facelift update, conforming the visual display to latest CSS3 standards with overall Crossbrowser Compatibility efficiency</li> </span> </ul>`,score:"-",tutor:"-",comment:"-",shots:["images/deltacosmos/interactive_board.png","images/deltacosmos/month_workhour.png","images/deltacosmos/employee_info.png","images/deltacosmos/customer_guard.png","images/deltacosmos/map_monitor.png"]},{domain:"WORK",id:"WK11",section:"Education",category:"Design and Development",title:"Pearson E-learning",tools:[t.WEBA,t.JSCR,t.JQUE,t.JSON,t.GIT,t.SOUR,t.HTM5,t.CSS3],description:" <p> E-learning system delivered for Pearson USA, totally consisting by Javascript-Jquery and JSON folded data. During a short-time period that I have been occupied for CSSEducation company I have delivered a demo of the Javascript engine. Its operation is described below: </p> <ul> <span> <li>Design a Json string-patterned API that plain users would need to issue for giving instructions to Javascript engine.</li> <li>Following the pattern-instructions, Javascript engine distincts and allocates page content as: </li> <li> •  Interactive Page Title and Page Description on top of the page, </li> <li> •  Interactive Page Content Description on the left of the page, </li> <li> •  Main Interactive Content on the right, </li> <li> Main Content issues most of interactivity addressed as: </li> <li> •  Aligns multiple interactive paragraph examples along with their functionality-initializing handlers</li> <li> •  Paragraph content-parts come preformated with styles, according to user instructions issued by the API</li> <li> •  Paragraph parts deliver text animating effects</li> <li> •  Paragraph handlers mostly issue video/audio emerging events</li> <li> •  Audio/Video events are synchronized with prioritized text animating effects</li> <li> •  Handler events bring paragraphs to the original preformated state and immediately address the anime</li> <li> •  A variety of text animating effects are addressed, regarded to API issued instructions</li> </span> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/pearson/simple_words.png","images/pearson/tutor_intro.png","images/pearson/anime_audio_synch_1.png","images/pearson/anime_audio_synch_2.png"]},{domain:"WORK",id:"WK10",section:"Portfolio",category:"Design and Development",title:"Curriculum Vitae",tools:[t.WEBA,t.WEB_,t.JSCR,t.JQUE,t.XML,t.CHRO,t.ECLI,t.CSS3,t.HTML],description:" <span> <ul> <li>Restrictively Dynamic Implementation (Every element designed with jQuery-Javascript)</li> <li>Animating Features - Dynamicaly Navigating menus - Scrolable Main Pages (Not loaded)</li> <li>Use Keywords to Categorize Projects and Groups-Navigates upon</li> <li>Dynimacally makes the decisions and creates hosts for presenting :</li> <li> 1. Images - JPEG</li> <li> 2. Documents - PDF</li> <li> 2. Videos - AVI (builds connection to Google Drive)</li> </ul> </span>",score:"-",tutor:"-",comment:"-",shots:["images/micv/studies_grouped.jpg","images/micv/skills_showcase.jpg","images/micv/video_hosted.jpg","images/micv/projects_preview.jpg","images/micv/extra_info.jpg"]},{domain:"WORK",id:"WK09",section:"Merchandise",category:"Design and Development",title:"ELGREG [2013]",tools:[t.WEBA,t.WEB_,t.JSCR,t.AJAX,t.XML,t.XSLT,t.XPAT,t.PHP,t.HTM5,t.CSS3,t.RESP,t.SEO,t.ECLI],description:" <h5>STORE-FRONT</h5> <ul> <li>• SEO-Friendly Design - Readable Seo-Friendly URLS</li> <li>• Breadcrumb (dynamic user navigation)</li> <li>• Sitemap</li> <li>• Responsive Design</li> <li>• Back-end Administration - Customizable</li> <li>• Language Translation </li> <li>• Animating Features (Javascript)</li> <li>• Javascript History API</li> </ul> <h5>BACK-END ADMINISTRATION</h5> <ul> <span> <li>A. Insert Data</li> <li> - Insert Data Row (with form)</li> <li> - Insert Complete Files (.CSV)</li> <li>B Update Data </li> <li> - Data Row (inline)</li> <li> - Distinct Values</li> <li>C. Delete Data</li> <li>D. Filter Data (+ Multiple Filters)</li> <li>E. Avoid Duplicate Values</li> <li>F. Messages to Users (Saved, Not Saved etc)</li> <li>G. Ascend/Descend Order (+ filtered)</li> <li>H. Upload Images -> 1 upload produces 3 images with scaled image sizes</li> </span> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/elgreg_upd/home.jpg","images/elgreg_upd/product_category.jpg","images/elgreg_upd/partner.jpg","images/elgreg_upd/product_full_description.jpg","images/elgreg_upd/administration.jpg"]},{domain:"WORK",id:"WK08",section:"Merchandise",category:"Design and Development",title:"Elgreg",tools:[t.WEBA,t.WEB_,t.XML,t.JSCR,t.AJAX,t.DREA,t.FLAS],description:` <span><p>Elgreg is a building constructions company that provides customers with goods such as marbles, granites, tiles etc, while at the erection state of the premise. </p> <p>Throught the web site the company wishes to showcase its products and provide the 'look and feel' of the company to its prospect customers.</p> <p style="font-size:x-small"><i>*The site is not concluded when it comes to textual material. Therefore most text areas that are found within this domain were originaly placed only for visual matters. </i></p></span>`,score:"-",tutor:"-",comment:"-",shots:["images/elgreg/elgreg_home.jpg","images/elgreg/contact.jpg","images/elgreg/full_preview.jpg","images/elgreg/prods_preview.jpg","images/elgreg/slide_show.jpg"]},{domain:"WORK",id:"WK07",section:"Education",category:"-",title:"Schedule Handler",tools:[],description:" <ul> <p>The system is originally built for providing functionality with regard to the following sections: </p> <span> <li>The system is an instrument for users to arrange, conduct and maintain an annual school   schedule in a relative intuitive and easy way. The users should be provided with guidance to those cases where the operation of the system is ambiguous. </li> <li>The system will maintain hierarchically privileged accessing roles for its users, and top-privileged roles should maintain the faculty to adjust the privileges of the other user-roles.</li> <li>The system maintains diverse accessing level sections, where sections of high importance can only be accessed by the corresponding accessing user roles, as those are imposed by administration.</li> <li>The arrangement of the schedule can only be conducted by highly privileged roles and will be iterated automatically by the system, but verified manually by lower privileged roles, on a daily basis.</li> </span> <li>The schedule can override the formal arrangements or can change completely during a running semester. The system will need to easily integrate the changes and those must be provided for verification as well. </li> <li>The informative resources of the organizations (like registered courses, tutors, campuses addresses etc) can be accessed effectively by all user roles of the system, but only authorized users will be in position to add new resources to the system. </li> <li>The system will maintain a registry where the users interaction with the system can be monitored.</li> <li>The system should be deployed in a secure environment and will maintain the privacy of the registered records from unauthorized users.</li> <li><ul>The system should maintain extra faculties for top-level privileged roles as to: <li>make overall estimations for given time-periods, based on the daily recordings</li> <li>securely backup and/or retrieve the database data on demand</li> </ul></li> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/sheduler/pic_msch.jpg","images/sheduler/pic_hours.jpg","images/sheduler/pic_restrict.jpg","images/sheduler/pic_backup.jpg"]},{domain:"WORK",id:"WK06",section:"HSE and Facility Department",category:"graphics design",title:"HSE Newsletter",tools:[t.FLAS,t.ILLU,t.PHOT,t.COMM,t.PMOT],description:" <span> <p>An electronic leaflet distributed by the Facility Security & HSE Department, with an intention of being delivered to all employees of the company via email on a 3 month basis. Context of the paper would conclude up information regarded relevant to the department’s original scope and principals.</p> <p>The driving concept beneath the newspaper was for the department to establish an active communication port with the members of the company, broadcasting informative and alerting messages for precaution but within a joyful environment, thus more readable for the audience.</p> </span>",score:"-",tutor:"-",comment:"-",shots:["images/hse_newsletter/p1.jpg","images/hse_newsletter/p2.jpg","images/hse_newsletter/p3.jpg"]},{domain:"WORK",id:"WK05",section:"Human Resources Department",category:"graphics design",title:"Innovation Club",tools:[t.FLAS,t.PHOT,t.ILLU,t.COMM,t.PMOT],description:" <span><p>‘Innovation Club’ was an Initiative that was taken by the HR department of the company and was announced to all employees at a specific day. </p> <p>The key concept that laid behind this announcement was the fact that the company motivated it’s employees to identify any major drawbacks on its daily business routines and suggest their ideas to the administrators for overcoming any prospective barriers. </p> <p>This was a huge project that was undertaken by the HR department and included several meetings amongst directors of the company and external advisors. </p> </span> <p>My part in this workload was to design and dress up visually the campaign of the HR department, both for digital and printable mediums. Therefore I participated in gatherings with an external advisor that kept the full picture of the initiative and who would need to pass me a number of perspectives of the idea, so that I could come up with a visual representation of the logo, banners and video animations. </p>",score:"-",tutor:"-",comment:"-",shots:["images/innovation_club/logo_final.jpg","images/innovation_club/banner1.jpg","images/innovation_club/banner2.jpg","images/innovation_club/banner3.jpg"]},{domain:"WORK",id:"WK04",section:"Personal Workload Diary",category:"Design and Development",title:"Daily Scheduler",tools:[t.DESK,t.ACCE,t.DMAI],description:" <p><b> Description of the Application</b></p> <ul> <span> <li>  Register the daily program with adequate information </li> <li>  Track down the date that the notification was made by the departments </li> <li>  Take seriously into account the due date of each assignment </li> <li>  The program maintains a checkbox that designates which of the assignment were fulfilled and those that still pending </li> <li>  Provide special meaning to when exactly was the department informed - since if it was the same date (and not the previous as it formally should) it could cause a serious disorder to the actual schedule of that day </li> <li>  Maintain date-time registry of the actual recording made </li> <li>  Maintain control button for “new”, “save”, “delete” recordings and “refreshing” the actual table due to changes made in the back-end </li> </span> </ul> <u> Two Additional buttons: </u> <ul> <li> One button to preview a report with the assignments that were requested for the following dates, but also for those that are pending from previous dates (highlighted). </li> <li> Second button would delegate to enable the ms-outlook ‘sent mail’ functionality, and attach the next day’s report and send it to the supervisor so that he/she should be informed. </li> </ul> <p><u>Additional Benefits</u></p> <ul> <p>Employing such a database application would empower the department also to: </p> <li>1. Keep the supervisor informed about the next day’s schedule, so that where emerging assignments were requested could respond effectively. </li> <li>2. Explore those departments that we frequently missing to inform us about their critical assignments, so that we could potentially request back for their conformance. </li> <li>3. While working with the system enough we would collect enough data to underline out those day’s that our department would be most likely to have greater traffic, so that we could be prepared. </li> <li>4. Address any prospective conflicts with the departments about past day of the schedule </li> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/daily_schedule/application_main.jpg","images/daily_schedule/report_sent.jpg"]},{domain:"WORK",id:"WK03",section:"HSE and Facility Department",category:"Design and Development",title:"Monthly Bills Monitoring",tools:[t.DESK,t.ACCE,t.EXCE,t.DMAI],description:"<p> <span>The monthly bills statements were recorded and further indexed by Microsoft Access application, providing us with greater efficiency and speed in collecting numerous data and make more wise monitoring upon. The initiative was initially taken in order to monitor the physical resources consumption that was emerging within the company on a monthly basis. Additionally the querying mechanism implemented was enabling us to provide feedback for the HR Department with charts and reports due to the end of each semester. </p> <p> Moving a step further, as the consumption was already acknowledged, the system integrated the faculty to come up and present also the monthly expenditure for all of the consumed resources and finally estimate the total monthly expenditure. Therefore even though the main purpose of the initiative was to monitor the consumption, it was transformed so that it could also monitor and verify our partners charges and invoices. Since adaptation the application has proven successful in doing so, as during all following months did brought to surface small to wide inconsistencies among partners charges and our evaluations. </p> </span> <p> Moreover the data increment was expected to provide us with augmented input for exploration and exploitation. </p> <p> In the background, the application is closely related with an MS Excel table that hosts in an explicit format the consumption of resources made by the company. The Excel file is filled by the user, who upon completion can move to the MS Access environment enabled either to: <ul> <li> Monitor the monthly resources consumption, within the use of chart diagrams </li> <li> Monitor the monthly expenditure, within a report statement </li> </ul> </p> <p> In both cases, the previewing can either be summarised or distinct with explicit information for each service. The partner’s charging statement could then be crosschecked with the applications summarised expenditure report and any diverse outcomes could be examined extensively. </p>",score:"-",tutor:"-",comment:"-",shots:["images/month_bills/month_report.jpg","images/month_bills/excel_file_inside_access.jpg","images/month_bills/month_bills_excel_file.jpg","images/month_bills/request_report_month.jpg"]},{domain:"WORK",id:"WK02",section:"HSE and Facility Department",category:"Design and Development",title:"Booking Rooms",tools:[t.DESK,t.ACCE,t.DMAI,t.VBA],description:" <p><b>Description of the Application</b></p> <ul> <span> <li> The project is a Microsoft Access application that was hosted in the shared files of the company and employees could use while having the access rights on that certain folder. Its main purpose was to resolve the booking of the rooms provided by the company for its members for meetings. </li> <li> Employees were to apply the provided inputs and using the ‘mail’ button a report was triggered in the background to be sent to the meeting-rooms administrator. </li> <li> A number of inputs were required and others were not. Missing to apply a required input would bring up an informative message for the user while trying to save the data, alerting where the omission emerged and highlighting the input[s]. </li> <li> While hovering with the mouse or focusing on an input using the keyboard ‘tab’ key, the ‘message box’ displays messages for the user informing whether the input is required or not. </li> </span> <li> Where the form has been applied effectively and saved, an informative message is displayed to users inform them that the registration was made. </li> <li> Saving a form, would enable the ‘preview request’ and ‘email sent’ buttons and those can further be used by the user. </li> <li> ‘preview request’ would display the report that will be sent to the administrator, while ‘email sent’ would sent it immediately without further activity by the user. </li> </ul> <p><u> Additional Benefits </u></p> <p> The initiative was taken by the department since there were numerous conflicts following the ‘phone calling’ procedure between departments and administrator. Implementing this application would effectively empower the admin to monitor and take care of the whole procedure. Likewise: </p> <ul> <li> We would escape any space for missing phone calls since the requests would land straight to the admin’s email. </li> <li> The admin would maintain a directory of the ‘report requests’ sent, that could be monitored with greater effectiveness than moving back to actual emails and  rolling down conversations before taking the booking decisions. </li> <li> Department delegates would never again sent emails missing any critical information since now the mail could never been sent with the regarded omissions. </li> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/meeting_rooms/meeting_rooms_main.jpg","images/meeting_rooms/message_box_alert.jpg","images/meeting_rooms/coffee_break_policy.jpg","images/meeting_rooms/successful_registration.jpg","images/meeting_rooms/click_preview_report.jpg"]},{domain:"WORK",id:"WK01",section:"HSE and Facility Department",category:"Design and Development",title:"HSE Database",tools:[t.DESK,t.ACCE,t.DMAI,t.VBA],description:" <p><b>Description of the Application</b></p> <ul> <span> <li>The application is a unified ms access environment that delivers instantly, coherent and verbose information about all of the company employees in several distinct domains. </li> <li>Amongst all of the main pages there is a ‘search input’ that will add value while in search of data for an individual. </li> <li>All domains provide also stand-alone and multi-rows presentation of data while indexing the data. </li> <li>Maintain a registry of all the company employees with all of their company-relevant credentials. </li> </span> </ul> <p><u>The domains where the application evolves function are the following: </u></p> <ul> <li> <b> Domain: PERSONS.</b> Employee company-related credentials (name, job purpose, department, geographical area, phone/mobile, email etc.. ) </li> <li> <b> Domain: CARS</b>. Employees training in driving skills is examined and the page incorporates elements like the ‘date’ that examination was taken, the ‘score’ that was achieved and the trainer ‘comments’ about the nominee </li> <li> <b> Domain: CARS</b>. The page resolves the matches between company’s cars fleet and employees. There is a adequate description of the car assigned recorded, as ‘brand’, ‘cc’, ‘color’, ‘leasing-company’, ‘car features’, ‘car km’ and ‘date bought’. Also there is the name of the driver that has been assigned the car. </li> <li> <b> Domain: PARKING</b>. The page resolves the parking seats of 2 different buildings and their correlation with the actual cars of company and assigned drivers (only for employees occupied in office - not sales force).  The page makes extensive use of searching operations providing 3 different domains for indexing. </li> <li> <b> Domain: OVERVIEW</b>. The page gathers and accumulates information from 3 distinct pages and provides a quick overview for each employee. The retrieved pages are ‘roadsafety’, ‘safetracks’ and ‘accidents’ </li> <li> <b> Domain: ANNUAL ROADSAFETY RATES</b>. The page is applied by the HSE department due to each year ending and is a multi-rows evaluation map for each driver. The driver is evaluated from its manager and the HSE department. Next to each driver row there are buttons for quick referencing the employees driving behavior. </li> <li> <b> Domain: ACCIDENTS</b>. The page hosts information about the driving accidents that employees have encountered. Therefore the recording made are: ‘the driver’, ‘accident date’, ‘driver description’ and ‘HSE department categorization’ of the accident. </li> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/hse_db/person_alone.jpg","images/hse_db/accidents.jpg","images/hse_db/annual_safetrack_rates.jpg","images/hse_db/welcome_page.jpg","images/hse_db/cars_alone_km.jpg"]},{domain:"STUDY",id:"ST01",section:"Programming Technologies",category:"desktop application",title:"Java Development",tools:[t.JAVA,t.NETB,t.OOP],description:" <p>The program is a small application that stores the records for multiple users while they submit to its main application window. For each user the application should be in place to store information such as the user IP, user name etc. Some of the inputs are of significant value and the program needs to secure that they are filled appropriately with valid inputs, as also to secure that they will not be disregarded and remain blank by users. </p> <ul> <span> <li> The program obtains that no duplication of values is allowed for inputs such as the user IP and user name. </li> <li>The port inputs must be designed in a way that they shall deliver valid port numbers for registration, not surpassing the number of 65.536, as neither contains inappropriate text characters. </li> <li>Same port numbers can be used among different users, while the program needs to obtain that no port number is allowed to be used twice by the same user. Nevertheless, if a port input is omitted by a user this will not have any defect to the application and the user will be registered. </li> <li>The application will allow a certain number of users to be registered and the program provides notification that informs dynamically the number of registered users. </li> <li>A user that has applied erroneous data will be escaped from registered and the count want run is such case. </span> Pop-up windows alert and inform the users of prospect conflicts traced by the system while also a valid path that should be followed in order to resolve those conflicts. </li> <li>A false action by the user will prevent him from registering. At the same time the application will rather leave correctly applied inputs intact and will provide instructions how to correct those values that generated the conflict. In case where all inputs where applied conformingly, the system will make the registration and following will clear all previous data from the inputs. </li> <li>If the user feels the need to clear the inputs before submitting, there is a button signed as “clear” that can take away all input values with a click. </li> <li>By the time that the number of allowed registered users reaches the limit, the systems informs that no further records can be applied and the “submit” button becomes disabled and blurred, implying that no further call can be applied further. Instead a new button “statistics” is enabled and prompts the user to trigger. </li> <li>Firing the “Statistics” button invokes the system to output a new window that hosts a table with records stored within for all users.</li> <li>At the top of the window there is a certain section where the user is prompted to search for a specific port number currently in use. Clicking the ‘search’ button will generate a query in the background and the results will be displayed in a pop-up window. </li> </ul>",score:"-",tutor:'<h4><a target="_blank" href="https://linkedin.com/in/gprok">Prokopakis, George MSc</a></h4> <p>US Naval Postgraduate School, CA</p>',comment:"-",shots:["images/ptech_a2/alert_2_invalid_input_value.jpg","images/ptech_a2/alert_1_value.jpg","images/ptech_a2/alert_3_dublicate_value_inputs.jpg","images/ptech_a2/alert_4_invalid_input_values.jpg","images/ptech_a2/information_board.jpg"]},{domain:"STUDY",id:"ST09",section:"Web Applications for Businesses",category:"Design and Development",title:"Simple Web Store Development with PHP",tools:[t.WEB_,t.WEBA,t.MYSQ,t.PHP],description:" <p>The report describes the development of a simple portal, designed and hardcoded exclusively making use of: </p> <ul> <span> <li>XHTML-CSS standards </li> <li>PHP scripting language </li> <li>MySQL database system terminal</li> </ul> <p>The demonstration following provides both textual and visual information for the site navigation and at the same time the functionality that is implemented and running behind the scenes. </p> <ul> <p>The portal provides a minimum functionality level that creates impact for three distinct role categories of users. As of those: </p> <li> First group figures the users that enter the site to gain information on selling products </li> <li> Second group figures users that are leaded by the idea to acquire products and therefore need to become registered members of the portal. </li> <li> Third is the group of authorized users. Those are credited members of the company and obtain the capacity to maintain the products database and the previewing of the products, while also handle user registrations and design benefits for the registered users </li> </span> </ul> <p>Throughout the report there is a detailed description for all user groups and their experience with the site, while also the functions that lie underneath each group. </p>",score:"68",tutor:'<h4><a target="_blank"  href="https://facebook.com/ioannis.pandithas?fref=ts">Pandidas, John Phd</a></h4> <p>PhD, University of Liverpool, UK; </p>',comment:"-",shots:["images/webdes_a1/welcome_page.jpg","images/webdes_a1/add_product_to_basket.jpg","images/webdes_a1/single_product_description.jpg","images/webdes_a1/preview_registered_products.jpg","images/webdes_a1/preview_registered_users.jpg"]},{domain:"STUDY",id:"ST10",section:"Systems Development",category:"Design and Development",title:"Media Player Development with C#",tools:[t.DESK,t.CSHA,t.VISU],description:" <p>The report describes the design, development and further the functionality of the media player that created with the use of current trend of Rapid Application Development philosophy. The concept of RAD programming consists of developing and advancing applications within powerful IDE components like Microsoft Visual Studio. Such IDEs retaining the faculty and qualify developers with consistent and optimized functional components that can be embedded to applications visually and can be configured extensively. </p> <p>The application is build totally hardcoded with the use of C# language and some of its popular libraries. Some of the functional features that are enabled by the media player are: </p> <ul> <span> <li> Browsing of the file system using the standard “open file dialog’ component and additionally navigating through the directories paths </li> <li> Playing single files or Creating playlists of preference and arranging their order </li> <li> Drag & Drop functionality </li> <li> Standalone area, that announces informative messages to the user, extents the usability of the application and enhances user experience </li> <li> Extended error handling and window messaging </li> <li> Flexible and adjustable environment </span> </li> </ul>",score:"80",tutor:'<h4><a target="_blank" href="https://linkedin.com/in/ioannischatzis">Chatzis, Ioannis Phd</a></h4> <p> Machine Vision, University of Patras</p>',comment:" <span>Very well analyzed and explained. Very thorough in every aspect of the desing and implementation. Very well commented code. Good functionality. Well designed and user friendly interface. All the extra features asked are added succesfully</span>",shots:["images/sysdev_a1/play_playlist_selected_only.jpg","images/sysdev_a1/media_player_welcome_page.jpg","images/sysdev_a1/create_playlist.jpg","images/sysdev_a1/copy_multiple_file_to_playlist.jpg","images/sysdev_a1/list_view_navigation.jpg"]},{domain:"STUDY",id:"ST02",section:"Systems Development",category:"Design and Development",title:"GUI Development with Matlab",tools:[t.DESK,t.MATL],description:" <p>The report describes the development of a simple GUI application in Matlab IDE environment. </p> <span> <p>The key concept behind this application is to design an interface with Matlab coding that will enable a user to index sound files located in the host’s directory, load them and finally ‘plot’ them in a live chart board. Additionally the application will provide preconfigured filters that can be appended on the sound file and either distort or stabilize their sound. </p> <p>The application incorporates some of the fundamental procedures met in the majority of application developments. </p> <ul><p>As some of those are </p> <li> Browsing activity in the directories of the host system </li> <li> Choosing and loading specific file formats on the application</li> <li> Providing interaction for the user regarding the loaded file.</li> </ul></span> <p>A range of powerful facilities, provided by the Matlab IDE, are programmed accordingly as to provide users with the capacity to submit filtering functionality on loaded sound files and overcome inefficiencies encountered in the original one. </p>",score:"75",tutor:'<h4><a target="_blank" href="https://linkedin.com/in/ioannischatzis">Chatzis, Ioannis Phd</a></h4> <p> Machine Vision, University of Patras</p>',comment:" <span>The features asked where implemented and were justified adequately. Moreover an additional feature was added as a trial to implement a better filtering method.I was pleased with the presentation, the implementation and the justification of the various steps </span>",shots:["images/sysdev_a2/program_interface.jpg","images/sysdev_a2/load_file.jpg","images/sysdev_a2/apply_filter.jpg","images/sysdev_a2/remove_filter.jpg"]},{domain:"STUDY",id:"ST03",section:"Advanced Database Systems and Applications",category:"Design and Development",title:"Machine Learning Algorithms",tools:[t.WEKA,t.DBAP,t.DATA],description:" <p>The report describes the procedure of taking a corrupted raw set of data in MS Excel format and apply numerous modifications upon, transforming it to a valid dataset able to provide us with classification and prediction rules.</p> <p>The procedure starts, with the given dataset on a spreadsheet format that initially needs to be preprocessed through several preliminary modifications. The applications that are used during this phase modifications are MS Excel and MS WordPad. Finishing the activity the file should be converted into ‘csv’ or ‘arff’ format and become appropriate for insertion in a data mining tool.</p> <p>The data mining tool is WEKA application. Within the WEKA application we will continue to preprocess the data and attributes of the dataset with diverse techniques in a way to construct a more effective model for prediction. Finishing the preprocessing section, the model will be regarded ready for starting to actually appending on it predictive algorithms build in the WEKA application.</p> <ul> <p>Amongst those we choose to qualify on, are:</p> <span> <li> “Decision Tables” </li> <li> “M5 Rules”</li> <li>  “J48”</li> <li> “Bayes Net” </li> </span> </ul> <p> Eventually some of the above models will enforce us to attempt making predictions for a class attribute of a new data set. </p> <p>Throughout the entire exploration, the cases will be analyzed extensively through textual and visual mediums of contents. </p>",score:"83",tutor:'<h4><a target="_blank" href="https://linkedin.com/pub/petros-bofakos/a/149/b90">Bofakos, Petros PhD </a></h4> <p>Computer Science Keele University UK </p>',comment:" <span>The student work stands out for clarity. All phases of the assignment (data cleaning, data conversion, pre-processing, classification, forecasting) were performed and described in a remarkably clear and systematic manner. The report structure and presentation is excellent. </span> A minor point: For increased readability of the Table of Contents, please use shorter. Section titles. The  Conclusion summarizes the student’s work. It does not provide a  critical evaluation of the data mining process as experienced by the student during the assignment.",shots:["images/adsa_a1/weka_tool.jpg","images/adsa_a1/j48_weka_classifier.jpg","images/adsa_a1/bayes_net_graph_visualizer_2.jpg","images/adsa_a1/j48_graph_visualizer.jpg","images/adsa_a1/unpruned_m5rules.jpg"]},{domain:"STUDY",id:"ST04",section:"Advanced Database Systems and Applications",category:"Design and Development",title:"Oracle Advanced Database Development",tools:[t.DBAP,t.ORAC],description:" <p>The report undertakes a case scenario where a director of a company has requested to employ a file hosting application for his/her business and has referred to us for developing a database plan that will stand out for the idea. </p> <span> <p>The first section introduces the proposed database design along with descriptive information for the entities that compose it for pulling out and covering the director’s requirements effectively. At the end of the section some complementary entities will be proposed from us to the director for upgrading the project’s operation. </p> <p>The second section induces the actual development of the database using the “Oracle Database Developer”. Creation of tables, application of the essential constraints and loading of plain data for the entities dominates the section. At the end of the section there is the appropriate testing performed, as it was imposed by the director in the message.</p> <p> The third section covers the implementation of specific advanced queries that will be used by the administrator of the database to address and monitor the recorded data.</p> </span>",score:"95",tutor:'<h4><a target="_blank" href="https://linkedin.com/pub/petros-bofakos/a/149/b90">Bofakos, Petros PhD </a></h4> <p>Computer Science Keele University UK </p>',comment:" <span>An excellent piece of work! The student has answered correctly all question items including the complex queries of the last section. His answers are clear, detailed and well-presented in an excellent report. It is quite hard to spot any significant area of improvement to the student’s work. </span>",shots:["images/adsa_a2/entity_file_transfer.jpg","images/adsa_a2/advanced_subqueries_oracle.jpg","images/adsa_a2/bitmap_indexes.jpg","images/adsa_a2/sequences_in_oracle.jpg","images/adsa_a2/advanced_subqueries_oracle2.jpg"]},{domain:"STUDY",id:"ST05",section:"Systems Analysis and Visualizations",category:"Management",title:"Programming Languages Evolution",tools:[t.ANAL,t.RESE],description:"<p>The report provides <span>a brief overview on the evolution of programming languages, referring to some of the most popular achievements, respectably developed from early computing days till current. In order to safeguard the limitations in word count the report examines extensively only 1st, 2nd and 3rd generation languages evolution, and provides a shorter reference on 4th and 5th generation languages. </p> <p>Taking into account the needs and potentials for diverse time eras of history, this evolution is investigated in parallel along with the machineries that programming languages have deployed within.</p> <p>At the closing of the document there is also an forecasting approach made to future developments.</p> </span>",score:"95",tutor:`<h4><a target="_blank" href="https://linkedin.com/pub/michael-hands/30/8ba/61b">Hands, Mike Ph.D</a></h4> <p> Part-Time Ph.D Optoelectronics, King's College London, UK</p>`,comment:" <p>Manos Zalokostas has placed significant effort on this first coursework assignment. His descriptions develop the background of the topic well, although his descriptions in English do not present the topic concisely. However, the message within his descriptions is correct.  </p> <p>The only issue with the content is that it has limited consideration of “What did the developers of the technology do to try and make the transition to it better / simpler?“ which was a question that was presented in the assignment description to be considered as part of the essay task. However, he has brought together concepts with a broader consideration than the main suggested questions, relating the development of computer programming languages to social impact, and that such impact will be greater as the development of programming languages continues towards greater levels of abstraction. </p> <p>He has provided material that shows that he made notes from the references he used, and that these notes were used to help him develop a plan regarding the content of the essay. My review of the references that he used suggests that most of the wording used in the construction of the essay is his own. His references include texts that are not accessible simply through accessing internet sites and are some of the more significant texts covering the topic. </p> <p>My personal discussions with Manos on this topic show that he has benefited from this research exercise and that he is motivated to learn about such interesting topics. <span> I am very satisfied with his performance. His enthusiasm for the topic shows from the quality of his work and my personal discussions with him </span>. </p> <ul><p> My recommendations are: </p> <li> Marks for working notes (out of a possible 30%) : 30% - A thorough set of working notes was provided. </li> <li>Marks for essay (out of a possible 70%) :  65%.</li> </ul>",shots:"images/sav_a1/designers_engineers.jpg"},{domain:"STUDY",id:"ST06",section:"Systems Analysis and Visualizations",category:"Management",title:"Business Plan for Entrepreneur",tools:[t.ANAL,t.RESE,t.REQU],description:"<p>The document examines the case where a current trend e-learning educating system could be designed and published for delivering an enhancement to the knowledge that is provided by official school system, while also how that project could be a feasible solution for an entrepreneur.</p> <ul><p> </p> <span> Among the key things that are examined are <li> Description of the service </li> <li> User requirements and how those should be designed effectively so that they could gradually challenge the objectives that are delivered in the extra tutorial schools </li> <li> Technical requirements that evolve within and around the application</li> <li> Application requirements in diverse phases of the project development</li> <li> Content requirements of the accommodated video formats</li> <li> Instructional design requirements</li> <li> Marketing requirements</li> <li> Total investment and payback period</li> </span> </ul>",score:"90",tutor:`<h4><a target="_blank" href="https://linkedin.com/pub/michael-hands/30/8ba/61b">Hands, Mike Ph.D</a></h4> <p> Part-Time Ph.D Optoelectronics, King's College London, UK</p>`,comment:" <p> Manos Zalokostas provides a well composed product concept development and places it within a significantly well developed business proposal. </p> <p> He has placed significant work to research the technical considerations that affect the market and the market potential in order to quote “real numbers” than use a simpler estimation process, even though the lecturer suggested that simple estimation process for his particular scenario. This led Manos to spend more effort than was really required to complete this assignment, but he admitted that his interest in the topic caused him to get carried away. Since he did this extra work, Manos has exposed himself to wider considerations than this assignment had intended but his lecturer is able to appreciate from his submission and from discussions with him that he has truly learned practical research-quality skills that he will benefit from. </p> <p>He has presented the market niche and product concepts succinctly. </p> <p>  He has considered the requirements for the product and service that he suggests. He has considered the variations of how the service could be provided; leading to an optimum form. His considerations cover the balance between the service variety of e-learning topics, the likely demand and capacity factors that limit the ability to deliver the service. He has that a mix of content delivery would be appropriate, including videos (it is not certain whether this is real-time or downloaded in delivery from his text) and other online material. </p> <p>Manos used “above-average” quality English throughout his report. He has used an appropriate report structure. Significantly, Manos has provided a large body of references that support his technical and business focus. </p> <ul> <li>Lecturer recommendations are: FINAL MARK = 90%</li> <li>Marks for presentation (out of a possible 10) : 0/10</li> <li>Marks for working notes (out of a possible 30) : 30/30 - A thorough set of working notes was provided, running to 32 pages! Significantly, these notes document his progression of thought and questions he is considering about the topics.  </li> <li>Marks for essay (out of a possible 60) :  60/60 -  The information provided in the report is of sufficient depth to believe that the market niche exists and can be serviced by the “optimal form of product” that Manos proposes. Many aspects of the technical considerations are put into context with real-world problems in order to arrive at the considered optimal service form. The length of the report is excessive but reflects the completeness and professional approach to providing in-depth researched information on the topic. </li> </ul> <p><span>This assignment has proved to be a useful learning vehicle for Manos, beyond all expectations and requirements. His enthusiasm for learning is obvious by his general approach to his assignments </span> but Manos should take note of the advice of the lecturer to moderate his enthusiasm, taking into consideration the learning objectives of an assignment and the “required level of effort” to achieve these objectives. </p>",shots:"images/sav_a2/prospect_languages.jpg"},{domain:"STUDY",id:"ST07",section:"Learning and Communications",category:"Management",title:"Cisco and Education",tools:[t.RESE,t.TEAM,t.POWE],description:"<p>The presentation is a research on CISCO company evolvement through time that will eventually spot light on the current position that the company maintains on the education domain and what is its contribution on the specific area. </p> <ul>The examined areas are: <span> <li>The academy’s history</li> <li>The model that the company adopted while entering the education domain</li> <li>The certifications that the company awards students</li> <li>What the academy has accomplished thus far, in count of established academies and enrolled students</li> <li>The company’s insight & engagement for global education </li> </span> </ul>",score:"85",tutor:'<h4><a target="_blank" href="https://linkedin.com/pub/anna-serefeas-koulas/1/490/a15</a></h4> <p>Marketing at Drexel University </p>',comment:"-",shots:["images/lc_a3/initiatives.jpg","images/lc_a3/certificates.jpg","images/lc_a3/charts.jpg","images/lc_a3/21century_school.jpg"]},{domain:"STUDY",id:"ST08",section:"Operating Systems",category:"Design and Development",title:"C Development in Unix-like Operating Systems",tools:[t.DESK,t.CLAN,t.LINU],description:"<p>The report describes <span>the development of a short application on a Unix-Like Operating System that is called by name from the command line window (terminal), followed by two integers. The script should contain capacity to generate a corresponding added result from the integers provided and alert the user with a message.</p> <p>The procedure is requesting to implement facilities traditionally used in a Unix-Like environment such as “gedit” and “emacs”, while for the latter additional utilities like “Makefile” and “Version Control” procedures should be regarded and invoked additionally.</p> <p>In the last section of the assignment a complementary routine joins the system and enforces the user to decide the calculation method that system should use, by providing extra input declaring exactly this method with a character sign. Acknowledged methods are restrained to addition, subtraction, multiplication and division</p> <p>Erroneous inputs will generate informative display messages to the user’s terminal.</p> </span>",score:"80",tutor:'<h4><a target="_blank"  href="https://www.facebook.com/ioannis.pandithas?fref=ts">Pandidas, John Phd</a></h4> <p>PhD, University of Liverpool, UK; </p>',comment:" <span>Excellent work that was written in a very professional manner </span>",shots:["images/os_a1/compile_file_with_emacs.jpg","images/os_a1/compile_file_from_linux_terminal.jpg","images/os_a1/emacs_version_control_facility.jpg","images/os_a1/make_file_graph.jpg","images/os_a1/calculator_running_terminal.jpg"]},{domain:"STUDY",id:"ST11",section:"Database Applications",category:"Design and Development",title:"Database ERD Design",tools:[t.DBAP,t.VISI],description:" <p>The assignment is to develop and illustrate <span>a relational database model for a subcontracting insulation company. Information is provided through the details given by the company’s internal forms and invoices that are generated at distinct phases of its operational process. </p> <p>After studying those internal forms we need to understand the order that the procedures are followed within the company and respond with a valid case scenario that could handle those activities effectively. </p> <p>The semantic model that is used in the database design is empowered by the “crow’s foot” relational model notation, and clarifies the diverse and variable kind relationships that are emerging among the database entities. </p></span> <ul> <p>The report steps as:</p> <li> Description of the case study</li> <li> Importance of the model diagram</li> <li> The rationale of the model and assumptions made</li> <li> Detailed to the entities, attributes and relationships</li> <li> Database Diagram</li> </ul>",score:"75",tutor:'<h4><a target="_blank" href="https://old.nyc.gr/informatics_dept_members">Bofakos, Petros PhD </a></h4> <p>Computer Science Keele University UK</p>',comment:"-",shots:["images/dba_a1/entity_task_described.jpg","images/dba_a1/form_proposal.jpg","images/dba_a1/form_work_assignment.jpg","images/dba_a1/keepwarm_business_model.jpg","images/dba_a1/form_invoice.jpg"]},{domain:"STUDY",id:"ST12",section:"Database Applications",category:"Design and Development",title:"Oracle Database Development",tools:[t.DBAP,t.ORAC],description:" <p>The report describes the <span>development of a collaborative tagging resource system that is planned to be employed on a college’s online platform and that will assist student to append ‘tags’ on resource materials, thus organize and categorize them. The resources will be shared among the students and the academic staff of a College (User authentication and authorization is performed by the build platform and is beyond the scope of this system). </p> <p>The database of the system should keep track of Users, Resources and Tags. A ternary relationship between these 3 entities has been modeled using a bridge relation ‘UserResourceTag’. </p> <p>The database for this activity should be completely designed and hardcoded using the ‘oracle developer’ IDE and provide screenshotss of the process. </p></span> <ul><p>Therefore the report further describes the design and development of:</p> <li> Entities, Attributes, Constraints</li> <li> Modifications to the entities</li> <li> Insertion of data</li> <li> Maintenance of the data</li> <li> Display of selection queries</li> </ul> <p>The second section of the report issues a table with mixed attributes that needs to break down to distinct entities using ‘normalization’ to the 3-rd normal form, and there are diagrams provided that describe the procedure. </p>",score:"86",tutor:'<h4><a target="_blank" href="https://old.nyc.gr/informatics_dept_members">Bofakos, Petros PhD </a></h4> <p>Computer Science Keele University UK</p>',comment:"-",shots:["images/dba_a2/select_group_orderby.jpg","images/dba_a2/miultiple_joins.jpg","images/dba_a2/normalization_2nd_form.jpg","images/dba_a2/the_resource_entity.jpg","images/dba_a2/normalization_to_3rd_form.jpg"]},{domain:"STUDY",id:"ST13",section:"Management and Communication",category:"Management",title:"Reflective Journal",tools:[t.MARK,t.TEAM,t.ACCO],description:" <p>The reflective journal is the diary that we kept updated while working on the course of “Management & Communication” as we became familiar with multiple of business rules and management techniques.  </p> <ul><p>Among others there were processes acknowledged like the following: </p> <span> <li> Business Environment analysis </li> <li>SLEPT/PEST - SWOT Analysis </li> <li> Market Research - Segmentation - Marketing Mix</li> <li> Resource Allocation - Demand Curve - Demand & Supply Curve Rules</li> <li> Accounting - Balance Sheet - PnL (Profit & Loss Statement)</li> <li> Budget - Break Even Point</li> <li>Capital Investment - Payback Period - Interest - Present/Future Value</li> <li>Strategic Management  Process</li> <li>Levels of strategy -Mission - Vision - Objectives</li> </span> </ul>",score:"80",tutor:' <h4><a target="_blank" href="https://linkedin.com/pub/ariadne-beatrice-kapetanaki/39/75b/50b">Ariadne-Beatrice, Kapetenaki PhD </h4> <p>Candidate at Centre for Food Policy</p>',comment:" I would like to see more personal reflections, talking about your challenges and how you have been improved through this process. <span>Very good work </span>though.",shots:["images/mc_rfg/balance_sheet.jpg","images/mc_rfg/demand_and_supply_curves.jpg","images/mc_rfg/net_presennt_vallue.jpg","images/mc_rfg/variable_cost_scale_effect.jpg"]},{domain:"STUDY",id:"ST14",section:"Management and Communication",category:"Management",title:"Business Plan Proposal",tools:[t.BUSI,t.RESE,t.MARK,t.REQU,t.TEAM,t.RISK],description:" <p>The report is a <span>part of a group project activity on a request to constitute a corporation and deliver a business plan for future growth. </p> <p>The domain that we have decided to do business was to provide inland e-learning solutions for the middle-state education of the country. </p></span>",score:"75",tutor:'<h4><a target="_blank" href="https://linkedin.com/pub/ariadne-beatrice-kapetanaki/39/75b/50b">Ariadne-Beatrice, Kapetenaki PhD </h4> <p>Candidate at Centre for Food Policy</p>',comment:"<ul> <li>Introduction and Conclusion of the report:Very good their initiative to include their notes in order to show evidence about their work and effort. </li> <li>Evidence and validity of business strategy:They have a well-designed strategic plan along with specific objectives for the future of the company</li> <li><span>Analysis of Business Environment and SWOT analysis:Very thorough analysis of the business micro and macro environment including SLEPT analysis and Porter's 5 forces. All these were very good interpreted into the SWOT analysis of the company.</li><li>Use of marketing concepts Fantastic analysis of the target audiences (consumers’ audit) and a very thorough marketing mix to support the suggested strategy and business objectives. Also, very good use of pull and push strategies.</span> </ul> <li>Application and validity of accounting and finance analysis:Very precise and quite valid financial plan and a four-year sales forecast create a clear picture of the financial aspects of the company. They have not used best and worst case scenarios. Very well formed profit and loss statement, while for the break-even point analysis there was a debate during the presentation about the existence of variable costs. Nevertheless, the use of two methods of capital investment (payback method and net present value) is a plus. </li> <li>Overall quality of report:The overall structure is very good, but the disadvantage is the lack of an introduction and a conclusion. Also, it is written in good and relatively concise English. </li> </ul> <ul><p> <b>Report’s marks</b></p> <li>5% Introduction and Conclusion 20</li> <li>15% Business Strategy 80</li> <li>15% Analysis of Business Environment 85</li> <li>10% SWOT analysis 85</li> <li>20% Marketing 90</li> <li>15% Accounting 75</li> <li>15% Finance 70</li> <li>5% Quality of report (professional) 75</li> </ul> <ul><p> <b>Presentation’s marks</b></p> <li>5% Introduction 80</li> <li>10% Evidence of strategic planning 75</li> <li>15% Application of business environment analysis 80</li> <li>15% Application of SWOT and marketing 85</li> <li>15% Application of Accounting and Finance Concepts 80</li> <li>15% Reflection on working as a team, team performance and suggestions for improvement 40</li> <li>10% Quality of presentation delivery 50</li> <li>10% Quality of slides 85</li> <li>5% Conclusion and recommendation 60</li> </ul> ",shots:["images/mc_a2/balance_sheet.jpg","images/mc_a2/break_even_analysis.jpg","images/mc_a2/business_structure.jpg","images/mc_a2/performance_grooup_expectations.jpg","images/mc_a2/products_for_group_target.jpg"]},{domain:"STUDY",id:"ST15",section:"Information and Network Security Engineering",category:"Networking",title:"SQL Injection Security",tools:[t.SECU,t.RESE],description:" <p>The report explores one of the most popular and <span>hazardous application security attacks that is closely related to databases and SQL coding implementations; SQL Injection.</p> <p>Initializing the report there is a brief reference on some of the most familiar characteristics of this specific attack followed by the patterns that are used to intervene on applications development code and take control of their function. </p> <p>An enumeration of the accredited best practices that could be recruited as precaution measures to the attack will follow along, accompanied with short but meaningful examples. Embedding those measures - more likely in conjunction - to our applications, will certainly enlist security to defend over an SQL Injection attack. </p> <p>At the end of each security technique described, there is complementary information about the common drawbacks the methodology might experiences as well. </p> </span>",score:"86",tutor:'<h4><a target="_blank"  href="https://facebook.com/ioannis.pandithas?fref=ts">Pandidas, John Phd</a></h4> <p>PhD, University of Liverpool, UK; </p>',comment:" <span>Excellent effort. The subject was covered in well placed examples in a prefessional style with a very good report.  The examples are concise and to the point. </span> Text is well written and the  references  cover the resources needed",shots:["images/inse_a1/blind_sql_injection_regex.jpg","images/inse_a1/blind_sql_injection.jpg","images/inse_a1/prepared_statements.jpg"]},{domain:"STUDY",id:"ST16",section:"Software Engineering and Project Management",category:"Management",title:"Feasibility Study",tools:[t.ACCO,t.RESE,t.RISK,t.REQU,t.BUSI,t.TEAM],description:"<p>The report is a part of <span>group project assignment that its ultimate purpose is to conduct and propose an e-commerce solution to one of its partners. During this initial step we undertake the ‘feasibility study’ phase of the project. </p> <p>The project has been analyzed by the team that has come up with a proper solution for the client. Amongst other, the issues that are examined while conducting the document are: </p> <ul> <span> <li>User roles analysis (extended)</li> <li>Functional requirements analysis</li> <li>Technical requirements analysis</li> <li>Total Cost of Ownership (TCO)</li> <li> Measureable Organization Value (MOV)</li>l <li>Risk Management & Monitoring</li> </span> </ul>",score:"70",tutor:' <h4><a target="_blank" href="https://linkedin.com/pub/vaggelis-nikas/51/a6b/372">Nikas, Evaggelos PhD</a></h4> <p> National Technical University of Athens </p>',comment:"-",shots:"images/sepm_a3/user_role_features.jpg"},{domain:"STUDY",id:"ST17",section:"Software Engineering and Project Management",category:"Management",title:"Project Planning",tools:[t.ANAL,t.PMAN,t.REQU,t.PROJ,t.TEAM],description:" <p>The report is a part of group project assignment that its ultimate purpose is to conduct and propose an e-commerce solution to one of its partners. </p> <p>During this 2nd step we already pass the ‘feasibility study’ phase and now we are moving to ‘project planning’. </p> <p>Project planning is an important skilled part of the project management process, and probably the most time consuming project manager activity, as it is a continuous activity that begins from initial concept all the way to the project deliver. It does not finish until the project completes.</p> <ul> Amongst other, the issues that are examined while conducting the document are: <span> <li>Project Scope</li> <li>Project Objectives</li> <li>Deliverable Definition Table (DDT)</li> <li>Work Breakdown Structure (WBS)</li> <li>Work Packages - Deliverables - Activities</li> <li>Visualize the workload and time needed with MS Project</li> </span> </ul>",score:"86",tutor:' <h4><a target="_blank" href="https://linkedin.com/pub/vaggelis-nikas/51/a6b/372">Nikas, Evaggelos PhD</a></h4> <p> National Technical University of Athens </p>',comment:"-",shots:"images/sepm_a3/portal_navigation.jpg"},{domain:"STUDY",id:"ST18",section:"Software Engineering and Project Management",category:"Management",title:"Project Design",tools:[t.ANAL,t.REQU,t.PMAN,t.TEAM],description:" <p>The report is a part of group project assignment that its ultimate purpose is to conduct and propose and deliver an e-commerce solution to one of our partners. </p> <p>During this 3rd step we are moving to the ‘design’ of the project. Therefore we actually we need to illustrate the function of the e-commerce application that will help us later to implement. </p> <p>Analysis for the user requirements, the functional requirements and the non functional requirements of the project in more depth is the key feature in this phase. Also a more clear view and wider perspective on how the system behaves in certain cases, as those are affected by the diverse user roles interacting with the system.</p> <ul> <span> Amongst other, the issues that are further examined while documenting the design of the project are: <li> Simple and Complex scenarios and how those are handled by the system</li> <li> Use Cases</li> <li> Sequence Diagrams</li> <li> Application requirements with diagrams </li> <li> Functional requirements</li> <li> User requirement (abstract - 9 major issued)</li> <li>Functional/non Functional Requirements Table</li> </span> </ul>",score:"80",tutor:' <h4><a target="_blank" href="https://linkedin.com/pub/vaggelis-nikas/51/a6b/372">Nikas, Evaggelos PhD</a></h4> <p> National Technical University of Athens </p>',comment:"-",shots:["images/sepm_a3/portal_domains.jpg","images/sepm_a3/portal_navigation.jpg","images/sepm_a3/user_role_features.jpg"]},{domain:"STUDY",id:"ST19",section:"Software Engineering and Project Management",category:"Design and Development",title:"Project Implementation / Testing",tools:[t.WEBA,t.JOOM,t.TEST,t.TEAM],description:"<p>The report is a part of group project assignment that its ultimate purpose is to conduct and propose and deliver an e-commerce solution to one of our partners. </p> <p>During this 4TH step we are moving to the actual ‘implementation’ of the project. </p> <p>Therefore during this report we are about to demonstrate the functionality implemented on the web portal. The portal was developed upon making use of “Joomla!” development tool. This phase also includes the ‘testing’ of the product by showcasing how the functionality that has been arranged by stakeholders can now be verified. Additionally, this last report is also a handy guiding manual. Therefore front-end and, back-end users, reading this document can acknowledge of how to make an effective use of the web tool.</p> <p>Streaming procedures are demonstrated within the use of both textual and visual material (screenshotss) and reference the portal’s functionality to readers, confiding that the system incorporates most of current trend services found on the web today.</p> <ul> <span> <p> Amongst other, the functionality described verifies: </p> <li> Core functionality for the domains of: Information, Communication, e-Commerce <li> <li> User communication: Article releases, RSS feeds, Calendar, Newsletters</li> <li> User Registration</li> <li>Products Availability, Search, Shopping Cart</li> <li>Forums, Polls</li> <li>Sitemap</li> <li>Administration extended functionality </li> </span> </ul>",score:"82",tutor:' <h4><a target="_blank" href="https://linkedin.com/pub/vaggelis-nikas/51/a6b/372">Nikas, Evaggelos PhD</a></h4> <p> National Technical University of Athens </p>',comment:"-",shots:["images/sepm_a4/home_page.jpg","images/sepm_a4/product_description.jpg","images/sepm_a4/forum.jpg","images/sepm_a4/administratin_backend.jpg","images/sepm_a4/polls.jpg"]},{domain:"STUDY",id:"ST20",section:"Scheduler development with PHP and MySQL",category:"Design and Development",title:"NYC Scheduler",tools:[t.WEBA,t.MYSQ,t.PHP,t.REQU,t.TEST,t.ANAL,t.PMAN],description:"<p>The system is originally built for providing functionality with regard to the following sections: </p> <ul> <span> <li>1. Designs, Registers and Maintain the annual courses schedule.</li> <li>• Design: Administrators matches Courses-Instructors-Weekdays-Buildings-Classroom etc.</li> <li>• Register: Day Schedule iterated every week based on Arranged Master Schedule and Front-Desk, and other authors, validates or cancels it. Further info can be recorded.</li> <li>• Maintain: Authors may query all sort of information about its properties, scheduled courses, exact times of instructors with time periods, add extra lessons, check system usage, maintain database, add new users etc</li> <li>2. Integrate User Roles (4 - Admin, Exec, Officer, Public) with scaled authority over the system.</li> <li>3. Login Security and Hashed (md5) urls concealing database schema.</li> <li>4. Calculates the exact time of Instructors work with given time spaces (based on officer registrations)</li> <li>5. Back-End System maintains system's operation (Database backup/restore, user/system logs, add/delete/update Users)</li> </span> </ul>",score:"92",tutor:'<h4><a target="_blank"  href="https://linkedin.com/in/gprok">Prokopakis, George MSc</a></h4> <p>US Naval Postgraduate School, CA</p>',comment:'<a target="_blank" href="https://linkedin.com/in/gprok">Prokopakis, George MSc</a> <p> <span>Mano, congratulations for your final assignment.  What you have implemented involves much complexity within it, and it is a rare thing for a tutor to see bachelor degree students build such developments </span>. </p>',shots:["images/sheduler/pic_msch.jpg","images/sheduler/pic_hours.jpg","images/sheduler/pic_restrict.jpg","images/sheduler/pic_backup.jpg"]},{domain:"STUDY",id:"ST21",section:"Mobile Applications",category:"Design and Development",title:"Android Applications Development",tools:[t.WEBA,t.ANDR,t.JAVA,t.OOP,t.MOBI],description:" <p> Online certificate received with distinction by Coursera, covering the fundamental programming principles, software architecture and user experience considerations underlying handheld software applications and their development environments. To bring these concepts alive, the course involved in-depth, hands-on training, implemented in the Android Platform, Amongst others, I gained fundamental understating on the Android development API, delivered strictly supervised on-time assignments on a week basis, and deliver a cover-all final project implementing most of the above: </p> <ul> <span> <li>The Android Platform, The Android Development Environment</li> <li>The Activity Class</li> <li>The Intent Class, Permissions, The Fragment Class</li> <li>User Interface Classes</li> <li>User Notifications, The BroadcastReceiver Class, Threads, AsyncTask & Handlers</li> <li>Networking</li> <li>Graphics & Animation, Multi-touch & Gestures, MultiMedia</li> <li>Sensors, Location & Maps</li> <li>DataManagement, The ContentProvider Class, The Service Class</li> </span> </ul>",score:"-",tutor:"-",comment:"-",shots:["images/android/capture_video.png","images/android/capture_photo.png","images/android/avail_data_preview.png","images/android/filter_data.png"]}],xe=(i=0)=>j[i],$=i=>j.find(a=>a.id===i),z=()=>{let i=j.map(e=>Array.isArray(e.tools)?e.tools:[]);return i=new Set(i.flat()),[...i]},Se=()=>j.map(e=>[e.id,e.title,e.shots?.[0],e.id]),Ye=i=>j.filter(s=>s.tools.includes(i)).map(s=>[s.id,s.title]),Xe=(i="WORK")=>{i=i.toUpperCase();let e=j.filter(o=>o.domain===i),a=e.map(o=>o.section);a=Array.from(new Set(a));let s=[];return a.forEach(o=>{let n=e.reduce((r,p)=>(p.section===o&&r[1].push([p.id,p.title]),r),[o,[]]);s.push(n)}),s},f={STARS:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="m489-460 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104Zm19 260h224q-7 26-24 42t-44 20L228-85q-33 5-59.5-15.5T138-154L85-591q-4-33 16-59t53-30l46-6v80l-36 5 54 437 290-36Zm-148-80q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H360Zm0-80h440v-440H360v440Zm220-220ZM218-164Z"/></svg>`,STAR:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm163 450 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/></svg>`,PREV:({color:i="#aaa"})=>`<svg style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M507-480 384-357l56 57 180-180-180-180-56 57 123 123ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,NEXT:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M507-480 384-357l56 57 180-180-180-180-56 57 123 123ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,PAUS:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,PLAY:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,TOOL:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>`,RESU:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M440-560q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0 160q45 0 84.5-19t68.5-54q-35-23-73.5-35T440-520q-41 0-79.5 12T287-473q29 35 68.5 54t84.5 19Zm384 280L636-308q-41 32-90.5 50T440-240q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 56-18 105.5T692-364l188 188-56 56ZM440-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-240Z"/></svg>`,USER:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>`,PROJ:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/></svg>`,INTRO:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M120-574v-85l181-181h85L120-574Zm0-196v-70h70l-70 70Zm527 67q-10-11-21.5-21.5T602-743l97-97h85L647-703ZM220-361l77-77q7 11 14.5 20t16.5 17q-28 7-56.5 17.5T220-361Zm480-197v-2q0-19-3-37t-9-35l152-152v86L700-558ZM436-776l65-64h85l-64 64q-11-2-21-3t-21-1q-11 0-22 1t-22 3ZM120-375v-85l144-144q-2 11-3 22t-1 22q0 11 1 21t3 20L120-375Zm709 83q-8-12-18.5-23T788-335l52-52v85l-11 10Zm-116-82q-7-3-14-5.5t-14-4.5q-9-3-17.5-6t-17.5-5l190-191v86L713-374Zm-233-26q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480ZM160-120v-71q0-34 17-63t47-44q51-26 115.5-44T480-360q76 0 140.5 18T736-298q30 15 47 44t17 63v71H160Zm81-80h478q-2-9-7-15.5T699-226q-36-18-91.5-36T480-280q-72 0-127.5 18T261-226q-8 4-13 11t-7 15Zm239 0Zm0-360Z"/></svg>`,STUDY:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/></svg>`,WORK:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${i}"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>`,FORO:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}">><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,FORA:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,FORD:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,FORE:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93ZM320-320v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T663-540L443-320H320Zm300-263-37-37 37 37ZM380-380h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>`,FORC:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/></svg>`,FLUP:({color:i="#aaa"})=>` <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"> <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>`,FLDW:({color:i="#aaa"})=>` <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m720-120 160-160-56-56-64 64v-167h-80v167l-64-64-56 56 160 160ZM560 0v-80h320V0H560ZM240-160q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h280l240 240v121h-80v-81H480v-200H240v560h240v80H240Zm0-80v-560 560Z"/></svg>`,LISA:({color:i="#aaa"})=>` <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>`,SCHE:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>`,HIST:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M612-292 440-464v-216h80v184l148 148-56 56Zm-498-25q-13-29-21-60t-11-63h81q3 21 8.5 42t13.5 41l-71 40ZM82-520q3-32 11-63.5t22-60.5l70 40q-8 20-13.5 41t-8.5 43H82Zm165 366q-27-20-50-43.5T154-248l70-40q14 18 29.5 33.5T287-225l-40 71Zm-22-519-71-40q20-27 43-50t50-43l40 71q-17 14-32.5 29.5T225-673ZM440-82q-32-3-63.5-11T316-115l40-70q20 8 41 13.5t43 8.5v81Zm-84-693-40-70q29-14 60.5-22t63.5-11v81q-22 3-43 8.5T356-775ZM520-82v-81q22-3 43-8.5t41-13.5l40 70q-29 14-60.5 22T520-82Zm84-693q-20-8-41-13.5t-43-8.5v-81q32 3 63.5 11t60.5 22l-40 70Zm109 621-40-71q17-14 32.5-29.5T735-287l71 40q-20 27-43 50.5T713-154Zm22-519q-14-17-29.5-32.5T673-735l40-71q27 19 50 42t42 50l-70 41Zm62 153q-3-22-8.5-43T775-604l70-41q13 30 21.5 61.5T878-520h-81Zm48 204-70-40q8-20 13.5-41t8.5-43h81q-3 32-11 63.5T845-316Z"/></svg>`,DELX:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`,DELA:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>`,LISH:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m500-120-56-56 142-142-142-142 56-56 142 142 142-142 56 56-142 142 142 142-56 56-142-142-142 142Zm-220 0v-80h80v80h-80Zm-80-640h-80q0-33 23.5-56.5T200-840v80Zm80 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80q33 0 56.5 23.5T840-760h-80ZM200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm640 0v-80h80v80h-80Z"/></svg> `,MENU:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m280-400 200-200 200 200H280Z"/></svg> `,MEND:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M480-360 280-560h400L480-360Z"/></svg> `,UNIT:({color:i="#aaa"})=>` <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M480-480q0-91 64.5-155.5T700-700q91 0 155.5 64.5T920-480H480ZM260-260q-91 0-155.5-64.5T40-480h440q0 91-64.5 155.5T260-260Zm220-220q-91 0-155.5-64.5T260-700q0-91 64.5-155.5T480-920v440Zm0 440v-440q91 0 155.5 64.5T700-260q0 91-64.5 155.5T480-40Z"/></svg> `,SERV:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z"/></svg>`,SERC:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>`,PARA:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -1000 960 960"  fill="${i}"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>`,LOAD:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M314-115q-104-48-169-145T80-479q0-26 2.5-51t8.5-49l-46 27-40-69 191-110 110 190-70 40-54-94q-11 27-16.5 56t-5.5 60q0 97 53 176.5T354-185l-40 70Zm306-485v-80h109q-46-57-111-88.5T480-800q-55 0-104 17t-90 48l-40-70q50-35 109-55t125-20q79 0 151 29.5T760-765v-55h80v220H620ZM594 0 403-110l110-190 69 40-57 98q118-17 196.5-107T800-480q0-11-.5-20.5T797-520h81q1 10 1.5 19.5t.5 20.5q0 135-80.5 241.5T590-95l44 26-40 69Z"/></svg>`,INST:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m177-120-57-57 184-183H200v-80h240v240h-80v-104L177-120Zm343-400v-240h80v104l183-184 57 57-184 183h104v80H520Z"/></svg>`,HOME:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="${i}"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>`,FREO:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M440-80v-166L310-118l-56-56 186-186v-80h-80L174-254l-56-56 128-130H80v-80h166L118-650l56-56 186 186h80v-80L254-786l56-56 130 128v-166h80v166l130-128 56 56-186 186v80h80l186-186 56 56-128 130h166v80H714l128 130-56 56-186-186h-80v80l186 186-56 56-130-128v166h-80Z"/></svg>`,DAMA:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>`,ADD:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`,SELA:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m508-398 226-226-56-58-170 170-86-84-56 56 142 142ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>`,SELO:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,SELN:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,OVER:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M340-540H200q-33 0-56.5-23.5T120-620v-140q0-33 23.5-56.5T200-840h140q33 0 56.5 23.5T420-760v140q0 33-23.5 56.5T340-540Zm-140-80h140v-140H200v140Zm140 500H200q-33 0-56.5-23.5T120-200v-140q0-33 23.5-56.5T200-420h140q33 0 56.5 23.5T420-340v140q0 33-23.5 56.5T340-120Zm-140-80h140v-140H200v140Zm560-340H620q-33 0-56.5-23.5T540-620v-140q0-33 23.5-56.5T620-840h140q33 0 56.5 23.5T840-760v140q0 33-23.5 56.5T760-540Zm-140-80h140v-140H620v140Zm140 500H620q-33 0-56.5-23.5T540-200v-140q0-33 23.5-56.5T620-420h140q33 0 56.5 23.5T840-340v140q0 33-23.5 56.5T760-120Zm-140-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z"/></svg>`,FILO:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/></svg>`,FILN:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="m592-481-57-57 143-182H353l-80-80h487q25 0 36 22t-4 42L592-481ZM791-56 560-287v87q0 17-11.5 28.5T520-160h-80q-17 0-28.5-11.5T400-200v-247L56-791l56-57 736 736-57 56ZM535-538Z"/></svg>`,QRCO:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960"  fill="${i}"><path d="M120-520v-320h320v320H120Zm80-80h160v-160H200v160Zm-80 480v-320h320v320H120Zm80-80h160v-160H200v160Zm320-320v-320h320v320H520Zm80-80h160v-160H600v160Zm160 480v-80h80v80h-80ZM520-360v-80h80v80h-80Zm80 80v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm80 80v-80h80v80h-80Zm80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80 80v-80h80v80h-80Z"/></svg>`,BACK:({color:i="#aaa"})=>`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-200 -960 960 960"  fill="${i}"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>`},T=u`

    :host {
        --font: sans-serif;

        --color-tool: orange;
        --color-work: tomato;
        --color-study: mediumseagreen;
        --color-generic: lightskyblue;
        --color-default: #888;
        --color-top: white;

        //color: steelblue;

    }

    .work {
        color: var(--color-work);
        //background-color: rgba(100, 90, 90);
    }

    .study {
        color: var(--color-study);
        //background-color: rgba(90, 100, 90);
    }

    .tool {
        color: var(--color-tool);
        //background-color: rgba(90, 90, 100);
    }

    .generic {
        color: var(--color-generic);
        //background-color: rgba(90, 90, 100);
    }

    
    button,
    fieldset{
        position: relative;
        display: inline-flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: var(--color-default);
        font-size: 16px;
        font-weight: bold;
        outline: none;
        border-radius: 4px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 4px 16px;

        span {
            display: block;
            width: 20px;
            border-radius: 30px;
            line-height: 0;
        }

        &:hover {
            //border-color: inherit;
        }
        
        &:active {
            background-color: #eee;
        }

        &.active {
            border: 1px solid var(--color-default);
        }

        &.work {
            //color: white;
            border-color: var(--color-work);

            &.active {
                color: var(--color-work);
                //background-color: var(--color-work);
            }
        }

        &.study {
            //color: white;
            border-color: var(--color-study);

            &.active {
                color: var(--color-study);
                //background-color: var(--color-study);
            }
        }

        &.tool {
            //color: white;
            border-color: var(--color-tool);

            &.active {
                color: var(--color-tool);
                //background-color: var(--color-tool);
            }
        }

        &.generic {
            //color: white;
            border-color: var(--color-generic);

            &.active {
                color: var(--color-generic);
                //background-color: var(--color-tool);
            }
        }

        &.top {
            //color: white;
            border-color: var(--color-top);

            &.active {
                color: var(--color-top);
                //background-color: var(--color-tool);
            }
        }

    }

    .pill {
        color: white;
        font-size: 14px;
        padding: 4px 8px;
        margin: 0 10px;
        border-radius: 10px;
        background-color: var(--color-default);

        &.work {
            background-color: var(--color-work);
        }

        &.study {
            background-color: var(--color-study);
        }

        &.tool {
            background-color: var(--color-tool);
        }
    }
`;customElements.define("content-detail",class extends h{static properties={active:{type:Number},asset:{type:Object}};constructor(){super(),this.active=1,this.asset=$("WK13")}action(e){this.active=e}render=()=>l`

            <header>

                <button class="active" 
                        @click="${()=>this.dispatchEvent(new CustomEvent(w.CONTENT_TRANSIT,{detail:{transit:!1},composed:!0,bubbles:!0}))}">
                    <strong>back</strong>
                    <span class="buttonico">
                        ${b(f.BACK({color:"#ccc"}))}
                    </span>
                </button>

                <h3> 
                    ${this.asset.title} 
                    <sup class="pill ${this.asset.domain.toLocaleLowerCase()}">${this.asset.domain}</sup> 
                </h3>


                <project-tool .entries="${this.asset.tools}"></project-tool>

            </header>

            <main>

                <div>
                    ${b(this.asset.description)}
                </div>

                <image-slider .asset="${this.asset}"></image-slider>

            </main>

            <footer>

                <badge-tool .entries="${this.asset.tools}"></badge-tool>

            </footer>

        `;static styles=[T,u`

                header {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    font-family: var(--font);
                    width: 100%;
                    max-height: 175px;

                    h3 {
                        font-size: 2em;
                        color: orange;
                    }
                }

                main {
                    position: relative;
                    z-index: 5;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 50px;
                    font-family: Verdana, Geneva, sans-serif;
                    text-align: left;
                    line-height: 2;
                    padding: 25px;
                    height: calc(100vh - 300px);
                    overflow: auto;
                    
                    > * {
                        flex-basis: 50%;
                    }
                }

                footer {
                    background: dodgerblue;
                }
            `]});const et=[f.WORK,f.STUDY,f.TOOL];customElements.define("content-menu",class extends h{static properties={active:{type:Number,default:S.WORK},activeTool:{type:String,default:null}};constructor(){super(),this.active=S.WORK}changeDomain(e){this.active!==e&&(this.activeTool="",this.active=e,this.dispatchEvent(new CustomEvent(w.DOMAIN_CHANGE,{detail:{domain:e},composed:!0,bubbles:!0})))}render=()=>l`
            <nav>
                ${Object.values(S).map((e,a)=>l`
                    <button class="mi-button ${e.toLowerCase()} ${this.active===e?"active":""} "
                            @click="${()=>this.changeDomain(e)}">
                        ${e===S.TOOL&&this.activeTool&&l`
                                    <aside>
                                        <img src="/images/tech_logos/${this.activeTool}.jpg" alt="tech logo">
                                        <small>${this.activeTool.replaceAll("_"," ")}</small>
                                    </aside>`||""}
                        <strong>${e}</strong>
                        <span class="buttonico">
                            ${b(et[a]({color:"#ccc"}))}
                        </span>
                    </button>
                `)}
            </nav>
        `;static styles=[T,u`
                nav {
                    text-align: center;

                    button {
                        position: relative;

                        aside {
                            display: flex;
                            align-items: center;
                            padding: 0 10px;
                            border-radius: 30px;
                            border: none;

                            img {
                                padding: 2px;
                                width: 20px;
                                height: 20px;
                                margin: 0 5px;
                                background-color: white;
                            }

                            small {
                                color: var(--color-tool)
                            }
                        }
                    }
                }
            `]});customElements.define("content-tablet",class extends h{static properties={tool:{type:String},domain:{type:String,default:S.WORK},assets:{type:Array}};#e="";constructor(){super(),this.assets=z(),this.#e=this._viewTool()}updated(e,a,s){if(super.updated(e),e.has("domain")){if(this.domain===S.TOOL){this.assets=z(),this.#e=this._viewTool();return}this.assets=this._packProjects(Xe(this.domain)),this.#e=this._viewProject()}e.has("tool")&&(this.assets=this._packProjects([[this.tool,Ye(this.tool)]]),this.#e=this._viewProject())}_packProjects(e){return e.map(a=>a[1]).flat().map(([a])=>$(a))}chooseTool(e){this.tool=e.target.id,this.dispatchEvent(new CustomEvent(w.TOOL_CHANGE,{detail:{tool:e.target.id},bubbles:!0,composed:!0}))}chooseProject(e){e.preventDefault(),this.dispatchEvent(new CustomEvent(w.CONTENT_TRANSIT,{detail:{transit:!0,entryId:e.target.id},bubbles:!0}))}_viewProject=()=>l`
            <nav class="mi-tablet"
                 style="background-image: url('images/tech_logos/${this.tool}.jpg')">
                ${this.assets.map(e=>l`
                    <a href="#" id="${e.id}" class="${e.domain.toLowerCase()}"
                       style="background-image: url('${e.shots[0]}')"
                       @click="${this.chooseProject}">
                        <small>${e.category}</small>
                        <strong class="${e.domain.toLowerCase()}">${e.title}
                            <small class="pill ${e.domain.toLowerCase()}">${e.id}</small>
                        </strong>
                        <p>
                            <span>${e.description.substring(0,200)}<em>&nbsp&nbsp;...more</em></span>
                        </p>
                    </a>
                `)}

            </nav>
        `;_viewTool=()=>l`
            <nav class="mi-tablet">
                ${this.assets.map(e=>e&&l`
                                    <a id="${e}" class="tool mi-tool"
                                       style="background-image: url('images/tech_logos/${e}.jpg')"
                                       @click="${this.chooseTool}">
                                        <h4>${e.replaceAll("_"," ").toUpperCase()}</h4>
                                        <span>
                                            <img src="/images/tech_logos/${e}.jpg" alt="${e}"/>
                                        </span>
                                    </a>
                                `||"")}
            </nav>
        `;render=()=>this.#e;static styles=[T,u`
                nav {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 10px;
                    position: relative;
                    z-index: 5;
                    font-family: Tahoma, Geneva, sans-serif;
                    height: 90vh;
                    overflow: auto;
                    background-blend-mode: multiply;
                    background-position: 50%;
                    background-color: rgba(0, 0, 0, .9);
                    background-size: 600px;
                    padding: 50px 10px;


                    a {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        position: relative;
                        color: white;
                        text-decoration: none;
                        padding: 10px;
                        margin: 10px;
                        width: 250px;
                        height: 400px;
                        overflow: hidden;
                        background-color: #444;
                        background-blend-mode: multiply;
                        background-repeat: no-repeat;
                        background-position: 150px;
                        //border: 4px solid #222;
                        border: 4px solid #aaa;

                        &:hover {
                            border-color: inherit;
                        }

                        * {
                            pointer-events: none;
                        }

                        &.mi-tool {
                            justify-content: flex-start;
                            font-size: 18px;
                            height: 175px;
                            background-size: 100%;

                            span {
                                position: absolute;
                                left: 5px;
                                bottom: 5px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 100px;
                                height: 100px;
                                background-color: white;

                                img {
                                    max-width: 64px;
                                    max-height: 64px;
                                    padding: 4px 8px;
                                    border-radius: 4px;
                                    pointer-events: none;

                                }
                            }
                        }

                        p {
                            color: white;
                        }

                        strong {
                            font-size: 24px;
                            width: 50%;
                        }

                        small {
                            color: goldenrod;
                            width: 50%;
                        }


                        &:hover {
                            img {
                                left: 40%;
                            }

                        }

                    }
                }

            `]});const tt=[["RESUME",E.LAND,f.INTRO],["HIGHLIGHT",E.WORK,f.STARS]];customElements.define("global-menu",class extends h{static properties={activeElem:{type:String}};constructor(){super(),this.activeElem=E.LAND}action(e){this.activeElem=e}render=()=>l`
            <nav>
                <div>
                    ${tt.map(([e,a,s],o)=>l`
                        <button title="${e}"
                                class="top ${this.activeElem===a?"active":""}"
                                @click="${n=>{this.action(a),this.dispatchEvent(new CustomEvent(w.PAGE_TRANSIT,{detail:{code:a},bubbles:!0,composed:!0}))}}">
                            <strong>${e}</strong>
                            <span class="buttonico">
                                ${b(s({color:"#ccc"}))}
                            </span>
                        </button>
                    `)}
                </div>
            </nav>
        `;static styles=[T,u`
                nav {
                    display: flex;
                    justify-content: space-between;
                }
            `]});const ue={work:Se(),tools:z(),list:["work","skill"]};customElements.define("global-search",class extends h{static properties={active:{type:String},visible:{type:Boolean,default:!1}};constructor(){super(),this.active=""}search(e){this.active=e.target.value.toLowerCase()}chooseProject(e){e.preventDefault(),this.visible=!1,this.dispatchEvent(new CustomEvent(w.PROJECT_SELECT,{detail:{id:e.target.dataset.key},composed:!0,bubbles:!0}))}chooseTool(e){e.preventDefault(),this.visible=!1,this.dispatchEvent(new CustomEvent(w.TOOL_SELECT,{detail:{tool:e.target.dataset.key},bubbles:!0,composed:!0}))}_rslvType(e){return e.startsWith("WK")?"work":e.startsWith("ST")?"study":"tool"}render=()=>l`
            <section class="${this.visible?"active":""}"
                     @click="${()=>this.visible=!1}">


                <fieldset class="top active">
                    <span class="buttonico">
                        ${b(f.SERC({color:"#ccc"}))}
                    </span>
                    <input type="text" placeholder="project or tool"
                           @click="${e=>e.stopPropagation()}"
                           @input="${this.search}"
                           @focus="${e=>{this.visible=!0}}">
                </fieldset>

                <nav>
                    ${ue.work.filter(([e,a,s])=>!this.active||a.toLowerCase().includes(this.active)).map(([e,a,s,o])=>l`
                                <a data-key="${e}" data-type="work"
                                   @click="${this.chooseProject}">
                                    <em>${a}<sup class="pill ${this._rslvType(o)}">${o}</sup> </em>
                                    <img src="${s}" alt="logo ${a}"/>
                                </a>
                            `)}
                    ${ue.tools.filter(e=>!this.active||e.toLowerCase().includes(this.active)).map(e=>l`
                                <a data-key="${e}" data-type="tool"
                                   @click="${this.chooseTool}">
                                    <em>${e.replaceAll("_"," ")}<sup class="pill tool">tool</sup> </em>
                                    <img src="images/tech_logos/${e}.jpg" alt="logo ${e}"/>
                                </a>
                            `)}
                </nav>

            </section>
        `;static styles=[T,u`

                section {
                    position: absolute;
                    z-index: 20;
                    right: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    font-family: var(--font);


                    input {
                        text-align: right;
                        border: none;
                        outline: none;
                        padding: 5px;
                        background-color: transparent;
                    }


                    nav {
                        display: none;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        align-items: flex-start;
                        padding: 10px 5px 0;
                        max-height: 90vh;
                        overflow: auto;


                        a {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 20px;
                            position: relative;
                            margin: 10px;
                            padding: 15px;
                            border-radius: 4px;
                            border-bottom: 1px solid #ddd;
                            width: 250px;
                            background: white;

                            &:hover {
                                text-decoration: underline;
                            }

                            * {
                                pointer-events: none;
                            }


                            em {
                                //text-transform: uppercase;
                                font-style: normal;
                                color: #555;

                                sup {
                                    position: absolute;
                                    top: 5px;
                                    left: 0;
                                    font-size: xx-small !important;
                                }
                            }

                            img {
                                width: 75px;
                                height: 75px;
                            }
                        }
                    }

                    &.active {
                        background-color: rgba(0, 0, 0, 0.6);

                        input {
                            background-color: transparent;
                            color: white;
                        }

                        nav {
                            display: flex;
                        }
                    }
                }
            `]});customElements.define("image-slider",class extends h{static properties={asset:{type:Object},active:{type:String}};constructor(){super(),this.active=""}showcase(e){if(this.active)return this.active="";this.active=e.target.src}showcaseOrder(e="next",a){const s=this.asset.shots;let o=s.findIndex(r=>r===this.active),n=e==="next"?s[o+1]||s[0]:s[o-1]||s[s.length-1];this.active=n}render=()=>l`
            <section>
                <div class="placeholder ${this.active?"active":""}">
                    
                    <nav>
                        <button @click="${e=>this.showcaseOrder("prev",e)}">
                            <strong>prev</strong>
                            <span class="buttonico">
                                ${b(f.PREV({color:"#ccc"}))}
                            </span>
                        </button>
                        <button @click="${e=>this.showcaseOrder("next",e)}">
                            <strong>next</strong>
                            <span class="buttonico">
                                ${b(f.NEXT({color:"#ccc"}))}
                            </span>
                        </button>
                    </nav>

                    <img alt="image preview" src=${this.active}
                         @click="${this.showcase}"/>
                </div>
                ${this.asset.shots.map(e=>l`
                                    <img src=${e} alt="${e}" class=${this.active.endsWith(e)?"active":""}
                                         @click="${this.showcase}"/>
                                `)}
            </section>
        `;static styles=[T,u`

                section {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;

                    .placeholder {
                        position: fixed;
                        //z-index: 150;
                        right: 0;
                        top: 0;
                        display: none;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 50px;
                        padding: 25px;
                        width: 100vw;
                        height: 100vh;
                        background: rgba(0, 0, 0, .8);

                        &.active {
                            display: flex;
                        }

                        img {
                            width: initial;
                            height: initial;
                            max-height: 75vh;
                        }
                    }

                    img {
                        width: 325px;
                        height: 200px;
                        margin: 15px;
                        background: white;
                        padding: 10px;
                        border: 1px solid #eee;
                        transition: all .5s;
                    }
                }`]});const it=[["WELCOME",C.LAND.INTRO,f.USER],["TIMELINE",C.LAND.RESU,f.RESU]];customElements.define("intro-menu",class extends h{static properties={active:{type:Number}};constructor(){super(),this.active=1}action(e){this.active=e}render=()=>l`
            <nav>
                ${it.map(([e,a,s],o)=>l`
                            <button
                                    class=" generic ${this.active===o+1?"active":""}"
                                    @click="${()=>{this.action(o+1),this.dispatchEvent(new CustomEvent(w.INTRO_TRANSIT,{detail:{code:a},bubbles:!0}))}}">
                                <strong>${e}</strong>
                                <span class="buttonico">
                                    ${b(s({color:"#ccc"}))}
                                </span>
                            </button>
                        `)}
            </nav>
        `;static styles=[T,u`
                nav {
                    text-align: center;
                }
            `]});const ge={auto:[["project","work",y.WORK,f.WORK],["tool","tool",y.TOOL,f.TOOL]],manual:[["pause",y.PAUS,f.PAUS],["prev",y.PREV,f.PREV],["next",y.NEXT,f.NEXT]]};customElements.define("joi-monitor",class extends h{static properties={activeContent:{type:String},activePause:{type:Boolean,default:!1}};constructor(){super(),this.activeContent=y.WORK}loopContent(e){this.activeContent=e}controContent(e){const a=this.activeContent===y.WORK?this.shadowRoot.querySelector("monitor-view-project"):this.shadowRoot.querySelector("monitor-view-tool");if(y.PREV===e)return a.prev();if(y.NEXT===e)return a.next();a.pause(),this.activePause=!this.activePause}forceConent(e){this.activeContent=y.WORK;const a=this.shadowRoot.querySelector("monitor-view-project");a.pause(),a.project=$(e)}render=()=>l`
            <article>

                <header>
                    <div class="mbuttons">
                        ${ge.auto.map(([e,a,s,o])=>l`
                                    <button title="${e}"
                                            class="${s.toLowerCase()} ${this.activeContent===s?"active":""}"
                                            @click="${()=>this.loopContent(s)}">
                                        <strong>${a}</strong>
                                        <span class="buttonico">
                                            ${b(o({color:"white"}))}
                                        </span>
                                    </button>
                                `)}
                    </div>

                    <div class="mcontrols">
                        ${ge.manual.map(([e,a,s])=>l`
                                    <button title="${e}"
                                            class="${a===y.PAUS&&this.activePause?"active":""}"
                                            @click="${()=>this.controContent(a)}">
                                        ${e}
                                        <span class="buttonico">
                                            ${b(s({color:"#999"}))}
                                        </span>
                                    </button>
                                `)}
                    </div>
                </header>

                <section>
                    <nav>
                        <a id="mi-monitor-view">
                            ${y.WORK===this.activeContent&&l`
                                        <monitor-view-project></monitor-view-project>
                                    `||y.TOOL===this.activeContent&&l`
                                        <monitor-view-tool></monitor-view-tool>
                                    `||""}
                        </a>
                    </nav>
                </section>

            </article>
        `;static styles=[T,u`
                article {
                    position: relative;
                    overflow: hidden;
                    font-family: var(--font);
                    border: 1px solid #999;
                    //font-size: large;
                    //border-bottom: 4px solid black;
                    padding: 15px 5px 5px;
                    margin: auto;
                    height: 400px;
                    width: 96vw;
                    //background-color: #444;
                    cursor: pointer;

                    header {
                        position: relative;
                        z-index: 10;
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        background: linear-gradient(270deg, white, transparent)
                    }
                }
            `]});const I=Se();customElements.define("monitor-view-project",class extends h{static properties={active:{type:Number},project:{type:Object,state:!0},activeIndex:{type:Number,state:!0},timer:{type:Object,state:!0}};constructor(){super(),this.active=1,this.activeIndex=0,this.project=null}loop(){this.timer=setInterval(()=>{const e=I[this.activeIndex][0];this.project=$(e),this.project||(this.activeIndex=0),this.activeIndex++},5e3)}pause(){clearInterval(this.timer),this.activeIndex--}next(){this.activeIndex++,this.activeIndex>I.length-1&&(this.activeIndex=0),this.project=$(I[this.activeIndex][0])}prev(){this.activeIndex--,this.activeIndex<0&&(this.activeIndex=I.length-1),this.project=$(I[this.activeIndex][0])}clear(){clearInterval(this.timer),this.project=null}action(e){this.active=e}chooseProject(e){e.preventDefault(),this.dispatchEvent(new CustomEvent(w.PROJECT_SELECT,{detail:{id:e.target.id},composed:!0,bubbles:!0}))}connectedCallback(){super.connectedCallback(),this.loop()}disconnectedCallback(){super.disconnectedCallback(),this.clear()}render=()=>{if(!this.project)return"";const{id:e,title:a,section:s,description:o,shots:n,tools:r,domain:p}=this.project;return Array.isArray(r)&&(r.length=15),l`
                <a href="#" id="${e}"
                   @click="${this.chooseProject}">
                    <article id="project" class="mitem">
                        <h2>${a}</h2>
                        <h4>${s}<sup class="pill ${p.toLowerCase()}">${p}</sup></h4>
                        <p> ${b(o)}</p>
                        <img src="${n[0]}" alt="${n[0]}"/>
                    </article>
                    <aside>
                        ${Array.isArray(r)?r.map(c=>l`
                                            <a href="${c}">
                                                <img src="images/tech_logos/${c}.jpg" alt="${c}"/>
                                            </a>
                                        `):""}
                    </aside>
                </a>
            `};static styles=[T,u`
                a {
                    text-decoration: none;

                    * {
                        pointer-events: none;
                    }

                    article {
                        max-width: 75%;

                        img {
                            position: absolute;
                            opacity: 0.3;
                            top: 0;
                            right: 0;
                            width: 50%;
                            padding: 15px;
                        }

                        h2 {
                            text-align: left;
                            text-transform: uppercase;
                            margin-left: 15px;
                            color: tomato;
                        }

                        h4 {
                            text-align: left;
                            margin-left: 15px;
                            color: goldenrod;

                        }

                        p {
                            color: white;
                            text-align: left;
                            max-height: 175px;
                            overflow: hidden;
                            padding: 0 10px 10px 25px;
                            margin: 0;
                        }

                    }

                    aside {
                        position: absolute;
                        bottom: 0;
                        right: 25px;
                        display: flex;
                        justify-content: flex-end;
                        gap: 5px;
                        width: 100%;

                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 4px 6px;
                            background-color: white;
                            width: 56px;
                            border-radius: 4px;

                            img {
                                max-height: 48px;
                                max-width: 48px;
                            }

                        }
                    }
                }
            `]});customElements.define("monitor-view-reference",class extends h{static properties={active:{type:Number},reference:{type:Object}};constructor(){super(),this.active=1,this.reference=xe(10)}action(e){}render=()=>{const{tutor:e,commentContent:a}=this.reference;return l`
                <div id="reference" class="mitem">
                    <h2>References</h2>
                    <h3>${e}</h3>
                    <p>${a}</p>
                    <img/>
                </div>
            `}});const J=z();customElements.define("monitor-view-tool",class extends h{static properties={active:{type:Number},tools:{type:Array},activeIndex:{type:Number,state:!0},timer:{type:Object,state:!0}};#e=12;constructor(){super(),this.active=1,this.activeIndex=0,this.tools=null,this.slice=null}display(){const e=this.activeIndex*this.#e,a=e+this.#e;this.tools=J.slice(e,a)}loop(){this.timer=setInterval(()=>{this.display(),this.activeIndex++,this.tools.length||(this.activeIndex=0)},5e3)}pause(){clearInterval(this.timer)}next(){this.pause(),this.activeIndex++,console.log(this.activeIndex,"<<<<<<<<<<<** "),this.activeIndex*this.#e>J.length-1&&(this.activeIndex=0),this.display()}prev(){this.pause(),this.activeIndex--,this.activeIndex<0&&(this.activeIndex=J.length/this.#e-1),this.display()}clear(){clearInterval(this.timer),this.tools=null}connectedCallback(){super.connectedCallback(),this.loop()}disconnectedCallback(){super.disconnectedCallback(),this.clear()}chooseTool(e){e.preventDefault(),this.dispatchEvent(new CustomEvent(w.TOOL_SELECT,{detail:{tool:e.target.id},composed:!0,bubbles:!0}))}render=()=>this.tools?l`
                <div id="view-tool">
                    ${this.tools.map(e=>l`
                                <a id="${e}"
                                   @click="${this.chooseTool}">
                                    <h4>${e.replaceAll("_"," ").toUpperCase()}</h4>
                                    <span>
                                        <img src="/images/tech_logos/${e}.jpg" alt="${e}"/>
                                    </span>
                                </a>
                            `)}
                </div>
            `:"";static styles=[T,u`
                #view-tool {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 30px 15px 15px;

                    a {
                        display: flex;
                        justify-content: space-between;
                        font-size: large;
                        font-family: var(--font);
                        color: var(--color-tool);
                        padding: 6px;
                        border-bottom: 1px solid #777;
                        width: 20%;

                        &:hover {
                            text-decoration: underline;
                        }
                        
                        * {
                            pointer-events: none;
                        }

                        span {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 80px;
                            height: 80px;
                            padding: 4px 8px;
                            border-radius: 8px;
                            border: 2px solid #ddd;
                            background-color: white;

                            img {
                                max-width: 72px;
                                max-height: 72px;
                                pointer-events: none;
                                border-radius: 4px;
                            }
                        }

                    }
                }
            `]});customElements.define("project-tool",class extends h{static properties={active:{type:String},entries:{type:Array}};constructor(){super(),this.active="git",this.entries=xe(5).tools}changeTool(e="git"){this.active=e,this.dispatchEvent(new CustomEvent(w.TOOL_CHANGE,{detail:{tool:e},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(w.CONTENT_TRANSIT,{detail:{transit:!1},composed:!0,bubbles:!0}))}render=()=>{const e="images/tech_logos",{entries:a}=this;return l`
                <nav >
                    ${Array.isArray(a)?a.map(s=>l`
                                        <a href="${s}"
                                           @click="${o=>{o.preventDefault(),this.changeTool(s)}}">

                                            <img src="${e}/${s}.jpg" alt="${s}"/>
                                        </a>
                                    `):""}
                </nav>
            `};static styles=u`
            nav {
                display: flex;
                justify-content: flex-end;
                gap: 2px;

                a {
                    border-radius: 2px;
                    background-color: white;
                    padding: 2px 4px;
                    height: 32px;
                    width: 32px;

                    img {
                        width: 98%;
                        height: 98%;
                    }
                }
            }
        `});customElements.define("quote-intro",class extends h{static properties={active:{type:Number}};constructor(){super(),this.active=1}action(e){this.active=e}render=()=>l`
            <article>

                <section>
                    <h2>Welcome</h2>
                    <p>
                        <span>My name is Manos.</span>
                        For the last two and a half decades I have been occupied by several organizations in diverse
                        business perspectives that each played their parts in shaping my profile.
                        The last and a half decade I have been explicitly working on my competencies building web
                        applications and environments. Major business models that I have delved and acquired experience
                        include Energy, Hospitality, Warehouse, eShopping, Conferences, Banking.
                        The other half of my occupational experience comes by working for a top-competent, world-wide
                        extended pharmaceutical company, SanofiAventis, that saturated my profile with highly strict and
                        demanding business procedures that helped me transform my overall occupational qualities.
                        Educational research offered me "first class Honours" Bachelor Degree from Greenwich university
                        in 'Internet Engineering and Web Management.
                        Additionally I maintain insights and diplomas / certificates in fields like 'Web and Desktop
                        Applications Development','Business Management and Marketing', 'Graphics Design' after attending
                        and training for several annual classes in the fields.
                    </p>
                </section>

                <section>
                    <h3>What is the site about</h3>
                    <p>
                        On site you may resume both of my occupational and educational timelines, how the two were drawn
                        and evolve in parellel during previous years. Context may be indexed in detail, either as
                        bulleted descriptions or guided by an interactive timeline. Along with the descriptive context
                        you may also have an overview on some of the most critical projects that I have encountered.
                        Therefore you may find available work-samples while working as a freelance developer on the Web,
                        as officer occupied by pharmaceutical company, and last but not least as student at university.
                        For the latter you may additionally index the scores attained, instructors’ comments, while also
                        documentation and video reference whenever appropriate. Finally on the last page there are
                        available links to the officials sites for each cited organization. You are suggested to request
                        for reference where available. If you wish you may contact me using any of my personal accounts
                        provided for some of the most popular social networks. Please suggest the context if you feel
                        like.
                    </p>
                </section>

            </article>
        `;static styles=[T,u`
                article {
                    padding: 10px 25px;
                    font-size: 1.2em;
                    font-family: var(--font);

                    section {
                        text-align: left;
                        //margin: 50px 0;
                    }
                }
            `]});const at=[[" 2025 ",' Contracted by ICCS as standalone Full stack Developer to design and develop "R2D2" environmental events repository app and infrastructure with Sveltekit / Mysql / Docker '," Deliverable was a part of multi European endevour that roots and founded by greater movement “Horizon 2020",["WK23"]],[" 2024 ",' Contracted by contractor in the field of "Facilities Climate" installations as standalone Full Stack Developer to design and develop "Electro" equipment management / maintenance solution w/  / Sveltekit in the Google Cloud, '," ....",["WK25"]],[" 2024 ",' Contracted by ICCS as standalone Full stack Developer to design and develop "Synergies" 2 energy apps and infrastructure with Sveltekit / Nest.js / Mysql / Docker ',' Deliverable was a part of multi European big-data project ‘Synergies” that comes as a continuity of v.1 "Synergy" project  that roots and founded by greater movement “Horizon 2020”. Project customers are major national energy suppliers across Europe ',["WK22"]],[" 2023 ",' Contracted by ICCS as standalone Full Stack Developer to design and develop "EcoEMS" consisting of 2 energy apps with Sveltekit.js / Nest.js / Sql Server / Docker, '," The project was a part of European - Indian endeavor “Re-empowered” and its scope was to perform simulations so that renewable energy could find and claim its effective margin on the daily demand. ",["WK20","WK21"]],[" 2022 ",' Contracted by merchandizer as standalone Full Stack Developer to design and develop "Marine Service Parts" maintenance and shopping solution w/  / React / Mysql Database, '," ....",["WK24"]],[" 2021 ",' Contracted by ICCS as standalone Full stack Developer to design and develop "Synergy" 2 energy apps and infrastructure with Next.js / Mysql / Docker '," Deliverable was a part of multi European big-data project ‘Synergy” that roots and founded by greater movement “Horizon 2020”. Project customers are major national suppliers across Europe ",["WK19"]],[" 2020 ",' Contracted by ICCS as standalone Full stack Developer to design / develop "Hybrid" Energy App with Next.js / Mysql / Docker '," Core scopes of the project: Power Production / Load / Availability, Technical status of units and ultimately alignment with the official Schedule announced by the national supplier on daily basis ",["WK18"]],[" 2018 "," Employeed by Cosmores I designed and developed Rateparity as standalone Frontend Developer with Js / React.js "," Decoupled, customizable, one-line-installation CORS Widgets for enriching the user experience on customers sites. Additionally developing the configuration app in the backend for widgets customization and usage monitoring and evaluation. ",["WK17"]],[" 2017 "," Employeed by Cosmores as in-house Fullstack Developer to maintain / extend proprietary product with the Php / Mysql / Js / Jquery "," in the backend and frontend respectively. The mission was to upgrade, extend, maintain and enforce security processes on many parts of the company's daily routines. ",["WK16"]],[" 2017 "," Contracted as freelance, standalone Full stack Developer to design and build a warehouse inventory for Ecep Technologies Laravel (Php) / Mysql "," The English, London enterpreneur needed a .weba monitoring system that could keep track of products, purchases, deliveries and sales activities of the company. The tool that was used was Laravel 5.1 MVC ",["WK15"]],[" 2016 "," Contracted as freelance, standalone Full stack Developer for American project Noblelinx CRM upgrades and extensions with Php / Mysql ","-",["WK14"]],[" 2015 ",' Contracted by Interactive Data as freelance Front-end Developer for its new intranet project "Infobroker" hosted by Commerbank Germany with Js / Php / Mysql ',"-",["WK13"]],[" 2014 ",' Short passings from "DeltaCosmos Security" and "CCS Education" as Fullstack PHP and Frontend Javascript Develper respectively ',"-",["WK11","WK12"]],[" 2013 ",' Self-occupied as freelance "Web Developer and Graphics Designer" working with PHP and Js ecosystems. ',"-",["WK10","WK08"]],[" 2012 "," Graduated College with a 'first class honors' degree "," and attached a 'student of the year' distinction for last year performance. ",["WK07"]],[" 2011 "," I was released from Sanofi aventis after 11 years employment. "," The recession that stroke the country has led company to unleash almost half of the crew in near three years time. ",["WK01","WK02","WK03","WK04","WK05","WK06"]],[" 2009 "," I have decided to pursue a bachelor diploma on the domain of web technology. Nevertheless, while still occupied by 'sanofi aventis', has modified my decision in a way to select a title that would add value on the company as well. With those in mind Enrolled 'Internet Engineering and Web Management' class from University of Greenwich associated with 'New York' College. ",["WK07"]],[" 2008 "," Enrolled full-year class at Athenian Vocational Institute ‘Integraphics’ labeled ‘Web Designed & Development’. "," During the class, I faced a well structured introduction to Web protocols like HMLT, CSS, javascript and an infantile meeting experience with PHP, MySQL and Apache. While the training turned out really advantageous and the outcome was my first web site, build with ajax technology, exclusively consisting on protocols, my appetite on comprehending web technologies was enormous and the need to integrate myself with a root understanding over the concepts has generated my interest to obtain more advanced education. ",["WK08"]],[" 2006 "," Graduated 'Graphics designer for printable mediums & Web' at 'AKMI' Vocational Institute "," , and up until 2008 I have urged as one and primary target to familiarize and conform myself with the new business environment that had arose at ‘Sanofi Aventis’. Starting from the same year, up until 2008 I was gradually assigned to provide office assistance for the 'Facility and HSE Department' by recording, maintaining and draw out monthly reports for the data housekeeping. "],[" 2005 "," , while feeling the need to integrate a 'Graphic Designer' certificate that would ground further my qualifications in the area, I have enrolled a full-year class at 'AKMI' Vocational Institute labeled 'Graphics Designer for Printable Mediums and Web'. "," There I had my original experience with web concepts, namely site design and development, since we gained practicing skills on Macromedia's web tools such as Dreamweaver & Flash. At the same time in 2005 , while still occupied by 'Aventis Pharma' Pharmaceutical, there was a 'sudden merger announced by our company with 'Sanofi' Pharmaceutical. The merger was of a great value since the new-constitute company would climb high above previous competitive levels, gaining huge market shares would now strive c ompeting top ranking pharmaceuticals world-wide. "],[" 2002 "," Graduated 3D-Animation class at 'AKMI' vocational institute "," and for the later 3 years I primarily focused on my job, while as a hobby I continued to practice my skills with graphics design and 3D Animation components, as Adobe Photoshop, Corel Draw and 3D-Max respectively. "],[" 2001 "," Employed by ‘aventis pharma’ world-wide pharmaceutical enterprise "," , maintaining headquarters to France and establised subsidiaries word-wide. "],[" 2000 "," Enrolled 2 years class, ‘3D Animation & Desktop Publishing’ at ‘AKMI’ Athenian private vocational institute. "," For the first year we have been practicing strictly working 'on-hand' as to 'Free Hand Drawing', 'Paper Drawing Animations' and issuing 'Page Models' for magazines etc, while also studying 'Art History' and 'Typography History'. The next year I had my first experience with computing using tools like 'Photoshop 5.5', 'Corel Draw 8' and '3D-Max 3' ",""]];customElements.define("joi-timeline",class extends h{static properties={activeWork:{type:String},activeComment:{type:Boolean,default:!1}};constructor(){super()}action(){this.activeComment=!this.activeComment}render=()=>l`

            <div>

                <fieldset>
                    <label>comments</label>
                    <input type="checkbox" @click="${this.action}"/>
                </fieldset>

                <article>
                    <p>
                        ${at.map(([e,a,s,o])=>l`

                                    <section>

                                        <header>
                                            <strong>${e}</strong>
                                            <p>
                                                <em>${a}</em>
                                                <small class="${this.activeComment?"active":""}">${s}</small>
                                            </p>
                                        </header>

                                        <div>
                                            ${o&&o.map(n=>l`
                                                <button class="work ${n===this.activeWork?"active":""}"
                                                        @click="${()=>{this.activeWork=n,this.dispatchEvent(new CustomEvent(w.MONITOR_CONTENT,{detail:{code:n},bubbles:!0}))}}">
                                                    <strong>${n}</strong>
                                                    <span class="buttonico">
                                                        ${b(f.STAR({color:"#ccc"}))}
                                                    </span>
                                                </button>
                                            `)}
                                        </div>

                                    </section>
                                `)}
                    </p>

            </div>

            </div>
        `;static styles=[T,u`
                div {
                    padding: 10px;

                    fieldset {
                        color: #ddd;
                        text-align: right;
                        font-family: var(--font);
                        border: none;
                        margin: 10px 0;
                    }

                    article {
                        display: flex;
                        margin: auto;

                        p {
                            font-family: var(--font);
                            overflow: auto;
                            margin: auto;
                            width: 100%;
                        }

                        section {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            border-bottom: 1px solid #bbb;

                            &:hover {
                                //color: indianred;
                                text-decoration: underline;
                                background-color: #eee;
                                border-color: #888;
                            }

                            header {
                                display: flex;
                                align-items: flex-start;
                                gap: 40px;
                                text-align: left;
                                padding: 10px;

                                strong {
                                    font-size: 1.5em;
                                    width: 50px;
                                }

                                em {
                                    font-style: initial;
                                }

                                small {
                                    font-size: initial;
                                    display: none;

                                    &.active {
                                        display: initial;
                                        opacity: 1;
                                    }
                                }
                            }
                        }
                    }
                }
            `]});const Q="mi-transit-detail";customElements.define("page-content",class extends h{static properties={active:{type:Number}};constructor(){super(),this.active=1,this.transit=!1}action(e){this.active=e}evtDomainChange(e){const a=this.shadowRoot.querySelector("content-tablet");a.domain=e.detail.domain,this.evtContentTransit({detail:{transit:!1}})}evtToolChange(e){const a=this.shadowRoot.querySelector("content-menu");a.activeTool=e.detail.tool,a.active=S.TOOL;const s=this.shadowRoot.querySelector("content-tablet");s.tool=e.detail.tool,this.evtContentTransit({detail:{transit:!1}})}evtContentTransit(e){const a=this.shadowRoot.querySelector("main"),s=this.shadowRoot.querySelector("content-detail");if(!e.detail.transit)return a.classList.remove(Q);const o=$(e.detail.entryId);s.asset=o,a.classList.add(Q)}render=()=>l`

            <article
                    @tool-change=${this.evtToolChange}
                    @content-transit=${this.evtContentTransit}
                    @domain-change=${this.evtDomainChange}>

                <header>
                    <content-menu></content-menu>
                </header>

                    <!--                <main class="${Q}">-->
                <main>

                    <div>
                        <content-tablet></content-tablet>
                    </div>

                    <div>
                        <content-detail></content-detail>
                    </div>

                </main>

            </article>

        `;static styles=u`

            article {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                width: 100vw;
                height: 100vh;

                header {
                    flex-basis: 100px;
                }

                main {
                    flex-basis: calc(100vh - 100px);
                    position: relative;
                    top: 0;
                    left: 0;
                    width: 200%;
                    transition: all;


                    &.mi-transit-detail {
                        left: -100%;
                    }

                    > div {
                        position: relative;
                        float: left;
                        padding: 50px 0;
                        width: 50%;

                    }

                }
            }
        `});customElements.define("page-introduction",class extends h{static properties={activeContent:{type:String,default:C.LAND.INTRO}};constructor(){super(),this.activeContent=C.LAND.INTRO}evtIntroTransit(e){this.activeContent=e.detail.code}evtMonitorContent(e){this.shadowRoot.querySelector("joi-monitor").forceConent(e.detail.code)}render=()=>l`

            <article
                    @intro-transit="${this.evtIntroTransit}"
                    @monitor-content="${this.evtMonitorContent}">

                <header>
                    <intro-menu></intro-menu>
                </header>

                <aside id="mi-monitor">
                    <joi-monitor></joi-monitor>
                </aside>

                <main>
                    ${C.LAND.INTRO===this.activeContent&&l`
                                <quote-intro></quote-intro>
                            `||C.LAND.RESU===this.activeContent&&l`
                                <joi-timeline></joi-timeline>
                            `||""}
                </main>

            </article>

        `;static styles=u`

            article {

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 25px;
                width: 100vw;
                height: 100vh;

                aside {
                    height: 375px;
                    margin: 10px 0 50px 0;
                }

                main {
                    height: calc(100vh - 475px);
                    overflow: auto;
                }

            }
        `});
