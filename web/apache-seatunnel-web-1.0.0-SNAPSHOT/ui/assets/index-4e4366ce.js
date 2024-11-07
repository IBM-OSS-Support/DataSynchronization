import{B as u,c as l,a2 as v,d as f,e as S,Q as z,u as C,f as m,g as d,h as x,i as a,aA as k,Z as w,a9 as $,aB as I,aC as B,ap as R,l as T}from"./index-5e2885e4.js";import{u as N}from"./use-compitable-248ca92d.js";const D=u([u("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l("spin-container",{position:"relative"},[l("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[v()])]),l("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[f("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),l("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[f("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),O={small:20,medium:18,large:16},P=Object.assign(Object.assign({},m.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),j=S({name:"Spin",props:P,setup(e){z(()=>{e.spinning!==void 0&&$("spin","`spinning` is deprecated, please use `show` instead.")});const{mergedClsPrefixRef:i,inlineThemeDisabled:n}=C(e),s=m("Spin","-spin",D,I,e,i),c=d(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:r},self:p}=s.value,{opacitySpinning:h,color:g,textColor:y}=p,b=typeof t=="number"?B(t):p[R("size",t)];return{"--n-bezier":r,"--n-opacity-spinning":h,"--n-size":b,"--n-color":g,"--n-text-color":y}}),o=n?x("spin",d(()=>{const{size:t}=e;return typeof t=="number"?String(t):t[0]}),c,e):void 0;return{mergedClsPrefix:i,compitableShow:N(e,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:t}=e;if(t!==void 0)return t;const{size:r}=e;return O[typeof r=="number"?"medium":r]}),cssVars:n?void 0:c,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,i;const{$slots:n,mergedClsPrefix:s,description:c}=this,o=n.icon&&this.rotate,t=(c||n.description)&&a("div",{class:`${s}-spin-description`},c||((e=n.description)===null||e===void 0?void 0:e.call(n))),r=n.icon?a("div",{class:[`${s}-spin-body`,this.themeClass]},a("div",{class:[`${s}-spin`,o&&`${s}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),t):a("div",{class:[`${s}-spin-body`,this.themeClass]},a(k,{clsPrefix:s,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),t);return(i=this.onRender)===null||i===void 0||i.call(this),n.default?a("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${s}-spin-content`,this.compitableShow&&`${s}-spin-content--spinning`]},n),a(w,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}}),E=T({id:"synchronization-definitionState",state:()=>({columnSelectable:{},dagInfo:{}}),persist:{storage:sessionStorage},getters:{getColumnSelectable(e){return i=>e.columnSelectable[i]},getDagInfo(){return this.dagInfo}},actions:{setColumnSelectable(e,i){this.columnSelectable[e]=i},setDagInfo(e){this.dagInfo={...this.dagInfo,...e}}}});export{j as N,E as u};
