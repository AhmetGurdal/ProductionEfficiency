(this.webpackJsonpefficiency=this.webpackJsonpefficiency||[]).push([[0],{48:function(e,n,a){"use strict";a.r(n);var t=a(3),c=a(0),i=a.n(c),r=a(14),s=a.n(r),m=(a(38),a(15)),l=a(6),u=a(53),j=a(55),o=function(){return Object(t.jsxs)(u.a,{bg:"light",expand:"lg",children:[Object(t.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(t.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(t.jsxs)(j.a,{className:"mx-auto",children:[Object(t.jsx)(m.b,{className:"nav-link",to:"/",children:"Home"}),Object(t.jsx)(m.b,{className:"nav-link",to:"/about",children:"About"})]})})]})},b=a(21),x=a(50),d=a(32),h=a(54),O=a(51),p=[{id:0,name:"Tomato",description:"I am an aweful red tomato ;)",requirements:{minerals:[{name:"Nitrogen",unit:"%",min:2.28,max:4.89,avg:3.9},{name:"Phosphorus",unit:"%",min:.26,max:.71,avg:.6},{name:"Potassum",unit:"%",min:3.06,max:5.43,avg:4.3},{name:"Sulfur",unit:"%",min:.94,max:4.15,avg:2.3},{name:"Calcium",unit:"%",min:.94,max:4.15,avg:2.3},{name:"Magnesium",unit:"%",min:.21,max:.64,avg:.4},{name:"Iron",unit:"ppm",min:79.8,max:193.2,avg:121.5},{name:"Manganese",unit:"ppm",min:32.8,max:225.7,avg:95.5},{name:"Copper",unit:"ppm",min:6.9,max:69.2,avg:18},{name:"Zinc",unit:"ppm",min:27.3,max:86.1,avg:46.6}]}},{id:1,name:"Fasulya",description:"I am an aweful red tomato ;)",requirements:{minerals:[{name:"Nitrogen",unit:"%",min:2.28,max:4.89,avg:3.9},{name:"Phosphorus",unit:"%",min:.26,max:.71,avg:.6},{name:"Magnesium",unit:"%",min:.21,max:.64,avg:.4},{name:"Iron",unit:"ppm",min:79.8,max:193.2,avg:121.5},{name:"Manganese",unit:"ppm",min:32.8,max:225.7,avg:95.5},{name:"Copper",unit:"ppm",min:6.9,max:69.2,avg:18},{name:"Zinc",unit:"ppm",min:27.3,max:86.1,avg:46.6}]}}],v=function(){var e=p[0],n=Object(c.useState)(e.id),a=Object(b.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)({}),m=Object(b.a)(s,2),l=m[0],u=m[1],j=Object(c.useState)(0),o=Object(b.a)(j,2),v=o[0],g=o[1],f=p[i],y=function(e,n){var a=l;a[e]=n.target.value,u(a),function(){var e=0,n=!0,a=0;Object.keys(l).forEach((function(t){var c=parseFloat(l[t]),i=f.requirements.minerals.filter((function(e){return e.name===t}))[0];isNaN(c)||(c>i.max?n=!1:c>=i.avg?e+=-1/-c*(100*i.avg):(e+=(c-i.min)*(100/(i.avg-i.min)))<=0&&(n=!1),a+=1)})),e=Math.round(e),n||(e=1e-12),g(e/a)}()};return Object(t.jsxs)(O.a,{fluid:!0,children:[Object(t.jsx)(x.a,{className:"text-center",children:Object(t.jsx)(d.a,{md:12,children:Object(t.jsxs)("h2",{children:["Efficiency Calculator (",f.name,")"]})})}),Object(t.jsx)("hr",{}),Object(t.jsxs)(h.a,{children:[Object(t.jsx)(x.a,{className:"justify-content-center",children:Object(t.jsx)(d.a,{md:6,children:Object(t.jsx)(h.a.Group,{controlId:"exampleForm.ControlSelect1",className:"m-2",children:Object(t.jsx)(h.a.Control,{as:"select",value:i,onChange:function(e){r(parseInt(e.target.value)),g(0),u({}),Array.from(document.querySelectorAll("input")).forEach((function(e){return e.value=""}))},children:p.map((function(e){return Object(t.jsx)("option",{value:e.id,children:e.name},e.id)}))})})})}),Object(t.jsx)(x.a,{md:5,className:"text-center justify-content-center",children:v?Object(t.jsxs)("h1",{children:[v," %"]}):null}),Object(t.jsx)(x.a,{children:Object(t.jsx)(d.a,{md:12,children:f.requirements.minerals.map((function(e){return Object(t.jsxs)(x.a,{className:"justify-content-center m-1",children:[Object(t.jsx)(d.a,{md:2,children:e.name}),Object(t.jsx)(d.a,{md:10,children:Object(t.jsx)(h.a.Control,{className:"requirement-field",name:e.name,placeholder:e.unit,type:"text",onChange:function(n){return y(e.name,n)}})})]},e.name)}))})})]})]})},g=a(52),f=function(){var e=Object(c.useRef)(null);return Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"About Page"}),Object(t.jsx)("hr",{}),"Result1: ",Object(t.jsx)("span",{children:2}),Object(t.jsx)("hr",{}),"Result2: ",Object(t.jsx)("span",{children:2}),Object(t.jsx)("hr",{}),Object(t.jsx)(h.a,{ref:e,onSubmit:function(n){var a;n.preventDefault();var t=null===(a=e.current)||void 0===a?void 0:a.getElementsByClassName("input");t&&Array.from(t).forEach((function(e){console.log(e.getAttribute("name")),console.log(e.getAttribute("value"))}))},children:Object(t.jsxs)(h.a.Group,{children:[Object(t.jsx)(h.a.Control,{name:"x",type:"number",className:"input",defaultValue:2}),Object(t.jsx)(h.a.Control,{name:"y",type:"number",className:"input",defaultValue:2}),Object(t.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})},y=function(){return Object(t.jsx)(m.a,{children:Object(t.jsxs)("div",{children:[Object(t.jsx)(o,{}),Object(t.jsx)("main",{className:"pt-4",children:Object(t.jsxs)(l.c,{children:[Object(t.jsx)(l.a,{path:"/about",children:Object(t.jsx)(f,{})}),Object(t.jsx)(l.a,{path:"/",children:Object(t.jsx)(v,{})})]})})]})})};s.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(y,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.9ea8874f.chunk.js.map