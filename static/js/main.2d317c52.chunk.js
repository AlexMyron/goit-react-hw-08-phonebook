(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a,r,c,o,s,i,u,l,p=n(0),d=n.n(p),b=n(18),j=n.n(b),x=n(28),f=(n(61),n(9)),h=n(11),g=(n(67),n(68),n(5)),O=n(6),m=n(54),v=n.n(m),w=O.a.div(a||(a=Object(g.a)(["\n  position: relative;\n  width: 80%;\n  margin: auto;\n\n  ","\n\n  opacity: ",";\n"])),"",(function(e){return e.transparent?.5:1})),y=Object(O.a)(v.a)(r||(r=Object(g.a)(["\n  position: absolute;\n  top: 100px;\n  left: 100px;\n"]))),C=O.a.div(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 40px;\n\n  border-bottom: 1px solid #2b4054;\n"]))),k=n(30),z=function(e){return e.contacts},S=function(e){return e.filter},L=Object(k.a)([S,z],(function(e,t){var n;return e?(n=function(e,t){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t,e),n):t})),I=function(e){return!1},D={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getUserEmail:function(e){return e.auth.user.email},getUserToken:function(e){return e.auth.token},getUserDetails:function(e){return e.auth.user}},M=O.a.ul(o||(o=Object(g.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n"]))),F=Object(O.a)(x.b)(s||(s=Object(g.a)(["\n  text-decoration: none;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),E=n(1),T=function(){var e=Object(f.c)(D.getIsLoggedIn);return Object(E.jsxs)(M,{children:[Object(E.jsx)("li",{children:Object(E.jsx)(F,{to:"/",activeStyle:{fontWeight:"bold",color:"#024ab5"},children:"Home"})}),Object(E.jsx)("li",{children:e&&Object(E.jsx)(F,{to:"/contacts",activeStyle:{fontWeight:"bold",color:"#024ab5"},children:"Contacts"})})]})},U=n(24),A=O.a.div(i||(i=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),B=O.a.button(u||(u=Object(g.a)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: #0d6efd;\n\n  border: none;\n  background-color: transparent;\n  :hover {\n    color: #343aeb;\n  }\n"]))),N=Object(O.a)(U.a)(l||(l=Object(g.a)(["\n  :hover,\n  :focus {\n    background-color: #7aaffd;\n    color: #ffffff;\n  }\n"]))),P=n(15),q=n.n(P),W=n(25),H=n(20),R=n.n(H),V=n(13);R.a.defaults.baseURL="https://connections-api.herokuapp.com";var J,Y,Z,G,$,K,Q,X,_,ee,te,ne,ae,re,ce,oe,se,ie,ue,le,pe,de,be,je,xe=function(e){R.a.defaults.headers.common.Authorization="Bearer ".concat(e)},fe=function(){R.a.defaults.headers.common.Authorization=""},he=Object(V.c)("auth/register",function(){var e=Object(W.a)(q.a.mark((function e(t){var n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post("/users/signup",t);case 3:return n=e.sent,a=n.data,xe(a.token),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),new Error(e.t0.mesage);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),ge=Object(V.c)("auth/login",function(){var e=Object(W.a)(q.a.mark((function e(t){var n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post("users/login",t);case 3:return n=e.sent,a=n.data,xe(a.token),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),Oe={register:he,login:ge,logout:Object(V.c)("auth/logout",Object(W.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post("/users/logout");case 3:fe(),e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),console.log(e.t0.message),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))),getContactData:Object(V.c)("auth/getContactData",Object(W.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("/users/current");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))))},me=Oe,ve={openModal:Object(V.b)("modal/open"),closeModal:Object(V.b)("modal/close"),setModalContent:Object(V.b)("modal/setContent")},we=function(){var e=Object(f.c)(D.getUserEmail),t=Object(f.c)(D.getUserToken),n=Object(f.c)(D.getUserToken),a=Object(f.b)(),r=Object(h.f)();return Object(E.jsx)(E.Fragment,{children:t&&Object(E.jsxs)(A,{children:[Object(E.jsx)(B,{type:"button",onClick:function(){a(me.getContactData()),a(ve.setModalContent("userData")),a(ve.openModal())},children:e}),Object(E.jsx)(N,{variant:"light",type:"button",onClick:function(){a(me.logout(n)),r.push("/")},children:"Log out"})]})})},ye=O.a.ul(J||(J=Object(g.a)(["\n  display: flex;\n  gap: 20px;\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n\n  list-style: none;\n"]))),Ce=Object(O.a)(x.b)(Y||(Y=Object(g.a)(["\n  text-decoration: none;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),ke=function(){return Object(E.jsxs)(ye,{children:[Object(E.jsx)("li",{children:Object(E.jsx)(Ce,{to:"/login",activeStyle:{fontWeight:"bold",color:"#024ab5"},children:"Login"})}),Object(E.jsx)("li",{children:Object(E.jsx)(Ce,{to:"/register",activeStyle:{fontWeight:"bold",color:"#024ab5"},children:"Register"})})]})},ze=n(14),Se=n(31),Le=(n(112),O.a.form(Z||(Z=Object(g.a)(["\n  ","\n  margin-bottom: 50px;\n  padding: 20px;\n\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"])),"")),Ie=O.a.label(G||(G=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  font-size: 18px;\n"]))),De=Object(V.c)("contacts/get",function(){var e=Object(W.a)(q.a.mark((function e(t,n){var a,r,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,R.a.get("/contacts");case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),Me=Object(V.c)("contacts/post",function(){var e=Object(W.a)(q.a.mark((function e(t,n){var a,r,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,R.a.post("/contacts",t);case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),e.abrupt("return",a(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),Fe=Object(V.c)("contacts/delete",function(){var e=Object(W.a)(q.a.mark((function e(t,n){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,R.a.delete("/contacts/".concat(t));case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0.message),e.abrupt("return",a(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),Ee=Object(V.c)("contacts/patch",function(){var e=Object(W.a)(q.a.mark((function e(t){var n,a,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.id,delete t.id,e.next=5,R.a.patch("/contacts/".concat(n),t);case 5:return a=e.sent,r=a.data,console.log(r),e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(0),console.log(e.t0.message),new Error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),Te={getContacts:De,postContact:Me,deleteContact:Fe,patchContact:Ee},Ue=function(){var e=Object(p.useState)(""),t=Object(ze.a)(e,2),n=t[0],a=t[1],r=Object(p.useState)(""),c=Object(ze.a)(r,2),o=c[0],s=c[1],i=Object(f.b)(),u=Object(f.c)(z),l=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":s(r);break;default:return}},d=function(){a(""),s("")};return Object(E.jsxs)(Le,{onSubmit:function(e){e.preventDefault(),function(e,t){var n=t.find((function(t){return t.name===e}));return n&&Object(Se.b)("".concat(e," is already in contacts")),n}(n,u)||(i(Te.postContact({name:n,number:o})),i(Te.getContacts())),d()},children:[Object(E.jsx)("h2",{children:"Add contacts"}),Object(E.jsxs)(Ie,{children:["Name",Object(E.jsx)("input",{onChange:l,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autocomplete:"off"})]}),Object(E.jsxs)(Ie,{children:["Number",Object(E.jsx)("input",{onChange:l,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autocomplete:"off"})]}),Object(E.jsx)(U.a,{type:"submit",children:"Add contact"}),Object(E.jsx)(Se.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},Ae=n(43),Be=O.a.ul($||($=Object(g.a)(["\n  list-style: none;\n  padding: 0;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  font-size: 18px;\n"]))),Ne=O.a.div(K||(K=Object(g.a)(["\n  padding: 20px;\n  width: 60%;\n\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"]))),Pe=Object(O.a)(U.a)(Q||(Q=Object(g.a)(["\n  ","\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),""),qe=O.a.li(X||(X=Object(g.a)(["\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n\n  :hover,\n  :focus {\n    -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 90, 159, 0.2);\n    -moz-box-shadow: 0px 1px 1px 0px rgba(0, 90, 159, 0.2);\n    box-shadow: 0px 1px 1px 0px rgba(0, 90, 159, 0.2);\n  }\n\n  :not(:first-child) {\n    margin-bottom: 10px;\n  }\n"]))),We=O.a.div(_||(_=Object(g.a)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: space-between;\n  width: 250px;\n"]))),He=O.a.div(ee||(ee=Object(g.a)(["\n  display: flex;\n  gap: 10px;\n"]))),Re=O.a.span(te||(te=Object(g.a)(["\n  font-style: italic;\n  opacity: 0.5;\n"]))),Ve=Object(V.b)("filter/add"),Je=Object(V.b)("filter/reset"),Ye=(n(113),n(35)),Ze=function(e){return e.modal.modalIsShow},Ge=function(e){return e.modal.modalContent},$e=n(27),Ke=n(33),Qe=n(42),Xe=function(e){var t=e.contact,n=Object(f.b)(),a=t.id,r=t.name,c=t.number;return Object(E.jsxs)($e.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target),r=Object.fromEntries(t.entries());r.id=a,n(Te.patchContact(r)),n(ve.closeModal())},children:[Object(E.jsxs)($e.a.Group,{as:Qe.a,className:"mb-3",controlId:"formPlaintextName",children:[Object(E.jsx)($e.a.Label,{column:!0,sm:"2",children:"Name"}),Object(E.jsx)(Ke.a,{sm:"10",children:Object(E.jsx)($e.a.Control,{defaultValue:r,name:"name"})})]}),Object(E.jsxs)($e.a.Group,{as:Qe.a,className:"mb-3",controlId:"formPlaintextNumber",children:[Object(E.jsx)($e.a.Label,{column:!0,sm:"2",children:"Phone"}),Object(E.jsx)(Ke.a,{sm:"10",children:Object(E.jsx)($e.a.Control,{type:"tel",defaultValue:c,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"not settled"})})]}),Object(E.jsx)(U.a,{variant:"primary",type:"submit",children:"Save Changes"})]})},_e=function(){var e=Object(f.c)(D.getUserDetails),t=e.name,n=e.email;return Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:Object(E.jsx)("i",{children:t})}),Object(E.jsx)("p",{children:Object(E.jsx)("i",{children:n})})]})},et={switchContent:function(e){switch(e){case"userData":return"data";case"editForm":return"form";default:return null}}},tt=function(e){var t=e.contact,n=Object(f.c)(Ze),a=Object(f.c)(Ge),r=Object(f.b)();return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(Ye.a,{show:n,onHide:function(){r(!1?ve.openModal():ve.closeModal())},children:[Object(E.jsx)(Ye.a.Header,{closeButton:!0,children:Object(E.jsx)(Ye.a.Title,{children:"data"===et.switchContent(a)?Object(E.jsx)("span",{children:"User's Details"}):Object(E.jsx)("span",{children:"Edit Contact"})})}),Object(E.jsx)(Ye.a.Body,{children:"data"===et.switchContent(a)?Object(E.jsx)(_e,{}):Object(E.jsx)(Xe,{contact:t})})]})})},nt=function(){var e=Object(p.useState)({}),t=Object(ze.a)(e,2),n=t[0],a=t[1],r=Object(f.b)();Object(p.useEffect)((function(){r(Te.getContacts())}),[r]);var c=Object(f.c)(L),o=0===c.length;return Object(E.jsxs)(Ne,{children:[o&&Object(E.jsx)("p",{children:"Your contacts list is still empty."}),Object(E.jsx)(Be,{children:c&&c.map((function(e){var t=e.name,c=e.number,o=e.id;return Object(E.jsxs)(qe,{children:[Object(E.jsxs)(We,{children:[Object(E.jsxs)("b",{children:[t,":"]})," ",c?Object(E.jsx)("i",{children:c}):Object(E.jsx)(Re,{children:"-not settled-"})]}),Object(E.jsxs)(He,{children:[Object(E.jsx)(Pe,{type:"button",onClick:function(){return function(e){var t=e.id,c=e.name,o=e.number;return a({id:t,name:c,number:o}),r(ve.setModalContent("editForm")),r(ve.openModal()),n}({id:o,name:t,number:c})},variant:"primary",children:Object(E.jsx)(Ae.b,{})}),Object(E.jsx)(Pe,{type:"button",onClick:function(){return function(e){r(Je()),r(Te.deleteContact(e)),r(Te.getContacts())}(o)},variant:"primary",children:Object(E.jsx)(Ae.a,{})})]})]},o)}))}),Object(E.jsx)(tt,{contact:n})]})},at=O.a.div(ne||(ne=Object(g.a)(["\n  ","\n  margin-bottom: 50px;\n  padding: 20px;\n  background-color: orange;\n\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"])),""),rt=O.a.label(ae||(ae=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding-top: 10px;\n"]))),ct=function(){var e=Object(f.c)(S),t=Object(f.b)();return Object(E.jsxs)(at,{children:[Object(E.jsx)("h3",{children:"Find contact"}),Object(E.jsx)(rt,{children:Object(E.jsx)("input",{type:"text",name:"filter",onChange:function(e){return t(Ve(e.currentTarget.value))},value:e,autocomplete:"off"})})]})},ot=O.a.div(re||(re=Object(g.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n"]))),st=function(){return Object(E.jsxs)(ot,{children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(ct,{}),Object(E.jsx)(Ue,{})]}),Object(E.jsx)(nt,{})]})},it=O.a.form(ce||(ce=Object(g.a)(["\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 60px;\n  padding-bottom: 40px;\n  margin-top: 60px;\n  margin-left: auto;\n  margin-right: auto;\n\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"]))),ut=O.a.input(oe||(oe=Object(g.a)(["\n  width: 80%;\n  font-size: 20px;\n  padding: 5px;\n"]))),lt=(O.a.button(se||(se=Object(g.a)(["\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-size: 20px;\n\n  transition: all 250ms ease;\n\n  border-radius: 4px;\n  ","\n  border: none;\n  ","\n  background-color: #ffffff;\n\n  -webkit-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);\n\n  :hover {\n    background-color: #2c7dc9;\n    color: #ffffff;\n    border-color: #2c7dc9;\n  }\n"])),"",""),function(){var e=Object(p.useState)(""),t=Object(ze.a)(e,2),n=t[0],a=t[1],r=Object(p.useState)(""),c=Object(ze.a)(r,2),o=c[0],s=c[1],i=Object(p.useState)(""),u=Object(ze.a)(i,2),l=u[0],d=u[1],b=Object(f.b)(),j=Object(h.f)(),x=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return a(r);case"email":return s(r);case"password":return d(r);default:return}};return Object(E.jsxs)(it,{onSubmit:function(e){e.preventDefault(),b(Oe.register({name:n,email:o,password:l})),a(""),s(""),d(""),j.push("/contacts")},children:[Object(E.jsx)(ut,{type:"text",name:"name",placeholder:"Your name",autoFocus:!0,onChange:x,value:n,required:!0,autocomplete:"off"}),Object(E.jsx)(ut,{type:"email",name:"email",placeholder:"Your email",onChange:x,value:o,required:!0,autocomplete:"off"}),Object(E.jsx)(ut,{type:"password",name:"password",placeholder:"Create a password",onChange:x,value:l,required:!0}),Object(E.jsx)(U.a,{type:"submit",size:"lg",children:"Register"})]})}),pt=O.a.form(ie||(ie=Object(g.a)(["\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 60px;\n  padding-bottom: 40px;\n  margin-top: 60px;\n  margin-left: auto;\n  margin-right: auto;\n\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"]))),dt=O.a.input(ue||(ue=Object(g.a)(["\n  width: 80%;\n  font-size: 20px;\n  padding: 5px;\n"]))),bt=(O.a.button(le||(le=Object(g.a)(["\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-size: 20px;\n\n  transition: all 250ms ease;\n\n  border-radius: 4px;\n  ","\n  border: none;\n  ","\n  background-color: #ffffff;\n\n  -webkit-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);\n\n  :hover {\n    background-color: #2c7dc9;\n    color: #ffffff;\n    border-color: #2c7dc9;\n  }\n"])),"",""),function(){var e=Object(p.useState)(""),t=Object(ze.a)(e,2),n=t[0],a=t[1],r=Object(p.useState)(""),c=Object(ze.a)(r,2),o=c[0],s=c[1],i=Object(f.b)(),u=Object(h.f)(),l=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return a(r);case"password":return s(r);default:return}},d=function(){var e=Object(W.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i(me.login({email:n,password:o}));case 3:e.sent.payload?u.push("/contacts"):Object(Se.b)("".concat(n," is not authorized or the password is wrong")),a(""),s("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)(pt,{onSubmit:d,children:[Object(E.jsx)(dt,{type:"email",name:"email",placeholder:"email",autoFocus:!0,onChange:l,value:n,required:!0}),Object(E.jsx)(dt,{type:"password",name:"password",placeholder:"password",onChange:l,value:o,required:!0}),Object(E.jsx)(U.a,{type:"submit",size:"lg",children:"Login"}),Object(E.jsx)(Se.a,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}),jt=function(){var e=Object(f.c)(I),t=Object(f.c)(D.getIsLoggedIn);return Object(E.jsxs)(w,{transparent:e,children:[Object(E.jsxs)(C,{children:[Object(E.jsx)(T,{}),t?Object(E.jsx)(we,{}):Object(E.jsx)(ke,{})]}),Object(E.jsxs)(h.c,{children:[Object(E.jsx)(h.a,{path:"/",exact:!0,children:Object(E.jsx)("h1",{children:"Phonebook"})}),Object(E.jsx)(h.a,{path:"/register",children:Object(E.jsx)(lt,{})}),Object(E.jsx)(h.a,{path:"/login",children:!e&&Object(E.jsx)(bt,{})}),Object(E.jsx)(h.a,{path:"/contacts",children:t&&Object(E.jsx)(st,{})})]}),e&&Object(E.jsx)(y,{type:"ThreeDots",color:"#2c2c2c",height:100,width:100,timeout:3e3})]})},xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},ft=n(19),ht=n(12),gt=n(34),Ot=Object(V.e)({name:"contacts",initialState:[],extraReducers:(pe={},Object(ht.a)(pe,Te.getContacts.fulfilled,(function(e,t){return t.payload})),Object(ht.a)(pe,Te.postContact.fulfilled,(function(e,t){return[].concat(Object(gt.a)(e),[t.payload])})),Object(ht.a)(pe,Te.deleteContact.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(ht.a)(pe,Te.patchContact.fulfilled,(function(e,t){return[].concat(Object(gt.a)(e.filter((function(e){return e.id!==t.payload.id}))),[t.payload])})),pe)}).reducer,mt=Object(V.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(de={},Object(ht.a)(de,me.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(ht.a)(de,me.login.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(ht.a)(de,me.logout.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(ht.a)(de,me.getContactData.fulfilled,(function(e,t){e.user=t.payload})),de)}).reducer,vt=Object(V.d)("",(be={},Object(ht.a)(be,Ve,(function(e,t){return t.payload})),Object(ht.a)(be,Je,(function(){return""})),be)),wt=Object(V.d)(!1,(je={},Object(ht.a)(je,ve.openModal,(function(){return!0})),Object(ht.a)(je,ve.closeModal,(function(){return!1})),je)),yt=Object(V.d)("",Object(ht.a)({},ve.setModalContent,(function(e,t){return t.payload}))),Ct=Object(ft.b)({modalIsShow:wt,modalContent:yt}),kt=Object(ft.b)({contacts:Ot,filter:vt,auth:mt,modal:Ct}),zt=Object(V.a)({reducer:kt});j.a.render(Object(E.jsx)(d.a.StrictMode,{children:Object(E.jsx)(x.a,{children:Object(E.jsx)(f.a,{store:zt,children:Object(E.jsx)(jt,{})})})}),document.getElementById("root")),xt()},61:function(e,t,n){},68:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.2d317c52.chunk.js.map