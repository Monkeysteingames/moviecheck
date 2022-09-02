(this["webpackJsonpjobly-frontend"]=this["webpackJsonpjobly-frontend"]||[]).push([[0],{153:function(e,t,n){e.exports=n(292)},158:function(e,t,n){},186:function(e,t){},188:function(e,t){},201:function(e,t){},203:function(e,t){},231:function(e,t){},233:function(e,t){},234:function(e,t){},239:function(e,t){},241:function(e,t){},260:function(e,t){},272:function(e,t){},275:function(e,t){},292:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(21),c=n.n(l),u=(n(158),n(150)),s=n(5),o=n.n(s),i=n(7),m=n(10),p=n(9),f=n(6),E=r.a.createContext();var b=function(e){var t=e.logout,n=Object(a.useContext)(E).currentUser;return r.a.createElement("div",null,r.a.createElement(f.h,null,r.a.createElement(f.g,null,r.a.createElement(p.c,{className:"nav-link",exact:!0,to:"/"},"Jobly")),n?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.g,null,r.a.createElement(p.c,{className:"nav-link",exact:!0,to:"/jobs"},"jobs")),r.a.createElement(f.g,null,r.a.createElement(p.c,{className:"nav-link",exact:!0,to:"/companies"},"companies")),r.a.createElement(f.g,null,r.a.createElement(p.c,{className:"nav-link",exact:!0,to:"/profile"},"profile")),r.a.createElement(f.g,null,r.a.createElement(p.b,{to:"/",onClick:t},"Log out ",n.username))):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.g,null,r.a.createElement(p.c,{className:"nav-link",exact:!0,to:"/login"},"login")),r.a.createElement(f.g,null,r.a.createElement(p.c,{className:"nav-link",exact:!0,to:"/signup"},"sign up")))))},h=n(8);var v=function(){var e=Object(a.useContext)(E);return r.a.createElement("div",{className:"home"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to Jobly!"),r.a.createElement("p",null,"This is your number 1 stop for job searching on the internet!"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Create an account or log in to start working towards your future!"),r.a.createElement(p.b,{to:"/login"},r.a.createElement("button",null,"Login")),r.a.createElement(p.b,{to:"/signup"},r.a.createElement("button",null,"Sign up"))))};var d=function(e){var t=e.description,n=e.handle,a=e.name,l=e.numEmployees;return r.a.createElement("div",null,r.a.createElement(f.b,{body:!0,style:{backgroundColor:"lightgray",borderColor:"lightgray"}},r.a.createElement(f.c,null,r.a.createElement(f.f,{tag:"h4"},a),r.a.createElement(f.d,{className:"mb-2 text-muted",tag:"h6"},t),r.a.createElement(f.e,null,"Number of employees: ",l),r.a.createElement(p.b,{to:"/companies/".concat(n)},"Jobs"))))},g=n(146),y=n(147),j=n(148),w=n.n(j),x="https://jobly-backend-zaug.herokuapp.com",O=function(){function e(){Object(g.a)(this,e)}return Object(y.a)(e,null,[{key:"request",value:function(){var t=Object(i.a)(o.a.mark((function t(n){var a,r,l,c,u,s,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:{},r=i.length>2&&void 0!==i[2]?i[2]:"get",console.debug("API Call:",n,a,r),l="".concat(x,"/").concat(n),c={Authorization:"Bearer ".concat(e.token),"Access-Control-Allow-Origin":"http://localhost:300","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE"},u="get"===r?a:{},t.prev=6,t.next=9,w()({url:l,method:r,data:a,params:u,headers:c});case 9:return t.abrupt("return",t.sent.data);case 12:throw t.prev=12,t.t0=t.catch(6),console.error("API Error:",t.t0.response),s=t.t0.response.data.error.message,Array.isArray(s)?s:[s];case 17:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCompany",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.company);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCompanies",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies");case 2:return t=e.sent,e.abrupt("return",t.companies);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getJobs",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("jobs");case 2:return t=e.sent,e.abrupt("return",t.jobs);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"authenticate",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/token",t,"post");case 2:return n=e.sent,e.abrupt("return",n.token);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/register",t,"post");case 2:return n=e.sent,e.abrupt("return",n.token);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t),n,"patch");case 2:return a=e.sent,e.abrupt("return",a.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"apply",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t,"/jobs/").concat(n),{},"post");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();var k=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getCompanies();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,n?r.a.createElement(r.a.Fragment,null,n.map((function(e,t){return r.a.createElement(d,{description:e.description,handle:e.handle,name:e.name,numEmployees:e.numEmployees,key:t,idx:t})}))):r.a.createElement("p",null,"loading...."))};var C=function(e){var t=e.title,n=e.salary,l=e.equity,c=e.jobId,u=Object(a.useContext)(E),s=u.currentUser,p=u.applyForJob,b=u.jobsApplied,h=Object(a.useState)(),v=Object(m.a)(h,2),d=v[0],g=v[1];function y(){return(y=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(s.username,c);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){g(!0)}),[d]),r.a.createElement("div",null,r.a.createElement(f.b,{body:!0,style:{backgroundColor:"lightgray",borderColor:"lightgray"}},r.a.createElement(f.c,null,r.a.createElement(f.f,{tag:"h4"},t),r.a.createElement(f.d,{className:"mb-2 text-muted",tag:"h6"},"Salary: ",n),r.a.createElement(f.e,null,"Equity: ",l),b.has(c)?r.a.createElement(f.a,null,"Applied"):r.a.createElement(f.a,{onClick:function(){return y.apply(this,arguments)}},"Apply"))))};var N=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(h.h)().handle;return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getCompany(c);case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),r.a.createElement("div",null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,n.name),r.a.createElement("h3",null,n.description),n.jobs.map((function(e,t){return r.a.createElement(C,{title:e.title,salary:e.salary,equity:e.equity,jobId:e.id,key:e.id})}))):r.a.createElement("p",null,"loading...."))};var S=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getJobs();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,n?r.a.createElement(r.a.Fragment,null,n.map((function(e,t){return r.a.createElement(C,{title:e.title,salary:e.salary,equity:e.equity,key:e.id,jobId:e.id})}))):r.a.createElement("p",null,"loading...."))},A=n(27),q=n(25);n(42);var U=function(e){var t=e.login,n=Object(a.useState)({username:"",password:""}),l=Object(m.a)(n,2),c=l[0],u=l[1],s=Object(h.g)();function o(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(q.a)(Object(q.a)({},e),{},Object(A.a)({},n,a))}))}return r.a.createElement("section",null,r.a.createElement(f.b,null,r.a.createElement(f.c,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c),s.push("/")}},r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Username: "),r.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:o}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Password: "),r.a.createElement("input",{type:"password",name:"password",value:c.password,onChange:o}))),r.a.createElement(f.a,null,"Login")))))};var F=function(e){var t=e.signup,n=Object(a.useState)({username:"",password:"",firstName:"",lastName:"",email:""}),l=Object(m.a)(n,2),c=l[0],u=l[1],s=Object(h.g)();function o(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(q.a)(Object(q.a)({},e),{},Object(A.a)({},n,a))}))}return r.a.createElement("section",null,r.a.createElement(f.b,null,r.a.createElement(f.c,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c),s.push("/")}},r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Username: "),r.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:o}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Password: "),r.a.createElement("input",{type:"password",name:"password",value:c.password,onChange:o}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"First name: "),r.a.createElement("input",{type:"text",name:"firstName",value:c.firstName,onChange:o}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Last name: "),r.a.createElement("input",{type:"text",name:"lastName",value:c.lastName,onChange:o}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Email: "),r.a.createElement("input",{type:"email",name:"email",value:c.email,onChange:o}))),r.a.createElement(f.a,null,"Sign up")))))};var J=function(){var e=Object(a.useContext)(E),t=e.currentUser,n=e.setCurrentUser,l=Object(a.useState)({username:t.username,password:"",firstName:t.firstName,lastName:t.lastName,email:t.email}),c=Object(m.a)(l,2),u=c[0],s=c[1],p=Object(h.g)();function b(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(q.a)(Object(q.a)({},e),{},Object(A.a)({},n,a))}))}function v(){return(v=Object(i.a)(o.a.mark((function e(t){var a,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={password:u.password,firstName:u.firstName,lastName:u.lastName,email:u.email},e.prev=2,l=u.username,e.next=6,O.updateUser(l,a);case 6:r=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:n(r),p.push("/");case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return r.a.createElement("section",null,r.a.createElement(f.b,null,r.a.createElement(f.c,null,r.a.createElement("form",{onSubmit:function(e){return v.apply(this,arguments)}},r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("p",{className:"form-control-plaintext"},u.username)),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"First name: "),r.a.createElement("input",{type:"text",name:"firstName",value:u.firstName,onChange:b}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Last name: "),r.a.createElement("input",{type:"text",name:"lastName",value:u.lastName,onChange:b}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Email: "),r.a.createElement("input",{type:"email",name:"email",value:u.email,onChange:b}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("b",null,"Type in password to confirm changes: "),r.a.createElement("input",{type:"password",name:"password",value:u.password,onChange:b}))),r.a.createElement(f.a,null,"Update")))))},I=function(e){var t=e.path,n=e.children;return Object(a.useContext)(E).currentUser?r.a.createElement(h.b,{exact:!0,path:t},n):r.a.createElement(h.a,{to:"/"})};var P=function(e){var t=e.login,n=e.signup;return r.a.createElement("div",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/"},r.a.createElement(v,{login:t,signup:n})),r.a.createElement(h.b,{exact:!0,path:"/login"},r.a.createElement(U,{login:t})),r.a.createElement(h.b,{exact:!0,path:"/signup"},r.a.createElement(F,{signup:n})),r.a.createElement(I,{exact:!0,path:"/companies/:handle"},r.a.createElement(N,null)),r.a.createElement(I,{exact:!0,path:"/companies"},r.a.createElement(k,null)),r.a.createElement(I,{exact:!0,path:"/jobs"},r.a.createElement(S,null)),r.a.createElement(I,{exact:!0,path:"/profile"},r.a.createElement(J,null)),r.a.createElement(h.a,{to:"/"})))},L=n(149),T=n.n(L);var D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage.getItem(e)||t,r=Object(a.useState)(n),l=Object(m.a)(r,2),c=l[0],u=l[1];return Object(a.useEffect)((function(){null===c?localStorage.removeItem(e):localStorage.setItem(e,c)}),[e,c]),[c,u]};var B=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],l=t[1],c=D("jobly-token"),s=Object(m.a)(c,2),f=s[0],h=s[1],v=Object(a.useState)(new Set),d=Object(m.a)(v,2),g=d[0],y=d[1];function j(){return(j=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.authenticate(t);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function w(){return(w=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.register(t);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(){return(x=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{O.apply(t,n),y(new Set([].concat(Object(u.a)(g),[n])))}catch(a){console.error(a)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=16;break}return e.prev=1,t=T.a.decode(f),n=t.username,O.token=f,e.next=6,O.getUser(n);case 6:a=e.sent,l(a),y(new Set(a.applications)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),l(null);case 15:case 16:case 17:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),r.a.createElement(p.a,null,r.a.createElement(E.Provider,{value:{currentUser:n,setCurrentUser:l,applyForJob:function(e,t){return x.apply(this,arguments)},jobsApplied:g,setJobsApplied:y}},r.a.createElement("div",{className:"App"},r.a.createElement(b,{logout:function(){l(null),h(null)}}),r.a.createElement(P,{login:function(e){return j.apply(this,arguments)},signup:function(e){return w.apply(this,arguments)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},42:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.034b3c71.chunk.js.map