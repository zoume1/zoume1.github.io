(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{410:function(t,e,n){"use strict";n(411);var a=function(){var t=0,e=document.createElement("div");function n(t){return e.appendChild(t.dom),t}function s(n){for(var a=0;a<e.children.length;a++)e.children[a].style.display=a===n?"block":"none";t=n}e.style.cssText="position:absolute;top:0;left:0;cursor:pointer;opacity:0.9;z-index:19",e.addEventListener("click",(function(n){n.preventDefault(),s(++t%e.children.length)}),!1);var o=(performance||Date).now(),r=o,c=0,p=n(new a.Panel("FPS","#0ff","#002")),i=n(new a.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=n(new a.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:e,addPanel:n,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){c++;var t=(performance||Date).now();if(i.update(t-o,200),t>=r+1e3&&(p.update(1e3*c/(t-r),100),r=t,c=0,l)){var e=performance.memory;l.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){o=this.end()},domElement:e,setMode:s}};a.Panel=function(t,e,n){var a=1/0,s=0,o=Math.round,r=o(window.devicePixelRatio||1),c=80*r,p=48*r,i=3*r,l=2*r,u=3*r,v=15*r,d=74*r,_=30*r,m=document.createElement("canvas");m.width=c,m.height=p,m.style.cssText="width:80px;height:48px";var b=m.getContext("2d");return b.font="bold "+9*r+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=n,b.fillRect(0,0,c,p),b.fillStyle=e,b.fillText(t,i,l),b.fillRect(u,v,d,_),b.fillStyle=n,b.globalAlpha=.9,b.fillRect(u,v,d,_),{dom:m,update:function(p,h){a=Math.min(a,p),s=Math.max(s,p),b.fillStyle=n,b.globalAlpha=1,b.fillRect(0,0,c,v),b.fillStyle=e,b.fillText(o(p)+" "+t+" ("+o(a)+"-"+o(s)+")",i,l),b.drawImage(m,u+r,v,d-r,_,u,v,d-r,_),b.fillRect(u+d-r,v,r,_),b.fillStyle=n,b.globalAlpha=.9,b.fillRect(u+d-r,v,r,o((1-p/h)*_))}}},e.a=a},411:function(t,e,n){"use strict";var a=n(12),s=n(2),o=n(187),r=n(5),c=TypeError,p=Object.defineProperty,i=s.self!==s;try{if(r){var l=Object.getOwnPropertyDescriptor(s,"self");!i&&l&&l.get&&l.enumerable||o(s,"self",{get:function(){return s},set:function(t){if(this!==s)throw new c("Illegal invocation");p(s,"self",{value:t,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else a({global:!0,simple:!0,forced:i},{self:s})}catch(t){}},414:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return p})),n.d(e,"g",(function(){return i})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"h",(function(){return v})),n.d(e,"a",(function(){return d}));n(19),n(111);var a=n(410),s=n(408),o=n(416);function r(t,e){var n=void 0!==t&&t&&!isNaN(t)?parseInt(t):0,s=new a.a;return s.showPanel(n),e.appendChild(s.dom),s}function c(t,e){var n=void 0!==e&&e?e:{},a=new s.ec(n);return a.shadowMap.enabled=!0,a.shadowMapSoft=!0,a.shadowMap.type=s.pb,a.setClearColor(new s.q(0)),a.setSize(t.clientWidth,t.clientHeight),a.shadowMap.enabled=!0,t.appendChild(a.domElement),a}function p(t,e){var n=void 0!==e?e:new s.Zb(-30,40,30),a=new s.qb(45,t.clientWidth/t.clientHeight,.1,1e3);return a.position.set(n.x,n.y,n.z),a.lookAt(new s.Zb(0,0,0)),a}function i(t,e){var n=new o.a(t,e.domElement);return n.rotateSpeed=1,n.zoomSpeed=1.2,n.panSpeed=.8,n.noZoom=!1,n.noPan=!1,n.staticMoving=!0,n.dynamicDampingFactor=.3,n.keys=[65,83,68],n}function l(t,e){var n=void 0!==e?e:new s.Zb(-10,30,40),a=new s.Nb(16777215);a.position.copy(n),a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.fov=15,a.castShadow=!0,a.decay=2,a.penumbra=.05,a.name="spotLight",t.add(a);var o=new s.c(3421236);o.name="ambientLight",t.add(o)}function u(t){var e=new s.sb(60,20,120,120),n=new s.fb({color:16777215}),a=new s.cb(e,n);return a.receiveShadow=!0,a.rotation.x=-.5*Math.PI,a.position.x=15,a.position.y=0,a.position.z=0,t.add(a),a}function v(t,e){var n=t.children;n&&n.length>0?n.forEach((function(t){v(t,e)})):t instanceof s.cb&&(t.material instanceof Array?t.material.forEach((function(t){t.color=new s.q(e(Math.random()).hex()),0===t.name.indexOf("building")&&(t.emissive=new s.q(4473924),t.transparent=!0,t.opacity=.8)})):(t.material.color=new s.q(e(Math.random()).hex()),0==t.material.name.indexOf("building")&&(t.material.emissive=new s.q(4473924),t.material.transparent=!0,t.material.opacity=.8)))}function d(t){var e=new s.Rb,n=new s.fb({map:e.load("/daodao-knowledge/textures/earth/Earth.png"),normalMap:e.load("/daodao-knowledge/textures/earth/EarthNormal.png"),specularMap:e.load("/daodao-knowledge/textures/earth/EarthSpec.png"),specular:new s.q(4474026),normalScale:new s.Yb(6,6),shininess:.5}),a=new s.cb(new s.Lb(15,40,40),n);t.add(a);var o=new s.nb;return l(o),t.add(o),{earth:a,pivot:o}}},416:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(408);const s={type:"change"},o={type:"start"},r={type:"end"};class c extends a.y{constructor(t,e){super(),void 0===e&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');const n=this,c=-1,p=0,i=1,l=2,u=3,v=4;this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:a.Y.ROTATE,MIDDLE:a.Y.DOLLY,RIGHT:a.Y.PAN},this.target=new a.Zb;const d=new a.Zb;let _=1,m=c,b=c,h=0,k=0,f=0;const g=new a.Zb,w=new a.Yb,y=new a.Yb,E=new a.Zb,j=new a.Yb,C=new a.Yb,S=new a.Yb,x=new a.Yb,M=[],L={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const t=n.domElement.getBoundingClientRect(),e=n.domElement.ownerDocument.documentElement;n.screen.left=t.left+window.pageXOffset-e.clientLeft,n.screen.top=t.top+window.pageYOffset-e.clientTop,n.screen.width=t.width,n.screen.height=t.height};const Y=function(){const t=new a.Yb;return function(e,a){return t.set((e-n.screen.left)/n.screen.width,(a-n.screen.top)/n.screen.height),t}}(),z=function(){const t=new a.Yb;return function(e,a){return t.set((e-.5*n.screen.width-n.screen.left)/(.5*n.screen.width),(n.screen.height+2*(n.screen.top-a))/n.screen.width),t}}();function D(t){!1!==n.enabled&&(0===M.length&&(n.domElement.setPointerCapture(t.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",P)),function(t){M.push(t)}(t),"touch"===t.pointerType?function(t){switch(X(t),M.length){case 1:m=u,y.copy(z(M[0].pageX,M[0].pageY)),w.copy(y);break;default:m=v;const t=M[0].pageX-M[1].pageX,e=M[0].pageY-M[1].pageY;k=h=Math.sqrt(t*t+e*e);const n=(M[0].pageX+M[1].pageX)/2,a=(M[0].pageY+M[1].pageY)/2;S.copy(Y(n,a)),x.copy(S)}n.dispatchEvent(o)}(t):function(t){if(m===c)switch(t.button){case n.mouseButtons.LEFT:m=p;break;case n.mouseButtons.MIDDLE:m=i;break;case n.mouseButtons.RIGHT:m=l;break;default:m=c}const e=b!==c?b:m;e!==p||n.noRotate?e!==i||n.noZoom?e!==l||n.noPan||(S.copy(Y(t.pageX,t.pageY)),x.copy(S)):(j.copy(Y(t.pageX,t.pageY)),C.copy(j)):(y.copy(z(t.pageX,t.pageY)),w.copy(y));n.dispatchEvent(o)}(t))}function T(t){!1!==n.enabled&&("touch"===t.pointerType?function(t){switch(X(t),M.length){case 1:w.copy(y),y.copy(z(t.pageX,t.pageY));break;default:const e=function(t){const e=t.pointerId===M[0].pointerId?M[1]:M[0];return L[e.pointerId]}(t),n=t.pageX-e.x,a=t.pageY-e.y;k=Math.sqrt(n*n+a*a);const s=(t.pageX+e.x)/2,o=(t.pageY+e.y)/2;x.copy(Y(s,o))}}(t):function(t){const e=b!==c?b:m;e!==p||n.noRotate?e!==i||n.noZoom?e!==l||n.noPan||x.copy(Y(t.pageX,t.pageY)):C.copy(Y(t.pageX,t.pageY)):(w.copy(y),y.copy(z(t.pageX,t.pageY)))}(t))}function P(t){!1!==n.enabled&&("touch"===t.pointerType?function(t){switch(M.length){case 0:m=c;break;case 1:m=u,y.copy(z(t.pageX,t.pageY)),w.copy(y);break;case 2:m=v,y.copy(z(t.pageX-w.pageX,t.pageY-w.pageY)),w.copy(y)}n.dispatchEvent(r)}(t):(m=c,n.dispatchEvent(r)),O(t),0===M.length&&(n.domElement.releasePointerCapture(t.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",P)))}function A(t){O(t)}function R(t){!1!==n.enabled&&(window.removeEventListener("keydown",R),b===c&&(t.code!==n.keys[p]||n.noRotate?t.code!==n.keys[i]||n.noZoom?t.code!==n.keys[l]||n.noPan||(b=l):b=i:b=p))}function Z(){!1!==n.enabled&&(b=c,window.addEventListener("keydown",R))}function q(t){if(!1!==n.enabled&&!0!==n.noZoom){switch(t.preventDefault(),t.deltaMode){case 2:j.y-=.025*t.deltaY;break;case 1:j.y-=.01*t.deltaY;break;default:j.y-=25e-5*t.deltaY}n.dispatchEvent(o),n.dispatchEvent(r)}}function I(t){!1!==n.enabled&&t.preventDefault()}function O(t){delete L[t.pointerId];for(let e=0;e<M.length;e++)if(M[e].pointerId==t.pointerId)return void M.splice(e,1)}function X(t){let e=L[t.pointerId];void 0===e&&(e=new a.Yb,L[t.pointerId]=e),e.set(t.pageX,t.pageY)}this.rotateCamera=function(){const t=new a.Zb,e=new a.xb,s=new a.Zb,o=new a.Zb,r=new a.Zb,c=new a.Zb;return function(){c.set(y.x-w.x,y.y-w.y,0);let a=c.length();a?(g.copy(n.object.position).sub(n.target),s.copy(g).normalize(),o.copy(n.object.up).normalize(),r.crossVectors(o,s).normalize(),o.setLength(y.y-w.y),r.setLength(y.x-w.x),c.copy(o.add(r)),t.crossVectors(c,g).normalize(),a*=n.rotateSpeed,e.setFromAxisAngle(t,a),g.applyQuaternion(e),n.object.up.applyQuaternion(e),E.copy(t),f=a):!n.staticMoving&&f&&(f*=Math.sqrt(1-n.dynamicDampingFactor),g.copy(n.object.position).sub(n.target),e.setFromAxisAngle(E,f),g.applyQuaternion(e),n.object.up.applyQuaternion(e)),w.copy(y)}}(),this.zoomCamera=function(){let t;m===v?(t=h/k,h=k,n.object.isPerspectiveCamera?g.multiplyScalar(t):n.object.isOrthographicCamera?(n.object.zoom*=t,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(C.y-j.y)*n.zoomSpeed,1!==t&&t>0&&(n.object.isPerspectiveCamera?g.multiplyScalar(t):n.object.isOrthographicCamera?(n.object.zoom/=t,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?j.copy(C):j.y+=(C.y-j.y)*this.dynamicDampingFactor)},this.panCamera=function(){const t=new a.Yb,e=new a.Zb,s=new a.Zb;return function(){if(t.copy(x).sub(S),t.lengthSq()){if(n.object.isOrthographicCamera){const e=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,a=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;t.x*=e,t.y*=a}t.multiplyScalar(g.length()*n.panSpeed),s.copy(g).cross(n.object.up).setLength(t.x),s.add(e.copy(n.object.up).setLength(t.y)),n.object.position.add(s),n.target.add(s),n.staticMoving?S.copy(x):S.add(t.subVectors(x,S).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){n.noZoom&&n.noPan||(g.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,g.setLength(n.maxDistance)),j.copy(C)),g.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,g.setLength(n.minDistance)),j.copy(C)))},this.update=function(){g.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,g),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),d.distanceToSquared(n.object.position)>1e-6&&(n.dispatchEvent(s),d.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(d.distanceToSquared(n.object.position)>1e-6||_!==n.object.zoom)&&(n.dispatchEvent(s),d.copy(n.object.position),_=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){m=c,b=c,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),g.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(s),d.copy(n.object.position),_=n.object.zoom},this.dispose=function(){n.domElement.removeEventListener("contextmenu",I),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",q),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",P),window.removeEventListener("keydown",R),window.removeEventListener("keyup",Z)},this.domElement.addEventListener("contextmenu",I),this.domElement.addEventListener("pointerdown",D),this.domElement.addEventListener("pointercancel",A),this.domElement.addEventListener("wheel",q,{passive:!1}),window.addEventListener("keydown",R),window.addEventListener("keyup",Z),this.handleResize(),this.update()}}},476:function(t,e,n){},512:function(t,e,n){"use strict";n(476)},545:function(t,e,n){"use strict";n.r(e);var a=n(408),s=n(413),o=n(414),r={data:()=>({gui:null}),mounted(){this.init()},beforeDestroy(){this.gui&&this.gui.destroy()},methods:{init(){var t=document.getElementById("three1"),e=Object(o.f)(0,t),n=Object(o.e)(t),r=Object(o.c)(t),c=new a.Fb,p=Object(o.g)(r,n),i=new a.p;Object(o.d)(c),Object(o.b)(c).position.y=0;var l=new a.i(4,4,4),u=new a.hb({color:16711680}),v=new a.cb(l,u);v.castShadow=!0,v.position.x=-10,v.position.y=4,v.position.z=0,c.add(v);var d=new a.Lb(4,20,20),_=new a.hb({color:7829503}),m=new a.cb(d,_);m.position.x=20,m.position.y=0,m.position.z=2,m.castShadow=!0,c.add(m);var b=new a.s(2,2,20),h=new a.hb({color:7864183}),k=new a.cb(b,h);k.castShadow=!0,k.position.set(0,0,1),c.add(k),r.position.x=-30,r.position.y=40,r.position.z=30,r.lookAt(c.position);var f=new a.c(3487029);c.add(f);var g=0,w=new function(){this.rotationSpeed=.02,this.bouncingSpeed=.03,this.scalingSpeed=.03},y=new s.GUI({},t);console.log(y,"gui"),y.add(w,"rotationSpeed",0,.5),y.add(w,"bouncingSpeed",0,.5),y.add(w,"scalingSpeed",0,.5),this.gui=y,function t(){e.update(),p.update(i.getDelta()),v.rotation.x+=w.rotationSpeed,v.rotation.y+=w.rotationSpeed,v.rotation.z+=w.rotationSpeed,g+=w.bouncingSpeed,m.position.x=20+10*Math.cos(g),m.position.y=2+10*Math.abs(Math.sin(g)),E+=w.scalingSpeed;var a=Math.abs(Math.sin(E/4)),s=Math.abs(Math.cos(E/5)),o=Math.abs(Math.sin(E/7));k.scale.set(a,s,o),requestAnimationFrame(t),n.render(c,r)}();g=0;var E=0}}},c=(n(512),n(41)),p=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[e("strong",[t._v("基础动画")]),t._v("：\n"),e("code",[t._v("Threejs")]),t._v("里所有动画的基础，修改对象的三个属性：位置、旋转和缩放。")]),t._v(" "),e("li",[e("strong",[t._v("移动相机")]),t._v("：\n动画中一个很重要的部分是在场景中移动相机的能力。")]),t._v(" "),e("li",[e("strong",[t._v("变形和蒙皮")]),t._v("：\n制作复杂模型的动画主要有两种方式。使用变形技术，定义几何体之间的过渡；以及使用骨骼和蒙皮技术处理这种过渡。")]),t._v(" "),e("li",[e("strong",[t._v("加载外部动画")])])]),t._v(" "),e("h2",{attrs:{id:"基础动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础动画"}},[t._v("#")]),t._v(" 基础动画")]),t._v(" "),e("p",[t._v("在看例子之前，我们先快速回顾一下"),e("code",[t._v("render")]),t._v("（渲染）循环。为了支持动画，我们需要告诉"),e("code",[t._v("Three.js")]),t._v("多久渲染一次场景。为此，我们要使用由"),e("code",[t._v("HTML5")]),t._v("提供的标准的"),e("code",[t._v("requestAnimationFrame")]),t._v("函数：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//render the scene")]),t._v("\n  render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//schedule the next rendering using requestAnimationFrame")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[t._v("这段代码里，我们只需要在初始化场景时调用一次"),e("code",[t._v("render()")]),t._v("函数。在"),e("code",[t._v("render()")]),t._v("函数中，我们用"),e("code",[t._v("requestAnimationFrame")]),t._v("来安排下一次渲染。这样，浏览器就可以保证以正确的时间间隔（通常是60次每秒）调用"),e("code",[t._v("render()")]),t._v("函数。通过"),e("code",[t._v("requestAnimationFrame")]),t._v("，我们不必告诉浏览器什么时候需要刷新屏幕，而是请求浏览器在最适合的时候执行我们提供的函数。通常情况下其结果是60fps（帧频）。使用"),e("code",[t._v("requestAnimationFrame")]),t._v("会让你的动画运行得更加平缓，而且对CPU和GPU更加友好，你再也不必再担心渲染时机的问题。")]),t._v(" "),e("h3",{attrs:{id:"简单动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单动画"}},[t._v("#")]),t._v(" 简单动画")]),t._v(" "),e("p",[t._v("我们通过改变对象的旋转、缩放、位置、材质、顶点、面，以及其他你想得到的东西，可以很容易地制作出动画。在下一次的"),e("code",[t._v("render")]),t._v("循环中，Threejs就可以渲染这些修改后的属性。")]),t._v(" "),[e("div",{attrs:{id:"three1"}})],t._v(" "),e("p",[t._v("该示例的"),e("code",[t._v("render")]),t._v("循环非常简单。你只要修改网格的属性即可，Threejs会处理剩下的事情：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  stats"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  trackballControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDelta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  cube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotationSpeed\n  cube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotationSpeed\n  cube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotationSpeed\n\n  step "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bouncingSpeed\n  sphere"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  sphere"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  scalingStep "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scalingSpeed\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scaleX "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scalingStep "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scaleY "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scalingStep "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scaleZ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scalingStep "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  cylinder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scaleX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("scaleY"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("scaleZ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderScene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("本博客的dat.gui.js 和 stats.js都是改造过的\nstats.js 加上了domEl参数，让stats可以添加到某个确定的dom中去\ndat.gui.js改动稍微多一点，\n首先第2338行的 GUI 方法，加上了domEl参数，同上\n然后第2611行的appendChild使用了domEl,将gui面板添加到domEl中去\n然后在gui被销毁掉之后将 autoPlaceVirgin 这个全局变量置为 true,修复下一次点进页面不能添加gui的问题")])]),t._v(" "),e("h1",{attrs:{id:"_111"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_111"}},[t._v("#")]),t._v(" 111")])],2)}),[],!1,null,"45ae3cc2",null);e.default=p.exports}}]);