"use strict";var a=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var d=(e,r)=>{for(var s in r)a(e,s,{get:r[s],enumerable:!0})},k=(e,r,s,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of E(r))!c.call(e,o)&&o!==s&&a(e,o,{get:()=>r[o],enumerable:!(t=x(r,o))||t.enumerable});return e};var l=e=>k(a({},"__esModule",{value:!0}),e);var p={};d(p,{FakerError:()=>n});module.exports=l(p);class n extends Error{}0&&(module.exports={FakerError});
