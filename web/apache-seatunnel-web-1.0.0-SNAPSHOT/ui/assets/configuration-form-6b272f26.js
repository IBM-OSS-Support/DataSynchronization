import{e as w,i as d,ad as we,ae as Ae,af as Ee,ag as Pe,ah as je,ai as De,aj as Ve,ak as Ue,al as Be,I as Me,K as $,q as X,am as $e,ab as qe,n as F,$ as J,an as He,H as B,g as T,c as z,d as j,b as k,B as Y,a as Ge,Q as Ke,u as Je,f as ne,ao as We,G as Qe,a3 as Xe,a9 as Z,ap as P,aq as Ye,a7 as G,v as ie,m as Ze,r as et,p,F as tt,s as rt,ac as at}from"./index-5e2885e4.js";import{u as ot,a as lt,b as nt,c as it,D as st}from"./use-form-structure-b872a9e7.js";import{l as M,_ as dt}from"./lodash-11edae60.js";import{l as ct,h as ut,i as ft,j as mt,k as bt,m as ht}from"./index-2d941bf7.js";import{u as gt,N as pt}from"./index-4e4366ce.js";import{u as vt}from"./use-locale-ba0171d5.js";import{g as St,V as yt,N as U}from"./Select-94feec49.js";import{N as se,a as Ct}from"./Checkbox-2d4945a3.js";import{N as xt}from"./Empty-dd1b91e9.js";import{N as W}from"./Input-1bbd5e95.js";import{u as Tt}from"./use-merged-state-d459d80e.js";import{N as _t,a as ee}from"./RadioGroup-92bc79b0.js";import{N as It}from"./Form-6e61837b.js";import{N as O}from"./FormItem-7f69a4d7.js";import{N as te}from"./Space-d49acb7b.js";import"./Grid-7fd51304.js";import"./next-frame-once-7035a838.js";import"./service-d19f0ccd.js";import"./use-compitable-248ca92d.js";import"./cssr-7767064c.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./get-53588a31.js";import"./format-length-c9d165c6.js";import"./Suffix-9f9d022f.js";import"./create-bbda4d67.js";const kt=w({name:"Search",render(){return d("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:"enable-background: new 0 0 512 512"},d("path",{d:`M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153
  c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z
   M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2
  c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z`}))}}),Lt=t=>{const{fontWeight:u,fontSizeLarge:l,fontSizeMedium:e,fontSizeSmall:h,heightLarge:g,heightMedium:r,borderRadius:i,cardColor:v,tableHeaderColor:m,textColor1:C,textColorDisabled:y,textColor2:L,textColor3:_,borderColor:o,hoverColor:a,closeColorHover:f,closeColorPressed:c,closeIconColor:S,closeIconColorHover:s,closeIconColorPressed:n}=t;return Object.assign(Object.assign({},Ue),{itemHeightSmall:r,itemHeightMedium:r,itemHeightLarge:g,fontSizeSmall:h,fontSizeMedium:e,fontSizeLarge:l,borderRadius:i,dividerColor:o,borderColor:o,listColor:v,headerColor:Be(v,m),titleTextColor:C,titleTextColorDisabled:y,extraTextColor:_,extraTextColorDisabled:y,itemTextColor:L,itemTextColorDisabled:y,itemColorPending:a,titleFontWeight:u,closeColorHover:f,closeColorPressed:c,closeIconColor:S,closeIconColorHover:s,closeIconColorPressed:n})},zt=we({name:"Transfer",common:Ae,peers:{Checkbox:Ee,Scrollbar:Pe,Input:je,Empty:De,Button:Ve},self:Lt}),Rt=zt,D=Me("n-transfer"),re=w({name:"TransferHeader",props:{size:{type:String,required:!0},source:Boolean,onCheckedAll:Function,onClearAll:Function,title:String},setup(t){const{targetOptionsRef:u,canNotSelectAnythingRef:l,canBeClearedRef:e,allCheckedRef:h,mergedThemeRef:g,disabledRef:r,mergedClsPrefixRef:i,srcOptionsLengthRef:v}=$(D),{localeRef:m}=vt("Transfer");return()=>{const{source:C,onClearAll:y,onCheckedAll:L}=t,{value:_}=g,{value:o}=i,{value:a}=m,f=t.size==="large"?"small":"tiny",{title:c}=t;return d("div",{class:`${o}-transfer-list-header`},c&&d("div",{class:`${o}-transfer-list-header__title`},c),C&&d(X,{class:`${o}-transfer-list-header__button`,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button,size:f,tertiary:!0,onClick:h.value?y:L,disabled:l.value||r.value},{default:()=>h.value?a.unselectAll:a.selectAll}),!C&&e.value&&d(X,{class:`${o}-transfer-list-header__button`,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button,size:f,tertiary:!0,onClick:y,disabled:r.value},{default:()=>a.clearAll}),d("div",{class:`${o}-transfer-list-header__extra`},C?a.total(v.value):a.selected(u.value.length)))}}}),ae=w({name:"NTransferListItem",props:{source:Boolean,label:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:Boolean,option:{type:Object,required:!0}},setup(t){const{targetValueSetRef:u,mergedClsPrefixRef:l,mergedThemeRef:e,handleItemCheck:h,renderSourceLabelRef:g,renderTargetLabelRef:r,showSelectedRef:i}=$(D),v=$e(()=>u.value.has(t.value));function m(){t.disabled||h(!v.value,t.value)}return{mergedClsPrefix:l,mergedTheme:e,checked:v,showSelected:i,renderSourceLabel:g,renderTargetLabel:r,handleClick:m}},render(){const{disabled:t,mergedTheme:u,mergedClsPrefix:l,label:e,checked:h,source:g,renderSourceLabel:r,renderTargetLabel:i}=this;return d("div",{class:[`${l}-transfer-list-item`,t&&`${l}-transfer-list-item--disabled`,g?`${l}-transfer-list-item--source`:`${l}-transfer-list-item--target`],onClick:g?this.handleClick:void 0},d("div",{class:`${l}-transfer-list-item__background`}),g&&this.showSelected&&d("div",{class:`${l}-transfer-list-item__checkbox`},d(se,{theme:u.peers.Checkbox,themeOverrides:u.peerOverrides.Checkbox,disabled:t,checked:h})),d("div",{class:`${l}-transfer-list-item__label`,title:St(e)},g?r?r({option:this.option}):e:i?i({option:this.option}):e),!g&&!t&&d(qe,{focusable:!1,class:`${l}-transfer-list-item__close`,clsPrefix:l,onClick:this.handleClick}))}}),oe=w({name:"TransferList",props:{virtualScroll:{type:Boolean,required:!0},itemSize:{type:Number,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,required:!0},source:Boolean},setup(){const{mergedThemeRef:t,mergedClsPrefixRef:u}=$(D),l=F(null),e=F(null);function h(){var i;(i=l.value)===null||i===void 0||i.sync()}function g(){const{value:i}=e;if(!i)return null;const{listElRef:v}=i;return v}function r(){const{value:i}=e;if(!i)return null;const{itemsElRef:v}=i;return v}return{mergedTheme:t,mergedClsPrefix:u,scrollerInstRef:l,vlInstRef:e,syncVLScroller:h,scrollContainer:g,scrollContent:r}},render(){const{mergedTheme:t,options:u}=this;if(u.length===0)return d(xt,{theme:t.peers.Empty,themeOverrides:t.peerOverrides.Empty});const{mergedClsPrefix:l,virtualScroll:e,source:h,disabled:g,syncVLScroller:r}=this;return d(J,{ref:"scrollerInstRef",theme:t.peers.Scrollbar,themeOverrides:t.peerOverrides.Scrollbar,container:e?this.scrollContainer:void 0,content:e?this.scrollContent:void 0},{default:()=>e?d(yt,{ref:"vlInstRef",style:{height:"100%"},class:`${l}-transfer-list-content`,items:this.options,itemSize:this.itemSize,showScrollbar:!1,onResize:r,onScroll:r,keyField:"value"},{default:({item:i})=>{const{source:v,disabled:m}=this;return d(ae,{source:v,key:i.value,value:i.value,disabled:i.disabled||m,label:i.label,option:i})}}):d("div",{class:`${l}-transfer-list-content`},u.map(i=>d(ae,{source:h,key:i.value,value:i.value,disabled:i.disabled||g,label:i.label,option:i})))})}}),le=w({name:"TransferFilter",props:{value:String,placeholder:String,disabled:Boolean,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:t,mergedClsPrefixRef:u}=$(D);return{mergedClsPrefix:u,mergedTheme:t}},render(){const{mergedTheme:t,mergedClsPrefix:u}=this;return d("div",{class:`${u}-transfer-filter`},d(W,{value:this.value,onUpdateValue:this.onUpdateValue,disabled:this.disabled,placeholder:this.placeholder,theme:t.peers.Input,themeOverrides:t.peerOverrides.Input,clearable:!0,size:"small"},{"clear-icon-placeholder":()=>d(He,{clsPrefix:u},{default:()=>d(kt,null)})}))}});function Nt(t){const u=F(t.defaultValue),l=Tt(B(t,"value"),u),e=T(()=>{const n=new Map;return(t.options||[]).forEach(b=>n.set(b.value,b)),n}),h=T(()=>new Set(l.value||[])),g=T(()=>{const n=e.value,b=[];return(l.value||[]).forEach(I=>{const R=n.get(I);R&&b.push(R)}),b}),r=F(""),i=F(""),v=T(()=>t.sourceFilterable||!!t.filterable),m=T(()=>{const{showSelected:n,options:b,filter:I}=t;return v.value?b.filter(R=>I(r.value,R,"source")&&(n||!h.value.has(R.value))):n?b:b.filter(R=>!h.value.has(R.value))}),C=T(()=>{if(!t.targetFilterable)return g.value;const{filter:n}=t;return g.value.filter(b=>n(i.value,b,"target"))}),y=T(()=>{const{value:n}=l;return n===null?new Set:new Set(n)}),L=T(()=>{const n=new Set(y.value);return m.value.forEach(b=>{!b.disabled&&!n.has(b.value)&&n.add(b.value)}),n}),_=T(()=>{const n=new Set(y.value);return m.value.forEach(b=>{!b.disabled&&n.has(b.value)&&n.delete(b.value)}),n}),o=T(()=>{const n=new Set(y.value);return C.value.forEach(b=>{b.disabled||n.delete(b.value)}),n}),a=T(()=>m.value.every(n=>n.disabled)),f=T(()=>{if(!m.value.length)return!1;const n=y.value;return m.value.every(b=>b.disabled||n.has(b.value))}),c=T(()=>C.value.some(n=>!n.disabled));function S(n){r.value=n??""}function s(n){i.value=n??""}return{uncontrolledValueRef:u,mergedValueRef:l,targetValueSetRef:h,valueSetForCheckAllRef:L,valueSetForUncheckAllRef:_,valueSetForClearRef:o,filteredTgtOptionsRef:C,filteredSrcOptionsRef:m,targetOptionsRef:g,canNotSelectAnythingRef:a,canBeClearedRef:c,allCheckedRef:f,srcPatternRef:r,tgtPatternRef:i,mergedSrcFilterableRef:v,handleSrcFilterUpdateValue:S,handleTgtFilterUpdateValue:s}}const Ot=z("transfer",`
 width: 100%;
 font-size: var(--n-font-size);
 height: 300px;
 display: flex;
 flex-wrap: nowrap;
 word-break: break-word;
`,[j("disabled",[z("transfer-list",[z("transfer-list-header",[k("title",`
 color: var(--n-header-text-color-disabled);
 `),k("extra",`
 color: var(--n-header-extra-text-color-disabled);
 `)])])]),z("transfer-list",`
 flex: 1;
 min-width: 0;
 height: inherit;
 display: flex;
 flex-direction: column;
 background-clip: padding-box;
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-list-color);
 `,[j("source",`
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[k("border","border-right: 1px solid var(--n-divider-color);")]),j("target",`
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[k("border","border-left: none;")]),k("border",`
 padding: 0 12px;
 border: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),z("transfer-list-header",`
 min-height: var(--n-header-height);
 box-sizing: border-box;
 display: flex;
 padding: 12px 12px 10px 12px;
 align-items: center;
 background-clip: padding-box;
 border-radius: inherit;
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;
 line-height: 1.5;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[Y("> *:not(:first-child)",`
 margin-left: 8px;
 `),k("title",`
 flex: 1;
 min-width: 0;
 line-height: 1.5;
 font-size: var(--n-header-font-size);
 font-weight: var(--n-header-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-header-text-color);
 `),k("button",`
 position: relative;
 `),k("extra",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-extra-font-size);
 margin-right: 0;
 white-space: nowrap;
 color: var(--n-header-extra-text-color);
 `)]),z("transfer-list-body",`
 flex-basis: 0;
 flex-grow: 1;
 box-sizing: border-box;
 position: relative;
 display: flex;
 flex-direction: column;
 border-radius: inherit;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 `,[z("transfer-filter",`
 padding: 4px 12px 8px 12px;
 box-sizing: border-box;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),z("transfer-list-flex-container",`
 flex: 1;
 position: relative;
 `,[z("scrollbar",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 height: unset;
 `),z("empty",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 `),z("transfer-list-content",`
 padding: 0;
 margin: 0;
 position: relative;
 `,[z("transfer-list-item",`
 padding: 0 12px;
 min-height: var(--n-item-height);
 display: flex;
 align-items: center;
 color: var(--n-item-text-color);
 position: relative;
 transition: color .3s var(--n-bezier);
 `,[k("background",`
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),k("checkbox",`
 position: relative;
 margin-right: 8px;
 `),k("close",`
 opacity: 0;
 pointer-events: none;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),k("label",`
 position: relative;
 min-width: 0;
 flex-grow: 1;
 `),j("source","cursor: pointer;"),j("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `),Ge("disabled",[Y("&:hover",[k("background","background-color: var(--n-item-color-pending);"),k("close",`
 opacity: 1;
 pointer-events: all;
 `)])])])])])])])]),Ft=Object.assign(Object.assign({},ne.props),{value:Array,defaultValue:{type:Array,default:null},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:void 0},virtualScroll:Boolean,sourceTitle:String,targetTitle:String,filterable:{type:Boolean,default:void 0},sourceFilterable:Boolean,targetFilterable:Boolean,showSelected:{type:Boolean,default:!0},sourceFilterPlaceholder:String,targetFilterPlaceholder:String,filter:{type:Function,default:(t,u)=>t?~(""+u.label).toLowerCase().indexOf((""+t).toLowerCase()):!0},size:String,renderSourceLabel:Function,renderTargetLabel:Function,renderSourceList:Function,renderTargetList:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),wt=w({name:"Transfer",props:Ft,setup(t){Ke(()=>{t.onChange!==void 0&&Z("transfer","`on-change` is deprecated, please use `on-update:value` instead."),t.filterable!==void 0&&Z("transfer","`filterable` is deprecated, please use `source-filterable` or `target-filterable` instead.")});const{mergedClsPrefixRef:u}=Je(t),l=ne("Transfer","-transfer",Ot,Rt,t,u),e=We(t),{mergedSizeRef:h,mergedDisabledRef:g}=e,r=T(()=>{const{value:x}=h,{self:{[P("itemHeight",x)]:N}}=l.value;return Ye(N)}),{uncontrolledValueRef:i,mergedValueRef:v,targetValueSetRef:m,valueSetForCheckAllRef:C,valueSetForUncheckAllRef:y,valueSetForClearRef:L,filteredTgtOptionsRef:_,filteredSrcOptionsRef:o,targetOptionsRef:a,canNotSelectAnythingRef:f,canBeClearedRef:c,allCheckedRef:S,srcPatternRef:s,tgtPatternRef:n,mergedSrcFilterableRef:b,handleSrcFilterUpdateValue:I,handleTgtFilterUpdateValue:R}=Nt(t);function A(x){const{onUpdateValue:N,"onUpdate:value":E,onChange:V}=t,{nTriggerFormInput:q,nTriggerFormChange:H}=e;N&&G(N,x),E&&G(E,x),V&&G(V,x),i.value=x,q(),H()}function de(){A([...C.value])}function ce(){A([...y.value])}function ue(){A([...L.value])}function Q(x,N){A(x?(v.value||[]).concat(N):(v.value||[]).filter(E=>E!==N))}function fe(x){A(x)}return Qe(D,{targetValueSetRef:m,mergedClsPrefixRef:u,disabledRef:g,mergedThemeRef:l,targetOptionsRef:a,canNotSelectAnythingRef:f,canBeClearedRef:c,allCheckedRef:S,srcOptionsLengthRef:T(()=>t.options.length),handleItemCheck:Q,renderSourceLabelRef:B(t,"renderSourceLabel"),renderTargetLabelRef:B(t,"renderTargetLabel"),showSelectedRef:B(t,"showSelected")}),{mergedClsPrefix:u,mergedDisabled:g,itemSize:r,isMounted:Xe(),mergedTheme:l,filteredSrcOpts:o,filteredTgtOpts:_,srcPattern:s,tgtPattern:n,mergedSize:h,mergedSrcFilterable:b,handleSrcFilterUpdateValue:I,handleTgtFilterUpdateValue:R,handleSourceCheckAll:de,handleSourceUncheckAll:ce,handleTargetClearAll:ue,handleItemCheck:Q,handleChecked:fe,cssVars:T(()=>{const{value:x}=h,{common:{cubicBezierEaseInOut:N},self:{borderRadius:E,borderColor:V,listColor:q,titleTextColor:H,titleTextColorDisabled:me,extraTextColor:be,itemTextColor:he,itemColorPending:ge,itemTextColorDisabled:pe,titleFontWeight:ve,closeColorHover:Se,closeColorPressed:ye,closeIconColor:Ce,closeIconColorHover:xe,closeIconColorPressed:Te,closeIconSize:_e,closeSize:Ie,dividerColor:ke,extraTextColorDisabled:Le,[P("extraFontSize",x)]:ze,[P("fontSize",x)]:Re,[P("titleFontSize",x)]:Ne,[P("itemHeight",x)]:Oe,[P("headerHeight",x)]:Fe}}=l.value;return{"--n-bezier":N,"--n-border-color":V,"--n-border-radius":E,"--n-extra-font-size":ze,"--n-font-size":Re,"--n-header-font-size":Ne,"--n-header-extra-text-color":be,"--n-header-extra-text-color-disabled":Le,"--n-header-font-weight":ve,"--n-header-text-color":H,"--n-header-text-color-disabled":me,"--n-item-color-pending":ge,"--n-item-height":Oe,"--n-item-text-color":he,"--n-item-text-color-disabled":pe,"--n-list-color":q,"--n-header-height":Fe,"--n-close-size":Ie,"--n-close-icon-size":_e,"--n-close-color-hover":Se,"--n-close-color-pressed":ye,"--n-close-icon-color":Ce,"--n-close-icon-color-hover":xe,"--n-close-icon-color-pressed":Te,"--n-divider-color":ke}})}},render(){const{mergedClsPrefix:t,renderSourceList:u,renderTargetList:l,mergedTheme:e,mergedSrcFilterable:h,targetFilterable:g}=this;return d("div",{class:[`${t}-transfer`,this.mergedDisabled&&`${t}-transfer--disabled`],style:this.cssVars},d("div",{class:`${t}-transfer-list ${t}-transfer-list--source`},d(re,{source:!0,title:this.sourceTitle,onCheckedAll:this.handleSourceCheckAll,onClearAll:this.handleSourceUncheckAll,size:this.mergedSize}),d("div",{class:`${t}-transfer-list-body`},h?d(le,{onUpdateValue:this.handleSrcFilterUpdateValue,value:this.srcPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,d("div",{class:`${t}-transfer-list-flex-container`},u?d(J,{theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar},{default:()=>u({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.srcPattern})}):d(oe,{source:!0,options:this.filteredSrcOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),d("div",{class:`${t}-transfer-list__border`})),d("div",{class:`${t}-transfer-list ${t}-transfer-list--target`},d(re,{onClearAll:this.handleTargetClearAll,size:this.mergedSize,title:this.targetTitle}),d("div",{class:`${t}-transfer-list-body`},g?d(le,{onUpdateValue:this.handleTgtFilterUpdateValue,value:this.tgtPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,d("div",{class:`${t}-transfer-list-flex-container`},l?d(J,{theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar},{default:()=>l({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.tgtPattern})}):d(oe,{options:this.filteredTgtOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),d("div",{class:`${t}-transfer-list__border`})))}}),At=[{label:"INSERT",value:"INSERT"},{label:"UPDATE_BEFORE",value:"UPDATE_BEFORE"},{label:"UPDATE_AFTER",value:"UPDATE_AFTER"},{label:"DELETE",value:"DELETE"}],Et=(t,u)=>{const{t:l}=ie.useI18n(),e=gt(),h=Ze(),g={name:"",datasourceInstanceId:null,datasourceInstanceName:null,sceneMode:null,database:null,tableName:null,kinds:[],kind:0,columnSelectable:!1,pluginName:"",datasourceName:"",query:""},r=et({model:M.cloneDeep(g),loading:!1,datasourceOptions:[],datasourceLoading:!1,databaseOptions:[],databaseLoading:!1,tableOptions:[],tableLoading:!1,formStructure:[],formLocales:{},formName:"",formLoading:!1,inputTableData:[],outputTableData:[],tableColumnsLoading:!1,rules:{name:{required:!0,trigger:["input","blur"],validator:(o,a)=>{if(!a)return new Error(l("project.synchronization_definition.node_name_validate"))}},datasourceInstanceId:{required:!0,trigger:["input","blur"],validator:(o,a)=>{if(!a)return new Error(l("project.synchronization_definition.source_name_validate"))}},sceneMode:{required:!0,trigger:["input","blur"],validator:(o,a)=>{if(!a)return new Error(l("project.synchronization_definition.scene_mode_validate"))}},database:{required:!0,trigger:["input","blur"],validator:(o,a)=>{if(!a)return new Error(l("project.synchronization_definition.database_validate"))}},tableName:{required:!0,trigger:["input","blur"],validator:(o,a)=>{if(!a)return new Error(l("project.synchronization_definition.table_name_validate"))}},kinds:{required:!0,trigger:["input","blur"],validator:()=>{if(r.model.kinds.length===0)return new Error(r.model.kind?l("project.synchronization_definition.exclude_kind_validate"):l("project.synchronization_definition.include_kind_validate"))}},query:{required:!0,trigger:["input","blur"],validator:(o,a)=>{if(!a)return new Error(l("project.synchronization_definition.query_validate"))}}}}),i=async o=>{if(!r.datasourceLoading){r.datasourceLoading=!0;try{const a=await ct(h.params.jobDefinitionCode,o);r.datasourceOptions=a.map(f=>{var c,S,s;return{label:f.dataSourceInstanceName,value:f.dataSourceInstanceId,pluginName:(S=(c=f.dataSourceInfo)==null?void 0:c.connectorInfo)==null?void 0:S.pluginIdentifier.pluginName,datasourceName:(s=f.dataSourceInfo)==null?void 0:s.datasourceName}})}finally{r.datasourceLoading=!1}}},v=async(o,a)=>{if(a!=null&&a.label&&(r.model.datasourceInstanceName=a.label),a!=null&&a.datasourceName&&(r.model.datasourceName=a.datasourceName,L(a.datasourceName)),a!=null&&a.pluginName&&(r.model.pluginName=a.pluginName),!r.databaseLoading){r.databaseLoading=!0;try{if(t!=="transform"){const f=await ut(a.label);r.databaseOptions=f.map(c=>({label:c,value:c}))}await y(o)}finally{r.databaseLoading=!1}}},m=async(o,a,f)=>{if(a=a||"",t==="source"||e.getDagInfo.jobType==="DATA_INTEGRATION"&&t==="sink"){if(r.tableLoading)return;if(dt.isArray(o)&&o.length===0){r.tableOptions=[];return}r.tableLoading=!0;try{const c=await ft(r.model.datasourceInstanceName||"",typeof o=="string"?o:o[0],a,f);r.tableOptions=c.map(S=>({label:S,value:S}))}finally{r.tableLoading=!1}return}},C=async()=>{try{if(r.datasourceLoading)return;r.datasourceLoading=!0;const o=await mt(h.params.jobDefinitionCode);r.datasourceOptions=o.map(a=>{var f,c,S;return{label:a.dataSourceInstanceName,value:a.dataSourceInstanceId,pluginName:(c=(f=a.dataSourceInfo)==null?void 0:f.connectorInfo)==null?void 0:c.pluginIdentifier.pluginName,datasourceName:(S=a.dataSourceInfo)==null?void 0:S.datasourceName}})}finally{r.datasourceLoading=!1}},y=async(o="")=>{if(!r.formLoading){r.formLoading=!0;try{const a={jobCode:Number(h.params.jobDefinitionCode),connectorType:t};t==="transform"&&(a.connectorName=u),t!=="transform"&&(a.dataSourceInstanceId=o);const f=await bt(a);if(f==="null")return;const c=JSON.parse(f);r.formName=c.name,c.forms=c.forms.filter(S=>!["exclude_kinds","include_kinds"].includes(S.field)),r.formLocales=c.locales,Object.assign(r.model,ot(c.forms)),Object.assign(r.rules,lt(c.forms,r.model,l)),r.formStructure=nt(c.apis?it(c.apis,c.forms):c.forms)}finally{r.formLoading=!1}}},L=async o=>{if(r.model.sceneMode!=="SINGLE_TABLE"){r.model.columnSelectable=!1;return}if(e.getColumnSelectable(o)!==void 0){r.model.columnSelectable=e.getColumnSelectable(o);return}const a=await ht(o);r.model.columnSelectable=a,e.setColumnSelectable(o,a)};return{state:r,dagStore:e,getDatasourceOptions:i,getDatabaseOptions:v,getTableOptions:m,getFormStructure:y,updateFormValues:async o=>{var a,f,c,S,s,n,b;if(!r.loading){r.loading=!0;try{if(r.model.datasourceInstanceId=o.dataSourceId,r.model.name=o.name,r.model.sceneMode=o.sceneMode,o.sceneMode==="SPLIT_TABLE"?r.model.database=((a=o.tableOption)==null?void 0:a.databases)||[]:r.model.database=(c=(f=o.tableOption)==null?void 0:f.databases)!=null&&c.length?o.tableOption.databases[0]:null,o.sceneMode&&await i(o.sceneMode),t==="sink"&&await C(),o.dataSourceId){const I=M.find(r.datasourceOptions,R=>R.value===o.dataSourceId);await v(o.dataSourceId,I)}if(t==="transform"&&await y(),(s=(S=o.tableOption)==null?void 0:S.databases)!=null&&s.length&&await m(o.tableOption.databases[0],"",r.model.sceneMode==="MULTIPLE_TABLE"?9999999:100),o.sceneMode==="MULTIPLE_TABLE"?r.model.tableName=((n=o.tableOption)==null?void 0:n.tables)||[]:r.model.tableName=(b=o.tableOption)!=null&&b.tables.length?o.tableOption.tables[0]:null,o.config){const I=JSON.parse(o.config);Object.assign(r.model,M.omit(I,["exclude_kinds","include_kinds"])),(I.exclude_kinds||I.include_kinds)&&(r.model.kind=I.exclude_kinds?1:0,r.model.kinds=JSON.parse(I.exclude_kinds||I.include_kinds))}}finally{r.loading=!1}}},getSinks:C}},Pt=(t,u)=>[{label:u("project.synchronization_definition.multi_table_sync"),value:"MULTIPLE_TABLE",disabled:t==="DATA_INTEGRATION"},{label:u("project.synchronization_definition.sub_library_and_sub_table"),value:"SPLIT_TABLE",disabled:t==="DATA_REPLICA"},{label:u("project.synchronization_definition.single_table_sync"),value:"SINGLE_TABLE",disabled:t==="DATA_REPLICA"}];function K(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!rt(t)}const dr=w({name:"ConfigurationForm",props:{nodeType:{type:String},nodeId:{type:String},transformType:{type:String}},emits:["tableNameChange"],setup(t,{expose:u,emit:l}){const{state:e,dagStore:h,getDatasourceOptions:g,getDatabaseOptions:r,getTableOptions:i,updateFormValues:v}=Et(t.nodeType,t.transformType),{t:m}=ie.useI18n(),C=F(),y=F(),L=f=>{e.model.tableName=f,l("tableNameChange",e.model)},_=F(""),o=M.debounce(f=>{e.model.database&&_.value!==f&&(i(e.model.database,f),_.value=f)},1e3),a=f=>{at(()=>{if(e.model.database){let c=e.model.sceneMode==="MULTIPLE_TABLE"?9999999:100;i(e.model.database,"",c)}})};return u({validate:async()=>{try{return await C.value.validate(),!0}catch{return!1}},getValues:()=>e.model,setValues:v}),()=>{let f,c,S;return p(pt,{show:e.loading},{default:()=>[p(It,{ref:C,model:e.model,rules:e.rules},{default:()=>[p(O,{label:m("project.synchronization_definition.node_name"),path:"name"},{default:()=>[p(W,{clearable:!0,value:e.model.name,"onUpdate:value":s=>e.model.name=s,placeholder:m("project.synchronization_definition.node_name_placeholder")},null)]}),t.nodeType==="source"&&p(O,{label:m("project.synchronization_definition.scene_mode"),path:"sceneMode"},{default:()=>[p(U,{filterable:!0,options:Pt(h.getDagInfo.jobType,m),value:e.model.sceneMode,"onUpdate:value":s=>e.model.sceneMode=s,onUpdateValue:s=>{s!==e.model.sceneMode&&(g(s),e.model.datasourceInstanceId=null,e.model.database=null,e.model.tableName=null,e.formStructure=[],e.databaseOptions=[],e.tableOptions=[])}},null)]}),t.nodeType!=="transform"&&p(O,{label:m("project.synchronization_definition.source_name"),path:"datasourceInstanceId"},{default:()=>[p(U,{filterable:!0,loading:e.datasourceLoading,options:e.datasourceOptions,value:e.model.datasourceInstanceId,"onUpdate:value":s=>e.model.datasourceInstanceId=s,onUpdateValue:(s,n)=>{s!==e.model.datasourceInstanceId&&(r(s,n),e.model.database=null,e.model.tableName=null,e.tableOptions=[])}},null)]}),t.nodeType!=="transform"&&p(O,{label:m("project.synchronization_definition.database"),path:"database"},{default:()=>[p(U,{filterable:!0,loading:e.databaseLoading,multiple:e.model.sceneMode==="SPLIT_TABLE",options:e.databaseOptions,value:e.model.database,"onUpdate:value":s=>e.model.database=s,onUpdateValue:s=>{s!==e.model.database&&(a(),e.model.tableName=null)}},null)]}),h.getDagInfo.jobType==="DATA_INTEGRATION"&&(t.nodeType==="sink"||t.nodeType==="source")&&p(O,{label:m("project.synchronization_definition.table_name"),path:"tableName"},{default:()=>[p(U,{filterable:!0,loading:e.tableLoading,options:e.tableOptions,value:e.model.tableName,"onUpdate:value":s=>e.model.tableName=s,onUpdateValue:L,onSearch:o,remote:!0,virtualScroll:!0},null)]}),e.model.sceneMode==="MULTIPLE_TABLE"&&p(O,{label:m("project.synchronization_definition.table_name"),path:"tableName"},{default:()=>[p(wt,{style:{width:"100%"},ref:y,filterable:!0,sourceTitle:m("project.synchronization_definition.table_sync"),targetTitle:m("project.synchronization_definition.selected_table"),options:e.tableOptions,value:e.model.tableName,"onUpdate:value":s=>e.model.tableName=s,onUpdateValue:L,virtualScroll:!0},null)]}),t.transformType==="FilterRowKind"&&p(tt,null,[p(O,{label:m("project.synchronization_definition.kind"),path:"kind",showFeedback:!1,showRequireMark:!0},{default:()=>[p(_t,{value:e.model.kind,"onUpdate:value":s=>e.model.kind=s,name:"model.kind"},{default:()=>[p(te,null,{default:()=>[p(ee,{value:0},K(f=m("project.synchronization_definition.include_kind"))?f:{default:()=>[f]}),p(ee,{value:1},K(c=m("project.synchronization_definition.exclude_kind"))?c:{default:()=>[c]})]})]})]}),p(O,{showLabel:!1,path:"kinds"},{default:()=>[p(Ct,{value:e.model.kinds,"onUpdate:value":s=>e.model.kinds=s},{default:()=>[p(te,null,K(S=At.map(s=>p(se,{value:s.value,label:s.label},null)))?S:{default:()=>[S]})]})]})]),t.transformType==="Sql"&&p(O,{label:m("project.synchronization_definition.sql_content_label"),path:"query"},{default:()=>[p(W,{value:e.model.query,"onUpdate:value":s=>e.model.query=s,type:"textarea",clearable:!0,placeholder:m("project.synchronization_definition.sql_content_label_placeholder")},null)]}),e.formStructure.length>0&&p(st,{model:e.model,formStructure:e.formStructure,name:e.formName,locales:e.formLocales},null)]})]})}}});export{dr as default};
