(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4],{337:function(e,t,o){var content=o(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(114).default)("54d222c8",content,!0,{sourceMap:!1})},338:function(e,t,o){"use strict";o.r(t);var r={props:{message:String,popupClass:String},methods:{closePopup:function(){this.$emit("close")}},data:function(){return{}}},n=(o(339),o(60)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("b-alert",{class:"alert-"+e.popupClass,attrs:{show:"",fade:"",variant:e.popupClass}},[t("button",{staticClass:"close",on:{click:e.closePopup}},[e._v("Close")]),e._v(" "),t("p",[e._v(e._s(e.message))])])],1)}),[],!1,null,"b9f2121e",null);t.default=component.exports},339:function(e,t,o){"use strict";o(337)},340:function(e,t,o){var r=o(113)((function(i){return i[1]}));r.push([e.i,"$danger-color:#ff6b6b;$success-color:#4caf50;$white-color:#fff;.popup[data-v-b9f2121e]{border:1px solid #ccc;border-radius:4px;margin:10px;padding:10px;text-align:center}.popup.danger[data-v-b9f2121e]{background-color:$danger-color!important;color:$white-color!important}.popup.success[data-v-b9f2121e]{background-color:$success-color!important;color:$white-color!important}",""]),r.locals={},e.exports=r},341:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));o(1),o(25);var r="http://localhost:3000",n={Login:function(data){return fetch(r+"/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:data.email,password:data.password})})},Register:function(data){return fetch(r+"/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:data.name,email:data.email,password:data.password})})}}},342:function(e,t,o){"use strict";o.r(t);o(25);var r=o(28),n=(o(72),o(12),o(341),{components:{Alert:o(338).default},data:function(){return{isPopupVisible:!1,popupMessage:"",popupClass:"",form:{email:"",name:""},show:!0}},methods:{validateEmail:function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},onSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.form.name){t.next=4;break}return e.popupMessage="Dangerous action failed! name",e.showDangerPopup(),t.abrupt("return");case 4:if(e.validateEmail(e.form.email)){t.next=8;break}return e.popupMessage="Dangerous action failed! email",e.showDangerPopup(),t.abrupt("return");case 8:e.checkUser(),e.showSuccessPopup();case 10:case"end":return t.stop()}}),t)})))()},checkUser:function(){this.$store.dispatch("auth/login",this.form),this.$store.dispatch("form/checkUser",this.form).then((function(data){}))},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){t.show=!0}))},showDangerPopup:function(){this.popupClass="danger",this.isPopupVisible=!0},showSuccessPopup:function(){this.popupMessage="Success! Action completed.",this.popupClass="success",this.isPopupVisible=!0},closePopup:function(){this.isPopupVisible=!1}}}),l=o(60),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"container"},[t("div",[t("h2",[e._v("login")]),e._v(" "),t("div",[e.isPopupVisible?t("Alert",{attrs:{message:e.popupMessage,popupClass:e.popupClass},on:{close:e.closePopup}}):e._e(),e._v(" "),e.show?t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Your Name:"}},[t("b-form-input",{attrs:{id:"input-1",placeholder:"Enter name",pattern:"[a-zA-Z]+"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-2",label:"Your Email:"}},[t("b-form-input",{attrs:{id:"input-2",placeholder:"Enter Email",type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),e._v(" "),t("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Alert:o(338).default})},343:function(e,t,o){"use strict";o.r(t);o(25);var r={components:{Alert:o(338).default},data:function(){return{isPopupVisible:!1,popupMessage:"",popupClass:"",form:{email:"",name:"",prenom:"",address:"",telephone:""},show:!0}},methods:{onSubmit:function(e){this.form.name&&this.form.email?this.showSuccessPopup():this.showDangerPopup(),this.$store.dispatch("form/addFormData",this.form)},onReset:function(e){this.form.email="",this.form.name="",this.form.prenom="",this.form.address="",this.form.telephone="",this.show=!0},showDangerPopup:function(){this.popupMessage="Dangerous action failed!",this.popupClass="danger",this.isPopupVisible=!0},showSuccessPopup:function(){this.popupMessage="Success! Action completed.",this.popupClass="success",this.isPopupVisible=!0},closePopup:function(){this.isPopupVisible=!1}}},n=o(60),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"container"},[t("div",[t("h2",[e._v("Formulare")]),e._v(" "),e.isPopupVisible?t("Alert",{attrs:{message:e.popupMessage,popupClass:e.popupClass},on:{close:e.closePopup}}):e._e(),e._v(" "),t("div",[e.show?t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)},reset:e.onReset}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Your Name:"}},[t("b-form-input",{attrs:{id:"input-1",placeholder:"Enter name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-1",label:"Your Prenom:"}},[t("b-form-input",{attrs:{id:"input-3",placeholder:"Enter Prenom",required:""},model:{value:e.form.prenom,callback:function(t){e.$set(e.form,"prenom",t)},expression:"form.prenom"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-2",label:"Your Email:"}},[t("b-form-input",{attrs:{id:"input-2",placeholder:"Enter Email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Address","label-for":"address-input",description:"Enter your address"}},[t("b-form-input",{attrs:{id:"address-input",placeholder:"Enter your address"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Telephone Number","label-for":"telephone-input",description:"Enter your telephone number"}},[t("b-form-input",{attrs:{id:"telephone-input",placeholder:"Enter your telephone number"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1),e._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),e._v(" "),t("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Alert:o(338).default})},347:function(e,t,o){"use strict";o.r(t);var r=o(342),n=o(343),l={components:{Login:r.default,Form:n.default},data:function(){return{}},methods:{}},c=o(60),component=Object(c.a)(l,(function(){var e=this._self._c;return e("section",{staticClass:"container"},[e("div",[e("div",[e("b-tabs",{attrs:{"content-class":"mt-3"}},[e("b-tab",{attrs:{title:"Login",active:""}},[e("Login")],1),this._v(" "),e("b-tab",{attrs:{title:"Register"}},[e("Form")],1)],1)],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Login:o(342).default,Form:o(343).default})}}]);