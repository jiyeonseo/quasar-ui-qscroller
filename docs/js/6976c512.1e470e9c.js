(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6976c512"],{"281e":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      text-color="yellow-7"\n      color="blue-8"\n      inner-text-color="yellow-7"\n      inner-color="blue-8"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      bar-color="orange-8"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      vertical-bar\n      bar-color="purple-8"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      border-color="purple-8"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      dense\n      text-color="lightgreen"\n      inner-text-color="orange"\n      bar-color="purple"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeRangeColors\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},"3eb2":function(e,n){function t(e){e.boot.push("~@quasar/quasar-app-extension-qmarkdown/src/boot/register.js"),e.build.transpileDependencies.push(/quasar-app-extension-qmarkdown[\\/]src/),e.css.push("~@quasar/quasar-ui-qmarkdown/src/index.sass")}e.exports=function(e){e.compatibleWith("quasar","^1.1.1"),e.compatibleWith("@quasar/app","^1.1.0"),e.registerDescribeApi("QMarkdown","~@quasar/quasar-ui-qmarkdown/dist/api/QMarkdown.json"),e.extendQuasarConf(t),e.chainWebpack((function(n,t){var r=t.isClient;return a(e,n,r)}))};var a=function(e,n,t){t.isClient;if(void 0!==e.prompts.import_md&&!0===e.prompts.import_md&&(console.log(" App Extension (qmarkdown) Info: 'Adding markdown loader to chainWebpack in your quasar.conf.js'"),n.module.rule("md").test(/\.md$/i).use("raw-loader").loader("raw-loader")),void 0!==e.prompts.import_vmd&&!0===e.prompts.import_vmd){console.log(" App Extension (qmarkdown) Info: 'Adding .vmd (vue+markdown) loader to chainWebpack in your quasar.conf.js'");var a=n.module.rule("vmd").test(/\.vmd$/).pre();a.use("v-loader").loader("vue-loader").options({productionMode:e.prod,compilerOptions:{preserveWhitespace:!1},transformAssetUrls:{video:"src",source:"src",img:"src",image:"xlink:href"}}),a.use("ware-loader").loader("ware-loader").options({raw:!0,middleware:function(e){var n=renderMarkdown(e);return"".concat(n)}})}}},"48a6":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      hour12\n      style="max-width: 230px; height: 200px;"\n    ></q-scroller>\n\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      hour12\n      :start-am-pm-labels="[\'a\', \'p\']"\n      :end-am-pm-labels="[\'a\', \'p\']"\n      style="max-width: 230px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeRange12Hour\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},"4c10":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      disable\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      dense\n      disable\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      :start-disabled-hours="[1,2,3,4,5,6]"\n      :end-disabled-hours="[1,2,3,4,5,6]"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      :start-disabled-minutes="[10,12,14,16,18,20]"\n      :end-disabled-minutes="[10,12,14,16,18,20]"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeRangeDisabled\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},"74ba":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:e.slugifiedTitle}},[t("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[t("q-toolbar",[t("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[t("q-toolbar-title",{staticClass:"example-title",on:{click:function(n){return e.copyHeading(e.slugifiedTitle)}}},[t("span",{staticClass:"ellipsis"},[e._v(e._s(e.title))])])],1)],1),this.$slots.default?t("q-separator"):e._e(),this.$slots.default?t("q-card-section",[e._t("default")],2):e._e(),t("q-separator"),t("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[t("q-card",[t("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(n){e.tab=n},expression:"tab"}},[e.parts.template?t("q-tab",{attrs:{name:"template",label:"Template"}}):e._e(),e.parts.script?t("q-tab",{attrs:{name:"script",label:"Script"}}):e._e(),e.parts.style?t("q-tab",{attrs:{name:"style",label:"Style"}}):e._e()],1),t("q-separator"),t("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(n){e.tab=n},expression:"tab"}},[e.parts.template?t("q-tab-panel",{attrs:{name:"template"}},[t("q-markdown",{attrs:{src:e.parts.template}})],1):e._e(),e.parts.script?t("q-tab-panel",{attrs:{name:"script"}},[t("q-markdown",{attrs:{src:e.parts.script}})],1):e._e(),e.parts.style?t("q-tab-panel",{attrs:{name:"style"}},[t("q-markdown",{attrs:{src:e.parts.style}})],1):e._e()],1)],1)],1),t("q-separator"),t(e.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},r=[],l=(t("ac6a"),t("cadf"),t("06db"),t("456d"),t("8669")),o={name:"ExampleCard",props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return Object(l["b"])(this.title)}},methods:{copyHeading:l["a"],updateParts:function(){var e=this;this.parts={},Object.keys(this.tagParts).forEach((function(n){""!==e.tagParts[n]&&(e.parts[n]="```\n"+e.tagParts[n]+"\n```")}))}}},s=o,i=t("2877"),c=Object(i["a"])(s,a,r,!1,null,null,null);n["a"]=c.exports},"7ed0":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n\n    <q-input color="blue-8" filled v-model="inputValue" label="Enter times" mask="##:## - ##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller1" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time-range"\n              no-header\n              rounded-borders\n              :style="scrollerPopupStyle150"\n              @close="() => { showScroller1 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="inputValue" label="Enter times" mask="##:## - ##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller2" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time-range"\n              rounded-borders\n              no-border\n              text-color="yellow-7"\n              color="blue-8"\n              inner-text-color="yellow-7"\n              inner-color="blue-8"\n              :style="scrollerPopupStyle150"\n              @close="() => { showScroller2 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="inputValue" label="Enter times" mask="##:## - ##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller3" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time-range"\n              no-header\n              no-footer\n              vertical-bar\n              :style="scrollerPopupStyle150"\n              @close="() => { showScroller3 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="inputValue" label="Enter times" mask="##:## - ##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller4" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time-range"\n              no-header\n              vertical-bar\n              bar-color="green"\n              border-color="green"\n              :style="scrollerPopupStyle150"\n              @close="() => { showScroller4 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeRangeQInput\',\n\n  data () {\n    return {\n      showScroller1: false,\n      showScroller2: false,\n      showScroller3: false,\n      showScroller4: false,\n      value: \'\',\n      inputValue: \'\'\n    }\n  },\n\n  computed: {\n    scrollerPopupStyle150 () {\n      if (this.$q.screen.lt.sm) {\n        return {\n          width: \'90vw\',\n          height: \'70vh\'\n        }\n      } else {\n        return {\n          maxHeight: \'200px\',\n          height: \'200px\',\n          width: \'150px\'\n        }\n      }\n    }\n  },\n\n  watch: {\n    value (val) {\n      let type = Object.prototype.toString.call(this.value)\n      if (type === \'[object Array]\') {\n        this.inputValue = `${val[0]} - ${val[1]}`\n      }\n    },\n    inputValue (val) {\n      const parts = val.split(\' - \')\n      if (parts[0] !== this.value[0] || parts[1] !== this.value[1]) {\n        this.value[0] = parts[0]\n        this.value[1] = parts[1]\n      }\n    }\n  }\n}\n<\/script>\n'},"849e":function(e,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div class=\"q-pa-md row justify-evenly q-gutter-sm\">\n    <span>Coming soon!</span>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'TimeRangeSlots',\n\n  data () {\n    return {\n      value: ''\n    }\n  }\n}\n<\/script>\n"},8669:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));t("a481");function a(e){var n=window.location.origin+window.location.pathname+"#"+e,t=document.createElement("textarea");t.className="fixed-top",t.value=n,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function r(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},"94f7":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      start-minute-interval="5"\n      end-minute-interval="5"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      start-hour-interval="2"\n      end-hour-interval="2"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      start-no-minutes\n      end-no-minutes\n      style="max-width: 110px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      start-no-hours\n      end-no-hours\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeRangeIntervals\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},b262:function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-header\n      no-footer\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      no-shadow\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      no-border\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      rounded-borders\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      rounded-borders\n      dense\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeRangeBasic\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},d427:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"q-markdown"},[a("example-title",{attrs:{title:"view='time-range'"}}),a("example-card",{attrs:{title:"Basic",name:"TimeRangeBasic","tag-parts":e.getTagParts(t("b262").default)}}),a("example-card",{attrs:{title:"Colors",name:"TimeRangeColors","tag-parts":e.getTagParts(t("281e").default)}}),a("example-card",{attrs:{title:"QInput",name:"TimeRangeQInput","tag-parts":e.getTagParts(t("7ed0").default)}}),a("example-card",{attrs:{title:"Disabled",name:"TimeRangeDisabled","tag-parts":e.getTagParts(t("4c10").default)}}),a("example-card",{attrs:{title:"Intervals",name:"TimeRangeIntervals","tag-parts":e.getTagParts(t("94f7").default)}}),a("example-card",{attrs:{title:"12 Hour",name:"TimeRange12Hour","tag-parts":e.getTagParts(t("48a6").default)}}),a("example-card",{attrs:{title:"Types",name:"TimeRangeTypes","tag-parts":e.getTagParts(t("fa02").default)}}),a("example-card",{attrs:{title:"Slots",name:"TimeRangeSlots","tag-parts":e.getTagParts(t("849e").default)}})],1)},r=[],l=t("fe7d"),o=t("74ba"),s=t("8669"),i=t("3eb2"),c={name:"TimeRange",components:{ExampleTitle:l["a"],ExampleCard:o["a"]},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("TimeRange"),this.addToToc("Basic",2),this.addToToc("Colors",2),this.addToToc("QInput",2),this.addToToc("Disabled",2),this.addToToc("Intervals",2),this.addToToc("12 Hour",2),this.addToToc("Types",2),this.addToToc("Slots",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{getTagParts:i["getTagParts"],addToToc:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=Object(s["b"])(e);this.tempToc.push({children:[],id:t,label:e,level:n})}}},p=c,d=t("2877"),u=Object(d["a"])(p,a,r,!1,null,null,null);n["default"]=u.exports},fa02:function(e,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div class=\"q-pa-md row justify-evenly q-gutter-sm\">\n    <q-scroller\n      v-model=\"valueStr\"\n      view=\"time-range\"\n      no-footer\n      style=\"max-width: 150px; height: 200px;\"\n    ></q-scroller>\n    <q-scroller\n      v-model=\"valueObj\"\n      view=\"time-range\"\n      no-footer\n      style=\"max-width: 150px; height: 200px;\"\n    ></q-scroller>\n    <q-scroller\n      v-model=\"valueArr\"\n      view=\"time-range\"\n      no-footer\n      style=\"max-width: 150px; height: 200px;\"\n    ></q-scroller>\n    <q-scroller\n      v-model=\"valueDate\"\n      view=\"time-range\"\n      no-footer\n      style=\"max-width: 150px; height: 200px;\"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'TimeRangeTypes',\n\n  data () {\n    return {\n      valueStr: ['09:00', '09:00'],\n      valueObj: [{ hour: '09', minute: '10' }, { hour: '09', minute: '10' }],\n      valueArr: [[ '09', '20' ], [ '09', '20' ]],\n      valueDate: [new Date(), new Date()]\n    }\n  },\n\n  watch: {\n    valueStr (val) {\n      /* eslint-disable-next-line */\n      console.log('string:', val)\n    },\n    valueObj (val) {\n      /* eslint-disable-next-line */\n      console.log('object:', JSON.stringify(val))\n    },\n    valueArr (val) {\n      /* eslint-disable-next-line */\n      console.log('array:', JSON.stringify(val))\n    },\n    valueDate (val) {\n      /* eslint-disable-next-line */\n      console.log('date:', val)\n    }\n  }\n}\n<\/script>\n"},fe7d:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(n){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},r=[],l=t("8669"),o={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(l["b"])(this.title)}},methods:{copyHeading:l["a"]}},s=o,i=t("2877"),c=Object(i["a"])(s,a,r,!1,null,null,null);n["a"]=c.exports}}]);