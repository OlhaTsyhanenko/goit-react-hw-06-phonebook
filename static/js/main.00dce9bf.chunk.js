(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={btn:"contactList_btn__24V0C",contactList:"contactList_contactList__2Qoz6",contactList__item:"contactList_contactList__item__c5wDU"}},13:function(t,e,n){t.exports={filter:"filter_filter__2xCST",label:"filter_label__27sXR"}},28:function(t,e,n){},29:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),i=n(2),s=n(3),u=n(16),l=n(17),b="contacts/add",d="contacts/delete",m="contacts/filter",j=Object(s.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case b:return t.find((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?(alert("".concat(c.name," is already in contacts")),t):[].concat(Object(l.a)(t),[c]);case d:return console.log(t),console.log(c),t.filter((function(t){return t.id!==c}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;return n===m?c:t}}),f=Object(s.combineReducers)({contacts:j}),h=Object(s.createStore)(f,Object(u.composeWithDevTools)()),p=(n(28),n(29),n(14)),O=n(5),_=n.n(O),v=function(t,e){return{type:b,payload:{name:t,number:e,id:_.a.generate()}}},x=function(t){return{type:d,payload:t}},C=function(t){return{type:m,payload:t}},g=n(6),y=n.n(g),N=n(1);var L=Object(i.b)(null,(function(t){return{onAddContact:function(e,n){return t(v(e,n))}}}))((function(t){var e=t.onAddContact,n=Object(c.useState)(""),a=Object(p.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(p.a)(i,2),u=s[0],l=s[1],b=_.a.generate(),d=_.a.generate(),m=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":l(c);break;default:return}},j=function(){o(""),l("")};return Object(N.jsxs)("form",{className:y.a.contactForm,onSubmit:function(t){t.preventDefault(),e(r,u),j()},children:[Object(N.jsxs)("label",{htmlFor:b,children:["Name",Object(N.jsx)("input",{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,id:b,className:y.a.contactName})]}),Object(N.jsxs)("label",{htmlFor:d,children:["Number",Object(N.jsx)("input",{type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,id:d,className:y.a.contactNumber})]}),Object(N.jsx)("button",{type:"submit",className:y.a.btn,children:"Add contact"})]})})),w=n(10),F=n.n(w);var A=Object(i.b)((function(t){var e=t.contacts,n=e.filter,c=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,n);return{contacts:c}}),(function(t){return{onDeleteContact:function(e){return t(x(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(N.jsx)("ul",{className:F.a.contactList,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(N.jsxs)("li",{className:F.a.contactList__item,children:[c,": ",a,Object(N.jsx)("button",{type:"button",onClick:function(){return n(e)},className:F.a.btn,children:"Delete"})]},e)}))})})),k=n(13),S=n.n(k);var D=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(C(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(N.jsxs)("label",{className:S.a.filter,children:[Object(N.jsx)("span",{className:S.a.label,children:"Find contacts by name"}),Object(N.jsx)("input",{type:"text",value:e,onChange:n})]})}));function z(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("h1",{children:"Phonebook"}),Object(N.jsx)(L,{}),Object(N.jsx)("h2",{children:"Contacts"}),Object(N.jsx)(D,{}),Object(N.jsx)(A,{})]})}o.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(i.a,{store:h,children:Object(N.jsx)(z,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contactForm:"contactForm_contactForm__1ZkBF",contactName:"contactForm_contactName__2nfUX",contactNumber:"contactForm_contactNumber__1mZ5e",btn:"contactForm_btn__3MUw0"}}},[[39,1,2]]]);
//# sourceMappingURL=main.00dce9bf.chunk.js.map