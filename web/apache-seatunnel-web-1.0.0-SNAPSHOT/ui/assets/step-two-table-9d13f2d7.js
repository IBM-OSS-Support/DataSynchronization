import{B as o,c as h,d as p,a as Z,C as ee,D as le,e as C,u as re,f as k,E as oe,g as N,h as te,i as ae,cT as de,ap as g,v as V,H as ne,p as e,x as f,q as v,W as R,X as E,n as w,o as ie,s as se}from"./index-5e2885e4.js";import{s as c}from"./index.module-fde20b4e.js";import{E as ue}from"./EditOutlined-0243f050.js";import{N as ce,D as be}from"./DeleteOutlined-099c0ef1.js";import{N as m}from"./text-4764a0ef.js";import{N as P}from"./Space-d49acb7b.js";import{N as x}from"./Tooltip-5624ecb6.js";import{N as T}from"./Icon-b461a67a.js";import{N as pe}from"./Empty-dd1b91e9.js";import{N as b}from"./FormItem-7f69a4d7.js";import{N as y}from"./Input-1bbd5e95.js";import{N as _}from"./Select-94feec49.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./get-53588a31.js";import"./cssr-7767064c.js";import"./format-length-c9d165c6.js";import"./use-merged-state-d459d80e.js";import"./use-compitable-248ca92d.js";import"./next-frame-once-7035a838.js";import"./use-locale-ba0171d5.js";import"./Suffix-9f9d022f.js";import"./create-bbda4d67.js";const fe=o([h("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),p("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),p("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),p("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),p("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),Z("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),ee(h("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),le(h("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),me=Object.assign(Object.assign({},k.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),ve=C({name:"Table",props:me,setup(l){const{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedRtlRef:d}=re(l),u=k("Table","-table",fe,de,l,r),n=oe("Table",d,r),s=N(()=>{const{size:t}=l,{self:{borderColor:B,tdColor:S,tdColorModal:L,tdColorPopover:M,thColor:O,thColorModal:U,thColorPopover:$,thTextColor:j,tdTextColor:I,borderRadius:D,thFontWeight:K,lineHeight:A,borderColorModal:H,borderColorPopover:F,tdColorStriped:W,tdColorStripedModal:q,tdColorStripedPopover:X,[g("fontSize",t)]:G,[g("tdPadding",t)]:J,[g("thPadding",t)]:Q},common:{cubicBezierEaseInOut:Y}}=u.value;return{"--n-bezier":Y,"--n-td-color":S,"--n-td-color-modal":L,"--n-td-color-popover":M,"--n-td-text-color":I,"--n-border-color":B,"--n-border-color-modal":H,"--n-border-color-popover":F,"--n-border-radius":D,"--n-font-size":G,"--n-th-color":O,"--n-th-color-modal":U,"--n-th-color-popover":$,"--n-th-font-weight":K,"--n-th-text-color":j,"--n-line-height":A,"--n-td-padding":J,"--n-th-padding":Q,"--n-td-color-striped":W,"--n-td-color-striped-modal":q,"--n-td-color-striped-popover":X}}),i=a?te("table",N(()=>l.size[0]),s,l):void 0;return{rtlEnabled:n,mergedClsPrefix:r,cssVars:a?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var l;const{mergedClsPrefix:r}=this;return(l=this.onRender)===null||l===void 0||l.call(this),ae("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});function z(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!se(l)}const he=C({name:"EditRow",props:{row:{type:Object,default:{}},plain:{type:Boolean,default:!1},fieldTypes:{type:Array,default:[]}},emits:["updateValue","delete"],setup(l,{emit:r}){const{t:a}=V.useI18n(),d=w(),u=w(),n=(s,i)=>{r("updateValue",s,i)};return ie(()=>{d.value.focus()}),()=>{let s,i;return e("tr",null,[e("td",null,[e(b,{showLabel:!1,feedback:l.row.fieldName?"":a("virtual_tables.field_name_tips"),"validation-status":l.row.fieldName?"":"error"},{default:()=>[e(y,{autofocus:!0,value:l.row.fieldName,clearable:!0,onUpdateValue:t=>void n("fieldName",t),ref:d},null)]})]),e("td",null,[R(e(b,{showLabel:!1},{default:()=>[e(_,{ref:u,value:l.row.fieldType,options:l.fieldTypes.map(t=>({label:t,value:t})),filterable:!0,onUpdateValue:t=>void n("fieldType",t)},null)]}),[[E,l.row.isEdit]])]),e("td",null,[e(b,{showLabel:!1},{default:()=>[e(_,{value:l.row.nullable,options:[{value:1,label:a("virtual_tables.yes")},{value:0,label:a("virtual_tables.no")}],onUpdateValue:t=>void n("nullable",t)},null)]})]),e("td",null,[e(b,{showLabel:!1},{default:()=>[e(_,{value:l.row.primaryKey,options:[{value:1,label:a("virtual_tables.yes")},{value:0,label:a("virtual_tables.no")}],onUpdateValue:t=>void n("primaryKey",t)},null)]})]),e("td",null,[e(b,{showLabel:!1},{default:()=>[e(y,{value:l.row.fieldComment,clearable:!0,onUpdateValue:t=>void n("fieldComment",t)},null)]})]),e("td",null,[e(b,{showLabel:!1},{default:()=>[e(y,{value:l.row.defaultValue,clearable:!0,onUpdateValue:t=>void n("defaultValue",t)},null)]})]),!l.plain&&e("td",null,[e(b,{showLabel:!1},{default:()=>[e(P,{align:"start"},{default:()=>[e(v,{size:"small",onClick:()=>void n("isEdit",!1)},z(s=a("virtual_tables.cancel"))?s:{default:()=>[s]}),e(v,{type:"primary",size:"small",onClick:()=>{if(!l.row.fieldName){d.value.focus();return}if(!l.row.fieldType){u.value.focus();return}n("isEdit",!1)}},z(i=a("virtual_tables.confirm"))?i:{default:()=>[i]})]})]})])])}}}),De=C({name:"StepTwoTable",props:{list:{type:Array,default:[]},plain:{type:Boolean,default:!1},fieldTypes:{type:Array,default:[]}},setup(l){const{t:r}=V.useI18n(),a=ne(l,"list");return()=>e(ve,{striped:!0,class:c["step-two-table"]},{default:()=>[e("thead",null,[e("th",null,[e(m,{type:"error"},{default:()=>[f("*")]}),r("virtual_tables.field_name")]),e("th",{class:c["table-cell-center"]},[e(m,{type:"error"},{default:()=>[f("*")]}),r("virtual_tables.field_type")]),e("th",{class:c["table-cell-center"]},[e(m,{type:"error"},{default:()=>[f("*")]}),r("virtual_tables.is_null")]),e("th",{class:c["table-cell-center"]},[e(m,{type:"error"},{default:()=>[f("*")]}),r("virtual_tables.is_primary_key")]),e("th",null,[r("virtual_tables.description")]),e("th",null,[r("virtual_tables.default_value")]),!l.plain&&e("th",null,[r("virtual_tables.operation")])]),e("tbody",null,[a.value.map((d,u)=>d.isEdit&&!l.plain?e(he,{key:d.key,row:d,plain:l.plain,fieldTypes:l.fieldTypes,onUpdateValue:(n,s)=>{a.value[u][n]=s},class:c[d.isEdit?"edit-row":"plain-row"]},null):e("tr",null,[e("td",null,[e("span",null,[d.fieldName])]),e("td",{class:c["table-cell-center"]},[e("span",null,[d.fieldType])]),e("td",{class:c["table-cell-center"]},[e("span",null,[d.nullable?r("virtual_tables.yes"):r("virtual_tables.no")])]),e("td",{class:c["table-cell-center"]},[e("span",null,[d.primaryKey?r("virtual_tables.yes"):r("virtual_tables.no")])]),e("td",null,[e("span",null,[d.fieldComment])]),e("td",null,[e("span",null,[d.defaultValue])]),!l.plain&&e("td",null,[e(P,{align:"start"},{default:()=>[e(x,null,{trigger:()=>e(v,{type:"primary",circle:!0,size:"small",onClick:()=>{a.value[u].isEdit=!0}},{default:()=>[e(T,null,{default:()=>[e(ue,null,null)]})]}),default:()=>r("virtual_tables.edit")}),e(x,null,{trigger:()=>e(ce,{onPositiveClick:()=>{a.value.splice(u,1)}},{trigger:()=>e(v,{type:"error",circle:!0,size:"small"},{default:()=>[e(T,null,{default:()=>[e(be,null,null)]})]}),default:()=>r("virtual_tables.delete_confirm")}),default:()=>r("virtual_tables.delete")})]})])])),R(e("tr",null,[e("td",{colspan:6},[e(pe,null,null)])]),[[E,!a.value.length]])])]})}});export{De as default};
