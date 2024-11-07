import{ae as se,bV as de,bW as ce,c as H,b as t,bO as L,B as O,d as l,a as U,e as ue,Q as he,u as be,f as E,ao as fe,n as j,H as ge,g as z,h as ve,bX as K,i,av as w,bQ as we,aA as me,a9 as pe,ap as m,aC as M,aq as s,a7 as P}from"./index-5e2885e4.js";import{u as ye}from"./use-merged-state-d459d80e.js";const xe=e=>{const{primaryColor:d,opacityDisabled:f,borderRadius:o,textColor3:r}=e,p="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},de),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:f,railColor:p,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${ce(d,{alpha:.2})}`})},ke={name:"Switch",common:se,self:xe},Ce=ke,Se=H("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),H("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[L({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),O("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),U("disabled",[U("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[O("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[O("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[L()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Be=Object.assign(Object.assign({},E.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Ve=ue({name:"Switch",props:Be,setup(e){he(()=>{e.onChange&&pe("switch","`on-change` is deprecated, please use `on-update:value` instead.")}),B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:f}=be(e),o=E("Switch","-switch",Se,Ce,e,d),r=fe(e),{mergedSizeRef:p,mergedDisabledRef:g}=r,k=j(e.defaultValue),R=ge(e,"value"),v=ye(R,k),C=z(()=>v.value===e.checkedValue),y=j(!1),n=j(!1),c=z(()=>{const{railStyle:a}=e;if(a)return a({focused:n.value,checked:C.value})});function u(a){const{"onUpdate:value":$,onChange:V,onUpdateValue:_}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=r;$&&P($,a),_&&P(_,a),V&&P(V,a),k.value=a,F(),T()}function I(){const{nTriggerFormFocus:a}=r;a()}function X(){const{nTriggerFormBlur:a}=r;a()}function Q(){e.loading||g.value||(v.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function Y(){n.value=!0,I()}function q(){n.value=!1,X(),y.value=!1}function G(a){e.loading||g.value||a.key===" "&&(v.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),y.value=!1)}function J(a){e.loading||g.value||a.key===" "&&(a.preventDefault(),y.value=!0)}const A=z(()=>{const{value:a}=p,{self:{opacityDisabled:$,railColor:V,railColorActive:_,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:Z,loadingColor:ee,textColor:te,iconColor:ae,[m("buttonHeight",a)]:h,[m("buttonWidth",a)]:ne,[m("buttonWidthPressed",a)]:ie,[m("railHeight",a)]:b,[m("railWidth",a)]:S,[m("railBorderRadius",a)]:oe,[m("buttonBorderRadius",a)]:re},common:{cubicBezierEaseInOut:le}}=o.value;let N,W,D;return B?(N=`calc((${b} - ${h}) / 2)`,W=`max(${b}, ${h})`,D=`max(${S}, calc(${S} + ${h} - ${b}))`):(N=M((s(b)-s(h))/2),W=M(Math.max(s(b),s(h))),D=s(b)>s(h)?S:M(s(S)+s(h)-s(b))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ne,"--n-button-width-pressed":ie,"--n-button-height":h,"--n-height":W,"--n-offset":N,"--n-opacity-disabled":$,"--n-rail-border-radius":oe,"--n-rail-color":V,"--n-rail-color-active":_,"--n-rail-height":b,"--n-rail-width":S,"--n-width":D,"--n-box-shadow-focus":Z,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ae}}),x=f?ve("switch",z(()=>p.value[0]),A,e):void 0;return{handleClick:Q,handleBlur:q,handleFocus:Y,handleKeyup:G,handleKeydown:J,mergedRailStyle:c,pressed:y,mergedClsPrefix:d,mergedValue:v,checked:C,mergedDisabled:g,cssVars:f?void 0:A,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:f,mergedRailStyle:o,onRender:r,$slots:p}=this;r==null||r();const{checked:g,unchecked:k,icon:R,"checked-icon":v,"unchecked-icon":C}=p,y=!(K(R)&&K(v)&&K(C));return i("div",{role:"switch","aria-checked":f,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,f&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},w(g,n=>w(k,c=>n||c?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),n),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),c)):null)),i("div",{class:`${e}-switch__button`},w(R,n=>w(v,c=>w(C,u=>i(we,null,{default:()=>this.loading?i(me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||n)?i("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||n):!this.checked&&(u||n)?i("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||n):null})))),w(g,n=>n&&i("div",{key:"checked",class:`${e}-switch__checked`},n)),w(k,n=>n&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}});export{Ve as N};
