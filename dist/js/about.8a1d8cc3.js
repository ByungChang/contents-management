(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"615b":function(t,e,r){},b0af:function(t,e,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var a=r("bd86"),i=(r("c5f6"),r("615b"),r("10d2")),o=r("297c"),s=r("1c87"),n=r("58df");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(n["a"])(o["a"],s["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return l({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},i["a"].options.computed.classes.call(this))},styles:function(){var t=l({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},f820:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-container",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"500px"},attrs:{id:"scroll-target"}},[r("v-layout",{attrs:{wrap:"",row:""}},[r("v-flex",[r("v-list",t._l(t.files,(function(e){return r("v-list-item",{key:e.id,staticStyle:{"border-bottom":"1px grey dashed"}},[r("v-list-item-title",[r("v-icon",[t._v("mdi-paperclip")]),t._v(t._s(e.file.orgName)+"\n                            "),r("v-icon",{staticStyle:{color:"red"},on:{click:function(r){return t.delFile(e)}}},[t._v("mdi-close")])],1),r("v-btn",{on:{click:function(r){return t.a(e)}}},[t._v("test")])],1)})),1)],1)],1)],1)],1)},i=[],o=(r("bc3a"),{mounted:function(){},data:function(){return{files:[{id:1,orgName:"asdf"},{id:2,orgName:"qwer"}]}},methods:{delFile:function(t){console.log(this.files),this.files.splice(1,1)}}}),s=o,n=r("2877"),c=r("6544"),l=r.n(c),d=r("8336"),u=r("b0af"),f=r("a523"),h=(r("20f6"),r("e8f2")),p=Object(h["a"])("flex"),v=r("132d"),b=Object(h["a"])("layout"),g=r("8860"),m=r("da13"),y=r("5d23"),O=Object(n["a"])(s,a,i,!1,null,null,null);e["default"]=O.exports;l()(O,{VBtn:d["a"],VCard:u["a"],VContainer:f["a"],VFlex:p,VIcon:v["a"],VLayout:b,VList:g["a"],VListItem:m["a"],VListItemTitle:y["c"]})}}]);
//# sourceMappingURL=about.8a1d8cc3.js.map