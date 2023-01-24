"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[902],{902:function(e,n,i){i.r(n),i.d(n,{default:function(){return W}});var r,a,t,s,o,l,d,c,m,h,p,u,x=i(9439),f=i(168),Z=i(2360),g=i(1972),w=i(7309),v=i(2023),j=i(9214),b=i(9529),P=i(8999),y=i(1087),z=(0,Z.ZP)(g.Z.Item)(r||(r=(0,f.Z)(["\n  margin-bottom: 10px;\n  @media (min-width: 768px) {\n    margin-bottom: 24px;\n  }\n\n  label {\n    width: 150px;\n    padding-top: 8px;\n  }\n"]))),k=Z.ZP.div(a||(a=(0,f.Z)(["\n  padding-top: 10%;\n  @media (min-width: 768px) {\n    padding-left: 10%;\n  }\n  @media (min-width: 1280px) {\n    padding-left: 25%;\n  }\n"]))),V=(0,Z.ZP)(g.Z)(t||(t=(0,f.Z)(["\n  width: 100%;\n  @media (min-width: 768px) {\n    width: 500px;\n  }\n"]))),E=(0,Z.ZP)(w.Z)(s||(s=(0,f.Z)(["\n  width: 100px;\n  height: 40px;\n  @media (min-width: 768px) {\n    margin-left: 30%;\n  }\n  display: block;\n  font-size: 18px;\n"]))),F=(0,Z.ZP)(v.Z)(o||(o=(0,f.Z)(["\n  height: 40px;\n  font-size: 18px;\n"]))),M=(0,Z.ZP)(v.Z.Password)(l||(l=(0,f.Z)(["\n  height: 40px;\n  font-size: 18px;\n"]))),H=(0,Z.ZP)(j.Z)(d||(d=(0,f.Z)(["\n  color: #c7c6c6;\n"]))),q=(0,Z.ZP)(b.Z)(c||(c=(0,f.Z)(["\n  color: #c7c6c6;\n"]))),L=(0,Z.ZP)(P.Z)(m||(m=(0,f.Z)(["\n  color: #c7c6c6;\n"]))),R=(0,Z.ZP)(y.rU)(h||(h=(0,f.Z)(["\n  font-size: 18px;\n  margin: 0 4px;\n"]))),T=Z.ZP.div(p||(p=(0,f.Z)(["\n  font-size: 18px;\n  line-height: 1.11;\n  position: absolute;\n  top: -1%;\n  left: 50%;\n  @media (min-width: 768px) {\n    margin-left: 60px;\n  }\n"]))),C=Z.ZP.h2(u||(u=(0,f.Z)(["\n  color: #2e2d2dbc;\n  margin-bottom: 15px;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    margin-left: 30%;\n  }\n"]))),N=i(3825),B=i(7889),I=i(9434),O=i(184);function W(){var e=V.useForm(),n=(0,x.Z)(e,1)[0],i=(0,I.I0)(),r=(0,I.v9)((function(e){return e.auth})),a=r.isLoading,t=r.error;return(0,O.jsx)("section",{children:(0,O.jsx)(N.W,{children:(0,O.jsx)(k,{children:(0,O.jsxs)(V,{form:n,name:"register",onFinish:function(e){var r=e.name,s=e.email,o=e.password;o===e.confirm&&(i((0,B.z2)({name:r,email:s,password:o})),!a&&!t&&n.resetFields())},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0,children:[(0,O.jsx)(C,{children:"Register new user"}),(0,O.jsx)(z,{name:"name",label:"Name",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your name!",whitespace:!0}],children:(0,O.jsx)(F,{prefix:(0,O.jsx)(q,{})})}),(0,O.jsx)(z,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,O.jsx)(F,{prefix:(0,O.jsx)(H,{}),type:"email"})}),(0,O.jsx)(z,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,O.jsx)(M,{prefix:(0,O.jsx)(L,{}),pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{7,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters"})}),(0,O.jsx)(z,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var n=e.getFieldValue;return{validator:function(e,i){return i&&n("password")!==i?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:(0,O.jsx)(M,{prefix:(0,O.jsx)(L,{})})}),(0,O.jsxs)(z,{children:[" ",(0,O.jsx)(E,{type:"primary",htmlType:"submit",children:"Register"})," ",(0,O.jsxs)(T,{children:["or ",(0,O.jsx)(R,{to:"/login",children:" log in"}),"if you already have an account"," "]})]})]})})})})}},8999:function(e,n,i){i.d(n,{Z:function(){return l}});var r=i(1413),a=i(2791),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},s=i(219),o=function(e,n){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:t}))};o.displayName="LockOutlined";var l=a.forwardRef(o)},9214:function(e,n,i){i.d(n,{Z:function(){return l}});var r=i(1413),a=i(2791),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},s=i(219),o=function(e,n){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:t}))};o.displayName="MailOutlined";var l=a.forwardRef(o)}}]);
//# sourceMappingURL=902.32ff9d2b.chunk.js.map