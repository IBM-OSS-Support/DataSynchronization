import{e as I,i as l,c as u,d as z,f as D,u as ae,g as C,h as ce,b as a,B as b,an as Ie,K as B,bz as xe,n as H,H as Z,cR as Fe,G as U,$ as je,a7 as $,I as se,bk as V,F as Ve,am as ne,cU as De,b_ as oe,bZ as de,Q as ie,a9 as j,a as W,cV as Ue,cW as qe,ar as J,as as ee,at as Y,p as y,x as Ye,v as ue,r as Ge,k as me,m as ve,w as Re,t as We,q as Xe,O as Qe,cX as ye,o as Ze,cY as Je}from"./index-5e2885e4.js";import{N as F}from"./Space-d49acb7b.js";import{C as eo,a as Ne,N as X}from"./Dropdown-8ccd025e.js";import{p as ke,l as Pe,b as oo,c as Ae,N as Ce,a as ze}from"./LayoutContent-f65dcc9c.js";import{N as to}from"./Tooltip-5624ecb6.js";import{c as ro}from"./create-bbda4d67.js";import{u as le}from"./use-merged-state-d459d80e.js";import{u as no}from"./use-compitable-248ca92d.js";import{g as io}from"./index-f1112f4d.js";import{u as Te}from"./service-d19f0ccd.js";import{S as lo}from"./SettingOutlined-d17049cc.js";import{N as te}from"./Icon-b461a67a.js";import{f as re}from"./format-length-c9d165c6.js";import{u as ao}from"./use-message-88af69a6.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./get-53588a31.js";import"./cssr-7767064c.js";import"./next-frame-once-7035a838.js";const co=I({name:"ChevronDownFilled",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),so=u("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[z("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),z("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),uo={position:ke,inverted:Boolean,bordered:{type:Boolean,default:!1}},mo=I({name:"LayoutHeader",props:Object.assign(Object.assign({},D.props),uo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ae(e),i=D("Layout","-layout-header",so,Pe,e,t),c=C(()=>{const{common:{cubicBezierEaseInOut:h},self:m}=i.value,d={"--n-bezier":h};return e.inverted?(d["--n-color"]=m.headerColorInverted,d["--n-text-color"]=m.textColorInverted,d["--n-border-color"]=m.headerBorderColorInverted):(d["--n-color"]=m.headerColor,d["--n-text-color"]=m.textColor,d["--n-border-color"]=m.headerBorderColor),d}),s=r?ce("layout-header",C(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:c,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),vo=u("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[z("bordered",[a("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),a("left-placement",[z("bordered",[a("border",`
 right: 0;
 `)])]),z("right-placement",`
 justify-content: flex-start;
 `,[z("bordered",[a("border",`
 left: 0;
 `)]),z("collapsed",[u("layout-toggle-button",[u("base-icon",`
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",[b("&:hover",[a("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),u("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[u("base-icon",`
 transform: rotate(0);
 `)]),u("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[b("&:hover",[a("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),z("collapsed",[u("layout-toggle-bar",[b("&:hover",[a("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),u("layout-toggle-button",[u("base-icon",`
 transform: rotate(0);
 `)])]),u("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[u("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[a("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),a("bottom",`
 position: absolute;
 top: 34px;
 `),b("&:hover",[a("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),a("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),b("&:hover",[a("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),a("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),u("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),z("show-content",[u("layout-sider-scroll-container",{opacity:1})]),z("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ho=I({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},l(Ie,{clsPrefix:e},{default:()=>l(eo,null)}))}}),po=I({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},l("div",{class:`${e}-layout-toggle-bar__top`}),l("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),fo={position:ke,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},go=I({name:"LayoutSider",props:Object.assign(Object.assign({},D.props),fo),setup(e){const t=B(oo);t?t.hasSider||xe("layout-sider","You are putting `n-layout-sider` in a `n-layout` but haven't set `has-sider` on the `n-layout`."):xe("layout-sider","Layout sider is not allowed to be put outside layout.");const r=H(null),i=H(null),c=C(()=>re(d.value?e.collapsedWidth:e.width)),s=C(()=>e.collapseMode!=="transform"?{}:{minWidth:re(e.width)}),h=C(()=>t?t.siderPlacement:"left"),m=H(e.defaultCollapsed),d=le(Z(e,"collapsed"),m);function k(S,x){if(e.nativeScrollbar){const{value:w}=r;w&&(x===void 0?w.scrollTo(S):w.scrollTo(S,x))}else{const{value:w}=i;w&&w.scrollTo(S,x)}}function O(){const{"onUpdate:collapsed":S,onUpdateCollapsed:x,onExpand:w,onCollapse:p}=e,{value:g}=d;x&&$(x,!g),S&&$(S,!g),m.value=!g,g?w&&$(w):p&&$(p)}let R=0,f=0;const A=S=>{var x;const w=S.target;R=w.scrollLeft,f=w.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,S)};Fe(()=>{if(e.nativeScrollbar){const S=r.value;S&&(S.scrollTop=f,S.scrollLeft=R)}}),U(Ae,{collapsedRef:d,collapseModeRef:Z(e,"collapseMode")});const{mergedClsPrefixRef:T,inlineThemeDisabled:P}=ae(e),_=D("Layout","-layout-sider",vo,Pe,e,T);function E(S){var x,w;S.propertyName==="max-width"&&(d.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const q={scrollTo:k},L=C(()=>{const{common:{cubicBezierEaseInOut:S},self:x}=_.value,{siderToggleButtonColor:w,siderToggleButtonBorder:p,siderToggleBarColor:g,siderToggleBarColorHover:o}=x,v={"--n-bezier":S,"--n-toggle-button-color":w,"--n-toggle-button-border":p,"--n-toggle-bar-color":g,"--n-toggle-bar-color-hover":o};return e.inverted?(v["--n-color"]=x.siderColorInverted,v["--n-text-color"]=x.textColorInverted,v["--n-border-color"]=x.siderBorderColorInverted,v["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,v.__invertScrollbar=x.__invertScrollbar):(v["--n-color"]=x.siderColor,v["--n-text-color"]=x.textColor,v["--n-border-color"]=x.siderBorderColor,v["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),v}),M=P?ce("layout-sider",C(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:i,mergedClsPrefix:T,mergedTheme:_,styleMaxWidth:c,mergedCollapsed:d,scrollContainerStyle:s,siderPlacement:h,handleNativeElScroll:A,handleTransitionend:E,handleTriggerClick:O,inlineThemeDisabled:P,cssVars:L,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender},q)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:re(this.width)}]},this.nativeScrollbar?l("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):l(je,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?l(po,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):l(ho,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?l("div",{class:`${t}-layout-sider__border`}):null)}}),G=se("n-menu"),he=se("n-submenu"),pe=se("n-menu-item-group"),Q=8;function fe(e){const t=B(G),{props:r,mergedCollapsedRef:i}=t,c=B(he,null),s=B(pe,null),h=C(()=>r.mode==="horizontal"),m=C(()=>h.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=C(()=>{var f;return Math.max((f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize,r.iconSize)}),k=C(()=>{var f;return!h.value&&e.root&&i.value&&(f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize}),O=C(()=>{if(h.value)return;const{collapsedWidth:f,indent:A,rootIndent:T}=r,{root:P,isGroup:_}=e,E=T===void 0?A:T;if(P)return i.value?f/2-d.value/2:E;if(s)return A/2+s.paddingLeftRef.value;if(c)return(_?A/2:A)+c.paddingLeftRef.value}),R=C(()=>{const{collapsedWidth:f,indent:A,rootIndent:T}=r,{value:P}=d,{root:_}=e;return h.value||!_||!i.value?Q:(T===void 0?A:T)+P+Q-(f+P)/2});return{dropdownPlacement:m,activeIconSize:k,maxIconSize:d,paddingLeft:O,iconMarginRight:R,NMenu:t,NSubmenu:c}}const ge={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},He=Object.assign(Object.assign({},ge),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),bo=I({name:"MenuOptionGroup",props:He,setup(e){U(he,null);const t=fe(e);U(pe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:r,props:i}=B(G);return function(){const{value:c}=r,s=t.paddingLeft.value,{nodeProps:h}=i,m=h==null?void 0:h(e.tmNode.rawNode);return l("div",{class:`${c}-menu-item-group`,role:"group"},l("div",Object.assign({},m,{class:[`${c}-menu-item-group-title`,m==null?void 0:m.class],style:[(m==null?void 0:m.style)||"",s!==void 0?`padding-left: ${s}px;`:""]}),V(e.title),e.extra?l(Ve,null," ",V(e.extra)):null),l("div",null,e.tmNodes.map(d=>be(d,i))))}}}),_e=I({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=B(G);return{menuProps:t,style:C(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:C(()=>{const{maxIconSize:r,activeIconSize:i,iconMarginRight:c}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${i}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:r,renderLabel:i,renderExtra:c,expandIcon:s}}=this,h=r?r(t.rawNode):V(this.icon);return l("div",{onClick:m=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},h&&l("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[h]),l("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(t.rawNode):V(this.title),this.extra||c?l("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(t.rawNode):V(this.extra)):null),this.showArrow?l(Ie,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>s?s(t.rawNode):l(co,null)}):null)}}),Oe=Object.assign(Object.assign({},ge),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),xo=I({name:"Submenu",props:Oe,setup(e){const t=fe(e),{NMenu:r,NSubmenu:i}=t,{props:c,mergedCollapsedRef:s,mergedThemeRef:h}=r,m=C(()=>{const{disabled:f}=e;return i!=null&&i.mergedDisabledRef.value||c.disabled?!0:f}),d=H(!1);U(he,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:m}),U(pe,null);function k(){const{onClick:f}=e;f&&f()}function O(){m.value||(s.value||r.toggleExpand(e.internalKey),k())}function R(f){d.value=f}return{menuProps:c,mergedTheme:h,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:d,paddingLeft:t.paddingLeft,mergedDisabled:m,mergedValue:r.mergedValueRef,childActive:ne(()=>r.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>c.mode==="horizontal"?!1:s.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!m.value&&(c.mode==="horizontal"||s.value)),handlePopoverShowChange:R,handleClick:O}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:r,renderLabel:i}}=this,c=()=>{const{isHorizontal:h,paddingLeft:m,collapsed:d,mergedDisabled:k,maxIconSize:O,activeIconSize:R,title:f,childActive:A,icon:T,handleClick:P,menuProps:{nodeProps:_},dropdownShow:E,iconMarginRight:q,tmNode:L,mergedClsPrefix:M}=this,S=_==null?void 0:_(L.rawNode);return l("div",Object.assign({},S,{class:[`${M}-menu-item`,S==null?void 0:S.class],role:"menuitem"}),l(_e,{tmNode:L,paddingLeft:m,collapsed:d,disabled:k,iconMarginRight:q,maxIconSize:O,activeIconSize:R,title:f,extra:this.extra,showArrow:!h,childActive:A,clsPrefix:M,icon:T,hover:E,onClick:P}))},s=()=>l(De,null,{default:()=>{const{tmNodes:h,collapsed:m}=this;return m?null:l("div",{class:`${t}-submenu-children`,role:"menu"},h.map(d=>be(d,this.menuProps)))}});return this.root?l(Ne,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:i}),{default:()=>l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),this.isHorizontal?null:s())}):l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),s())}}),Me=Object.assign(Object.assign({},ge),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),yo=I({name:"MenuOption",props:Me,setup(e){const t=fe(e),{NSubmenu:r,NMenu:i}=t,{props:c,mergedClsPrefixRef:s,mergedCollapsedRef:h}=i,m=r?r.mergedDisabledRef:{value:!1},d=C(()=>m.value||e.disabled);function k(R){const{onClick:f}=e;f&&f(R)}function O(R){d.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),k(R))}return{mergedClsPrefix:s,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:c,dropdownEnabled:ne(()=>e.root&&h.value&&c.mode!=="horizontal"&&!d.value),selected:ne(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:O}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:r,menuProps:{renderLabel:i,nodeProps:c}}=this,s=c==null?void 0:c(r.rawNode);return l("div",Object.assign({},s,{role:"menuitem",class:[`${e}-menu-item`,s==null?void 0:s.class]}),l(to,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(r.rawNode):V(this.title),trigger:()=>l(_e,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Co=I({name:"MenuDivider",setup(){const e=B(G),{mergedClsPrefixRef:t,isHorizontalRef:r}=e;return()=>r.value?null:l("div",{class:`${t.value}-menu-divider`})}}),zo=de(He),wo=de(Me),So=de(Oe);function $e(e){return e.type==="divider"||e.type==="render"}function Io(e){return e.type==="divider"}function be(e,t){const{rawNode:r}=e,{show:i}=r;if(i===!1)return null;if($e(r))return Io(r)?l(Co,Object.assign({key:e.key},r.props)):null;const{labelField:c}=t,{key:s,level:h,isGroup:m}=e,d=Object.assign(Object.assign({},r),{title:r.title||r[c],extra:r.titleExtra||r.extra,key:s,internalKey:s,level:h,root:h===0,isGroup:m});return e.children?e.isGroup?l(bo,oe(d,zo,{tmNode:e,tmNodes:e.children,key:s})):l(xo,oe(d,So,{key:s,rawNodes:r[t.childrenField],tmNodes:e.children,tmNode:e})):l(yo,oe(d,wo,{key:s,tmNode:e}))}function Ro(e){ie(()=>{e.items&&j("menu","`items` is deprecated, please use `options` instead."),e.onOpenNamesChange&&j("menu","`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.onSelect&&j("menu","`on-select` is deprecated, please use `on-update:value` instead."),e.onExpandedNamesChange&&j("menu","`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.expandedNames&&j("menu","`expanded-names` is deprecated, please use `expanded-keys` instead."),e.defaultExpandedNames&&j("menu","`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.")})}const we=[b("&::before","background-color: var(--n-item-color-hover);"),a("arrow",`
 color: var(--n-arrow-color-hover);
 `),a("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[b("a",`
 color: var(--n-item-text-color-hover);
 `),a("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Se=[a("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),a("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],No=b([u("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[u("submenu","margin: 0;"),u("menu-item","margin: 0;"),u("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[b("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),u("menu-item-content",[z("selected",[a("icon","color: var(--n-item-icon-color-active-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-horizontal);"),a("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),a("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),a("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),W("disabled",[W("selected, child-active",[b("&:focus-within",Se)]),z("selected",[K(null,[a("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-hover-horizontal);"),a("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),z("child-active",[K(null,[a("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),a("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",Se)]),u("menu-item-content-header",[b("a","color: var(--n-item-text-color-horizontal);")])])]),z("collapsed",[u("menu-item-content",[z("selected",[b("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),u("menu-item-content-header","opacity: 0;"),a("arrow","opacity: 0;"),a("icon","color: var(--n-item-icon-color-collapsed);")])]),u("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),u("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[b("> *","z-index: 1;"),b("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[a("arrow","transform: rotate(0);")]),z("selected",[b("&::before","background-color: var(--n-item-color-active);"),a("arrow","color: var(--n-arrow-color-active);"),a("icon","color: var(--n-item-icon-color-active);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[b("a","color: var(--n-item-text-color-active);"),a("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[b("a",`
 color: var(--n-item-text-color-child-active);
 `),a("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),a("arrow",`
 color: var(--n-arrow-color-child-active);
 `),a("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),W("disabled",[W("selected, child-active",[b("&:focus-within",we)]),z("selected",[K(null,[a("arrow","color: var(--n-arrow-color-active-hover);"),a("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[b("a","color: var(--n-item-text-color-active-hover);"),a("extra","color: var(--n-item-text-color-active-hover);")])])]),z("child-active",[K(null,[a("arrow","color: var(--n-arrow-color-child-active-hover);"),a("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[b("a","color: var(--n-item-text-color-child-active-hover);"),a("extra","color: var(--n-item-text-color-child-active-hover);")])])]),z("selected",[K(null,[b("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,we)]),a("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),a("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),u("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[b("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[b("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),a("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),u("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[u("menu-item-content",`
 height: var(--n-item-height);
 `),u("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ue({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),u("menu-tooltip",[b("a",`
 color: inherit;
 text-decoration: none;
 `)]),u("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function K(e,t){return[z("hover",e,t),b("&:hover",e,t)]}const ko=Object.assign(Object.assign({},D.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Ee=I({name:"Menu",props:ko,setup(e){Ro(e);const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ae(e),i=D("Menu","-menu",No,qe,e,t),c=B(Ae,null),s=C(()=>{var p;const{collapsed:g}=e;if(g!==void 0)return g;if(c){const{collapseModeRef:o,collapsedRef:v}=c;if(o.value==="width")return(p=v.value)!==null&&p!==void 0?p:!1}return!1}),h=C(()=>{const{keyField:p,childrenField:g,disabledField:o}=e;return ro(e.items||e.options,{getIgnored(v){return $e(v)},getChildren(v){return v[g]},getDisabled(v){return v[o]},getKey(v){var N;return(N=v[p])!==null&&N!==void 0?N:v.name}})}),m=C(()=>new Set(h.value.treeNodes.map(p=>p.key))),{watchProps:d}=e,k=H(null);d!=null&&d.includes("defaultValue")?ie(()=>{k.value=e.defaultValue}):k.value=e.defaultValue;const O=Z(e,"value"),R=le(O,k),f=H([]),A=()=>{f.value=e.defaultExpandAll?h.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||h.value.getPath(R.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?ie(A):A();const T=no(e,["expandedNames","expandedKeys"]),P=le(T,f),_=C(()=>h.value.treeNodes),E=C(()=>h.value.getPath(R.value).keyPath);U(G,{props:e,mergedCollapsedRef:s,mergedThemeRef:i,mergedValueRef:R,mergedExpandedKeysRef:P,activePathRef:E,mergedClsPrefixRef:t,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:Z(e,"inverted"),doSelect:q,toggleExpand:M});function q(p,g){const{"onUpdate:value":o,onUpdateValue:v,onSelect:N}=e;v&&$(v,p,g),o&&$(o,p,g),N&&$(N,p,g),k.value=p}function L(p){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:o,onExpandedNamesChange:v,onOpenNamesChange:N}=e;g&&$(g,p),o&&$(o,p),v&&$(v,p),N&&$(N,p),f.value=p}function M(p){const g=Array.from(P.value),o=g.findIndex(v=>v===p);if(~o)g.splice(o,1);else{if(e.accordion&&m.value.has(p)){const v=g.findIndex(N=>m.value.has(N));v>-1&&g.splice(v,1)}g.push(p)}L(g)}const S=p=>{const g=h.value.getPath(p??R.value,{includeSelf:!1}).keyPath;if(!g.length)return;const o=Array.from(P.value),v=new Set([...o,...g]);e.accordion&&m.value.forEach(N=>{v.has(N)&&!g.includes(N)&&v.delete(N)}),L(Array.from(v))},x=C(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:g},self:o}=i.value,{borderRadius:v,borderColorHorizontal:N,fontSize:Le,itemHeight:Be,dividerColor:Ke}=o,n={"--n-divider-color":Ke,"--n-bezier":g,"--n-font-size":Le,"--n-border-color-horizontal":N,"--n-border-radius":v,"--n-item-height":Be};return p?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),w=r?ce("menu",C(()=>e.inverted?"a":"b"),x,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:T,uncontrolledExpanededKeys:f,mergedExpandedKeys:P,uncontrolledValue:k,mergedValue:R,activePath:E,tmNodes:_,mergedTheme:i,mergedCollapsed:s,cssVars:r?void 0:x,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,showOption:S}},render(){const{mergedClsPrefix:e,mode:t,themeClass:r,onRender:i}=this;return i==null||i(),l("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(c=>be(c,this.$props)))}}),Po={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ao=Y("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",fill:"currentColor"},null,-1),To=[Ao],Ho=I({name:"DownOutlined",render:function(t,r){return J(),ee("svg",Po,To)}}),_o={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Oo=Y("path",{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8c-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9a353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8c47.9 0 94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c7.9 7.9 15.3 16.1 22.4 24.5c3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82C271.7 82.6 79.6 277.1 82 516.4C84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7c3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z",fill:"currentColor"},null,-1),Mo=[Oo],$o=I({name:"LogoutOutlined",render:function(t,r){return J(),ee("svg",_o,Mo)}}),Eo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Lo=Y("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",fill:"currentColor"},null,-1),Bo=Y("path",{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7c-21.2 8.1-39.2 22.3-52.1 40.9c-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5c.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0a40 40 0 1 0-80 0z",fill:"currentColor"},null,-1),Ko=[Lo,Bo],Fo=I({name:"QuestionCircleOutlined",render:function(t,r){return J(),ee("svg",Eo,Ko)}}),jo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Vo=Y("path",{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",fill:"currentColor"},null,-1),Do=[Vo],Uo=I({name:"UserOutlined",render:function(t,r){return J(),ee("svg",jo,Do)}}),qo=I({setup(){},render(){return y(F,{justify:"start",align:"center",class:"h-16 w-48 ml-12"},{default:()=>[y("h2",{class:"text-2xl font-bold"},[Ye("SeaTunnel")])]})}});function Yo(){const{t:e}=ue.useI18n();return{state:Ge({menuOptions:[{label:()=>l(X,null,{default:()=>e("menu.tasks")}),key:"tasks"},{label:()=>l(X,null,{default:()=>e("menu.datasource")}),key:"datasource"},{label:()=>l(X,null,{default:()=>e("menu.virtual_tables")}),key:"virtual-tables"},{label:()=>l(X,null,{default:()=>e("menu.user_manage")}),key:"user-manage"}]})}}const Go=I({setup(){const{state:e}=Yo(),t=me(),r=ve(),i=s=>{t.push({path:`/${s}`})},c=H(r.meta.activeMenu);return Re(()=>r.path,()=>{c.value=r.meta.activeMenu}),{...We(e),handleMenuClick:i,menuKey:c}},render(){return y(F,{align:"center",class:"h-16"},{default:()=>[y(Ee,{value:this.menuKey,mode:"horizontal",options:this.menuOptions,onUpdateValue:this.handleMenuClick},null)]})}});function Wo(){const e=me(),t=Te();return{handleSelect:i=>{i==="help"?window.open("http://seatunnel.apache.org/versions/"):i==="setting"?e.push({path:"/setting"}):i==="logout"&&io().then(()=>{t.setUserInfo({}),e.push({path:"/login"})})}}}const Xo=I({setup(){const{handleSelect:e}=Wo(),{t}=ue.useI18n(),r=Te();return{t,handleSelect:e,userDetail:r,renderIcon:c=>()=>l(te,null,{default:()=>l(c)})}},render(){return y(F,{justify:"end",align:"center",class:"h-16 mr-12",style:{cursor:"pointer"}},{default:()=>[y(Ne,{trigger:"click",options:[{key:"help",label:this.t("menu.help"),icon:this.renderIcon(Fo)},{key:"setting",label:this.t("menu.setting"),icon:this.renderIcon(lo)},{key:"logout",label:this.t("menu.logout"),icon:this.renderIcon($o)}],onSelect:this.handleSelect},{default:()=>[y(Xe,{text:!0},{default:()=>[y(F,null,{default:()=>[y(te,{component:Uo},null),y("span",null,[this.userDetail.getUserInfo.name]),y(te,{component:Ho},null)]})]})]})]})}}),Qo=I({setup(){},render(){return y(F,{justify:"space-between",class:"h-16 border-gray-200"},{default:()=>[y(F,null,{default:()=>[y(qo,null,null),y(Go,null,null)]}),y(Xo,null,null)]})}}),Zo=I({name:"Sidebar",props:{sideMenuOptions:{type:Array,default:[]},sideKey:{type:String,default:""}},setup(){me();const e=H(!1),t=[""],r=ve(),{t:i}=ue.useI18n(),c=H(!1),s=Qe(),h=H(s.getTheme),m=H([{label:()=>l(ye,{to:{path:"/task/synchronization-definition"},exact:!1},{default:()=>i("menu.sync_task_definition")}),key:"synchronization-definition"},{label:()=>l(ye,{to:{path:"/task/synchronization-instance"},exact:!1},{default:()=>i("menu.sync_task_instance")}),key:"synchronization-instance"}]);return Ze(()=>{}),{collapsedRef:e,defaultExpandedKeys:t,menuStyle:h,themeStore:s,showDrop:c,sideMenuOptions:m,route:r}},render(){return y(go,{bordered:!0,nativeScrollbar:!1,"show-trigger":"bar","collapse-mode":"width",collapsed:this.collapsedRef,onCollapse:()=>this.collapsedRef=!0,onExpand:()=>this.collapsedRef=!1,width:196},{default:()=>[y(Ee,{class:"tab-vertical",value:this.$props.sideKey,options:this.sideMenuOptions,defaultExpandedKeys:this.defaultExpandedKeys},null)]})}}),bt=I({setup(){window.$message=ao();const e=ve();let t=H(!1);const r=H(e.meta.activeMenu);return Re(()=>e,()=>{var i;t.value=(i=e==null?void 0:e.meta)==null?void 0:i.showSide,r.value=e.meta.activeSide},{immediate:!0,deep:!0}),{showSide:t,menuKey:r}},render(){return y(ze,null,{default:()=>[y(mo,{bordered:!0},{default:()=>[y(Qo,null,null)]}),y(Ce,{style:{height:"calc(100vh - 65px)"}},{default:()=>[y(ze,{"has-sider":!0,position:"absolute"},{default:()=>[this.showSide&&y(Zo,{sideKey:this.menuKey},null),y(Ce,{"native-scrollbar":!1,style:"padding: 16px 22px 0px 22px",class:"p-16-22-0-22",contentStyle:"height: 100%"},{default:()=>[y(F,{vertical:!0,justify:"space-between",style:"height: 100%",size:"small"},{default:()=>[y(Je("router-view"),{key:this.$route.fullPath,class:!this.showSide&&"px-32 py-12"},null)]})]})]})]})]})}});export{bt as default};
