import{e as X,n as S,bj as it,i as s,I as st,Q as ee,K as me,L as lt,a9 as M,g as V,_ as dt,F as ct,an as bt,bk as ft,ab as ut,bl as vt,c as n,d as c,B as x,b as A,a as pt,u as ht,f as xe,bm as Y,w as q,ac as J,G as gt,H as B,h as mt,av as be,bn as fe,bo as xt,a7 as N,ap as W,W as yt,bp as wt,bq as Ct,X as Rt}from"./index-5e2885e4.js";import{A as zt}from"./Add-c7f60439.js";import{u as ue}from"./use-compitable-248ca92d.js";import{u as St}from"./use-merged-state-d459d80e.js";import{t as Q}from"./throttle-c6377e77.js";import{c as $t,a as ve,o as Pt}from"./cssr-7767064c.js";const Tt=ve(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ve("&::-webkit-scrollbar",{width:0,height:0})]),Wt=X({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=S(null);function r(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const b=it();return Tt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:$t,ssr:b}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...l){var g;(g=e.value)===null||g===void 0||g.scrollTo(...l)}})},render(){return s("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),ae=st("n-tabs"),ye={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ot=X({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ye,setup(e){ee(()=>{e.label!==void 0&&M("tab-pane","`label` is deprecated, please use `tab` instead.")});const r=me(ae,null);return r||lt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return s("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),_t=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},vt(ye,["displayDirective"])),te=X({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:_t,setup(e){const{mergedClsPrefixRef:r,valueRef:b,typeRef:y,closableRef:l,tabStyleRef:g,tabChangeIdRef:u,onBeforeLeaveRef:w,triggerRef:m,handleAdd:C,activateTab:z,handleClose:p}=me(ae);return{trigger:m,mergedClosable:V(()=>{if(e.internalAddable)return!1;const{closable:f}=e;return f===void 0?l.value:f}),style:g,clsPrefix:r,value:b,type:y,handleClose(f){f.stopPropagation(),!e.disabled&&p(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){C();return}const{name:f}=e,R=++u.id;if(f!==b.value){const{value:h}=w;h?Promise.resolve(h(e.name,b.value)).then(L=>{L&&u.id===R&&z(f)}):z(f)}}}},render(){const{internalAddable:e,clsPrefix:r,name:b,disabled:y,label:l,tab:g,value:u,mergedClosable:w,style:m,trigger:C,$slots:{default:z}}=this,p=l??g;return s("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?s("div",{class:`${r}-tabs-tab-pad`}):null,s("div",Object.assign({key:b,"data-name":b,"data-disabled":y?!0:void 0},dt({class:[`${r}-tabs-tab`,u===b&&`${r}-tabs-tab--active`,y&&`${r}-tabs-tab--disabled`,w&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`],onClick:C==="click"?this.activateTab:void 0,onMouseenter:C==="hover"?this.activateTab:void 0,style:e?void 0:m},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),s("span",{class:`${r}-tabs-tab__label`},e?s(ct,null,s("div",{class:`${r}-tabs-tab__height-placeholder`}," "),s(bt,{clsPrefix:r},{default:()=>s(zt,null)})):z?z():typeof p=="object"?p:ft(p??b)),w&&this.type==="card"?s(ut,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:y}):null))}}),At=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[c("segment-type",[n("tabs-rail",[x("&.transition-disabled","color: red;",[n("tabs-tab",`
 transition: none;
 `)])])]),c("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),c("right",`
 flex-direction: row-reverse;
 `,[n("tabs-bar",`
 left: 0;
 `)]),c("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[c("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),x("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),c("flex",[n("tabs-nav",{width:"100%"},[n("tabs-wrapper",{width:"100%"},[n("tabs-tab",{marginRight:0})])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[c("shadow-before",[x("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),c("shadow-after",[x("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[x("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),x("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),x("&::before",`
 left: 0;
 `),x("&::after",`
 right: 0;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[c("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[x("&.transition-disabled",`
 transition: none;
 `),c("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[x("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),x("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),x("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),x("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),x("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),c("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[x("&:hover",{color:"var(--n-tab-text-color-hover)"}),c("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),c("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[c("line-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),c("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[c("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),pt("disabled",[x("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),c("closable","padding-right: 6px;"),c("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),c("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),c("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),n("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),c("left",[n("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),c("right",[n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),c("bottom",[n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),Lt=Object.assign(Object.assign({},xe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),It=X({name:"Tabs",props:Lt,setup(e,{slots:r}){var b,y,l,g;ee(()=>{e.labelSize!==void 0&&M("tabs","`label-size` is deprecated, please use `size` instead."),e.activeName!==void 0&&M("tabs","`active-name` is deprecated, please use `value` instead."),e.onActiveNameChange!==void 0&&M("tabs","`on-active-name-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:u,inlineThemeDisabled:w}=ht(e),m=xe("Tabs","-tabs",At,xt,e,u),C=S(null),z=S(null),p=S(null),f=S(null),R=S(null),h=S(!0),L=S(!0),$=ue(e,["labelSize","size"]),F=ue(e,["activeName","value"]),d=S((y=(b=F.value)!==null&&b!==void 0?b:e.defaultValue)!==null&&y!==void 0?y:r.default?(g=(l=Y(r.default())[0])===null||l===void 0?void 0:l.props)===null||g===void 0?void 0:g.name:null),v=St(F,d),j={id:0},we=V(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});q(v,()=>{j.id=0,H(),re()});function U(){var t;const{value:a}=v;return a===null?null:(t=C.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function Ce(t){if(e.type==="card")return;const{value:a}=z;if(a&&t){const o=`${u.value}-tabs-bar--disabled`,{barWidth:i,placement:T}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),["top","bottom"].includes(T)){if(ne(["top","maxHeight","height"]),typeof i=="number"&&t.offsetWidth>=i){const P=Math.floor((t.offsetWidth-i)/2)+t.offsetLeft;a.style.left=`${P}px`,a.style.maxWidth=`${i}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(ne(["left","maxWidth","width"]),typeof i=="number"&&t.offsetHeight>=i){const P=Math.floor((t.offsetHeight-i)/2)+t.offsetTop;a.style.top=`${P}px`,a.style.maxHeight=`${i}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function ne(t){const{value:a}=z;if(a)for(const o of t)a.style[o]=""}function H(){if(e.type==="card")return;const t=U();t&&Ce(t)}function re(t){var a;const o=(a=R.value)===null||a===void 0?void 0:a.$el;if(!o)return;const i=U();if(!i)return;const{scrollLeft:T,offsetWidth:P}=o,{offsetLeft:E,offsetWidth:D}=i;T>E?o.scrollTo({top:0,left:E,behavior:"smooth"}):E+D>T+P&&o.scrollTo({top:0,left:E+D-P,behavior:"smooth"})}const O=S(null);let G=0,_=null;function Re(t){const a=O.value;if(a){G=t.getBoundingClientRect().height;const o=`${G}px`,i=()=>{a.style.height=o,a.style.maxHeight=o};_?(i(),_(),_=null):_=i}}function ze(t){const a=O.value;if(a){const o=t.getBoundingClientRect().height,i=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(G,o)}px`};_?(_(),_=null,i()):_=i}}function Se(){const t=O.value;t&&(t.style.maxHeight="",t.style.height="")}const oe={value:[]},ie=S("next");function $e(t){const a=v.value;let o="next";for(const i of oe.value){if(i===a)break;if(i===t){o="prev";break}}ie.value=o,Pe(t)}function Pe(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":i}=e;a&&N(a,t),o&&N(o,t),i&&N(i,t),d.value=t}function Te(t){const{onClose:a}=e;a&&N(a,t)}function se(){const{value:t}=z;if(!t)return;const a="transition-disabled";t.classList.add(a),H(),t.classList.remove(a)}let le=0;function We(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||le===t.contentRect.width)return;le=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&se(),o!=="segment"&&K((a=R.value)===null||a===void 0?void 0:a.$el)}const _e=Q(We,64);q([()=>e.justifyContent,()=>e.size],()=>{J(()=>{const{type:t}=e;(t==="line"||t==="bar")&&se()})});const I=S(!1);function Ae(t){var a;const{target:o,contentRect:{width:i}}=t,T=o.parentElement.offsetWidth;if(!I.value)T<i&&(I.value=!0);else{const{value:P}=f;if(!P)return;T-i>P.$el.offsetWidth&&(I.value=!1)}K((a=R.value)===null||a===void 0?void 0:a.$el)}const Le=Q(Ae,64);function Be(){const{onAdd:t}=e;t&&t(),J(()=>{const a=U(),{value:o}=R;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function K(t){if(!t)return;const{scrollLeft:a,scrollWidth:o,offsetWidth:i}=t;h.value=a<=0,L.value=a+i>=o}const je=Q(t=>{K(t.target)},64);gt(ae,{triggerRef:B(e,"trigger"),tabStyleRef:B(e,"tabStyle"),paneClassRef:B(e,"paneClass"),paneStyleRef:B(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:B(e,"type"),closableRef:B(e,"closable"),valueRef:v,tabChangeIdRef:j,onBeforeLeaveRef:B(e,"onBeforeLeave"),activateTab:$e,handleClose:Te,handleAdd:Be}),Pt(()=>{H(),re()}),ee(()=>{const{value:t}=p;if(!t||["left","right"].includes(e.placement))return;const{value:a}=u,o=`${a}-tabs-nav-scroll-wrapper--shadow-before`,i=`${a}-tabs-nav-scroll-wrapper--shadow-after`;h.value?t.classList.remove(o):t.classList.add(o),L.value?t.classList.remove(i):t.classList.add(i)});const de=S(null);q(v,()=>{if(e.type==="segment"){const t=de.value;t&&J(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const ke={syncBarPosition:()=>{H()}},ce=V(()=>{const{value:t}=$,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],i=`${t}${o}`,{self:{barColor:T,closeIconColor:P,closeIconColorHover:E,closeIconColorPressed:D,tabColor:Ee,tabBorderColor:Fe,paneTextColor:He,tabFontWeight:Oe,tabBorderRadius:Ie,tabFontWeightActive:De,colorSegment:Ne,fontWeightStrong:Me,tabColorSegment:Ve,closeSize:Xe,closeIconSize:Ue,closeColorHover:Ge,closeColorPressed:Ke,closeBorderRadius:Ye,[W("panePadding",t)]:qe,[W("tabPadding",i)]:Je,[W("tabPaddingVertical",i)]:Qe,[W("tabGap",i)]:Ze,[W("tabTextColor",a)]:et,[W("tabTextColorActive",a)]:tt,[W("tabTextColorHover",a)]:at,[W("tabTextColorDisabled",a)]:nt,[W("tabFontSize",t)]:rt},common:{cubicBezierEaseInOut:ot}}=m.value;return{"--n-bezier":ot,"--n-color-segment":Ne,"--n-bar-color":T,"--n-tab-font-size":rt,"--n-tab-text-color":et,"--n-tab-text-color-active":tt,"--n-tab-text-color-disabled":nt,"--n-tab-text-color-hover":at,"--n-pane-text-color":He,"--n-tab-border-color":Fe,"--n-tab-border-radius":Ie,"--n-close-size":Xe,"--n-close-icon-size":Ue,"--n-close-color-hover":Ge,"--n-close-color-pressed":Ke,"--n-close-border-radius":Ye,"--n-close-icon-color":P,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":D,"--n-tab-color":Ee,"--n-tab-font-weight":Oe,"--n-tab-font-weight-active":De,"--n-tab-padding":Je,"--n-tab-padding-vertical":Qe,"--n-tab-gap":Ze,"--n-pane-padding":qe,"--n-font-weight-strong":Me,"--n-tab-color-segment":Ve}}),k=w?mt("tabs",V(()=>`${$.value[0]}${e.type[0]}`),ce,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:v,renderedNames:new Set,tabsRailElRef:de,tabsPaneWrapperRef:O,tabsElRef:C,barElRef:z,addTabInstRef:f,xScrollInstRef:R,scrollWrapperElRef:p,addTabFixed:I,tabWrapperStyle:we,handleNavResize:_e,mergedSize:$,handleScroll:je,handleTabsResize:Le,cssVars:w?void 0:ce,themeClass:k==null?void 0:k.themeClass,animationDirection:ie,renderNameListRef:oe,onAnimationBeforeLeave:Re,onAnimationEnter:ze,onAnimationAfterEnter:Se,onRender:k==null?void 0:k.onRender},ke)},render(){const{mergedClsPrefix:e,type:r,placement:b,addTabFixed:y,addable:l,mergedSize:g,renderNameListRef:u,onRender:w,$slots:{default:m,prefix:C,suffix:z}}=this;w==null||w();const p=m?Y(m()).filter(d=>d.type.__TAB_PANE__===!0):[],f=m?Y(m()).filter(d=>d.type.__TAB__===!0):[],R=!f.length,h=r==="card",L=r==="segment",$=!h&&!L&&this.justifyContent;u.value=[];const F=()=>{const d=s("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},$?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),R?p.map((v,j)=>(u.value.push(v.props.name),Z(s(te,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:j!==0&&(!$||$==="center"||$==="start"||$==="end")}),v.children?{default:v.children.tab}:void 0)))):f.map((v,j)=>(u.value.push(v.props.name),Z(j!==0&&!$?ge(v):v))),!y&&l&&h?he(l,(R?p.length:f.length)!==0):null,$?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return s("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},h&&l?s(fe,{onResize:this.handleTabsResize},{default:()=>d}):d,h?s("div",{class:`${e}-tabs-pad`}):null,h?null:s("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return s("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${g}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},s("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},be(C,d=>d&&s("div",{class:`${e}-tabs-nav__prefix`},d)),L?s("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},R?p.map((d,v)=>(u.value.push(d.props.name),s(te,Object.assign({},d.props,{internalCreatedByPane:!0,internalLeftPadded:v!==0}),d.children?{default:d.children.tab}:void 0))):f.map((d,v)=>(u.value.push(d.props.name),v===0?d:ge(d)))):s(fe,{onResize:this.handleNavResize},{default:()=>s("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(b)?s(Wt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:F}):s("div",{class:`${e}-tabs-nav-y-scroll`},F()))}),y&&l&&h?he(l,!0):null,be(z,d=>d&&s("div",{class:`${e}-tabs-nav__suffix`},d))),R&&(this.animated?s("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},pe(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):pe(p,this.mergedValue,this.renderedNames)))}});function pe(e,r,b,y,l,g,u){const w=[];return e.forEach(m=>{const{name:C,displayDirective:z,"display-directive":p}=m.props,f=h=>z===h||p===h,R=r===C;if(m.key!==void 0&&(m.key=C),R||f("show")||f("show:lazy")&&b.has(C)){b.has(C)||b.add(C);const h=!f("if");w.push(h?yt(m,[[Rt,R]]):m)}}),u?s(wt,{name:`${u}-transition`,onBeforeLeave:y,onEnter:l,onAfterEnter:g},{default:()=>w}):w}function he(e,r){return s(te,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function ge(e){const r=Ct(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function Z(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{It as N,Ot as a};
