(function (){ var f="",g=" ",l='"',n="#",aa="%",p="%$1",ba="%2525",q="%s",r="&",t="(\\d*)(\\D*)",ca="*",da=",",ea="-$1",fa="-src",u=".",v="/",ga="//",w=":",ha=": ",ia="=",ja="?",ka="@",la="Assertion failed",ma="Expected number but got %s: %s.",na="Node cannot be null or undefined.",oa="[",pa="[object Array]",qa="[object Function]",ra="[object Window]",sa="\\u",ta="]",z="array",ua="backgroundColor",va="blogger-comment-from-post",wa="blogger-iframe-colorize",xa="blogspotRpcToken",ya="boolean",za="call",Aa="color",
Ba="comment-editor",Ca="data-",Da="file",Ea="fontFamily",A="function",Fa="g",Ga="https://www.blogger.com/unvisited-link-",Ha="iframe",Ia="inherit",Ja="message",B="null",C="number",D="object",Ka="onmessage",La="rgb(0, 0, 0)",Ma="rgba(0, 0, 0, 0)",Na="serif",Oa="set-comment-editor-height",Pa="splice",Qa="string",Ra="transparent",Sa="{",Ta="}",E,F=this,Ua=function(a){var b=typeof a;if(b==D)if(a){if(a instanceof Array)return z;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c==
ra)return D;if(c==pa||typeof a.length==C&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(Pa))return z;if(c==qa||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(za))return A}else return B;else if(b==A&&"undefined"==typeof a.call)return D;return b},G=function(a){return typeof a==Qa},Va=function(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.aa=function(a,c,h){for(var k=
Array(arguments.length-2),m=2;m<arguments.length;m++)k[m-2]=arguments[m];return b.prototype[c].apply(a,k)}};var H=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,H);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};Va(H,Error);var Wa=function(a,b){for(var c=a.split(q),d=f,e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join(q)},Xa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,f)},I=function(a,b){return a<b?-1:a>b?1:0};var Ya=function(a,b){b.unshift(a);H.call(this,Wa.apply(null,b));b.shift()};Va(Ya,H);var Za=function(a,b,c,d){var e=la;if(c)var e=e+(ha+c),h=d;else a&&(e+=ha+a,h=b);throw new Ya(f+e,h||[]);},$a=function(a,b,c){a||Za(f,null,b,Array.prototype.slice.call(arguments,2));return a},J=function(a,b,c){typeof a==C||Za(ma,[Ua(a),a],b,Array.prototype.slice.call(arguments,2));return a};var ab=Array.prototype.indexOf?function(a,b,c){$a(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(G(a))return G(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},bb=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},cb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var K;a:{var db=F.navigator;if(db){var eb=db.userAgent;if(eb){K=eb;break a}}K=f};var fb=-1!=K.indexOf("Opera")||-1!=K.indexOf("OPR"),L=-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"),gb=-1!=K.indexOf("Edge"),M=-1!=K.indexOf("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"))&&!(-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"))&&-1==K.indexOf("Edge"),hb=-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"),ib=function(){var a=K;if(M)return/rv\:([^\);]+)(\)|;)/.exec(a);if(gb)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(hb)return/WebKit\/(\S+)/.exec(a)},jb=function(){var a=F.document;return a?a.documentMode:void 0},kb=function(){if(fb&&F.opera){var a;var b=F.opera.version;try{a=b()}catch(c){a=b}return a}a=f;(b=ib())&&(a=b?b[1]:f);return L&&(b=jb(),null!=b&&b>parseFloat(a))?String(b):a}(),lb={},mb=function(a){var b;if(!(b=lb[a])){b=0;for(var c=Xa(String(kb)).split(u),d=Xa(String(a)).split(u),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var k=c[h]||f,m=d[h]||f,R=RegExp(t,Fa),xb=RegExp(t,Fa);do{var x=R.exec(k)||
[f,f,f],y=xb.exec(m)||[f,f,f];if(0==x[0].length&&0==y[0].length)break;b=I(0==x[1].length?0:parseInt(x[1],10),0==y[1].length?0:parseInt(y[1],10))||I(0==x[2].length,0==y[2].length)||I(x[2],y[2])}while(0==b)}b=lb[a]=0<=b}return b},nb=F.document,ob=nb&&L?jb()||("CSS1Compat"==nb.compatMode?parseInt(kb,10):5):void 0;!M&&!L||L&&9<=Number(ob)||M&&mb("1.9.1");L&&mb("9");var pb=function(a,b){return G(b)?a.getElementById(b):b},qb=function(a,b,c,d){a=d||a;var e=b&&b!=ca?b.toUpperCase():f;if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?u+c:f));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var h=d=0,k;k=b[h];h++)e==k.nodeName&&(a[d++]=k);a.length=d;return a}return b}b=a.getElementsByTagName(e||ca);if(c){a={};for(h=d=0;k=b[h];h++){var e=k.className,m;if(m=typeof e.split==A)m=0<=ab(e.split(/\s+/),c);m&&(a[d++]=
k)}a.length=d;return a}return b},rb=function(a){$a(a,na);return 9==a.nodeType?a:a.ownerDocument||a.document};var N=function(a){this.D=a};N.prototype.serialize=function(a){var b=[];this.H(a,b);return b.join(f)};N.prototype.H=function(a,b){if(null==a)b.push(B);else{if(typeof a==D){if(Ua(a)==z){this.serializeArray(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.Y(a,b);return}}switch(typeof a){case Qa:this.L(a,b);break;case C:this.X(a,b);break;case ya:b.push(String(a));break;case A:b.push(B);break;default:throw Error("Unknown type: "+typeof a);}}};
var sb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},tb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;N.prototype.L=function(a,b){b.push(l,a.replace(tb,function(a){var b=sb[a];b||(b=sa+(a.charCodeAt(0)|65536).toString(16).substr(1),sb[a]=b);return b}),l)};N.prototype.X=function(a,b){b.push(isFinite(a)&&!isNaN(a)?String(a):B)};
N.prototype.serializeArray=function(a,b){var c=a.length;b.push(oa);for(var d=f,e=0;e<c;e++)b.push(d),d=a[e],this.H(this.D?this.D.call(a,String(e),d):d,b),d=da;b.push(ta)};N.prototype.Y=function(a,b){b.push(Sa);var c=f,d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=A&&(b.push(c),this.L(d,b),b.push(w),this.H(this.D?this.D.call(a,d,e):e,b),c=da)}b.push(Ta)};var ub="StopIteration"in F?F.StopIteration:{message:"StopIteration",stack:f},O=function(){};O.prototype.next=function(){throw ub;};O.prototype.T=function(){return this};var P=function(a,b){this.g={};this.c=[];this.F=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};E=P.prototype;E.o=function(){this.A();for(var a=[],b=0;b<this.c.length;b++)a.push(this.g[this.c[b]]);return a};E.v=function(){this.A();return this.c.concat()};E.u=function(a){return Q(this.g,a)};
E.remove=function(a){return Q(this.g,a)?(delete this.g[a],this.b--,this.F++,this.c.length>2*this.b&&this.A(),!0):!1};E.A=function(){if(this.b!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];Q(this.g,c)&&(this.c[b++]=c);a++}this.c.length=b}if(this.b!=this.c.length){for(var d={},b=a=0;a<this.c.length;)c=this.c[a],Q(d,c)||(this.c[b++]=c,d[c]=1),a++;this.c.length=b}};E.get=function(a,b){return Q(this.g,a)?this.g[a]:b};
E.set=function(a,b){Q(this.g,a)||(this.b++,this.c.push(a),this.F++);this.g[a]=b};E.addAll=function(a){var b;if(a instanceof P)b=a.v(),a=a.o();else{b=[];var c=0,d;for(d in a)b[c++]=d;c=[];d=0;for(var e in a)c[d++]=a[e];a=c}for(e=0;e<b.length;e++)this.set(b[e],a[e])};E.forEach=function(a,b){for(var c=this.v(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};E.clone=function(){return new P(this)};
E.T=function(a){this.A();var b=0,c=this.F,d=this,e=new O;e.next=function(){if(c!=d.F)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw ub;var e=d.c[b++];return a?e:d.g[e]};return e};var Q=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,wb=function(a,b){if(a)for(var c=a.split(r),d=0;d<c.length;d++){var e=c[d].indexOf(ia),h=null,k=null;0<=e?(h=c[d].substring(0,e),k=c[d].substring(e+1)):h=c[d];b(h,k?decodeURIComponent(k.replace(/\+/g,g)):f)}};var S=function(a,b){this.B=this.J=this.s=f;this.C=null;this.G=this.K=f;this.f=this.W=!1;var c;a instanceof S?(this.f=void 0!==b?b:a.f,this.R(a.s),this.S(a.J),this.M(a.B),this.O(a.C),this.setPath(a.getPath()),this.P(a.j.clone()),this.N(a.G)):a&&(c=String(a).match(vb))?(this.f=!!b,this.R(c[1]||f,!0),this.S(c[2]||f,!0),this.M(c[3]||f,!0),this.O(c[4]),this.setPath(c[5]||f,!0),this.P(c[6]||f,!0),this.N(c[7]||f,!0)):(this.f=!!b,this.j=new T(null,null,this.f))};E=S.prototype;
E.toString=function(){var a=[],b=this.s;b&&a.push(U(b,yb,!0),w);var c=this.B;if(c||b==Da)a.push(ga),(b=this.J)&&a.push(U(b,yb,!0),ka),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,p)),c=this.C,null!=c&&a.push(w,String(c));if(c=this.getPath())this.V()&&c.charAt(0)!=v&&a.push(v),a.push(U(c,c.charAt(0)==v?zb:Ab,!0));(c=this.U())&&a.push(ja,c);(c=this.G)&&a.push(n,U(c,Bb));return a.join(f)};E.clone=function(){return new S(this)};
E.R=function(a,b){this.i();if(this.s=b?V(a,!0):a)this.s=this.s.replace(/:$/,f);return this};E.S=function(a,b){this.i();this.J=b?V(a):a;return this};E.M=function(a,b){this.i();this.B=b?V(a,!0):a;return this};E.V=function(){return!!this.B};E.O=function(a){this.i();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.C=a}else this.C=null;return this};E.getPath=function(){return this.K};E.setPath=function(a,b){this.i();this.K=b?V(a,!0):a;return this};
E.P=function(a,b){this.i();a instanceof T?(this.j=a,this.j.I(this.f)):(b||(a=U(a,Cb)),this.j=new T(a,null,this.f));return this};E.U=function(){return this.j.toString()};E.Z=function(a,b){this.i();this.j.set(a,b);return this};E.N=function(a,b){this.i();this.G=b?V(a):a;return this};E.i=function(){if(this.W)throw Error("Tried to modify a read-only Uri");};E.I=function(a){this.f=a;this.j&&this.j.I(a);return this};
var V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,ba)):decodeURIComponent(a):f},U=function(a,b,c){return G(a)?(a=encodeURI(a).replace(b,Db),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,p)),a):null},Db=function(a){a=a.charCodeAt(0);return aa+(a>>4&15).toString(16)+(a&15).toString(16)},yb=/[#\/\?@]/g,Ab=/[\#\?:]/g,zb=/[\#\?]/g,Cb=/[\#\?@]/g,Bb=/#/g,T=function(a,b,c){this.b=this.a=null;this.h=a||null;this.f=!!c};E=T.prototype;
E.l=function(){if(!this.a&&(this.a=new P,this.b=0,this.h)){var a=this;wb(this.h,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g,g)),c)})}};E.add=function(a,b){this.l();this.w();a=this.m(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b=J(this.b)+1;return this};E.remove=function(a){this.l();a=this.m(a);return this.a.u(a)?(this.w(),this.b=J(this.b)-this.a.get(a).length,this.a.remove(a)):!1};E.u=function(a){this.l();a=this.m(a);return this.a.u(a)};
E.v=function(){this.l();for(var a=this.a.o(),b=this.a.v(),c=[],d=0;d<b.length;d++)for(var e=a[d],h=0;h<e.length;h++)c.push(b[d]);return c};E.o=function(a){this.l();var b=[];if(G(a))this.u(a)&&(b=bb(b,this.a.get(this.m(a))));else{a=this.a.o();for(var c=0;c<a.length;c++)b=bb(b,a[c])}return b};E.set=function(a,b){this.l();this.w();a=this.m(a);this.u(a)&&(this.b=J(this.b)-this.a.get(a).length);this.a.set(a,[b]);this.b=J(this.b)+1;return this};
E.get=function(a,b){var c=a?this.o(a):[];return 0<c.length?String(c[0]):b};E.setValues=function(a,b){this.remove(a);0<b.length&&(this.w(),this.a.set(this.m(a),cb(b)),this.b=J(this.b)+b.length)};E.toString=function(){if(this.h)return this.h;if(!this.a)return f;for(var a=[],b=this.a.v(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.o(d),h=0;h<d.length;h++){var k=e;d[h]!==f&&(k+=ia+encodeURIComponent(String(d[h])));a.push(k)}return this.h=a.join(r)};E.w=function(){this.h=null};
E.clone=function(){var a=new T;a.h=this.h;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};E.m=function(a){a=String(a);this.f&&(a=a.toLowerCase());return a};E.I=function(a){a&&!this.f&&(this.l(),this.w(),this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,a))},this));this.f=a};var Eb=function(a,b,c){var d;a:{d=rb(b);if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||f;break a}d=f}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||d==Ia||d==Ra||d==Ma?(d=rb(b),b!=d.body&&b.parentNode?W(a,b.parentNode):c):d},W=function(a,b){return Eb(a,b,La)},Fb=function(){for(var a=qb(document,Ha,wa,void 0),b=0;b<a.length;b++){var c=a[b],d=pb(document,c.id+fa),e=d.href,h=W(Aa,c),k=W(ua,
c),m=Eb(Ea,c,Na);d.href=Ga+(new Date).valueOf();var R=W(Aa,d),d=d.href=e,e=encodeURIComponent,h=(new N(void 0)).serialize({color:h,backgroundColor:k,unvisitedLinkColor:R,fontFamily:m}),e=d+(n+e(h));c.src=e}};var Gb=!L;var Hb=-1;var Ib=function(){Hb=Math.floor(1E7*Math.random());for(var a=qb(document,Ha,va,void 0),b=0;b<a.length;b++){var c=pb(document,a[b].id+fa),d=new S(c.href);d.Z(xa,Hb);c.href=d.toString()}Fb();a=function(a){if(0==a.data.indexOf(Oa)){var b=document.getElementById(Ba);b.height=a.data.substring(26);Gb&&b.dataset?b.dataset.resized=!0:b.setAttribute(Ca+"resized".replace(/([A-Z])/g,ea).toLowerCase(),!0)}};window.addEventListener?window.addEventListener(Ja,a,!1):window.attachEvent&&window.attachEvent(Ka,a)},
X=["BLOG_CMT_createIframe"],Y=F;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Ib?Y=Y[Z]?Y[Z]:Y[Z]={}:Y[Z]=Ib; })()
