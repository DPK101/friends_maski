(window.webpackJsonpfriends_maski=window.webpackJsonpfriends_maski||[]).push([[0],{19:function(e,a,t){},25:function(e,a,t){e.exports=t(39)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(21),i=t.n(r),l=(t(30),t(10)),o=t(11),c=t(13),m=t(12),u=t(5),d=t(14),h=[{name:"Amaresh Khanavali",phone:9916030304,address:"aBC"},{name:"Amaresh",phone:9538644513,address:"aBC"},{name:"Ambi114",phone:8496886203,address:"xyz"},{name:"Alam Bhasha",phone:9886441290,address:"aBC"},{name:"Anil",phone:9019114202,address:"aBC"},{name:"Arun",phone:8971317143,address:"aBC"},{name:"Devaraj",phone:8050232182,address:"aBC"},{name:"Shivaraj",phone:9902253358,address:"aBC"},{name:"Suresh",phone:9535835373,address:"aBC"},{name:"Gopal Yadav",phone:9008189325,address:"aBC"},{name:"Govind (GGK)",phone:9916022772,address:"aBC"},{name:"Mallu",phone:9663236108,address:"aBC"},{name:"Shivu (Welding)",phone:9008439022,address:"aBC"}],f=(t(31),t(7)),g=t.n(f),p=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={username:"",password:""},t.validate=t.validate.bind(Object(u.a)(t)),t.hangleChangeOfUsername=t.hangleChangeOfUsername.bind(Object(u.a)(t)),t.hangleChangeOfPassword=t.hangleChangeOfPassword.bind(Object(u.a)(t)),g()(function(){g()(".txtb input").on("focus",function(){g()(this).addClass("focus")}),g()(".txtb input").on("blur",function(){""===g()(this).val()&&g()(this).removeClass("focus")})}),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"validate",value:function(){this.props.authenticate(this.state.username,this.state.password)}},{key:"hangleChangeOfUsername",value:function(e){this.setState({username:e.target.value})}},{key:"hangleChangeOfPassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"login-form"},s.a.createElement("h1",{className:"login-heading"},"Login"),s.a.createElement("span",{className:"login-failed"}),s.a.createElement("div",{className:"txtb"},s.a.createElement("input",{type:"text",onChange:this.hangleChangeOfUsername,value:this.state.username}),s.a.createElement("span",{"data-placeholder":"Username"})),s.a.createElement("div",{className:"txtb"},s.a.createElement("input",{type:"password",onChange:this.hangleChangeOfPassword,value:this.state.password}),s.a.createElement("span",{"data-placeholder":"Password"})),s.a.createElement("button",{type:"submit",className:"logbtn",onClick:this.validate},s.a.createElement("span",{style:{position:"relative",top:"-2px"}},"Get in")," ",s.a.createElement("i",{class:"fas fa-sign-in-alt"}))))}}]),a}(n.Component);t(19);function v(e){return s.a.createElement("div",{className:"friend-card"},s.a.createElement("div",null,s.a.createElement("img",{className:"friend-image",src:"/friends_maski/photos_maski/"+e.friend.name+"-"+e.friend.phone+".jpg",alt:""})),s.a.createElement("div",{className:"details"},e.friend.name," ",s.a.createElement("br",null),e.friend.phone))}var E=function(){return s.a.createElement("div",{className:"friends-list"},h.map(function(e){return s.a.createElement(v,{key:e.phone.toString().slice(0,4)+e.name,friend:e})}))};t(32),t(33);function b(e){return s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"left-panel"},s.a.createElement("button",{className:"myButton home"},"Home ",s.a.createElement("i",{className:"fas fa-home"}))),s.a.createElement("div",{className:"right-panel"},s.a.createElement("form",{onSubmit:function(){return console.log("preventdefault then update list")}},s.a.createElement("input",{className:"search-input",type:"text",name:"",id:""}),s.a.createElement("button",{className:"search-button",type:"submit"},s.a.createElement("i",{className:"fas fa-search search-icon"}))),s.a.createElement("button",{className:"myButton logout",onClick:function(){return e.logout()}},"Logout ",s.a.createElement("i",{className:"fas fa-sign-out-alt"}))))}function C(e){return s.a.createElement("div",{className:"main"},s.a.createElement(b,{logout:e.logout}),s.a.createElement(E,null))}var w=t(22),O=t(6),y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={isLoggedIn:!1,friendsData:h},t.authenticate=t.authenticate.bind(Object(u.a)(t)),t.logout=t.logout.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"authenticate",value:function(e,a){e||a?"friend"===e&&"HighSchool2006"===a?this.setState({isLoggedIn:!0}):document.querySelector(".login-failed").textContent="Invalid: Either username or/and password is wrong!":document.querySelector(".login-failed").textContent="Please enter username and password"}},{key:"logout",value:function(){this.setState({isLoggedIn:!1})}},{key:"render",value:function(){var e=this;return this.state.isLoggedIn?s.a.createElement("div",null,s.a.createElement(C,{logout:this.logout})):s.a.createElement(w.a,null,s.a.createElement("div",null,s.a.createElement(O.a,{exact:!0,path:"/",render:function(a){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p,{authenticate:e.authenticate}))}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.d94b634d.chunk.js.map