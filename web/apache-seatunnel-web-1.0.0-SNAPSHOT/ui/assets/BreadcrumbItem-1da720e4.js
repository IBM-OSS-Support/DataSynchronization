import{c as l,B as n,d as L,b as u,e as g,u as P,f as x,G as T,H as I,g as p,h as w,i as b,I as E,bT as S,n as _,o as $,bI as j,bU as H,K as N,bz as K,ay as O}from"./index-5e2885e4.js";const V=l("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[n("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),n("a",`
 color: inherit;
 text-decoration: inherit;
 `),l("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[l("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),n("&:not(:last-child)",[L("clickable",[u("link",`
 cursor: pointer;
 `,[n("&:hover",`
 background-color: var(--n-item-color-hover);
 `),n("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),u("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[n("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[l("icon",`
 color: var(--n-item-text-color-hover);
 `)]),n("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[l("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),u("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),n("&:last-child",[u("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[l("icon",`
 color: var(--n-item-text-color-active);
 `)]),u("separator",`
 display: none;
 `)])])]),C=E("n-breadcrumb"),A=Object.assign(Object.assign({},x.props),{separator:{type:String,default:"/"}}),G=g({name:"Breadcrumb",props:A,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=P(e),s=x("Breadcrumb","-breadcrumb",V,S,e,o);T(C,{separatorRef:I(e,"separator"),mergedClsPrefixRef:o});const c=p(()=>{const{common:{cubicBezierEaseInOut:d},self:{separatorColor:m,itemTextColor:a,itemTextColorHover:i,itemTextColorPressed:v,itemTextColorActive:h,fontSize:f,fontWeightActive:k,itemBorderRadius:B,itemColorHover:R,itemColorPressed:z,itemLineHeight:y}}=s.value;return{"--n-font-size":f,"--n-bezier":d,"--n-item-text-color":a,"--n-item-text-color-hover":i,"--n-item-text-color-pressed":v,"--n-item-text-color-active":h,"--n-separator-color":m,"--n-item-color-hover":R,"--n-item-color-pressed":z,"--n-item-border-radius":B,"--n-font-weight-active":k,"--n-item-line-height":y}}),t=r?w("breadcrumb",void 0,c,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:c,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),b("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},b("ul",null,this.$slots))}}),M=H?window:null,U=(e=M)=>{const o=()=>{const{hash:c,host:t,hostname:d,href:m,origin:a,pathname:i,port:v,protocol:h,search:f}=(e==null?void 0:e.location)||{};return{hash:c,host:t,hostname:d,href:m,origin:a,pathname:i,port:v,protocol:h,search:f}},r=()=>{s.value=o()},s=_(o());return $(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),j(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),s},D={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},q=g({name:"BreadcrumbItem",props:D,setup(e,{slots:o}){const r=N(C,null);if(!r)return K("breadcrumb","`n-breadcrumb-item` must be placed inside `n-breadcrumb`."),()=>null;const{separatorRef:s,mergedClsPrefixRef:c}=r,t=U(),d=p(()=>e.href?"a":"span"),m=p(()=>t.value.href===e.href?"location":null);return()=>{const{value:a}=c;return b("li",{class:[`${a}-breadcrumb-item`,e.clickable&&`${a}-breadcrumb-item--clickable`]},b(d.value,{class:`${a}-breadcrumb-item__link`,"aria-current":m.value,href:e.href,onClick:e.onClick},o),b("span",{class:`${a}-breadcrumb-item__separator`,"aria-hidden":"true"},O(o.separator,()=>{var i;return[(i=e.separator)!==null&&i!==void 0?i:s.value]})))}}});export{G as N,q as a};
