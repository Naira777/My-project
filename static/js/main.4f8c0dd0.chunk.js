(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{137:function(e,t,a){e.exports={header:"Header_header__qOx37",foto:"Header_foto__tJa9w"}},139:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3LMp-",error:"FormsControls_error__2UFDB",formSummaryError:"FormsControls_formSummaryError__1MPc0"}},183:function(e,t,a){e.exports=a.p+"static/media/earth2.cb68c6dc.jpg"},205:function(e,t,a){e.exports=a.p+"static/media/earth.efc38578.jpg"},208:function(e,t,a){e.exports=a(404)},213:function(e,t,a){},214:function(e,t,a){},39:function(e,t,a){e.exports={title:"DisplayPhoto_title__1YveL",textcolor:"DisplayPhoto_textcolor__1I0zN",all:"DisplayPhoto_all__3ZVMR",title1:"DisplayPhoto_title1__2mQdm",title2:"DisplayPhoto_title2__1sIRK",error:"DisplayPhoto_error__i2BGx"}},404:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),o=(a(213),a(51)),u=a(52),i=a(56),s=a(55),m=(a(214),a(16)),d=a(76),E=a(59),b=a.n(E),p=function(){return r.a.createElement("nav",{className:b.a.nav},r.a.createElement("div",{className:b.a.item},r.a.createElement(d.b,{to:"/astronomypictureoftheday",activeClassName:b.a.activeLink}," Astronomy picture  ")),r.a.createElement("div",{className:b.a.item},r.a.createElement(d.b,{to:"/weatherofCity",activeClassName:b.a.activeLink}," Weather by City ")),r.a.createElement("div",{className:b.a.item},r.a.createElement(d.b,{to:"/aztro",activeClassName:b.a.activeLink}," Horoscope ")))},f=a(137),h=a.n(f),v=a(183),y=a.n(v),j=function(){return r.a.createElement("header",{className:h.a.header},r.a.createElement("img",{src:y.a,className:h.a.foto}))},g=a(15),O=a(184),_=a(77),C=a.n(_),S=a(101),N=a(24),w=a(114),k=(w.create({baseURL:"https://aztro.sameerkumar.website"}),w.create({baseURL:"https://api.nasa.gov/planetary/apod",headers:{"API-KEY":"WpLoa1jcg8MdhMrIfup0CYk45GsdhRQLlbcjVa3r"}})),D=w.create({baseURL:"http://api.weatherapi.com/v1",headers:{"Transfer-Encoding":"chunked",Connection:"keep-alive",Vary:"Accept-Encoding","CDN-PullZone":"93447","CDN-Uid":"8fa3a04a-75d9-4707-8056-b7b33c8ac7fe","CDN-RequestCountryCode":"FI","CDN-EdgeStorageId":"615","Request-Context":"appId=cid-v1:89996683-9a04-40b3-8e46-77754119dcf5","CDN-CachedAt":"2020-08-24 14:02:04","CDN-RequestId":"5f18bd2b96858fcc2d300683faa07c10","CDN-Cache":"MISS","Cache-Control":"public, max-age=180","Content-Type":"application/json",Date:"Mon, 24 Aug 2020 12:02:04 GMT",Server:"BunnyCDN-FI1-615","API-KEY":"5e702696db01489eaa2124026202008"}}),P=function(e){return k.get("?date=".concat(e,"&api_key=WpLoa1jcg8MdhMrIfup0CYk45GsdhRQLlbcjVa3r")).then((function(e){return e.data}))},A=function(e){return D.get("/current.json?key=5e702696db01489eaa2124026202008&q=".concat(e)).then((function(e){return e.data}))},x=function(e){var t=new Date;return D.get("/astronomy.json?key=5e702696db01489eaa2124026202008&q=".concat(e,"&dt=").concat(t)).then((function(e){return e.data}))},I={photo:{url:"",title:"",explanation:""},day:"",error:!1},M=function(e){return{type:"SAVE_ERROR",error:e}},Y=function(e){return{type:"SAVE_DATA_SUCCESS",data:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_DATA_SUCCESS":return Object(N.a)(Object(N.a)({},e),{},{photo:Object(N.a)(Object(N.a)({},e.photo),{},{url:t.data.url,title:t.data.title,explanation:t.data.explanation})});case"SAVE_DAY":return Object(N.a)(Object(N.a)({},e),{},{day:t.day});case"SAVE_ERROR":return Object(N.a)(Object(N.a)({},e),{},{error:t.error});default:return e}},V=a(411),T={cityName:"",country:"",temp:0,description:"",humidity:0,windspeed:0,icon:"",sunrise:"",sunset:"",moonrise:"",moonset:"",localtime:""},L=function(e){return{type:"SAVE_CITY_WEATHER",data:e}},z=function(e){return{type:"SAVE_CITY_ASTRO",dataastro:e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_CITY_WEATHER":return Object(N.a)(Object(N.a)({},e),{},{cityName:t.data.location.name,country:t.data.location.country,temp:t.data.current.temp_c,humidity:t.data.current.humidity,windspeed:t.data.current.wind_kph,description:t.data.current.condition.text,icon:t.data.current.condition.icon});case"SAVE_CITY_ASTRO":return Object(N.a)(Object(N.a)({},e),{},{sunrise:t.dataastro.astronomy.astro.sunrise,sunset:t.dataastro.astronomy.astro.sunset,moonrise:t.dataastro.astronomy.astro.moonrise,moonset:t.dataastro.astronomy.astro.moonset,localtime:t.dataastro.location.localtime});default:return e}},G={name:"aries"},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_NAME":return Object(N.a)(Object(N.a)({},e),{},{name:t.name});default:return e}},W=Object(g.c)({form:V.a,nasaPage:R,weatherPage:F,aztroPage:U}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,H=Object(g.e)(W,q(Object(g.a)(O.a)));window.store=H;var B=H,J=a(9),K=(a(295),a(58)),Q=function(e){return e.nasaPage.photo.url},X=function(e){return e.nasaPage.day},Z=function(e){return e.nasaPage.photo.explanation},$=function(e){return e.nasaPage.photo.title},ee=function(e){return e.nasaPage.error},te=a(187),ae=a.n(te),ne=a(39),re=a.n(ne),ce=function(){var e=Object(J.d)(Q),t=Object(J.d)($),a=Object(J.d)(Z),n=Object(J.d)(ee);return r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement("div",{className:re.a.all},r.a.createElement("div",{className:re.a.title},r.a.createElement("div",{className:re.a.title1}," This is the Astronomy Picture of the Day "),r.a.createElement("div",{className:re.a.title2},"  ",t)),r.a.createElement("div",{className:re.a.textcolor},a),r.a.createElement("img",{src:e,class:"mx-auto d-block"}),r.a.createElement(ae.a,{url:e})),n&&r.a.createElement("div",{className:re.a.error},"Please Enter Valid Date!"))},le=a(116),oe=a(139),ue=a.n(oe),ie=a(408),se=function(e){e.input;var t=e.meta,a=(e.child,Object(le.a)(e,["input","meta","child"])),n=t.touched&&t.error;return r.a.createElement("div",{className:ue.a.formControl+" "+(n?ue.a.error:"")},r.a.createElement("div",null,a.children),n&&r.a.createElement("span",null,t.error))},me=function(e){var t=e.input,a=(e.meta,e.child,Object(le.a)(e,["input","meta","child"]));return r.a.createElement(se,e," ",r.a.createElement("input",Object.assign({},t,a))," ")},de=a(407),Ee=Object(de.a)({form:"getpicture"})((function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:re.a.textcolor},r.a.createElement("div",{className:re.a.title1}," Get astronomy photo of the day ")),r.a.createElement("form",{class:"form-inline",onSubmit:e.handleSubmit},r.a.createElement(ie.a,{component:me,name:"searchedDay",type:"search",placeholder:"YYYY-MM-DD","aria-label":"Search",class:"form-control mr-ms-2"}),r.a.createElement("button",{class:"btn btn-outline-success",type:"submit"},"Get Astronomy Picture")))})),be=a(410),pe=a(406),fe=a(47),he=a.n(fe),ve=a(91),ye=a.n(ve),je=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={value:he()(),selectedValue:he()()},n.onSelect=function(e){n.setState({value:e,selectedValue:e}),n.props.setDay(e.format("YYYY-MM-DD"))},n.onPanelChange=function(e){n.setState({value:e}),n.props.setDay(e.format("YYYY-MM-DD"))},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.selectedValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ye.a.alert}," ",r.a.createElement(be.a,{message:"You selected date: ".concat(a&&a.format("YYYY-MM-DD"))})," "),r.a.createElement("div",{className:ye.a.cal}," ",r.a.createElement(pe.a,{value:t,onSelect:this.onSelect,onPanelChange:this.onPanelChange})))}}]),a}(r.a.Component),ge=Object(J.b)((function(e){}),{setDay:function(e){return{type:"SAVE_DAY",day:e}}})(je),Oe=r.a.memo((function(e){var t=Object(n.useState)(!0),a=Object(K.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(),u=Object(K.a)(o,2),i=u[0],s=u[1],m=Object(J.d)(ee),d=Object(J.d)(X),E=Object(J.c)();return Object(n.useEffect)((function(){var e;null!=i&&E((e=i,function(){var t=Object(S.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:n=t.sent,a(Y(n)),a(M(!1)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a(M(!0)),alert("Please enter valid date!");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())).then((function(){l(!1)}))}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,c&&r.a.createElement(Ee,{onSubmit:function(e){var t=e.searchedDay;typeof t==typeof Date()?s(t):s(d)}})),r.a.createElement("div",{className:ye.a.cal},c&&r.a.createElement(ge,null)),m&&c&&r.a.createElement("div",{class:"alert alert-success alert-dismissible"},r.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert"},"\xd7"),r.a.createElement("strong",null,"Attention!")," Please Enter Date!!!"),r.a.createElement("div",null,!c&&r.a.createElement(ce,null)))})),_e=function(e){return e.weatherPage.temp},Ce=function(e){return e.weatherPage.cityName},Se=function(e){return e.weatherPage.country},Ne=function(e){return e.weatherPage.windspeed},we=function(e){return e.weatherPage.description},ke=function(e){return e.weatherPage.humidity},De=function(e){return e.weatherPage.icon},Pe=function(e){return e.weatherPage.sunset},Ae=function(e){return e.weatherPage.sunrise},xe=function(e){return e.weatherPage.moonrise},Ie=function(e){return e.weatherPage.moonset},Me=function(e){return e.weatherPage.localtime},Ye=function(){var e=Object(J.d)(Ce),t=Object(J.d)(Se),a=Object(J.d)(_e),n=Object(J.d)(we),c=Object(J.d)(Ne),l=Object(J.d)(ke),o=Object(J.d)(De),u=Object(J.d)(Ae),i=Object(J.d)(Pe),s=Object(J.d)(xe),m=Object(J.d)(Ie),d=Object(J.d)(Me);return r.a.createElement("div",null,r.a.createElement("table",{class:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,t))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"City"),r.a.createElement("td",null,e)),r.a.createElement("tr",null,r.a.createElement("td",null,"Temperature"),r.a.createElement("td",null,a,"\xb0C")),r.a.createElement("tr",null,r.a.createElement("td",null,"Description"),r.a.createElement("td",null,n,r.a.createElement("img",{src:o}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Humidity"),r.a.createElement("td",null,l,"%")),r.a.createElement("tr",null,r.a.createElement("td",null,"Wind speed"),r.a.createElement("td",null,c," kph")),r.a.createElement("tr",null,r.a.createElement("td",null,"Sunrise"),r.a.createElement("td",null,u)),r.a.createElement("tr",null,r.a.createElement("td",null,"Sunset"),r.a.createElement("td",null,i)),r.a.createElement("tr",null,r.a.createElement("td",null,"Moonrise"),r.a.createElement("td",null,s)),r.a.createElement("tr",null,r.a.createElement("td",null,"Moonset"),r.a.createElement("td",null,m," ")),r.a.createElement("tr",null,r.a.createElement("td",null,"Local Time"),r.a.createElement("td",null,d," ")))))},Re=Object(de.a)({form:"getweather"})((function(e){return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("h3",{className:re.a.textcolor}," Enter City Name ")),r.a.createElement("form",{class:"form-inline",onSubmit:e.handleSubmit},r.a.createElement(ie.a,{component:me,name:"searchedCity",type:"search",placeholder:"Enter City Name","aria-label":"Search",class:"form-control mr-sm-2"}),r.a.createElement("button",{class:"btn btn-outline-success",type:"submit"},"Get Weather")))})),Ve=r.a.memo((function(e){var t=Object(n.useState)(!0),a=Object(K.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(),u=Object(K.a)(o,2),i=u[0],s=u[1],m=Object(J.c)();return Object(n.useEffect)((function(){var e;m((e=i,function(){var t=Object(S.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:return n=t.sent,a(L(n)),t.next=6,x(e);case 6:r=t.sent,a(z(r));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(){l(!1)}))}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,c&&r.a.createElement(Re,{onSubmit:function(e){var t=e.searchedCity;s(t)}})),r.a.createElement("div",null,!c&&r.a.createElement(Ye,null)))})),Te=a(205),Le=a.n(Te),ze=a(81),Fe=a.n(ze),Ge=function(e){return e.aztroPage.name},Ue=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={json:{}},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://aztro.sameerkumar.website/?sign=".concat(this.props.name,"&day=today");fetch(t,{method:"POST"}).then((function(e){return e.json()})).then((function(t){e.setState({json:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:Fe.a.aztro},r.a.createElement("div",{className:Fe.a.title}," Your sign: ",this.props.name,"  "),"Current Date: ",this.state.json.current_date," ",r.a.createElement("br",null),"Compatibility: ",this.state.json.compatibility," ",r.a.createElement("br",null),"Lucky Number: ",this.state.json.lucky_number," ",r.a.createElement("br",null),"Lucky Time: ",this.state.json.lucky_time," ",r.a.createElement("br",null),"Color: ",this.state.json.color," ",r.a.createElement("br",null),"Date Range: ",this.state.json.date_range," ",r.a.createElement("br",null),"Mood: ",this.state.json.mood," ",r.a.createElement("br",null),"Description: ",this.state.json.description," ",r.a.createElement("br",null))}}]),a}(r.a.Component),We=Object(J.b)((function(e){return{name:Ge(e)}}))(Ue),qe=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getInfo=function(e){e.preventDefault();var t=e.target.value;n.props.setName(t),n.props.changeEditMode()},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Fe.a.aztro},r.a.createElement("div",{className:Fe.a.title},"Choose your sign ")),r.a.createElement("div",{class:"d-flex flex-nowrap"},r.a.createElement("input",{type:"button",class:"btn btn-success ",value:"Aries",onClick:this.getInfo})," ",r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Taurus",onClick:this.getInfo,name:"taurus"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Gemini",onClick:this.getInfo,name:"gemini"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Cancer",onClick:this.getInfo,name:"cancer"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Leo",onClick:this.getInfo,name:"leo"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Virgo",onClick:this.getInfo,name:"virgo"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "')),r.a.createElement("div",null,'"                         " "                    "'),r.a.createElement("div",{class:"d-flex flex-nowrap"},r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Libra",onClick:this.getInfo,name:"libra"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Scorpio",onClick:this.getInfo,name:"scorpio"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Sagittarius",onClick:this.getInfo,name:"sagittarius"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Capricorn",onClick:this.getInfo,name:"capricorn"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Aquarius",onClick:this.getInfo,name:"aquarius"}),r.a.createElement("br",null),r.a.createElement("div",null,'"          "'),r.a.createElement("input",{type:"button",class:"btn btn-success",value:"Pisces",onClick:this.getInfo,name:"pisces"}),r.a.createElement("br",null)))}}]),a}(r.a.Component),He=Object(J.b)((function(e){return{name:Ge(e)}}),(function(e){return{setName:function(t){e(function(e){return{type:"SAVE_NAME",name:e}}(t))}}}))(qe),Be=function(){var e=Object(n.useState)(!1),t=Object(K.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,!a&&r.a.createElement("div",null,r.a.createElement(He,{changeEditMode:function(){c(!0)}})),a&&r.a.createElement("div",null,r.a.createElement(We,null)))},Je=(a(182),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(j,null),r.a.createElement(p,null),r.a.createElement("div",{class:"app-wrapper-content"},r.a.createElement("div",{className:"asfoto"},r.a.createElement(m.a,{path:"/astronomypictureoftheday",render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(m.a,{path:"/weatherofCity",render:function(){return r.a.createElement(Ve,null)}}),r.a.createElement(m.a,{path:"/aztro",render:function(){return r.a.createElement(Be,null)}})),r.a.createElement("div",null,r.a.createElement("img",{src:Le.a,className:"foto"}))))}}]),a}(r.a.Component)),Ke=function(e){return r.a.createElement(d.a,{basename:"/My-project"},r.a.createElement(J.a,{store:B},r.a.createElement(Je,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports={nav:"Navbar_nav__2OUtl",item:"Navbar_item__2VTmv",activeLink:"Navbar_activeLink__2vwVg"}},81:function(e,t,a){e.exports={aztro:"aztro_aztro__1nGkR",title:"aztro_title__2JXjA"}},91:function(e,t,a){e.exports={cal:"Calendar_cal__b7fZi",alert:"Calendar_alert__3mbRu"}}},[[208,1,2]]]);
//# sourceMappingURL=main.4f8c0dd0.chunk.js.map