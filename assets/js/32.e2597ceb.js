(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{410:function(t,a,e){"use strict";e(411);var n=function(){var t=0,a=document.createElement("div");function e(t){return a.appendChild(t.dom),t}function s(e){for(var n=0;n<a.children.length;n++)a.children[n].style.display=n===e?"block":"none";t=e}a.style.cssText="position:absolute;top:0;left:0;cursor:pointer;opacity:0.9;z-index:19",a.addEventListener("click",(function(e){e.preventDefault(),s(++t%a.children.length)}),!1);var r=(performance||Date).now(),o=r,p=0,l=e(new n.Panel("FPS","#0ff","#002")),c=e(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var i=e(new n.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:a,addPanel:e,showPanel:s,begin:function(){r=(performance||Date).now()},end:function(){p++;var t=(performance||Date).now();if(c.update(t-r,200),t>=o+1e3&&(l.update(1e3*p/(t-o),100),o=t,p=0,i)){var a=performance.memory;i.update(a.usedJSHeapSize/1048576,a.jsHeapSizeLimit/1048576)}return t},update:function(){r=this.end()},domElement:a,setMode:s}};n.Panel=function(t,a,e){var n=1/0,s=0,r=Math.round,o=r(window.devicePixelRatio||1),p=80*o,l=48*o,c=3*o,i=2*o,v=3*o,u=15*o,d=74*o,_=30*o,m=document.createElement("canvas");m.width=p,m.height=l,m.style.cssText="width:80px;height:48px";var k=m.getContext("2d");return k.font="bold "+9*o+"px Helvetica,Arial,sans-serif",k.textBaseline="top",k.fillStyle=e,k.fillRect(0,0,p,l),k.fillStyle=a,k.fillText(t,c,i),k.fillRect(v,u,d,_),k.fillStyle=e,k.globalAlpha=.9,k.fillRect(v,u,d,_),{dom:m,update:function(l,b){n=Math.min(n,l),s=Math.max(s,l),k.fillStyle=e,k.globalAlpha=1,k.fillRect(0,0,p,u),k.fillStyle=a,k.fillText(r(l)+" "+t+" ("+r(n)+"-"+r(s)+")",c,i),k.drawImage(m,v+o,u,d-o,_,v,u,d-o,_),k.fillRect(v+d-o,u,o,_),k.fillStyle=e,k.globalAlpha=.9,k.fillRect(v+d-o,u,o,r((1-l/b)*_))}}},a.a=n},414:function(t,a,e){"use strict";e.d(a,"f",(function(){return o})),e.d(a,"e",(function(){return p})),e.d(a,"c",(function(){return l})),e.d(a,"g",(function(){return c})),e.d(a,"d",(function(){return i})),e.d(a,"b",(function(){return v})),e.d(a,"h",(function(){return u})),e.d(a,"a",(function(){return d}));e(19),e(111);var n=e(410),s=e(408),r=e(416);function o(t,a){var e=void 0!==t&&t&&!isNaN(t)?parseInt(t):0,s=new n.a;return s.showPanel(e),a.appendChild(s.dom),s}function p(t,a){var e=void 0!==a&&a?a:{},n=new s.ec(e);return n.shadowMap.enabled=!0,n.shadowMapSoft=!0,n.shadowMap.type=s.pb,n.setClearColor(new s.q(0)),n.setSize(t.clientWidth,t.clientHeight),n.shadowMap.enabled=!0,t.appendChild(n.domElement),n}function l(t,a){var e=void 0!==a?a:new s.Zb(-30,40,30),n=new s.qb(45,t.clientWidth/t.clientHeight,.1,1e3);return n.position.set(e.x,e.y,e.z),n.lookAt(new s.Zb(0,0,0)),n}function c(t,a){var e=new r.a(t,a.domElement);return e.rotateSpeed=1,e.zoomSpeed=1.2,e.panSpeed=.8,e.noZoom=!1,e.noPan=!1,e.staticMoving=!0,e.dynamicDampingFactor=.3,e.keys=[65,83,68],e}function i(t,a){var e=void 0!==a?a:new s.Zb(-10,30,40),n=new s.Nb(16777215);n.position.copy(e),n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.fov=15,n.castShadow=!0,n.decay=2,n.penumbra=.05,n.name="spotLight",t.add(n);var r=new s.c(3421236);r.name="ambientLight",t.add(r)}function v(t){var a=new s.sb(60,20,120,120),e=new s.fb({color:16777215}),n=new s.cb(a,e);return n.receiveShadow=!0,n.rotation.x=-.5*Math.PI,n.position.x=15,n.position.y=0,n.position.z=0,t.add(n),n}function u(t,a){var e=t.children;e&&e.length>0?e.forEach((function(t){u(t,a)})):t instanceof s.cb&&(t.material instanceof Array?t.material.forEach((function(t){t.color=new s.q(a(Math.random()).hex()),0===t.name.indexOf("building")&&(t.emissive=new s.q(4473924),t.transparent=!0,t.opacity=.8)})):(t.material.color=new s.q(a(Math.random()).hex()),0==t.material.name.indexOf("building")&&(t.material.emissive=new s.q(4473924),t.material.transparent=!0,t.material.opacity=.8)))}function d(t){var a=new s.Rb,e=new s.fb({map:a.load("/daodao-knowledge/textures/earth/Earth.png"),normalMap:a.load("/daodao-knowledge/textures/earth/EarthNormal.png"),specularMap:a.load("/daodao-knowledge/textures/earth/EarthSpec.png"),specular:new s.q(4474026),normalScale:new s.Yb(6,6),shininess:.5}),n=new s.cb(new s.Lb(15,40,40),e);t.add(n);var r=new s.nb;return i(r),t.add(r),{earth:n,pivot:r}}},480:function(t,a,e){},516:function(t,a,e){"use strict";e(480)},548:function(t,a,e){"use strict";e.r(a);var n=e(408),s=(e(413),e(451)),r=(e(416),e(453)),o=e(414),p={data:()=>({}),mounted(){this.init()},beforeDestroy(){},methods:{init(){var t=document.getElementById("three1"),a=Object(o.f)(0,t),e=Object(o.e)(t),p=Object(o.c)(t),l=new n.Fb,c=new n.p;Object(o.d)(l);var i=Object(o.g)(p,e);i.rotateSpeed=1,i.zoomSpeed=1,i.panSpeed=1,(new s.a).load("/daodao-knowledge/models/city.obj",(function(t){var a=r.a.scale(["red","green","blue"]);Object(o.h)(t,a);var e=t;l.add(e)})),function t(){a.update(),i.update(c.getDelta()),requestAnimationFrame(t),e.render(l,p)}()}}},l=(e(516),e(41)),c=Object(l.a)(p,(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("使用"),a("code",[t._v("TrackballControls")]),t._v("之前，你首先要在网页中包含正确的"),a("code",[t._v("JavaScript")]),t._v("文件：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../libs/TrackballControls.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("包含了这个文件之后，我们就可以创建控件，并将它绑定到相机上:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" trackballControls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TracballControls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntrackballControls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotateSpeed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\ntrackballControls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zoomSpeed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\ntrackballControls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("panSpeed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("更新相机的位置可以在"),a("code",[t._v("render")]),t._v("循环中完成:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clock "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Clock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" delta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" clock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDelta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    trackballControls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    webGLRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("在前面这段代码里，我们会看到一个新的"),a("code",[t._v("Three.js")]),t._v("对象："),a("code",[t._v("THREE.Clock")]),t._v("。"),a("code",[t._v("THREE.Clock")]),t._v("可以用来精确地计算出上次调用后经过的时间，或者渲染循环耗费的时间。你只要调用"),a("code",[t._v("clock.getDelta()")]),t._v("函数即可。这个函数会返回此次调用和上次调用之间经过的时间。要更新相机的位置，我们可以调用"),a("code",[t._v("trackballControls.update()")]),t._v("函数。在这个函数里我们需要提供自上次"),a("code",[t._v("update()")]),t._v("函数调用以来经过的时间。为此我们要使用"),a("code",[t._v("THREE.Clock")]),t._v("对象的"),a("code",[t._v("getDelta()")]),t._v("函数。你获取会奇怪为什么部门不直接把帧频（1/60）传给"),a("code",[t._v("update")]),t._v("函数。原因是当我们请求动画帧时，我们期待的帧频是60fps，但这并不能得到保证。受外部因素影响，帧频可能会有不同。为了保证相机能够平缓地移动和旋转，我们需要传入精确的时间差。")]),t._v(" "),a("p",[t._v("你可以用下面的方式来操控相机：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("操控")]),t._v(" "),a("th",[t._v("动作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("按住左键，拖动")]),t._v(" "),a("td",[t._v("在场景中旋转、翻滚相机")])]),t._v(" "),a("tr",[a("td",[t._v("转动滚轮")]),t._v(" "),a("td",[t._v("放大和缩小")])]),t._v(" "),a("tr",[a("td",[t._v("按住中间，拖动")]),t._v(" "),a("td",[t._v("放大和缩小")])]),t._v(" "),a("tr",[a("td",[t._v("按住右键，拖动")]),t._v(" "),a("td",[t._v("在场景中平移")])])])]),t._v(" "),[a("div",{attrs:{id:"three1"}})]],2)}),[],!1,null,"ad63c182",null);a.default=c.exports}}]);