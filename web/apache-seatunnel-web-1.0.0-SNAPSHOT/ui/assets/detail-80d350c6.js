import{c as p,d as R,B as T,b as k,bO as $,a as se,e as O,u as M,E as ae,f as H,G as ie,i as d,bm as ne,I as oe,bP as le,K as ce,L as de,g as z,h as pe,av as E,ay as P,bQ as ue,an as V,bR as fe,ap as h,a7 as j,ar as me,as as ve,at as q,r as be,v as W,k as L,n as D,o as he,m as ge,p as r,N as xe,W as C,X as S,q as I,s as ye}from"./index-5e2885e4.js";import _e from"./step-one-form-20f41ce1.js";import we from"./step-two-form-e669fb4d.js";import K from"./step-two-table-9d13f2d7.js";import U from"./step-three-params-7f616a60.js";import{g as Ne,a as Te,u as ze,c as Ce}from"./index-302b296b.js";import{l as Se}from"./lodash-11edae60.js";import{s as b}from"./index.module-fde20b4e.js";import{g as Ie,N as B}from"./Space-d49acb7b.js";import{a as ke}from"./Select-94feec49.js";import{u as Oe}from"./composables-ca7679f2.js";import{N as Re,a as A}from"./BreadcrumbItem-1da720e4.js";import{N as $e}from"./text-4764a0ef.js";import{N as Pe}from"./Icon-b461a67a.js";import"./use-source-b1a7c19f.js";import"./index-569e3c49.js";import"./service-d19f0ccd.js";import"./use-table-c142822f.js";import"./Form-6e61837b.js";import"./FormItem-7f69a4d7.js";import"./format-length-c9d165c6.js";import"./get-53588a31.js";import"./Input-1bbd5e95.js";import"./use-locale-ba0171d5.js";import"./use-merged-state-d459d80e.js";import"./Suffix-9f9d022f.js";import"./use-form-structure-b872a9e7.js";import"./Grid-7fd51304.js";import"./next-frame-once-7035a838.js";import"./Checkbox-2d4945a3.js";import"./EditOutlined-0243f050.js";import"./DeleteOutlined-099c0ef1.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./cssr-7767064c.js";import"./use-compitable-248ca92d.js";import"./Tooltip-5624ecb6.js";import"./Empty-dd1b91e9.js";import"./create-bbda4d67.js";const Be=p("steps",`
 width: 100%;
 display: flex;
`,[p("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[R("disabled","cursor: not-allowed"),R("clickable",`
 cursor: pointer;
 `),T("&:last-child",[p("step-splitor","display: none;")])]),p("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),p("step-content","flex: 1;",[p("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[k("title",`
 white-space: nowrap;
 flex: 0;
 `)]),k("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),p("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[p("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[k("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[$()]),p("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[$()]),p("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[$()])])]),R("vertical","flex-direction: column;",[se("show-description",[T(">",[p("step","padding-bottom: 8px;")])]),T(">",[p("step","margin-bottom: 16px;",[T("&:last-child","margin-bottom: 0;"),T(">",[p("step-indicator",[T(">",[p("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),p("step-content",[k("description","margin-top: 8px;")])])])])])]);function Fe(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function qe(e){return e.map((t,l)=>Fe(t,l))}const Ee=Object.assign(Object.assign({},H.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),G=oe("n-steps"),Ve=O({name:"Steps",props:Ee,setup(e,{slots:t}){const{mergedClsPrefixRef:l,mergedRtlRef:c}=M(e),a=ae("Steps",c,l),f=H("Steps","-steps",Be,le,e,l);return ie(G,{props:e,mergedThemeRef:f,mergedClsPrefixRef:l,stepsSlots:t}),{mergedClsPrefix:l,rtlEnabled:a}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},qe(ne(Ie(this))))}}),je={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},F=O({name:"Step",props:je,setup(e){const t=ce(G,null);t||de("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:l}=M(),{props:c,mergedThemeRef:a,mergedClsPrefixRef:f,stepsSlots:u}=t,m=z(()=>c.vertical),g=z(()=>{const{status:i}=e;if(i)return i;{const{internalIndex:n}=e,{current:s}=c;if(s===void 0)return"process";if(n<s)return"finish";if(n===s)return c.status||"process";if(n>s)return"wait"}return"process"}),w=z(()=>{const{value:i}=g,{size:n}=c,{common:{cubicBezierEaseInOut:s},self:{stepHeaderFontWeight:o,[h("stepHeaderFontSize",n)]:N,[h("indicatorIndexFontSize",n)]:y,[h("indicatorSize",n)]:Q,[h("indicatorIconSize",n)]:X,[h("indicatorTextColor",i)]:J,[h("indicatorBorderColor",i)]:Y,[h("headerTextColor",i)]:Z,[h("splitorColor",i)]:ee,[h("indicatorColor",i)]:te,[h("descriptionTextColor",i)]:re}}=a.value;return{"--n-bezier":s,"--n-description-text-color":re,"--n-header-text-color":Z,"--n-indicator-border-color":Y,"--n-indicator-color":te,"--n-indicator-icon-size":X,"--n-indicator-index-font-size":y,"--n-indicator-size":Q,"--n-indicator-text-color":J,"--n-splitor-color":ee,"--n-step-header-font-size":N,"--n-step-header-font-weight":o}}),v=l?pe("step",z(()=>{const{value:i}=g,{size:n}=c;return`${i[0]}${n[0]}`}),w,c):void 0,x=z(()=>{if(e.disabled)return;const{onUpdateCurrent:i,"onUpdate:current":n}=c;return i||n?()=>{i&&j(i,e.internalIndex),n&&j(n,e.internalIndex)}:void 0});return{stepsSlots:u,mergedClsPrefix:f,vertical:m,mergedStatus:g,handleStepClick:x,cssVars:l?void 0:w,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:l,disabled:c}=this,a=E(this.$slots.default,f=>{const u=f||this.description;return u?d("div",{class:`${e}-step-content__description`},u):null});return t==null||t(),d("div",{class:[`${e}-step`,c&&`${e}-step--disabled`,!c&&l&&`${e}-step--clickable`,this.themeClass,a&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:l},d("div",{class:`${e}-step-indicator`},d("div",{class:`${e}-step-indicator-slot`},d(ue,null,{default:()=>E(this.$slots.icon,f=>{const{mergedStatus:u,stepsSlots:m}=this;return u==="finish"||u==="error"?u==="finish"?d(V,{clsPrefix:e,key:"finish"},{default:()=>P(m["finish-icon"],()=>[d(ke,null)])}):u==="error"?d(V,{clsPrefix:e,key:"error"},{default:()=>P(m["error-icon"],()=>[d(fe,null)])}):null:f||d("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?d("div",{class:`${e}-step-splitor`}):null),d("div",{class:`${e}-step-content`},d("div",{class:`${e}-step-content-header`},d("div",{class:`${e}-step-content-header__title`},P(this.$slots.title,()=>[this.title])),this.vertical?null:d("div",{class:`${e}-step-splitor`})),a))}}),De={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ke=q("defs",null,null,-1),Ue=q("path",{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z",fill:"currentColor"},null,-1),Ae=q("path",{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z",fill:"currentColor"},null,-1),Me=[Ke,Ue,Ae],He=O({name:"PlusOutlined",render:function(t,l){return me(),ve("svg",De,Me)}}),We=e=>{const t=be({current:1,loading:!1,saving:!1,stepOne:{pluginName:null,datasourceName:null,tableName:"",datasourceId:""},stepTwo:{list:[],loading:!1,config:[]},fieldTypes:[],goNexting:!1}),{t:l}=W.useI18n();let c;const a=L(),f={fieldName:"",fieldType:"",nullable:0,primaryKey:0,isEdit:!0},u=D(),m=D(),g=async()=>{if(t.loading)return{};t.loading=!0;const s=await Ne(e);t.stepOne.pluginName=s.pluginName,t.stepOne.datasourceName=s.datasourceName,t.stepOne.datasourceId=s.datasourceId,t.stepOne.tableName=s.tableName,t.stepTwo.list=s.fields.map(o=>({...o,nullable:Number(o.nullable),primaryKey:Number(o.primaryKey)})),c=s.datasourceProperties,t.loading=!1},w=async()=>{const s=await Te();console.log(s,"type"),t.fieldTypes=s,f.fieldType=t.fieldTypes[0]},v=()=>{const s={};return t.stepTwo.config.forEach(o=>{s[o.key]=o.value}),{datasourceId:t.stepOne.datasourceId,datasourceName:t.stepOne.datasourceName||"",pluginName:t.stepOne.pluginName||"",tableName:t.stepOne.tableName,tableFields:t.stepTwo.list.map(o=>({...Se.omit(o,["key","isEdit"]),nullable:!!o.nullable,primaryKey:!!o.nullable})),databaseProperties:s,databaseName:"default"}},x=async()=>{const s=v();if(t.saving)return!1;t.saving=!0;try{return e?await ze(s,e):await Ce(s),t.saving=!1,a.push({name:"virtual-tables-list",query:{tab:"virtual-tables"}}),!0}catch{return t.saving=!1,!1}},i=()=>{t.stepTwo.list.unshift({...f,key:Date.now()+Math.random()*1e3}),console.log(t,"ta")},n=async s=>{if(t.current===1&&s===1){t.goNexting=!0;try{await u.value.validate(),await m.value.getFormItems(t.stepOne.pluginName,t.stepOne.datasourceName),c&&m.value.setValues(c)}finally{t.goNexting=!1}}if(t.current===2&&s===1){t.goNexting=!0;try{const o=await m.value.getValues();if(t.stepTwo.config=o,t.stepTwo.list.some(y=>y.isEdit)){window.$message.error(l("virtualTables.save_data_tips"));return}if(t.stepTwo.list.length===0){window.$message.error(l("virtualTables.table_data_required_tips"));return}}finally{t.goNexting=!1}}t.current+=s};return he(()=>{console.log("vir"),e&&g(),w()}),{state:t,stepOneFormRef:u,stepTwoFormRef:m,createOrUpdate:x,onAddRecord:i,onChangeStep:n}};function _(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ye(e)}const $t=O({name:"VirtualTablesDetail",setup(){const{t:e}=W.useI18n(),t=ge(),l=L(),c=Oe(),{state:a,stepOneFormRef:f,stepTwoFormRef:u,onAddRecord:m,onChangeStep:g,createOrUpdate:w}=We(t.params.id);console.log("create");const v=()=>{c.warning({title:e("virtual_tables.warning"),content:e("virtual_tables.close_confirm_tips"),onPositiveClick:()=>{l.push({name:"virtual-tables-list",query:{tab:"virtual-tables"}})},positiveText:e("virtual_tables.confirm"),negativeText:e("virtual_tables.cancel")})};return()=>{let x,i,n,s,o,N,y;return r(B,{vertical:!0},{default:()=>[r(Re,null,{default:()=>[r(A,{onClick:v},_(x=e("virtual_tables.virtual_tables"))?x:{default:()=>[x]}),r(A,null,_(i=e(t.params.id?e("virtualTables.edit_virtual_tables"):e("virtual_tables.create_virtual_tables")))?i:{default:()=>[i]})]}),r(xe,{title:e(t.params.id?e("virtualTables.edit_virtual_tables"):e("virtual_tables.create_virtual_tables"))},{default:()=>[r("div",{class:b["detail-content"]},[r(Ve,{current:a.current,class:b["detail-step"]},{default:()=>[r(F,{title:e("virtual_tables.configure")},null),r(F,{title:e("virtual_tables.model")},null),r(F,{title:e("virtual_tables.complete")},null)]}),C(r("div",{class:b["width-100"]},[r(B,{justify:"center"},{default:()=>[r(_e,{params:a.stepOne,ref:f},null)]})]),[[S,a.current===1]]),C(r("div",{class:b["detail-step-two"]},[r(we,{ref:u},null),r("div",{class:b["detail-table-header"]},[r($e,{class:b["detail-table-title"]},_(n=e("virtual_tables.table_structure"))?n:{default:()=>[n]}),r(I,{text:!0,type:"primary",onClick:m},{icon:()=>r(Pe,null,{default:()=>[r(He,null,null)]}),default:()=>e("virtual_tables.add")})]),r(K,{list:a.stepTwo.list,fieldTypes:a.fieldTypes},null)]),[[S,a.current===2]]),C(r("div",{class:b["detail-step-three"]},[r("div",{class:b["detail-step-three-params"]},[r(U,{class:b["detail-step-three-left"],params:[{label:e("virtual_tables.source_type"),value:a.stepOne.pluginName||""},{label:e("virtual_tables.source_name"),value:a.stepOne.datasourceName||""},{label:e("virtual_tables.virtual_tables_name"),value:a.stepOne.tableName||""}]},null),r(U,{class:b["detail-step-three-right"],params:a.stepTwo.config,cols:3},null)]),r(K,{class:b["width-100"],list:a.stepTwo.list,plain:!0,fieldTypes:a.fieldTypes},null)]),[[S,a.current===3]])]),r(B,{justify:"end"},{default:()=>[C(r(I,{type:"primary",onClick:()=>void g(-1)},_(s=e("virtual_tables.previous_step"))?s:{default:()=>[s]}),[[S,a.current!==1]]),r(I,{onClick:v},_(o=e("virtual_tables.cancel"))?o:{default:()=>[o]}),a.current!==3&&r(I,{type:"primary",onClick:()=>void g(1),loading:a.goNexting},_(N=e("virtual_tables.next_step"))?N:{default:()=>[N]}),C(r(I,{onClick:w,loading:a.saving,type:"primary"},_(y=e("virtual_tables.confirm"))?y:{default:()=>[y]}),[[S,a.current===3]])]})]})]})}}});export{$t as default};
