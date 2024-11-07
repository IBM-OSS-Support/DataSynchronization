import{n as O,w as de,r as Pe,cM as Ce,cN as Ie,R as Ke,c0 as W,cO as Oe,aw as Z,e as j,i as a,c as I,a as ie,d as K,u as he,f as J,g as k,c3 as Te,cP as _e,_ as ae,I as se,K as E,U as be,G,am as Q,Z as De,bk as X,bz as $e,F as je,V as ze,T as Be,cx as Ae,bB as Fe,B as q,b as A,H as $,a7 as re,h as Le,b_ as Me,cQ as Ee,ap as M}from"./index-5e2885e4.js";import{N as He}from"./Tooltip-5624ecb6.js";import{V as Ue,a as qe,b as Ge,r as Ve,N as We,p as me}from"./Popover-907f9950.js";import{N as Ze}from"./Icon-b461a67a.js";import{h as ce,c as Qe}from"./create-bbda4d67.js";import{u as Xe}from"./use-merged-state-d459d80e.js";function Je(e){return o=>{o?e.value=o.$el:e.value=null}}function Ye(e,o,i){if(!o)return e;const n=O(e.value);let r=null;return de(e,t=>{r!==null&&window.clearTimeout(r),t===!0?i&&!i.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function eo(e={},o){const i=Pe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,t=l=>{switch(l.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}n!==void 0&&Object.keys(n).forEach(x=>{if(x!==l.key)return;const b=n[x];if(typeof b=="function")b(l);else{const{stop:S=!1,prevent:N=!1}=b;S&&l.stopPropagation(),N&&l.preventDefault(),b.handler(l)}})},c=l=>{switch(l.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(x=>{if(x!==l.key)return;const b=r[x];if(typeof b=="function")b(l);else{const{stop:S=!1,prevent:N=!1}=b;S&&l.stopPropagation(),N&&l.preventDefault(),b.handler(l)}})},p=()=>{(o===void 0||o.value)&&(Z("keydown",document,t),Z("keyup",document,c)),o!==void 0&&de(o,l=>{l?(Z("keydown",document,t),Z("keyup",document,c)):(W("keydown",document,t),W("keyup",document,c))})};return Ce()?(Ie(p),Ke(()=>{(o===void 0||o.value)&&(W("keydown",document,t),W("keyup",document,c))})):p(),Oe(i)}const oo=j({name:"ChevronRight",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),no=I("ellipsis",{overflow:"hidden"},[ie("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),K("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),K("cursor-pointer",`
 cursor: pointer;
 `)]);function pe(e){return`${e}-ellipsis--line-clamp`}function fe(e,o){return`${e}-ellipsis--cursor-${o}`}const to=Object.assign(Object.assign({},J.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),go=j({name:"Ellipsis",inheritAttrs:!1,props:to,setup(e,{slots:o,attrs:i}){const{mergedClsPrefixRef:n}=he(e),r=J("Ellipsis","-ellipsis",no,_e,e,n),t=O(null),c=O(null),p=O(null),l=O(!1),x=k(()=>{const{lineClamp:d}=e,{value:v}=l;return d!==void 0?{textOverflow:"","-webkit-line-clamp":v?"":d}:{textOverflow:v?"":"ellipsis","-webkit-line-clamp":""}});function b(){let d=!1;const{value:v}=l;if(v)return!0;const{value:w}=t;if(w){const{lineClamp:_}=e;if(P(w),_!==void 0)d=w.scrollHeight<=w.offsetHeight;else{const{value:z}=c;z&&(d=z.getBoundingClientRect().width<=w.getBoundingClientRect().width)}T(w,d)}return d}const S=k(()=>e.expandTrigger==="click"?()=>{var d;const{value:v}=l;v&&((d=p.value)===null||d===void 0||d.setShow(!1)),l.value=!v}:void 0);Te(()=>{var d;e.tooltip&&((d=p.value)===null||d===void 0||d.setShow(!1))});const N=()=>a("span",Object.assign({},ae(i,{class:[`${n.value}-ellipsis`,e.lineClamp!==void 0?pe(n.value):void 0,e.expandTrigger==="click"?fe(n.value,"pointer"):void 0],style:x.value}),{ref:"triggerRef",onClick:S.value,onMouseenter:e.expandTrigger==="click"?b:void 0}),e.lineClamp?o:a("span",{ref:"triggerInnerRef"},o));function P(d){if(!d)return;const v=x.value,w=pe(n.value);e.lineClamp!==void 0?C(d,w,"add"):C(d,w,"remove");for(const _ in v)d.style[_]!==v[_]&&(d.style[_]=v[_])}function T(d,v){const w=fe(n.value,"pointer");e.expandTrigger==="click"&&!v?C(d,w,"add"):C(d,w,"remove")}function C(d,v,w){w==="add"?d.classList.contains(v)||d.classList.add(v):d.classList.contains(v)&&d.classList.remove(v)}return{mergedTheme:r,triggerRef:t,triggerInnerRef:c,tooltipRef:p,handleClick:S,renderTrigger:N,getTooltipDisabled:b}},render(){var e;const{tooltip:o,renderTrigger:i,$slots:n}=this;if(o){const{mergedTheme:r}=this;return a(He,Object.assign({ref:"tooltipRef",placement:"top"},o,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:i,default:(e=n.tooltip)!==null&&e!==void 0?e:n.default})}else return i()}}),we=j({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return a("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ue=se("n-dropdown-menu"),Y=se("n-dropdown"),ve=se("n-dropdown-option");function le(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function ro(e){return e.type==="group"}function ye(e){return e.type==="divider"}function io(e){return e.type==="render"}const ge=j({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=E(Y),{hoverKeyRef:i,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:t,activeKeyPathRef:c,animatedRef:p,mergedShowRef:l,renderLabelRef:x,renderIconRef:b,labelFieldRef:S,childrenFieldRef:N,renderOptionRef:P,nodePropsRef:T,menuPropsRef:C}=o,d=E(ve,null),v=E(ue),w=E(be),_=k(()=>e.tmNode.rawNode),z=k(()=>{const{value:u}=N;return le(e.tmNode.rawNode,u)}),ee=k(()=>{const{disabled:u}=e.tmNode;return u}),oe=k(()=>{if(!z.value)return!1;const{key:u,disabled:g}=e.tmNode;if(g)return!1;const{value:D}=i,{value:F}=n,{value:te}=r,{value:L}=t;return D!==null?L.includes(u):F!==null?L.includes(u)&&L[L.length-1]!==u:te!==null?L.includes(u):!1}),ne=k(()=>n.value===null&&!p.value),V=Ye(oe,300,ne),H=k(()=>!!(d!=null&&d.enteringSubmenuRef.value)),U=O(!1);G(ve,{enteringSubmenuRef:U});function B(){U.value=!0}function s(){U.value=!1}function y(){const{parentKey:u,tmNode:g}=e;g.disabled||l.value&&(r.value=u,n.value=null,i.value=g.key)}function h(){const{tmNode:u}=e;u.disabled||l.value&&i.value!==u.key&&y()}function f(u){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:g}=u;g&&!ce({target:g},"dropdownOption")&&!ce({target:g},"scrollbarRail")&&(i.value=null)}function R(){const{value:u}=z,{tmNode:g}=e;l.value&&!u&&!g.disabled&&(o.doSelect(g.key,g.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:x,renderIcon:b,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:C,popoverBody:w,animated:p,mergedShowSubmenu:k(()=>V.value&&!H.value),rawNode:_,hasSubmenu:z,pending:Q(()=>{const{value:u}=t,{key:g}=e.tmNode;return u.includes(g)}),childActive:Q(()=>{const{value:u}=c,{key:g}=e.tmNode,D=u.findIndex(F=>g===F);return D===-1?!1:D<u.length-1}),active:Q(()=>{const{value:u}=c,{key:g}=e.tmNode,D=u.findIndex(F=>g===F);return D===-1?!1:D===u.length-1}),mergedDisabled:ee,renderOption:P,nodeProps:T,handleClick:R,handleMouseMove:h,handleMouseEnter:y,handleMouseLeave:f,handleSubmenuBeforeEnter:B,handleSubmenuAfterEnter:s}},render(){var e,o;const{animated:i,rawNode:n,mergedShowSubmenu:r,clsPrefix:t,siblingHasIcon:c,siblingHasSubmenu:p,renderLabel:l,renderIcon:x,renderOption:b,nodeProps:S,props:N,scrollable:P}=this;let T=null;if(r){const w=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);T=a(xe,Object.assign({},w,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const C={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},d=S==null?void 0:S(n),v=a("div",Object.assign({class:[`${t}-dropdown-option`,d==null?void 0:d.class],"data-dropdown-option":!0},d),a("div",ae(C,N),[a("div",{class:[`${t}-dropdown-option-body__prefix`,c&&`${t}-dropdown-option-body__prefix--show-icon`]},[x?x(n):X(n.icon)]),a("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},l?l(n):X((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),a("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,p&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?a(Ze,null,{default:()=>a(oo,null)}):null)]),this.hasSubmenu?a(Ue,null,{default:()=>[a(qe,null,{default:()=>a("div",{class:`${t}-dropdown-offset-container`},a(Ge,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>a("div",{class:`${t}-dropdown-menu-wrapper`},i?a(De,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>T}):T)}))})]}):null);return b?b({node:v,option:n}):v}}),lo=j({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=E(ue),{renderLabelRef:i,labelFieldRef:n,nodePropsRef:r,renderOptionRef:t}=E(Y);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:r,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:n,nodeProps:r,renderLabel:t,renderOption:c}=this,{rawNode:p}=this.tmNode,l=a("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(p)),a("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},a("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},X(p.icon)),a("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(p):X((e=p.title)!==null&&e!==void 0?e:p[this.labelField])),a("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:l,option:p}):l}}),ao=j({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:n}=e;return a(je,null,a(lo,{clsPrefix:i,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:t}=r;return t.show===!1?null:ye(t)?a(we,{clsPrefix:i,key:r.key}):r.isGroup?($e("dropdown","`group` node is not allowed to be put in `group` node."),null):a(ge,{clsPrefix:i,tmNode:r,parentKey:o,key:r.key})}))}}),so=j({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return a("div",o,[e==null?void 0:e()])}}),xe=j({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=E(Y);G(ue,{showIconRef:k(()=>{const r=o.value;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:p}=t;return r?r(p):p.icon})}),hasSubmenuRef:k(()=>{const{value:r}=i;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:l})=>le(l,r));const{rawNode:p}=t;return le(p,r)})})});const n=O(null);return G(ze,null),G(Be,null),G(be,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,n=this.tmNodes.map(r=>{const{rawNode:t}=r;return t.show===!1?null:io(t)?a(so,{tmNode:r,key:r.key}):ye(t)?a(we,{clsPrefix:o,key:r.key}):ro(t)?a(ao,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):a(ge,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:t.props,scrollable:i})});return a("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?a(Ae,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Ve({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),uo=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Fe(),I("dropdown-option",`
 position: relative;
 `,[q("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[q("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[q("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ie("disabled",[K("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),q("&::before","background-color: var(--n-option-color-hover);")]),K("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),q("&::before","background-color: var(--n-option-color-active);")]),K("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),K("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[K("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[K("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[K("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("dropdown-menu","pointer-events: all;")]),I("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),I("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),I("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),q(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ie("scrollable",`
 padding: var(--n-padding);
 `),K("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),co={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},po=Object.keys(me),fo=Object.assign(Object.assign(Object.assign({},me),co),J.props),xo=j({name:"Dropdown",inheritAttrs:!1,props:fo,setup(e){const o=O(!1),i=Xe($(e,"show"),o),n=k(()=>{const{keyField:s,childrenField:y}=e;return Qe(e.options,{getKey(h){return h[s]},getDisabled(h){return h.disabled===!0},getIgnored(h){return h.type==="divider"||h.type==="render"},getChildren(h){return h[y]}})}),r=k(()=>n.value.treeNodes),t=O(null),c=O(null),p=O(null),l=k(()=>{var s,y,h;return(h=(y=(s=t.value)!==null&&s!==void 0?s:c.value)!==null&&y!==void 0?y:p.value)!==null&&h!==void 0?h:null}),x=k(()=>n.value.getPath(l.value).keyPath),b=k(()=>n.value.getPath(e.value).keyPath),S=Q(()=>e.keyboard&&i.value);eo({keydown:{ArrowUp:{prevent:!0,handler:ee},ArrowRight:{prevent:!0,handler:z},ArrowDown:{prevent:!0,handler:oe},ArrowLeft:{prevent:!0,handler:_},Enter:{prevent:!0,handler:ne},Escape:w}},S);const{mergedClsPrefixRef:N,inlineThemeDisabled:P}=he(e),T=J("Dropdown","-dropdown",uo,Ee,e,N);G(Y,{labelFieldRef:$(e,"labelField"),childrenFieldRef:$(e,"childrenField"),renderLabelRef:$(e,"renderLabel"),renderIconRef:$(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:c,lastToggledSubmenuKeyRef:p,pendingKeyPathRef:x,activeKeyPathRef:b,animatedRef:$(e,"animated"),mergedShowRef:i,nodePropsRef:$(e,"nodeProps"),renderOptionRef:$(e,"renderOption"),menuPropsRef:$(e,"menuProps"),doSelect:C,doUpdateShow:d}),de(i,s=>{!e.animated&&!s&&v()});function C(s,y){const{onSelect:h}=e;h&&re(h,s,y)}function d(s){const{"onUpdate:show":y,onUpdateShow:h}=e;y&&re(y,s),h&&re(h,s),o.value=s}function v(){t.value=null,c.value=null,p.value=null}function w(){d(!1)}function _(){H("left")}function z(){H("right")}function ee(){H("up")}function oe(){H("down")}function ne(){const s=V();s!=null&&s.isLeaf&&i.value&&(C(s.key,s.rawNode),d(!1))}function V(){var s;const{value:y}=n,{value:h}=l;return!y||h===null?null:(s=y.getNode(h))!==null&&s!==void 0?s:null}function H(s){const{value:y}=l,{value:{getFirstAvailableNode:h}}=n;let f=null;if(y===null){const R=h();R!==null&&(f=R.key)}else{const R=V();if(R){let u;switch(s){case"down":u=R.getNext();break;case"up":u=R.getPrev();break;case"right":u=R.getChild();break;case"left":u=R.getParent();break}u&&(f=u.key)}}f!==null&&(t.value=null,c.value=f)}const U=k(()=>{const{size:s,inverted:y}=e,{common:{cubicBezierEaseInOut:h},self:f}=T.value,{padding:R,dividerColor:u,borderRadius:g,optionOpacityDisabled:D,[M("optionIconSuffixWidth",s)]:F,[M("optionSuffixWidth",s)]:te,[M("optionIconPrefixWidth",s)]:L,[M("optionPrefixWidth",s)]:ke,[M("fontSize",s)]:Se,[M("optionHeight",s)]:Ne,[M("optionIconSize",s)]:Re}=f,m={"--n-bezier":h,"--n-font-size":Se,"--n-padding":R,"--n-border-radius":g,"--n-option-height":Ne,"--n-option-prefix-width":ke,"--n-option-icon-prefix-width":L,"--n-option-suffix-width":te,"--n-option-icon-suffix-width":F,"--n-option-icon-size":Re,"--n-divider-color":u,"--n-option-opacity-disabled":D};return y?(m["--n-color"]=f.colorInverted,m["--n-option-color-hover"]=f.optionColorHoverInverted,m["--n-option-color-active"]=f.optionColorActiveInverted,m["--n-option-text-color"]=f.optionTextColorInverted,m["--n-option-text-color-hover"]=f.optionTextColorHoverInverted,m["--n-option-text-color-active"]=f.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=f.optionTextColorChildActiveInverted,m["--n-prefix-color"]=f.prefixColorInverted,m["--n-suffix-color"]=f.suffixColorInverted,m["--n-group-header-text-color"]=f.groupHeaderTextColorInverted):(m["--n-color"]=f.color,m["--n-option-color-hover"]=f.optionColorHover,m["--n-option-color-active"]=f.optionColorActive,m["--n-option-text-color"]=f.optionTextColor,m["--n-option-text-color-hover"]=f.optionTextColorHover,m["--n-option-text-color-active"]=f.optionTextColorActive,m["--n-option-text-color-child-active"]=f.optionTextColorChildActive,m["--n-prefix-color"]=f.prefixColor,m["--n-suffix-color"]=f.suffixColor,m["--n-group-header-text-color"]=f.groupHeaderTextColor),m}),B=P?Le("dropdown",k(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:N,mergedTheme:T,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&v()},doUpdateShow:d,cssVars:P?void 0:U,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const e=(n,r,t,c,p)=>{var l;const{mergedClsPrefix:x,menuProps:b}=this;(l=this.onRender)===null||l===void 0||l.call(this);const S=(b==null?void 0:b(void 0,this.tmNodes.map(P=>P.rawNode)))||{},N={ref:Je(r),class:[n,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:p};return a(xe,ae(this.$attrs,N,S))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return a(We,Object.assign({},Me(this.$props,po),i),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}});export{oo as C,go as N,xo as a,Je as c,eo as u};
