(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-020deed8","chunk-3eaa9cb4"],{"12a2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-snackbar",{attrs:{timeout:9999,top:"",persistent:"","multi-line":"",color:"blue lighten-2",dark:"",icon:"mdi-alert-circle-outline",transition:"scale-transition"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(t._s(t.message)+"\n  "),i("v-btn",{attrs:{flat:"",color:"blue lighten-2"},on:{click:t.alertConfirm}},[t._v("확인")])],1)},a=[],s=i("a27f"),r={data:function(){return{alert:!1,access:!1,user:[],message:""}},mounted:function(){var t=this;s["a"].$on("SaveItem",(function(e,i){t.alert=!0,t.message="생성되었습니다","user"===e&&(t.user=i,t.access=!1),"company"===e&&(t.access=!0)})),s["a"].$on("EditItem",(function(e,i){t.alert=!0,t.message="수정이 완료되었습니다","user"===e&&(t.user=i,t.access=!1),"company"===e&&(t.access=!0)}))},methods:{alertConfirm:function(){!1===this.access&&(this.alert=!1,s["a"].$emit("userAddOk",this.user)),!0===this.access&&(location.href="/company")}}},o=r,c=i("2877"),l=i("6544"),u=i.n(l),d=i("8336"),h=i("2db4"),v=Object(c["a"])(o,n,a,!1,null,null,null);e["a"]=v.exports;u()(v,{VBtn:d["a"],VSnackbar:h["a"]})},"23a7":function(t,e,i){"use strict";i("8e6e"),i("456d");var n=i("75fc"),a=(i("ac6a"),i("7f7f"),i("bd86")),s=i("7618"),r=(i("6762"),i("2fdb"),i("c5f6"),i("5803"),i("2677")),o=i("cc20"),c=i("80d2"),l=i("d9bd");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=r["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:function(){return[]},validator:function(t){return"object"===Object(s["a"])(t)||Array.isArray(t)}}},computed:{classes:function(){return d({},r["a"].options.computed.classes.call(this),{"v-file-input":!0})},counterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){return t+e.size}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(c["v"])(e,1024===this.base))},internalArrayValue:function(){return Array.isArray(this.internalValue)?this.internalValue:Object(c["E"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var i=t.truncateText(e.name);return t.showSize?"".concat(i," (").concat(Object(c["v"])(e.size,1024===t.base),")"):i})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(l["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(c["k"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(o["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.counterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:function(){return t.$refs.input.click()}}},e)},onInput:function(t){var e=Object(n["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,i){"use strict";var n=i("8654");e["a"]=n["a"]},"2db4":function(t,e,i){"use strict";i("c5f6"),i("ca71");var n=i("a9ad"),a=i("f2e7"),s=i("fe6c"),r=i("58df"),o=i("d9bd");e["a"]=Object(r["a"])(n["a"],a["a"],Object(s["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(o["d"])("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},5803:function(t,e,i){},6688:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{scrollable:"","max-width":"400px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-app-bar",{attrs:{dark:"",color:"#2a3248"}},[n("v-card-title",[n("span",[t._v(t._s(t.formTitle)+" 회원정보")])]),n("v-spacer"),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.infoClose()}}},[n("v-icon",{attrs:{size:"30px"}},[t._v("mdi-close")])],1)],1),n("v-card-text",{staticClass:"pa-0"},[n("v-img",{attrs:{src:i("aef3"),height:"150px",dark:""}}),t.userAccess?n("v-list",{attrs:{"two-line":""}},[t._l(t.lists1,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"indigo"}},[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))]),n("v-list-item-subtitle",[t._v(t._s(e.titleHead))])],1)],1)})),n("v-dialog",{attrs:{"max-width":"400px",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-list",[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-help")])],1),n("v-list-item-content",[n("v-list-item-title",t._g({on:{click:t.a}},i),[t._v("보유중인 HYPERVSN 보기")])],1)],1)],1)]}}],null,!1,3170959560),model:{value:t.dialogHv,callback:function(e){t.dialogHv=e},expression:"dialogHv"}},[n("v-card",[n("v-app-bar",{attrs:{dark:"",color:"#2a3248"}},[n("v-app-title",[t._v("하이퍼비전 목록")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialogHv=t.flase}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("div",{staticStyle:{align:"center"}},t._l(t.devices,(function(e){return n("v-chip",{key:e.deviceId,attrs:{color:"purple",outlined:""}},[t._v("\n                "+t._s(e.device.name)+"\n              ")])})),1)],1)],1)],2):n("v-list",{attrs:{"two-line":""}},[t._l(t.lists2,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"indigo"}},[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))]),n("v-list-item-subtitle",[t._v(t._s(e.titleHead))])],1)],1)})),n("v-dialog",{attrs:{"max-width":"400px",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-list",[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-help")])],1),n("v-list-item-content",[n("v-list-item-title",t._g({},i),[t._v("보유중인 HYPERVSN 보기")])],1)],1)],1)]}}]),model:{value:t.dialogHv,callback:function(e){t.dialogHv=e},expression:"dialogHv"}},[n("v-card",[n("v-app-bar",{attrs:{dark:"",color:"#2a3248"}},[n("v-app-title",[t._v("하이퍼비전 목록")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialogHv=t.flase}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("div",t._l(t.devices,(function(e){return n("v-chip",{key:e.deviceId,attrs:{color:"purple",outlined:""}},[t._v("\n                "+t._s(e.device.name))])})),1)],1)],1)],2)],1)],1)],1)},a=[],s=(i("7f7f"),i("a27f")),r=i("bc3a"),o=i.n(r),c=(i("c1df"),{data:function(){return{dialogHv:!1,devices:[],formTitle:"",userAccess:!0,dialog:!1,lists1:[{title:"",icon:"mdi-account-check",titleHead:"사용자"},{title:"",icon:"mdi-lock",titleHead:"활성화 상태"},{title:"",icon:"mdi-calendar",titleHead:"계약 만료일 "},{title:"",icon:"mdi-phone",titleHead:"연락처"},{title:"",icon:"mdi-email",titleHead:"이메일"},{title:"",icon:"mdi-map-marker",titleHead:"주소"}],lists2:[{title:"",icon:"mdi-account-check",titleHead:"기업"},{title:"",icon:"mdi-lock",titleHead:"활성화 상태"},{title:"",icon:"mdi-calendar",titleHead:"계약 만료일"},{title:"",icon:"mdi-email",titleHead:"이메일"},{title:"",icon:"mdi-domain",titleHead:"사업자 번호"}]}},methods:{infoClose:function(){this.dialog=!1}},mounted:function(){var t=this;s["a"].$on("userDetail",(function(e){console.log(e),t.devices=e.branch_devices,t.lists1[0].title=e.name,t.lists1[1].title=e.user_groups[0].users[0].userYn,t.lists1[2].title=e.expiredDate,t.lists1[3].title=e.tel,t.lists1[4].title=e.user_groups[0].users[0].orgId,t.lists1[5].title=e.address,t.dialog=!0,t.userAccess=!0})),s["a"].$on("companyDetail",(function(e){o.a.get("/api/company/detail",{headers:{branchid:e.id}}).then((function(i){console.log(i.data),t.lists2[0].title=i.data.branch.name,t.lists2[1].title=i.data.branch.user_groups[0].users[0].userYn,t.lists2[2].title=t.$moment(i.data.branch.expiredDate).format("YYYY-MM-DD"),t.lists2[3].title=i.data.branch.user_groups[0].users[0].orgId,t.lists2[4].title=i.data.branch.busNumber,t.devices=i.data.branch.branch_devices,t.formTitle=e.name})).catch((function(t){console.error(t.message)})),t.dialog=!0,t.userAccess=!1}))}}),l=c,u=i("2877"),d=i("6544"),h=i.n(d),v=i("40dc"),f=i("8336"),p=i("b0af"),m=i("99d9"),b=i("cc20"),g=i("169a"),y=i("132d"),k=i("adda"),_=i("8860"),V=i("da13"),S=i("5d23"),x=i("34c3"),$=i("2fa4"),w=Object(u["a"])(l,n,a,!1,null,null,null);e["a"]=w.exports;h()(w,{VAppBar:v["a"],VBtn:f["a"],VCard:p["a"],VCardText:m["b"],VCardTitle:m["c"],VChip:b["a"],VDialog:g["a"],VIcon:y["a"],VImg:k["a"],VList:_["a"],VListItem:V["a"],VListItemContent:S["a"],VListItemIcon:x["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VSpacer:$["a"]})},a27f:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("2b0e"),a=new n["a"]},b536:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-snackbar",{attrs:{timeout:1e4,top:"","multi-line":"",persistent:"",color:"error",dark:"",icon:"mdi-alert-circle-outline",transition:"scale-transition"},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[t._v("정말 삭제 하시겠습니까?\n  "),i("v-btn",{attrs:{flat:"",color:"error"},on:{click:t.confirmYes}},[t._v("네")]),i("v-btn",{attrs:{flat:"",color:"error"},on:{click:t.confirmNo}},[t._v("아니요")])],1)},a=[],s=i("a27f"),r={data:function(){return{confirm:!1,CorB:"",branchId:0}},mounted:function(){var t=this;s["a"].$on("DelCompany",(function(e){t.branchId=e.id,t.CorB="company",t.confirm=!0})),s["a"].$on("DelUser",(function(e,i){t.branchId=e.id,t.CorB="branch",t.confirm=!0}))},methods:{confirmYes:function(){"company"===this.CorB?s["a"].$emit("delCompanyOk",!0):"branch"===this.CorB&&s["a"].$emit("delUserOk",this.branchId),this.confirm=!1},confirmNo:function(){this.confirm=!1}}},o=r,c=i("2877"),l=i("6544"),u=i.n(l),d=i("8336"),h=i("2db4"),v=Object(c["a"])(o,n,a,!1,null,null,null);e["default"]=v.exports;u()(v,{VBtn:d["a"],VSnackbar:h["a"]})},ca71:function(t,e,i){},dbfb:function(t,e,i){t.exports=i.p+"img/aaa.a98b90c7.png"}}]);
//# sourceMappingURL=chunk-020deed8.2e70ba6a.js.map