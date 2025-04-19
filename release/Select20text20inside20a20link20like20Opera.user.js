// ==UserScript==
// @name Select text inside a link like Opera
// @version 6.0.0
// @homepageURL https://github.com/eight04/select-text-inside-a-link-like-opera#readme
// @supportURL https://github.com/eight04/select-text-inside-a-link-like-opera/issues
// @license MIT
// @author eight <eight04@gmail.com> (http://eight04.blogspot.tw)
// @namespace eight04.blogspot.com
// @include *
// @grant GM_addStyle
// @run-at document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Select20text20inside20a20link20like20Opera.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Select20text20inside20a20link20like20Opera.meta.js
// ==/UserScript==
const tracker=createMovementTracker(),selection=window.getSelection();let preState,linkTarget,state="WAITING",mousemoves=0;const initPos=[0,0];let selectType;const EVENTS={mousedown:t=>{if("WAITING"===state){if(t.altKey||t.button)return;if(/img/i.test(t.target.nodeName))return;const e=findLinkTarget(t.target);if(!e||!e.href)return;if(selectType=t.ctrlKey?"add":t.shiftKey?"extend":"new",initPos[0]=t.pageX,initPos[1]=t.pageY,"new"===selectType&&!selection.isCollapsed&&inSelect(getInitPos(),selection))return;mousemoves=0,state="STARTING",linkTarget=e,linkTarget.classList.add("select-text-inside-a-link")}},mousemove:t=>{if("STARTING"===state&&(mousemoves++,mousemoves>=3&&startSelecting(t)),"STARTED"===state){const e=caretPositionFromPoint(t.pageX-window.scrollX,t.pageY-window.scrollY);selection.extend(e.offsetNode,e.offset)}},mouseup:()=>{"WAITING"!==state&&(preState=state,state="ENDING",setTimeout(startWaiting))},click:t=>{if("ENDING"===state){if("STARTED"===preState){findLinkTarget(t.target)===linkTarget&&(t.preventDefault(),t.stopImmediatePropagation())}startWaiting()}},dragstart:t=>{"STARTED"!==state?"STARTING"===state&&startSelecting(t):t.preventDefault()}};for(const t in EVENTS)document.addEventListener(t,EVENTS[t],!0);function startSelecting(t){if(shouldStart(t)){if("dragstart"===t.type&&t.preventDefault(),"new"===selectType){const t=getInitPos();selection.collapse(t.offsetNode,t.offset)}else if("add"===selectType){const t=new Range,e=getInitPos();t.setStart(e.offsetNode,e.offset),selection.addRange(t)}state="STARTED"}else startWaiting()}function getInitPos(){return caretPositionFromPoint(initPos[0]-window.scrollX,initPos[1]-window.scrollY)}function shouldStart(t){const e=tracker?tracker():[Math.abs(t.pageX-initPos[0]),Math.abs(t.pageY-initPos[1])];return e[0]>=e[1]}function startWaiting(){linkTarget&&linkTarget.classList.remove("select-text-inside-a-link"),state="WAITING",linkTarget=null}function createMovementTracker(){const t=[[0,0],[0,0],[0,0]];let e=0;return document.addEventListener("mousemove",(n=>{t[e][0]=n.pageX,t[e][1]=n.pageY,e=(e+1)%3})),()=>{const n=[];for(let o=0;o<2;o++)n.push(Math.abs(t[e][o]-t[(e+1)%3][o])+Math.abs(t[(e+1)%3][o]-t[(e+2)%3][o]));return n}}function caretPositionFromPoint(t,e){if(document.caretPositionFromPoint)return document.caretPositionFromPoint(t,e);var n=document.caretRangeFromPoint(t,e);return{offsetNode:n.startContainer,offset:n.startOffset}}function inSelect(t,e){var n,o=e.rangeCount;for(n=0;n<o;n++)if(e.getRangeAt(n).isPointInRange(t.offsetNode,t.offset))return!0;return!1}function findLinkTarget(t){for(;t&&"A"!==t.nodeName&&"a"!==t.nodeName;)t=t.parentNode;return t}document.contentType&&document.contentType.endsWith("/xml")||document.addEventListener("DOMContentLoaded",(function(){GM_addStyle(".select-text-inside-a-link{ -moz-user-select: text!important; }")}));