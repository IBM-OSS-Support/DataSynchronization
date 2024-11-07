import{i as t,e as _,Q as E,u as j,ao as H,n as P,g as M,G as be,H as K,I as he,a9 as G,a7 as l,B as b,c as r,b as y,d as A,bO as fe,C as ke,D as ve,K as ge,am as me,f as O,E as xe,h as pe,c4 as Ce,bQ as ye,aw as we,af as Re,ap as N}from"./index-5e2885e4.js";import{u as V}from"./use-merged-state-d459d80e.js";const ze=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Se=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),L=he("n-checkbox-group"),Te={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ie=_({name:"CheckboxGroup",props:Te,setup(o){E(()=>{o.onChange!==void 0&&G("checkbox-group","`on-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:m}=j(o),x=H(o),{mergedSizeRef:w,mergedDisabledRef:S}=x,s=P(o.defaultValue),R=M(()=>o.value),u=V(R,s),c=M(()=>{var h;return((h=u.value)===null||h===void 0?void 0:h.length)||0}),a=M(()=>Array.isArray(u.value)?new Set(u.value):new Set);function B(h,n){const{nTriggerFormInput:p,nTriggerFormChange:C}=x,{onChange:f,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(u.value)){const i=Array.from(u.value),I=i.findIndex(F=>F===n);h?~I||(i.push(n),v&&l(v,i,{actionType:"check",value:n}),k&&l(k,i,{actionType:"check",value:n}),p(),C(),s.value=i,f&&l(f,i)):~I&&(i.splice(I,1),v&&l(v,i,{actionType:"uncheck",value:n}),k&&l(k,i,{actionType:"uncheck",value:n}),f&&l(f,i),s.value=i,p(),C())}else h?(v&&l(v,[n],{actionType:"check",value:n}),k&&l(k,[n],{actionType:"check",value:n}),f&&l(f,[n]),s.value=[n],p(),C()):(v&&l(v,[],{actionType:"uncheck",value:n}),k&&l(k,[],{actionType:"uncheck",value:n}),f&&l(f,[]),s.value=[],p(),C())}return be(L,{checkedCountRef:c,maxRef:K(o,"max"),minRef:K(o,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:w,toggleCheckbox:B}),{mergedClsPrefix:m}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),De=b([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[b("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),A("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),A("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("indeterminate",[r("checkbox-box",[r("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("checked, indeterminate",[b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),A("disabled",{cursor:"not-allowed"},[A("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),fe({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[b("&:empty",{display:"none"})])]),ke(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ve(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),$e=Object.assign(Object.assign({},O.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Me=_({name:"Checkbox",props:$e,setup(o){E(()=>{o.onChange&&G("checkbox","`on-change` is deprecated, please use `on-update:checked` instead.")});const m=P(null),{mergedClsPrefixRef:x,inlineThemeDisabled:w,mergedRtlRef:S}=j(o),s=H(o,{mergedSize(e){const{size:g}=o;if(g!==void 0)return g;if(c){const{value:d}=c.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:g}=o;if(g!==void 0)return g;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:z}=c;if(d!==void 0&&z.value>=d&&!n.value)return!0;const{minRef:{value:D}}=c;if(D!==void 0&&z.value<=D&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:R,mergedSizeRef:u}=s,c=ge(L,null),a=P(o.defaultChecked),B=K(o,"checked"),h=V(B,a),n=me(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return h.value===o.checkedValue}),p=O("Checkbox","-checkbox",De,Re,o,x);function C(e){if(c&&o.value!==void 0)c.toggleCheckbox(!n.value,o.value);else{const{onChange:g,"onUpdate:checked":d,onUpdateChecked:z}=o,{nTriggerFormInput:D,nTriggerFormChange:U}=s,$=n.value?o.uncheckedValue:o.checkedValue;d&&l(d,$,e),z&&l(z,$,e),g&&l(g,$,e),D(),U(),a.value=$}}function f(e){R.value||C(e)}function k(e){if(!R.value)switch(e.key){case" ":case"Enter":C(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const i={focus:()=>{var e;(e=m.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=m.value)===null||e===void 0||e.blur()}},I=xe("Checkbox",S,x),F=M(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:g},self:{borderRadius:d,color:z,colorChecked:D,colorDisabled:U,colorTableHeader:$,colorTableHeaderModal:Q,colorTableHeaderPopover:W,checkMarkColor:Y,checkMarkColorDisabled:q,border:J,borderFocus:X,borderDisabled:Z,borderChecked:ee,boxShadowFocus:oe,textColor:ne,textColorDisabled:re,checkMarkColorDisabledChecked:ae,colorDisabledChecked:ce,borderDisabledChecked:le,labelPadding:ie,labelLineHeight:de,labelFontWeight:te,[N("fontSize",e)]:se,[N("size",e)]:ue}}=p.value;return{"--n-label-line-height":de,"--n-label-font-weight":te,"--n-size":ue,"--n-bezier":g,"--n-border-radius":d,"--n-border":J,"--n-border-checked":ee,"--n-border-focus":X,"--n-border-disabled":Z,"--n-border-disabled-checked":le,"--n-box-shadow-focus":oe,"--n-color":z,"--n-color-checked":D,"--n-color-table":$,"--n-color-table-modal":Q,"--n-color-table-popover":W,"--n-color-disabled":U,"--n-color-disabled-checked":ce,"--n-text-color":ne,"--n-text-color-disabled":re,"--n-check-mark-color":Y,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":ae,"--n-font-size":se,"--n-label-padding":ie}}),T=w?pe("checkbox",M(()=>u.value[0]),F,o):void 0;return Object.assign(s,i,{rtlEnabled:I,selfRef:m,mergedClsPrefix:x,mergedDisabled:R,renderedChecked:n,mergedTheme:p,labelId:Ce(),handleClick:f,handleKeyUp:k,handleKeyDown:v,cssVars:w?void 0:F,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:m,renderedChecked:x,mergedDisabled:w,indeterminate:S,privateInsideTable:s,cssVars:R,labelId:u,label:c,mergedClsPrefix:a,focusable:B,handleKeyUp:h,handleKeyDown:n,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),t("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,x&&`${a}-checkbox--checked`,w&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,s&&`${a}-checkbox--inside-table`],tabindex:w||!B?void 0:0,role:"checkbox","aria-checked":S?"mixed":x,"aria-labelledby":u,style:R,onKeyup:h,onKeydown:n,onClick:p,onMousedown:()=>{we("selectstart",window,C=>{C.preventDefault()},{once:!0})}},t("div",{class:`${a}-checkbox-box-wrapper`}," ",t("div",{class:`${a}-checkbox-box`},t(ye,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Se):t("div",{key:"check",class:`${a}-checkbox-icon`},ze)}),t("div",{class:`${a}-checkbox-box__border`}))),c!==null||m.default?t("span",{class:`${a}-checkbox__label`,id:u},m.default?m.default():c):null)}});export{Me as N,Ie as a};
