import{e as c,as as g,ar as h,at as d,v as y,au as V,r as j,k as N,m as O,p as e,N as F,q as n,F as D}from"./index-5e2885e4.js";import"./lodash-11edae60.js";import{u as L}from"./use-message-88af69a6.js";import"./index.module-a00bcd5b.js";import{a as b,D as B,C as H}from"./index-5de39f79.js";import{LayoutModal as I}from"./layout-modal-ae1b700c.js";import{TaskSettingModal as q}from"./task-setting-modal-188a304e.js";import{u as T}from"./index-4e4366ce.js";import{C as R}from"./CopyOutlined-9b4275f0.js";import{S as $}from"./SettingOutlined-d17049cc.js";import{F as E,a as P}from"./FullscreenOutlined-c3c6909f.js";import{N as u}from"./Space-d49acb7b.js";import{N as l}from"./Tooltip-5624ecb6.js";import{N as i}from"./Icon-b461a67a.js";import"./index-0bca5bb9.js";import"./use-locale-ba0171d5.js";import"./use-merged-state-d459d80e.js";import"./Input-1bbd5e95.js";import"./Suffix-9f9d022f.js";import"./Add-c7f60439.js";import"./Form-6e61837b.js";import"./FormItem-7f69a4d7.js";import"./format-length-c9d165c6.js";import"./get-53588a31.js";import"./Select-94feec49.js";import"./use-compitable-248ca92d.js";import"./cssr-7767064c.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./next-frame-once-7035a838.js";import"./create-bbda4d67.js";import"./Empty-dd1b91e9.js";import"./use-form-structure-b872a9e7.js";import"./Grid-7fd51304.js";import"./Checkbox-2d4945a3.js";import"./service-d19f0ccd.js";import"./index-2d941bf7.js";const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},G=d("defs",null,null,-1),J=d("path",{d:"M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 .6.1 1.3.2 1.9c-.1 2-.2 4.1-.2 6.1c0 46.4 37.6 84 84 84s84-37.6 84-84c0-2.1-.1-4.1-.2-6.1c.1-.6.2-1.2.2-1.9V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zM720 352H208V160h512v192zM477 876c0 11-9 20-20 20s-20-9-20-20V696h40v180z",fill:"currentColor"},null,-1),K=[G,J],Q=c({name:"FormatPainterOutlined",render:function(r,t){return h(),g("svg",A,K)}}),U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},W=d("path",{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z",fill:"currentColor"},null,-1),X=[W],Y=c({name:"SaveOutlined",render:function(r,t){return h(),g("svg",U,X)}});function Z(){const{t:s}=y.useI18n(),r=L();return{copy:(o,a=s("hook.copy_success"))=>{V.clipboard(o)&&r.success(a)}}}const Ie=c({name:"DagToolbar",emits:["delete","save","layout"],setup(s,{emit:r}){const t=j({showLayoutModal:!1,showSettingModal:!1}),{t:o}=y.useI18n(),{copy:a}=Z(),{isFullscreen:p,toggle:v}=b(),_=N(),f=O(),m=T(),w=()=>{r("save")},M=()=>{_.push({name:"synchronization-definition",query:{project:f.query.project,global:f.query.global}})},C=()=>{r("delete")},z=(k,x,S)=>{t.showLayoutModal=!1,r("layout",k,x,S)};return()=>e(D,null,[e(F,null,{default:()=>[e(u,{justify:"space-between"},{default:()=>[e(u,{align:"center"},{default:()=>[e("span",null,[m.getDagInfo.name]),e(l,{trigger:"hover"},{trigger:()=>e(n,{quaternary:!0,circle:!0,onClick:()=>{a(m.getDagInfo.name)}},{default:()=>[e(i,null,{default:()=>[e(R,null,null)]})]}),default:()=>o("project.synchronization_definition.copy")})]}),e(u,null,{default:()=>[e(l,{trigger:"hover"},{trigger:()=>e(n,{strong:!0,secondary:!0,circle:!0,type:"info",onClick:()=>void(t.showSettingModal=!0)},{default:()=>[e(i,null,{default:()=>[e($,null,null)]})]}),default:()=>o("project.synchronization_definition.setting")}),e(l,{trigger:"hover"},{trigger:()=>e(n,{strong:!0,secondary:!0,circle:!0,type:"error",onClick:C},{default:()=>[e(i,null,{default:()=>[e(B,null,null)]})]}),default:()=>o("project.synchronization_definition.delete")}),e(l,{trigger:"hover"},{trigger:()=>e(n,{strong:!0,secondary:!0,circle:!0,type:"info",onClick:v},{default:()=>[e(i,null,{default:()=>[p.value?e(E,null,null):e(P,null,null)]})]}),default:()=>p.value?o("project.synchronization_definition.close_full_screen"):o("project.synchronization_definition.open_full_screen")}),e(l,{trigger:"hover"},{trigger:()=>e(n,{strong:!0,secondary:!0,circle:!0,type:"info",onClick:()=>void(t.showLayoutModal=!0)},{default:()=>[e(i,null,{default:()=>[e(Q,null,null)]})]}),default:()=>o("project.synchronization_definition.format")}),e(l,{trigger:"hover"},{trigger:()=>e(n,{strong:!0,secondary:!0,circle:!0,type:"success",onClick:w},{default:()=>[e(i,null,{default:()=>[e(Y,null,null)]})]}),default:()=>o("project.synchronization_definition.save")}),e(l,{trigger:"hover"},{trigger:()=>e(n,{strong:!0,secondary:!0,circle:!0,type:"error",onClick:M},{default:()=>[e(i,null,{default:()=>[e(H,null,null)]})]}),default:()=>o("project.synchronization_definition.close")})]})]})]}),e(I,{showModalRef:t.showLayoutModal,onCancelModal:()=>void(t.showLayoutModal=!1),onConfirmModal:z},null),e(q,{show:t.showSettingModal,onCancelModal:()=>void(t.showSettingModal=!1)},null)])}});export{Ie as DagToolbar};