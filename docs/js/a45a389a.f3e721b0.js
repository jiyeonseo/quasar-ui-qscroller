(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a45a389a"],{"3eb2":function(e,t){function n(e){e.boot.push("~@quasar/quasar-app-extension-qmarkdown/src/boot/register.js"),e.build.transpileDependencies.push(/quasar-app-extension-qmarkdown[\\/]src/),e.css.push("~@quasar/quasar-ui-qmarkdown/src/index.sass")}e.exports=function(e){e.compatibleWith("quasar","^1.1.1"),e.compatibleWith("@quasar/app","^1.1.0"),e.registerDescribeApi("QMarkdown","~@quasar/quasar-ui-qmarkdown/dist/api/QMarkdown.json"),e.extendQuasarConf(n),e.chainWebpack((function(t,n){var o=n.isClient;return r(e,t,o)}))};var r=function(e,t,n){n.isClient;if(void 0!==e.prompts.import_md&&!0===e.prompts.import_md&&(console.log(" App Extension (qmarkdown) Info: 'Adding markdown loader to chainWebpack in your quasar.conf.js'"),t.module.rule("md").test(/\.md$/i).use("raw-loader").loader("raw-loader")),void 0!==e.prompts.import_vmd&&!0===e.prompts.import_vmd){console.log(" App Extension (qmarkdown) Info: 'Adding .vmd (vue+markdown) loader to chainWebpack in your quasar.conf.js'");var r=t.module.rule("vmd").test(/\.vmd$/).pre();r.use("v-loader").loader("vue-loader").options({productionMode:e.prod,compilerOptions:{preserveWhitespace:!1},transformAssetUrls:{video:"src",source:"src",img:"src",image:"xlink:href"}}),r.use("ware-loader").loader("ware-loader").options({raw:!0,middleware:function(e){var t=renderMarkdown(e);return"".concat(t)}})}}},"55d9":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      hour12\n      style="max-width: 120px; height: 200px;"\n    ></q-scroller>\n\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      hour12\n      :am-pm-labels="[\'a\', \'p\']"\n      style="max-width: 120px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'Time12Hour\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},"5e73":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="valueStr"\n      view="time"\n      no-footer\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueObj"\n      view="time"\n      no-footer\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueArr"\n      view="time"\n      no-footer\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueDate"\n      view="time"\n      no-footer\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeTypes\',\n\n  data () {\n    return {\n      valueStr: \'09:00\',\n      valueObj: { hour: \'09\', minute: \'10\' },\n      valueArr: [ \'09\', \'20\' ],\n      valueDate: new Date()\n    }\n  },\n\n  watch: {\n    valueStr (val) {\n      /* eslint-disable-next-line */\n      console.log(\'string:\', val)\n    },\n    valueObj (val) {\n      /* eslint-disable-next-line */\n      console.log(\'object:\', JSON.stringify(val))\n    },\n    valueArr (val) {\n      /* eslint-disable-next-line */\n      console.log(\'array:\', JSON.stringify(val))\n    },\n    valueDate (val) {\n      /* eslint-disable-next-line */\n      console.log(\'date:\', val)\n    }\n  }\n}\n<\/script>\n'},"74ba":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:e.slugifiedTitle}},[n("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[n("q-toolbar",[n("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[n("q-toolbar-title",{staticClass:"example-title",on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[n("span",{staticClass:"ellipsis"},[e._v(e._s(e.title))])])],1)],1),this.$slots.default?n("q-separator"):e._e(),this.$slots.default?n("q-card-section",[e._t("default")],2):e._e(),n("q-separator"),n("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[n("q-card",[n("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab",{attrs:{name:"template",label:"Template"}}):e._e(),e.parts.script?n("q-tab",{attrs:{name:"script",label:"Script"}}):e._e(),e.parts.style?n("q-tab",{attrs:{name:"style",label:"Style"}}):e._e()],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab-panel",{attrs:{name:"template"}},[n("q-markdown",{attrs:{src:e.parts.template}})],1):e._e(),e.parts.script?n("q-tab-panel",{attrs:{name:"script"}},[n("q-markdown",{attrs:{src:e.parts.script}})],1):e._e(),e.parts.style?n("q-tab-panel",{attrs:{name:"style"}},[n("q-markdown",{attrs:{src:e.parts.style}})],1):e._e()],1)],1)],1),n("q-separator"),n(e.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},o=[],l=(n("ac6a"),n("cadf"),n("06db"),n("456d"),n("8669")),a={name:"ExampleCard",props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return Object(l["b"])(this.title)}},methods:{copyHeading:l["a"],updateParts:function(){var e=this;this.parts={},Object.keys(this.tagParts).forEach((function(t){""!==e.tagParts[t]&&(e.parts[t]="```\n"+e.tagParts[t]+"\n```")}))}}},s=a,i=n("2877"),c=Object(i["a"])(s,r,o,!1,null,null,null);t["a"]=c.exports},8367:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n\n    <q-input color="blue-8" filled v-model="value" label="Enter time" mask="##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller1" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time"\n              no-header\n              rounded-borders\n              :style="scrollerPopupStyle120"\n              @close="() => { showScroller1 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter time" mask="##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller2" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time"\n              rounded-borders\n              text-color="yellow-7"\n              color="blue-8"\n              inner-text-color="yellow-7"\n              inner-color="blue-8"\n              :style="scrollerPopupStyle120"\n              @close="() => { showScroller2 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter time" mask="##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller3" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time"\n              no-header\n              no-footer\n              vertical-bar\n              :style="scrollerPopupStyle120"\n              @close="() => { showScroller3 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter time" mask="##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller4" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time"\n              no-header\n              vertical-bar\n              bar-color="green"\n              border-color="green"\n              :style="scrollerPopupStyle120"\n              @close="() => { showScroller4 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeQInput\',\n\n  data () {\n    return {\n      showScroller1: false,\n      showScroller2: false,\n      showScroller3: false,\n      showScroller4: false,\n      value: \'\'\n    }\n  },\n\n  computed: {\n    scrollerPopupStyle120 () {\n      if (this.$q.screen.lt.sm) {\n        return {\n          width: \'90vw\',\n          height: \'70vh\'\n        }\n      } else {\n        return {\n          maxHeight: \'200px\',\n          height: \'200px\',\n          width: \'120px\'\n        }\n      }\n    }\n  }\n}\n<\/script>\n'},8669:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n("a481");function r(e){var t=window.location.origin+window.location.pathname+"#"+e,n=document.createElement("textarea");n.className="fixed-top",n.value=t,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function o(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},9747:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-header\n      no-footer\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      no-shadow\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      no-border\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      rounded-borders\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      rounded-borders\n      dense\n      style="max-width: 80px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeBasic\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},"986a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"q-markdown"},[r("example-title",{attrs:{title:"view='time'"}}),r("example-card",{attrs:{title:"Basic",name:"TimeBasic","tag-parts":e.getTagParts(n("9747").default)}}),r("example-card",{attrs:{title:"Colors",name:"TimeColors","tag-parts":e.getTagParts(n("9cc9").default)}}),r("example-card",{attrs:{title:"QInput",name:"TimeQInput","tag-parts":e.getTagParts(n("8367").default)}}),r("example-card",{attrs:{title:"Disabled",name:"TimeDisabled","tag-parts":e.getTagParts(n("d49a").default)}}),r("example-card",{attrs:{title:"Intervals",name:"TimeIntervals","tag-parts":e.getTagParts(n("dffe").default)}}),r("example-card",{attrs:{title:"12 Hour",name:"Time12Hour","tag-parts":e.getTagParts(n("55d9").default)}}),r("example-card",{attrs:{title:"Types",name:"TimeTypes","tag-parts":e.getTagParts(n("5e73").default)}}),r("example-card",{attrs:{title:"Slots",name:"TimeSlots","tag-parts":e.getTagParts(n("fcc3").default)}})],1)},o=[],l=n("fe7d"),a=n("74ba"),s=n("8669"),i=n("3eb2"),c={name:"Time",components:{ExampleTitle:l["a"],ExampleCard:a["a"]},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Time"),this.addToToc("Basic",2),this.addToToc("Colors",2),this.addToToc("QInput",2),this.addToToc("Disabled",2),this.addToToc("Intervals",2),this.addToToc("12 Hour",2),this.addToToc("Types",2),this.addToToc("Slots",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{getTagParts:i["getTagParts"],addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Object(s["b"])(e);this.tempToc.push({children:[],id:n,label:e,level:t})}}},d=c,p=n("2877"),m=Object(p["a"])(d,r,o,!1,null,null,null);t["default"]=m.exports},"9cc9":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      text-color="yellow-7"\n      color="blue-8"\n      inner-text-color="yellow-7"\n      inner-color="blue-8"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      bar-color="orange-8"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      vertical-bar\n      bar-color="purple-8"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      border-color="purple-8"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      dense\n      text-color="lightgreen"\n      inner-text-color="orange"\n      bar-color="purple"\n      style="max-width: 80px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeColors\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},d49a:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      disable\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      dense\n      disable\n      style="max-width: 80px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      :disabled-hours="[1,2,3,4,5,6]"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      :disabled-minutes="[10,12,14,16,18,20]"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeDisabled\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},dffe:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      minute-interval="5"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      hour-interval="2"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      no-minutes\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      no-hours\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeIntervals\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},fcc3:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <div class=\"q-pa-md row justify-evenly q-gutter-sm\">\n    <span>Coming soon!</span>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'TimeSlots',\n\n  data () {\n    return {\n      value: ''\n    }\n  }\n}\n<\/script>\n"},fe7d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},o=[],l=n("8669"),a={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(l["b"])(this.title)}},methods:{copyHeading:l["a"]}},s=a,i=n("2877"),c=Object(i["a"])(s,r,o,!1,null,null,null);t["a"]=c.exports}}]);