(this.webpackJsonpcwitter=this.webpackJsonpcwitter||[]).push([[0],{38:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(34),u=a.n(c),l=a(7),i=a(19),o=a(4),s=a(5),m=a.n(s),p=a(13),f=a(20),d=a(10),b=a(22);a(55),a(56),a(57);b.initializeApp({apiKey:"AIzaSyAF--92a_6-bEl5RS732ZM5ACd3qOKK3Iw",authDomain:"cwitter-5ce44.firebaseapp.com",databaseURL:"https://cwitter-5ce44.firebaseio.com",projectId:"cwitter-5ce44",storageBucket:"cwitter-5ce44.appspot.com",messagingSenderId:"652872118982",appId:"1:652872118982:web:7e276e5dece6a38fdb1dc7"});var h=b,E=b.auth(),v=b.firestore(),g=b.storage(),w=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(""),i=Object(l.a)(u,2),o=i[0],s=i[1],f=Object(n.useState)(!0),d=Object(l.a)(f,2),b=d[0],h=d[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),w=g[0],y=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,E.createUserWithEmailAndPassword(a,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,E.signInWithEmailAndPassword(a,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),y(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:b?"Create Account":"Log In"}),w&&r.a.createElement("span",{className:"authError"},w)),r.a.createElement("span",{onClick:function(){return h(!b)},className:"authSwitch"},b?"Sign In":"Create Account"))},y=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new h.auth.GoogleAuthProvider:"github"===a&&(n=new h.auth.GithubAuthProvider),e.next=4,E.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(d.a,{icon:f.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(w,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{name:"google",onClick:e,className:"authBtn"},"Continue with Google ",r.a.createElement(d.a,{icon:f.b})),r.a.createElement("button",{name:"github",onClick:e,className:"authBtn"},"Continue with Github ",r.a.createElement(d.a,{icon:f.a}))))},O=a(37),j=a(21),x=function(e){var t=e.tweetObj,a=e.isOwner,c=Object(n.useState)(!1),u=Object(l.a)(c,2),i=u[0],o=u[1],s=Object(n.useState)(t.text),f=Object(l.a)(s,2),b=f[0],h=f[1],E=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet?")){e.next=6;break}return e.next=4,v.doc("tweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return o(!i)},y=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,v.doc("tweets/".concat(t.id)).update({text:b});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"tweet"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:y,className:"container tweetEdit"},r.a.createElement("input",{type:"text",value:b,required:!0,autoFocus:!0,placeholder:"Edit your Tweet",onChange:function(e){var t=e.target.value;h(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Tweet",className:"formBtn"})),r.a.createElement("span",{onClick:w,className:"formBtn cancelBtn"},"cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,alt:t.text}),a&&r.a.createElement("div",{className:"tweet__actions"},r.a.createElement("span",{onClick:E},r.a.createElement(d.a,{icon:j.d})),r.a.createElement("span",{onClick:w},r.a.createElement(d.a,{icon:j.a})))))},N=a(63),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],i=c[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),f=s[0],b=s[1],h=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===f){e.next=12;break}return r=g.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return l={text:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,v.collection("tweets").add(l);case 15:i(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:h,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factory__input",value:u,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(d.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accpt:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;b(t)},a.readAsDataURL(t)},style:{opacity:0}}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__claer",onClick:function(){return b("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(d.a,{icon:j.c}))))},S=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(l.a)(a,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){v.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},u.map((function(e){return r.a.createElement(x,{key:e.id,tweetObj:e,isOwner:e.creatorId===t.uid})}))))},I=a(36),C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",style:{marginRight:10}},r.a.createElement(d.a,{icon:f.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(d.a,{icon:I.a,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"'s Profile"):"Profile")))))},A=function(e){var t=e.userObj,a=e.refreshUser,c=Object(o.f)(),u=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("tweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:a=e.sent,console.log(a.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var i=Object(n.useState)(t.displayName),s=Object(l.a)(i,2),f=s[0],d=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===f){e.next=5;break}return e.next=4,t.updateProfile({displayName:f});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:b,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;d(t)},type:"text",autoFocus:!0,placeholder:"Display Name",value:f,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){E.signOut(),c.push("/")}},"Log Out"))},F=function(e){var t=e.isLoggedIn,a=e.userObj,n=e.refreshUser;return r.a.createElement(i.a,null,t&&r.a.createElement(C,{userObj:a}),r.a.createElement(o.c,null,t?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(S,{userObj:a})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(A,{userObj:a,refreshUser:n}))):r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(y,null))))},U=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(null),i=Object(l.a)(u,2),o=i[0],s=i[1];Object(n.useEffect)((function(){E.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]);return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(F,{refreshUser:function(){var e=E.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing...")};a(60);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a29c765a.chunk.js.map