import{i as s,q as t}from"./index-5e2885e4.js";import{C as a}from"./column-width-config-b963bc25.js";import{N as h,D as v}from"./DeleteOutlined-099c0ef1.js";import{N as p}from"./Icon-b461a67a.js";import{N as f}from"./Tooltip-5624ecb6.js";import{N}from"./Switch-bdda7b10.js";import{N as g}from"./Space-d49acb7b.js";const O=l=>{const u=(i,c)=>l.buttons.filter(e=>!(e.isHidden&&e.isHidden(i))).map(e=>{const d=typeof e.disabled=="function"?e.disabled(i)||i.isEdit===!1:!!e.disabled||i.isEdit===!1,m=typeof e.icon=="function"?e.icon(i):e.icon,o=typeof e.text=="function"?e.text(i):e.text,r={disabled:d,tag:"div",circle:!0,size:"small",class:e.class};if(e.isDelete)return s(f,null,{trigger:()=>s(h,{onPositiveClick:()=>e.onPositiveClick?void e.onPositiveClick(i,c):()=>{},negativeText:e.negativeText,positiveText:e.positiveText},{trigger:()=>s(t,{...r,type:"error"},{default:()=>s(p,null,{default:()=>e.icon||s(v)})}),default:()=>e.popTips}),default:()=>o});if(e.isAuth)return s(e.auth,{...r,row:i});if(e.isSwitch)return s(f,null,{trigger:()=>s(N,{value:i.status,checkedValue:e.checkedValue,uncheckedValue:e.uncheckedValue,onUpdateValue:n=>e.onUpdateValue?void e.onUpdateValue(n,i):()=>{}}),default:()=>o});if(e.isCustom&&e.customFunc){const{customFunc:n}=e;return n(i)}return(typeof e.show=="function"?e.show.call(void 0,i):e.show===void 0?!0:!!e.show)?s(f,null,{trigger:()=>s(t,{...r,type:"info",onClick:()=>e.onClick?void e.onClick(i):()=>{}},{default:()=>s(p,null,{default:()=>m})}),default:()=>o}):s("")});return{title:l.title,key:l.key,...a.operation(l.itemNum),render:(i,c)=>{const e=u(i,c),d=l.preRender&&l.preRender(i,e,c);return d===void 0?s(g,null,{default:()=>e}):d}}};export{O as u};
