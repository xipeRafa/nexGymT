(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{58:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(24),a=n(10),s=n(68),i=n(41),o=(n(49),n(59),n(60),i.a.initializeApp({apiKey:"AIzaSyCqG_1hm7AJN58pyBj_lbMecOtwP2NXbzQ",authDomain:"taxis-stackblitz.firebaseapp.com",projectId:"taxis-stackblitz",storageBucket:"taxis-stackblitz.appspot.com",messagingSenderId:"977311415632",appId:"1:977311415632:web:c4a419e65259ff87fa8055"})),l=i.a.firestore.FieldValue.serverTimestamp,u=o.firestore(),j=o.storage(),b=o.auth(),d=n(2),O=Object(c.createContext)(),m=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(a.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(!0),l=Object(a.a)(o,2),j=l[0],m=l[1],x=Object(c.useState)(""),h=Object(a.a)(x,2),f=h[0],p=h[1];return Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){i(e),m(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return p("")}),5e3);return function(){return clearTimeout(e)}}),[f]),Object(d.jsx)(O.Provider,{value:{currentUser:s,register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},bidAuction:function(e,t){return u.collection("orders").doc(e,t).update({entregado:!0,deliver:t})},endAuction:function(e){return u.collection("auctions").doc(e).delete()},globalMsg:f},children:!j&&t})},x=n(21),h=function(e){var t,n=e.orden,r=Object(c.useContext)(O).bidAuction,s=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=u.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{items:r}}("items").items,i=n.entregado?"Entregado":"Marcar como Entregado",o=n.date.toDate().toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"pl-5 col-sm-4 border-end border-info my-3 p-4 bg-white",children:[Object(d.jsx)("button",{onClick:function(){return r(n.id,"cseri@gmail.com")},className:n.entregado?"mb-5 btn btn-info w-100":"mb-4 btn btn-info w-100",children:i}),Object(d.jsxs)("h6",{className:"mb-0",children:["Id-Orden: ",Object(d.jsx)("span",{className:"text-muted",children:n.id}),"  "]}),Object(d.jsxs)("p",{className:"mb-0",children:[" ",Object(d.jsx)("span",{className:"text-muted",children:"comprador:"})," ",n.buyer.name," "]}),Object(d.jsxs)("p",{className:"mb-0",children:[Object(d.jsx)("span",{className:"text-muted",children:"correo:"}),"  ",n.buyer.email," "]}),Object(d.jsxs)("p",{className:"mb-3",children:[Object(d.jsx)("span",{className:"text-muted",children:"fecha:"}),"  ",o]}),n.items.map((function(e,n){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h6",{className:"mb-0",children:["Id-producto: ",Object(d.jsx)("span",{className:"text-muted",children:e.id})," "]}),Object(d.jsxs)("p",{className:"mb-0",children:[Object(d.jsx)("span",{className:"text-muted",children:"producto:"}),"  ",e.item]}),Object(d.jsxs)("p",{className:"mb-0",children:[Object(d.jsx)("span",{className:"text-muted",children:"precio:"}),"  ",e.price]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"text-muted",children:"cantidad:"}),"  ",e.qty]}),s.map((function(n){return console.log(n.id===e.id?t=n.pictureUrl[0]:null)})),Object(d.jsx)("img",{className:"col-3 mb-1 i-img",src:t,alt:""})]},n)})),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{className:"border text-center mb-0",children:["Precio: $",Object(d.jsx)("span",{className:"text-white bg-dark fs-4 py-1 px-2 ",children:n.total})]})]})})},f=n(65),p=n(20),v=n.n(p),g=n(25),w=function(e){var t=Object(c.useState)(0),n=Object(a.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(null),o=Object(a.a)(i,2),b=o[0],d=o[1];return Object(c.useState)((function(){var t=j.ref(e.itemImage.name),n=u.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;s(t)}),(function(e){console.log(e)}),Object(g.a)(v.a.mark((function c(){var r,a;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:return r=c.sent,a=l(),delete e.itemImage,c.next=7,n.add(Object(x.a)(Object(x.a)({},e),{},{createdAt:a,imgUrl:r}));case 7:d(!0);case 8:case"end":return c.stop()}}),c)}))))}),[e]),{progress:r,isCompleted:b}},N=function(e){var t=e.auction,n=e.setAuction,r=w(t),a=r.progress,s=r.isCompleted;return Object(c.useEffect)((function(){s&&n(null)}),[s,n]),Object(d.jsx)(f.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(a,"%")}})},y=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useContext)(O).globalMsg,o=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=u.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{docs:r}}("orders").docs,l=Object(c.useState)(!1),j=Object(a.a)(l,2),b=j[0],m=j[1],f=o.filter((function(e){return"cseri@gmail.com"===e.deliver})).filter((function(e){return!0===e.noDeliver})).filter((function(e){return"cseri"===e.sucursal})),p=o.filter((function(e){return!e.entregado})).filter((function(e){return!0===e.noDeliver})).filter((function(e){return"cseri"===e.sucursal}));return Object(d.jsxs)("div",{className:"border-transparent",children:[n&&Object(d.jsx)(N,{auction:n,setAuction:r}),Object(d.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:i&&Object(d.jsx)(s.a,{variant:"danger",children:i})}),Object(d.jsxs)("div",{className:"text-center mt-3 container",children:[Object(d.jsx)("button",{className:b?"w-25 mx-3 btn btn-lg btn-success":"w-25 mx-3 btn btn-lg btn-light",onClick:function(e){return m(!0)},children:"Entregas"}),Object(d.jsx)("button",{className:b?"w-25 mx-3 btn-lg btn btn-light":"w-25 mx-3 btn btn-lg btn-success",onClick:function(e){return m(!1)},children:"Compras"})]}),b?Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mt-4",children:f.map((function(e,t){return Object(d.jsx)(h,{orden:e},t)}))})}):Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mt-4",children:p.map((function(e,t){return Object(d.jsx)(h,{orden:e},t)}))})})]})},C=n(66),k=n(67),S=n(64),E=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),l=o[0],u=o[1],j=Object(c.useRef)(),b=Object(c.useRef)(),m=Object(c.useContext)(O).login,x=function(){return r(!1)},h=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(""),e.prev=2,e.next=5,m(j.current.value,b.current.value);case 5:x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),u("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{onClick:function(){return r(!0)},className:"btn btn-dark mx-2",children:"Entrar"}),Object(d.jsx)(C.a,{centered:!0,show:n,onHide:x,children:Object(d.jsxs)("form",{onSubmit:h,children:[Object(d.jsx)(C.a.Header,{children:Object(d.jsx)(C.a.Title,{children:"Entrar"})}),Object(d.jsxs)(C.a.Body,{children:[l&&Object(d.jsx)(s.a,{variant:"danger",children:l}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Email "}),Object(d.jsx)(k.a.Control,{type:"email",required:!0,ref:j})]}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Password"}),Object(d.jsx)(k.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(d.jsxs)(C.a.Footer,{children:[Object(d.jsx)(S.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(d.jsx)(S.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},I=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),l=o[0],u=o[1],j=Object(c.useRef)(),b=Object(c.useRef)(),m=Object(c.useRef)(),x=Object(c.useContext)(O).register,h=function(){return r(!1)},f=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(""),b.current.value===m.current.value){e.next=4;break}return e.abrupt("return",u("Passwords does not match"));case 4:return e.prev=4,e.next=7,x(j.current.value,b.current.value);case 7:h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),u(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(C.a,{centered:!0,show:n,onHide:h,children:Object(d.jsxs)("form",{onSubmit:f,children:[Object(d.jsx)(C.a.Header,{children:Object(d.jsx)(C.a.Title,{children:"Registro"})}),Object(d.jsxs)(C.a.Body,{children:[l&&Object(d.jsx)(s.a,{variant:"danger",children:l}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Email"}),Object(d.jsx)(k.a.Control,{type:"email",required:!0,ref:j})]}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Password"}),Object(d.jsx)(k.a.Control,{type:"password",required:!0,ref:b})]}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Confirmar Password"}),Object(d.jsx)(k.a.Control,{type:"password",required:!0,ref:m})]})]}),Object(d.jsxs)(C.a.Footer,{children:[Object(d.jsx)(S.a,{variant:"secondary",onClick:h,children:"Cancelar"}),Object(d.jsx)(S.a,{variant:"primary",type:"submit",children:"Registro"})]})]})})})},A=function(){var e=Object(c.useContext)(O),t=e.currentUser,n=e.logout,r=Object(c.useState)(!1),s=Object(a.a)(r,2),i=s[0];s[1];return Object(d.jsxs)("nav",{className:"container navbar navbar-light ",children:[Object(d.jsx)("div",{className:"navbar-brand mb-4 w-100 text-center border",children:Object(d.jsx)("h1",{children:"nexGym Tienda -- Camino del Seri"})}),Object(d.jsx)("div",{className:i?"d-flex flex-column w-100":"d-none",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:" btn-dark mx-2 disabled mb-2 p-2 text-center",children:t.email}),Object(d.jsx)("div",{onClick:function(){return n()},className:"btn btn-light mx-2",children:"SALIR"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{}),Object(d.jsx)(I,{})]})})]})},L=function(){return Object(d.jsxs)(m,{children:[Object(d.jsx)(A,{}),Object(d.jsx)(y,{})]})};n(57);Object(r.render)(Object(d.jsx)(L,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.10be4879.chunk.js.map