(()=>{var e={};e.id=496,e.ids=[496],e.modules={8180:e=>{e.exports={cardWrapper:"Card_cardWrapper__nzxJd"}},7522:(e,s,r)=>{"use strict";r.a(e,async(e,t)=>{try{r.r(s),r.d(s,{config:()=>j,default:()=>p,getServerSideProps:()=>m,getStaticPaths:()=>u,getStaticProps:()=>x,reportWebVitals:()=>h,routeModule:()=>b,unstable_getServerProps:()=>g,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>f});var a=r(7093),o=r(5244),i=r(1323),c=r(5949),n=r(3414),l=r(1187),d=e([l]);l=(d.then?(await d)():d)[0];let p=(0,i.l)(l,"default"),x=(0,i.l)(l,"getStaticProps"),u=(0,i.l)(l,"getStaticPaths"),m=(0,i.l)(l,"getServerSideProps"),j=(0,i.l)(l,"config"),h=(0,i.l)(l,"reportWebVitals"),f=(0,i.l)(l,"unstable_getStaticProps"),S=(0,i.l)(l,"unstable_getStaticPaths"),y=(0,i.l)(l,"unstable_getStaticParams"),g=(0,i.l)(l,"unstable_getServerProps"),v=(0,i.l)(l,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/suppliersList",pathname:"/suppliersList",bundlePath:"",filename:""},components:{App:n.default,Document:c.default},userland:l});t()}catch(e){t(e)}})},6799:(e,s,r)=>{"use strict";r(997),r(8180)},9004:(e,s,r)=>{"use strict";r.a(e,async(e,t)=>{try{r.d(s,{Z:()=>n});var a=r(997);r(6799);var o=r(6689),i=r(6908),c=e([i]);i=(c.then?(await c)():c)[0];let n=()=>{let[e,s]=(0,o.useState)([]),[r,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{(async()=>{try{let e=await fetch("https://jsonplaceholder.typicode.com/users");if(!e.ok)throw Error("Failed to fetch data");let r=await e.json();s(r)}catch(e){console.error("Error fetching data:",e)}})()},[]),a.jsx(a.Fragment,{children:a.jsx("section",{children:(0,a.jsxs)("div",{className:"p-4",children:[a.jsx("div",{className:"row",children:a.jsx("div",{className:"col-md-12",children:(0,a.jsxs)("div",{className:"my-5",children:[a.jsx("h3",{children:"Select Project"}),(0,a.jsxs)("select",{className:"form-select","aria-label":"Default select example",children:[a.jsx("option",{selected:!0,children:"Downtown Tower - Building"}),a.jsx("option",{value:"1",children:"One"}),a.jsx("option",{value:"2",children:"Two"}),a.jsx("option",{value:"3",children:"Three"})]})]})})}),a.jsx("div",{className:"row my-3",children:a.jsx("div",{className:"col-md-12",children:(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[a.jsx("div",{children:a.jsx("h2",{children:"Supplier & Subcontractor List"})}),(0,a.jsxs)("div",{className:"d-flex",children:[a.jsx("button",{type:"btn",className:"btn btn-outline-success mx-3",children:"Filters"}),a.jsx("button",{type:"btn",className:"btn btn-outline-success",children:"Add New"})]})]})})}),a.jsx("div",{className:"row my-3",children:a.jsx("div",{className:"col-md-12",children:a.jsx("div",{children:a.jsx(i.Z,{})})})})]})})})};t()}catch(e){t(e)}})},6908:(e,s,r)=>{"use strict";r.a(e,async(e,t)=>{try{r.d(s,{Z:()=>p});var a=r(997);r(6689);var o=r(2583),i=r.n(o),c=r(4563),n=r(2088),l=r(8773),d=e([c]);c=(d.then?(await d)():d)[0];let p=()=>{let e=[{name:a.jsx("b",{children:"ID"}),selector:e=>e.personID},{name:a.jsx("b",{children:"Supplier Name"}),selector:e=>e.project,wrap:"true"},{name:a.jsx("b",{children:"Address "}),selector:e=>e.projectPackage,wrap:"true"},{name:a.jsx("b",{children:"Type"}),selector:e=>e.mainContactor,wrap:"true"},{name:a.jsx("b",{children:"Action"}),selector:e=>e.Action,wrap:"true",width:"180px"}],s=[{personID:"001",project:"AA Energy Limited",projectPackage:"089 Kutch Green Apt. 448",mainContactor:"Wood Work Subcontractor",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"002",project:"Supplier North",projectPackage:"979 Immanuel Ferry Suit 526",mainContactor:"Steel Supplier",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"003",project:"Supplier ZX",projectPackage:"8587 Farida Ports",mainContactor:"MEP Subcontractor",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"004",project:"Supplier CM",projectPackage:"768 Destiny Suits 600",mainContactor:"Diesel Supplier",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"005",project:"Supplier Camelias",projectPackage:"042 Mylene Throughway ",mainContactor:"Asphalt",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"006",project:"Dubai Road",projectPackage:"Main Works",mainContactor:"Company G",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"007",project:"Dubai Road",projectPackage:"Main Works",mainContactor:"Company G",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"008",project:"Dubai Road",projectPackage:"Main Works",mainContactor:"Company G",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"009",project:"Dubai Road",projectPackage:"Main Works",mainContactor:"Company G",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})},{personID:"010",project:"Dubai Road",projectPackage:"Main Works",mainContactor:"Company G",Action:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx(l.ffH,{style:{color:"secondary",fontSize:"20px"}}),"  ",a.jsx(n.FH3,{icon:c.faTimes,className:"mx-2",style:{color:"red",fontSize:"20px"}})," "]})}];return a.jsx("section",{children:a.jsx("div",{className:"",children:a.jsx("div",{className:"row",children:a.jsx("div",{className:"col-md-12",children:a.jsx("div",{children:a.jsx(i(),{columns:e,data:s,fixedHeader:!0,pagination:!0,striped:!0})})})})})})};t()}catch(e){t(e)}})},1187:(e,s,r)=>{"use strict";r.a(e,async(e,t)=>{try{r.r(s),r.d(s,{default:()=>d,getServerSideProps:()=>l});var a=r(997),o=r(1352),i=r(7721),c=r(9004),n=e([c]);async function l(e){return{props:{}}}c=(n.then?(await n)():n)[0];let d=({childern:e})=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(i.Z,{}),(0,a.jsxs)(o.Z,{children:[" ",a.jsx(c.Z,{})]})]});t()}catch(e){t(e)}})},6449:e=>{"use strict";e.exports=require("@restart/hooks/useCallbackRef")},5205:e=>{"use strict";e.exports=require("@restart/hooks/useEventCallback")},3282:e=>{"use strict";e.exports=require("@restart/hooks/useMergedRefs")},6816:e=>{"use strict";e.exports=require("@restart/hooks/useWillUnmount")},7528:e=>{"use strict";e.exports=require("@restart/ui/Modal")},328:e=>{"use strict";e.exports=require("@restart/ui/ModalManager")},9003:e=>{"use strict";e.exports=require("classnames")},562:e=>{"use strict";e.exports=require("dom-helpers/addClass")},5918:e=>{"use strict";e.exports=require("dom-helpers/addEventListener")},7107:e=>{"use strict";e.exports=require("dom-helpers/canUseDOM")},7836:e=>{"use strict";e.exports=require("dom-helpers/css")},2902:e=>{"use strict";e.exports=require("dom-helpers/ownerDocument")},6117:e=>{"use strict";e.exports=require("dom-helpers/querySelectorAll")},451:e=>{"use strict";e.exports=require("dom-helpers/removeClass")},8951:e=>{"use strict";e.exports=require("dom-helpers/removeEventListener")},7233:e=>{"use strict";e.exports=require("dom-helpers/scrollbarSize")},6479:e=>{"use strict";e.exports=require("dom-helpers/transitionEnd")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},2583:e=>{"use strict";e.exports=require("react-data-table-component")},6405:e=>{"use strict";e.exports=require("react-dom")},7967:e=>{"use strict";e.exports=require("react-transition-group/Transition")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var s=require("../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[859,399,544,455,75],()=>r(7522));module.exports=t})();