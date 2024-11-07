import{c as M,a as C,b as h,d as f,e as q,u as U,f as z,g as E,h as G,i as b,F as J,j as A,v as $,k as O,r as P,o as T,l as H,m as L,n as V,p as r,N as j,q as _,s as W}from"./index-5e2885e4.js";import{u as K,a as Q,b as X,c as Y,N as S,D as Z}from"./use-form-structure-b872a9e7.js";import{d as ee,c as te,a as ae,b as re,e as se}from"./index-569e3c49.js";import{l as B}from"./lodash-11edae60.js";import{s as I}from"./index.module-dcaeed5e.js";import oe from"./source-modal-de612839.js";import{u as ie}from"./composables-ca7679f2.js";import{N as ne,a as D}from"./BreadcrumbItem-1da720e4.js";import{N as le}from"./Form-6e61837b.js";import{N as k}from"./Space-d49acb7b.js";import{N as ce}from"./Grid-7fd51304.js";import{N as R}from"./Input-1bbd5e95.js";import"./FormItem-7f69a4d7.js";import"./format-length-c9d165c6.js";import"./get-53588a31.js";import"./Select-94feec49.js";import"./use-merged-state-d459d80e.js";import"./use-locale-ba0171d5.js";import"./use-compitable-248ca92d.js";import"./cssr-7767064c.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./next-frame-once-7035a838.js";import"./Suffix-9f9d022f.js";import"./create-bbda4d67.js";import"./Empty-dd1b91e9.js";import"./Checkbox-2d4945a3.js";import"./service-d19f0ccd.js";import"./Tabs-11369ba4.js";import"./Add-c7f60439.js";import"./throttle-c6377e77.js";import"./debounce-19376a56.js";const de=M("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[C("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[C("no-title",`
 display: flex;
 align-items: center;
 `)]),h("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),f("title-position-left",[h("line",[f("left",{width:"28px"})])]),f("title-position-right",[h("line",[f("right",{width:"28px"})])]),f("dashed",[h("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),f("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),h("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),C("dashed",[h("line",{backgroundColor:"var(--n-color)"})]),f("dashed",[h("line",{borderColor:"var(--n-color)"})]),f("vertical",{backgroundColor:"var(--n-color)"})]),ue=Object.assign(Object.assign({},z.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),me=q({name:"Divider",props:ue,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:m}=U(e),c=z("Divider","-divider",de,A,e,s),i=E(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:n,textColor:p,fontWeight:g}}=c.value;return{"--n-bezier":t,"--n-color":n,"--n-text-color":p,"--n-font-weight":g}}),a=m?G("divider",void 0,i,e):void 0;return{mergedClsPrefix:s,cssVars:m?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{$slots:s,titlePlacement:m,vertical:c,dashed:i,cssVars:a,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),b("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:c,[`${t}-divider--no-title`]:!s.default,[`${t}-divider--dashed`]:i,[`${t}-divider--title-position-${m}`]:s.default&&m}],style:a},c?null:b("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!c&&s.default?b(J,null,b("div",{class:`${t}-divider__title`},this.$slots),b("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}});function pe(e,s,m,c,i){const{t:a}=$.useI18n(),t=O(),n=P({saving:!1,testing:!1,loading:!1}),p=()=>{const o=e();return{datasourceName:o.datasourceName,pluginName:o.pluginName,description:o.description,datasourceConfig:JSON.stringify(B.omit(o,["pluginName","datasourceName","description"]))}},g=async()=>{try{const o=await ee(i);await m(o.pluginName),s({datasourceName:o.datasourceName,pluginName:o.pluginName,description:o.description,...o.datasourceConfig})}finally{}},y=async()=>{if(await c.value.validate(),n.testing)return;n.testing=!0;const o=e();try{const l=await te({pluginName:o.pluginName,datasourceConfig:B.omit(o,["pluginName","datasourceName","description"])});window.$message.success(l.msg?l.msg:`${a("datasource.test_connect_success")}`),n.testing=!1}catch{n.testing=!1}},d=async()=>{if(await c.value.validate(),n.saving)return!1;n.saving=!0;try{return i?await ae(p(),i):await re(p()),n.saving=!1,t.push({name:"datasource-list",query:{}}),!0}catch{return n.saving=!1,!1}};return T(()=>{i&&g()}),{status:n,testConnect:y,createOrUpdate:d}}const fe=H({id:"form-structures",state:()=>({items:new Map}),persist:{storage:sessionStorage},getters:{getItem(e){return s=>e.items.get(s)}},actions:{setItem(e,s){this.items.set(e,s)}}});function ge(e){const{t:s}=$.useI18n(),m=O(),c=fe(),i={pluginName:e,datasourceName:"",description:""},a=P({detailForm:{...i},formName:"",formStructure:[],locales:{},rules:{name:{trigger:["input"],validator(){if(!a.detailForm.datasourceName)return new Error(s("datasource.datasource_name_tips"))}}}}),t=async d=>{if(c.getItem(d)){a.formStructure=c.getItem(d);return}const o=await se(d);try{const l=JSON.parse(o);l.forms=l.forms.map(x=>({...x,span:12})),Object.assign(a.detailForm,K(l.forms)),Object.assign(a.rules,Q(l.forms,a.detailForm,s)),a.locales=l.locales,a.formStructure=X(l.apis?Y(l.apis,l.forms):l.forms)}finally{}},n=d=>{m.replace({name:"datasource-create",query:{type:d}}),t(d)},p=()=>{a.detailForm={...i}},g=d=>{Object.assign(a.detailForm,d)},y=()=>a.detailForm;return T(()=>{e&&t(e)}),{state:a,changeType:n,resetFieldsValue:p,getFieldsValue:y,setFieldsValue:g,getFormItems:t}}function N(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!W(e)}const We=q({setup(){const{t:e}=$.useI18n(),s=L(),m=O(),c=ie(),i=V(!1),a=V(null),{state:t,changeType:n,getFieldsValue:p,setFieldsValue:g,getFormItems:y}=ge(s.query.type),{status:d,testConnect:o,createOrUpdate:l}=pe(p,g,y,a,s.params.id),x=()=>{c.warning({title:e("datasource.warning"),content:e("datasource.close_confirm_tips"),onPositiveClick:()=>{m.push({name:"datasource-list"})},positiveText:e("datasource.confirm"),negativeText:e("datasource.cancel")})};return()=>{let F;return r(k,{vertical:!0},{default:()=>[r(j,null,{header:()=>{let u,v;return r(ne,null,{default:()=>[r(D,{onClick:x},N(u=e("datasource.datasource"))?u:{default:()=>[u]}),r(D,null,N(v=e(s.params.id?"datasource.edit_datasource":"datasource.create_datasource"))?v:{default:()=>[v]})]})},"header-extra":()=>{let u,v,w;return r(k,null,{default:()=>[r(_,{secondary:!0,type:"primary",onClick:o,loading:d.testing},N(u=e("datasource.test_connect"))?u:{default:()=>[u]}),r(_,{secondary:!0,onClick:x},N(v=e("datasource.cancel"))?v:{default:()=>[v]}),r(_,{type:"success",onClick:l,loading:d.saving},N(w=e("datasource.confirm"))?w:{default:()=>[w]})]})}}),r(j,null,{default:()=>[r(le,{rules:t.rules,ref:a,class:I["detail-content"]},{default:()=>[r(ce,{xGap:10},{default:()=>[r(S,{label:e("datasource.datasource_type"),path:"type","show-require-mark":!0,span:24},{default:()=>[r(k,{class:[I.typeBox,!!s.params.id&&I.disabledBox]},{default:()=>[r("div",null,[t.detailForm.pluginName]),!s.params.id&&r(_,{text:!0,type:"primary",onClick:()=>void(i.value=!0)},N(F=e("datasource.select"))?F:{default:()=>[F]})]})]}),r(S,{label:e("datasource.datasource_name"),path:"name","show-require-mark":!0,span:12},{default:()=>[r(R,{class:"input-data-source-name",value:t.detailForm.datasourceName,"onUpdate:value":u=>t.detailForm.datasourceName=u,maxlength:60,placeholder:e("datasource.datasource_name_tips")},null)]}),r(S,{label:e("datasource.description"),path:"note",span:12},{default:()=>[r(R,{class:"input-data-source-description",value:t.detailForm.description,"onUpdate:value":u=>t.detailForm.description=u,type:"textarea",placeholder:e("datasource.description_tips"),rows:1},null)]})]}),r(me,{style:{marginTop:"0px"}},null),t.formStructure.length>0&&r(Z,{model:t.detailForm,formStructure:t.formStructure,name:t.formName,locales:t.locales},null)]})]}),r(oe,{show:i.value,onChange:u=>{n(u),i.value=!1},onCancel:()=>void(i.value=!1)},null)]})}}});export{We as default};
