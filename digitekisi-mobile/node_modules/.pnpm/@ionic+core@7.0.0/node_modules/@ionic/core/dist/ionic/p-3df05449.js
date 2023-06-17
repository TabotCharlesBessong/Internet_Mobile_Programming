/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{e as o,w as s}from"./p-973c78ac.js";import{f as t,s as a}from"./p-a3e5c807.js";import{c as r}from"./p-2e15200d.js";import"./p-e1bc9a81.js";const e=()=>{const e=window;e.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(e.innerWidth/2,e.innerHeight/2);if(!o)return;const c=t(o);c&&new Promise((o=>r(c,o))).then((()=>{s((async()=>{c.style.setProperty("--overflow","hidden"),await a(c,300),c.style.removeProperty("--overflow")}))}))}))}))};export{e as startStatusTap}