import{a as ge,d as N,e as R,f as he,g as ut,h as Nt,i as me,j as fe,k as Rt,l as ye,m as z,n as jt,o as ve,p as vt,q as xe,r as et,s as _e,t as lt,u as pt,v as P,w as Ce}from"./chunk-EVFWHWIY.js";import{$ as ct,$a as u,Ab as tt,Ca as q,Cb as le,Da as Ft,Ea as S,Fa as A,Gb as Dt,Ia as D,Ja as C,Jb as ce,Ka as p,Kb as de,La as te,Lb as ue,M,Ma as dt,Mb as pe,N as U,Na as ee,Nb as yt,Oa as Z,Pa as Y,Pb as Et,Qa as ne,Qb as be,R as Yt,Ra as Lt,S as h,Sa as Bt,Ta as c,U as L,Ua as d,V as J,Va as X,W as k,Wa as Ct,Xa as wt,Ya as oe,Za as St,_a as w,a as f,aa as it,ab as $t,b as Jt,ba as rt,bb as kt,ca as Xt,cb as ht,da as y,db as mt,ea as Kt,eb as ft,fb as zt,ga as F,gb as ie,ha as bt,hb as g,ib as K,ja as Q,jb as H,ka as at,kb as At,lb as re,mb as E,n as Qt,nb as B,oa as _t,ob as Ht,r as qt,ra as Ot,ta as s,ua as st,wb as ae,x as Zt,yb as m,za as gt,zb as se}from"./chunk-PVJYCHLD.js";var It=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let i=0;i<o.length;i++)t.classList.add(o[i])}else{let o=n.split(" ");for(let i=0;i<o.length;i++)t.className+=" "+o[i]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var i=0;i<n.length;i++){if(n[i]==t)return o;n[i].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],i=0;for(var a=0;a<o.length;a++){if(o[a]==t)return i;o[a].attributes&&o[a].attributes[n]&&o[a].nodeType==1&&i++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",i=!0){t&&n&&(i&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let i=xt=>{if(xt)return getComputedStyle(xt).getPropertyValue("position")==="relative"?xt:i(xt.parentElement)},a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=n.offsetHeight,b=n.getBoundingClientRect(),$=this.getWindowScrollTop(),v=this.getWindowScrollLeft(),x=this.getViewport(),_=i(t)?.getBoundingClientRect()||{top:-1*$,left:-1*v},O,W;b.top+l+a.height>x.height?(O=b.top-_.top-a.height,t.style.transformOrigin="bottom",b.top+O<0&&(O=-1*b.top)):(O=l+b.top-_.top,t.style.transformOrigin="top");let Ut=b.left+a.width-x.width,Ge=b.left-_.left;a.width>x.width?W=(b.left-_.left)*-1:Ut>0?W=Ge-Ut:W=b.left-_.left,t.style.top=O+"px",t.style.left=W+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,o=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.height,l=i.width,b=n.offsetHeight,$=n.offsetWidth,v=n.getBoundingClientRect(),x=this.getWindowScrollTop(),T=this.getWindowScrollLeft(),_=this.getViewport(),O,W;v.top+b+a>_.height?(O=v.top+x-a,t.style.transformOrigin="bottom",O<0&&(O=x)):(O=b+v.top+x,t.style.transformOrigin="top"),v.left+l>_.width?W=Math.max(0,v.left+T+$-l):W=v.left+T,t.style.top=O+"px",t.style.left=W+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),i=/(auto|scroll)/,a=l=>{let b=window.getComputedStyle(l,null);return i.test(b.getPropertyValue("overflow"))||i.test(b.getPropertyValue("overflowX"))||i.test(b.getPropertyValue("overflowY"))};for(let l of o){let b=l.nodeType===1&&l.dataset.scrollselectors;if(b){let $=b.split(",");for(let v of $){let x=this.findSingle(l,v);x&&a(x)&&n.push(x)}}l.nodeType!==9&&a(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,a=getComputedStyle(t).getPropertyValue("paddingTop"),l=a?parseFloat(a):0,b=t.getBoundingClientRect(),v=n.getBoundingClientRect().top+document.body.scrollTop-(b.top+document.body.scrollTop)-i-l,x=t.scrollTop,T=t.clientHeight,_=this.getOuterHeight(n);v<0?t.scrollTop=x+v:v+_>T&&(t.scrollTop=x+v-T+_)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,i=0,a=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(t,n){var o=1,i=50,a=n,l=i/a;let b=setInterval(()=>{o=o-l,o<=0&&(o=0,clearInterval(b)),t.style.opacity=o},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return i.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let i=getComputedStyle(t);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let i=getComputedStyle(t);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,i=n.getElementsByTagName("body")[0],a=t.innerWidth||o.clientWidth||i.clientWidth,l=t.innerHeight||o.clientHeight||i.clientHeight;return{width:a,height:l}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var i=t.indexOf("rv:");return!0}var a=t.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),i=[];for(let a of o){let l=getComputedStyle(a);this.isVisible(a)&&l.display!="none"&&l.visibility!="hidden"&&i.push(a)}return i}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let i=getComputedStyle(o);if(this.isVisible(o)&&i.display!="none"&&i.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),i=0;if(o&&o.length>0){let a=o.indexOf(o[0].ownerDocument.activeElement);n?a==-1||a===0?i=o.length-1:i=a-1:a!=-1&&a!==o.length-1&&(i=a+1)}return o[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let a=(l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let i=document.createElement(t);return this.setAttributes(i,n),i.append(...o),i}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(i,a)=>{let l=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[a].flat().reduce((b,$)=>{if($!=null){let v=typeof $;if(v==="string"||v==="number")b.push($);else if(v==="object"){let x=Array.isArray($)?o(i,$):Object.entries($).map(([T,_])=>i==="style"&&(_||_===0)?`${T.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${_}`:_?T:void 0);b=x.length?b.concat(x.filter(T=>!!T)):b}}return b},l)};Object.entries(n).forEach(([i,a])=>{if(a!=null){let l=i.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),a):i==="pBind"?this.setAttributes(t,a):(a=i==="class"?[...new Set(o("class",a))].join(" ").trim():i==="style"?o("style",a).join(";").trim():a,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=a),t.setAttribute(i,a))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var we=(()=>{class e{el;zone;renderer;scope;dragEffect;dragHandle;onDragStart=new F;onDragEnd=new F;onDrag=new F;handle;dragListener;mouseDownListener;mouseUpListener;_pDraggableDisabled=!1;constructor(t,n,o){this.el=t,this.zone=n,this.renderer=o}get pDraggableDisabled(){return this._pDraggableDisabled}set pDraggableDisabled(t){this._pDraggableDisabled=t,this._pDraggableDisabled?this.unbindMouseListeners():(this.el.nativeElement.draggable=!0,this.bindMouseListeners())}ngAfterViewInit(){this.pDraggableDisabled||(this.el.nativeElement.draggable=!0,this.bindMouseListeners())}bindDragListener(){this.dragListener||this.zone.runOutsideAngular(()=>{this.dragListener=this.renderer.listen(this.el.nativeElement,"drag",this.drag.bind(this))})}unbindDragListener(){this.dragListener&&this.zone.runOutsideAngular(()=>{this.dragListener&&this.dragListener(),this.dragListener=null})}bindMouseListeners(){!this.mouseDownListener&&!this.mouseUpListener&&this.zone.runOutsideAngular(()=>{this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.mousedown.bind(this)),this.mouseUpListener=this.renderer.listen(this.el.nativeElement,"mouseup",this.mouseup.bind(this))})}unbindMouseListeners(){this.mouseDownListener&&this.mouseUpListener&&this.zone.runOutsideAngular(()=>{this.mouseDownListener&&this.mouseDownListener(),this.mouseUpListener&&this.mouseUpListener(),this.mouseDownListener=null,this.mouseUpListener=null})}drag(t){this.onDrag.emit(t)}dragStart(t){this.allowDrag()&&!this.pDraggableDisabled?(this.dragEffect&&(t.dataTransfer.effectAllowed=this.dragEffect),t.dataTransfer.setData("text",this.scope),this.onDragStart.emit(t),this.bindDragListener()):t.preventDefault()}dragEnd(t){this.onDragEnd.emit(t),this.unbindDragListener()}mousedown(t){this.handle=t.target}mouseup(t){this.handle=null}allowDrag(){return this.dragHandle&&this.handle?It.matches(this.handle,this.dragHandle):!0}ngOnDestroy(){this.unbindDragListener(),this.unbindMouseListeners()}static \u0275fac=function(n){return new(n||e)(st(at),st(bt),st(gt))};static \u0275dir=k({type:e,selectors:[["","pDraggable",""]],hostBindings:function(n,o){n&1&&w("dragstart",function(a){return o.dragStart(a)})("dragend",function(a){return o.dragEnd(a)})},inputs:{scope:[0,"pDraggable","scope"],dragEffect:"dragEffect",dragHandle:"dragHandle",pDraggableDisabled:"pDraggableDisabled"},outputs:{onDragStart:"onDragStart",onDragEnd:"onDragEnd",onDrag:"onDrag"},standalone:!0})}return e})(),Se=(()=>{class e{el;zone;renderer;scope;pDroppableDisabled=!1;dropEffect;onDragEnter=new F;onDragLeave=new F;onDrop=new F;constructor(t,n,o){this.el=t,this.zone=n,this.renderer=o}dragOverListener;ngAfterViewInit(){this.pDroppableDisabled||this.bindDragOverListener()}bindDragOverListener(){this.dragOverListener||this.zone.runOutsideAngular(()=>{this.dragOverListener=this.renderer.listen(this.el.nativeElement,"dragover",this.dragOver.bind(this))})}unbindDragOverListener(){this.dragOverListener&&this.zone.runOutsideAngular(()=>{this.dragOverListener&&this.dragOverListener(),this.dragOverListener=null})}dragOver(t){t.preventDefault()}drop(t){this.allowDrop(t)&&(R(this.el.nativeElement,"p-draggable-enter"),t.preventDefault(),this.onDrop.emit(t))}dragEnter(t){t.preventDefault(),this.dropEffect&&(t.dataTransfer.dropEffect=this.dropEffect),N(this.el.nativeElement,"p-draggable-enter"),this.onDragEnter.emit(t)}dragLeave(t){t.preventDefault(),this.el.nativeElement.contains(t.relatedTarget)||(R(this.el.nativeElement,"p-draggable-enter"),this.onDragLeave.emit(t))}allowDrop(t){let n=t.dataTransfer.getData("text");if(typeof this.scope=="string"&&n==this.scope)return!0;if(Array.isArray(this.scope)){for(let o=0;o<this.scope.length;o++)if(n==this.scope[o])return!0}return!1}ngOnDestroy(){this.unbindDragOverListener()}static \u0275fac=function(n){return new(n||e)(st(at),st(bt),st(gt))};static \u0275dir=k({type:e,selectors:[["","pDroppable",""]],hostBindings:function(n,o){n&1&&w("drop",function(a){return o.drop(a)})("dragenter",function(a){return o.dragEnter(a)})("dragleave",function(a){return o.dragLeave(a)})},inputs:{scope:[0,"pDroppable","scope"],pDroppableDisabled:[2,"pDroppableDisabled","pDroppableDisabled",m],dropEffect:"dropEffect"},outputs:{onDragEnter:"onDragEnter",onDragLeave:"onDragLeave",onDrop:"onDrop"},standalone:!0,features:[A]})}return e})(),$e=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=J({type:e});static \u0275inj=U({})}return e})();var ke=(()=>{class e extends P{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),I=(()=>{class e{document=h(Dt);platformId=h(_t);el=h(at);injector=h(Kt);cd=h(ae);renderer=h(gt);config=h(Ce);baseComponentStyle=h(ke);baseStyle=h(P);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=vt("pc");_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",o={}){return ve(t,n,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!be(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let t=()=>{pt.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),pt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!pt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),pt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!lt.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,f({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,f({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,f({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(f({name:"global-style"},this.styleOptions),i),lt.setLoadedStyleName("common")}if(!lt.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,f({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(f({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),lt.setLoadedStyleName(this.componentStyle?.name)}if(!lt.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,f({name:"layer-order",first:!0},this.styleOptions)),lt.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,f({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){pt.clearLoadedStyleNames(),_e.on("theme:change",t)}cx(t,n){let o=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:t}sx(t){let n=this.componentStyle?.inlineStyles?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:f({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||e)};static \u0275dir=k({type:e,inputs:{dt:"dt"},standalone:!0,features:[E([ke,P]),ct]})}return e})();var De=(()=>{class e extends I{autofocus=!1;_autofocus=!1;focused=!1;platformId=h(_t);document=h(Dt);host=h(at);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Et(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=It.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=k({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",m],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[A,S]})}return e})();var Ue=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Je={root:({props:e,instance:r})=>["p-badge p-component",{"p-badge-circle":jt(e.value)&&String(e.value).length===1,"p-badge-dot":z(e.value)&&!r.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Ee=(()=>{class e extends P{name="badge";theme=Ue;classes=Je;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Vt=(()=>{class e extends I{styleClass=Q();style=Q();badgeSize=Q();size=Q();severity=Q();value=Q();badgeDisabled=Q(!1,{transform:m});_componentStyle=h(Ee);containerClass=tt(()=>{let t="p-badge p-component";return jt(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),z(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(ee(o.style()),Z(o.containerClass()),te("display",o.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[E([Ee]),S,B],decls:1,vars:1,template:function(n,o){n&1&&g(0),n&2&&K(o.value())},dependencies:[yt,et],encapsulation:2,changeDetection:0})}return e})(),Ie=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=J({type:e});static \u0275inj=U({imports:[Vt,et,et]})}return e})();var qe=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ze=(()=>{class e extends P{name="baseicon";inlineStyles=qe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ye=["*"],Me=(()=>{class e extends I{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=z(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",m],styleClass:"styleClass"},standalone:!0,features:[E([Ze]),A,S,B],ngContentSelectors:Ye,decls:1,vars:0,template:function(n,o){n&1&&($t(),kt(0))},encapsulation:2,changeDetection:0})}return e})();var Pe=(()=>{class e extends Me{pathId;ngOnInit(){this.pathId="url(#"+vt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["SpinnerIcon"]],standalone:!0,features:[S,B],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Xt(),c(0,"svg",0)(1,"g"),X(2,"path",1),d(),c(3,"defs")(4,"clipPath",2),X(5,"rect",3),d()()()),n&2&&(Z(o.getClassNames()),C("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),s(),C("clip-path",o.pathId),s(3),p("id",o.pathId))},encapsulation:2})}return e})();var Xe=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Ke={root:"p-ink"},Te=(()=>{class e extends P{name="ripple";theme=Xe;classes=Ke;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Oe=(()=>{class e extends I{zone=h(bt);_componentStyle=h(Te);animationListener;mouseDownListener;timeout;constructor(){super(),le(()=>{Et(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(R(n,"p-ink-active"),!Nt(n)&&!Rt(n)){let l=Math.max(he(this.el.nativeElement),fe(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let o=me(this.el.nativeElement),i=t.pageX-o.left+this.document.body.scrollTop-Rt(n)/2,a=t.pageY-o.top+this.document.body.scrollLeft-Nt(n)/2;this.renderer.setStyle(n,"top",a+"px"),this.renderer.setStyle(n,"left",i+"px"),N(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&R(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&R(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),R(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ye(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=k({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[E([Te]),S]})}return e})();var tn=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,en={root:({instance:e,props:r})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link,[`p-button-${r.severity}`]:r.severity,"p-button-raised":r.raised,"p-button-rounded":r.rounded,"p-button-text":r.text,"p-button-outlined":r.outlined,"p-button-sm":r.size==="small","p-button-lg":r.size==="large","p-button-plain":r.plain,"p-button-fluid":r.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},ot=(()=>{class e extends P{name="button";theme=tn;classes=en;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var nn=["content"],on=["loading"],rn=["icon"],an=["*"],Be=e=>({class:e});function sn(e,r){e&1&&oe(0)}function ln(e,r){if(e&1&&X(0,"span",8),e&2){let t=u(3);p("ngClass",t.iconClass()),C("aria-hidden",!0)("data-pc-section","loadingicon")}}function cn(e,r){if(e&1&&X(0,"SpinnerIcon",9),e&2){let t=u(3);p("styleClass",t.spinnerIconClass())("spin",!0),C("aria-hidden",!0)("data-pc-section","loadingicon")}}function dn(e,r){if(e&1&&(Ct(0),D(1,ln,1,3,"span",6)(2,cn,1,4,"SpinnerIcon",7),wt()),e&2){let t=u(2);s(),p("ngIf",t.loadingIcon),s(),p("ngIf",!t.loadingIcon)}}function un(e,r){}function pn(e,r){if(e&1&&D(0,un,0,0,"ng-template",10),e&2){let t=u(2);p("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function bn(e,r){if(e&1&&(Ct(0),D(1,dn,3,2,"ng-container",2)(2,pn,1,1,null,5),wt()),e&2){let t=u();s(),p("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),s(),p("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Ht(3,Be,t.iconClass()))}}function gn(e,r){if(e&1&&X(0,"span",8),e&2){let t=u(2);Z(t.icon),p("ngClass",t.iconClass()),C("data-pc-section","icon")}}function hn(e,r){}function mn(e,r){if(e&1&&D(0,hn,0,0,"ng-template",10),e&2){let t=u(2);p("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function fn(e,r){if(e&1&&(Ct(0),D(1,gn,1,4,"span",11)(2,mn,1,1,null,5),wt()),e&2){let t=u();s(),p("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),s(),p("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ht(3,Be,t.iconClass()))}}function yn(e,r){if(e&1&&(c(0,"span",12),g(1),d()),e&2){let t=u();C("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),s(),K(t.label)}}function vn(e,r){if(e&1&&X(0,"p-badge",13),e&2){let t=u();p("value",t.badge)("severity",t.badgeSeverity)}}var nt={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Fe=(()=>{class e extends I{_componentStyle=h(ot);static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=k({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&dt("p-button-label",!0)},standalone:!0,features:[E([ot]),S]})}return e})(),Le=(()=>{class e extends I{_componentStyle=h(ot);static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=k({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&dt("p-button-icon",!0)},standalone:!0,features:[E([ot]),S]})}return e})(),ze=(()=>{class e extends I{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Ft(Le);labelSignal=Ft(Fe);isIconOnly=tt(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(nt);isTextButton=tt(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=h(ot);ngAfterViewInit(){super.ngAfterViewInit(),N(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let i in o)this[i]=o[i]}}getStyleClass(){let t=[nt.button,nt.component];return this.icon&&!this.label&&z(this.htmlElement.textContent)&&t.push(nt.iconOnly),this.loading&&(t.push(nt.disabled,nt.loading),!this.icon&&this.label&&t.push(nt.labelOnly),this.icon&&!this.label&&!z(this.htmlElement.textContent)&&t.push(nt.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return z(this.fluid)?!!n:this.fluid}setStyleClass(){let t=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}createLabel(){if(!ut(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!ut(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&N(n,o);let i=this.getIconClass();i&&N(n,i),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=ut(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=ut(this.htmlElement,".p-button-icon"),n=ut(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=k({type:e,selectors:[["","pButton",""]],contentQueries:function(n,o,i){n&1&&(zt(i,o.iconSignal,Le,5),zt(i,o.labelSignal,Fe,5)),n&2&&ie(2)},hostVars:4,hostBindings:function(n,o){n&2&&dt("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",m],rounded:[2,"rounded","rounded",m],text:[2,"text","text",m],outlined:[2,"outlined","outlined",m],size:"size",plain:[2,"plain","plain",m],fluid:[2,"fluid","fluid",m],label:"label",icon:"icon",buttonProps:"buttonProps"},standalone:!0,features:[E([ot]),A,S,ct]})}return e})(),xn=(()=>{class e extends I{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new F;onFocus=new F;onBlur=new F;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return z(this.fluid)?!!n:this.fluid}_componentStyle=h(ot);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let i in o)this[i]=o[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-button"]],contentQueries:function(n,o,i){if(n&1&&(ht(i,nn,5),ht(i,on,5),ht(i,rn,5),ht(i,xe,4)),n&2){let a;mt(a=ft())&&(o.contentTemplate=a.first),mt(a=ft())&&(o.loadingIconTemplate=a.first),mt(a=ft())&&(o.iconTemplate=a.first),mt(a=ft())&&(o.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",m],loading:[2,"loading","loading",m],loadingIcon:"loadingIcon",raised:[2,"raised","raised",m],rounded:[2,"rounded","rounded",m],text:[2,"text","text",m],plain:[2,"plain","plain",m],severity:"severity",outlined:[2,"outlined","outlined",m],link:[2,"link","link",m],tabindex:[2,"tabindex","tabindex",se],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",m],fluid:[2,"fluid","fluid",m],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[E([ot]),A,S,ct,B],ngContentSelectors:an,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&($t(),c(0,"button",0),w("click",function(a){return o.onClick.emit(a)})("focus",function(a){return o.onFocus.emit(a)})("blur",function(a){return o.onBlur.emit(a)}),kt(1),D(2,sn,1,0,"ng-container",1)(3,bn,3,5,"ng-container",2)(4,fn,3,5,"ng-container",2)(5,yn,2,3,"span",3)(6,vn,1,2,"p-badge",4),d()),n&2&&(p("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),C("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),s(2),p("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),s(),p("ngIf",o.loading),s(),p("ngIf",!o.loading),s(),p("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),s(),p("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[yt,ce,de,pe,ue,Oe,De,Pe,Ie,Vt,et],encapsulation:2,changeDetection:0})}return e})(),Ae=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=J({type:e});static \u0275inj=U({imports:[yt,xn,et,et]})}return e})();var V=e=>`https://placehold.co/200x260/252640/a0a0b0?text=${encodeURIComponent(e.split(" ").map(r=>r[0]).join(""))}`,G=(e,r,t,n,o,i,a=28)=>({ppg:e,rpg:r,apg:t,pra:Math.round((e+r+t)*10)/10,fg3_pct:n,efg_pct:o,stocks:i,mpg:a}),Gt=[[{id:"1",name:"Trey Murphy III",headshotUrl:V("Trey Murphy III"),stats:f({},G(14.2,4.8,1.5,.384,.582,.9))},{id:"2",name:"Bennedict Mathurin",headshotUrl:V("Bennedict Mathurin"),stats:f({},G(16.2,4.1,1.9,.361,.548,.6))},{id:"3",name:"O.G. Anunoby",headshotUrl:V("O.G. Anunoby"),stats:f({},G(14.1,4.7,1.9,.391,.572,1.8))}],[{id:"4",name:"Anthony Edwards",headshotUrl:V("Anthony Edwards"),stats:f({},G(25.9,5.4,5.1,.357,.541,1.4))},{id:"5",name:"Paolo Banchero",headshotUrl:V("Paolo Banchero"),stats:f({},G(22.6,6.9,5.4,.338,.531,1))},{id:"6",name:"Chet Holmgren",headshotUrl:V("Chet Holmgren"),stats:f({},G(12.9,7.9,2.4,.352,.589,3.2))}],[{id:"7",name:"Victor Wembanyama",headshotUrl:V("Victor Wembanyama"),stats:f({},G(21.3,10.7,3.8,.325,.552,4.5))},{id:"8",name:"Jalen Brunson",headshotUrl:V("Jalen Brunson"),stats:f({},G(28.7,3.6,7.4,.401,.568,.5))},{id:"9",name:"Shai Gilgeous-Alexander",headshotUrl:V("Shai Gilgeous-Alexander"),stats:f({},G(30.1,5.5,6.2,.355,.563,1.6))}]];var Cn="https://cdn.nba.com/headshots/nba/latest/1040x760";function He(e){return`${Cn}/${e}.png`}function Wt(e){let r=e.split(" ").map(t=>t[0]).join("");return`https://placehold.co/200x260/252640/a0a0b0?text=${encodeURIComponent(r)}`}var wn="data/nba-players-2025-26.json",Pt=class e{constructor(r){this.http=r}getPlayers(){return this.http.get(wn).pipe(qt(r=>(Array.isArray(r)?r:[]).map(t=>this.toPlayer(t))),Zt(()=>Qt([])))}toPlayer(r){let n=r.headshotUrl?.trim()||He(r.id);return{id:r.id,name:r.name,headshotUrl:n,stats:r.stats?{ppg:r.stats.ppg??void 0,rpg:r.stats.rpg??void 0,apg:r.stats.apg??void 0,mpg:r.stats.mpg??void 0,fg3_pct:r.stats.fg3_pct??void 0,efg_pct:r.stats.efg_pct??void 0,stocks:r.stats.stocks??void 0,pra:r.stats.pra??void 0}:void 0}}static{this.\u0275fac=function(t){return new(t||e)(Yt(ge))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}};var Sn=(e,r)=>r.id;function $n(e,r){if(e&1&&(c(0,"span",24),g(1),d()),e&2){let t=u(2),n=u(2);s(),At("",n.formatPct(t.stats.fg3_pct)," 3pt \xB7 ",n.formatPct(t.stats.efg_pct)," eFG")}}function kn(e,r){if(e&1&&(c(0,"span",24),g(1),d()),e&2){let t=u(2);s(),H("",t.stats.stocks," STOCKS")}}function Dn(e,r){if(e&1&&(c(0,"div",22)(1,"span",24),g(2),d(),D(3,$n,2,2,"span",24)(4,kn,2,1,"span",24),d()),e&2){let t,n=u();s(2),re("",(t=n.stats.ppg)!==null&&t!==void 0?t:"\u2013"," PPG \xB7 ",(t=n.stats.rpg)!==null&&t!==void 0?t:"\u2013"," RPG \xB7 ",(t=n.stats.apg)!==null&&t!==void 0?t:"\u2013"," APG"),s(),Y(n.stats.fg3_pct!=null||n.stats.efg_pct!=null?3:-1),s(),Y(n.stats.stocks!=null?4:-1)}}function En(e,r){if(e&1){let t=St();c(0,"div",18)(1,"img",20),w("error",function(){let o=it(t),i=u(2);return rt(i.onHeadshotError(o.id))}),d(),c(2,"span",21),g(3),d(),D(4,Dn,5,5,"div",22),c(5,"button",23),w("click",function(){it(t);let o=u().$implicit,i=u();return rt(i.clearSlot(o))}),g(6,"\xD7"),d()()}if(e&2){let t=r,n=u().$implicit,o=u();s(),p("src",o.getHeadshotUrl(t),Ot)("alt",t.name),s(2),K(t.name),s(),Y(t.stats?4:-1),s(),C("aria-label","Remove from "+o.getSlotLabel(n))}}function In(e,r){e&1&&(c(0,"span",19),g(1,"Drop here"),d())}function Mn(e,r){if(e&1){let t=St();c(0,"div",15),w("onDrop",function(){let o=it(t).$implicit,i=u();return rt(i.drop(o))}),c(1,"span",16),g(2),d(),c(3,"div",17),D(4,En,7,5,"div",18)(5,In,2,0,"span",19),d()()}if(e&2){let t,n=r.$implicit,o=u();Z(o.getSlotClass(n)),p("pDroppable",o.SCOPE),C("data-slot",n),s(2),K(o.getSlotLabel(n)),s(2),Y((t=o.currentAssignment()[n])?4:5,t)}}function Pn(e,r){if(e&1&&(c(0,"div",32)(1,"span"),g(2),d(),c(3,"span"),g(4),d()()),e&2){let t=u(2).$implicit,n=u();s(2),H("",n.formatPct(t.stats.fg3_pct)," 3pt"),s(2),H("",n.formatPct(t.stats.efg_pct)," eFG")}}function Tn(e,r){if(e&1&&(c(0,"div",32)(1,"span"),g(2),d()()),e&2){let t,n=u(2).$implicit;s(2),H("",(t=n.stats.stocks)!==null&&t!==void 0?t:"\u2013"," STOCKS")}}function On(e,r){if(e&1&&(c(0,"div",30)(1,"div",31)(2,"span"),g(3),d(),c(4,"span"),g(5),d(),c(6,"span"),g(7),d()(),D(8,Pn,5,2,"div",32)(9,Tn,3,1,"div",32),d()),e&2){let t,n,o,i=u().$implicit;s(3),H("",(t=i.stats.ppg)!==null&&t!==void 0?t:"\u2013"," PPG"),s(2),H("",(n=i.stats.rpg)!==null&&n!==void 0?n:"\u2013"," RPG"),s(2),H("",(o=i.stats.apg)!==null&&o!==void 0?o:"\u2013"," APG"),s(),Y(i.stats.fg3_pct!=null||i.stats.efg_pct!=null?8:-1),s(),Y(i.stats.stocks!=null||i.stats.pra!=null?9:-1)}}function Fn(e,r){if(e&1){let t=St();c(0,"div",25),w("onDragStart",function(){let o=it(t).$implicit,i=u();return rt(i.dragStart(o))})("onDragEnd",function(){it(t);let o=u();return rt(o.dragEnd())}),c(1,"div",26)(2,"img",27),w("error",function(){let o=it(t).$implicit,i=u();return rt(i.onHeadshotError(o.id))}),d()(),c(3,"div",28)(4,"span",29),g(5),d()(),D(6,On,10,5,"div",30),d()}if(e&2){let t=r.$implicit,n=u();p("pDraggable",n.SCOPE),C("data-player-id",t.id),s(2),p("src",n.getHeadshotUrl(t),Ot)("alt",t.name),s(3),K(t.name),s(),Y(t.stats?6:-1)}}var Ln="players",Tt=3,Ne=0,Re=48;function je(e,r){let t=[...e];for(let o=t.length-1;o>0;o--){let i=Math.floor(Math.random()*(o+1));[t[o],t[i]]=[t[i],t[o]]}let n=[];for(let o=0;o<t.length;o+=r){let i=t.slice(o,o+r);i.length===r&&n.push(i)}return n}function Bn(e,r){let t=e.stats?.mpg;return t!=null&&t>=r}var Ve=class e{constructor(){this.nbaData=h(Pt);this.SCOPE=Ln;this.slots=["start","bench","cut"];this.mpgMin=Ne;this.mpgMax=Re;this.allPlayers=q([]);this.mpgThreshold=q(10);this.mpgFilterEnabled=q(!1);this.groupings=q(Gt);this.currentIndex=q(0);this.assignment=q({start:null,bench:null,cut:null});this.currentPlayers=tt(()=>this.groupings()[this.currentIndex()]??[]);this.currentAssignment=tt(()=>this.assignment());this.failedHeadshotIds=q(new Set);this.draggedPlayer=null}getHeadshotUrl(r){return this.failedHeadshotIds().has(r.id)?Wt(r.name):r.headshotUrl||Wt(r.name)}onHeadshotError(r){this.failedHeadshotIds.update(t=>{let n=new Set(t);return n.add(r),n})}formatPct(r){return r==null?"\u2013":(r*100).toFixed(1)+"%"}ngOnInit(){this.nbaData.getPlayers().subscribe(r=>{this.allPlayers.set(r),this.updateGroupings()})}updateGroupings(){let r=this.allPlayers(),t=this.mpgFilterEnabled(),n=this.mpgThreshold(),o=t?r.filter(i=>Bn(i,n)):r;o.length>=Tt?this.groupings.set(je(o,Tt)):this.groupings.set(r.length>=Tt?je(r,Tt):Gt),this.currentIndex.set(0),this.assignment.set({start:null,bench:null,cut:null})}decrementMpgThreshold(){this.mpgThreshold.update(r=>Math.max(Ne,r-1)),this.mpgFilterEnabled()&&this.updateGroupings()}incrementMpgThreshold(){this.mpgThreshold.update(r=>Math.min(Re,r+1)),this.mpgFilterEnabled()&&this.updateGroupings()}toggleMpgFilter(){this.mpgFilterEnabled.update(r=>!r),this.updateGroupings()}dragStart(r){this.draggedPlayer=r}dragEnd(){this.draggedPlayer=null}drop(r){if(!this.draggedPlayer)return;let t=this.assignment(),n=f({},t);t.start?.id===this.draggedPlayer.id&&(n.start=null),t.bench?.id===this.draggedPlayer.id&&(n.bench=null),t.cut?.id===this.draggedPlayer.id&&(n.cut=null),n[r]=this.draggedPlayer,this.assignment.set(n),this.draggedPlayer=null}clearSlot(r){this.assignment.update(t=>Jt(f({},t),{[r]:null}))}previous(){let r=this.currentIndex();r>0&&(this.currentIndex.set(r-1),this.assignment.set({start:null,bench:null,cut:null}))}next(){let r=this.currentIndex(),t=this.groupings();r<t.length-1&&(this.currentIndex.set(r+1),this.assignment.set({start:null,bench:null,cut:null}))}getSlotLabel(r){return r.charAt(0).toUpperCase()+r.slice(1)}getSlotClass(r){return`drop-zone drop-zone-${r}`}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=L({type:e,selectors:[["app-game"]],standalone:!0,features:[B],decls:28,vars:15,consts:[[1,"game-container","dark-theme"],[1,"game-header"],[1,"subtitle"],["aria-label","Roster slots",1,"drop-zones"],[3,"class","pDroppable"],["aria-label","Players to assign",1,"players-row"],[1,"player-card",3,"pDraggable"],["aria-label","Group navigation",1,"game-nav"],["type","button","pButton","",1,"p-button-text","nav-btn",3,"click","disabled"],[1,"nav-label"],[1,"nav-indicator"],["aria-label","Minutes per game filter",1,"filter-row"],["type","button","pButton","",1,"mpg-control-btn","mpg-control-minus",3,"click","disabled"],["type","button",1,"mpg-control-value",3,"click"],["type","button","pButton","",1,"mpg-control-btn","mpg-control-plus",3,"click","disabled"],[3,"onDrop","pDroppable"],[1,"zone-label"],[1,"zone-content"],[1,"placed-player"],[1,"zone-placeholder"],[1,"placed-headshot",3,"error","src","alt"],[1,"placed-name"],[1,"placed-stats"],["type","button",1,"clear-slot",3,"click"],[1,"placed-stats-row"],[1,"player-card",3,"onDragStart","onDragEnd","pDraggable"],[1,"card-image-wrap"],[1,"player-headshot",3,"error","src","alt"],[1,"card-name-strip"],[1,"player-name"],[1,"card-stats"],[1,"card-stats-row"],[1,"card-stats-row","card-stats-row-sub"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"header",1)(2,"h1"),g(3,"Start Bench Cut"),d(),c(4,"p",2),g(5,"Drag each player to Start, Bench, or Cut"),d()(),c(6,"section",3),Lt(7,Mn,6,6,"div",4,ne),d(),c(9,"section",5),Lt(10,Fn,7,6,"div",6,Sn),d(),c(12,"nav",7)(13,"button",8),w("click",function(){return n.previous()}),c(14,"span",9),g(15,"< Previous"),d()(),c(16,"span",10),g(17),d(),c(18,"button",8),w("click",function(){return n.next()}),c(19,"span",9),g(20,"Next >"),d()()(),c(21,"div",11)(22,"button",12),w("click",function(){return n.decrementMpgThreshold()}),g(23," \u2212 "),d(),c(24,"button",13),w("click",function(){return n.toggleMpgFilter()}),g(25),d(),c(26,"button",14),w("click",function(){return n.incrementMpgThreshold()}),g(27," + "),d()()()),t&2&&(s(7),Bt(n.slots),s(3),Bt(n.currentPlayers()),s(3),p("disabled",n.currentIndex()===0),s(4),At("Group ",n.currentIndex()+1," of ",n.groupings().length,""),s(),p("disabled",n.currentIndex()>=n.groupings().length-1),s(4),p("disabled",n.mpgThreshold()<=n.mpgMin),C("aria-label","Decrease mpg filter to "+(n.mpgThreshold()-1)),s(2),dt("mpg-control-value-enabled",n.mpgFilterEnabled())("mpg-control-value-disabled",!n.mpgFilterEnabled()),C("aria-pressed",n.mpgFilterEnabled())("aria-label",(n.mpgFilterEnabled()?"Filter on":"Filter off")+", "+n.mpgThreshold()+" minutes per game. Click to toggle filter."),s(),H(" ",n.mpgThreshold()," mpg "),s(),p("disabled",n.mpgThreshold()>=n.mpgMax),C("aria-label","Increase mpg filter to "+(n.mpgThreshold()+1)))},dependencies:[$e,we,Se,Ae,ze],styles:[".game-container[_ngcontent-%COMP%]{min-height:100vh;padding:1.5rem 1rem 2rem;display:flex;flex-direction:column;align-items:center;gap:2rem;background:var(--sbc-bg);color:var(--sbc-text)}.game-header[_ngcontent-%COMP%]{text-align:center}.game-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:1.75rem;font-weight:700;letter-spacing:.02em}.subtitle[_ngcontent-%COMP%]{margin:0;font-size:.95rem;color:var(--sbc-text-muted)}.drop-zones[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;width:100%;max-width:900px}.drop-zone[_ngcontent-%COMP%]{min-height:180px;border-radius:12px;border:2px dashed;display:flex;flex-direction:column;align-items:center;padding:.75rem;transition:background-color .15s ease,border-color .15s ease}.drop-zone-start[_ngcontent-%COMP%]{border-color:var(--sbc-start);background:#22c55e0f}.drop-zone-bench[_ngcontent-%COMP%]{border-color:var(--sbc-bench);background:#eab3080f}.drop-zone-cut[_ngcontent-%COMP%]{border-color:var(--sbc-cut);background:#ef44440f}.drop-zone.p-draggable-enter[_ngcontent-%COMP%]{background:var(--sbc-drop-enter)}.zone-label[_ngcontent-%COMP%]{font-weight:700;font-size:1rem;margin-bottom:.5rem}.zone-content[_ngcontent-%COMP%]{flex:1;width:100%;display:flex;align-items:center;justify-content:center;min-height:120px;position:relative}.zone-placeholder[_ngcontent-%COMP%]{font-size:.85rem;color:var(--sbc-text-muted)}.placed-player[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.35rem;padding:.25rem}.placed-headshot[_ngcontent-%COMP%]{width:64px;height:64px;object-fit:cover;border-radius:8px}.placed-name[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;text-align:center;line-height:1.2}.placed-stats[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.2rem;font-size:.7rem;color:var(--sbc-text-muted)}.placed-stats-row[_ngcontent-%COMP%]{display:block}.clear-slot[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:24px;height:24px;border:none;border-radius:50%;background:var(--sbc-surface);color:var(--sbc-text-muted);font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.clear-slot[_ngcontent-%COMP%]:hover{background:var(--sbc-cut);color:#fff}.players-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem;width:100%;max-width:900px}.player-card[_ngcontent-%COMP%]{cursor:grab;-webkit-user-select:none;user-select:none;width:160px;border-radius:12px;overflow:hidden;background:var(--sbc-surface);box-shadow:0 4px 12px #0000004d;transition:transform .15s ease,box-shadow .15s ease}.player-card[_ngcontent-%COMP%]:active{cursor:grabbing}.player-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 6px 16px #0006}.card-image-wrap[_ngcontent-%COMP%]{width:100%;aspect-ratio:200 / 260;background:var(--sbc-bg);overflow:hidden}.player-headshot[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.card-name-strip[_ngcontent-%COMP%]{background:var(--sbc-card-bg);padding:.5rem .6rem;text-align:center}.player-name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:600;line-height:1.2}.card-stats[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:.35rem .5rem;font-size:.75rem;color:var(--sbc-text-muted);border-top:1px solid rgba(255,255,255,.06)}.card-stats-row[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.5rem}.card-stats-row-sub[_ngcontent-%COMP%]{font-size:.7rem}.game-nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1.5rem;margin-top:auto;padding-top:.5rem}.nav-btn[_ngcontent-%COMP%]{color:var(--sbc-text-muted)!important}.nav-btn[_ngcontent-%COMP%]:not(:disabled):hover{color:var(--sbc-text)!important}.nav-btn[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.nav-indicator[_ngcontent-%COMP%]{font-size:.9rem;color:var(--sbc-text-muted)}.filter-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:0;padding-top:.75rem}.mpg-control-btn[_ngcontent-%COMP%]{min-width:2.25rem;height:2.25rem;padding:0!important;border:1px solid var(--sbc-text-muted);background:var(--sbc-surface)!important;color:var(--sbc-text)!important;font-size:1.25rem;font-weight:600;line-height:1;border-radius:0}.mpg-control-minus[_ngcontent-%COMP%]{border-right:none;border-radius:8px 0 0 8px}.mpg-control-plus[_ngcontent-%COMP%]{border-left:none;border-radius:0 8px 8px 0}.mpg-control-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:#ffffff14!important}.mpg-control-btn[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.mpg-control-value[_ngcontent-%COMP%]{min-width:5rem;height:2.25rem;padding:0 .75rem;border:1px solid var(--sbc-text-muted);background:var(--sbc-surface);font-family:inherit;font-size:.95rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background-color .15s ease,color .15s ease,border-color .15s ease}.mpg-control-value-enabled[_ngcontent-%COMP%]{background:#2563eb!important;border-color:#2563eb!important;color:#fff!important}.mpg-control-value-enabled[_ngcontent-%COMP%]:hover{background:#1d4ed8!important;border-color:#1d4ed8!important;color:#fff!important}.mpg-control-value-disabled[_ngcontent-%COMP%]{background:#b91c1c!important;border-color:#b91c1c!important;color:#fff!important}.mpg-control-value-disabled[_ngcontent-%COMP%]:hover{background:#991b1b!important;border-color:#991b1b!important;color:#fff!important}@media (max-width: 640px){.drop-zones[_ngcontent-%COMP%]{grid-template-columns:1fr}.players-row[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}"]})}};export{Ve as GameComponent};
