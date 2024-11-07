import{e as A,n as B,K as Z,P as H,g as E,u as G,E as Ie,Q,w as ee,R as Te,S as ze,G as P,T as $e,U as Ne,V as Ce,W as L,X as W,i as b,Y as ke,Z as te,_ as Be,$ as ae,a0 as Ee,B as l,a1 as U,c as z,d as k,b as R,a2 as Fe,a3 as Me,f as oe,H as X,a4 as De,h as Oe,a5 as xe,a6 as Re,a7 as D,a8 as _e,a9 as j,aa as je,L as Pe,ab as Ae,v as ne,m as Ue,r as Le,p as N,ac as He,q as Y,s as We}from"./index-5e2885e4.js";import{e as Xe,f as Ye}from"./index-2d941bf7.js";import{_ as O,l as qe}from"./lodash-11edae60.js";import Ve from"./node-model-04f38f3f.js";import Ke from"./configuration-form-6b272f26.js";import{u as q}from"./use-merged-state-d459d80e.js";import{f as V}from"./format-length-c9d165c6.js";import{N as Je,a as K}from"./Tabs-11369ba4.js";import{N as Ze}from"./Space-d49acb7b.js";import"./service-d19f0ccd.js";import"./column-width-config-b963bc25.js";import"./split-modal-885ce1d9.js";import"./FormItem-7f69a4d7.js";import"./get-53588a31.js";import"./Input-1bbd5e95.js";import"./use-locale-ba0171d5.js";import"./Suffix-9f9d022f.js";import"./Form-6e61837b.js";import"./EditOutlined-0243f050.js";import"./Dropdown-8ccd025e.js";import"./Tooltip-5624ecb6.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./cssr-7767064c.js";import"./use-compitable-248ca92d.js";import"./next-frame-once-7035a838.js";import"./Icon-b461a67a.js";import"./create-bbda4d67.js";import"./DeleteOutlined-099c0ef1.js";import"./CopyOutlined-9b4275f0.js";import"./composables-ca7679f2.js";import"./Grid-7fd51304.js";import"./Empty-dd1b91e9.js";import"./DataTable-bb49b036.js";import"./Checkbox-2d4945a3.js";import"./RadioGroup-92bc79b0.js";import"./Select-94feec49.js";import"./use-form-structure-b872a9e7.js";import"./index-4e4366ce.js";import"./Add-c7f60439.js";import"./throttle-c6377e77.js";import"./debounce-19376a56.js";const Ge=A({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const a=B(!!e.show),o=B(null),g=Z(H);let i=0,w="",d=null;const S=B(!1),v=B(!1),T=E(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:h,mergedRtlRef:C}=G(e),x=Ie("Drawer",C,h),t=s=>{v.value=!0,i=T.value?s.clientY:s.clientX,w=document.body.style.cursor,document.body.style.cursor=T.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",r),document.body.addEventListener("mouseleave",f),document.body.addEventListener("mouseup",c)},u=()=>{d!==null&&(window.clearTimeout(d),d=null),v.value?S.value=!0:d=window.setTimeout(()=>{S.value=!0},300)},p=()=>{d!==null&&(window.clearTimeout(d),d=null),S.value=!1},{doUpdateHeight:y,doUpdateWidth:I}=g,r=s=>{var $,_;if(v.value)if(T.value){let F=(($=o.value)===null||$===void 0?void 0:$.offsetHeight)||0;const M=i-s.clientY;F+=e.placement==="bottom"?M:-M,y(F),i=s.clientY}else{let F=((_=o.value)===null||_===void 0?void 0:_.offsetWidth)||0;const M=i-s.clientX;F+=e.placement==="right"?M:-M,I(F),i=s.clientX}},c=()=>{v.value&&(i=0,v.value=!1,document.body.style.cursor=w,document.body.removeEventListener("mousemove",r),document.body.removeEventListener("mouseup",c),document.body.removeEventListener("mouseleave",f))},f=c;Q(()=>{e.show&&(a.value=!0)}),ee(()=>e.show,s=>{s||c()}),Te(()=>{c()});const n=E(()=>{const{show:s}=e,$=[[W,s]];return e.showMask||$.push([Ee,e.onClickoutside,void 0,{capture:!0}]),$});function m(){var s;a.value=!1,(s=e.onAfterLeave)===null||s===void 0||s.call(e)}return ze(E(()=>e.blockScroll&&a.value)),P($e,o),P(Ne,null),P(Ce,null),{bodyRef:o,rtlEnabled:x,mergedClsPrefix:g.mergedClsPrefixRef,isMounted:g.isMountedRef,mergedTheme:g.mergedThemeRef,displayed:a,transitionName:E(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:m,bodyDirectives:n,handleMousedownResizeTrigger:t,handleMouseenterResizeTrigger:u,handleMouseleaveResizeTrigger:p,isDragging:v,isHoverOnResizeTrigger:S}},render(){const{$slots:e,mergedClsPrefix:a}=this;return this.displayDirective==="show"||this.displayed||this.show?L(b("div",{role:"none"},b(ke,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>b(te,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>L(b("div",Be(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${a}-drawer`,this.rtlEnabled&&`${a}-drawer--rtl`,`${a}-drawer--${this.placement}-placement`,this.isDragging&&`${a}-drawer--unselectable`,this.nativeScrollbar&&`${a}-drawer--native-scrollbar`]}),[this.resizable?b("div",{class:[`${a}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${a}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?b("div",{class:`${a}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):b(ae,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${a}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[W,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Qe,cubicBezierEaseOut:et}=U;function tt({duration:e="0.3s",leaveDuration:a="0.2s",name:o="slide-in-from-right"}={}){return[l(`&.${o}-transition-leave-active`,{transition:`transform ${a} ${Qe}`}),l(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${et}`}),l(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),l(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),l(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),l(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:at,cubicBezierEaseOut:ot}=U;function nt({duration:e="0.3s",leaveDuration:a="0.2s",name:o="slide-in-from-left"}={}){return[l(`&.${o}-transition-leave-active`,{transition:`transform ${a} ${at}`}),l(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${ot}`}),l(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),l(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),l(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),l(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:rt,cubicBezierEaseOut:it}=U;function st({duration:e="0.3s",leaveDuration:a="0.2s",name:o="slide-in-from-top"}={}){return[l(`&.${o}-transition-leave-active`,{transition:`transform ${a} ${rt}`}),l(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${it}`}),l(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),l(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),l(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),l(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:lt,cubicBezierEaseOut:dt}=U;function ct({duration:e="0.3s",leaveDuration:a="0.2s",name:o="slide-in-from-bottom"}={}){return[l(`&.${o}-transition-leave-active`,{transition:`transform ${a} ${lt}`}),l(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${dt}`}),l(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),l(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),l(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),l(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const ut=l([z("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[tt(),nt(),st(),ct(),k("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),k("native-scrollbar",[z("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),R("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[k("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),z("drawer-content-wrapper",`
 box-sizing: border-box;
 `),z("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[k("native-scrollbar",[z("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),z("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),z("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),z("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[R("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),z("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),k("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[R("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),k("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[R("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),k("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[R("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),k("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[R("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),l("body",[l(">",[z("drawer-container",{position:"fixed"})])]),z("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[l("> *",{pointerEvents:"all"})]),z("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[k("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Fe({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),ft=Object.assign(Object.assign({},oe.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),mt=A({name:"Drawer",inheritAttrs:!1,props:ft,setup(e){Q(()=>{e.drawerStyle!==void 0&&j("drawer","`drawer-style` is deprecated, please use `style` instead."),e.drawerClass!==void 0&&j("drawer","`drawer-class` is deprecated, please use `class` instead."),e.target!==void 0&&j("drawer","`target` is deprecated, please use `to` instead."),e.onShow!==void 0&&j("drawer","`on-show` is deprecated, please use `on-update:show` instead."),e.onHide!==void 0&&j("drawer","`on-hide` is deprecated, please use `on-update:show` instead.")});const{mergedClsPrefixRef:a,namespaceRef:o,inlineThemeDisabled:g}=G(e),i=Me(),w=oe("Drawer","-drawer",ut,je,e,a),d=B(e.defaultWidth),S=B(e.defaultHeight),v=q(X(e,"width"),d),T=q(X(e,"height"),S),h=E(()=>{const{placement:n}=e;return n==="top"||n==="bottom"?"":V(v.value)}),C=E(()=>{const{placement:n}=e;return n==="left"||n==="right"?"":V(T.value)}),x=n=>{const{onUpdateWidth:m,"onUpdate:width":s}=e;m&&D(m,n),s&&D(s,n),d.value=n},t=n=>{const{onUpdateHeight:m,"onUpdate:width":s}=e;m&&D(m,n),s&&D(s,n),S.value=n},u=E(()=>[{width:h.value,height:C.value},e.drawerStyle||""]);function p(n){const{onMaskClick:m,maskClosable:s}=e;s&&r(!1),m&&m(n)}const y=De();function I(n){var m;(m=e.onEsc)===null||m===void 0||m.call(e),e.show&&e.closeOnEsc&&Re(n)&&!y.value&&r(!1)}function r(n){const{onHide:m,onUpdateShow:s,"onUpdate:show":$}=e;s&&D(s,n),$&&D($,n),m&&!n&&D(m,n)}P(H,{isMountedRef:i,mergedThemeRef:w,mergedClsPrefixRef:a,doUpdateShow:r,doUpdateHeight:t,doUpdateWidth:x});const c=E(()=>{const{common:{cubicBezierEaseInOut:n,cubicBezierEaseIn:m,cubicBezierEaseOut:s},self:{color:$,textColor:_,boxShadow:F,lineHeight:M,headerPadding:re,footerPadding:ie,bodyPadding:se,titleFontSize:le,titleTextColor:de,titleFontWeight:ce,headerBorderBottom:ue,footerBorderTop:fe,closeIconColor:me,closeIconColorHover:he,closeIconColorPressed:be,closeColorHover:ge,closeColorPressed:pe,closeIconSize:ve,closeSize:ye,closeBorderRadius:we,resizableTriggerColorHover:Se}}=w.value;return{"--n-line-height":M,"--n-color":$,"--n-text-color":_,"--n-box-shadow":F,"--n-bezier":n,"--n-bezier-out":s,"--n-bezier-in":m,"--n-header-padding":re,"--n-body-padding":se,"--n-footer-padding":ie,"--n-title-text-color":de,"--n-title-font-size":le,"--n-title-font-weight":ce,"--n-header-border-bottom":ue,"--n-footer-border-top":fe,"--n-close-icon-color":me,"--n-close-icon-color-hover":he,"--n-close-icon-color-pressed":be,"--n-close-size":ye,"--n-close-color-hover":ge,"--n-close-color-pressed":pe,"--n-close-icon-size":ve,"--n-close-border-radius":we,"--n-resize-trigger-color-hover":Se}}),f=g?Oe("drawer",void 0,c,e):void 0;return{mergedClsPrefix:a,namespace:o,mergedBodyStyle:u,handleMaskClick:p,handleEsc:I,mergedTheme:w,cssVars:g?void 0:c,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender,isMounted:i}},render(){const{mergedClsPrefix:e}=this;return b(xe,{to:this.to,show:this.show},{default:()=>{var a;return(a=this.onRender)===null||a===void 0||a.call(this),L(b("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?b(te,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?b("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,b(Ge,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[_e,{zIndex:this.zIndex,enabled:this.show}]])}})}}),ht={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},bt=A({name:"DrawerContent",props:ht,setup(){const e=Z(H,null);e||Pe("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:a}=e;function o(){a(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:a,nativeScrollbar:o,mergedTheme:g,bodyStyle:i,bodyContentStyle:w,headerStyle:d,footerStyle:S,scrollbarProps:v,closable:T,$slots:h}=this;return b("div",{role:"none",class:[`${a}-drawer-content`,o&&`${a}-drawer-content--native-scrollbar`]},h.header||e||T?b("div",{class:`${a}-drawer-header`,style:d,role:"none"},b("div",{class:`${a}-drawer-header__main`,role:"heading","aria-level":"1"},h.header!==void 0?h.header():e),T&&b(Ae,{onClick:this.handleCloseClick,clsPrefix:a,class:`${a}-drawer-header__close`,absolute:!0})):null,o?b("div",{class:`${a}-drawer-body`,style:i,role:"none"},b("div",{class:`${a}-drawer-body-content-wrapper`,style:w,role:"none"},h)):b(ae,Object.assign({themeOverrides:g.peerOverrides.Scrollbar,theme:g.peers.Scrollbar},v,{class:`${a}-drawer-body`,contentClass:`${a}-drawer-body-content-wrapper`,contentStyle:w}),h),h.footer?b("div",{class:`${a}-drawer-footer`,style:S,role:"none"},h.footer()):null)}});function gt(e,a){const o=B(),{t:g}=ne.useI18n(),i=B(),w=Ue(),d=Le({nodeSettingModelFormRef:B(),saving:!1,loading:!1,width:"60%",tab:"configuration"}),S=t=>{var y;const u={pluginId:e.nodeInfo.pluginId,name:t.name,type:e.nodeInfo.type.toUpperCase(),connectorType:e.nodeInfo.type==="transform"?e.nodeInfo.connectorType:null},p=qe.omit(t,["name","datasourceInstanceId","sceneMode","kind","kinds","database","tableName","datasourceInstanceName","pluginName","datasourceName","columnSelectable","excludeKind","includeKind"]);return t.kinds.length&&(p[t.kind?"exclude_kinds":"include_kinds"]=JSON.stringify(t.kinds),p[t.kind?"include_kinds":"exclude_kinds"]=""),(t.database||t.tableName)&&(u.tableOption={databases:[],tables:[]},u.tableOption.databases=typeof t.database=="string"?[t.database]:Array.isArray(t.database)?t.database:[],u.tableOption.tables=typeof t.tableName=="string"?[t.tableName]:Array.isArray(t.tableName)?t.tableName:[]),i.value&&(u.selectTableFields=(y=i.value)==null?void 0:y.getSelectFields()),t.datasourceInstanceId&&(u.dataSourceId=t.datasourceInstanceId),t.sceneMode&&(u.sceneMode=t.sceneMode),u.config=JSON.stringify(p),u},v=t=>t[0].tableInfos.map(u=>({fields:u.fields,tableName:u.tableName,database:t[0].database})),T=async()=>{var t;if(d.saving)return!1;if((e.nodeInfo.type==="transform"||e.nodeInfo.type==="sink")&&!e.nodeInfo.predecessorsNodeId)return window.$message.warning(g("project.synchronization_definition.node_prev_check_tips")),!1;d.saving=!0;try{if(!await o.value.validate())return x("configuration"),d.saving=!1,!1;const p=o.value.getValues();let y;if(e.nodeInfo.type==="source"){const r=i.value.getOutputSchema();if(p.format&&p.format==="COMPATIBLE_DEBEZIUM_JSON")y=p.tableName.map(c=>({database:p.database,tableName:c,fields:[{name:"topic",type:"string"},{name:"key",type:"string"},{name:"value",type:"string"}]}));else if(r.allTableData.length)if(p.sceneMode==="SINGLE_TABLE"){const c=r.allTableData;r.outputTableData.length&&(c[0].tableInfos[0].fields=r.outputTableData),y=v(c)}else y=v(r.allTableData);else return window.$message.warning(g("project.synchronization_definition.check_model"),{duration:0,closable:!0}),d.saving=!1,!1}if(e.nodeInfo.type==="transform"&&e.nodeInfo.predecessorsNodeId){const r=i.value.getOutputSchema();if(r.allTableData.length)if(e.nodeInfo.connectorType==="FieldMapper"||e.nodeInfo.connectorType==="MultiFieldSplit"||e.nodeInfo.connectorType==="Copy"){const c=r.allTableData;r.outputTableData.length&&(c[0].tableInfos[0].fields=r.outputTableData),y=v(c)}else y=v(r.allTableData);else return window.$message.warning(g("project.synchronization_definition.check_model"),{duration:0,closable:!0}),d.saving=!1,!1}const I={};if(e.nodeInfo.connectorType==="FieldMapper"){const r=i.value.getOutputSchema();I.changeOrders=r.outputTableData.map((n,m)=>({sourceFieldName:n.original_field,index:m})),I.renameFields=r.outputTableData.filter(n=>n.name!==n.original_field).map(n=>({sourceFieldName:n.original_field,targetName:n.name}));const c=r.outputTableData.map(n=>({sourceFieldName:n.original_field})),f=r.inputTableData.map(n=>({sourceFieldName:n.name}));I.deleteFields=O.xorWith(c,f,O.isEqual)}else if(e.nodeInfo.connectorType==="MultiFieldSplit"){const c=i.value.getOutputSchema().outputTableData.filter(f=>f.separator);I.splits=O.uniqWith(c.map(f=>({sourceFieldName:f.original_field,separator:f.separator,outputFields:O.groupBy(c,"separator")[f.separator].map(n=>n.name)})),O.isEqual)}else if(e.nodeInfo.connectorType==="Copy"){const c=i.value.getOutputSchema().outputTableData.filter(f=>f.copyTimes===-1);I.copyList=c.map(f=>({sourceFieldName:f.original_field,targetFieldName:f.name}))}else if(e.nodeInfo.connectorType==="Sql"){const r=i.value.getOutputSchema(),c=r.allTableData[0].tableInfos;I.sql={sourceFieldName:((t=r.outputTableData[0])==null?void 0:t.name)||null,query:p.query},y=[{database:c[0].database,tableName:c[0].tableName,fields:r.outputTableData}]}return await Xe(w.params.jobDefinitionCode,{...S(p),outputSchema:y,transformOptions:I}),a.emit("confirmModal",{...S(p),outputSchema:y,transformOptions:I}),d.saving=!1,d.tab="configuration",d.width="60%",!0}catch{return d.saving=!1,!1}},h=t=>{const u={tables:t.tableName?typeof t.tableName=="string"?[t.tableName]:t.tableName:[],database:t.database?typeof t.database=="string"?t.database:t.database[0]:[],datasourceName:t.datasourceName,datasourceInstanceId:t.datasourceInstanceId,columnSelectable:t.columnSelectable,outputSchema:e.nodeInfo.outputSchema,sceneMode:t.sceneMode?t.sceneMode:"",transformOptions:e.nodeInfo.transformOptions};t.format&&t.format==="COMPATIBLE_DEBEZIUM_JSON"?u.format=t.format:u.format="DEFAULT",i.value.initData(u)},C=async t=>{if(!i.value)return;const u=O.isArray(t.tableName)?t.tableName[0]:t.tableName,p=O.isArray(t.database)?t.database[0]:t.database;if(!u)return;const I=(await Ye(t.datasourceInstanceId,p,u)).map(r=>r.name);i.value.setSelectFields(I)},x=t=>{d.width=t==="configuration"?"60%":"80%",d.tab=t,t==="model"&&i.value&&h(o.value.getValues())};return{state:d,configurationFormRef:o,modelRef:i,onSave:T,handleTab:x,handleChangeTable:C}}function J(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!We(e)}const pt={show:{type:Boolean,default:!1},nodeInfo:{type:Object,default:{}}},ia=A({name:"SettingNodeModal",props:pt,emits:["cancelModal","confirmModal"],setup(e,a){const{t:o}=ne.useI18n(),{state:g,configurationFormRef:i,modelRef:w,onSave:d,handleTab:S,handleChangeTable:v}=gt(e,a),T=()=>{g.tab="configuration",g.width="60%",a.emit("cancelModal",e.show)};return ee(()=>e.show,async()=>{var h;await He(),e.show&&i.value&&await i.value.setValues(e.nodeInfo),e.show&&w.value&&w.value.setSelectFields(((h=e.nodeInfo.selectTableFields)==null?void 0:h.tableFields)||[])}),()=>N(mt,{show:e.show,width:g.width,zIndex:1e3},{default:()=>[N(bt,null,{default:()=>N(Je,{onUpdateValue:S,value:g.tab},{default:()=>[N(K,{name:"configuration",tab:o("project.synchronization_definition.configuration"),displayDirective:"show"},{default:()=>[N(Ke,{nodeType:e.nodeInfo.type,nodeId:e.nodeInfo.pluginId,transformType:e.nodeInfo.connectorType,ref:i,onTableNameChange:v},null)]}),N(K,{name:"model",tab:o("project.synchronization_definition.model"),displayDirective:"show"},{default:()=>[N(Ve,{ref:w,type:e.nodeInfo.type,transformType:e.nodeInfo.connectorType,predecessorsNodeId:e.nodeInfo.predecessorsNodeId,currentNodeId:e.nodeInfo.pluginId,schemaError:e.nodeInfo.schemaError,refForm:i},null)]})]}),footer:()=>{let h,C;return N(Ze,null,{default:()=>[N(Y,{onClick:T},J(h=o("project.synchronization_definition.cancel"))?h:{default:()=>[h]}),N(Y,{onClick:d,type:"primary"},J(C=o("project.synchronization_definition.confirm"))?C:{default:()=>[C]})]})}})]})}});export{ia as default};
