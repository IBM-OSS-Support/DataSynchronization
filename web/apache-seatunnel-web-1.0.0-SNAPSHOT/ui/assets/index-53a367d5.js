import{B as m,c as i,d as v,b as s,C as U,D as B,e as g,u as E,E as M,f as _,G as T,H,g as K,h as O,i as n,I as F,J as G,K as J,L as A,v as Q,p as e,N as p,M as t}from"./index-5e2885e4.js";import W from"./index-1c1b22ca.js";import{N as a}from"./Space-d49acb7b.js";import{N as x}from"./Switch-bdda7b10.js";import{N as f}from"./Select-94feec49.js";import"./use-merged-state-d459d80e.js";import"./use-locale-ba0171d5.js";import"./use-compitable-248ca92d.js";import"./cssr-7767064c.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./get-53588a31.js";import"./format-length-c9d165c6.js";import"./next-frame-once-7035a838.js";import"./Suffix-9f9d022f.js";import"./create-bbda4d67.js";import"./Empty-dd1b91e9.js";const X=m([i("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[v("show-divider",[i("list-item",[m("&:not(:last-child)",[s("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),v("clickable",[i("list-item",`
 cursor: pointer;
 `)]),v("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),v("hoverable",[i("list-item",`
 border-radius: var(--n-border-radius);
 `,[m("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[s("divider",`
 background-color: transparent;
 `)])])]),v("bordered, hoverable",[i("list-item",`
 padding: 12px 20px;
 `),s("header, footer",`
 padding: 12px 20px;
 `)]),s("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[m("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),i("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s("prefix",`
 margin-right: 20px;
 flex: 0;
 `),s("suffix",`
 margin-left: 20px;
 flex: 0;
 `),s("main",`
 flex: 1;
 `),s("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),U(i("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),B(i("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Y=Object.assign(Object.assign({},_.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),w=F("n-list"),b=g({name:"List",props:Y,setup(l){const{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:c}=E(l),C=M("List",c,r),z=_("List","-list",X,G,l,r);T(w,{showDividerRef:H(l,"showDivider"),mergedClsPrefixRef:r});const h=K(()=>{const{common:{cubicBezierEaseInOut:R},self:{fontSize:y,textColor:V,color:$,colorModal:j,colorPopover:k,borderColor:N,borderColorModal:S,borderColorPopover:D,borderRadius:P,colorHover:q,colorHoverModal:L,colorHoverPopover:I}}=z.value;return{"--n-font-size":y,"--n-bezier":R,"--n-text-color":V,"--n-color":$,"--n-border-radius":P,"--n-border-color":N,"--n-border-color-modal":S,"--n-border-color-popover":D,"--n-color-modal":j,"--n-color-popover":k,"--n-color-hover":q,"--n-color-hover-modal":L,"--n-color-hover-popover":I}}),d=o?O("list",void 0,h,l):void 0;return{mergedClsPrefix:r,rtlEnabled:C,cssVars:o?void 0:h,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var l;const{$slots:r,mergedClsPrefix:o,onRender:c}=this;return c==null||c(),n("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},r.header?n("div",{class:`${o}-list__header`},r.header()):null,(l=r.default)===null||l===void 0?void 0:l.call(r),r.footer?n("div",{class:`${o}-list__footer`},r.footer()):null)}}),u=g({name:"ListItem",setup(){const l=J(w,null);return l||A("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:l.showDividerRef,mergedClsPrefix:l.mergedClsPrefixRef}},render(){const{$slots:l,mergedClsPrefix:r}=this;return n("li",{class:`${r}-list-item`},l.prefix?n("div",{class:`${r}-list-item__prefix`},l.prefix()):null,l.default?n("div",{class:`${r}-list-item__main`},l):null,l.suffix?n("div",{class:`${r}-list-item__suffix`},l.suffix()):null,this.showDivider&&n("div",{class:`${r}-list-item__divider`}))}}),fe=g({name:"Setting",render(){const{t:l,locale:r}=Q.useI18n();return e(a,{vertical:!0},{default:()=>[e(p,{title:l("setting.table_setting")},{default:()=>[e(b,null,{default:()=>[e(u,null,{default:()=>[e(a,{justify:"space-between",align:"center"},{default:()=>[e("span",null,[l("setting.sequence_column")]),e(x,{value:t().getSequenceColumn,onUpdateValue:o=>{t().setSequenceColumn(o)}},null)]})]}),e(u,null,{default:()=>[e(a,{justify:"space-between",align:"center"},{default:()=>[e("span",null,[l("setting.data_unique_value")]),e(x,{value:t().getDataUniqueValue,onUpdateValue:o=>{t().setDataUniqueValue(o)}},null)]})]})]})]}),e(p,{title:l("setting.language_setting")},{default:()=>[e(b,null,{default:()=>[e(u,null,{default:()=>[e(a,{justify:"space-between",align:"center"},{default:()=>[e("span",null,[l("setting.language")]),e("div",{class:"w-56"},[e(f,{value:t().getLocales,options:[{value:"en_US",label:l("setting.english")},{value:"zh_CN",label:l("setting.chinese")}],onUpdateValue:o=>{r.value=o,t().setLocales(o)}},null)])]})]})]})]}),e(p,{title:l("setting.request_setting")},{default:()=>[e(b,null,{default:()=>[e(u,null,{default:()=>[e(a,{justify:"space-between",align:"center"},{default:()=>[e("span",null,[l("setting.request_time")]),e("div",{class:"w-56"},[e(f,{value:t().getRequestTimeValue,onUpdateValue:o=>{t().setRequestTimeValue(o)},options:[{value:3e3,label:"3000ms"},{value:6e3,label:"6000ms"},{value:1e4,label:"10000ms"},{value:2e4,label:"20000ms"},{value:3e4,label:"30000ms"}]},null)])]})]})]})]}),e(p,{title:l("setting.theme_setting")},{default:()=>[e(b,null,{default:()=>[e(u,null,{default:()=>[e(a,{justify:"space-between",align:"center"},{default:()=>[e("span",null,[l("setting.model")]),e("div",{class:"w-56"},[e(W,null,null)])]})]}),e(u,null,{default:()=>[e(a,{justify:"space-between",align:"center"},{default:()=>[e("span",null,[l("setting.fillet")]),e("div",{class:"w-56"},[e(f,{value:t().getFilletValue,onUpdateValue:o=>{t().setFilletValue(o)},options:[{value:5,label:"5px"},{value:10,label:"10px"},{value:15,label:"15px"},{value:20,label:"20px"},{value:25,label:"25px"},{value:30,label:"30px"}]},null)])]})]})]})]})]})}});export{fe as default};
