import{v as r,m as l,r as p,n as u,e as m,o as d,w as f,t as y,p as a,N as _}from"./index-5e2885e4.js";import{q as g}from"./index-15d582a6.js";import{N as s}from"./Space-d49acb7b.js";import{N as h}from"./DataTable-bb49b036.js";import"./service-d19f0ccd.js";import"./format-length-c9d165c6.js";import"./Checkbox-2d4945a3.js";import"./use-merged-state-d459d80e.js";import"./RadioGroup-92bc79b0.js";import"./Popover-907f9950.js";import"./_baseMap-d2a29d52.js";import"./get-53588a31.js";import"./cssr-7767064c.js";import"./use-compitable-248ca92d.js";import"./next-frame-once-7035a838.js";import"./Suffix-9f9d022f.js";import"./Dropdown-8ccd025e.js";import"./Tooltip-5624ecb6.js";import"./Icon-b461a67a.js";import"./create-bbda4d67.js";import"./Select-94feec49.js";import"./use-locale-ba0171d5.js";import"./Empty-dd1b91e9.js";import"./Input-1bbd5e95.js";function R(){const{t}=r.useI18n(),n=l(),e=p({columns:[],tableData:[],loadingRef:u(!1)});return{variables:e,createColumns:i=>{i.columns=[{title:t("project.synchronization_instance.pipeline_id"),key:"pipelineId"},{title:t("project.synchronization_instance.source"),key:"sourceTableNames"},{title:t("project.synchronization_instance.read_rate"),key:"readQps"},{title:t("project.synchronization_instance.amount_of_data_read"),key:"readRowCount"},{title:t("project.synchronization_instance.delay_of_data"),key:"recordDelay",render:c=>c.recordDelay/1e3},{title:t("project.synchronization_instance.sink"),key:"sinkTableNames"},{title:t("project.synchronization_instance.processing_rate"),key:"writeQps"},{title:t("project.synchronization_instance.amount_of_data_written"),key:"writeRowCount"},{title:t("project.synchronization_instance.state"),key:"status"}]},getTableData:()=>{e.loadingRef||(e.loadingRef=!0,g({jobInstanceId:n.query.jobInstanceId}).then(i=>{e.tableData=i,e.loadingRef=!1}).catch(()=>{e.loadingRef=!1}))}}}const K=m({name:"RunningInstance",setup(){const{t}=r.useI18n(),{variables:n,getTableData:e,createColumns:o}=R();return d(()=>{o(n),e()}),f(r.useI18n().locale,()=>{o(n)}),{t,...y(n)}},render(){return a(s,{vertical:!0},{default:()=>[a(_,null,{default:()=>[a(s,{vertical:!0},{default:()=>[a(h,{loading:this.loadingRef,columns:this.columns,data:this.tableData},null)]})]})]})}});export{K as RunningInstance};