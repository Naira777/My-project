(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/earth2.cb68c6dc.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/earth.efc38578.jpg"},122:function(e,t,a){e.exports=a(266)},127:function(e,t,a){},128:function(e,t,a){},23:function(e,t,a){e.exports={title:"DisplayPhoto_title__1YveL",textcolor:"DisplayPhoto_textcolor__1I0zN",all:"DisplayPhoto_all__3ZVMR"}},266:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),l=a.n(c),o=(a(127),a(112)),i=a(113),u=a(121),m=a(120),s=(a(128),a(8)),d=a(37),p=a(33),E=a.n(p),f=function(){return r.a.createElement("nav",{className:E.a.nav},r.a.createElement("div",{className:E.a.item},r.a.createElement(d.b,{to:"/astronomypictureoftheday",activeClassName:E.a.activeLink}," Astronomy picture  ")),r.a.createElement("div",{className:E.a.item},r.a.createElement(d.b,{to:"/weatherofCity",activeClassName:E.a.activeLink}," Weather by City ")))},h=a(73),b=a.n(h),v=a(114),y=a.n(v),j=function(){return r.a.createElement("header",{className:b.a.header},r.a.createElement("img",{src:y.a,className:b.a.foto}))},O=a(7),_=a(115),g=a(32),C=a.n(g),w=a(50),N=a(24),S=a(74),D=S.create({baseURL:"https://api.nasa.gov/planetary/apod",headers:{"API-KEY":"WpLoa1jcg8MdhMrIfup0CYk45GsdhRQLlbcjVa3r"}}),x=S.create({baseURL:"http://api.weatherapi.com/v1",headers:{"Transfer-Encoding":"chunked",Connection:"keep-alive",Vary:"Accept-Encoding","CDN-PullZone":"93447","CDN-Uid":"8fa3a04a-75d9-4707-8056-b7b33c8ac7fe","CDN-RequestCountryCode":"FI","CDN-EdgeStorageId":"615","Request-Context":"appId=cid-v1:89996683-9a04-40b3-8e46-77754119dcf5","CDN-CachedAt":"2020-08-24 14:02:04","CDN-RequestId":"5f18bd2b96858fcc2d300683faa07c10","CDN-Cache":"MISS","Cache-Control":"public, max-age=180","Content-Type":"application/json",Date:"Mon, 24 Aug 2020 12:02:04 GMT",Server:"BunnyCDN-FI1-615","API-KEY":"5e702696db01489eaa2124026202008"}}),P=function(e){return D.get("?date=".concat(e,"&api_key=WpLoa1jcg8MdhMrIfup0CYk45GsdhRQLlbcjVa3r")).then((function(e){return e.data}))},k=function(e){return x.get("/current.json?key=5e702696db01489eaa2124026202008&q=".concat(e)).then((function(e){return e.data}))},A={photo:{url:"",title:"",explanation:""}},I=function(e){return{type:"SAVE_DATA_SUCCESS",data:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_DATA_SUCCESS":return Object(N.a)(Object(N.a)({},e),{},{photo:Object(N.a)(Object(N.a)({},e.photo),{},{url:t.data.url,title:t.data.title,explanation:t.data.explanation})});default:return e}},T=a(269),L={cityName:"",country:"",temp:0,description:"",humidity:0,windspeed:0,icon:""},R=function(e){return{type:"SAVE_CITY_WEATHER",data:e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_CITY_WEATHER":return Object(N.a)(Object(N.a)({},e),{},{cityName:t.data.location.name,country:t.data.location.country,temp:t.data.current.temp_c,humidity:t.data.current.humidity,windspeed:t.data.current.wind_kph,description:t.data.current.condition.text,icon:t.data.current.condition.icon});default:return e}},Y=Object(O.c)({form:T.a,nasaPage:M,weatherPage:V}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,F=Object(O.e)(Y,W(Object(O.a)(_.a)));window.store=F;var U=F,G=a(6),q=(a(211),a(27)),H=function(e){return e.nasaPage.photo.url},B=function(e){return e.nasaPage.photo.explanation},J=function(e){return e.nasaPage.photo.title},K=a(118),Q=a.n(K),X=a(23),Z=a.n(X),z=function(){var e=Object(G.d)(H),t=Object(G.d)(J),a=Object(G.d)(B);return r.a.createElement("div",{className:Z.a.all},r.a.createElement("div",{className:Z.a.title},r.a.createElement("h4",null," This is the Astronomy Picture of the Day "),r.a.createElement("h3",null,"  ",t)),r.a.createElement("div",{className:Z.a.textcolor},a),r.a.createElement("img",{src:e,class:"mx-auto d-block"}),r.a.createElement(Q.a,{url:e}))},$=a(53),ee=a(76),te=a.n(ee),ae=a(268),ne=function(e){e.input;var t=e.meta,a=(e.child,Object($.a)(e,["input","meta","child"])),n=t.touched&&t.error;return r.a.createElement("div",{className:te.a.formControl+" "+(n?te.a.error:"")},r.a.createElement("div",null,a.children),n&&r.a.createElement("span",null,t.error))},re=function(e){var t=e.input,a=(e.meta,e.child,Object($.a)(e,["input","meta","child"]));return r.a.createElement(ne,e," ",r.a.createElement("input",Object.assign({},t,a))," ")},ce=a(267),le=Object(ce.a)({form:"getpicture"})((function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:Z.a.textcolor},r.a.createElement("h3",null," Get astronomy photo of the day ")),r.a.createElement("form",{class:"form-inline",onSubmit:e.handleSubmit},r.a.createElement(ae.a,{component:re,name:"searchedDay",type:"search",placeholder:"YYYY-MM-DD","aria-label":"Search",class:"form-control mr-ms-2"}),r.a.createElement("button",{class:"btn btn-outline-success",type:"submit"},"Get Astronomy Picture")))})),oe=r.a.memo((function(e){var t=Object(n.useState)(!0),a=Object(q.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(),i=Object(q.a)(o,2),u=i[0],m=i[1],s=Object(n.useState)(),d=Object(q.a)(s,2),p=d[0],E=d[1],f=Object(G.c)();return Object(n.useEffect)((function(){var e;f((e=u,function(){var t=Object(w.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:n=t.sent,a(I(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(){l(!1)}))}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,c&&r.a.createElement(le,{onSubmit:function(e){var t=e.searchedDay;typeof t==typeof Date()?m(t):typeof t!=typeof Date()&&E(!0)}})),p&&c&&r.a.createElement("div",{class:"alert alert-success alert-dismissible"},r.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert"},"\xd7"),r.a.createElement("strong",null,"Attention!")," Please Enter Date!!!"),r.a.createElement("div",null,!c&&r.a.createElement(z,null)))})),ie=function(e){return e.weatherPage.temp},ue=function(e){return e.weatherPage.cityName},me=function(e){return e.weatherPage.country},se=function(e){return e.weatherPage.windspeed},de=function(e){return e.weatherPage.description},pe=function(e){return e.weatherPage.humidity},Ee=function(e){return e.weatherPage.icon},fe=function(){var e=Object(G.d)(ue),t=Object(G.d)(me),a=Object(G.d)(ie),n=Object(G.d)(de),c=Object(G.d)(se),l=Object(G.d)(pe),o=Object(G.d)(Ee);return r.a.createElement("div",null,r.a.createElement("table",{class:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,t))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"City"),r.a.createElement("td",null,e)),r.a.createElement("tr",null,r.a.createElement("td",null,"Temperature"),r.a.createElement("td",null,a,"\xb0C")),r.a.createElement("tr",null,r.a.createElement("td",null,"Description"),r.a.createElement("td",null,n," ",r.a.createElement("img",{src:o})," ")),r.a.createElement("tr",null,r.a.createElement("td",null,"Humidity"),r.a.createElement("td",null,l,"%")),r.a.createElement("tr",null,r.a.createElement("td",null,"Wind speed"),r.a.createElement("td",null,c," kph")))))},he=Object(ce.a)({form:"getweather"})((function(e){return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("h3",{className:Z.a.textcolor}," Enter City Name ")),r.a.createElement("form",{class:"form-inline",onSubmit:e.handleSubmit},r.a.createElement(ae.a,{component:re,name:"searchedCity",type:"search",placeholder:"Enter City Name","aria-label":"Search",class:"form-control mr-sm-2"}),r.a.createElement("button",{class:"btn btn-outline-success",type:"submit"},"Get Weather")))})),be=r.a.memo((function(e){var t=Object(n.useState)(!0),a=Object(q.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(),i=Object(q.a)(o,2),u=i[0],m=i[1],s=Object(G.c)();return Object(n.useEffect)((function(){var e;s((e=u,function(){var t=Object(w.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:n=t.sent,a(R(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(){l(!1)}))}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,c&&r.a.createElement(he,{onSubmit:function(e){var t=e.searchedCity;m(t)}})),r.a.createElement("div",null,!c&&r.a.createElement(fe,null)))})),ve=a(119),ye=a.n(ve),je=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(j,null),r.a.createElement(f,null),r.a.createElement("div",{class:"app-wrapper-content"},r.a.createElement("div",{className:"asfoto"},r.a.createElement(s.a,{path:"/astronomypictureoftheday",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(s.a,{path:"/weatherofCity",render:function(){return r.a.createElement(be,null)}})),r.a.createElement("div",null,r.a.createElement("img",{src:ye.a,className:"foto"}))))}}]),a}(r.a.Component),Oe=function(e){return r.a.createElement(d.a,{basename:"/My-project"},r.a.createElement(G.a,{store:U},r.a.createElement(je,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){e.exports={nav:"Navbar_nav__2OUtl",item:"Navbar_item__2VTmv",activeLink:"Navbar_activeLink__2vwVg"}},73:function(e,t,a){e.exports={header:"Header_header__qOx37",foto:"Header_foto__tJa9w"}},76:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3LMp-",error:"FormsControls_error__2UFDB",formSummaryError:"FormsControls_formSummaryError__1MPc0"}}},[[122,1,2]]]);
//# sourceMappingURL=main.aaf58c18.chunk.js.map