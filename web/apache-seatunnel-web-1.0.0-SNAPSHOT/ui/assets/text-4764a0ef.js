import{c as C,d as i,e as $,u as z,f as u,g as c,h as B,i as a,bz as T,c7 as R,ap as S}from"./index-5e2885e4.js";import{u as V}from"./use-compitable-248ca92d.js";const w=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),P=Object.assign(Object.assign({},u.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>(T("text","`as` is deprecated, please use `tag` instead."),!0),default:void 0}}),N=$({name:"Text",props:P,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=z(e),o=u("Typography","-text",w,R,e,r),s=c(()=>{const{depth:l,type:d}=e,h=d==="default"?l===void 0?"textColor":`textColor${l}Depth`:S("textColor",d),{common:{fontWeightStrong:g,fontFamilyMono:f,cubicBezierEaseInOut:m},self:{codeTextColor:x,codeBorderRadius:b,codeColor:v,codeBorder:p,[h]:y}}=o.value;return{"--n-bezier":m,"--n-text-color":y,"--n-font-weight-strong":g,"--n-font-famliy-mono":f,"--n-code-border-radius":b,"--n-code-text-color":x,"--n-code-color":v,"--n-code-border":p}}),t=n?B("text",c(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:r,compitableTag:V(e,["as","tag"]),cssVars:n?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,r,n;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r);return this.code?a("code",{class:s,style:this.cssVars},this.delete?a("del",null,t):t):this.delete?a("del",{class:s,style:this.cssVars},t):a(this.compitableTag||"span",{class:s,style:this.cssVars},t)}});export{N};
