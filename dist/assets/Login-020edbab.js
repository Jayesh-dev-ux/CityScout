import{u,b as f,r as p,j as t,a as e,B as h}from"./index-4959922e.js";import{P as g}from"./PageNav-197c3243.js";import"./Logo-73f3edb9.js";const v="_login_1mydq_1",_="_form_1mydq_8",y="_row_1mydq_22",n={login:v,form:_,row:y};function x({email:o,password:r,setEmail:l,setPassword:c}){const{login:m,isAuthenticated:i}=u(),s=f();function d(a){a.preventDefault(),o&&r&&m(o,r)}return p.useEffect(function(){i&&s("/app",{replace:!0})},[i,s]),t("main",{className:n.login,children:[e(g,{}),t("form",{className:n.form,onSubmit:d,children:[t("div",{className:n.row,children:[e("label",{htmlFor:"email",children:"Email address"}),e("input",{type:"email",id:"email",onChange:a=>l(a.target.value),value:o})]}),t("div",{className:n.row,children:[e("label",{htmlFor:"password",children:"Password"}),e("input",{type:"password",id:"password",onChange:a=>c(a.target.value),value:r})]}),e("div",{children:e(h,{type:"primary",children:"Login"})})]})]})}export{x as default};
