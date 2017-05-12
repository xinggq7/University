(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
    if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");
    throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];
    return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;
    for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){var d=b("./className/add");
    c.exports=function f(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
        var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);return
        }for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":2,"@marcom/ac-polyfills/Array/prototype.slice":706,"@marcom/ac-polyfills/Element/prototype.classList":708}],2:[function(b,c,a){var d=b("./contains");
    c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":3}],3:[function(b,c,a){var f=b("./getTokenRegExp");
    c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":4}],4:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],5:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":3,"./getTokenRegExp":4}],6:[function(b,d,a){b("@marcom/ac-polyfills/Element/prototype.classList");
    var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
    }return f(h,g)}},{"./className/contains":3,"@marcom/ac-polyfills/Element/prototype.classList":708}],7:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
    d("@marcom/ac-polyfills/Element/prototype.classList");var b=d("./className/remove");
    f.exports=function a(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
        var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
            return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":5,"@marcom/ac-polyfills/Array/prototype.slice":706,"@marcom/ac-polyfills/Element/prototype.classList":708}],8:[function(b,c,a){c.exports={log:b("./ac-console/log")}
},{"./ac-console/log":9}],9:[function(d,f,b){var a="f7c9180f-5c45-47b4-8de4-428015f096c0";
    var c=!!(function(){try{return window.localStorage.getItem(a)}catch(h){}}());f.exports=function g(){if(window.console&&typeof console.log!=="undefined"&&c){console.log.apply(console,Array.prototype.slice.call(arguments,0))
    }}},{}],10:[function(c,d,b){var g=c("./utils/addEventListener");var a=c("./shared/getEventType");
    d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)}},{"./shared/getEventType":20,"./utils/addEventListener":24}],11:[function(d,f,c){var a=d("./utils/dispatchEvent");
    var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
    }},{"./shared/getEventType":20,"./utils/dispatchEvent":25}],12:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":10,"./dispatchEvent":11,"./preventDefault":18,"./removeEventListener":19,"./stop":21,"./stopPropagation":22,"./target":23}],13:[function(d,b,f){var g=d("./utils/eventTypeAvailable");
    var j=d("./shared/camelCasedEventTypes");var c=d("./shared/windowFallbackEventTypes");
    var h=d("./shared/prefixHelper");var a={};b.exports=function i(m,l){var n;var o;
        var k;l=l||"div";m=m.toLowerCase();if(!(l in a)){a[l]={}}o=a[l];if(m in o){return o[m]
        }if(g(m,l)){return o[m]=m}if(m in j){for(k=0;k<j[m].length;k++){n=j[m][k];if(g(n.toLowerCase(),l)){return o[m]=n
        }}}for(k=0;k<h.evt.length;k++){n=h.evt[k]+m;if(g(n,l)){h.reduce(k);return o[m]=n
        }}if(l!=="window"&&c.indexOf(m)){return o[m]=i(m,"window")}return o[m]=false}},{"./shared/camelCasedEventTypes":14,"./shared/prefixHelper":15,"./shared/windowFallbackEventTypes":16,"./utils/eventTypeAvailable":17}],14:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],15:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
    var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
    g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
        this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],16:[function(b,c,a){c.exports=["transitionend","animationstart","animationend","animationiteration",]
},{}],17:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
    i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
    }if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
    }return false}},{}],18:[function(c,d,a){d.exports=function b(f){f=f||window.event;
    if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],19:[function(d,f,c){var b=d("./utils/removeEventListener");
    var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
    }},{"./shared/getEventType":20,"./utils/removeEventListener":26}],20:[function(c,f,b){var d=c("@marcom/ac-prefixer/getEventType");
    f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
    }else{h="document"}}g=d(i,h);if(g){return g}return i}},{"@marcom/ac-prefixer/getEventType":13}],21:[function(d,g,b){var a=d("./stopPropagation");
    var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
        h.stopped=true;h.returnValue=false}},{"./preventDefault":18,"./stopPropagation":22}],22:[function(c,d,b){d.exports=function a(f){f=f||window.event;
    if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],23:[function(b,c,a){c.exports=function d(f){f=f||window.event;
    return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],24:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],25:[function(b,c,a){b("@marcom/ac-polyfills/CustomEvent");
    c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
    }else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
        if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"@marcom/ac-polyfills/CustomEvent":707}],26:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],27:[function(b,c,a){c.exports=8},{}],28:[function(b,c,a){c.exports=11
},{}],29:[function(b,c,a){c.exports=9},{}],30:[function(b,c,a){c.exports=1},{}],31:[function(b,c,a){c.exports=3
},{}],32:[function(b,c,a){var d=b("../isNode");c.exports=function f(h,g){if(!d(h)){return false
}if(typeof g==="number"){return(h.nodeType===g)}return(g.indexOf(h.nodeType)!==-1)
}},{"../isNode":36}],33:[function(g,d,j){var b=g("./isNodeType");var c=g("../COMMENT_NODE");
    var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");var h=g("../TEXT_NODE");
    var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
    var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
    var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
        if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
        if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
        if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
        if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":27,"../DOCUMENT_FRAGMENT_NODE":28,"../ELEMENT_NODE":30,"../TEXT_NODE":31,"./isNodeType":32}],34:[function(c,d,b){var g=c("./internal/isNodeType");
    var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":28,"./internal/isNodeType":32}],35:[function(c,d,b){var g=c("./internal/isNodeType");
    var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":30,"./internal/isNodeType":32}],36:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],37:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
    if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":33}],38:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],39:[function(g,c,i){g("@marcom/ac-polyfills/Array/prototype.indexOf");
    var o=g("@marcom/ac-dom-nodes/isNode");var b=g("@marcom/ac-dom-nodes/COMMENT_NODE");
    var k=g("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var j=g("@marcom/ac-dom-nodes/DOCUMENT_NODE");
    var h=g("@marcom/ac-dom-nodes/ELEMENT_NODE");var f=g("@marcom/ac-dom-nodes/TEXT_NODE");
    var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
    }return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
    var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
    c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
    }},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
    }},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
    }}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":27,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":28,"@marcom/ac-dom-nodes/DOCUMENT_NODE":29,"@marcom/ac-dom-nodes/ELEMENT_NODE":30,"@marcom/ac-dom-nodes/TEXT_NODE":31,"@marcom/ac-dom-nodes/isNode":36,"@marcom/ac-polyfills/Array/prototype.indexOf":705}],40:[function(d,f,c){var g=d("@marcom/ac-dom-nodes/isElement");
    var i=d("./internal/validate");var a=d("./internal/nativeMatches");var h=d("./shims/matchesSelector");
    f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
    }if(!a){return h(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":38,"./internal/validate":39,"./shims/matchesSelector":43,"@marcom/ac-dom-nodes/isElement":35}],41:[function(c,d,a){var h=c("./internal/validate");
    var b=c("./shims/querySelector");var g=("querySelector" in document);d.exports=function f(i,j){j=j||document;
        h.parentNode(j,true,"querySelector","context");h.selector(i,true,"querySelector");
        if(!g){return b(i,j)}return j.querySelector(i)}},{"./internal/validate":39,"./shims/querySelector":44}],42:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");
    var h=b("./internal/validate");var g=b("./shims/querySelectorAll");var f=("querySelectorAll" in document);
    c.exports=function d(i,j){j=j||document;h.parentNode(j,true,"querySelectorAll","context");
        h.selector(i,true,"querySelectorAll");if(!f){return g(i,j)}return Array.prototype.slice.call(j.querySelectorAll(i))
    }},{"./internal/validate":39,"./shims/querySelectorAll":45,"@marcom/ac-polyfills/Array/prototype.slice":706}],43:[function(c,d,b){var f=c("../querySelectorAll");
    d.exports=function a(l,g){var k=l.parentNode||document;var h=f(g,k);var j;for(j=0;
                                                                                  j<h.length;j++){if(h[j]===l){return true}}return false}},{"../querySelectorAll":42}],44:[function(b,c,a){var d=b("./querySelectorAll");
    c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":45}],45:[function(c,b,f){c("@marcom/ac-polyfills/Array/prototype.indexOf");
    var j=c("@marcom/ac-dom-nodes/isElement");var h=c("@marcom/ac-dom-nodes/isDocumentFragment");
    var k=c("@marcom/ac-dom-nodes/remove");var d="_ac_qsa_";var i=function(n,l){var m;
        if(l===document){return true}m=n;while((m=m.parentNode)&&j(m)){if(m===l){return true
        }}return false};var g=function(l){if("recalc" in l){l.recalc(false)}else{document.recalc(false)
    }window.scrollBy(0,0)};b.exports=function a(l,n){var p=document.createElement("style");
        var q=d+(Math.random()+"").slice(-6);var m=[];var o;n=n||document;document[q]=[];
        if(h(n)){n.appendChild(p)}else{document.documentElement.firstChild.appendChild(p)
        }p.styleSheet.cssText="*{display:recalc;}"+l+'{ac-qsa:expression(document["'+q+'"] && document["'+q+'"].push(this));}';
        g(n);while(document[q].length){o=document[q].shift();o.style.removeAttribute("ac-qsa");
            if(m.indexOf(o)===-1&&i(o,n)){m.push(o)}}document[q]=null;k(p);g(n);return m}},{"@marcom/ac-dom-nodes/isDocumentFragment":34,"@marcom/ac-dom-nodes/isElement":35,"@marcom/ac-dom-nodes/remove":37,"@marcom/ac-polyfills/Array/prototype.indexOf":705}],46:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":47}],47:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}var h=this._events[g].indexOf(i);
    if(h===-1){return}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return
}for(var h=this._events[g].length-1;h>=0;h--){if(j!==undefined){this._events[g][h](j)
}else{this._events[g][h]()}}};d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],48:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],49:[function(d,f,b){var a=d("./touchAvailable").original;var h=d("./helpers/globals");
    var g=d("@marcom/ac-function/once");function c(){var i=h.getWindow();return(!a()&&!i.orientation)
    }f.exports=g(c);f.exports.original=c},{"./helpers/globals":48,"./touchAvailable":53,"@marcom/ac-function/once":269}],50:[function(f,g,c){var d=f("./isDesktop").original;
    var a=f("./isTablet").original;var h=f("@marcom/ac-function/once");function b(){return(!d()&&!a())
    }g.exports=h(b);g.exports.original=b},{"./isDesktop":49,"./isTablet":52,"@marcom/ac-function/once":269}],51:[function(b,c,a){var d=b("./helpers/globals");
    c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
    }},{"./helpers/globals":48}],52:[function(f,g,c){var d=f("./isDesktop").original;
    var i=f("./helpers/globals");var h=f("@marcom/ac-function/once");var b=600;function a(){var k=i.getWindow();
        var j=k.screen.width;if(k.orientation&&k.screen.height<j){j=k.screen.height}return(!d()&&j>=b)
    }g.exports=h(a);g.exports.original=a},{"./helpers/globals":48,"./isDesktop":49,"@marcom/ac-function/once":269}],53:[function(c,d,b){var g=c("./helpers/globals");
    var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
        var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
    }d.exports=f(a);d.exports.original=a},{"./helpers/globals":48,"@marcom/ac-function/once":269}],54:[function(d,c,g){var m=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var j=d("@marcom/ac-dom-events/utils/addEventListener");var b=d("@marcom/ac-dom-events/utils/removeEventListener");
    var i=d("@marcom/ac-object/create");var f=d("./internal/KeyEvent");var k="keydown";
    var l="keyup";function a(n){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
        this._DOMKeyUp=this._DOMKeyUp.bind(this);this._context=n||document;j(this._context,k,this._DOMKeyDown,true);
        j(this._context,l,this._DOMKeyUp,true);m.call(this)}var h=a.prototype=i(m.prototype);
    h.onDown=function(n,o){return this.on(k+":"+n,o)};h.onceDown=function(n,o){return this.once(k+":"+n,o)
    };h.offDown=function(n,o){return this.off(k+":"+n,o)};h.onUp=function(n,o){return this.on(l+":"+n,o)
    };h.onceUp=function(n,o){return this.once(l+":"+n,o)};h.offUp=function(n,o){return this.off(l+":"+n,o)
    };h.isDown=function(n){n+="";return this._keysDown[n]||false};h.isUp=function(n){return !this.isDown(n)
    };h.destroy=function(){b(this._context,k,this._DOMKeyDown,true);b(this._context,l,this._DOMKeyUp,true);
        this._keysDown=null;this._context=null;m.prototype.destroy.call(this);return this
    };h._DOMKeyDown=function(o){var n=this._normalizeKeyboardEvent(o);var p=n.keyCode+="";
        this._trackKeyDown(p);this.trigger(k+":"+p,n)};h._DOMKeyUp=function(o){var n=this._normalizeKeyboardEvent(o);
        var p=n.keyCode+="";this._trackKeyUp(p);this.trigger(l+":"+p,n)};h._normalizeKeyboardEvent=function(n){return new f(n)
    };h._trackKeyUp=function(n){if(this._keysDown[n]){this._keysDown[n]=false}};h._trackKeyDown=function(n){if(!this._keysDown[n]){this._keysDown[n]=true
    }};c.exports=a},{"./internal/KeyEvent":56,"@marcom/ac-dom-events/utils/addEventListener":24,"@marcom/ac-dom-events/utils/removeEventListener":26,"@marcom/ac-event-emitter-micro":46,"@marcom/ac-object/create":88}],55:[function(c,d,b){var a=c("./Keyboard");
    d.exports=new a()},{"./Keyboard":54}],56:[function(c,d,b){var a=["keyLocation"];
    function f(g){this.originalEvent=g;var h;for(h in g){if(a.indexOf(h)===-1&&typeof g[h]!=="function"){this[h]=g[h]
    }}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
    }f.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
        return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
    }};d.exports=f},{}],57:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],58:[function(c,d,b){d.exports=function a(f){var g;f=f||window;if(f===window){g=window.pageXOffset;
    if(!g){f=document.documentElement||document.body.parentNode||document.body}else{return g
    }}return f.scrollLeft}},{}],59:[function(c,d,b){d.exports=function a(f){var g;f=f||window;
    if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
    }else{return g}}return f.scrollTop}},{}],60:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{dup:27}],61:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],62:[function(b,c,a){arguments[4][30][0].apply(a,arguments)
},{dup:30}],63:[function(b,c,a){arguments[4][31][0].apply(a,arguments)},{dup:31}],64:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{"../isNode":67,dup:32}],65:[function(b,c,a){arguments[4][33][0].apply(a,arguments)
},{"../COMMENT_NODE":60,"../DOCUMENT_FRAGMENT_NODE":61,"../ELEMENT_NODE":62,"../TEXT_NODE":63,"./isNodeType":64,dup:33}],66:[function(b,c,a){arguments[4][35][0].apply(a,arguments)
},{"./ELEMENT_NODE":62,"./internal/isNodeType":64,dup:35}],67:[function(b,c,a){arguments[4][36][0].apply(a,arguments)
},{dup:36}],68:[function(b,c,a){arguments[4][37][0].apply(a,arguments)},{"./internal/validate":65,dup:37}],69:[function(b,c,a){c.exports={Modal:b("./ac-modal-basic/Modal"),Renderer:b("./ac-modal-basic/Renderer"),classNames:b("./ac-modal-basic/classNames"),dataAttributes:b("./ac-modal-basic/dataAttributes")}
},{"./ac-modal-basic/Modal":70,"./ac-modal-basic/Renderer":71,"./ac-modal-basic/classNames":72,"./ac-modal-basic/dataAttributes":73}],70:[function(b,a,f){var k={addEventListener:b("@marcom/ac-dom-events/addEventListener"),removeEventListener:b("@marcom/ac-dom-events/removeEventListener"),target:b("@marcom/ac-dom-events/target")};
    var h={getScrollX:b("@marcom/ac-dom-metrics/getScrollX"),getScrollY:b("@marcom/ac-dom-metrics/getScrollY")};
    var c={create:b("@marcom/ac-object/create"),defaults:b("@marcom/ac-object/defaults")};
    var i=b("@marcom/ac-keyboard");var n=b("@marcom/ac-keyboard/keyMap");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var d=b("./Renderer");var m={retainScrollPosition:false};function j(o,p){l.call(this);
        this.options=c.defaults(m,o);this.renderer=new d(p);this.opened=false;this._keysToClose=[n.ESCAPE];
        this._attachedKeysToClose=[];this.close=this.close.bind(this)}var g=j.prototype=c.create(l.prototype);
    g.open=function(){if(this.options.retainScrollPosition){this._saveScrollPosition()
    }if(!this.opened){this._attachEvents();this.trigger("willopen");this.renderer.open();
        this.opened=true;this.trigger("open")}};g.close=function(o){var q;var p;if(this.opened){if(o&&o.type==="click"){q=k.target(o);
        p=this.renderer.options.dataAttributes.close;if(!q.hasAttribute(p)){return}}this.trigger("willclose");
        this._removeEvents();this.renderer.close();if(this.options.retainScrollPosition){this._restoreScrollPosition()
        }this.opened=false;this.trigger("close")}};g.render=function(){this.renderer.render()
    };g.appendContent=function(o,p){this.renderer.appendContent(o,p)};g.removeContent=function(o){this.renderer.removeContent(o)
    };g.destroy=function(){this._removeEvents();this.renderer.destroy();for(var o in this){if(this.hasOwnProperty(o)){this[o]=null
    }}};g.addKeyToClose=function(p){var o=this._keysToClose.indexOf(p);if(o===-1){this._keysToClose.push(p);
        this._bindKeyToClose(p)}};g.removeKeyToClose=function(p){var o=this._keysToClose.indexOf(p);
        if(o!==-1){this._keysToClose.splice(o,1)}this._releaseKeyToClose(p)};g._bindKeyToClose=function(p){var o=this._attachedKeysToClose.indexOf(p);
        if(o===-1){i.onUp(p,this.close);this._attachedKeysToClose.push(p)}};g._releaseKeyToClose=function(p){var o=this._attachedKeysToClose.indexOf(p);
        if(o!==-1){i.offUp(p,this.close);this._attachedKeysToClose.splice(o,1)}};g._removeEvents=function(){if(this.renderer.modalElement){k.removeEventListener(this.renderer.modalElement,"click",this.close)
    }this._keysToClose.forEach(this._releaseKeyToClose,this)};g._attachEvents=function(){if(this.renderer.modalElement){k.addEventListener(this.renderer.modalElement,"click",this.close)
    }this._keysToClose.forEach(this._bindKeyToClose,this)};g._restoreScrollPosition=function(){window.scrollTo(this._scrollX||0,this._scrollY||0)
    };g._saveScrollPosition=function(){this._scrollX=h.getScrollX();this._scrollY=h.getScrollY()
    };a.exports=j},{"./Renderer":71,"@marcom/ac-dom-events/addEventListener":10,"@marcom/ac-dom-events/removeEventListener":19,"@marcom/ac-dom-events/target":23,"@marcom/ac-dom-metrics/getScrollX":58,"@marcom/ac-dom-metrics/getScrollY":59,"@marcom/ac-event-emitter-micro":46,"@marcom/ac-keyboard":55,"@marcom/ac-keyboard/keyMap":57,"@marcom/ac-object/create":88,"@marcom/ac-object/defaults":89}],71:[function(c,b,h){var a={add:c("@marcom/ac-classlist/add"),remove:c("@marcom/ac-classlist/remove")};
    var f={defaults:c("@marcom/ac-object/defaults")};var k={remove:c("@marcom/ac-dom-nodes/remove"),isElement:c("@marcom/ac-dom-nodes/isElement")};
    var j=c("./classNames");var l=c("./dataAttributes");var d={modalElement:null,contentElement:null,closeButton:null,classNames:j,dataAttributes:l};
    var g=function(m){m=m||{};this.options=f.defaults(d,m);this.options.classNames=f.defaults(d.classNames,m.classNames);
        this.options.dataAttributes=f.defaults(d.dataAttributes,m.dataAttributes);this.modalElement=this.options.modalElement;
        this.contentElement=this.options.contentElement;this.closeButton=this.options.closeButton
    };var i=g.prototype;i.render=function(){if(!k.isElement(this.modalElement)){this.modalElement=this.renderModalElement(this.options.classNames.modalElement)
    }if(!k.isElement(this.contentElement)){this.contentElement=this.renderContentElement(this.options.classNames.contentElement)
    }if(this.closeButton!==false){if(!k.isElement(this.closeButton)){this.closeButton=this.renderCloseButton(this.options.classNames.closeButton)
    }this.modalElement.appendChild(this.closeButton)}this.modalElement.appendChild(this.contentElement);
        document.body.appendChild(this.modalElement);return this.modalElement};i.renderCloseButton=function(n){var m;
        n=n||this.options.classNames.closeButton;m=this._renderElement("button",n);m.setAttribute(this.options.dataAttributes.close,"");
        return m};i.renderModalElement=function(m){m=m||this.options.classNames.modalElement;
        return this._renderElement("div",m)};i.renderContentElement=function(m){m=m||this.options.classNames.contentElement;
        return this._renderElement("div",m)};i.appendContent=function(m,n){if(!k.isElement(m)){return
    }if(arguments[1]===undefined){this.contentElement.appendChild(m)}else{if(k.isElement(n)){n.appendChild(m)
    }}};i.removeContent=function(m){if(m){if(this.modalElement.contains(m)){k.remove(m)
    }}else{this._emptyContent()}};i.open=function(){var n=[document.documentElement].concat(this.options.classNames.documentElement);
        var m=[this.modalElement].concat(this.options.classNames.modalOpen);a.add.apply(null,n);
        a.add.apply(null,m)};i.close=function(){var n=[document.documentElement].concat(this.options.classNames.documentElement);
        var m=[this.modalElement].concat(this.options.classNames.modalOpen);a.remove.apply(null,n);
        a.remove.apply(null,m)};i.destroy=function(){var m=[document.documentElement].concat(this.options.classNames.documentElement);
        if(this.modalElement&&document.body.contains(this.modalElement)){this.close();document.body.removeChild(this.modalElement)
        }a.remove.apply(null,m);for(var n in this){if(this.hasOwnProperty(n)){this[n]=null
        }}};i._renderElement=function(o,p){var n=document.createElement(o);var m=[n];if(p){m=m.concat(p)
    }a.add.apply(null,m);return n};i._emptyContent=function(){this.contentElement.innerHTML=""
    };b.exports=g},{"./classNames":72,"./dataAttributes":73,"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7,"@marcom/ac-dom-nodes/isElement":66,"@marcom/ac-dom-nodes/remove":68,"@marcom/ac-object/defaults":89}],72:[function(b,c,a){c.exports={modalElement:"modal",modalOpen:"modal-open",documentElement:"has-modal",contentElement:"modal-content",closeButton:"modal-close"}
},{}],73:[function(b,c,a){c.exports={close:"data-modal-close"}},{}],74:[function(b,c,a){c.exports={Modal:b("./ac-modal/Modal"),createStandardModal:b("./ac-modal/factory/createStandardModal"),createFullViewportModal:b("./ac-modal/factory/createFullViewportModal")}
},{"./ac-modal/Modal":75,"./ac-modal/factory/createFullViewportModal":76,"./ac-modal/factory/createStandardModal":77}],75:[function(c,b,g){var f={create:c("@marcom/ac-object/create"),defaults:c("@marcom/ac-object/defaults")};
    var d=c("@marcom/ac-modal-basic").Modal;var i=c("@marcom/ac-modal-basic").classNames;
    var a={add:c("@marcom/ac-classlist/add")};var m=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var l=c("./focus/CircularTab");var j=c("./focus/FocusManager");function k(n){m.call(this);
        this.options=n||{};this._modal=new d(n,this.options.renderer);this.opened=false;
        this._render();this.closeButton=this._modal.renderer.closeButton;this.modalElement=this._modal.renderer.modalElement;
        this.contentElement=this._modal.renderer.contentElement;this.modalElement.setAttribute("role","dialog");
        this._circularTab=new l(this.modalElement);this._onWillOpen=this._onWillOpen.bind(this);
        this._onOpen=this._onOpen.bind(this);this._onWillClose=this._onWillClose.bind(this);
        this._onClose=this._onClose.bind(this);this._bindEvents()}var h=k.prototype=f.create(m.prototype);
    h.open=function(){this._modal.open();this.opened=this._modal.opened};h.close=function(){this._modal.close()
    };h.appendContent=function(n){this._modal.appendContent(n)};h.removeContent=function(n){this._modal.removeContent(n)
    };h.destroy=function(){this._releaseEvents();this._modal.destroy();this._removeModalFocus();
        this._circularTab.destroy();this._focusObj=null;for(var n in this){if(this.hasOwnProperty(n)){this[n]=null
        }}};h.addKeyToClose=function(n){this._modal.addKeyToClose(n)};h.removeKeyToClose=function(n){this._modal.removeKeyToClose(n)
    };h._render=function(){this._modal.render();this._modal.renderer.modalElement.setAttribute("aria-hidden","true")
    };h._bindEvents=function(){this._modal.on("willopen",this._onWillOpen);this._modal.on("open",this._onOpen);
        this._modal.on("willclose",this._onWillClose);this._modal.on("close",this._onClose)
    };h._releaseEvents=function(){this._modal.off("willopen",this._onWillOpen);this._modal.off("open",this._onOpen);
        this._modal.off("willclose",this._onWillClose);this._modal.off("close",this._onClose)
    };h._onWillOpen=function(){this.trigger("willopen")};h._onOpen=function(){this.opened=this._modal.opened;
        this._giveModalFocus();this.trigger("open")};h._onWillClose=function(){this.trigger("willclose");
        this._removeModalFocus()};h._onClose=function(){this.opened=this._modal.opened;
        this.trigger("close")};h._giveModalFocus=function(){this.modalElement.setAttribute("aria-hidden","false");
        this._activeElement=document.activeElement;this.closeButton.focus();this._circularTab.start();
        this._focusObj=j.disableSiblingFocus(this.modalElement,document.body)};h._removeModalFocus=function(){this._circularTab.stop();
        if(this._focusObj){this._focusObj.enableSiblingFocus();this._focusObj=null}this.modalElement.setAttribute("aria-hidden","true");
        if(this._activeElement){this._activeElement.focus();this._activeElement=null}};
    b.exports=k},{"./focus/CircularTab":78,"./focus/FocusManager":79,"@marcom/ac-classlist/add":1,"@marcom/ac-event-emitter-micro":46,"@marcom/ac-modal-basic":69,"@marcom/ac-object/create":88,"@marcom/ac-object/defaults":89}],76:[function(g,h,d){var c=g("../Modal");
    var b=g("@marcom/ac-modal-basic").classNames;var f={retainScrollPosition:true,renderer:{classNames:{documentElement:[b.documentElement].concat("has-modal-full-viewport"),modalElement:[b.modalElement].concat("modal-full-viewport")}}};
    function a(j){var i=new c(f);if(j){i.appendContent(j)}return i}h.exports=a},{"../Modal":75,"@marcom/ac-modal-basic":69}],77:[function(c,b,d){var h=c("../Modal");
    var f=c("@marcom/ac-modal-basic").classNames;var i=c("@marcom/ac-modal-basic").dataAttributes;
    var a={add:c("@marcom/ac-classlist/add")};var j={renderer:{classNames:{documentElement:[f.documentElement].concat("has-modal-standard"),modalElement:[f.modalElement].concat("modal-standard")}}};
    function g(q){var p=new h(j);var m;if(q){p.appendContent(q)}var l=document.createElement("div");
        var o=document.createElement("div");var n=document.createElement("div");var k=document.createElement("div");
        a.add(l,"content-table");a.add(o,"content-cell");a.add(n,"content-wrapper");a.add(k,"content-padding","large-8","medium-10");
        p.modalElement.setAttribute(i.close,"");n.setAttribute(i.close,"");o.setAttribute(i.close,"");
        l.appendChild(o);o.appendChild(n);n.appendChild(k);p.modalElement.appendChild(l);
        k.appendChild(p.contentElement);k.appendChild(p.closeButton);return p}b.exports=g
},{"../Modal":75,"@marcom/ac-classlist/add":1,"@marcom/ac-modal-basic":69}],78:[function(f,g,d){var b=f("./TabManager");
    var c=f("@marcom/ac-dom-events/utils/addEventListener");var a=f("@marcom/ac-dom-events/utils/removeEventListener");
    var i=function(j){this.tabbables=null;this.firstTabbableElement=null;this.lastTabbableElement=null;
        this.relatedTarget=null;this.el=j;this._handleOnFocus=this._handleOnFocus.bind(this)
    };var h=i.prototype;h.start=function(){this.findTabbables();c(document,"focus",this._handleOnFocus,true)
    };h.stop=function(){a(document,"focus",this._handleOnFocus,true)};h.findTabbables=function(){this.tabbables=b.getTabbable(this.el);
        this.firstTabbableElement=this.tabbables[0];this.lastTabbableElement=this.tabbables[this.tabbables.length-1]
    };h._handleOnFocus=function(j){if(!this.el.contains(j.target)){j.preventDefault();
        this.findTabbables();if(this.relatedTarget===this.lastTabbableElement||this.relatedTarget===null){this.firstTabbableElement.focus();
            this.relatedTarget=this.firstTabbableElement;return}if(this.relatedTarget===this.firstTabbableElement){this.lastTabbableElement.focus();
            this.relatedTarget=this.lastTabbableElement;return}}else{this.relatedTarget=j.target
    }};h.destroy=function(){this.stop();this.el=null;this.tabbables=null;this.firstTabbableElement=null;
        this.lastTabbableElement=null;this.relatedTarget=null};g.exports=i},{"./TabManager":80,"@marcom/ac-dom-events/utils/addEventListener":24,"@marcom/ac-dom-events/utils/removeEventListener":26}],79:[function(c,a,f){c("@marcom/ac-polyfills/Array/prototype.slice");
    var i=c("@marcom/ac-classlist/add");var j=c("@marcom/ac-classlist/remove");var b=c("@marcom/ac-classlist/contains");
    var d="modal";var h=function(){this._elementCacheMap={}};var g=h.prototype;g.disableSiblingFocus=function(n,l){var o=Array.prototype.slice.call(l.children);
        o=o.filter(function(q){var p=q.tagName.toLowerCase();return((q!==n)&&(q.getAttribute("aria-hidden")!=="true")&&(p!=="script")&&(p!=="style")&&(p!=="link"))
        }.bind(this));var m=0;var k=o.length;for(;m<k;m++){o[m].setAttribute("aria-hidden","true")
        }return{enableSiblingFocus:this._enableSiblingFocus.bind(this,o)}};g._enableSiblingFocus=function(k){while(k.length){k.shift().setAttribute("aria-hidden","false")
    }};a.exports=new h()},{"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/contains":6,"@marcom/ac-classlist/remove":7,"@marcom/ac-polyfills/Array/prototype.slice":706}],80:[function(c,d,b){var f=c("@marcom/ac-dom-traversal/querySelectorAll");
    var h=["input","select","textarea","button","optgroup","option","menuitem","fieldset","object"];
    var i=["href","tabindex","contenteditable"];var a=function(){this.focusableSelectors=h.concat(i.map(function(j){return(j==="href")?"a["+j+"]":"*["+j+"]"
    })).join(",")};var g=a.prototype;g.focusable=function(l,k){var m=l.nodeName.toLowerCase();
        var j=h.indexOf(m)>-1;if(m==="a"){return true}if(j){return !l.disabled}if(!l.contentEditable){return true
        }k=k||l.tabIndex;return isNaN(k)};g.tabbable=function(k){var j=k.getAttribute("tabindex");
        if(!isNaN(j)){return(j>=0)}else{return this.focusable(k,j)}};g.getTabbable=function(m){var o=f(this.focusableSelectors,m);
        var k=o.length;var j=[];for(var n=0;n<k;n++){if(this.tabbable(o[n])){j.push(o[n])
        }}return j};g.getFocusable=function(k){var o=f(this.focusableSelectors,k);var j=o.length;
        var n=[];for(var m=0;m<j;m++){if(this.focusable(o[m])){n.push(o[m])}}return n};
    d.exports=new a()},{"@marcom/ac-dom-traversal/querySelectorAll":42}],81:[function(d,f,c){var a=d("qs");
    f.exports=function b(h,g){var i=a.stringify(h,{strictNullHandling:true});if(i&&g!==false){i="?"+i
    }return i}},{qs:82}],82:[function(b,d,a){var g=b("./stringify");var c=b("./parse");
    var f={};d.exports={stringify:g,parse:c}},{"./parse":83,"./stringify":84}],83:[function(b,c,a){var f=b("./utils");
    var d={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000,strictNullHandling:false,plainObjects:false,allowPrototypes:false};
    d.parseValues=function(m,q){var k={};var j=m.split(q.delimiter,q.parameterLimit===Infinity?undefined:q.parameterLimit);
        for(var l=0,o=j.length;l<o;++l){var g=j[l];var n=g.indexOf("]=")===-1?g.indexOf("="):g.indexOf("]=")+1;
            if(n===-1){k[f.decode(g)]="";if(q.strictNullHandling){k[f.decode(g)]=null}}else{var p=f.decode(g.slice(0,n));
                var h=f.decode(g.slice(n+1));if(!Object.prototype.hasOwnProperty.call(k,p)){k[p]=h
                }else{k[p]=[].concat(k[p]).concat(h)}}}return k};d.parseObject=function(l,n,k){if(!l.length){return n
    }var g=l.shift();var m;if(g==="[]"){m=[];m=m.concat(d.parseObject(l,n,k))}else{m=k.plainObjects?Object.create(null):{};
        var j=g[0]==="["&&g[g.length-1]==="]"?g.slice(1,g.length-1):g;var i=parseInt(j,10);
        var h=""+i;if(!isNaN(i)&&g!==j&&h===j&&i>=0&&(k.parseArrays&&i<=k.arrayLimit)){m=[];
            m[i]=d.parseObject(l,n,k)}else{m[j]=d.parseObject(l,n,k)}}return m};d.parseKeys=function(j,n,g){if(!j){return
    }if(g.allowDots){j=j.replace(/\.([^\.\[]+)/g,"[$1]")}var k=/^([^\[\]]*)/;var o=/(\[[^\[\]]*\])/g;
        var m=k.exec(j);var l=[];if(m[1]){if(!g.plainObjects&&Object.prototype.hasOwnProperty(m[1])){if(!g.allowPrototypes){return
        }}l.push(m[1])}var h=0;while((m=o.exec(j))!==null&&h<g.depth){++h;if(!g.plainObjects&&Object.prototype.hasOwnProperty(m[1].replace(/\[|\]/g,""))){if(!g.allowPrototypes){continue
        }}l.push(m[1])}if(m){l.push("["+j.slice(m.index)+"]")}return d.parseObject(l,n,g)
    };c.exports=function(k,p){p=p||{};p.delimiter=typeof p.delimiter==="string"||f.isRegExp(p.delimiter)?p.delimiter:d.delimiter;
        p.depth=typeof p.depth==="number"?p.depth:d.depth;p.arrayLimit=typeof p.arrayLimit==="number"?p.arrayLimit:d.arrayLimit;
        p.parseArrays=p.parseArrays!==false;p.allowDots=p.allowDots!==false;p.plainObjects=typeof p.plainObjects==="boolean"?p.plainObjects:d.plainObjects;
        p.allowPrototypes=typeof p.allowPrototypes==="boolean"?p.allowPrototypes:d.allowPrototypes;
        p.parameterLimit=typeof p.parameterLimit==="number"?p.parameterLimit:d.parameterLimit;
        p.strictNullHandling=typeof p.strictNullHandling==="boolean"?p.strictNullHandling:d.strictNullHandling;
        if(k===""||k===null||typeof k==="undefined"){return p.plainObjects?Object.create(null):{}
        }var l=typeof k==="string"?d.parseValues(k,p):k;var h=p.plainObjects?Object.create(null):{};
        var o=Object.keys(l);for(var j=0,m=o.length;j<m;++j){var n=o[j];var g=d.parseKeys(n,l[n],p);
            h=f.merge(h,g,p)}return f.compact(h)}},{"./utils":85}],84:[function(b,c,a){var f=b("./utils");
    var d={delimiter:"&",arrayPrefixGenerators:{brackets:function(h,g){return h+"[]"
    },indices:function(h,g){return h+"["+g+"]"},repeat:function(h,g){return h}},strictNullHandling:false};
    d.stringify=function(l,n,g,j,h){if(typeof h==="function"){l=h(n,l)}else{if(f.isBuffer(l)){l=l.toString()
    }else{if(l instanceof Date){l=l.toISOString()}else{if(l===null){if(j){return f.encode(n)
    }l=""}}}}if(typeof l==="string"||typeof l==="number"||typeof l==="boolean"){return[f.encode(n)+"="+f.encode(l)]
    }var q=[];if(typeof l==="undefined"){return q}var k=Array.isArray(h)?h:Object.keys(l);
        for(var m=0,o=k.length;m<o;++m){var p=k[m];if(Array.isArray(l)){q=q.concat(d.stringify(l[p],g(n,p),g,j,h))
        }else{q=q.concat(d.stringify(l[p],n+"["+p+"]",g,j,h))}}return q};c.exports=function(o,s){s=s||{};
        var j=typeof s.delimiter==="undefined"?d.delimiter:s.delimiter;var l=typeof s.strictNullHandling==="boolean"?s.strictNullHandling:d.strictNullHandling;
        var n;var k;if(typeof s.filter==="function"){k=s.filter;o=k("",o)}else{if(Array.isArray(s.filter)){n=k=s.filter
        }}var r=[];if(typeof o!=="object"||o===null){return""}var g;if(s.arrayFormat in d.arrayPrefixGenerators){g=s.arrayFormat
        }else{if("indices" in s){g=s.indices?"indices":"repeat"}else{g="indices"}}var h=d.arrayPrefixGenerators[g];
        if(!n){n=Object.keys(o)}for(var m=0,p=n.length;m<p;++m){var q=n[m];r=r.concat(d.stringify(o[q],q,h,l,k))
        }return r.join(j)}},{"./utils":85}],85:[function(b,c,a){var f={};f.hexTable=new Array(256);
    for(var d=0;d<256;++d){f.hexTable[d]="%"+((d<16?"0":"")+d.toString(16)).toUpperCase()
    }a.arrayToObject=function(k,h){var l=h.plainObjects?Object.create(null):{};for(var j=0,g=k.length;
                                                                                   j<g;++j){if(typeof k[j]!=="undefined"){l[j]=k[j]}}return l};a.merge=function(o,n,h){if(!n){return o
    }if(typeof n!=="object"){if(Array.isArray(o)){o.push(n)}else{if(typeof o==="object"){o[n]=true
    }else{o=[o,n]}}return o}if(typeof o!=="object"){o=[o].concat(n);return o}if(Array.isArray(o)&&!Array.isArray(n)){o=a.arrayToObject(o,h)
    }var l=Object.keys(n);for(var g=0,j=l.length;g<j;++g){var i=l[g];var m=n[i];if(!Object.prototype.hasOwnProperty.call(o,i)){o[i]=m
    }else{o[i]=a.merge(o[i],m,h)}}return o};a.decode=function(h){try{return decodeURIComponent(h.replace(/\+/g," "))
    }catch(g){return h}};a.encode=function(k){if(k.length===0){return k}if(typeof k!=="string"){k=""+k
    }var h="";for(var j=0,g=k.length;j<g;++j){var l=k.charCodeAt(j);if(l===45||l===46||l===95||l===126||(l>=48&&l<=57)||(l>=65&&l<=90)||(l>=97&&l<=122)){h+=k[j];
        continue}if(l<128){h+=f.hexTable[l];continue}if(l<2048){h+=f.hexTable[192|(l>>6)]+f.hexTable[128|(l&63)];
        continue}if(l<55296||l>=57344){h+=f.hexTable[224|(l>>12)]+f.hexTable[128|((l>>6)&63)]+f.hexTable[128|(l&63)];
        continue}++j;l=65536+(((l&1023)<<10)|(k.charCodeAt(j)&1023));h+=f.hexTable[240|(l>>18)]+f.hexTable[128|((l>>12)&63)]+f.hexTable[128|((l>>6)&63)]+f.hexTable[128|(l&63)]
    }return h};a.compact=function(o,j){if(typeof o!=="object"||o===null){return o}j=j||[];
        var n=j.indexOf(o);if(n!==-1){return j[n]}j.push(o);if(Array.isArray(o)){var g=[];
            for(var l=0,h=o.length;l<h;++l){if(typeof o[l]!=="undefined"){g.push(o[l])}}return g
        }var m=Object.keys(o);for(l=0,h=m.length;l<h;++l){var k=m[l];o[k]=a.compact(o[k],j)
        }return o};a.isRegExp=function(g){return Object.prototype.toString.call(g)==="[object RegExp]"
    };a.isBuffer=function(g){if(g===null||typeof g==="undefined"){return false}return !!(g.constructor&&g.constructor.isBuffer&&g.constructor.isBuffer(g))
    }},{}],86:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":87,"./create":88,"./defaults":89,"./extend":90,"./getPrototypeOf":91,"./isDate":92,"./isEmpty":93,"./isRegExp":94,"./toQueryParameters":95}],87:[function(c,d,b){c("@marcom/ac-polyfills/Array/isArray");
    var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
        for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
            f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
    }return h({},j)}},{"./extend":90,"@marcom/ac-polyfills/Array/isArray":703}],88:[function(b,d,a){var f=function(){};
    d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
    }if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
    }if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
        return new f()}}},{}],89:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":90}],90:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.forEach");
    var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
    }else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
    }}}});return g}},{"@marcom/ac-polyfills/Array/prototype.forEach":704}],91:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
    d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
    }else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
    }else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
        var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
            i.constructor=h}return g?g.prototype:null}}}}},{}],92:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],93:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
    if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
    }for(h in g){if(a.call(g,h)){return false}}return true}},{}],94:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],95:[function(c,f,b){var a=c("@marcom/ac-url/joinSearchParams");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a(g,false)}},{"@marcom/ac-url/joinSearchParams":81}],96:[function(b,c,a){c.exports.EventEmitter=b("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":97}],97:[function(d,c,f){var h="EventEmitter:propagation";
    var k=function(l){if(l){this.context=l}};var g=k.prototype;var i=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
    }return this._events};var a=function(m,o){var p=m[0];var q=m[1];var n=m[2];if((typeof p!=="string"&&typeof p!=="object")||p===null||Array.isArray(p)){throw new TypeError("Expecting event name to be a string or object.")
    }if((typeof p==="string")&&!q){throw new Error("Expecting a callback function to be provided.")
    }if(q&&(typeof q!=="function")){if(typeof p==="object"&&typeof q==="object"){n=q
    }else{throw new TypeError("Expecting callback to be a function.")}}if(typeof p==="object"){for(var l in p){o.call(this,l,p[l],n)
    }}if(typeof p==="string"){p=p.split(" ");p.forEach(function(r){o.call(this,r,q,n)
    },this)}};var j=function(o,p){var l;var m;var n;l=i.call(this)[o];if(!l||l.length===0){return
    }l=l.slice();this._stoppedImmediatePropagation=false;for(m=0,n=l.length;m<n;m++){if(this._stoppedImmediatePropagation||p(l[m],m)){break
    }}};var b=function(m,n,o){var l=-1;j.call(this,n,function(q,p){if(q.callback===o){l=p;
        return true}});if(l===-1){return}m[n].splice(l,1)};g.on=function(){var l=i.call(this);
        a.call(this,arguments,function(n,o,m){l[n]=l[n]||(l[n]=[]);l[n].push({callback:o,context:m})
        });return this};g.once=function(){a.call(this,arguments,function(m,o,l){var n=function(p){o.call(l||this,p);
        this.off(m,n)};this.on(m,n,this)});return this};g.off=function(n,p){var m=i.call(this);
        if(arguments.length===0){this._events={}}else{if(!n||(typeof n!=="string"&&typeof n!=="object")||Array.isArray(n)){throw new TypeError("Expecting event name to be a string or object.")
        }}if(typeof n==="object"){for(var o in n){b.call(this,m,o,n[o])}}if(typeof n==="string"){var l=n.split(" ");
            if(l.length===1){if(p){b.call(this,m,n,p)}else{m[n]=[]}}else{l.forEach(function(q){m[q]=[]
            })}}return this};g.trigger=function(m,n,l){if(!m){throw new Error("trigger method requires an event name")
    }if(typeof m!=="string"){throw new TypeError("Expecting event names to be a string.")
    }if(l&&typeof l!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
    }m=m.split(" ");m.forEach(function(o){j.call(this,o,function(p){p.callback.call(p.context||this.context||this,n)
    }.bind(this));if(!l){j.call(this,h,function(q){var p=o;if(q.prefix){p=q.prefix+p
    }q.emitter.trigger(p,n)})}},this);return this};g.propagateTo=function(m,n){var l=i.call(this);
        if(!l[h]){this._events[h]=[]}l[h].push({emitter:m,prefix:n})};g.stopPropagatingTo=function(o){var m=i.call(this);
        if(!o){m[h]=[];return}var p=m[h];var n=p.length;var l;for(l=0;l<n;l++){if(p[l].emitter===o){p.splice(l,1);
            break}}};g.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
    };g.has=function(l,s,p){var o=i.call(this);var m=o[l];if(arguments.length===0){return Object.keys(o)
    }if(!m){return false}if(!s){return(m.length>0)?true:false}for(var n=0,q=m.length;
                                                                  n<q;n++){var r=m[n];if(p&&s&&r.context===p&&r.callback===s){return true}else{if(s&&!p&&r.callback===s){return true
    }}}return false};c.exports=k},{}],98:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":99}],99:[function(c,b,d){var f;var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g={addEventListener:c("@marcom/ac-dom-events/addEventListener"),removeEventListener:c("@marcom/ac-dom-events/removeEventListener"),dispatchEvent:c("@marcom/ac-dom-events/dispatchEvent")},a={querySelectorAll:c("@marcom/ac-dom-traversal/querySelectorAll"),matchesSelector:c("@marcom/ac-dom-traversal/matchesSelector")};
    var i="dom-emitter";function h(l){if(l===null){return}this.el=l;this._bindings={};
        this._delegateFuncs={};this._eventEmitter=new k()}f=h.prototype;f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
        return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
        return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
        return this};f.has=function(l,q,p,n){var o,r;if(typeof q==="string"){o=q;r=p}else{r=q;
        n=p}if(o){var m=this._getDelegateFuncBindingIdx(l,o,r,n,true);if(m>-1){return true
    }return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
    }return false};f.trigger=function(n,m,o,s){n=this._parseEventNames(n);n=this._cleanStringData(n);
        var q,r,p,l=n.length;if(typeof m==="string"){q=this._cleanStringData(m);r=o}else{r=m;
            s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){if(!this._eventEmitter){return this
    }m=this._parseEventNames(m);m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;
        for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);
        return this};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);
        return this};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
        return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
        var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null}}};f._parseEventNames=function(l){if(!l){return[l]
    }return l.split(" ")};f._onListenerEvent=function(n,m){var l=new j(m,this);this._eventEmitter.trigger(n,l,false)
    };f._setListener=function(l){this._bindings[l]=this._onListenerEvent.bind(this,l);
        g.addEventListener(this.el,l,this._bindings[l])};f._removeListener=function(l){g.removeEventListener(this.el,l,this._bindings[l]);
        this._bindings[l]=null};f._triggerInternalEvent=function(l,m){this.emitterTrigger(i+":"+l,m)
    };f._normalizeArgumentsAndCall=function(l,n){var r={};if(l.length===0){n.call(this,r);
        return}if(typeof l[0]==="string"||l[0]===null){l=this._cleanStringData(l);r.events=l[0];
        if(typeof l[1]==="string"){r.delegateQuery=l[1];r.callback=l[2];r.context=l[3]}else{r.callback=l[1];
            r.context=l[2]}n.call(this,r);return}var m,p,q=":",o=l[0];for(m in o){if(o.hasOwnProperty(m)){r={};
        p=this._cleanStringData(m.split(q));r.events=p[0];r.delegateQuery=p[1];r.callback=o[m];
        r.context=l[1];n.call(this,r)}}};f._registerDelegateFunc=function(n,p,q,l,o){var m=this._delegateFunc.bind(this,n,p,q,o);
        this._delegateFuncs[p]=this._delegateFuncs[p]||{};this._delegateFuncs[p][n]=this._delegateFuncs[p][n]||[];
        this._delegateFuncs[p][n].push({func:l,context:o,delegateFunc:m});return m};f._cleanStringData=function(o){var n=false;
        if(typeof o==="string"){o=[o];n=true}var m=[],q,s,r,p,l=o.length;for(q=0;q<l;q++){s=o[q];
            if(typeof s==="string"){if(s===""||s===" "){continue}r=s.length;while(s[0]===" "){s=s.slice(1,r);
                r--}while(s[r-1]===" "){s=s.slice(0,r-1);r--}}m.push(s)}if(n){return m[0]}return m
    };f._unregisterDelegateFunc=function(n,q,l,p){if(!this._delegateFuncs[q]||!this._delegateFuncs[q][n]){return
    }var o=this._getDelegateFuncBindingIdx(n,q,l,p),m;if(o>-1){m=this._delegateFuncs[q][n][o].delegateFunc;
        this._delegateFuncs[q][n].splice(o,1);if(this._delegateFuncs[q][n].length===0){this._delegateFuncs[q][n]=null
        }}return m};f._unregisterDelegateFuncs=function(l,n){if(!this._delegateFuncs[n]){return
    }if(l!==null&&!this._delegateFuncs[n][l]){return}if(l===null){var m;for(m in this._delegateFuncs[n]){if(this._delegateFuncs[n].hasOwnProperty(m)){this._unbindDelegateFunc(m,n)
    }}return}this._unbindDelegateFunc(l,n)};f._unbindDelegateFunc=function(l,n){var o,p,m=0;
        while(this._delegateFuncs[n][l]&&this._delegateFuncs[n][l][m]){o=this._delegateFuncs[n][l][m];
            p=this._delegateFuncs[n][l][m].length;this._off({events:l,delegateQuery:n,callback:o.func,context:o.context});
            if(this._delegateFuncs[n][l]&&p===this._delegateFuncs[n][l].length){m++}}o=p=null
    };f._unregisterDelegateFuncsByEvent=function(l){var m;for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._unregisterDelegateFuncs(l,m)
    }}};f._delegateFunc=function(l,p,r,n,q){if(this._targetHasDelegateAncestor(q.target,p)){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
        n=n||window;if(typeof q.detail==="object"){o[0]=q.detail}r.apply(n,o)}};f._targetHasDelegateAncestor=function(n,m){var l=n;
        while(l&&l!==this.el&&l!==document.documentElement){if(a.matchesSelector(l,m)){return true
        }l=l.parentNode}return false};f._on=function(p){var m=p.events,q=p.callback,o=p.delegateQuery,n=p.context,l=p.unboundCallback||q;
        m=this._parseEventNames(m);m.forEach(function(v,r,t,u,s){if(!this.has(s)){this._setListener(s)
        }if(typeof u==="string"){v=this._registerDelegateFunc(s,u,v,r,t)}this._triggerInternalEvent("willon",{evt:s,callback:v,context:t,delegateQuery:u});
            this._eventEmitter.on(s,v,t);this._triggerInternalEvent("didon",{evt:s,callback:v,context:t,delegateQuery:u})
        }.bind(this,q,l,n,o));m=q=l=o=n=null};f._off=function(q){var m=q.events,r=q.callback,p=q.delegateQuery,o=q.context,l=q.unboundCallback||r;
        if(typeof m==="undefined"){this._eventEmitter.off();var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
        }}for(n in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(n)){this._delegateFuncs[n]=null
        }}return}m=this._parseEventNames(m);m.forEach(function(w,s,u,v,t){if(typeof v==="string"&&typeof s==="function"){w=this._unregisterDelegateFunc(t,v,s,u);
            if(!w){return}}if(typeof v==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncs(t,v);
            return}if(typeof t==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncsByEvent(t);
            if(typeof v==="string"){return}}this._triggerInternalEvent("willoff",{evt:t,callback:w,context:u,delegateQuery:v});
            this._eventEmitter.off(t,w,u);this._triggerInternalEvent("didoff",{evt:t,callback:w,context:u,delegateQuery:v});
            if(!this.has(t)){this._removeListener(t)}}.bind(this,r,l,o,p));m=r=l=p=o=null};
    f._once=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context;l=this._parseEventNames(l);
        l.forEach(function(t,r,s,q){if(typeof s==="string"){return this._handleDelegateOnce(q,t,r,s)
        }if(!this.has(q)){this._setListener(q)}this._triggerInternalEvent("willonce",{evt:q,callback:t,context:r,delegateQuery:s});
            this._eventEmitter.once.call(this,q,t,r);this._triggerInternalEvent("didonce",{evt:q,callback:t,context:r,delegateQuery:s})
        }.bind(this,p,m,n));l=p=n=m=null};f._handleDelegateOnce=function(l,o,m,n){this._triggerInternalEvent("willonce",{evt:l,callback:o,context:m,delegateQuery:n});
        this._on({events:l,context:m,delegateQuery:n,callback:this._getDelegateOnceCallback.bind(this,l,o,m,n),unboundCallback:o});
        this._triggerInternalEvent("didonce",{evt:l,callback:o,context:m,delegateQuery:n});
        return this};f._getDelegateOnceCallback=function(l,q,n,p){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
        q.apply(n,o);this._off({events:l,delegateQuery:p,callback:q,context:n})};f._getDelegateFuncBindingIdx=function(s,p,n,l,t){var r=-1;
        if(this._delegateFuncs[p]&&this._delegateFuncs[p][s]){var o,m,q=this._delegateFuncs[p][s].length;
            for(o=0;o<q;o++){m=this._delegateFuncs[p][s][o];if(t&&typeof n==="undefined"){n=m.func
            }if(m.func===n&&m.context===l){r=o;break}}}return r};f._triggerDOMEvents=function(n,q,p){var m=[this.el];
        if(p){m=a.querySelectorAll(p,this.el)}var o,r,l=m.length;for(o=0;o<l;o++){g.dispatchEvent(m[o],n,{bubbles:true,cancelable:true,detail:q})
        }};b.exports=h},{"./DOMEmitterEvent":100,"@marcom/ac-dom-events/addEventListener":10,"@marcom/ac-dom-events/dispatchEvent":11,"@marcom/ac-dom-events/removeEventListener":19,"@marcom/ac-dom-traversal/matchesSelector":40,"@marcom/ac-dom-traversal/querySelectorAll":42,"ac-event-emitter":96}],100:[function(b,c,a){var f={preventDefault:b("@marcom/ac-dom-events/preventDefault"),stopPropagation:b("@marcom/ac-dom-events/stopPropagation"),target:b("@marcom/ac-dom-events/target")};
    var d;var g=function(i,h){this._domEmitter=h;this.originalEvent=i||{};this._originalTarget=f.target(this.originalEvent);
        this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
        this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
        }}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
    d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
    };d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
    }this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
    }return false};c.exports=g},{"@marcom/ac-dom-events/preventDefault":18,"@marcom/ac-dom-events/stopPropagation":22,"@marcom/ac-dom-events/target":23}],101:[function(b,c,a){arguments[4][96][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":102,dup:96}],102:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],103:[function(b,c,a){c.exports={Routes:b("./ac-routes/Routes"),Route:b("./ac-routes/Route")}
},{"./ac-routes/Route":104,"./ac-routes/Routes":105}],104:[function(b,c,a){function f(i,k,h,j,g){this.path=i;
    this.callback=k;this.context=h;this.greedy=j||false;this.priority=g||0;if(typeof this.priority!=="number"){throw new Error("Priority must be a Number.")
    }this.identifierPattern="([a-zA-Z0-9\\-\\_]+)";this.tokensRe=new RegExp(":"+this.identifierPattern,"g");
    this.matcher=this._createRouteMatcher(i)}var d=f.prototype;d._createRouteMatcher=function(h){if(h&&h.exec){return{pattern:h}
}else{if(h==="/"){return{pattern:/^\/$/}}else{if(typeof h!=="string"){throw new Error("path must be either a string or regex")
}}}var g=this._extractRouteTokens(h);var j=h.replace(this.tokensRe,this.identifierPattern);
    var i=new RegExp(j,"g");return{pattern:i,routeTokens:g}};d._extractRouteTokens=function(j){var g=j.replace(this.tokensRe,":"+this.identifierPattern);
    var i=new RegExp(g,"g");var h=i.exec(j);if(h&&h.length>1){h=h.slice(1)}else{h=null
    }return h};d.match=function(h){this.matcher.pattern.lastIndex=0;var g=this.matcher.pattern.exec(h);
    if(g){var i=(g.length)?g.slice(1):[];var j=this.callback;if(j&&typeof j==="function"){j.apply(this.context||this,i);
        return true}}return false};c.exports=f},{}],105:[function(c,d,b){var g=c("./Route");
    function a(h){this._routes={};if(h){this.addRoutes(h)}}var f=a.prototype;f._getIndex=function(k,l,j){if(this._routes[k]!==undefined){var h=this._routes[k].length;
        while(--h>-1){if(this._routes[k][h].callback===l&&this._routes[k][h].context===j){return h
        }}}return -1};f.match=function(k){var j,h;for(j in this._routes){h=this._routes[j].length;
        while(--h>-1){if(this._routes[j][h].match(k)&&this._routes[j][h].greedy){break}}}};
    f.add=function(j){if(this._routes[j.path]===undefined){this._routes[j.path]=[j]
    }else{if(!this.get(j.path,j.callback,j.context)){var k,h=this._routes[j.path].length;
        if(h>0){for(k=0;k<h;++k){if(this._routes[j.path][k].priority>j.priority){this._routes[j.path].splice(k,0,j);
            return j}}}this._routes[j.path].push(j)}}return j};f.remove=function(h){var j=this._getIndex(h.path,h.callback,h.context);
        if(j>-1){this._routes[h.path].splice(j,1);return h}return false};f.get=function(k,l,j){var h=this._getIndex(k,l,j);
        if(h>-1){return this._routes[k][h]}return false};f.createRoute=function(k,m,j,l,i){var h=new g(k,m,j,l,i);
        this.add(h);return h};f.addRoutes=function(j){if(j instanceof Array){var l,k,h=j.length;
        for(l=0;l<h;++l){k=j[l];if(k&&typeof k==="object"){this.add(k)}}}else{throw new Error("routes must be an Array.")
    }};f.removeRoutes=function(j){if(j instanceof Array){var l,k,h=j.length;for(l=0;
                                                                                l<h;++l){k=j[l];if(k&&typeof k==="object"){this.remove(k)}}}else{throw new Error("routes must be an Array.")
    }};f.getRoutes=function(h){if(this._routes[h]===undefined){return[]}return this._routes[h]
    };d.exports=a},{"./Route":104}],106:[function(b,c,a){c.exports={Router:b("./ac-router/Router"),History:b("./ac-router/History"),Routes:b("@marcom/ac-routes").Routes,Route:b("@marcom/ac-routes").Route}
},{"./ac-router/History":107,"./ac-router/Router":108,"@marcom/ac-routes":103}],107:[function(c,f,b){var d=c("@marcom/ac-object").create;
    var a=c("@marcom/ac-dom-events");var i=c("@marcom/ac-event-emitter").EventEmitter;
    function h(k){k=k||{};this.history=window.history;this.rootStripper=/^\/+|\/+$/g;
        this.root=k.root||"/";this.root=("/"+this.root+"/").replace(this.rootStripper,"/");
        var j=typeof k.resolveInitialHash!=="boolean"?true:k.resolveInitialHash;this._pushState=typeof k.pushState!=="boolean"?true:k.pushState;
        this._hashChange=k.hashChange||false;this._setUpdateVars(j);if(k.autoStart){this.start()
        }}var g=h.prototype=d(i.prototype);g._isRoot=function(j){return("/"+j+"/").replace(this.rootStripper,"/")===this.root
    };g._isPushStateSupported=function(){return(this.history&&this.history.pushState)
    };g._isHashChangeSupported=function(){return("onhashchange" in window)};g._setUpdateVars=function(k){if(this._pushState&&this._isPushStateSupported()){if(k&&this._hashChange&&window.location.href.indexOf("#")!==-1){this.history.pushState({},document.title,window.location.href.replace("#",""))
    }this._hashChange=false}else{if(k&&this._pushState&&this._hashChange&&window.location.href.indexOf("#")<0){if(!window.location.origin){window.location.origin=window.location.protocol+"//"+window.location.hostname;
        window.location.origin+=(window.location.port?":"+window.location.port:"")}var j=window.location.href.substr(window.location.origin.length+this.root.length);
        if(j.length){window.location=window.location.origin+this.root+"#"+j;return}}if(this._hashChange&&!this._isHashChangeSupported()){this._interval=50;
        this._iframe=document.createElement('<iframe src="javascript:0" tabindex="-1" style="display:none;">');
        this._iframe=document.body.appendChild(this._iframe).contentWindow;this._iframe.document.open().close()
    }this._pushState=false}};g._checkUrl=function(){var j=this._iframe.location.hash.substr(1);
        if(j.length===0){j="/"}if(this.fragment()!==j){window.location.hash="#"+j;this._ignoreHashChange=false;
            this._handleHashChange()}};g._handlePopState=function(j){this.trigger("popstate",{fragment:this.fragment()})
    };g._handleHashChange=function(j){if(this._ignoreHashChange){this._ignoreHashChange=false;
        return}this.trigger("popstate",{fragment:this.fragment()})};g.canUpdate=function(){return this._pushState||this._hashChange
    };g.start=function(){if(!this.started&&(this._pushState||this._hashChange)){this.started=true;
        if(this._pushState){this._handlePopState=this._handlePopState.bind(this);a.addEventListener(window,"popstate",this._handlePopState)
        }else{if(this._hashChange){if(this._isHashChangeSupported()){this._handleHashChange=this._handleHashChange.bind(this);
            a.addEventListener(window,"hashchange",this._handleHashChange)}else{this._iframe.location.hash=this.fragment();
            this._checkUrl=this._checkUrl.bind(this);this._checkUrlInterval=setInterval(this._checkUrl,this._interval)
        }}}}return this.started||false};g.stop=function(){if(this.started){this.started=false;
        if(this._pushState){a.removeEventListener(window,"popstate",this._handlePopState)
        }else{if(this._hashChange){if(this._isHashChangeSupported()){a.removeEventListener(window,"hashchange",this._handleHashChange)
        }else{if(this._checkUrlInterval){clearInterval(this._checkUrlInterval);this._checkUrlInterval=null
        }}}}}};g.navigate=function(l,k){if(!this.started||!this.canUpdate()){return false
    }k=k||{};var j=((this._isRoot(l)?"":this.root)+l).replace(/([^:])(\/\/)/g,"$1/");
        if(this._pushState){this.history.pushState(k,document.title,j)}else{if(this._hashChange){this._ignoreHashChange=true;
            window.location.hash="#"+l;if(!this._isHashChangeSupported()){this._iframe.document.open().close();
                this._iframe.location.hash="#"+l}}}return true};g.fragment=function(){var j="";
        if(this._pushState){j=(window.location.pathname).substr(this.root.length)}else{if(this._hashChange){j=window.location.hash.substr(1)
        }}return j===""?"/":j};f.exports=h},{"@marcom/ac-dom-events":12,"@marcom/ac-event-emitter":101,"@marcom/ac-object":86}],108:[function(d,c,g){var i=d("@marcom/ac-object").create;
    var k=d("@marcom/ac-dom-emitter").DOMEmitter;var f=d("./History");var j=d("@marcom/ac-routes").Route;
    var a=d("@marcom/ac-routes").Routes;function b(l){l=l||{};this._intercept=l.intercept||"[data-route]";
        this._interceptAttribute=l.attribute||"href";this._handleTrigger=this._handleTrigger.bind(this);
        this.intercept(this._intercept);this.history=l.history||new f({root:l.root,autoStart:l.autoStart,pushState:l.pushState,hashChange:l.hashChange,resolveInitialHash:l.resolveInitialHash});
        a.call(this,l.routes);if(l.autoStart){if(!this.history.started){this.history.start()
        }this.start()}}var h=b.prototype=i(a.prototype);h._handleTrigger=function(m){if(!this.started){return
    }var l=m.target.getAttribute(this._interceptAttribute);if(l){if(/^(http|https):\/\/+/.exec(l)&&this._interceptAttribute==="href"){l=l.substr(l.indexOf(this.history.root)+this.history.root.length)||"/"
    }if(this.navigate(l)){m.preventDefault()}}};h._handlePopstate=function(l){this.navigate(l.fragment,true)
    };h.start=function(){if(!this.started){this.started=true;this.history.start();this._handlePopstate=this._handlePopstate.bind(this);
        this.history.on("popstate",this._handlePopstate);this.navigate(this.history.fragment(),true)
    }};h.stop=function(){if(this.started){this.started=false;this.history.stop();this.history.off("popstate",this._handlePopstate)
    }};h.navigate=function(m,l){if(this.history.fragment()===m&&!l){return this.history.canUpdate()
    }if(m&&!l){if(!this.history.navigate(m)){return false}}this.match(m);return true
    };h.intercept=function(m,n){var l=new k(n||document.body);l.on("click",m,this._handleTrigger)
    };c.exports=b},{"./History":107,"@marcom/ac-dom-emitter":98,"@marcom/ac-object":86,"@marcom/ac-routes":103}],109:[function(b,c,a){var d={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
    c.exports=b("./parseUserAgent")(d)},{"./parseUserAgent":112}],110:[function(b,c,a){c.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],111:[function(b,c,a){c.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(d){return(d.ua.indexOf("Edge")>-1||d.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(d){return(d.ua.indexOf("Firefox")>-1&&d.ua.indexOf("Opera")===-1)
},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(d){return(d.ua.indexOf("Safari")>-1&&d.vendor.indexOf("Apple")>-1)
},version:"Version"},{name:"ie",test:function(d){return(d.ua.indexOf("IE")>-1||d.ua.indexOf("Trident")>-1)
},version:["MSIE","rv"],parseDocumentMode:function(){var d=false;if(document.documentMode){d=parseInt(document.documentMode,10)
}return d}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(d){return(d.platform.indexOf("Win")>-1)
},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(d){return(d.platform.indexOf("Mac")>-1)
}},{name:"ios",test:function(d){return(d.ua.indexOf("iPhone")>-1||d.ua.indexOf("iPad")>-1)
},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(d){return(d.platform.indexOf("Linux")>-1&&d.ua.indexOf("Android")===-1)
}},{name:"fireos",test:function(d){return(d.ua.indexOf("Firefox")>-1&&d.ua.indexOf("Mobile")>-1)
},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}
},{}],112:[function(b,a,d){var c=b("./defaults");var h=b("./dictionary");function g(k){return new RegExp(k+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function f(n,m){if(typeof n.parseVersion==="function"){return n.parseVersion(m)
}else{var p=n.version||n.userAgent;if(typeof p==="string"){p=[p]}var o=p.length;
    var k;for(var l=0;l<o;l++){k=m.match(g(p[l]));if(k&&k.length>1){return k[1].replace(/_/g,".")
    }}}}function j(m,r,p){var o=m.length;var q;var k;for(var n=0;n<o;n++){if(typeof m[n].test==="function"){if(m[n].test(p)===true){q=m[n].name
}}else{if(p.ua.indexOf(m[n].userAgent)>-1){q=m[n].name}}if(q){r[q]=true;k=f(m[n],p.ua);
    if(typeof k==="string"){var l=k.split(".");r.version.name=k;if(l&&l.length>0){r.version.major=parseInt(l[0]||0);
        r.version.minor=parseInt(l[1]||0);r.version.patch=parseInt(l[2]||0)}}else{if(q==="edge"){r.version.name="12.0.0";
        r.version.major="12";r.version.minor="0";r.version.patch="0"}}if(typeof m[n].parseDocumentMode==="function"){r.version.documentMode=m[n].parseDocumentMode()
    }return r}}return r}function i(l){var k={};k.browser=j(h.browser,c.browser,l);k.os=j(h.os,c.os,l);
    return k}a.exports=i},{"./defaults":110,"./dictionary":111}],113:[function(c,d,b){var g=c("./../maps/focusableElement");
    var a=function(){this.focusableSelectors=g.join(",")};var f=a.prototype;f.isFocusableElement=function(k,j,i){if(!j&&!this._isDisplayed(k,j)){return false
    }var l=k.nodeName.toLowerCase();var h=g.indexOf(l)>-1;if(l==="a"){return true}if(h){return !k.disabled
    }if(!k.contentEditable){return true}i=i||parseFloat(k.getAttribute("tabindex"));
        return !isNaN(i)};f.isTabbableElement=function(j,i){if(!i&&!this._isDisplayed(j,i)){return false
    }var h=j.getAttribute("tabindex");h=parseFloat(h);if(!isNaN(h)){return(h>=0)}else{return this.isFocusableElement(j,i,h)
    }};f._isDisplayed=function(h){var i=h.getBoundingClientRect();return i.top>0&&i.left>0&&i.width>0&&i.height>0
    };f.getTabbableElements=function(m,h){var o=m.querySelectorAll(this.focusableSelectors);
        var k=o.length;var j=[];for(var n=0;n<k;n++){if(this.isTabbableElement(o[n],h)){j.push(o[n])
        }}return j};f.getFocusableElements=function(k,h){var o=k.querySelectorAll(this.focusableSelectors);
        var j=o.length;var n=[];for(var m=0;m<j;m++){if(this.isFocusableElement(o[m],h)){n.push(o[m])
        }}return n};d.exports=new a()},{"./../maps/focusableElement":114}],114:[function(b,c,a){c.exports=["input","select","textarea","button","optgroup","option","menuitem","fieldset","object","a[href]","*[tabindex]","*[contenteditable]"]
},{}],115:[function(b,f,a){var g=b("./request/factory");var d={complete:function(j,i){},error:function(j,i){},method:"GET",headers:{},success:function(j,i,k){},timeout:5000};
    var h=function(){for(var k=1;k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
    }}}return arguments[0]};var c={ajax:function(i,j){j=h({},d,j);if(i.substr(0,2)==="//"){i=window.location.protocol+i
    }var k=g(i);k.open(j.method,i);k.setTransportHeaders(j.headers);k.setReadyStateChangeHandlers(j.complete,j.error,j.success);
        k.setTimeout(j.timeout,j.error,j.complete);k.send(j.data);return k},get:function(i,j){j.method="GET";
        return c.ajax(i,j)},head:function(i,j){j.method="HEAD";return c.ajax(i,j)},post:function(i,j){j.method="POST";
        return c.ajax(i,j)}};f.exports=c},{"./request/factory":116}],116:[function(c,b,f){var j=c("./xmlhttprequest");
    var i=c("./xdomainrequest");var h=/.*(?=:\/\/)/;var a=/^.*:\/\/|\/.+$/g;var d=window.XDomainRequest&&document.documentMode<10;
    var g=function(l){if(!l.match(h)){return false}var k=l.replace(a,"");return k!==window.location.hostname
    };b.exports=function(k,l){var m=d&&g(k)?i:j;return new m()}},{"./xdomainrequest":118,"./xmlhttprequest":119}],117:[function(b,d,a){var c=function(){};
    c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()};
    c.prototype.open=function(g,f){g=g.toUpperCase();this.xhr.open(g,f)};c.prototype.send=function(f){this.xhr.send(f)
    };c.prototype.setTimeout=function(h,g,f){this.xhr.ontimeout=function(){g(this.xhr,this.status);
        f(this.xhr,this.status)}.bind(this)};c.prototype.setTransportHeaders=function(f){for(var g in f){this.xhr.setRequestHeader(g,f[g])
    }};d.exports=c},{}],118:[function(b,f,a){var d=b("./request");var c=b("@marcom/ac-object/toQueryParameters");
    var g=function(){this.xhr=new XDomainRequest()};g.prototype=d.create();g.prototype.setReadyStateChangeHandlers=function(h,i,j){this.xhr.onerror=function(){i(this.xhr,this.status);
        h(this.xhr,this.status)}.bind(this);this.xhr.onload=function(){j(this.xhr.responseText,this.xhr.status,this.xhr);
        h(this.xhr,this.status)}.bind(this)};g.prototype.send=function(h){if(h&&typeof h==="object"){h=c(h)
    }this.xhr.send(h)};g.prototype.setTransportHeaders=function(h){};f.exports=g},{"./request":117,"@marcom/ac-object/toQueryParameters":95}],119:[function(b,d,a){var c=b("./request");
    var f=function(){this.xhr=new XMLHttpRequest()};f.prototype=c.create();f.prototype.setReadyStateChangeHandlers=function(g,h,i){this.xhr.onreadystatechange=function(j){if(this.xhr.readyState===4){clearTimeout(this.timeout);
        if(this.xhr.status>=200&&this.xhr.status<300){i(this.xhr.responseText,this.xhr.status,this.xhr);
            g(this.xhr,this.status)}else{h(this.xhr,this.status);g(this.xhr,this.status)}}}.bind(this)
    };d.exports=f},{"./request":117}],120:[function(f,d,h){var o;var n=f("@marcom/ac-object/extend");
    var j=f("@marcom/ac-object/create");var p=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var c=f("@marcom/ac-dom-traversal/querySelectorAll");var l=f("@marcom/ac-dom-events/addEventListener");
    var b=f("@marcom/ac-dom-events/removeEventListener");var a=f("@marcom/ac-console");
    try{o=f("@marcom/ac-analytics")}catch(m){a.log(m.message)}var g={dataAttribute:"analytics-share",interactionEvents:["click"],autoEnable:true};
    var q=function(r){r=r||{};this.options=n(g,r);p.call(this);this.elements=[];this.eventObserver=null;
        this.publishShareClick=this.publishShareClick.bind(this);if(this.options.autoEnable){this.enable()
        }};var k=p.prototype;var i=q.prototype=j(k);i.enable=function(){if(!o){return false
    }this._createObserver();this.bindEventListener()};i.disable=function(){if(!o){return false
    }this.unbindEventListener()};i.bindEventListener=function(){var s=0;this.elements=this.populateElements();
        s=this.elements.length;for(var r=0;r<s;r++){l(this.elements[r],"click",this.publishShareClick)
        }};i.unbindEventListener=function(){var s=(this.elements&&this.elements.length?this.elements.length:0);
        for(var r=0;r<s;r++){b(this.elements[r],"click",this.publishShareClick)}};i.populateElements=function(){return c("[data-"+this.options.dataAttribute+"]",(this.options.context||document))
    };i.publishShareClick=function(s){var t=s.currentTarget;var r=this.parseDataAttribute(t.getAttribute("data-"+this.options.dataAttribute));
        if(typeof r==="object"){if(!r.title){console.log("data-"+this.options.dataAttribute+" attribute must have a `title` property");
            return false}this.trigger("click",r)}};i.parseDataAttribute=function(t){var r={};
        try{r=JSON.parse(t)}catch(s){console.log("data-"+this.options.dataAttribute+" must be a valid JSON string")
        }return r};i.destroy=function(){this.disable();this.elements=[];this.eventObserver=null;
        this.publishShareClick=null;this.options=null};i._createObserver=function(){if(!o||!o.observer||!o.observer.Event){return false
    }this.eventObserver=new o.observer.Event(this,this.options)};d.exports=q},{"@marcom/ac-analytics":"@marcom/ac-analytics","@marcom/ac-console":8,"@marcom/ac-dom-events/addEventListener":10,"@marcom/ac-dom-events/removeEventListener":19,"@marcom/ac-dom-traversal/querySelectorAll":42,"@marcom/ac-event-emitter-micro":46,"@marcom/ac-object/create":88,"@marcom/ac-object/extend":90}],121:[function(b,c,a){c.exports={AnalyticsShare:b("./AnalyticsShare"),create:b("./factory/create")}
},{"./AnalyticsShare":120,"./factory/create":122}],122:[function(c,d,b){var a=c("./../AnalyticsShare");
    d.exports=function(f){return new a(f)}},{"./../AnalyticsShare":120}],123:[function(c,d,b){d.exports=function a(g){if(typeof g.select==="function"){var i=false;
    i=g.select();if(!i){g.setSelectionRange(0,g.value.length)}}else{var f=document.createRange();
    f.selectNodeContents(g);var h=window.getSelection();h.removeAllRanges();h.addRange(f)
}}},{}],124:[function(b,c,a){arguments[4][27][0].apply(a,arguments)},{dup:27}],125:[function(b,c,a){arguments[4][28][0].apply(a,arguments)
},{dup:28}],126:[function(b,c,a){arguments[4][30][0].apply(a,arguments)},{dup:30}],127:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{dup:31}],128:[function(b,c,a){var d=b("./internal/validate");c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");
    d.parentNode(h,true,"insertLastChild");return h.appendChild(g)}},{"./internal/validate":130}],129:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{"../isNode":131,dup:32}],130:[function(b,c,a){arguments[4][33][0].apply(a,arguments)
},{"../COMMENT_NODE":124,"../DOCUMENT_FRAGMENT_NODE":125,"../ELEMENT_NODE":126,"../TEXT_NODE":127,"./isNodeType":129,dup:33}],131:[function(b,c,a){arguments[4][36][0].apply(a,arguments)
},{dup:36}],132:[function(b,c,a){c.exports=b("./fullscreen")},{"./fullscreen":138}],133:[function(b,c,a){c.exports={STANDARD:"standard",IOS:"ios"}
},{}],134:[function(f,c,i){var h=f("@marcom/ac-dom-events/addEventListener");var l=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var a=f("./../events/types");var b=f("./../consts/modes");var d=new l();function k(n){d.trigger(a.ENTERFULLSCREEN,n)
    }function m(n){d.trigger(a.EXITFULLSCREEN,n)}function g(n){if(d.fullscreenElement()){k(n)
    }else{m(n)}}function j(){h(document,"fullscreenchange",g)}j();d.fullscreenEnabled=function(n){var o=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled;
        return !!(o)};d.fullscreenElement=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitCurrentFullScreenElement
    };d.exitFullscreen=function(n){var o;if(typeof document.exitFullscreen==="function"){o="exitFullscreen"
    }else{if(typeof document.webkitExitFullscreen==="function"){o="webkitExitFullscreen"
    }else{if(typeof document.webkitCancelFullScreen==="function"){o="webkitCancelFullScreen"
    }else{if(typeof document.mozCancelFullScreen==="function"){o="mozCancelFullScreen"
    }else{if(typeof document.msExitFullscreen==="function"){o="msExitFullscreen"}}}}}if(typeof document[o]==="function"){document[o].call(document)
    }};d.requestFullscreen=function(n){var o;if(typeof n.requestFullscreen==="function"){o="requestFullscreen"
    }else{if(typeof n.webkitRequestFullscreen==="function"){o="webkitRequestFullscreen"
    }else{if(typeof n.webkitRequestFullScreen==="function"){o="webkitRequestFullScreen"
    }else{if(typeof n.mozRequestFullScreen==="function"){o="mozRequestFullScreen"}else{if(typeof n.msRequestFullscreen==="function"){o="msRequestFullscreen"
    }}}}}if(typeof n[o]==="function"){n[o].call(n)}};d.mode=b.STANDARD;c.exports=d},{"./../consts/modes":133,"./../events/types":137,"@marcom/ac-dom-events/addEventListener":10,"@marcom/ac-event-emitter-micro":46}],135:[function(c,d,a){var b=c("./ios");
    var f=c("./desktop");d.exports={create:function(){var g=f;if("webkitEnterFullscreen" in document.createElement("video")&&!("webkitRequestFullScreen" in document.createElement("div"))){g=b
    }return g}}},{"./desktop":134,"./ios":136}],136:[function(f,d,h){var g=f("@marcom/ac-dom-events/addEventListener");
    var m=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;var a=f("./../events/types");
    var c=f("./../consts/modes");var l;b();function b(){g(document,"webkitbeginfullscreen",k,true);
        g(document,"webkitendfullscreen",j,true)}function k(n){i.trigger(a.ENTERFULLSCREEN,n)
    }function j(n){l=undefined;i.trigger(a.EXITFULLSCREEN,n)}var i=new m();i.fullscreenEnabled=function(n){return !!(n.webkitSupportsFullscreen)
    };i.fullscreenElement=function(){return l};i.exitFullscreen=function(n){if(n&&typeof n.webkitExitFullscreen==="function"){n.webkitExitFullscreen()
    }};i.requestFullscreen=function(n){if(typeof n.webkitEnterFullscreen==="function"){n.webkitEnterFullscreen()
    }};i.mode=c.IOS;d.exports=i},{"./../consts/modes":133,"./../events/types":137,"@marcom/ac-dom-events/addEventListener":10,"@marcom/ac-event-emitter-micro":46}],137:[function(b,c,a){c.exports={ENTERFULLSCREEN:"enterfullscreen",EXITFULLSCREEN:"exitfullscreen"}
},{}],138:[function(c,b,d){var i=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var h=c("./delegate/factory");var a="Error: Element missing. ac-fullscreen requires an element to be specified";
    var f=h.create();function j(){throw new Error(a)}var g={};g.requestFullscreen=function(k){if(!k){j()
    }return f.requestFullscreen(k)};g.fullscreenEnabled=function(k){if(!k){j()}return f.fullscreenEnabled(k)
    };g.fullscreenElement=function(){return f.fullscreenElement()};g.exitFullscreen=function(k){if(!k){j()
    }return f.exitFullscreen(k)};g.getMode=function(){return f.mode};g.on=function(){return f.on.apply(f,arguments)
    };g.off=function(){return f.off.apply(f,arguments)};g.once=function(){return f.once.apply(f,arguments)
    };b.exports=g},{"./delegate/factory":135,"@marcom/ac-event-emitter-micro":46}],139:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/KeyEvent":141,"@marcom/ac-dom-events/utils/addEventListener":24,"@marcom/ac-dom-events/utils/removeEventListener":26,"@marcom/ac-event-emitter-micro":46,"@marcom/ac-object/create":88,dup:54}],140:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{"./Keyboard":139,dup:55}],141:[function(b,c,a){arguments[4][56][0].apply(a,arguments)
},{dup:56}],142:[function(b,c,a){arguments[4][57][0].apply(a,arguments)},{dup:57}],143:[function(b,c,a){c.exports={getContentDimensions:b("./getContentDimensions"),getDimensions:b("./getDimensions"),getPagePosition:b("./getPagePosition"),getPercentInViewport:b("./getPercentInViewport"),getPixelsInViewport:b("./getPixelsInViewport"),getPosition:b("./getPosition"),getScrollX:b("./getScrollX"),getScrollY:b("./getScrollY"),getViewportPosition:b("./getViewportPosition"),isInViewport:b("./isInViewport")}
},{"./getContentDimensions":144,"./getDimensions":145,"./getPagePosition":146,"./getPercentInViewport":147,"./getPixelsInViewport":148,"./getPosition":149,"./getScrollX":150,"./getScrollY":151,"./getViewportPosition":152,"./isInViewport":153}],144:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
    f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
    }},{"./utils/getBoundingClientRect":154}],145:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
    f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
    }return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":154}],146:[function(g,h,f){var c=g("./getDimensions");
    var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
    h.exports=function i(j,o){var l;var n;var m;var k;if(o){l=d(j);n=b();m=a();return{top:l.top+m,right:l.right+n,bottom:l.bottom+m,left:l.left+n}
    }k=c(j,o);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};while((j=j.offsetParent)){l.top+=j.offsetTop;
        l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
    }},{"./getDimensions":145,"./getScrollX":150,"./getScrollY":151,"./utils/getBoundingClientRect":154}],147:[function(c,f,b){var a=c("./getDimensions");
    var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
        return(i/h)}},{"./getDimensions":145,"./getPixelsInViewport":148}],148:[function(c,d,b){var a=c("./getViewportPosition");
    d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
        var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
        }if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":152}],149:[function(d,f,c){var a=d("./getDimensions");
    var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
        var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
        }}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
        }return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":145,"./utils/getBoundingClientRect":154}],150:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{dup:58}],151:[function(b,c,a){arguments[4][59][0].apply(a,arguments)},{dup:59}],152:[function(g,h,f){var i=g("./getPagePosition");
    var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
    h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
    }j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
    }},{"./getPagePosition":146,"./getScrollX":150,"./getScrollY":151,"./utils/getBoundingClientRect":154}],153:[function(b,d,a){var g=b("./getPixelsInViewport");
    var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
        i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":147,"./getPixelsInViewport":148}],154:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
    return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],155:[function(j,a,s){var f=j("@marcom/ac-dom-traversal/querySelector");var i={addEventListener:j("@marcom/ac-dom-events/utils/addEventListener"),removeEventListener:j("@marcom/ac-dom-events/utils/removeEventListener"),dispatchEvent:j("@marcom/ac-dom-events/utils/dispatchEvent"),preventDefault:j("@marcom/ac-dom-events/preventDefault"),stopPropagation:j("@marcom/ac-dom-events/stopPropagation")};
    var r=j("@marcom/ac-event-emitter-micro");var p=j("@marcom/ac-dom-metrics");var d=j("@marcom/ac-keyboard/Keyboard");
    var k={num:37,string:"ArrowLeft"};var b={num:38,string:"ArrowUp"};var g={num:39,string:"ArrowRight"};
    var o={num:40,string:"ArrowDown"};var q=[k,g,o,g];var m=function(u){if(u.which){return u.which
    }var v=(u.key)?u.key:u.code;var w=0;var t=q.length;for(;w<t;w++){if(q[w].string===v){return q[w].num
    }}return -1};var c={min:0,max:1,step:1,value:0,orientation:"horizontal",template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb"></div>\n</div>',keyboardMaxStepPercentage:0.05,keyboardStepMultiplier:1.25};
    var h=Object.keys(c);var n=function(u,t){this.options=Object.assign({},c,t);this.model=Object.create(this.options);
        this.el=u;var v=this.options.keyboardContext||this.el;this._keyboard=new d(v);this._keyDown={};
        u.className+=" ac-slider-container";u.innerHTML=this.model.template;r.EventEmitterMicro.call(this);
        this.initialize()};n.prototype=Object.create(r.EventEmitterMicro.prototype);var l=n.prototype;
    l.addEventListeners=function(){this.addEventListener(this.el,"mousedown",this.onMouseDown);
        this.addEventListener(this.el,"touchstart",this.onTouchStart);this.addEventListener(this.el,"mouseover",this.onMouseOver);
        this.addEventListener(this.el,"mouseleave",this.onMouseLeave);this.addEventListener(this.el,"touchend",this.onTouchEnd);
        this.addEventListener(document,"touchend",this.onMouseUp);if(this.model.orientation==="horizontal"){this._keyboard.onDown(g.num,this.stepUp);
            this._keyboard.onDown(k.num,this.stepDown)}else{this._keyboard.onDown(o.num,this.stepDown);
            this._keyboard.onDown(b.num,this.stepUp)}};l.addEventListener=i.addEventListener;
    l.bindMethods=function(){this.stepDown=this.stepDown.bind(this);this.stepUp=this.stepUp.bind(this);
        this._triggerRelease=this._triggerRelease.bind(this);this._preventDefault=this._preventDefault.bind(this);
        this.onMouseDown=this.bindMethod(this.onMouseDown,this);this.onTouchStart=this.bindMethod(this.onTouchStart,this);
        this.onMouseOver=this.bindMethod(this.onMouseOver,this);this.onMouseLeave=this.bindMethod(this.onMouseLeave,this);
        this.onTouchEnd=this.bindMethod(this.onTouchEnd,this);this.onMouseUp=this.bindMethod(this.onMouseUp,this);
        this.onMouseMove=this.bindMethod(this.onMouseMove,this);this.onTouchMove=this.bindMethod(this.onTouchMove,this)
    };l.bindMethod=function(u,t){return u.bind(t)};l.correctValueMinMax=function(v,u,t){if(v>t){v=t
    }if(v<u){v=u}return v};l.calculateStepsToValue=function(u,t){return Math.abs(u-t)
    };l.calculateMaxSteps=function(u,t){return Math.abs(t-u)};l.calculateStepsEqualToPercentage=function(u,t){return(u/100)*t
    };l.calculateNextStepInRange=function(z,u,t,y){var w=this.calculateMaxSteps(u,t);
        var x=this.calculateStepsToValue(z,u);var v=u+(Math.floor(w/y)*y);z=Math.min(v,u+Math.round(x/y)*y);
        return z};l.dispatchEvent=i.dispatchEvent;l.disableUserControls=function(){this.removeEventListeners()
    };l.enableUserControls=function(){this.addEventListeners()};l.getNextValue=function(w,u,t,v){w=this.correctValueMinMax(w,u,t);
        if(v!=="auto"){w=this.calculateNextStepInRange(w,u,t,v)}return w};l.getOrientation=function(){return this.model.orientation
    };l.getValue=function(){return this.model.value};l.getMin=function(){return this.model.min
    };l.getMax=function(){return this.model.max};l.getStep=function(){return this.model.step
    };l.getClientXValue=function(z){var t=this.getClientXFromEvent(z);var A=p.getDimensions(this.thumbElement);
        var B=p.getDimensions(this.runnableTrackElement);var v=t-this.runnableTrackElement.getBoundingClientRect().left-(A.width/2);
        var y=B.width-A.width;var u=v/(y)*100;var w=this.calculateMaxSteps(this.getMin(),this.getMax());
        var x=this.calculateStepsEqualToPercentage(u,w);return this.getMin()+x};l.getClientYValue=function(z){var t=this.getClientYFromEvent(z);
        var B=p.getDimensions(this.thumbElement);var C=p.getDimensions(this.runnableTrackElement);
        var u=p.getViewportPosition(this.runnableTrackElement);var y=C.height-B.height;
        var A=y-(t-u.top-(B.height/2));var v=A/(C.height-B.height)*100;var w=this.calculateMaxSteps(this.model.min,this.model.max);
        var x=this.calculateStepsEqualToPercentage(v,w);return this.model.min+x};l.getClientValue=function(u){u=u.originalEvent||u;
        var t;if(this.model.orientation==="horizontal"){t=this.getClientXValue(u)}else{t=this.getClientYValue(u)
        }return t};l.getClientXFromEvent=function(t){return t.touches?t.touches[0].clientX:t.clientX
    };l.getClientYFromEvent=function(t){return t.touches?t.touches[0].clientY:t.clientY
    };l.initialize=function(){this.setNodeReferences();this.setValue(this.model.value);
        this.bindMethods();this.addEventListeners()};l.onMouseLeave=function(){this.preventDocumentMouseUpDispatch=false
    };l.onMouseDown=function(u){var t=this.getClientValue(u);this.addEventListener(document,"mouseup",this.onMouseUp);
        this.addEventListener(document,"mousemove",this.onMouseMove);this.trigger("grab",this.getValue());
        this.setValue(t)};l.onMouseUp=function(){this.removeEventListener(document,"mouseup",this.onMouseUp);
        this.removeEventListener(document,"mousemove",this.onMouseMove);this.trigger("release",this.getValue());
        if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"mouseup")}};
    l.onMouseOver=function(){this.preventDocumentMouseUpDispatch=true};l.onTouchEnd=function(){this.removeEventListener(document,"touchend",this.onTouchEnd);
        this.removeEventListener(document,"touchmove",this.onTouchMove);this.trigger("release",this.getValue());
        if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"touchend")
        }};l.onTouchStart=function(u){var t=this.getClientValue(u);this.addEventListener(document,"touchend",this.onMouseUp);
        this.addEventListener(document,"touchmove",this.onTouchMove);this.trigger("grab",this.getValue());
        this.setValue(t)};l.onMouseMove=function(u){var t=this.getClientValue(u);this.setValue(t)
    };l.onTouchMove=function(u){if(u.preventDefault){u.preventDefault()}var t=this.getClientValue(u);
        this.setValue(t)};l.getElementOrientationOffsetValue=function(u,t){if(t==="horizontal"){return p.getDimensions(u).width
    }return p.getDimensions(u).height};l.getAvailableRunnableTrack=function(v,t){var u=this.getElementOrientationOffsetValue(this.thumbElement,t);
        return v-u};l.getPercentageByValue=function(u,t){u=this.calculateStepsToValue(u,this.getMin());
        t=this.calculateMaxSteps(this.getMin(),this.getMax());return(u/t)*100};l.getPercentageOfRunnableTrack=function(x){var u=this.getOrientation();
        var y=this.getElementOrientationOffsetValue(this.runnableTrackElement,u);var t=this.getAvailableRunnableTrack(y,u);
        var w=this.getPercentageByValue(x,this.getMax());var v=(w/100)*t;return(v/y)*100
    };l.onChange=function(u){var t=this.getPercentageOfRunnableTrack(u);if(isNaN(t)){return
    }if(this.getOrientation()==="horizontal"){this.thumbElement.style.left=t+"%"}else{this.thumbElement.style.bottom=t+"%"
    }this.trigger("change",this.getValue())};l.removeEventListeners=function(){this.removeEventListener(this.el,"mousedown",this.onMouseDown);
        this.removeEventListener(this.el,"touchstart",this.onTouchStart);this.removeEventListener(this.el,"mouseover",this.onMouseOver);
        this.removeEventListener(this.el,"mouseleave",this.onMouseLeave);this.removeEventListener(this.el,"touchend",this.onTouchEnd);
        this.removeEventListener(document,"touchend",this.onMouseUp)};l.removeEventListener=i.removeEventListener;
    l.setNodeReferences=function(){this.runnableTrackElement=f(".ac-slider-runnable-track",this.el);
        this.thumbElement=f(".ac-slider-thumb",this.el)};l.setOrientation=function(t){this.set("orientation",t)
    };l._triggerRelease=function(t){this._preventDefault(t);this.trigger("release",this.getValue());
        this._keyDown[m(t)]=0};l._preventDefault=function(t){i.preventDefault(t);i.stopPropagation(t)
    };l._step=function(u,t){this._preventDefault(u);this.el.focus();var v=this._keyDown[m(u)]||0;
        if(!v){this.trigger("grab",this.getValue());v=this.getStep();v=(v!=="auto")?v:this._cachedMaxStep;
            if(!t){v*=-1}this._keyboard.onceUp(m(u),this._triggerRelease)}else{if(Math.abs(this._keyDown[m(u)])<(Math.abs(this.model.max*this.model.keyboardMaxStepPercentage))){v*=this.model.keyboardStepMultiplier
        }}this._keyDown[m(u)]=v;this.setValue(this.getValue()+v)};l.stepUp=function(t){this._step(t,true)
    };l.stepDown=function(t){this._step(t,false)};l.setValue=function(t){t=this.getNextValue(t,this.getMin(),this.getMax(),this.getStep());
        this.set("value",t);this.el.setAttribute("aria-valuenow",t);this.onChange(t)};l.setMin=function(t){this.set("min",t);
        this.el.setAttribute("aria-valuemin",t)};l.setMax=function(t){this.set("max",t);
        this.el.setAttribute("aria-valuemax",t);this._cachedMaxStep=t/100};l.setStep=function(t){this.set("step",t)
    };l.set=function(t,v){if(h.indexOf(t)>-1&&this.model[t]!==v){var u=this.model[t];
        this.model[t]=v;this.trigger("change:model:"+t,{previous:u,current:v})}};l._removeEventListeners=function(){this.removeEventListener(this.el,"mousedown",this.onMouseDown);
        this.removeEventListener(this.el,"touchstart",this.onTouchStart);this.removeEventListener(this.el,"mouseover",this.onMouseOver);
        this.removeEventListener(this.el,"mouseleave",this.onMouseLeave);this.removeEventListener(this.el,"touchend",this.onTouchEnd);
        this.removeEventListener(document,"touchend",this.onMouseUp);if(this.model.orientation==="horizontal"){this._keyboard.offDown(g.num,this.stepUp);
            this._keyboard.offDown(k.num,this.stepDown);this._keyboard.offUp(k.num,this._triggerRelease);
            this._keyboard.offUp(g.num,this._triggerRelease)}else{this._keyboard.offDown(o.num,this.stepDown);
            this._keyboard.offDown(b.num,this.stepUp);this._keyboard.offUp(o.num,this._triggerRelease);
            this._keyboard.offUp(b.num,this._triggerRelease)}};l.destroy=function(){this._removeEventListeners();
        this._keyboard.destroy();r.EventEmitterMicro.prototype.destroy.call(this)};a.exports=n
},{"@marcom/ac-dom-events/preventDefault":18,"@marcom/ac-dom-events/stopPropagation":22,"@marcom/ac-dom-events/utils/addEventListener":24,"@marcom/ac-dom-events/utils/dispatchEvent":25,"@marcom/ac-dom-events/utils/removeEventListener":26,"@marcom/ac-dom-metrics":143,"@marcom/ac-dom-traversal/querySelector":41,"@marcom/ac-event-emitter-micro":46,"@marcom/ac-keyboard/Keyboard":139}],156:[function(b,c,a){c.exports.Slider=b("./Slider")
},{"./Slider":155}],157:[function(b,c,a){arguments[4][13][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":158,"./shared/prefixHelper":159,"./shared/windowFallbackEventTypes":160,"./utils/eventTypeAvailable":161,dup:13}],158:[function(b,c,a){arguments[4][14][0].apply(a,arguments)
},{dup:14}],159:[function(b,c,a){arguments[4][15][0].apply(a,arguments)},{dup:15}],160:[function(b,c,a){arguments[4][16][0].apply(a,arguments)
},{dup:16}],161:[function(b,c,a){arguments[4][17][0].apply(a,arguments)},{dup:17}],162:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":163,"./dispatchEvent":164,"./preventDefault":165,"./removeEventListener":166,"./stop":168,"./stopPropagation":169,"./target":170}],163:[function(c,d,b){var g=c("./utils/addEventListener");
    var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
    }},{"./shared/getEventType":167,"./utils/addEventListener":171}],164:[function(d,f,c){var a=d("./utils/dispatchEvent");
    var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
    }},{"./shared/getEventType":167,"./utils/dispatchEvent":172}],165:[function(c,d,a){d.exports=function b(f){f=f||window.event;
    if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],166:[function(d,f,c){var b=d("./utils/removeEventListener");
    var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
    }},{"./shared/getEventType":167,"./utils/removeEventListener":173}],167:[function(c,f,b){var d=c("@marcom/ac-prefixer/getEventType");
    f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
    }else{h="document"}}g=d(i,h);if(g){return g}return i}},{"@marcom/ac-prefixer/getEventType":157}],168:[function(d,g,b){var a=d("./stopPropagation");
    var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
        h.stopped=true;h.returnValue=false}},{"./preventDefault":165,"./stopPropagation":169}],169:[function(c,d,b){d.exports=function a(f){f=f||window.event;
    if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],170:[function(b,c,a){c.exports=function d(f){f=f||window.event;
    return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],171:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],172:[function(b,c,a){b("@marcom/ac-polyfills/CustomEvent");
    c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
    }else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
        if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"@marcom/ac-polyfills/CustomEvent":707}],173:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,f)
}else{i.detachEvent("on"+g,h)}return i}},{}],174:[function(b,c,a){c.exports=b("./lib/")
},{"./lib/":175}],175:[function(b,c,a){arguments[4][82][0].apply(a,arguments)},{"./parse":176,"./stringify":177,dup:82}],176:[function(b,c,a){var f=b("./utils");
    var d={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000};d.parseValues=function(m,q){var k={};
        var j=m.split(q.delimiter,q.parameterLimit===Infinity?undefined:q.parameterLimit);
        for(var l=0,o=j.length;l<o;++l){var g=j[l];var n=g.indexOf("]=")===-1?g.indexOf("="):g.indexOf("]=")+1;
            if(n===-1){k[f.decode(g)]=""}else{var p=f.decode(g.slice(0,n));var h=f.decode(g.slice(n+1));
                if(!k.hasOwnProperty(p)){k[p]=h}else{k[p]=[].concat(k[p]).concat(h)}}}return k};
    d.parseObject=function(l,n,k){if(!l.length){return n}var g=l.shift();var m={};if(g==="[]"){m=[];
        m=m.concat(d.parseObject(l,n,k))}else{var j=g[0]==="["&&g[g.length-1]==="]"?g.slice(1,g.length-1):g;
        var i=parseInt(j,10);var h=""+i;if(!isNaN(i)&&g!==j&&h===j&&i>=0&&i<=k.arrayLimit){m=[];
            m[i]=d.parseObject(l,n,k)}else{m[j]=d.parseObject(l,n,k)}}return m};d.parseKeys=function(j,n,g){if(!j){return
    }var k=/^([^\[\]]*)/;var o=/(\[[^\[\]]*\])/g;var m=k.exec(j);if(Object.prototype.hasOwnProperty(m[1])){return
    }var l=[];if(m[1]){l.push(m[1])}var h=0;while((m=o.exec(j))!==null&&h<g.depth){++h;
        if(!Object.prototype.hasOwnProperty(m[1].replace(/\[|\]/g,""))){l.push(m[1])}}if(m){l.push("["+j.slice(m.index)+"]")
    }return d.parseObject(l,n,g)};c.exports=function(k,p){if(k===""||k===null||typeof k==="undefined"){return{}
    }p=p||{};p.delimiter=typeof p.delimiter==="string"||f.isRegExp(p.delimiter)?p.delimiter:d.delimiter;
        p.depth=typeof p.depth==="number"?p.depth:d.depth;p.arrayLimit=typeof p.arrayLimit==="number"?p.arrayLimit:d.arrayLimit;
        p.parameterLimit=typeof p.parameterLimit==="number"?p.parameterLimit:d.parameterLimit;
        var l=typeof k==="string"?d.parseValues(k,p):k;var h={};var o=Object.keys(l);for(var j=0,m=o.length;
                                                                                         j<m;++j){var n=o[j];var g=d.parseKeys(n,l[n],p);h=f.merge(h,g)}return f.compact(h)
    }},{"./utils":178}],177:[function(b,c,a){var f=b("./utils");var d={delimiter:"&",indices:true};
    d.stringify=function(n,m,j){if(f.isBuffer(n)){n=n.toString()}else{if(n instanceof Date){n=n.toISOString()
    }else{if(n===null){n=""}}}if(typeof n==="string"||typeof n==="number"||typeof n==="boolean"){return[encodeURIComponent(m)+"="+encodeURIComponent(n)]
    }var h=[];if(typeof n==="undefined"){return h}var o=Object.keys(n);for(var l=0,g=o.length;
                                                                           l<g;++l){var k=o[l];if(!j.indices&&Array.isArray(n)){h=h.concat(d.stringify(n[k],m,j))
    }else{h=h.concat(d.stringify(n[k],m+"["+k+"]",j))}}return h};c.exports=function(n,j){j=j||{};
        var h=typeof j.delimiter==="undefined"?d.delimiter:j.delimiter;j.indices=typeof j.indices==="boolean"?j.indices:d.indices;
        var m=[];if(typeof n!=="object"||n===null){return""}var o=Object.keys(n);for(var l=0,g=o.length;
                                                                                     l<g;++l){var k=o[l];m=m.concat(d.stringify(n[k],k,j))}return m.join(h)}},{"./utils":178}],178:[function(b,c,a){var d={};
    a.arrayToObject=function(h){var j={};for(var g=0,f=h.length;g<f;++g){if(typeof h[g]!=="undefined"){j[g]=h[g]
    }}return j};a.merge=function(m,l){if(!l){return m}if(typeof l!=="object"){if(Array.isArray(m)){m.push(l)
    }else{m[l]=true}return m}if(typeof m!=="object"){m=[m].concat(l);return m}if(Array.isArray(m)&&!Array.isArray(l)){m=a.arrayToObject(m)
    }var i=Object.keys(l);for(var f=0,h=i.length;f<h;++f){var g=i[f];var j=l[g];if(!m[g]){m[g]=j
    }else{m[g]=a.merge(m[g],j)}}return m};a.decode=function(g){try{return decodeURIComponent(g.replace(/\+/g," "))
    }catch(f){return g}};a.compact=function(n,h){if(typeof n!=="object"||n===null){return n
    }h=h||[];var m=h.indexOf(n);if(m!==-1){return h[m]}h.push(n);if(Array.isArray(n)){var f=[];
        for(var k=0,g=n.length;k<g;++k){if(typeof n[k]!=="undefined"){f.push(n[k])}}return f
    }var l=Object.keys(n);for(k=0,g=l.length;k<g;++k){var j=l[k];n[j]=a.compact(n[j],h)
    }return n};a.isRegExp=function(f){return Object.prototype.toString.call(f)==="[object RegExp]"
    };a.isBuffer=function(f){if(f===null||typeof f==="undefined"){return false}return !!(f.constructor&&f.constructor.isBuffer&&f.constructor.isBuffer(f))
    }},{}],179:[function(b,c,a){c.exports={Link:b("./ac-social/Link"),Dialog:b("./ac-social/Dialog"),Focus:b("./ac-social/Focus"),Debug:b("./ac-social/Debug")}
},{"./ac-social/Debug":180,"./ac-social/Dialog":181,"./ac-social/Focus":182,"./ac-social/Link":183}],180:[function(c,d,b){var a=c("./NetworkActions");
    function g(){this.types={};var h;for(h in a){if(a.hasOwnProperty(h)){f[h]=h;this.addType(h,a[h].getDialogDebugData.bind(a[h]))
    }}}var f=g.prototype;f.create=function(h,j){j=j||{};var i=this.types[h];if(!i){return
    }return i(j)};f.addType=function(h,i){this.types[h]=i;return this};f.removeType=function(){this.types[name]=null;
        return this};d.exports=new g()},{"./NetworkActions":184}],181:[function(d,f,c){var a=d("./NetworkActions");
    function b(){this.types={};var h;for(h in a){if(a.hasOwnProperty(h)){g[h]=h;this.addType(h,a[h].generateDialog.bind(a[h]))
    }}}var g=b.prototype;g.create=function(h,j){j=j||{};var i=this.types[h];if(!i){return
    }return i(j)};g.addType=function(h,i){this.types[h]=i;return this};g.removeType=function(){this.types[name]=null;
        return this};f.exports=new b()},{"./NetworkActions":184}],182:[function(b,c,a){c.exports=function(g){if(window.getSelection){var f=window.getSelection();
    var d=document.createRange();d.selectNodeContents(g);f.removeAllRanges();f.addRange(d)
}else{if(g.setSelectionRange){g.setSelectionRange(0,g.value.length)}else{if(document.body.createTextRange){var d=document.body.createTextRange();
    d.moveToElementText(g);d.select()}}}}},{}],183:[function(f,g,c){var a=f("./NetworkActions"),b=f("./network-actions/DefaultNetworkAction");
    function d(){this.types={};var j;for(j in a){if(a.hasOwnProperty(j)){h[j]=j;this.addType(j,a[j].generateLink.bind(a[j]))
    }}}var h=d.prototype;h.create=function(j,l,i){l=l||{};var k=this.types[j];if(!k){return
    }return k(l,i)};h.createFromAnchor=function(l){var j=l.getAttribute("data-network-action");
        var k;for(k in a){if(a.hasOwnProperty(k)){if(j===a[k].id){a[k].enhanceLinkEngagement(l);
            return}}}b.enhanceLinkEngagement(l)};h.addType=function(i,j){this.types[i]=j;return this
    };h.removeType=function(){this.types[name]=null;return this};g.exports=new d()},{"./NetworkActions":184,"./network-actions/DefaultNetworkAction":185}],184:[function(d,c,g){var m=d("./network-actions/FacebookShare"),l=d("./network-actions/PinterestShare"),n=d("./network-actions/TumblrShare"),f=d("./network-actions/TwitterFavorite"),i=d("./network-actions/TwitterReply"),p=d("./network-actions/TwitterRetweet"),o=d("./network-actions/TwitterTweet"),k=d("./network-actions/WeiboShare"),b=d("./network-actions/QQWeiboShare"),j=d("./network-actions/QZoneShare"),h=d("./network-actions/RenrenShare"),a=d("./network-actions/EMailShare");
    c.exports={FACEBOOK_SHARE:m,PINTEREST_SHARE:l,TUMBLR_SHARE:n,TWITTER_FAVORITE:f,TWITTER_REPLY:i,TWITTER_RETWEET:p,TWITTER_TWEET:o,WEIBO_SHARE:k,QQWEIBO_SHARE:b,QZONE_SHARE:j,RENREN_SHARE:h,EMAIL_SHARE:a}
},{"./network-actions/EMailShare":186,"./network-actions/FacebookShare":187,"./network-actions/PinterestShare":189,"./network-actions/QQWeiboShare":190,"./network-actions/QZoneShare":191,"./network-actions/RenrenShare":192,"./network-actions/TumblrShare":193,"./network-actions/TwitterFavorite":194,"./network-actions/TwitterReply":195,"./network-actions/TwitterRetweet":196,"./network-actions/TwitterTweet":197,"./network-actions/WeiboShare":198}],185:[function(c,d,a){var f=c("./NetworkAction");
    var b=function(g){return g};d.exports=new f(b,{baseLinkPath:""})},{"./NetworkAction":188}],186:[function(c,d,a){var f=c("./NetworkAction");
    var b=function(h){var g={url:h.url};if(h.title){g.subject=h.title}if(h.description){g.body=h.description+"\r\n\r\n"+h.url
    }else{g.body=h.url}return g};d.exports=new f(b,{id:"email-share",baseLinkPath:"mailto:",preventDialog:true})
},{"./NetworkAction":188}],187:[function(c,d,a){var f=c("./NetworkAction");var b=function(g){return{u:g.url}
};d.exports=new f(b,{id:"facebook-share",baseLinkPath:"https://www.facebook.com/sharer/sharer.php",dialogDimensions:{width:555,height:368}})
},{"./NetworkAction":188}],188:[function(c,d,b){var a=c("qs"),h=c("@marcom/ac-dom-events");
    var g;var f=function(j,i){i=i||{};this.baseLinkPath=i.baseLinkPath;if(i.dialogDimensions){this.dialogDimensions=i.dialogDimensions
    }if(i.id){this.id=i.id}if(i.preventDialog){this.preventDialog=i.preventDialog}this.normalizeData=j
    };g=f.prototype;g.dataAttributeName="network-action";g.id="network-action";g.normalizeData=function(i){return i
    };g.dialogDimensions={width:500,height:500};g.generateLinkURL=function(l){var k=this.normalizeData(l),j=a.stringify(k),i=this.baseLinkPath;
        if(j.length>0){i=i+"?"+j}return i};g.generateLink=function(k,j){var i=this.generateLinkURL(k);
        j=j||document.createElement("A");j.setAttribute("href",i);j.setAttribute("target","_blank");
        j.setAttribute("data-"+this.dataAttributeName,this.id);this.enhanceLinkEngagement(j,i);
        return j};g.generateDialog=function(j){var i=this.generateLinkURL(j);this._triggerDialog(i)
    };g.enhanceLinkEngagement=function(k,i){var j=this||g;i=i||k.getAttribute("href");
        h.addEventListener(k,"click",this._onLinkEngaged.bind(this,i))};g.getDialogOptions=function(){var k,l="status=1",j={width:this.dialogDimensions.width,height:this.dialogDimensions.height};
        j.top=(window.screen.availHeight-j.height)/2;j.left=(window.screen.availWidth-j.width)/2;
        for(k in j){if(j.hasOwnProperty(k)){l+=", "+k+"="+j[k]}}return l};g.getDialogDebugData=function(i){return{data:this.normalizeData(i),dialogUrl:this.generateLinkURL(i)}
    };g._triggerDialog=function(i){if(this.preventDialog){window.location.href=i;return
    }window.open(i,"_blank",this.getDialogOptions())};g._onLinkEngaged=function(i,j){h.preventDefault(j);
        this._triggerDialog(i)};d.exports=f},{"@marcom/ac-dom-events":162,qs:174}],189:[function(c,d,a){var f=c("./NetworkAction");
    var b=function(h){var g={url:h.url,description:h.description};if(h.media){g.media=h.media
    }return g};d.exports=new f(b,{id:"pinterest-share",baseLinkPath:"http://www.pinterest.com/pin/create/button",dialogDimensions:{width:750,height:450}})
},{"./NetworkAction":188}],190:[function(c,d,a){var f=c("./NetworkAction");var b=function(g){return{url:g.url,title:g.title,pic:g.media}
};d.exports=new f(b,{id:"qq-weibo-share",baseLinkPath:"http://v.t.qq.com/share/share.php",dialogDimensions:{width:658,height:506}})
},{"./NetworkAction":188}],191:[function(c,d,a){var f=c("./NetworkAction");var b=function(g){return{url:g.url,title:g.title,pics:g.media,summary:g.description}
};d.exports=new f(b,{id:"qzone-share",baseLinkPath:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",dialogDimensions:{width:620,height:645}})
},{"./NetworkAction":188}],192:[function(c,d,a){var f=c("./NetworkAction");var b=function(g){return{url:g.url,title:g.title}
};d.exports=new f(b,{id:"renren-share",baseLinkPath:"http://www.connect.renren.com/share/sharer",dialogDimensions:{width:500,height:315}})
},{"./NetworkAction":188}],193:[function(c,d,a){var f=c("./NetworkAction");var b=function(h){var g={clickthru:h.url,caption:h.description};
    if(h.media){g.source=h.media}return g};d.exports=new f(b,{id:"tumblr-share",baseLinkPath:"http://www.tumblr.com/share/photo",dialogDimensions:{width:450,height:432}})
},{"./NetworkAction":188}],194:[function(c,d,a){var f=c("./NetworkAction");var b=function(h){var g={tweet_id:h.messageId};
    return g};d.exports=new f(b,{id:"twitter-favorite",baseLinkPath:"https://twitter.com/intent/favorite",dialogDimensions:{width:550,height:420}})
},{"./NetworkAction":188}],195:[function(c,d,a){var f=c("./NetworkAction");var b=function(h){var g={in_reply_to:h.messageId};
    if(h.hashtags){g.hashtags=h.hashtags}return g};d.exports=new f(b,{id:"twitter-reply",baseLinkPath:"https://twitter.com/intent/tweet",dialogDimensions:{width:550,height:420}})
},{"./NetworkAction":188}],196:[function(c,d,a){var f=c("./NetworkAction");var b=function(h){var g={tweet_id:h.messageId};
    return g};d.exports=new f(b,{id:"twitter-retweet",baseLinkPath:"https://twitter.com/intent/retweet",dialogDimensions:{width:550,height:420}})
},{"./NetworkAction":188}],197:[function(c,d,a){var f=c("./NetworkAction");var b=function(h){var g={url:h.url,text:h.description};
    if(h.hashtags){g.hashtags=h.hashtags}return g};d.exports=new f(b,{id:"twitter-tweet",baseLinkPath:"https://twitter.com/intent/tweet",dialogDimensions:{width:550,height:420}})
},{"./NetworkAction":188}],198:[function(c,d,a){var f=c("./NetworkAction");var b=function(g){return{url:g.url,title:g.title,pic:g.media}
};d.exports=new f(b,{id:"weibo-share",baseLinkPath:"http://service.weibo.com/share/share.php",dialogDimensions:{width:650,height:426}})
},{"./NetworkAction":188}],199:[function(b,c,a){c.exports=function d(h,g,f){if(!g){return h
}f=f||/{([^{}]*)}/g;return h.replace(f,function(j,i){var k=g[i];return(typeof k==="string"||typeof k==="number"||typeof k==="boolean")?k:j
})}},{}],200:[function(b,c,a){var f=function(g){this.el=g};var d=f.prototype;d.on=function(){this.el.addEventListener.apply(this.el,arguments)
};d.off=function(){this.el.removeEventListener.apply(this.el,arguments)};d.once=function(i,h){var g=function(){h();
    this.off(i,g)}.bind(this);this.on(i,g)};d.trigger=function(h,i){var g=new CustomEvent(h,i);
    this.el.dispatchEvent(g)};c.exports=f},{}],201:[function(b,d,a){var h=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var g=function(){h.call(this)};var c=h.prototype;g.prototype=Object.create(c);var f=g.prototype;
    f.constructor=g;f.once=function(j,l,k){if(k){var i=function(){l.apply(k,arguments)
    };c.once.apply(this,[j,i])}else{c.once.apply(this,arguments)}};f.on=function(j,l,i){if(arguments.length>2){if(!this._boundListeners){this._boundListeners={}
    }if(!this._boundListeners[j]){this._boundListeners[j]=[]}var k=l.bind(i);this._boundListeners[j].push([l,i,k]);
        return c.on.call(this,j,k)}else{return c.on.apply(this,arguments)}};f.off=function(m,q,l){if(arguments.length>2){try{var o=this._boundListeners[m];
        var k=0;var j=o.length;for(;k<j;k++){if(o[k][0]===q&&o[k][1]===l){var n=o.splice(k,1)[0];
            return c.off.call(this,m,n[2])}}}catch(p){}}else{return c.off.apply(this,arguments)
    }};f.destroy=function(){this._boundListeners=undefined;c.destroy.call(this)};d.exports=g
},{"@marcom/ac-event-emitter-micro":46}],202:[function(b,c,a){c.exports=b("./utils/urlOptimizer/OptimizeVideoUrl")
},{"./utils/urlOptimizer/OptimizeVideoUrl":251}],203:[function(m,b,w){var k=m("../event-emitter-shim/EventEmitterShim");
    var r=m("../dom-emitter/DOMEmitterMicro");var f=m("../video/VideoFactory").create;
    var q=m("@marcom/ac-dom-nodes/insertLastChild");var c=m("@marcom/ac-classlist/add");
    var l=m("@marcom/ac-classlist/remove");var v=m("@marcom/ac-useragent");var g=m("@marcom/ac-fullscreen");
    var i=m("../posterframe/PosterFrameFactory");var n=m("@marcom/ac-feature/isRetina")();
    var h=m("@marcom/ac-feature/isDesktop")();var u=v.browser.safari&&v.os.osx;var s=v.browser.ie&&v.browser.version.major===9;
    var x="user-hover";var j=m("@marcom/ac-console").log;var d=m("./event/EventsToForward");
    var t=m("./event/ReadyStateChangeEvents");var p=function(y){y=y||{};this.el=y.el||document.createElement("div");
        this._elementEmitter=new r(this.el);this.options=y;k.call(this);this._controlsFactory=y.controlsFactory;
        this._urlOptimizer=y.urlOptimizer;this._maxWidth=y.maxWidth||Math.min(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,1280);
        this._lastMouseCoords={};c(this.el,"ac-video-player");this._videoImpl=f(y,this.el);
        this._cachedPiPMode=this.isPictureInPicture();this._cachedReadyState=this.getReadyState();
        this._cachedVisibleTracksLength=0;this.el.appendChild(this._videoImpl.getMediaElement());
        if(y.poster||typeof(y.poster)==="undefined"){this._initPoster(y.poster)}this._bindMethods();
        this._addEventListeners();if(y.stateModule){this._initStates(y.stateModule)}if(!h||y.controls){this._initControls()
        }if(y.parentElement){y.parentElement.appendChild(this.el)}};p.LOADEDMETADATA=1;
    p.LOADEDDATA=2;p.CANPLAY=3;p.CANPLAYTHROUGH=4;var a=k.prototype;p.prototype=Object.create(a);
    var o=p.prototype;o.constructor=p;o._bindMethods=function(){this._onStart=this._onStart.bind(this);
        this._onEnded=this._onEnded.bind(this);this._onTimeUpdate=this._onTimeUpdate.bind(this);
        this._onCaptionsChanged=this._onCaptionsChanged.bind(this);this._forwardEvent=this._forwardEvent.bind(this);
        this._onPresentationModeChanged=this._onPresentationModeChanged.bind(this);this._forwardFullScreenChangeEvent=this._forwardNamedEvent.bind(this,"fullscreen:change");
        this._forwardEnterFullScreenEvent=this._forwardNamedEvent.bind(this,"enterfullscreen");
        this._forwardExitFullScreenEvent=this._forwardNamedEvent.bind(this,"exitfullscreen");
        this._forwardReadyStateChange=this._forwardReadyStateChange.bind(this);this._onFocusIn=this._onFocusIn.bind(this);
        this._onFocusOut=this._onFocusOut.bind(this);this._showControls=this._showControls.bind(this);
        this._hideControls=this._hideControls.bind(this);this._onClick=this._onClick.bind(this);
        this._onUserInteraction=this._onUserInteraction.bind(this);this._onMouseLeave=this._onMouseLeave.bind(this);
        this._onMouseOut=this._onMouseOut.bind(this)};o._addEventListeners=function(){var z=0;
        var y=d.length;for(;z<y;z++){this._videoImpl.on(d[z],this._forwardEvent)}z=0;y=t.length;
        for(;z<y;z++){this._videoImpl.on(t[z],this._forwardReadyStateChange)}this._videoImpl.on("timeupdate",this._onTimeUpdate);
        this._videoImpl.on("webkitpresentationmodechanged",this._onPresentationModeChanged);
        this._videoImpl.on("addtrack",this._forwardEvent);this._videoImpl.on("change",this._forwardEvent);
        this._videoImpl.on("change",this._onCaptionsChanged);this._videoImpl.on("removetrack",this._forwardEvent);
        if(h){g.on("enterfullscreen",this._forwardEnterFullScreenEvent);g.on("exitfullscreen",this._forwardExitFullScreenEvent);
            g.on("enterfullscreen",this._forwardFullScreenChangeEvent);g.on("exitfullscreen",this._forwardFullScreenChangeEvent)
        }else{if(v.os.ios){this._videoImpl.on("webkitbeginfullscreen",this._forwardEnterFullScreenEvent);
            this._videoImpl.on("webkitendfullscreen",this._forwardExitFullScreenEvent);this._videoImpl.on("webkitbeginfullscreen",this._forwardFullScreenChangeEvent);
            this._videoImpl.on("webkitendfullscreen",this._forwardFullScreenChangeEvent)}}this._elementEmitter.on("focusin",this._onFocusIn);
        this._elementEmitter.on("focusout",this._onFocusOut)};o._removeEventListeners=function(){var z=0;
        var y=d.length;for(;z<y;z++){this._videoImpl.off(d[z],this._forwardEvent)}z=0;y=t.length;
        for(;z<y;z++){this._videoImpl.off(t[z],this._forwardReadyStateChange)}this._videoImpl.off("timeupdate",this._onTimeUpdate);
        this._videoImpl.off("webkitpresentationmodechanged",this._onPresentationModeChanged);
        if(h){g.off("enterfullscreen",this._forwardEnterFullScreenEvent);g.off("exitfullscreen",this._forwardExitFullScreenEvent);
            g.off("enterfullscreen",this._forwardFullScreenChangeEvent);g.off("exitfullscreen",this._forwardFullScreenChangeEvent)
        }else{if(v.os.ios){this._videoImpl.off("webkitbeginfullscreen",this._forwardEnterFullScreenEvent);
            this._videoImpl.off("webkitendfullscreen",this._forwardExitFullScreenEvent);this._videoImpl.off("webkitbeginfullscreen",this._forwardFullScreenChangeEvent);
            this._videoImpl.off("webkitendfullscreen",this._forwardFullScreenChangeEvent)}}this._elementEmitter.off("focusin",this._onFocusIn);
        this._elementEmitter.off("focusout",this._onFocusOut);this._elementEmitter.off("mouseenter",this._onUserInteraction);
        if(this.controls){this.controls.el.removeEventListener("mousemove",this._onUserInteraction,true);
            this.controls.el.removeEventListener("click",this._onUserInteraction,true)}if(this.states){this.states.el.removeEventListener("click",this._onUserInteraction);
            this.states.el.removeEventListener("mousemove",this._onUserInteraction)}if(this._blockade){this._blockade.off("mouseenter",this._onUserInteraction);
            this._blockade.off("mousemove",this._onUserInteraction);this._blockade.off("click",this._onUserInteraction);
            this._elementEmitter.off("click",this._onClick);if("onmouseleave" in this.el){this._blockade.off("mouseleave",this._onMouseLeave)
            }else{this._blockade.off("mouseout",this._onMouseOut)}clearTimeout(this._userInteractionTimeout)
        }clearTimeout(this._userInteractionTimeout)};o._forwardReadyStateChange=function(){var y=this.getReadyState();
        if(y>this._cachedReadyState||y===0){this._cachedReadyState=y;this.trigger("readystatechange",{readyState:y})
        }};o._forwardEvent=function(y){j(y.type+" time:"+this.getCurrentTime());this.trigger(y.type)
    };o._forwardNamedEvent=function(y){j(y+" time:"+this.getCurrentTime());this.trigger(y)
    };o._onCaptionsChanged=function(y){var z=this.getVisibleTextTracks().length;if(z>0&&this._cachedVisibleTracksLength===0){this.trigger("texttrackshow")
    }else{if(z===0&&this._cachedVisibleTracksLength>0){this.trigger("texttrackhide")
    }}this._cachedVisibleTracksLength=z};o._onTimeUpdate=function(){this.trigger("timeupdate",{currentTime:this.getCurrentTime()})
    };o.load=function(C,B,A,z){if(!Array.isArray(C)){C=[C]}if(B&&!Array.isArray(B)){B=[{src:B}]
    }this._cachedReadyState=0;if(this._urlOptimizer){if(!B){B=C.map(this._urlOptimizer.getCaptionsSource).filter(function(D){return(!!D)
    })}var y=this.getVisibleTextTracks();if(y&&y.length&&B&&B.length){B[0].mode="showing"
    }C=C.map(function(D){return this._urlOptimizer.getVideoSource(D,this._calcMaxWidth(),null,{maxWidth:this._maxWidth})
    }.bind(this))}this.once("play",function(){if(!s&&!u){this.once("timeupdate",this._onStart)
    }else{this.once("timeupdate",this._onStart,function(){return this.getCurrentTime()>0
    }.bind(this))}}.bind(this));if(this._poster){this._poster.show()}if(this.options.autoplay&&h){this.once("loadstart",function(){this.play()
    }.bind(this))}if(z&&this.states){this.states.setState("none");if(!this._sharingButton&&this.controls){this._sharingButton=this.controls.el.querySelector(".controls-sharing-button")
    }if(z.sharing){if(this._sharingButton){l(this._sharingButton,"sharing-unsupported")
    }this.states.setData(z.sharing)}else{if(this._sharingButton){c(this._sharingButton,"sharing-unsupported")
    }this.states.setData(null)}}this._videoImpl.load(C,B,A)};o._calcMaxWidth=function(){if(this.el.parentElement){return this.el.parentElement.clientWidth
    }else{return this._maxWidth}};o._onPresentationModeChanged=function(y){this._forwardEvent(y);
        var z=this.isPictureInPicture();if(this._cachedPiPMode!==z){this._cachedPiPMode=z;
            j("pictureinpicture:change to "+z);this.trigger("pictureinpicture:change")}};o.appendTo=function(y){q(this.el,y)
    };o.getTextTracks=function(){return Array.prototype.slice.call(this._videoImpl.getTextTracks())
    };o.getVisibleTextTracks=function(){var y=Array.prototype.slice.call(this._videoImpl.getTextTracks());
        if(y&&y.length){y=y.filter(function(z){return z.mode==="showing"})}return y};o.getFullScreenElement=function(){if(!h){return this.getMediaElement()
    }else{return this.el}};o.getFullScreenEnabled=function(){return g.fullscreenEnabled(this.getFullScreenElement())
    };o.isFullscreen=function(){if(h){return g.fullscreenElement()===this.getFullScreenElement()
    }else{return this._videoImpl.isFullscreen()}};o.requestFullscreen=function(){g.requestFullscreen(this.getFullScreenElement())
    };o.exitFullscreen=function(){g.exitFullscreen(this.getFullScreenElement())};o.toggleFullscreen=function(){if(this.isFullscreen()){this.exitFullscreen()
    }else{this.requestFullscreen()}};o._initStates=function(y){this.states=y.create(this);
        this.el.appendChild(this.states.el);y.defaultStates.create(this)};o._initControls=function(){var y;
        if(h){y=this._instantiateDefaultCustomUIControls();this.el.appendChild(this._blockade.el)
        }else{this.setControls(true)}this.controls=y};o._onFocusIn=function(){clearTimeout(this._focusOutTimer);
        this._focusOutTimer=null;this._hasFocus=true;this._showControls()};o._onFocusOut=function(y){this._focusOutTimer=setTimeout(function(){if(this._hasFocus&&!this.el.contains(document.activeElement)){this._hasFocus=false;
        this._hideControls()}}.bind(this),100)};o._showControls=function(){c(this.el,x)
    };o._hideControls=function(){l(this.el,x)};o._instantiateDefaultCustomUIControls=function(){var y=this._controlsFactory.create({player:this,basePath:this.options.localizationBasePath});
        var z=y.el;if(z.parentNode!==this.el){this.el.appendChild(z)}this._videoImpl.setControls(false);
        this._blockade=new r(document.createElement("div"));c(this._blockade.el,"ac-video-blockade");
        this._blockade.on("mouseenter",this._onUserInteraction,true);this._blockade.on("mousemove",this._onUserInteraction,true);
        this._blockade.on("click",this._onUserInteraction,true);y.el.addEventListener("mousemove",this._onUserInteraction,true);
        y.el.addEventListener("click",this._onUserInteraction,true);if(this.states){this.states.el.addEventListener("mousemove",this._onUserInteraction,true);
            this.states.el.addEventListener("click",this._onUserInteraction,true)}this._elementEmitter.on("click",this._onClick);
        if("onmouseleave" in this.el){this._blockade.on("mouseleave",this._onMouseLeave)
        }else{this._blockade.on("mouseout",this._onMouseOut,true)}return y};o._onClick=function(){this._hasFocus=false
    };o._onMouseLeave=function(y){if(!this._hasFocus&&(!y||!this.el.contains(y.toElement))){window.clearTimeout(this._userInteractionTimeout);
        this._hideControls();this._lastMouseCoords={}}};o._onMouseOut=function(y){if(!this.controls.el.contains(y.target)&&y.target!==this.controls.el){this._onMouseLeave()
    }};o._isInSharingState=function(y){return(this.states&&y.target===this.states.el&&this.states.getCurrentState()!=="sharing")
    };o._onUserInteraction=function(y){if(!this.getCurrentSrc()||this._isInSharingState(y)){return
    }this._showControls();window.clearTimeout(this._userInteractionTimeout);this._userInteractionTimeout=window.setTimeout(function(){if(!this._hasFocus){this._hideControls()
    }}.bind(this),this.options.controlsTimeoutDuration)};o._onStart=function(){if(this._poster){this._poster.hide()
    }this.once("ended",this._onEnded)};o._onEnded=function(){if(this.isFullscreen()){this.exitFullscreen()
    }this.once("timeupdate",this._onStart);if(this._poster){this._poster.show()}};o._initPoster=function(y){this._poster=i({player:this,video:this._videoImpl,useNativePoster:!h,is2x:n,src:y});
        if(this._poster.el){this.el.appendChild(this._poster.el)}};o.once=function(A,D,B){if(arguments.length<3||typeof B==="object"){a.once.apply(this,arguments)
    }else{var z=arguments;var C=Array.prototype.slice.call(arguments,2);var y=function(){if(C.every(function(E){return !!E()
        })){z[1].apply(this,z);this.off(z[0],y)}}.bind(this);this.on(z[0],y)}};o.getMediaElement=function(){return this._videoImpl.getMediaElement()
    };o.play=function(){j("play called");this._videoImpl.play()};o.pause=function(){this._videoImpl.pause()
    };o.seek=function(y){this.setCurrentTime.apply(this,arguments)};o.addTextTrack=function(y){this._videoImpl.addTextTrack(y)
    };o.getReadyState=function(){return this._videoImpl.getMediaElement().readyState
    };o.getPreload=function(){return this._videoImpl.getPreload()};o.setPoster=function(y){this._poster.setSrc(y)
    };o.getVolume=function(){return this._videoImpl.getVolume()};o.getMuted=function(){return this._videoImpl.getMuted()
    };o.getCurrentTime=function(){return this._videoImpl.getCurrentTime()};o.getDuration=function(){return this._videoImpl.getDuration()
    };o.getPaused=function(){return this._videoImpl.getPaused()};o.getEnded=function(){return this._videoImpl.getEnded()
    };o.setCurrentTime=function(y){return this._videoImpl.setCurrentTime(y)};o.setVolume=function(y){return this._videoImpl.setVolume(y)
    };o.setMuted=function(y){this._videoImpl.setMuted(y)};o.setSrc=function(y){this._videoImpl.setSrc(y)
    };o.getCurrentSrc=function(){return this._videoImpl.getCurrentSrc()};o.setControls=function(y){return this._videoImpl.setControls(y)
    };o.getMediaHeight=function(){return this._videoImpl.getMediaElement().videoHeight
    };o.getMediaWidth=function(){return this._videoImpl.getMediaElement().videoWidth
    };o.supportsPictureInPicture=function(){return this._videoImpl.supportsPictureInPicture()
    };o.isPictureInPicture=function(){return this._videoImpl.isPictureInPicture()};
    o.setPictureInPicture=function(y){return this._videoImpl.setPictureInPicture(y)
    };o.destroy=function(){this._removeEventListeners();this._videoImpl.destroy();if(this.controls){this.controls.destroy();
        this.controls=null}this._videoImpl=undefined;this.el.innerHTML="";k.prototype.destroy.call(this)
    };b.exports=p},{"../dom-emitter/DOMEmitterMicro":200,"../event-emitter-shim/EventEmitterShim":201,"../posterframe/PosterFrameFactory":210,"../video/VideoFactory":253,"./event/EventsToForward":204,"./event/ReadyStateChangeEvents":205,"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7,"@marcom/ac-console":8,"@marcom/ac-dom-nodes/insertLastChild":128,"@marcom/ac-feature/isDesktop":49,"@marcom/ac-feature/isRetina":51,"@marcom/ac-fullscreen":132,"@marcom/ac-useragent":109}],204:[function(b,c,a){c.exports=["loadstart","progress","suspend","abort","error","emptied","stalled","play","pause","loadedmetadata","loadeddata","waiting","playing","canplay","canplaythrough","seeking","seeked","ended","ratechange","durationchange","volumechange","addtrack","change","removetrack"]
},{}],205:[function(b,c,a){c.exports=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","waiting","canplay","canplaythrough"]
},{}],206:[function(f,c,g){var b=f("../Player");var a=f("@marcom/ac-string/supplant");
    var j=f("../../ui/localization/Localization");var d='<div class="ac-video-not-supported">\n    <div class="ac-video-not-supported-content">\n        <p class="ac-video-not-supported-headline">{novideosupportheadline}</p>\n        <p class="ac-video-not-supported-details">{novideosupportdetails}</p>\n    </div>\n</div>';
    var h=f("../../ui/localization/DefaultLabelStrings");c.exports=function i(k){var l=document.createElement("div");
        l.className="ac-video-player";var n={el:l,notSupported:true,appendTo:function(p){p.appendChild(l)
        }};var m=function(){}.bind(n);for(var o in b.prototype){if(!n.hasOwnProperty(o)){n[o]=m
        }}j.getTranslation({callback:function(p){l.innerHTML=a(d,Object.assign(h,p.attributes))
        },basePath:k.localizationBasePath});return n}},{"../../ui/localization/DefaultLabelStrings":244,"../../ui/localization/Localization":245,"../Player":203,"@marcom/ac-string/supplant":199}],207:[function(g,d,i){var b=g("../Player");
    var a=g("@marcom/ac-useragent");var j=g("./createNoSupportPlayer");var h=g("@marcom/ac-feature/isDesktop")();
    var c=!(a.browser.ie&&a.browser.version.major<=8);d.exports=function f(k){if(!k){k={}
    }else{if(arguments.length>1){k=Object.assign.apply(null,Array.prototype.slice.apply(arguments))
    }}if(!c||k.noSupport){return j(k)}if(!k.components){k.components=g("../../ui/DefaultComponents")
    }if(typeof k.controls==="undefined"){k.controls=true}if(!k.controlsImplementation){k.controlsImplementation=g("../../ui/ControlBar")
    }if(!k.controlsFactory){k.controlsFactory=g("../../ui/ControlsFactory")({controlsImplementation:k.controlsImplementation,components:k.components,template:k.controlsTemplate})
    }if(typeof k.urlOptimizer!=="undefined"&&k.urlOptimizer===true||k.urlOptimizer==="true"){k.urlOptimizer=g("../../optimizeVideoUrl")
    }if(!k.sources&&!k.src){k.sources=[]}else{k.sources=(k.sources)?k.sources:(k.src)?[k.src]:[]
    }k.autoplay=(k.autoplay!==undefined)?k.autoplay:h;if(!k.controlsTimeoutDuration){k.controlsTimeoutDuration=5000
    }var l=new b(k);if(k.sources&&k.sources.length){l.load(k.sources,k.textTracks,k.startTime)
    }return l}},{"../../optimizeVideoUrl":202,"../../ui/ControlBar":224,"../../ui/ControlsFactory":225,"../../ui/DefaultComponents":226,"../Player":203,"./createNoSupportPlayer":206,"@marcom/ac-feature/isDesktop":49,"@marcom/ac-useragent":109}],208:[function(d,f,c){var b=d("./createPlayer");
    var g=d("../../states/StateModule");f.exports=function a(h){if(arguments.length>1){h=Object.assign.apply(null,Array.prototype.slice.apply(arguments))
    }if(h.localizationBasePath){h.sharing.basePath=h.localizationBasePath}var i=Object.assign({},h,{stateModule:(h.sharing)?g(h.sharing):undefined});
        return b(i)}},{"../../states/StateModule":212,"./createPlayer":207}],209:[function(b,a,d){var g=b("@marcom/ac-classlist/add");
    var i=b("@marcom/ac-classlist/remove");var h="ac-video-poster";var j="ac-video-poster-hide";
    var c=function(k){this._initialize(k)};var f=c.prototype;f._initialize=function(k){var l=k.src;
        this.el=k.el||document.createElement("div");this._imgElement=document.createElement("img");
        this._imgElement.src=l;this._imgElement.alt="";this.el.appendChild(this._imgElement);
        g(this.el,h)};f.hide=function(){g(this.el,j)};f.show=function(){i(this.el,j)};f.setSrc=function(k){this._imgElement.src=k
    };a.exports=c},{"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7}],210:[function(c,d,b){var f=c("./PosterFrame");
    var g={"1x":"https://images.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480.jpg","2x":"https://images.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg"};
    d.exports=function a(h){h.src=h.src||((h.is2x)?g["2x"]:g["1x"]);if(!h.useNativePoster){return new f(h)
    }else{h.video.setPoster(h.src);var j=false;var i;return{show:function(){j=true;
        if(i){h.video.setPoster(i);i=null}},hide:function(){j=false},setSrc:function(k){if(!j){i=k
    }else{h.video.setPoster(k)}}}}}},{"./PosterFrame":209}],211:[function(c,b,g){var a="ac-video-states";
    var l="ac-video-states-item";var f="inactive";var j=c("@marcom/ac-classlist/add");
    var i=c("@marcom/ac-classlist/remove");var m=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var d=c("@marcom/ac-console").log;var k=function(n){m.call(this);this.el=n.container||document.createElement("div");
        j(this.el,a+"-container");this._stateComponents={};this._currentState="none"};var h=k.prototype=Object.create(m.prototype);
    h.addState=function(o,n){if(!this._stateComponents[o]){this._stateComponents[o]=n;
        j(n.el,f);j(n.el,l);if(n.el.parentElement!==this.el){this.el.appendChild(n.el)}}else{throw new Error("You can only add state:"+o+" once, remove the old one if you wish to replace it")
    }};h.removeState=function(n){this.el.removeChild(this._stateComponents[n].el);delete this._stateComponents[n]
    };h.getCurrentState=function(){return this._currentState};h._hideComponent=function(n){return new Promise(function(p,o){if(typeof n.hide==="function"){var q=n.hide();
        if(q instanceof Promise){q.then(p)}else{p()}}else{p()}}).then(function(p,o){j(n.el,f)
    })};h._showComponent=function(n){i(n.el,f);return new Promise(function(p,o){if(typeof n.show==="function"){var q=n.show();
        if(q instanceof Promise){q.then(p)}else{p()}}else{p()}})};h.setState=function(p){d("hiding state:"+this._currentState);
        if(this._currentState===p){return Promise.resolve()}var o=this._stateComponents[this._currentState];
        var n=(o)?this._hideComponent(o):Promise.resolve();return n.then(function(r,q){i(this.el,this._currentState);
            this._currentState=p;d("showing state:"+this._currentState);if(this._currentState==="none"){j(this.el,"none")
            }else{i(this.el,"none")}o=this._stateComponents[this._currentState];if(o){this._showComponent(o).then(function(){j(this.el,this._currentState);
                this.trigger("statechange")}.bind(this)).then(r)}else{j(this.el,this._currentState);
                this.trigger("statechange");return Promise.resolve()}}.bind(this))};h.destroy=function(){for(var n in this._stateComponents){if(this._stateComponents.hasOwnProperty(n)&&typeof this._stateComponents[n].destroy==="function"){this._stateComponents[n].destroy()
    }}this._stateComponents=null;m.prototype.destroy.call(this)};h.setData=function(o){for(var n in this._stateComponents){if(this._stateComponents.hasOwnProperty(n)&&typeof(this._stateComponents[n].setData)==="function"){this._stateComponents[n].setData(o)
    }}};k.create=function(n){return new k(n)};b.exports=k},{"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7,"@marcom/ac-console":8,"@marcom/ac-event-emitter-micro":46}],212:[function(c,d,b){var f=c("./StateController");
    var a=c("./VideoStateManager");d.exports=function(g){return{create:function(h){var j=new f({startState:"initial"});
        var i=new a(h,j);return{destroy:function(){i.destroy();j.destroy()},addState:j.addState.bind(j),removeState:j.removeState.bind(j),setState:j.setState.bind(j),getCurrentState:j.getCurrentState.bind(j),setData:j.setData.bind(j),on:j.on.bind(j),off:j.off.bind(j),once:j.once.bind(j),el:j.el}
    },defaultStates:c("./default")(g)}}},{"./StateController":211,"./VideoStateManager":213,"./default":217}],213:[function(c,d,b){var a=function(h,g){this._player=h;
    this._states=g;this._bindMethods();this._addEventListeners()};var f=a.prototype;
    f._bindMethods=function(){this._videoStarted=this._videoStarted.bind(this);this._videoEnded=this._videoEnded.bind(this)
    };f._addEventListeners=function(){this._player.once("timeupdate",this._videoStarted);
        this._player.once("playing",this._videoStarted);this._player.on("ended",this._videoEnded)
    };f._removeEventListeners=function(){this._player.off("play",this._videoStarted);
        this._player.off("ended",this._videoEnded)};f._videoStarted=function(g){if(this._player.getCurrentTime()<=0){this._player.once("timeupdate",this._videoStarted);
        return}this._states.setState("none")};f._videoEnded=function(g){this._states.setState("ended");
        this._player.once("play",this._videoStarted);this._player.once("playing",this._videoStarted)
    };f.destroy=function(){this._removeEventListeners();this._player=null;this._states=null
    };d.exports=a},{}],214:[function(b,c,a){(function(k){b("@marcom/ac-polyfills/Promise");
    var f=b("@marcom/ac-keyboard");var r=b("@marcom/ac-keyboard/keyMap");var m=b("@marcom/ac-classlist/add");
    var n=b("@marcom/ac-classlist/remove");var i=b("@marcom/ac-function/debounce");
    var t=b("@marcom/ac-useragent");var o=k("PGRpdiBjbGFzcz0iZW5kLXN0YXRlIj4KICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iY2xvc2UtYnV0dG9uIiBhcmlhLWxhYmVsPSJ7Y2xvc2V9Ij48aSBjbGFzcz0ic2hhcmluZy1pY29uIj7vgIk8L2k+PC9idXR0b24+CiAgICAgICAgPGRpdiBjbGFzcz0idmVydC1jZW50ZXItd3JhcCI+CiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9InJlcGxheS1idXR0b24iPntyZXBsYXl9PGkgY2xhc3M9InNoYXJpbmctaWNvbiI+74CiPC9pPjwvYnV0dG9uPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJzaGFyaW5nLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ic2hhcmluZy1idXR0b24tY29udGFpbmVyIj4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJmYWNlYm9vay1zaGFyZSIgYXJpYS1sYWJlbD0ie2ZhY2Vib29rc2hhcmV9Ij48L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJ0d2l0dGVyLXNoYXJlIiBhcmlhLWxhYmVsPSJ7dHdpdHRlcnNoYXJlfSI+PC9idXR0b24+CiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iY29weS1saW5rIiBhcmlhLWxhYmVsPSJ7Y29weWxpbmt9Ij48L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJjb3B5LWVtYmVkLWNvZGUiIGFyaWEtbGFiZWw9Intjb3B5ZW1iZWR9Ij48L2J1dHRvbj4KICAgICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InRleHRhcmVhLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICA8c3Bhbj4KICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9ImNvcHktYXJlYSBmb3JtLXRleHRib3ggZm9ybS10ZXh0Ym94LXRleHQgZGlzYWJsZWQiIHR5cGU9InRleHQiIGlkPSJjb3B5LWxpbmsiIGFyaWEtbGFiZWw9Intjb3B5YXJlYX0iPjwvaW5wdXQ+CiAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgPC9kaXY+CjwvZGl2Pg==","base64");
    var u=b("@marcom/ac-string/supplant");var v=b("../../ui/localization/Localization");
    var p=b("@marcom/ac-accessibility/helpers/TabManager");var s=10000;var j=r.ESCAPE;
    var d=500;var l=b("./SharingState");var h=function(w){this._initializeElement(w.el,w.template||o);
        this._replayButton=this.el.querySelector(".replay-button");this._sharingButtonContainer=this.el.querySelector(".sharing-button-container");
        l.call(this,w);this._hideTimerDuration=(w.endStateTimeout!==undefined)?w.endStateTimeout:s;
        this._hideTimer=null};var g=l.prototype;var q=h.prototype=Object.create(g);q._bindMethods=function(){g._bindMethods.call(this);
        this._replayClicked=this._replayClicked.bind(this);this._cancelTimer=this._cancelTimer.bind(this);
        this._setHideTimer=this._setHideTimer.bind(this);this._onMouseOut=this._onMouseOut.bind(this);
        this._onEscapeKey=this._onEscapeKey.bind(this);this._onResize=i(this._onResize.bind(this),60).bind(this)
    };q._addEventListeners=function(){g._addEventListeners.call(this);this._replayButton&&this._replayButton.addEventListener("click",this._replayClicked);
        this.el.addEventListener("focusin",this._cancelTimer);this.el.addEventListener("mouseover",this._cancelTimer);
        this.el.addEventListener("mouseout",this._onMouseOut);if(this._sharingButtonContainer){this._player.once("loadeddata",this._onResize);
            window.addEventListener("resize",this._onResize)}f.onDown(j,this._onEscapeKey)};
    q._removeEventListeners=function(){g._removeEventListeners.call(this);this._replayButton&&this._replayButton.removeEventListener("click",this._replayClicked);
        this.el.removeEventListener("focusin",this._cancelTimer);this.el.removeEventListener("mouseover",this._cancelTimer);
        this.el.removeEventListener("mouseout",this._onMouseOut);window.removeEventListener("resize",this._onResize)
    };q._onResize=function(){if(this._sharingButtonContainer.offsetWidth<=d){m(this._sharingButtonContainer,"small")
    }else{n(this._sharingButtonContainer,"small")}};q._onEscapeKey=function(){if(this._player.states.getCurrentState()==="ended"){this._closeState()
    }};q._onMouseOut=function(){if(this._player.states.getCurrentState()!=="ended"){return
    }else{this._setHideTimer()}};q._setHideTimer=function(){this._cancelTimer();if(this._hideTimerDuration<=0){return
    }this._hideTimer=setTimeout(function(){this._showTextArea(false);this._player.states.setState("initial")
    }.bind(this),this._hideTimerDuration)};q._cancelTimer=function(){if(this._hideTimer){clearTimeout(this._hideTimer);
        this._hideTimer=null}};q._replayClicked=function(){this._player.states.setState("none");
        this._player.setCurrentTime(0);this._player.play();if(this._player.controls){var w=p.getTabbableElements(this._player.controls.el);
            w[0].focus()}};q.show=function(){if(this._hideEndState){m(this.el,"hidden");return
    }else{n(this.el,"hidden")}if(this._player.controls){m(this._player.controls.el,"hidden");
        this._player.controls.el.setAttribute("aria-hidden",true)}this._setHideTimer();
        var w=p.getTabbableElements(this.el);if(w.length){w[0].focus()}};q.hide=function(){if(this._player.controls){n(this._player.controls.el,"hidden");
        this._player.controls.el.removeAttribute("aria-hidden")}this._cancelTimer();return new Promise(function(x,w){this._showTextArea(false);
        x()}.bind(this))};q.setData=function(w){if(!w){this._hideEndState=true}else{this._hideEndState=false
    }g.setData.apply(this,arguments)};q._getAnalyticsSource=function(){return"endslate"
    };q._closeState=function(){this._cancelTimer();this._player.states.setState("initial");
        if(t.browser.edge||t.browser.ie){var w=this._player.el.querySelector(".thumbnail-play");
            m(w,"thumbnail-hide");setTimeout(function(){n(w,"thumbnail-hide")}.bind(this),500)
        }};q.destroy=function(){g.destroy.call(this)};c.exports=h}).call(this,b("buffer").Buffer)
},{"../../ui/localization/Localization":245,"./SharingState":215,"@marcom/ac-accessibility/helpers/TabManager":113,"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7,"@marcom/ac-function/debounce":267,"@marcom/ac-keyboard":140,"@marcom/ac-keyboard/keyMap":142,"@marcom/ac-polyfills/Promise":710,"@marcom/ac-string/supplant":199,"@marcom/ac-useragent":109,buffer:540}],215:[function(b,c,a){(function(f){var m=b("@marcom/ac-classlist/add");
    var n=b("@marcom/ac-classlist/remove");var o=f("PGRpdiBjbGFzcz0ic2hhcmluZy1zdGF0ZSI+CiAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgICAgIDxkaXYgY2xhc3M9InNoYXJpbmctY29udGFpbmVyIj4KICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iY2xvc2UtYnV0dG9uIiBhcmlhLWxhYmVsPSJ7Y2xvc2VzaGFyaW5nfSI+PGkgY2xhc3M9InNoYXJpbmctaWNvbiI+74CJPC9pPjwvYnV0dG9uPgogICAgICAgICAgICA8c3BhbiBjbGFzcz0ic2hhcmluZy1idXR0b24tY29udGFpbmVyIj4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImZhY2Vib29rLXNoYXJlIiBhcmlhLWxhYmVsPSJ7ZmFjZWJvb2tzaGFyZX0iPjwvYnV0dG9uPgogICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0idHdpdHRlci1zaGFyZSIgYXJpYS1sYWJlbD0ie3R3aXR0ZXJzaGFyZX0iPjwvYnV0dG9uPgogICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iY29weS1saW5rIiBhcmlhLWxhYmVsPSJ7Y29weWxpbmt9Ij48L2J1dHRvbj4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNvcHktZW1iZWQtY29kZSIgYXJpYS1sYWJlbD0ie2NvcHllbWJlZH0iPjwvYnV0dG9uPgogICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0idGV4dGFyZWEtY29udGFpbmVyIj4KICAgICAgICAgICAgPHNwYW4+CiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9ImNvcHktYXJlYSBmb3JtLXRleHRib3ggZm9ybS10ZXh0Ym94LXRleHQgZGlzYWJsZWQiIHR5cGU9InRleHQiIGlkPSJjb3B5LWxpbmsiIGFyaWEtbGFiZWw9Intjb3B5YXJlYX0iPjwvaW5wdXQ+CiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJ0ZXh0aW5wdXQtY2xvc2UtYnV0dG9uIiBhcmlhLWxhYmVsPSJ7ZGlzbWlzc2NvcHl9Ij48aSBjbGFzcz0ic2hhcmluZy1pY29uIj7vgIk8L2k+PC9idXR0b24+CiAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj4K","base64").toString();
    var i=f("PGlmcmFtZSBzcmM9IntlbWJlZENvZGVQYXRofXt2aWRlb2lkfXtleHRlbnNpb259IiB3aWR0aD0ie3dpZHRofSIgaGVpZ2h0PSJ7aGVpZ2h0fSIgdGl0bGU9Int0aXRsZX0iIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4K","base64").toString();
    var y="https://www.apple.com/embed/";var j=b("@marcom/ac-console").log;var t=b("@marcom/ac-clipboard/select");
    var g=b("@marcom/ac-social").Dialog;var v=b("@marcom/ac-string/supplant");var x=b("../../ui/localization/Localization");
    var p=b("@marcom/ac-accessibility/helpers/TabManager");var w=b("@marcom/ac-useragent");
    var k=w.os;var s=w.browser.firefox;var l=w.browser.ie;var q=k.ios||k.android;var d=735;
    var u="overflow-hidden";var h=function(z){if(!this.el){this._initializeElement(z.el,z.template)
    }this.options=z;this._player=z.player;this._clickedShareButton=null;this._container=this.el.querySelector(".container");
        this._sharingButtonContainer=this.el.querySelector(".sharing-button-container");
        this._facebookButton=this.el.querySelector(".facebook-share");this._twitterButton=this.el.querySelector(".twitter-share");
        this._copyLinkButton=this.el.querySelector(".copy-link");this._copyEmbedCodeButton=this.el.querySelector(".copy-embed-code");
        this._copyTextArea=this.el.querySelector(".copy-area");this._copyCloseButton=this.el.querySelector(".textinput-close-button");
        this._closeButton=this.el.querySelector(".close-button");this.setData(z);if(q){m(this.el.firstChild,"mobile");
            this._player.on("loadstart",function(){if(this._getClientWidth()>d){m(this.el.firstChild,"mobile-large")
            }}.bind(this))}if(s||l){m(this.el.firstChild,u)}this._bindMethods();this._addEventListeners();
        this._syncSocialShareHidden()};var r=h.prototype;r._initializeElement=function(A,z){if(!A){this.el=document.createElement("div");
        this.el.innerHTML=v((z||o).toString(),x.getTranslation())}else{this.el=A}};r.setData=function(A){this._sharingUrl=A.originatorUrl;
        this._title=A.title;this._description=A.description;this._videoid=A.videoid;this._hideExtension=A.hideExtension;
        this._embedPath=A.embedpath||y;this._hideFacebook=A.hideFacebookShare||false;this._hideTwitter=A.hideTwitterShare||false;
        this._syncSocialShareHidden();if(A.analytics){try{this._initAnalyticsAttributes(A)
        }catch(z){j("ac-analytics-share failed to load, are you sure you've included it?")
        }}};r._bindMethods=function(){this._doFacebookShare=this._doSocialShare.bind(this,g.FACEBOOK_SHARE);
        this._doTwitterShare=this._doSocialShare.bind(this,g.TWITTER_TWEET);this._copyUrl=this._copyUrl.bind(this);
        this._copyEmbedCode=this._copyEmbedCode.bind(this);this._closeCopyArea=this._showTextArea.bind(this,false);
        this._closeState=this._closeState.bind(this)};r._addEventListeners=function(){this._facebookButton&&this._facebookButton.addEventListener("click",this._doFacebookShare);
        this._twitterButton&&this._twitterButton.addEventListener("click",this._doTwitterShare);
        this._copyLinkButton&&this._copyLinkButton.addEventListener("click",this._copyUrl);
        this._copyEmbedCodeButton&&this._copyEmbedCodeButton.addEventListener("click",this._copyEmbedCode);
        this._copyCloseButton&&this._copyCloseButton.addEventListener("click",this._closeCopyArea);
        this._closeButton&&this._closeButton.addEventListener("click",this._closeState)
    };r._removeEventListeners=function(){this._facebookButton&&this._facebookButton.removeEventListener("click",this._doFacebookShare);
        this._twitterButton&&this._twitterButton.removeEventListener("click",this._doTwitterShare);
        this._copyLinkButton&&this._copyLinkButton.removeEventListener("click",this._copyUrl);
        this._copyEmbedCodeButton&&this._copyEmbedCodeButton.removeEventListener("click",this._copyEmbedCode);
        this._copyCloseButton&&this._copyCloseButton.removeEventListener("click",this._closeCopyArea);
        this._closeButton&&this._closeButton.removeEventListener("click",this._closeState)
    };r._syncSocialShareHidden=function(){if(this._facebookButton){if(this._hideFacebook){m(this._facebookButton,"hide-button")
    }else{n(this._facebookButton,"hide-button")}}if(this._twitterButton){if(this._hideTwitter){m(this._twitterButton,"hide-button")
    }else{n(this._twitterButton,"hide-button")}}};r._doSocialShare=function(z){n(this._copyLinkButton,"active");
        n(this._copyEmbedCodeButton,"active");this._showTextArea(false);g.create(z,{url:this._sharingUrl,title:this._title})
    };r._showTextArea=function(z){if(z){m(this._container,"textarea-active");t(this._copyTextArea);
        if(!q){this._copyTextArea.setAttribute("readonly","")}}else{n(this._container,"textarea-active");
        n(this._copyLinkButton,"active");n(this._copyEmbedCodeButton,"active");this._copyTextArea.removeAttribute("readonly");
        if(this._clickedShareButton){this._clickedShareButton.focus()}}};r._copyUrl=function(){this._clearTextArea();
        this._copyTextArea.value=this._sharingUrl;m(this._copyLinkButton,"active");this._showTextArea(true);
        this._clickedShareButton=this._copyLinkButton;t(this._copyTextArea)};r._clearTextArea=function(){window.getSelection().removeAllRanges();
        n(this._copyLinkButton,"active");n(this._copyEmbedCodeButton,"active");this._copyTextArea.removeAttribute("readonly")
    };r._copyEmbedCode=function(){this._clearTextArea();this._copyTextArea.value=v(i,{videoid:this._videoid,embedCodePath:this._embedPath,width:this._player.getMediaWidth(),height:this._player.getMediaHeight(),title:this._title,extension:this._hideExtension?"":".html"});
        m(this._copyEmbedCodeButton,"active");this._showTextArea(true);this._clickedShareButton=this._copyEmbedCodeButton;
        t(this._copyTextArea)};r._focusFirstButton=function(){if(!this._firstButton){this._firstButton=p.getTabbableElements(this._sharingButtonContainer)[0]
    }this._firstButton.focus()};r.show=function(){return new Promise(function(A,z){requestAnimationFrame(function(){var B=function(){this.el.removeEventListener("transitionend",B);
        if(focus){this._focusFirstButton()}A()}.bind(this);this.el.addEventListener("transitionend",B);
        setTimeout(function(){m(this._container,"showing")}.bind(this))}.bind(this))}.bind(this))
    };r.hide=function(){this._clickedShareButton=null;this._showTextArea(false);return new Promise(function(B,A){var z=function(){this.el.removeEventListener("transitionend",z);
        B()}.bind(this);this.el.addEventListener("transitionend",z);setTimeout(function(){n(this._container,"showing")
    }.bind(this))}.bind(this))};r._getClientHeight=function(){return this.el.clientHeight
    };r._getClientWidth=function(){return this.el.clientWidth};r.destroy=function(){this._removeEventListeners()
    };r._closeState=function(){this._showTextArea(false);if(this._player.getCurrentTime()===0||this._player.getEnded()){this._player.states.setState("initial")
    }else{this._player.states.setState("none")}};r._getAnalyticsSource=function(){return"drawer"
    };r._initAnalyticsAttributes=function(C){var E=[];this._facebookButton&&E.push({button:this._facebookButton,title:"facebook",events:"event85"});
        this._twitterButton&&E.push({button:this._twitterButton,title:"twitter",events:"event84"});
        this._copyLinkButton&&E.push({button:this._copyLinkButton,title:"copy-link",events:"event89"});
        this._copyEmbedCodeButton&&E.push({button:this._copyEmbedCodeButton,title:"copy-embed-code",events:"event101"});
        var H=(((C.url&&C.url.indexOf(".m3u8"))!==-1)?"m3u8":"mp4")+" via html5";var I=this._getAnalyticsSource();
        var A=C.duration;var z=C.videoid;var B=this._player.el.id||"player";var G=C.videoid;
        var D=document.location.host;var F=document.head.querySelectorAll('meta[property="analytics-track"]');
        F=F?(F[0].getAttribute("content")):"";E.forEach(function(J){J.button.setAttribute("data-analytics-click","");
            J.button.setAttribute("data-analytics-share",JSON.stringify({title:z,events:J.events,prop2:F+" - "+z+" - "+J.title,prop18:H,eVar49:document.referrer,eVar54:document.location.href,eVar55:F+" - "+z,eVar70:I}))
        }.bind(this))};c.exports=h}).call(this,b("buffer").Buffer)},{"../../ui/localization/Localization":245,"@marcom/ac-accessibility/helpers/TabManager":113,"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7,"@marcom/ac-clipboard/select":123,"@marcom/ac-console":8,"@marcom/ac-social":179,"@marcom/ac-string/supplant":199,"@marcom/ac-useragent":109,buffer:540}],216:[function(b,c,a){(function(h){var n=h("PGRpdiBjbGFzcz0iaW5pdGlhbC1zdGF0ZSBwcmVsb2FkIj4KICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGRpdiBjbGFzcz0icGxheS1idXR0b24tY29udGFpbmVyIj4KICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0icGxheS1idXR0b24gdGh1bWJuYWlsLXBsYXkiIGFyaWEtbGFiZWw9IntwbGF5fSI+PC9idXR0b24+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0icG9zdGVyIj48aW1nIGFsdD0nJz48L2ltZz48L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj4K","base64");
    var k=b("@marcom/ac-classlist/add");var l=b("@marcom/ac-classlist/remove");var f=b("@marcom/ac-string/supplant");
    var d=200;var j=b("../../ui/localization/Localization");var m=b("@marcom/ac-accessibility/helpers/TabManager");
    var g=function(o){this.el=document.createElement("div");this.el.innerHTML=f(n.toString(),j.getTranslation());
        this.playButton=this.el.querySelector(".play-button");this.posterEl=this.el.querySelector(".poster img");
        this.setData(o);this._player=o.player;this.playButton.onclick=this._onClick.bind(this)
    };var i=g.prototype;i._onClick=function(){this._player.play()};i.show=function(){if(this._player.controls){k(this._player.controls.el,"hidden");
        this._player.controls.el.setAttribute("aria-hidden",true)}if(this._player.el.contains(document.activeElement)){this.playButton.focus()
    }};i.hide=function(){if(this._player.controls){l(this._player.controls.el,"hidden");
        this._player.controls.el.removeAttribute("aria-hidden");var o=m.getTabbableElements(this._player.controls.el,true);
        o[0].focus()}};i.setData=function(o){if(o.poster){this.posterEl.src=o.poster}};
    c.exports=g}).call(this,b("buffer").Buffer)},{"../../ui/localization/Localization":245,"@marcom/ac-accessibility/helpers/TabManager":113,"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7,"@marcom/ac-string/supplant":199,buffer:540}],217:[function(c,a,d){var b=c("./StartState");
    var j=c("./SharingState");var i=c("./EndState");var g=c("../../ui/localization/Localization");
    var h={initial:b,sharing:j,ended:i};a.exports=function f(k){var l;if(Array.isArray(k.states)){l={};
        k.states.forEach(function(m){l[m]=h[m]})}else{if(typeof k.states==="object"){l=k.states
    }else{l=h}}return{create:function(m){g.getTranslation({callback:function(o){var r=Object.assign({},{player:m},k);
        for(var p in l){if(l.hasOwnProperty(p)){m.states.addState(p,new l[p](r))}}if(l.initial){m.states.setState("initial")
        }else{m.states.setState("none")}try{var n=c("@marcom/ac-analytics-share").create;
            n(m.states.el)}catch(q){log("Failed to create video observer")}}.bind(this),basePath:k.basePath})
    }}}},{"../../ui/localization/Localization":245,"./EndState":214,"./SharingState":215,"./StartState":216,"@marcom/ac-analytics-share":121}],218:[function(d,g,b){var c=d("@marcom/ac-ajax-xhr");
    var i=d("@marcom/ac-function/throttle");var f=d("./parseVTT");var a=function(j,k){this._view=j;
        this._video=k.video;this._refreshTracks=this._refreshTracks.bind(this);this._throttledRefreshCurrentCaption=i(this._refreshCurrentCaption.bind(this),300);
        this._addTrackListeners()};var h=a.prototype;h._addTrackListeners=function(){this._video.on("addtrack",this._refreshTracks);
        this._video.on("removetrack",this._refreshTracks);this._video.on("change",this._refreshTracks)
    };h._addVideoListeners=function(j){if(!j.cues){this._view.setText("");try{return c.get(j.src,{complete:function(l){j.cues=f(l.responseText);
        this._addVideoListeners(j);this._refreshCurrentCaption()}.bind(this),error:function(l){}.bind(this)})
    }catch(k){}}this._video.on("loadstart",this._refreshTracks);this._video.on("timeupdate",this._throttledRefreshCurrentCaption)
    };h._removeVideoListeners=function(){this._video.off("loadstart",this._refreshTracks);
        this._video.off("timeupdate",this._throttledRefreshCurrentCaption)};h._refreshTracks=function(){var j=this._video.getTextTracks();
        if(j&&j.length){j=j.filter(function(k){return k.mode==="showing"})}if(j.length){this._activeTrack=j[0];
            this._addVideoListeners(this._activeTrack)}else{this._activeTrack=null;this._removeVideoListeners()
        }this._refreshCurrentCaption()};h._getCurrentCaptionText=function(n){var k=(this._activeTrack)?this._activeTrack.cues:null;
        if(!k){return""}else{if(this._currentCaption&&this._currentCaption.startTime>=n&&this._currentCaption<=n){return this._currentCaption.text
        }}var l=0;var j=k.length;var m;while(l<j){if(k[l].startTime<=n&&k[l].endTime>=n){m=k[l]
        }else{if(k[l].startTime>=n){break}}l++}this._currentCaption=m;return(m)?m.text:""
    };h._refreshCurrentCaption=function(){this._view.setText(this._getCurrentCaptionText(this._video.getCurrentTime()))
    };h.destroy=function(){this._removeVideoListeners()};g.exports=a},{"./parseVTT":223,"@marcom/ac-ajax-xhr":115,"@marcom/ac-function/throttle":270}],219:[function(c,a,f){var n=c("../ui/factory/createComponents");
    var d=c("./TextTracksBehavior");var i=c("../ui/elements/Label");var k=c("@marcom/ac-classlist/add");
    var m=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;var o='<div class="ac-video-player-text-track"></div>';
    var g="is-visible";var l="ac-video-player-text-track-container";var j={textTracksPolyfill:{className:"ac-video-player-text-track",view:{classDef:i,options:{}},behavior:{classDef:d}}};
    var b=function(p){m.call(this);this.container=p.container;this._video=p.video;this._initialize(p)
    };var h=b.prototype=Object.create(m.prototype);h._initialize=function(p){this._onTrackChange=this._onTrackChange.bind(this);
        this.el=document.createElement("div");this.el.innerHTML=p.template||o;k(this.el,l);
        this._tracks=p.tracks||[];this._textTrackComponent=n(this.el,j,{video:this._video})
    };h._onTrackChange=function(){this.trigger("change");if(!this.el.parentElement){this._video.el.parentElement.appendChild(this.el);
        k(this.el.firstElementChild,g)}};h.addTrack=function(q){if(!this._tracks){this._tracks=[]
    }var r=q.mode||"hidden";var p=this._onTrackChange;Object.defineProperty(q,"mode",{get:function(){return r
    },set:function(s){r=s;p()},enumerable:true,configurable:true});this._tracks.push(q);
        this.trigger("addtrack")};h.clearTracks=function(){this._tracks=[];this.trigger("removetrack");
        this.trigger("change")};h.getTextTracks=function(){return this._tracks};h.trigger=function(p,q){return m.prototype.trigger.call(this,p,Object.assign({type:p},q||{}))
    };h.destroy=function(){this._textTrackComponent.destroy();m.prototype.destroy.call(this)
    };a.exports=b},{"../ui/elements/Label":237,"../ui/factory/createComponents":242,"./TextTracksBehavior":218,"@marcom/ac-classlist/add":1,"@marcom/ac-event-emitter-micro":46}],220:[function(d,a,f){var j=d("@marcom/ac-useragent");
    var k;if(j.browser.safari){k=function(l,m){l.track.mode=m}}else{k=function(l,m){l.mode=m
    }}var g=function(m){if(m instanceof HTMLElement){return this._videoElement.appendChild(m)
    }var l=document.createElement("track");l.src=m.src;l.kind="captions";l.srclang=m.srclang;
        if(l.srclang==="en"){l.label="English"}if(j.browser.firefox){setTimeout(function(){this._videoElement.appendChild(l);
            k(l,m.mode||"hidden",this._videoElement.textTracks.length)}.bind(this),0)}else{if(j.os.android){this._videoElement.appendChild(l);
            k(this._videoElement.textTracks[0],m.mode||"hidden",this._videoElement.textTracks.length)
        }else{this._videoElement.appendChild(l);k(l,m.mode||"hidden",this._videoElement.textTracks.length)
        }}};var c=function(){return this._videoElement.textTracks};var h=function(){if(!this._textTracksEmitter){var l=d("../dom-emitter/DOMEmitterMicro");
        this._textTracksEmitter=new l(this.getTextTracks())}return this._textTracksEmitter
    };var b=function(n){var o=0;var l=n?n.length:0;for(;o<l;o++){var m=n[o];g.call(this,m)
    }};var i=function(){};a.exports={create:b,add:g,get:c,getEmitter:h,destroy:i}},{"../dom-emitter/DOMEmitterMicro":200,"@marcom/ac-useragent":109}],221:[function(d,a,f){var c=d("./TextTracksDOM");
    var i=function(l){if(!l){return}if(!this._textTracksPolyfill){this._textTracksPolyfill=new c({video:this,tracks:l,container:this._parentElement})
    }else{this._textTracksPolyfill.clearTracks();var m=0;var k=l.length;for(;m<k;m++){this._textTracksPolyfill.addTrack(l[m])
    }}};var g=function(k){return this._textTracksPolyfill.addTrack(k)};var b=function(){if(!this._textTracksPolyfill){this._createTextTrackTags([])
    }return this._textTracksPolyfill.getTextTracks()};var h=function(){if(!this._textTracksPolyfill){this._createTextTrackTags([])
    }return this._textTracksPolyfill};var j=function(){this._textTracksPolyfill.destroy();
        this._textTracksPolyfill=null};a.exports={create:i,add:g,get:b,getEmitter:h,destroy:j}
},{"./TextTracksDOM":219}],222:[function(c,d,b){var g=c("@marcom/ac-useragent");
    var f=!g.browser.ie&&!g.browser.edge;d.exports=function a(i){i=i||{};var h=(typeof i.useNativeCaptions==="undefined")?f:i.useNativeCaptions;
        return(h)?c("./TextTracksNative"):c("./TextTracksPolyfill")}},{"./TextTracksNative":220,"./TextTracksPolyfill":221,"@marcom/ac-useragent":109}],223:[function(b,d,a){var f=b("../utils/Time");
    d.exports=function c(n){var l=n.split(/\n/);var m=/([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}( \-\-> ){1}([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}/;
        var k=[];var h;var o;var j=0;var g=l.length;for(j;j<g;j++){o="";if(m.test(l[j])){h=l[j].split(" --> ");
            h[0]=h[0].split(":").length<3?"00:"+h[0]:h[0];h[1]=h[1].split(":").length<3?"00:"+h[1]:h[1];
            while(++j&&j<g&&!m.test(l[j])){if(l[j]!==""){o+=l[j]+"<br />"}}o=o.substr(0,o.length-6);
            if(j<g){j--}k.push({startTime:f.stringToNumber(h[0].split(" ")[0]),endTime:f.stringToNumber(h[1].split(" ")[0]),text:o})
        }}return k}},{"../utils/Time":247}],224:[function(d,b,f){var a=d("@marcom/ac-string/supplant");
    var j=d("../utils/Time");var h=d("./localization/Localization");var m=d("./factory/createComponents");
    var k="ac-video-controls";var c="control-bar-skin-default";var l=d("../utils/merge");
    var i=function(n){this._initialize(n)};var g=i.prototype;g._initialize=function(n){this.el=n.element||document.createElement("div");
        this._basePath=n.basePath;this.el.style.display="none";this._template=n.template||'<div class="left row-1">\n\t<button type="button" class="{elementClassPrefix}-min-volume-button {elementClassPrefix}-button" value="{minvolume}" aria-label="{minvolume}" role="button" tabindex="0"></button>\n\t<div class="{elementClassPrefix}-volume-level-indicator" tabindex="0" aria-valuemin="0" aria-valuemax="100" min="0" max="100" aria-label="{adjustvolume}" role="slider" step="10"></div>\n\t<button type="button" class="{elementClassPrefix}-max-volume-button {elementClassPrefix}-button" value="{fullvolume}" aria-label="{fullvolume}" role="button" tabindex="0"></button>\n</div>\n\n<div class="center row-1">\n\t<button type="button" class="{elementClassPrefix}-play-pause-button {elementClassPrefix}-button" value="{playpause}" aria-label="{playpause}" role="button" tabindex="0"></button>\n</div>\n\n<div class="right row-1">\n\t<button type="button" class="{elementClassPrefix}-picture-in-picture-button {elementClassPrefix}-button picture-in-picture-unsupported" value="{pictureinpicture}" aria-label="{pictureinpicture}" role="button" tabindex="0"></button>\n\t<button type="button" class="{elementClassPrefix}-sharing-button {elementClassPrefix}-button" value="{share}" aria-label="{share}" role="button" tabindex="0"></button>\n\t<button type="button" class="{elementClassPrefix}-text-tracks-toggle-button {elementClassPrefix}-button no-text-tracks" value="{captionscontrol}" aria-label="{captionscontrol}" role="button" tabindex="0"></button>\n\t<button type="button" class="{elementClassPrefix}-full-screen-button {elementClassPrefix}-button fullscreen-unsupported" value="{fullscreen}" aria-label="{fullscreen}" role="button" tabindex="0"></button>\n</div>\n\n<div class="left row-2">\n\t<div class="{elementClassPrefix}-elapsed-time-indicator">\n\t\t<span class="label">{elapsed}</span>\n\t\t<span class="{elementClassPrefix}-elapsed-time" aria-label="{elapsed}" tabindex="0" role="timer" aria-value="00:00">00:00</span>\n\t</div>\n</div>\n\n<div class="center row-2">\n\t<div class="{elementClassPrefix}-buffered-indicator"></div>\n\t<div class="{elementClassPrefix}-progress-indicator ac-slider-inactive" aria-label="progress-indicator" role="slider" precision="float" min="0" max="{max}" step="0.05" value="0" tabindex="0" aria-valuemax="{max}" aria-valuemin="{min}" aria-valuenow="{value}"></div>\n</div>\n\n<div class="right row-2">\n\t<div class="{elementClassPrefix}-remaining-time-indicator">\n\t\t<span class="label">{remaining}</span>\n\t\t<span class="{elementClassPrefix}-remaining-time" aria-label="{remaining}" tabindex="0" role="timer" aria-value="-00:00">-00:00</span>\n\t</div>\n</div>\n\n<div class="{elementClassPrefix}-inactive-container"></div>';
        this._templateData=n.templateData||Object.assign({elementClassPrefix:"controls"});
        this._destroyed=false;this._localize().then(function(){if(!this._destroyed){this._initControls(n);
            this.el.style.display=""}}.bind(this))};g._localize=function(){return new Promise(function(n){h.getTranslation({callback:function(o){n(o)
    }.bind(this),basePath:this._basePath})}.bind(this)).then(function(n){this._templateData=Object.assign(this._templateData,n)
    }.bind(this))};g._renderTemplateMarkup=function(){var n=a(this._template,this._templateData);
        this.el.innerHTML=n};g._initControls=function(o){this._player=o.player;var n=this.el;
        var p=o.components;n.classList.add(o.className||k);n.classList.add(o.skin||c);this._renderTemplateMarkup();
        this._componentCollection=m(n,l(p,{elementClassPrefix:this._templateData.elementClassPrefix,maxVolume:{behavior:{handlers:{click:this._setVolume.bind(this,1)}}},minVolume:{behavior:{handlers:{click:this._setVolume.bind(this,0)}}},elapsedTimeIndicator:{behavior:{observe:{source:this._player,events:["timeupdate","seeking","seeked","durationchange"],update:function(q){q.setText(j.formatTime(this._player.getCurrentTime()))
        }.bind(this)}}},remainingTimeIndicator:{behavior:{observe:{source:this._player,events:["timeupdate","seeking","seeked","durationchange"],update:function(q){q.setText(j.formatTime(this._player.getCurrentTime()-this._player.getDuration()))
        }.bind(this)}}},volumeLevel:{view:{options:{value:(this._player.getMuted())?0:(this._player.getVolume()*100)}}},fullScreen:{view:{options:{labels:{initial:this._templateData.fullscreen,on:this._templateData.exitfullscreen,off:this._templateData.fullscreen}}}},pictureInPictureToggle:{view:{options:{labels:{initial:this._templateData.pictureinpicture,on:this._templateData.exitpictureinpicture,off:this._templateData.pictureinpicture}}}}}),{player:this._player,localization:this._templateData})
    };g._setVolume=function(n){if(n){this._player.setMuted(false)}this._player.setVolume(n)
    };g._thirySecondsBack=function(){var o=this._player.getCurrentTime();var n=o-30;
        this._player.setCurrentTime((n<0)?0:n)};g.destroy=function(){if(this._componentCollection){this._componentCollection.destroy();
        this._componentCollection=null}this._destroyed=true;this._player=null;this._templateData=null
    };b.exports=i},{"../utils/Time":247,"../utils/merge":248,"./factory/createComponents":242,"./localization/Localization":245,"@marcom/ac-string/supplant":199}],225:[function(c,f,b){var d={components:c("./DefaultComponents"),controlsImplementation:c("./ControlBar")};
    var g=c("@marcom/ac-object/defaults");var a=function(h){h=h||{};var i=g(d,h);return{create:function(k){var j=g(i,k);
        j.components=h.components||d.components;return new j.controlsImplementation(j)}}
    };f.exports=a},{"./ControlBar":224,"./DefaultComponents":226,"@marcom/ac-object/defaults":89}],226:[function(d,c,h){var j=d("./elements/Button");
    var i=d("./elements/StatefulButton");var m=d("./elements/Label");var g=d("./elements/Slider");
    var k=d("./behaviors/PlayPauseButtonBehavior");var a=d("./behaviors/PictureInPictureButtonBehavior");
    var n=d("./behaviors/CaptionsButtonBehavior");var b=d("./behaviors/FullScreenButtonBehavior");
    var l=d("./behaviors/ProgressBarSliderBehavior");var p=d("./behaviors/VolumeSliderBehavior");
    var f=d("./behaviors/SharingButtonBehavior");var o=d("./elements/mixins/CursorPointer");
    c.exports={back30Seconds:{className:"back-30-seconds-button",view:{classDef:j}},fullScreen:{className:"full-screen-button",view:{classDef:i,options:{states:{initial:"fullscreen-unsupported",on:"is-fullscreen",off:""},labels:{initial:"fullscreen",on:"exitfullscreen",off:"fullscreen"}}},behavior:{classDef:b}},maxVolume:{className:"max-volume-button",view:{classDef:j}},minVolume:{className:"min-volume-button",view:{classDef:j}},mute:{className:"mute-button",view:{classDef:i}},playPause:{className:"play-pause-button",view:{classDef:i,options:{states:{playing:["is-playing"],paused:[]}}},behavior:{classDef:k}},pictureInPictureToggle:{className:"picture-in-picture-button",view:{classDef:i,options:{states:{initial:["picture-in-picture-unsupported"],on:["is-picture-in-picture"],off:[]},labels:{initial:"pictureinpicture",on:"exitpictureinpicture",off:"pictureinpicture"}}},behavior:{classDef:a}},captionsToggle:{className:"text-tracks-toggle-button",view:{classDef:i,options:{states:{initial:["no-text-tracks"],on:["text-tracks-visible"],off:[]}}},behavior:{classDef:n}},elapsedTimeIndicator:{className:"elapsed-time",view:{classDef:m}},remainingTimeIndicator:{className:"remaining-time",view:{classDef:m}},progressBar:{className:"progress-indicator",view:{classDef:g,options:{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-thumb">\n\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t\t<div class="ac-slider-scrubbed"></div>\n\t\t</div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',min:0,max:1,mixins:[o]}},behavior:{classDef:l}},volumeLevel:{className:"volume-level-indicator",view:{classDef:g,options:{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb">\n\t\t<div class="ac-slider-thumb-background"></div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',min:0,max:100,mixins:[o]}},behavior:{classDef:p}},sharing:{className:"sharing-button",view:{classDef:i,options:{states:{initial:["sharing-unsupported"],on:["is-sharing"],off:[]}}},behavior:{classDef:f}}}
},{"./behaviors/CaptionsButtonBehavior":229,"./behaviors/FullScreenButtonBehavior":230,"./behaviors/PictureInPictureButtonBehavior":231,"./behaviors/PlayPauseButtonBehavior":232,"./behaviors/ProgressBarSliderBehavior":233,"./behaviors/SharingButtonBehavior":234,"./behaviors/VolumeSliderBehavior":235,"./elements/Button":236,"./elements/Label":237,"./elements/Slider":238,"./elements/StatefulButton":239,"./elements/mixins/CursorPointer":240}],227:[function(c,d,b){var a=function(f,g){this._player=g.player;
    this._view=f;if(this._addViewListeners){this._addViewListeners()}if(this._addPlayerListeners){this._addPlayerListeners()
    }};d.exports=a},{}],228:[function(b,f,a){var d=b("./BaseBehavior");var c=function(h,i){this._onClick=this._onClick.bind(this);
    d.apply(this,arguments)};var g=c.prototype=Object.create(d.prototype);g._addViewListeners=function(){this._view.on("click",this._onClick)
};g._onClick=function(){};g.destroy=function(){this._view.off("click",this._onClick)
};f.exports=c},{"./BaseBehavior":227}],229:[function(b,f,a){var d=b("./ButtonBehavior");
    var h=function(i,j){d.apply(this,arguments);this._updateState()};var c=d.prototype;
    var g=h.prototype=Object.create(c);g._updateState=function(){var j=this._player.getVisibleTextTracks();
        var i=this._player.getTextTracks();if(j.length){this._view.setState("on")}else{if(i.length){this._view.setState("off")
        }else{this._view.setState("initial")}}};g._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
        this._player.on("addtrack",this._updateState);this._player.on("change",this._updateState);
        this._player.on("removetrack",this._updateState)};g._onClick=function(){var j=this._player.getVisibleTextTracks();
        var i=this._player.getTextTracks();if(j.length){i[0].mode="hidden"}else{i[0].mode="showing"
        }};g.destroy=function(){this._player.off("addtrack",this._updateState);this._player.off("change",this._updateState);
        this._player.off("removetrack",this._updateState);c.destroy.call(this)};f.exports=h
},{"./ButtonBehavior":228}],230:[function(b,g,a){var f=b("./ButtonBehavior");var d=function(i,j){f.apply(this,arguments);
    if(this._player.getFullScreenEnabled()){this._updateState()}};var c=f.prototype;
    var h=d.prototype=Object.create(c);h._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
        this._player.on("fullscreen:change",this._updateState)};h._updateState=function(){this._view.setState((this._player.isFullscreen())?"on":"off")
    };h._onClick=function(){this._player.toggleFullscreen(!this._player.isFullscreen())
    };h.destroy=function(){this._player.off("fullscreen:change",this._updateState);
        c.destroy.call(this)};g.exports=d},{"./ButtonBehavior":228}],231:[function(b,g,a){var f=b("./ButtonBehavior");
    var d=function(i,j){f.apply(this,arguments);this._initialize()};var c=f.prototype;
    var h=d.prototype=Object.create(c);h._initialize=function(){this._updateButtonState=this._updateButtonState.bind(this);
        if(this._player.supportsPictureInPicture()){this._updateButtonState();this._player.on("webkitpresentationmodechanged",this._updateButtonState)
        }};h._onClick=function(){this._player.setPictureInPicture(!this._player.isPictureInPicture())
    };h._updateButtonState=function(){this._view.setState((this._player.isPictureInPicture())?"on":"off")
    };h.destroy=function(){this._player.off("webkitpresentationmodechanged",this._updateButtonState);
        c.destroy.call(this)};g.exports=d},{"./ButtonBehavior":228}],232:[function(b,f,a){var d=b("./ButtonBehavior");
    var g=function(i,j){d.apply(this,arguments);this._setPlayingState()};var c=d.prototype;
    var h=g.prototype=Object.create(c);h._addPlayerListeners=function(){this._setPlayingState=this._setPlayingState.bind(this);
        this._player.on("play",this._setPlayingState);this._player.on("pause",this._setPlayingState)
    };h._onClick=function(){this._togglePlay()};h._setPlayingState=function(){this._view.setState((this._player.getPaused())?"paused":"playing")
    };h._togglePlay=function(){if(this._player.getPaused()){this._player.play()}else{this._player.pause()
    }};h.destroy=function(){this._player.off("play",this._setPlayingState);this._player.off("pause",this._setPlayingState);
        c.destroy.call(this)};f.exports=g},{"./ButtonBehavior":228}],233:[function(b,d,a){var c=b("./BaseBehavior");
    var h=b("@marcom/ac-string/supplant");var g=function(i,j){c.apply(this,arguments);
        this._visible=false;this._ariaTextTemplate=j.localization.currenttimetext;this._onDurationChange()
    };var f=g.prototype=Object.create(c.prototype);f._addViewListeners=function(){this._onSliderGrab=this._onSliderGrab.bind(this);
        this._onSliderChange=this._onSliderChange.bind(this);this._onSliderRelease=this._onSliderRelease.bind(this);
        this._view.on("grab",this._onSliderGrab)};f._addPlayerListeners=function(){this._onTimeUpdate=this._onTimeUpdate.bind(this);
        this._onSeeking=this._onSeeking.bind(this);this._onSeeked=this._onSeeked.bind(this);
        this._onEnded=this._updateSliderPosition.bind(this,0);this._onDurationChange=this._onDurationChange.bind(this);
        this._player.on("durationchange",this._onDurationChange);this._player.on("seeking",this._onSeeking);
        this._player.on("seeked",this._onSeeked);this._player.on("loadstart",this._onEnded);
        this._player.on("ended",this._onEnded);this._player.on("timeupdate",this._onTimeUpdate)
    };f._onSeeking=function(){this._seeking=true};f._onSeeked=function(){this._seeking=false
    };f._onSliderGrab=function(){this._grabbing=true;this._player.off("timeupdate",this._onTimeUpdate);
        this._view.off("grab",this._onSliderGrab);this._view.on("change",this._onSliderChange);
        this._view.on("release",this._onSliderRelease)};f._onSliderRelease=function(){this._grabbing=false;
        this._view.off("change",this._onSliderChange);this._view.off("release",this._onSliderRelease);
        this._view.on("grab",this._onSliderGrab);this._player.on("timeupdate",this._onTimeUpdate)
    };f._onDurationChange=function(){this._view.setMin(0);this._view.setMax(this._player.getDuration());
        this._updateSliderPosition(this._player.getCurrentTime())};f._onSliderChange=function(){var i=this._view.getValue();
        this._setPlayerCurrentTime(i);this._setAriaValueText(i)};f._onTimeUpdate=function(){if(!this._isSeeking){this._updateSliderPosition(this._player.getCurrentTime())
    }};f._updateSliderPosition=function(i){this._view.setValue(i);this._setAriaValueText(i);
        if(!this._visible&&!isNaN(this._player.getDuration())){this._view.show();this._visible=true
        }};f._setAriaValueText=function(i){var j=Math.floor(i/60);var k=Math.ceil(i%60);
        this._view.setAriaValueText(h(this._ariaTextTemplate,{minutes:j,seconds:k}))};f._setPlayerCurrentTime=function(i){this._player.setCurrentTime(i)
    };f._removeEventListeners=function(){this._player.off("durationchange",this._onDurationChange);
        this._player.off("seeking",this._onSeeking);this._player.off("seeked",this._onSeeked);
        this._player.off("loadstart",this._onEnded);this._player.off("ended",this._onEnded);
        this._player.off("timeupdate",this._onTimeUpdate);this._view.off("change",this._onSliderChange);
        this._view.off("release",this._onSliderRelease);this._view.off("grab",this._onSliderGrab)
    };f.destroy=function(){this._removeEventListeners()};d.exports=g},{"./BaseBehavior":227,"@marcom/ac-string/supplant":199}],234:[function(c,g,b){var f=c("./ButtonBehavior");
    var a=function(i,j){f.apply(this,arguments);if(this._player.states){this._updateState()
    }};var d=f.prototype;var h=a.prototype=Object.create(d);h._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
        this._player.states&&this._player.states.on("statechange",this._updateState)};h._updateState=function(){this._stateChanging=false;
        this._view.setState((this._player.states.getCurrentState()==="sharing")?"on":"off")
    };h._onClick=function(){if(this._stateChanging){return}if(this._player.states.getCurrentState()==="sharing"){this._view.setState("off");
        this._player.states.setState("none")}else{this._view.setState("on");this._player.states.setState("sharing")
    }this._stateChanging=true};h.destroy=function(){this._player.states&&this._player.states.off("statechange",this._updateState);
        d.destroy.call(this)};g.exports=a},{"./ButtonBehavior":228}],235:[function(b,d,a){var c=b("./BaseBehavior");
    var f=function(h,i){c.apply(this,arguments);this._updateSliderVolumeValue()};var g=f.prototype=Object.create(c.prototype);
    g._addViewListeners=function(){this._onSliderGrab=this._onSliderGrab.bind(this);
        this._onSliderChange=this._onSliderChange.bind(this);this._onSliderRelease=this._onSliderRelease.bind(this);
        this._view.on("grab",this._onSliderGrab)};g._addPlayerListeners=function(){this._updateSliderVolumeValue=this._updateSliderVolumeValue.bind(this);
        this._player.once("durationchange",this._updateSliderVolumeValue);this._player.on("volumechange",this._updateSliderVolumeValue)
    };g._onSliderGrab=function(){this._player.off("volumechange",this._updateSliderVolumeValue);
        this._view.off("grab",this._onSliderGrab);this._view.on("change",this._onSliderChange);
        this._view.on("release",this._onSliderRelease)};g._onSliderRelease=function(){this._setPlayerVolume(this._view.getValue());
        this._view.off("change",this._onSliderChange);this._view.off("release",this._onSliderRelease);
        this._view.on("grab",this._onSliderGrab);this._player.on("volumechange",this._updateSliderVolumeValue)
    };g._onSliderChange=function(){var h=this._view.getValue();this._setPlayerVolume(h);
        this._view.setScrubbedValue(h/100)};g._setPlayerVolume=function(h){if(h){this._player.setMuted(false)
    }this._player.setVolume(h/100)};g._updateSliderVolumeValue=function(){if(this._player.getMuted()){this._view.setValue(0);
        this._view.setScrubbedValue(0)}else{var h=this._player.getVolume();this._view.setValue(h*100);
        this._view.setScrubbedValue(h)}};g._removeEventListeners=function(){this._player.off("durationchange",this._updateSliderVolumeValue);
        this._player.off("volumechange",this._updateSliderVolumeValue);this._view.off("change",this._onSliderChange);
        this._view.off("release",this._onSliderRelease);this._view.off("grab",this._onSliderGrab)
    };g.destroy=function(){this._removeEventListeners()};d.exports=f},{"./BaseBehavior":227}],236:[function(c,d,b){var f=c("../../dom-emitter/DOMEmitterMicro");
    var a=function(g){this.el=g};a.prototype=Object.create(f.prototype);d.exports=a
},{"../../dom-emitter/DOMEmitterMicro":200}],237:[function(b,c,a){var f=function(g){this.el=g
};var d=f.prototype;d.setText=function(g){this.el.innerHTML=g;this.el.setAttribute("aria-value",g)
};c.exports=f},{}],238:[function(b,a,f){var h=b("@marcom/ac-slider").Slider;var i=b("@marcom/ac-classlist/add");
    var j=b("@marcom/ac-classlist/remove");var c="ac-slider-inactive";var d=function(m,l){this.el=m;
        this._min=l.min||0;this._max=l.max||1;if(l.mixins){var k=l.mixins.slice(0);while(k.length){Object.assign(this,k.pop())
        }}this._slider=new h(this.el,{template:l.template,min:this._min,max:this._max,step:isNaN(+this.el.getAttribute("step"))?this.el.getAttribute("step"):+this.el.getAttribute("step"),value:(l.value!==undefined)?l.value:(+this.el.getAttribute("value")),keyboardContext:this.el});
        this.forceCursorPointer=this.forceCursorPointer.bind(this);this.disableForcedCursorPointer=this.disableForcedCursorPointer.bind(this);
        this._slider.on("grab",this.forceCursorPointer);this._slider.on("release",this.disableForcedCursorPointer);
        this._scrubbedEl=this.el.querySelector(".ac-slider-scrubbed");if(l.value){requestAnimationFrame(function(){if(this._slider){this.setValue(l.value)
        }}.bind(this))}};var g=d.prototype;g.on=function(){return this._slider.on.apply(this._slider,arguments)
    };g.off=function(){return this._slider.off.apply(this._slider,arguments)};g.setValue=function(k){return this._slider.setValue.call(this._slider,k)
    };g.setAriaValueText=function(k){this._slider.el.setAttribute("aria-valuetext",k)
    };g.setMin=function(k){this._min=k;this._slider.setMin(k)};g.setMax=function(k){this._max=k;
        this._slider.setMax(k)};g.getValue=function(){return this._slider.getValue.apply(this._slider,arguments)
    };g.setScrubbedValue=function(k){this._scrubbedEl.style.marginLeft=(k*100)+"%"};
    g.show=function(){j(this.el,c)};g.hide=function(){i(this.el,c)};g.destroy=function(){this._slider.off("grab",this.forceCursorPointer);
        this._slider.off("release",this.disableForcedCursorPointer);this._slider.destroy();
        this._slider=null};a.exports=d},{"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7,"@marcom/ac-slider":156}],239:[function(c,d,b){var a=c("./Button");
    var g=c("@marcom/ac-classlist/add");var i=c("@marcom/ac-classlist/remove");var h=function(k,j){a.apply(this,arguments);
        this._states=j.states||{};this._labels=j.labels;if(this._states&&this._states.initial){this.setState("initial")
        }};var f=h.prototype=Object.create(a.prototype);f.setState=function(j){if(this._currentState&&this._currentState!==j&&this._states[this._currentState].length){i(this.el,this._states[this._currentState])
    }this._currentState=j;if(this._labels&&this._labels[this._currentState]){this.el.value=this._labels[this._currentState];
        this.el.setAttribute("aria-label",this._labels[this._currentState])}if(this._currentState==="on"){this.el.setAttribute("aria-pressed",true)
    }else{this.el.setAttribute("aria-pressed",false)}if(this._states[j].length){g(this.el,this._states[j])
    }};d.exports=h},{"./Button":236,"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7}],240:[function(c,d,a){var b={add:c("@marcom/ac-classlist/add"),remove:c("@marcom/ac-classlist/remove")};
    var f={addEventListener:c("@marcom/ac-dom-events/utils/addEventListener"),removeEventListener:c("@marcom/ac-dom-events/utils/removeEventListener"),preventDefault:c("@marcom/ac-dom-events/preventDefault")};
    var g="cursor-pointer";d.exports={disableForcedCursorPointer:function(){b.remove(document.body,g);
        this.onSelectStartResumeDefault()},forceCursorPointer:function(){b.add(document.body,g);
        this.onSelectStartPreventDefault()},onSelectStartResumeDefault:function(){f.removeEventListener(document,"selectstart",this.preventDefault)
    },onSelectStartPreventDefault:function(){f.addEventListener(document,"selectstart",this.preventDefault)
    },preventDefault:function(h){f.preventDefault(h)}}},{"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7,"@marcom/ac-dom-events/preventDefault":18,"@marcom/ac-dom-events/utils/addEventListener":24,"@marcom/ac-dom-events/utils/removeEventListener":26}],241:[function(c,d,b){var a=function(i,k,j){return new k.classDef(i,Object.assign(k.options||{},j||{}))
};var g=function(k,j,i){return function(l){k[j](l,i)}};var h=function(v,u){var m=u.handlers||{};
    var p={};for(var x in m){if(m.hasOwnProperty(x)){v.on(x,p[x]=g(m,x,v))}}var n=u.observe;
    var s;if(n){var o=n.update;var j=n.source;var t=j.on.bind(j)||j.addEventListener;
        var k=j.off.bind(j)||j.removeEventListener;var y=n.events;var q=0;var r=y.length;
        var l=function(){o.call(n,v)};for(;q<r;q++){x=y[q];t(x,l)}s=function(){for(q=0;
                                                                                   q<r;q++){x=y[q];k(x,l)}}}var w=function(){for(var i in p){if(p.hasOwnProperty(i)){v.off(i,p[i])
    }}if(s){s()}};return{destroy:w}};d.exports=function f(i,k,j){if(k.classDef){return a(i,k,j)
}else{return h(i,k,j)}}},{}],242:[function(d,b,g){var f=d("./createView");var c=d("./createBehavior");
    var h=function(l,m){if(typeof m.destroy==="function"){m.destroy()}if(typeof l.destroy==="function"){l.destroy()
    }};var i=function(l){while(l.length){l.shift().destroy()}};var k=function(l){for(var m in l){if(l.hasOwnProperty(m)){i(l[m]);
        delete l[m]}}};var a=function(n,p,m){var l=f(n,p.view);var o=c(l,p.behavior,m);
        return{view:l,behavior:o,destroy:h.bind(null,l,o)}};b.exports=function j(u,o,t){var q={};
        for(var s in o){if(o.hasOwnProperty(s)&&typeof o[s]==="object"){var m=o[s];var l=(o.elementClassPrefix)?("."+o.elementClassPrefix+"-"+m.className):"."+m.className;
            var n=u.querySelectorAll(l);q[s]=[];var p=0;var r=n.length;for(;p<r;p++){q[s].push(a(n[p],m,t))
            }}}return{components:q,destroy:k.bind(null,q)}}},{"./createBehavior":241,"./createView":243}],243:[function(c,d,a){d.exports=function b(f,g){return new g.classDef(f,g.options)
}},{}],244:[function(b,c,a){c.exports={backthirtyseconds:"Back 30 Seconds",playpause:"Play/Pause",play:"Play",pause:"Pause",togglemutevolume:"Toggle Mute Volume",mutevolume:"Mute Volume",minvolume:"Minimum Volume",adjustvolume:"Adjust Volume",fastreverse:"Fast Reverse",fastforward:"Fast Forward",fullvolume:"Full Volume",fullscreen:"Full Screen",exitfullscreen:"Exit Full Screen",captionscontrol:"Closed Captions",captionsturnedon:"Closed Captions On",captionsturnedoff:"Closed Captions Off",subtitlescontrol:"Subtitles",subtitlesturnedon:"Subtitles On",subtitlesturnedoff:"Subtitles Off",sizescontrol:"Video Size",downloadcontrol:"Download Video",share:"Share",small:"Small",medium:"Medium",large:"Large",hd:"HD",ipod:"iPod/iPhone",mb:"MB",gb:"GB",tb:"TB",downloadquicktimetitle:"Get QuickTime.",downloadquicktimetext:"Download QuickTime to view this video. QuickTime is free for Mac + PC.",downloadquicktimebutton:"Download",downloadquicktimeurl:"https://www.apple.com/quicktime/download/",elapsed:"elapsed",remaining:"remaining",currenttimetext:"{minutes} minutes and {seconds} seconds",pictureinpicture:"Picture-in-Picture",exitpictureinpicture:"Exit Picture-in-Picture",novideosupportheadline:"Your browser doesnâ€™t support playback of this video.",novideosupportdetails:"To watch it please use Safari, Firefox, Chrome, Internet Explorer 9 or later, or Microsoft Edge.",closesharing:"Close Sharing",facebookshare:"Share to Facebook",twittershare:"Share to Twitter",copylink:"Copy Link",copyembed:"Copy Embed Code",copyarea:"Copy Area",close:"Close",dismisscopy:"Dismiss Copy",replay:"Replay"}
},{}],245:[function(c,b,g){var k=c("./Translations");var h=c("./DefaultLabelStrings");
    var f=document.getElementsByTagName("html")[0];var p=c("@marcom/ac-ajax-xhr");var d="m";
    var l="/global/ac_"+d+"edia_player/scripts/ac_"+d+"edia_languages/";var a="en-US";
    var j={};var o=function(r){var m=r||f.getAttribute("lang");var q;if(!m){q=a}else{switch(m.toLowerCase()){case"es-418":q="es-LA";
        break;case"pt":q="pt-BR";break;default:q=m;break}}return q};var n=function(q){q=q||{};
        var s=o(q.lang);if(i(s)){if(q.callback){q.callback(j[s]);return}else{return j[s]
        }}else{if(!q.callback){throw new Error("To use Localization.getTranslation you must either pass a callback or ensure the translation is ready via Localization.translationReady");
            return}}var r=q.basePath||l;var m=(k[s])?(r+k[s]):(r+k[a]);var t=h;p.get(m,{success:function(u){t=Object.assign(t,JSON.parse(u));
            j[s]=t;q.callback(t)},error:function(){j[s]=t;q.callback(t)}})};var i=function(m){m=o(m);
        return(j[m]!==undefined)};b.exports={getLanguage:o,getTranslation:n,translationReady:i}
},{"./DefaultLabelStrings":244,"./Translations":246,"@marcom/ac-ajax-xhr":115}],246:[function(b,c,a){c.exports={"bg-BG":"bg-BG.json","cs-CZ":"cs-CZ.json","el-GR":"el-GR.json","de-AT":"de-AT.json","de-CH":"de-CH.json","de-DE":"de-DE.json","de-LI":"de-LI.json","da-DK":"da-DK.json",en:"en.json","en-US":"en-US.json","en-AP":"en-AP.json","en-CA":"en-CA.json","en-GB":"en-GB.json","en-HK":"en-HK.json","en-IE":"en-IE.json","en-IN":"en-IN.json","en-KR":"en-KR.json","en-AU":"en-AU.json","en-NZ":"en-NZ.json","en-SG":"en-SG.json","en-ZA":"en-ZA.json",es:"es.json","es-LA":"es-LA.json","es-MX":"es-MX.json","es-ES":"es-ES.json","et-EE":"et-EE.json","fi-FI":"fi-FI.json",fr:"fr.json","fr-BE":"fr-BE.json","fr-CA":"fr-CA.json","fr-CH":"fr-CH.json","fr-FR":"fr-FR.json","hr-HR":"hr-HR.json","hu-HU":"hu-HU.json","it-IT":"it-IT.json",ja:"ja.json","ja-JP":"ja-JP.json","ko-KR":"ko-KR.json","lt-LT":"lt-LT.json","lv-LV":"lv-LV.json","nl-BE":"nl-BE.json","nl-NL":"nl-NL.json","no-NO":"no-NO.json","pl-PL":"pl-PL.json",pt:"pt.json","pt-BR":"pt-BR.json","pt-PT":"pt-PT.json","ro-RO":"ro-RO.json","ru-RU":"ru-RU.json","sk-SK":"sk-SK.json","sv-SE":"sv-SE.json","tr-TR":"tr-TR.json",zh:"zh.json","zh-CN":"zh-CN.json","zh-HK":"zh-HK.json","zh-TW":"zh-TW.json"}
},{}],247:[function(b,c,a){var f=b("@marcom/ac-string/supplant");var d={addLeadingZero:function(h,g){g=g||2;
    if(h<10||g>2){h=String(h);while(h.length<g){h="0"+h}}return h},formatTime:function(j,g){if(isNaN(j)){return"00:00"
}j=this.splitTime(Math.floor(j),function(k){return this.addLeadingZero(k,g)}.bind(this));
    var h="{PN}{minutes}:{seconds}";var i=f(h,{PN:j.negativeModifier,minutes:j.minutes,seconds:j.seconds});
    return i},splitTime:function(j,g){g=g||function(k){return k};var i={negativeModifier:"",minutes:0,seconds:0};
    if(isNaN(j)){return i}i.negativeModifier=(j<0)?"-":"";j=Math.abs(j);i.minutes=Math.floor(j/60);
    i.seconds=(j%60);for(var h in i){if(typeof i[h]!=="number"){continue}i[h]=g(i[h])
    }return i},stringToNumber:function(h){var i=0;var g=h.split(":");while(g.length){if(g.length===3){i+=parseFloat(g.shift())*3600
}else{if(g.length===2){i+=parseFloat(g.shift())*60}else{i+=parseFloat(g.shift())
}}}return i}};c.exports=d},{"@marcom/ac-string/supplant":199}],248:[function(b,c,a){var f=b("@marcom/ac-object/clone");
    var d=function(){var h=Array.prototype.slice.call(arguments);if(h.length<2){return f(h[0])
    }var g=f(h.shift(),true);var i=h.shift();for(var j in i){if(i.hasOwnProperty(j)){if(!g.hasOwnProperty(j)||typeof g[j]!=="object"){g[j]=i[j]
    }else{if(typeof g[j]==="object"&&typeof i[j]==="object"){g[j]=d(g[j],i[j])}}}}if(h.length){return d.apply(null,[g].concat(h))
    }else{return g}};c.exports=d},{"@marcom/ac-object/clone":87}],249:[function(b,c,a){c.exports=[{width:384,height:160,type:"baseline-high",suffix:"h"},{width:384,height:160,type:"small",suffix:"h"},{width:384,height:160,type:"baseline-low",suffix:"l"},{width:384,height:160,type:"baseline-medium",suffix:"m"},{width:480,height:200,type:"medium",suffix:"h"},{width:768,height:320,type:"large",suffix:""},{width:960,height:400,type:"large",suffix:""},{width:1536,height:640,type:"large",suffix:"h"},{width:1536,height:640,type:"large",suffix:"l"},{width:1920,height:800,type:"large",suffix:"l"},{width:1920,height:800,type:"large",suffix:"h"}]
},{}],250:[function(b,c,a){c.exports=[{width:416,height:234,type:"baseline-high",suffix:"h"},{width:416,height:234,type:"small",suffix:"h"},{width:416,height:234,type:"baseline-low",suffix:"l"},{width:416,height:234,type:"baseline-medium",suffix:"m"},{width:640,height:360,type:"medium",suffix:"h"},{width:848,height:480,type:"large",suffix:""},{width:960,height:540,type:"large",suffix:""},{width:1280,height:720,type:"large",suffix:"h"},{width:1280,height:720,type:"large",suffix:"l"},{width:1920,height:1080,type:"large",suffix:"l"},{width:1920,height:1080,type:"large",suffix:"h"}]
},{}],251:[function(f,b,i){var a=f("@marcom/ac-string/supplant");var d=/_r[0-9].+\.mov$/;
    var g=/_[0-9]+x[0-9].+\.mp4$/;var p=/-cc-[a-z].*-/;var j=/-tft-.*-/;var c="m";var h="_{width}x{height}{suffix}."+c+"p4";
    var n=f("./16X9AssetSizes");var l=f("./12X5AssetSizes");var o=function(v,q,s,x){var w;
        var m;if(v.match(j)){w=l;m=1536}else{w=n;m=1280}var t=w[0].width;var u=(x&&x.maxWidth)?Math.max(x.maxWidth,t):m;
        if(!v){throw"Must provide an url to optimize"}if(q===undefined||isNaN(q)){throw"Must provide a width"
        }if(s){w=w.filter(function(y){return y.type===s})}if(u<1920){w=w.filter(function(y){return y.width<=u
        })}var r=w.reduce(function(y,z){return Math.abs(z.width-q)<Math.abs(y.width-q)?z:y
        });if(v.match(g)){return v.replace(g,a(h,r))}else{if(v.match(d)){return v.replace(d,a(h,r))
        }else{return v}}};var k=function(m){if(!m.match(p)){return null}if(m.match(g)){return{src:m.replace(g,"_cc.vtt"),srclang:"en"}
    }else{if(m.match(d)){return{src:m.replace(d,"_cc.vtt"),srclang:"en"}}else{return null
    }}};b.exports={getVideoSource:o,getCaptionsSource:k}},{"./12X5AssetSizes":249,"./16X9AssetSizes":250,"@marcom/ac-string/supplant":199}],252:[function(b,a,d){var j=b("../dom-emitter/DOMEmitterMicro");
    var h=b("@marcom/ac-classlist/add");var l=b("../texttracks/createTextTracks");var c=b("@marcom/ac-console").log;
    var k=window.document;var g=b("@marcom/ac-useragent").browser;var i=!(g.ie||g.edge);
    var m=function(n){this._videoElement=(n&&n.mediaElement)?n.mediaElement:k.createElement("video");
        this.options=n||{};this._textTracks=l(n);this._initElement();j.apply(this,[this._videoElement]);
        this._forwardCaptionEvent=this._forwardCaptionEvent.bind(this);this._textTracksEmitter=this.getTextTracksEventEmitter();
        this._textTracksEmitter.on("addtrack",this._forwardCaptionEvent);this._textTracksEmitter.on("change",this._forwardCaptionEvent);
        this._textTracksEmitter.on("removetrack",this._forwardCaptionEvent)};var f=m.prototype=Object.create(j.prototype);
    f._initElement=function(){h(this._videoElement,"ac-video-media-controller");if(this.options.crossorigin!==null){this._videoElement.setAttribute("crossorigin",(this.options.crossorigin)?this.options.crossorigin:"anonymous")
    }this._videoElement.setAttribute("preload","auto");this._videoElement.setAttribute("x-webkit-airplay","")
    };f._forwardCaptionEvent=function(n){this.trigger(n.type)};f.load=function(p,n,o){if(o){p=p.map(function(q){return q+"#t="+o
    })}this._createSourceTags(p);this._createTextTrackTags(n);this._videoElement.load()
    };f._createSourceTags=function(q){this._videoElement.removeAttribute("src");this._videoElement.innerHTML="";
        var o=0;var n=q.length;if(n){this._videoElement.setAttribute("src",q[0])}for(;o<n;
                                                                                      o++){var p=k.createElement("source");p.src=q[o];this._videoElement.appendChild(p)
        }};f.play=function(){try{var o=this._videoElement.play();if(o&&typeof o["catch"]==="function"){o["catch"](function(p){})
    }}catch(n){c(n)}};f.pause=function(){this._videoElement.pause()};f.addTextTrack=function(n){this._addTextTrackTag(n)
    };f.removeTextTrack=function(n){this._removeTextTrackTag(n)};f.getMediaElement=function(){return this._videoElement
    };f._createTextTrackTags=function(){return this._textTracks.create.apply(this,arguments)
    };f._addTextTrackTag=function(){return this._textTracks.add.apply(this,arguments)
    };f._removeTextTrackTag=function(){return this._textTracks.remove.apply(this,arguments)
    };f.getTextTracks=function(){return this._textTracks.get.apply(this,arguments)};
    f.getTextTracksEventEmitter=function(){return this._textTracks.getEmitter.apply(this,arguments)
    };f.getReadyState=function(){return this._videoElement.readyState};f.getPreload=function(){return this._videoElement.preload
    };f.setPreload=function(n){return this._videoElement.preload=n};f.setPoster=function(n){this._videoElement.poster=n
    };f.getVolume=function(){return this._videoElement.volume};f.getMuted=function(){return this._videoElement.muted
    };f.getPaused=function(){return this._videoElement.paused};f.getCurrentTime=function(){return this._videoElement.currentTime
    };f.getDuration=function(){return this._videoElement.duration};f.setCurrentTime=function(n){return this._videoElement.currentTime=n
    };f.setVolume=function(n){return this._videoElement.volume=n};f.setMuted=function(n){this._videoElement.muted=n
    };f.getEnded=function(){return this._videoElement.ended};f.setSrc=function(n){if(!this._videoElement.childNodes.length||n!==this._getSrcNode().url){this._createSourceTags([n])
    }};f.getCurrentSrc=function(){return this._getSrcNode()};f._getSrcNode=function(){return this._videoElement.childNodes[0]
    };f.setControls=function(n){if(!n){this._videoElement.removeAttribute("controls");
        this._videoElement.setAttribute("aria-hidden","true")}else{this._videoElement.setAttribute("controls","");
        this._videoElement.removeAttribute("aria-hidden")}};f.isFullscreen=function(){return this._videoElement.webkitDisplayingFullscreen
    };f.supportsPictureInPicture=function(){return(typeof this._videoElement.webkitSetPresentationMode==="function")
    };f.isPictureInPicture=function(){return(this._videoElement.webkitPresentationMode==="picture-in-picture")
    };f.setPictureInPicture=function(n){if(!this.supportsPictureInPicture()){return
    }this._videoElement.webkitSetPresentationMode((n)?"picture-in-picture":"inline")
    };f.destroy=function(){this._textTracks.destroy();this._textTracksEmitter.off("addtrack",this._forwardCaptionEvent);
        this._textTracksEmitter.off("change",this._forwardCaptionEvent);this._textTracksEmitter.off("removetrack",this._forwardCaptionEvent);
        this._textTracks=null;this._textTracksEmitter=null;this._videoElement=null};a.exports=m
},{"../dom-emitter/DOMEmitterMicro":200,"../texttracks/createTextTracks":222,"@marcom/ac-classlist/add":1,"@marcom/ac-console":8,"@marcom/ac-useragent":109}],253:[function(c,f,a){var d=c("./HTML5Video");
    var b=function(){};var g=b.prototype;g.create=function(i,h){return new d(Object.assign({},i,{parentElement:h}))
    };f.exports=Object.create(b.prototype)},{"./HTML5Video":252}],254:[function(b,c,a){c.exports={create:b("./factory/createFilms")}
},{"./factory/createFilms":259}],255:[function(b,a,c){var h;try{h=b("@marcom/ac-analytics")
}catch(j){}var f=b("@marcom/ac-useragent").browser;var g=f.ie||f.edge;var l=b("@marcom/ac-video/event-emitter-shim/EventEmitterShim");
    var i=function(n,p,o){if(o){var m=function(){p.apply(o,arguments)};l.prototype.once.apply(this,[n,m])
    }else{l.prototype.once.apply(this,arguments)}};function k(n,m,o){this.player=n;
        this.sources={};this.currentStubPlayer=null;this.playerType="";this.videoType="";
        this.options=m;if(o){this._bindAnchors(o)}}var d=k.prototype;d._bindAnchors=function(o){var n=0;
        var m=o.length;for(;n<m;n++){this._bindAnchorForAnalytics(o[n])}};d.activate=function(){this._onPlay=this._onPlay.bind(this);
        this._onEnded=this._onEnded.bind(this);this._onTimeupdate=this._onTimeupdate.bind(this);
        this._onTexttrackshow=this._onTexttrackshow.bind(this);this._onLoadStart=this._onLoadStart.bind(this);
        this.setCurrentStubPlayer=this.setCurrentStubPlayer.bind(this);if(g){this.player.on("playing",this._onPlay)
        }else{this.player.on("play",this._onPlay)}this.player.on("ended",this._onEnded);
        this.player.on("loadstart",this._onLoadStart);this.player.on("timeupdate",this._onTimeupdate);
        this.player.on("texttrackshow",this._onTexttrackshow);this.player.on("durationchange",this.setCurrentStubPlayer)
    };d.deactivate=function(){if(g){this.player.off("playing",this._onPlay)}else{this.player.off("play",this._onPlay)
    }this.player.off("ended",this._onEnded);this.player.off("timeupdate",this._onTimeupdate);
        this.player.off("texttrackshow",this._onTexttrackshow);this.player.off("durationchange",this.setCurrentStubPlayer)
    };d._bindAnchorForAnalytics=function(m){var o;var n;if(m){if(this.sources[m.id]){return
    }o=this._createStubPlayer(m);n=m.getAttribute("data-"+this.options.dataAttribute);
        if(!n){o.videoId=m.id}this.sources[m.id]={stubPlayer:o,observer:this._createObserver(o)}
    }};d.addSourceObject=d._bindAnchorForAnalytics;d.setCurrentStubPlayer=function(){var n;
        var p=this.player.el;var o=p.getAttribute("data-"+this.options.dataAttribute);var m=this._getCurrentSourceObject(o);
        if(m&&m.stubPlayer){this.currentStubPlayer=m.stubPlayer;this.playerType="html5";
            n=this.player.getCurrentSrc();if(n&&n.attributes&&n.attributes.src){this.videoType=n.attributes.src.value.split(".").pop()
            }}};d.destroy=function(){this.deactivate();this.player=null;this.sources=null;this.currentStubPlayer=null;
        this.options=null};d._onPlay=function(){this.setCurrentStubPlayer();if(!this._started){this._proxyEvent("play");
        this._started=true}};d._onLoadStart=function(){this._started=false};d._onEnded=function(){this._started=false;
        this._proxyEvent("ended")};d._onTimeupdate=function(){this._proxyEvent("timeupdate");
        if(this._started&&this.player.getCurrentTime()===0&&this.player.getPaused()){this._started=false
        }};d._onTexttrackshow=function(){this._proxyEvent("captions-enabled")};d._getSourceObjectBySrcObjId=function(m){return this.sources[m]||null
    };d._getCurrentSourceObject=function(m){var n;if(m){n=this._getSourceObjectBySrcObjId(m)
    }return n};d._createStubPlayer=function(m){var n=new l();n.once=i;n.el=m;return n
    };d._getEventData=function(){return{currentTime:this.player.getCurrentTime(),playerType:(this.playerType||"html5"),videoType:(this.videoType||null)}
    };d._createObserver=function(n){var m;if(h&&h.observer&&h.observer.Video){m=new h.observer.Video(n,{dataAttribute:this.options.dataAttribute})
    }return m};d._proxyEvent=function(m){if(this.currentStubPlayer){this.currentStubPlayer.trigger(m,this._getEventData())
    }};a.exports=k},{"@marcom/ac-analytics":"@marcom/ac-analytics","@marcom/ac-useragent":109,"@marcom/ac-video/event-emitter-shim/EventEmitterShim":201}],256:[function(c,d,a){var h=c("@marcom/ac-dom-events/utils/addEventListener");
    var b=c("@marcom/ac-dom-events/preventDefault");var f=c("../windowload/windowLoad");
    var g=c("../touchclick/TouchClick");d.exports=function i(m,n,k,l){var j=g.create(m);
        j.on("click",function(){n(m)});if(l&&m.id){l.createRoute(m.id,function(){f(function(){n(m)
        })})}}},{"../touchclick/TouchClick":265,"../windowload/windowLoad":266,"@marcom/ac-dom-events/preventDefault":18,"@marcom/ac-dom-events/utils/addEventListener":24}],257:[function(f,a,u){var t=f("@marcom/ac-router").Router;
    var h=f("@marcom/ac-video/player/factory/createShareablePlayer");var m=f("@marcom/ac-video/optimizeVideoUrl");
    var r=f("@marcom/ac-useragent").browser;var s=f("@marcom/ac-useragent");var d=f("./bindAnchor");
    var v=f("./createClickHandler");var p=f("./createModalLink");var i=f("./createNoSupportModalLink");
    var j=f("./createHandheldModalLink");var q=f("./createInlineLink");var l="data-films-options";
    var k=f("@marcom/ac-feature/isHandheld")();var g=r.ie&&r.version.major<=8;var o=s.os.ios;
    var n=f("@marcom/ac-object/defaults");var b={controls:true,urlOptimizer:m};a.exports=function c(w,E){E=E||{};
        E=n(b,E);var C;var x=false;w.forEach(function(F){if(F.hasAttribute(l)){var G=JSON.parse(F.getAttribute(l));
            if(G.sharing){x=true;if(!E.sharing){E.sharing=(G.sharing===true)?{}:G.sharing}}if(G.closeOnEnd===false&&!E.closeOnEnd){E.closeOnEnd=false
            }}});if(x){E.sharing.states=["sharing"];if(E.closeOnEnd===false){E.sharing.states.push("ended");
            E.sharing.endStateTimeout=0}}var B=h(E);var A;C=new t({hashChange:true,pushState:false});
        if(E.modal&&!g&&(!k||!o)){A=p(B,E)}else{if(E.modal&&g){A=i(B,E)}else{if(E.modal){A=j(B,document.body,E)
        }else{A=q(B,E)}}}var y=A.play.bind(A);var D=function(H){var G=0;var F=w.length;
            for(;G<F;G++){if(w[G].id===H||w[G]===H){y(w[G].href)}}};var z=v({player:B,playHandler:y,attr:"data-"+E.dataAttribute});
        w.forEach(function(F){d(F,z,y,C)});C.start();return{play:D,player:B,modalVideo:A.modal}
    }},{"./bindAnchor":256,"./createClickHandler":258,"./createHandheldModalLink":260,"./createInlineLink":261,"./createModalLink":262,"./createNoSupportModalLink":263,"@marcom/ac-feature/isHandheld":50,"@marcom/ac-object/defaults":89,"@marcom/ac-router":106,"@marcom/ac-useragent":109,"@marcom/ac-video/optimizeVideoUrl":202,"@marcom/ac-video/player/factory/createShareablePlayer":208}],258:[function(c,d,b){var f="data-films-options";
    d.exports=function a(g){return function(j){var i=j.getAttribute(f);var h;if(i){h=JSON.parse(i)
    }else{h={sharing:false}}g.player.el.setAttribute(g.attr,j.getAttribute(g.attr)||j.id);
        g.playHandler(j.href,h)}}},{}],259:[function(c,d,b){var g=c("./bindAnchors");var f=c("../analytics/AnalyticsTranslator");
    var h={dataAttribute:"analytics-video-id",analytics:true};d.exports=function a(k,j){j=j||{};
        j=Object.assign({},h,j);var l=g(k,j);if(j.analytics){var i=new f(l.player,j,k);
            i.activate()}return l}},{"../analytics/AnalyticsTranslator":255,"./bindAnchors":257}],260:[function(f,d,g){var i=f("@marcom/ac-classlist/add");
    var j=f("@marcom/ac-classlist/remove");var b="ac-player-handheld";var h="player-fullscreen";
    var a=document.documentElement;d.exports=function c(n,m,l){i(a,b);var k=function(o){var p=function(){if(!n.getPaused()){n.pause()
    }j(n.el,h)};i(n.el,h);n.once("ended",p);n.once("exitfullscreen",p);n.load(o);n.play()
    };m.appendChild(n.el);return{play:k,player:n}}},{"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/remove":7}],261:[function(b,c,a){c.exports=function d(i,h){var g=h.targetElement;
    var f=function(j,k){i.load(j,null,0,k);i.play()};h.playHandler=f;if(g){g.appendChild(i.el)
    }return{play:f,player:i}}},{}],262:[function(f,g,d){var i=f("@marcom/ac-classlist/add");
    var b=f("@marcom/ac-modal").createFullViewportModal;var h=f("./link/ModalLink");
    var a="ac-modal-video";g.exports=function c(k,j){j=j||{};var m=b(k.el);i(m.modalElement,a);
        var l=new h({player:k,modal:m,closeOnEnd:j.closeOnEnd});return l}},{"./link/ModalLink":264,"@marcom/ac-classlist/add":1,"@marcom/ac-modal":74}],263:[function(g,h,f){var i=g("@marcom/ac-classlist/add");
    var b=g("@marcom/ac-modal").createFullViewportModal;var d=g("@marcom/ac-dom-traversal/querySelector");
    var a="ac-modal-video";h.exports=function c(m,l){var o=b(m.el);i(o.modalElement,a);
        var n=0;var k;o.on("open",function(){var p=d(".modal-close",o.el);setTimeout(function(){p.className=p.className
        },0);k=setInterval(function(){n++;p.className=p.className;if(n>10){clearInterval(k);
            n=0}},300)});var j=function(p){o.open()};o.on("willclose",function(){if(k){clearInterval(k);
            n=0}});return{play:j,modal:o,player:m}}},{"@marcom/ac-classlist/add":1,"@marcom/ac-dom-traversal/querySelector":41,"@marcom/ac-modal":74}],264:[function(d,c,h){var l=d("@marcom/ac-classlist/add");
    var n=d("@marcom/ac-classlist/remove");var f=d("@marcom/ac-classlist/contains");
    var m="-tft-";var k="ac-films-modal-cinematic-aspect-ratio";var b="ac-video-cinematic-aspect-ratio";
    var j="ac-modal-video-pip";var o="pictureinpicture:change";var a="has-modal";var g=d("@marcom/ac-console").log;
    var p=function(q){this.modal=q.modal;this.player=q.player;this._closeOnEnd=(q.closeOnEnd!==undefined)?q.closeOnEnd:true;
        this._ended=false;this._pauseTime=0;this._playing=false;this._initialize()};var i=p.prototype;
    i._initialize=function(){this._bindMethods();this.player.on("ended",this._onEnded);
        this.player.on("pause",this._onPaused);if(this.player.supportsPictureInPicture()){this.player.on(o,this._onPipModeChanged)
        }};i._bindMethods=function(){this._onEnded=this._onEnded.bind(this);this._onPipModeChanged=this._onPipModeChanged.bind(this);
        this._onPaused=this._onPaused.bind(this);this._onModalWillClose=this._onModalWillClose.bind(this)
    };i._onPaused=function(){this._pauseTime=Date.now()};i._onEnded=function(){this._ended=true;
        if(!this.player.isPictureInPicture()&&this._closeOnEnd){this.modal.close()}else{if(this.player.isPictureInPicture()){this.player.setPictureInPicture(false);
            n(this.modal.modalElement,j);if(!this._closeOnEnd){this.modal.open();this._show();
                this._bindWillClose()}}}};i._hide=function(){l(this.modal.contentElement,"hidden")
    };i._show=function(){n(this.modal.contentElement,"hidden")};i._onPipModeChanged=function(){if(this._ended){return
    }if(this.player.isPictureInPicture()&&this._isModalOpen()){this._unBindWillClose();
        l(this.modal.modalElement,j);this.modal.close()}else{if(!this._isModalOpen()){n(this.modal.modalElement,j);
        if(!this._pauseTime||(Date.now()-this._pauseTime)>400){this._bindWillClose();this.modal.open()
        }else{this._resetVideo()}}}};i._resetVideo=function(){this.player.pause();this.player.setCurrentTime(0);
        if(this.player.states){this.player.states.setState("none")}};i._onModalWillClose=function(){this._hide();
        this._unBindWillClose();this._resetVideo();this.player.setPictureInPicture(false);
        n(this.modal.modalElement,j)};i._setCinematicMode=function(q){if(q){l(this.player.el,b)
    }else{n(this.player.el,b)}};i._resetPiPVideo=function(){var q=this.player.getVisibleTextTracks();
        q.forEach(function(r){r.mode="hidden"});this._resetVideo();q.forEach(function(r){r.mode="showing"
        })};i.play=function(q,r){this._ended=false;this._setCinematicMode(q.match(m));if(!this.player.isPictureInPicture()){this._show();
        this.modal.open();this._bindWillClose()}else{this._resetPiPVideo()}this.player.load(q,null,0,r);
        this.player.play()};i._bindWillClose=function(){this.modal.on("willclose",this._onModalWillClose)
    };i._unBindWillClose=function(){this.modal.off("willclose",this._onModalWillClose)
    };i._isModalOpen=function(){return f(document.documentElement,a)};i.destroy=function(){this.player.off("ended",this._onEnded);
        this.player.off("paused",this._onPaused);this.player.off(o,this._onPipModeChanged);
        this._unBindWillClose();this.modal.destroy();this.player.destroy()};c.exports=p
},{"@marcom/ac-classlist/add":1,"@marcom/ac-classlist/contains":6,"@marcom/ac-classlist/remove":7,"@marcom/ac-console":8}],265:[function(b,d,a){var i={addEventListener:b("@marcom/ac-dom-events/utils/addEventListener"),removeEventListener:b("@marcom/ac-dom-events/utils/addEventListener"),stop:b("@marcom/ac-dom-events/stop")};
    var g=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;var c=b("@marcom/ac-feature/touchAvailable")();
    b("@marcom/ac-polyfills/Object/create");function h(j){j=j||{};this.el=j.el;this._onTouchStart=this._onTouchStart.bind(this);
        this._onTouchMove=this._onTouchMove.bind(this);this._onTouchEnd=this._onTouchEnd.bind(this);
        this._onClick=this._onClick.bind(this);this._touchStart=false;g.call(this);this.activate()
    }var f=h.prototype=Object.create(g.prototype);f._broadcastClick=function(j){this.trigger("click",{originalEvent:j})
    };f._onClick=function(j){i.stop(j);if(!c){this._broadcastClick(j)}};f._onTouchStart=function(){this._touchStart=true
    };f._onTouchEnd=function(j){if(this._touchStart===true){i.stop(j);this._broadcastClick(j)
    }this._touchStart=false};f._onTouchMove=function(){this._touchStart=false};f.activate=function(){if(c){i.addEventListener(this.el,"touchstart",this._onTouchStart);
        i.addEventListener(this.el,"touchmove",this._onTouchMove);i.addEventListener(this.el,"touchend",this._onTouchEnd)
    }i.addEventListener(this.el,"click",this._onClick)};f.deactivate=function(){i.removeEventListener(this.el,"touchstart",this._onTouchStart);
        i.removeEventListener(this.el,"touchmove",this._onTouchMove);i.removeEventListener(this.el,"touchend",this._onTouchEnd);
        i.removeEventListener(this.el,"click",this._onClick)};h.create=function(k,j){j=j||{};
        return new h({el:k})};d.exports=h},{"@marcom/ac-dom-events/stop":21,"@marcom/ac-dom-events/utils/addEventListener":24,"@marcom/ac-event-emitter-micro":46,"@marcom/ac-feature/touchAvailable":53,"@marcom/ac-polyfills/Object/create":709}],266:[function(c,d,b){var a=false;
    var g=c("@marcom/ac-dom-events");g.addEventListener(window,"load",function(){a=true
    });function f(h){if(a){h()}else{g.addEventListener(window,"load",h)}}d.exports=f
},{"@marcom/ac-dom-events":12}],267:[function(c,d,b){function a(h,j){var i;function g(){var l=arguments;
    var m=this;var k=function(){i=null;h.apply(m,l)};clearTimeout(i);i=setTimeout(k,j)
}function f(){clearTimeout(i)}g.cancel=f;return g}d.exports=a},{}],268:[function(c,d,b){var a=function(){var h="";
    var g;for(g=0;g<arguments.length;g++){if(g>0){h+=","}h+=arguments[g]}return h};
    d.exports=function f(i,h){h=h||a;var g=function(){var j=arguments;var k=h.apply(this,j);
        if(!(k in g.cache)){g.cache[k]=i.apply(this,j)}return g.cache[k]};g.cache={};return g
    }},{}],269:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)
}return f}}},{}],270:[function(b,c,a){c.exports=function d(f,h){var g=null;return function(){if(g===null){f.apply(this,arguments);
    g=setTimeout(function(){g=null},h)}}}},{}],271:[function(c,d,a){var b=(function(){var h=["","-webkit-","-moz-","-o-","-ms-"];
    var f={"animation-delay":"transitionend","-o-animation-delay":"oTransitionEnd","-moz-animation-delay":"transitionend","-webkit-animation-delay":"webkitTransitionEnd","-ms-animation-delay":"transitionend"};
    var l={"animation-delay":"animationstart","-o-animation-delay":"oanimationstart","-moz-animation-delay":"animationstart","-webkit-animation-delay":"webkitAnimationStart","-ms-animation-delay":"MSAnimationStart"};
    var i={"animation-delay":"animationiteration","-o-animation-delay":"oanimationiteration","-moz-animation-delay":"animationiteration","-webkit-animation-delay":"webkitAnimationIteration","-ms-animation-delay":"MSAnimationIteration"};
    var o={"animation-delay":"animationend","-o-animation-delay":"oanimationend","-moz-animation-delay":"animationend","-webkit-animation-delay":"webkitAnimationEnd","-ms-animation-delay":"MSAnimationEnd"};
    var g=document.createElement("_");var j=["","-webkit-","-moz-","-o-","-ms-"];function n(r){for(var p=0;
                                                                                                   p<j.length;p++){var q=h[p]+r;if(g.style[q]!==undefined){return q}}return undefined
    }var m=["-webkit-","","-moz-","-o-","-ms-"];function k(r){for(var p=0;p<m.length;
                                                                  p++){var q=m[p]+r;if(g.style[q]!==undefined){return q}}return undefined}return{filter:k("filter"),transform:n("transform"),transformOrigin:n("transform-origin"),transition:n("transition"),transitionDelay:n("transition-delay"),transitionDuration:n("transition-duration"),transitionProperty:n("transition-property"),transitionTimingFunction:n("transition-timing-function"),transitionEnd:f[n("animation-delay")],animation:n("animation"),animationDelay:n("animation-delay"),animationDirection:n("animation-direction"),animationDuration:n("animation-duration"),animationFillMode:n("animation-fill-mode"),animationIterationCount:n("animation-iteration-count"),animationName:n("animation-name"),animationTimingFunction:n("animation-timing-function"),animationPlayState:n("animation-play-state"),animationStart:l[n("animation-delay")],animationIteration:i[n("animation-delay")],animationEnd:o[n("animation-delay")]}
}());d.exports=b},{}],272:[function(b,c,a){arguments[4][1][0].apply(a,arguments)
},{"./className/add":274,"@marcom/ac-polyfills/Array/prototype.slice":280,"@marcom/ac-polyfills/Element/prototype.classList":281,dup:1}],273:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":274,"./className/contains":275,"./className/remove":277}],274:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{"./contains":275,dup:2}],275:[function(b,c,a){arguments[4][3][0].apply(a,arguments)
},{"./getTokenRegExp":276,dup:3}],276:[function(b,c,a){arguments[4][4][0].apply(a,arguments)
},{dup:4}],277:[function(b,c,a){arguments[4][5][0].apply(a,arguments)},{"./contains":275,"./getTokenRegExp":276,dup:5}],278:[function(b,c,a){arguments[4][6][0].apply(a,arguments)
},{"./className/contains":275,"@marcom/ac-polyfills/Element/prototype.classList":281,dup:6}],279:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":272,"./contains":278,"./remove":282,"./toggle":283}],280:[function(b,c,a){(function(){var d=Array.prototype.slice;
    try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
        if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
        }var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
        }k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
        }}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],281:[function(b,c,a){
    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
    if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
    }var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
        },g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
        }}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
    },k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
    }if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
    }return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
        for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
        }},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
    };i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
        do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
        }};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
        u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
    }};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
        if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
    };if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
    }catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
    }}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
        f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
            DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
                h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
            }else{return d.call(this,h)}}}f=null}())}}},{}],282:[function(b,c,a){arguments[4][7][0].apply(a,arguments)
},{"./className/remove":277,"@marcom/ac-polyfills/Array/prototype.slice":280,"@marcom/ac-polyfills/Element/prototype.classList":281,dup:7}],283:[function(c,d,b){c("@marcom/ac-polyfills/Element/prototype.classList");
    var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
        var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
        }if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
    }},{"./className":273,"@marcom/ac-polyfills/Element/prototype.classList":281}],284:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
    var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
    return g}f.prototype=window.Event.prototype;return f}())}}},{}],285:[function(b,c,a){arguments[4][13][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":286,"./shared/prefixHelper":287,"./shared/windowFallbackEventTypes":288,"./utils/eventTypeAvailable":289,dup:13}],286:[function(b,c,a){arguments[4][14][0].apply(a,arguments)
},{dup:14}],287:[function(b,c,a){arguments[4][15][0].apply(a,arguments)},{dup:15}],288:[function(b,c,a){arguments[4][16][0].apply(a,arguments)
},{dup:16}],289:[function(b,c,a){arguments[4][17][0].apply(a,arguments)},{dup:17}],290:[function(b,c,a){arguments[4][162][0].apply(a,arguments)
},{"./addEventListener":291,"./dispatchEvent":292,"./preventDefault":293,"./removeEventListener":294,"./stop":296,"./stopPropagation":297,"./target":298,dup:162}],291:[function(b,c,a){arguments[4][163][0].apply(a,arguments)
},{"./shared/getEventType":295,"./utils/addEventListener":299,dup:163}],292:[function(b,c,a){arguments[4][164][0].apply(a,arguments)
},{"./shared/getEventType":295,"./utils/dispatchEvent":300,dup:164}],293:[function(b,c,a){arguments[4][165][0].apply(a,arguments)
},{dup:165}],294:[function(b,c,a){arguments[4][166][0].apply(a,arguments)},{"./shared/getEventType":295,"./utils/removeEventListener":301,dup:166}],295:[function(b,c,a){arguments[4][167][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getEventType":285,dup:167}],296:[function(b,c,a){arguments[4][168][0].apply(a,arguments)
},{"./preventDefault":293,"./stopPropagation":297,dup:168}],297:[function(b,c,a){arguments[4][169][0].apply(a,arguments)
},{dup:169}],298:[function(b,c,a){arguments[4][170][0].apply(a,arguments)},{dup:170}],299:[function(b,c,a){arguments[4][171][0].apply(a,arguments)
},{dup:171}],300:[function(b,c,a){arguments[4][172][0].apply(a,arguments)},{"@marcom/ac-polyfills/CustomEvent":284,dup:172}],301:[function(b,c,a){arguments[4][173][0].apply(a,arguments)
},{dup:173}],302:[function(b,c,a){arguments[4][27][0].apply(a,arguments)},{dup:27}],303:[function(b,c,a){arguments[4][28][0].apply(a,arguments)
},{dup:28}],304:[function(b,c,a){arguments[4][29][0].apply(a,arguments)},{dup:29}],305:[function(b,c,a){arguments[4][30][0].apply(a,arguments)
},{dup:30}],306:[function(b,c,a){arguments[4][31][0].apply(a,arguments)},{dup:31}],307:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{"../isNode":311,dup:32}],308:[function(b,c,a){arguments[4][33][0].apply(a,arguments)
},{"../COMMENT_NODE":302,"../DOCUMENT_FRAGMENT_NODE":303,"../ELEMENT_NODE":305,"../TEXT_NODE":306,"./isNodeType":307,dup:33}],309:[function(b,c,a){arguments[4][34][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":303,"./internal/isNodeType":307,dup:34}],310:[function(b,c,a){arguments[4][35][0].apply(a,arguments)
},{"./ELEMENT_NODE":305,"./internal/isNodeType":307,dup:35}],311:[function(b,c,a){arguments[4][36][0].apply(a,arguments)
},{dup:36}],312:[function(b,c,a){arguments[4][37][0].apply(a,arguments)},{"./internal/validate":308,dup:37}],313:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
    var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
    }}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],314:[function(b,c,a){arguments[4][280][0].apply(a,arguments)
},{dup:280}],315:[function(c,d,b){var g=c("@marcom/ac-dom-nodes/isElement");var a=c("./matchesSelector");
    var h=c("./internal/validate");d.exports=function f(m,j,i,l){var k=[];h.childNode(m,true,"ancestors");
        h.selector(j,false,"ancestors");if(i&&g(m)&&(!j||a(m,j))){k.push(m)}l=l||document.body;
        if(m!==l){while((m=m.parentNode)&&g(m)){if(!j||a(m,j)){k.push(m)}if(m===l){break
        }}}return k}},{"./internal/validate":317,"./matchesSelector":318,"@marcom/ac-dom-nodes/isElement":310}],316:[function(b,c,a){arguments[4][38][0].apply(a,arguments)
},{dup:38}],317:[function(b,c,a){arguments[4][39][0].apply(a,arguments)},{"@marcom/ac-dom-nodes/COMMENT_NODE":302,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":303,"@marcom/ac-dom-nodes/DOCUMENT_NODE":304,"@marcom/ac-dom-nodes/ELEMENT_NODE":305,"@marcom/ac-dom-nodes/TEXT_NODE":306,"@marcom/ac-dom-nodes/isNode":311,"@marcom/ac-polyfills/Array/prototype.indexOf":313,dup:39}],318:[function(b,c,a){arguments[4][40][0].apply(a,arguments)
},{"./internal/nativeMatches":316,"./internal/validate":317,"./shims/matchesSelector":321,"@marcom/ac-dom-nodes/isElement":310,dup:40}],319:[function(b,c,a){arguments[4][41][0].apply(a,arguments)
},{"./internal/validate":317,"./shims/querySelector":322,dup:41}],320:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{"./internal/validate":317,"./shims/querySelectorAll":323,"@marcom/ac-polyfills/Array/prototype.slice":314,dup:42}],321:[function(b,c,a){arguments[4][43][0].apply(a,arguments)
},{"../querySelectorAll":320,dup:43}],322:[function(b,c,a){arguments[4][44][0].apply(a,arguments)
},{"./querySelectorAll":323,dup:44}],323:[function(b,c,a){arguments[4][45][0].apply(a,arguments)
},{"@marcom/ac-dom-nodes/isDocumentFragment":309,"@marcom/ac-dom-nodes/isElement":310,"@marcom/ac-dom-nodes/remove":312,"@marcom/ac-polyfills/Array/prototype.indexOf":313,dup:45}],324:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
    a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":325,"./ac-clock/ThrottledClock":326,"./ac-clock/sharedClockInstance":327}],325:[function(c,d,b){c("@marcom/ac-polyfills/Function/prototype.bind");
    c("@marcom/ac-polyfills/requestAnimationFrame");var g;var f=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var a=new Date().getTime();function h(){f.call(this);this.lastFrameTime=null;this._animationFrame=null;
        this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
        this._getTime=Date.now||function(){return new Date().getTime()}}g=h.prototype=new f(null);
    g.start=function(){if(this._active){return}this._tick()};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
    }this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
        this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
    };g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
    };g._onAnimationFrame=function(k){if(this.lastFrameTime===null){this.lastFrameTime=k
    }var l=k-this.lastFrameTime;var j=0;if(l>=1000){l=0}if(l!==0){j=1000/l}if(this._firstFrame===true){l=0;
        this._firstFrame=false}if(j===0){this._firstFrame=true}else{var i={time:k,delta:l,fps:j,naturalFps:j,timeNow:this._getTime()};
        this.trigger("update",i);this.trigger("draw",i)}this._animationFrame=null;this.lastFrameTime=k;
        if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{"@marcom/ac-event-emitter-micro":373,"@marcom/ac-polyfills/Function/prototype.bind":381,"@marcom/ac-polyfills/requestAnimationFrame":382}],326:[function(c,d,b){c("@marcom/ac-polyfills/requestAnimationFrame");
    var g;var a=c("./sharedClockInstance"),f=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
        this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
        this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
    }g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
    };g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
        return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
        this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
    }var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
    }if(Math.ceil(1000/j)>=this._fps+2){return}this._clockEvent=i;this._clockEvent.delta=j;
        this._clockEvent.fps=1000/j;this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
        this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
    };d.exports=h},{"./sharedClockInstance":327,"@marcom/ac-event-emitter-micro":373,"@marcom/ac-polyfills/requestAnimationFrame":382}],327:[function(b,c,a){var d=b("./Clock");
    c.exports=new d()},{"./Clock":325}],328:[function(b,c,a){c.exports={Clip:b("./ac-clip/Clip")}
},{"./ac-clip/Clip":329}],329:[function(c,b,d){c("@marcom/ac-polyfills/Array/isArray");
    var g=c("@marcom/ac-object/create");var l=c("@marcom/ac-easing").createPredefined;
    var a=c("@marcom/ac-clock");var j=c("@marcom/ac-easing").Ease;var k=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var i="ease";function h(o,n,q,m){m=m||{};this._options=m;this._isYoyo=m.yoyo;this._direction=1;
        this._timeScale=1;this._loop=m.loop||0;this._loopCount=0;this._target=o;this.duration(n);
        this._delay=(m.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
        this._clock=m.clock||a;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
            };this._propsTo=q||{};this._propsFrom=m.propsFrom||{};this._onStart=m.onStart||null;
        this._onUpdate=m.onUpdate||null;this._onDraw=m.onDraw||null;this._onComplete=m.onComplete||null;
        var p=m.ease||i;this._ease=(typeof p==="function")?new j(p):l(p);this._start=this._start.bind(this);
        this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
        h._add(this);k.call(this)}var f=h.prototype=g(k.prototype);h.COMPLETE="complete";
    h.PAUSE="pause";h.PLAY="play";f.play=function(){if(!this._playing){this._playing=true;
        if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
            this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
            this._delayStart=this._getTime()}}return this};f.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
        clearTimeout(this._startTimeout)}this._stop();this.trigger(h.PAUSE,this)}return this
    };f.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
        this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
        this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
        this._onUpdate=null;this._onDraw=null;this._onComplete=null;h._remove(this);k.prototype.destroy.call(this);
        return this};f.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
        this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
        this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
        }if(this._onDraw){this._onDraw.call(this,this)}return this};f.playing=function(){return this._playing
    };f.target=function(){return this._target};f.duration=function(m){if(m!==undefined){this._duration=m;
        this._durationMs=(m*1000)/this._timeScale;if(this._playing){this._setStartTime()
        }}return this._duration};f.timeScale=function(m){if(m!==undefined){this._timeScale=m;
        this.duration(this._duration)}return this._timeScale};f.currentTime=function(m){if(m!==undefined){return this.progress(m/this._duration)*this._duration
    }return(this.progress()*this._duration)};f.progress=function(m){if(m!==undefined){this._progress=Math.min(1,Math.max(0,m));
        this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&m===1){this._completeProps();
            if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
            }this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
        }if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};f._resetLoop=function(n,m){var o;
        for(o in m){if(m.hasOwnProperty(o)){if(m[o]!==null){if(typeof m[o]==="object"){this._resetLoop(n[o],m[o])
        }else{n[o]=m[o]}}}}};f._cloneObjects=function(){var o={};var n={};var m={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,o,n,m);
        return{target:o,propsTo:n,propsFrom:m}};f._cloneObjectsLoop=function(p,t,s,r,n,m){var o;
        var q;for(q in s){if(s.hasOwnProperty(q)&&t[q]===undefined&&p[q]!==undefined){r[q]=p[q];
            n[q]=p[q];m[q]=s[q]}}for(q in t){if(p.hasOwnProperty(q)){o=typeof p[q];if(p[q]!==null&&o==="object"){if(Array.isArray(p[q])){r[q]=[];
            n[q]=[];m[q]=[]}else{r[q]={};n[q]={};m[q]={}}this._cloneObjectsLoop(p[q],t[q]||{},s[q]||{},r[q],n[q],m[q])
        }else{if(t[q]!==null&&o==="number"){r[q]=p[q];n[q]=t[q];if(s&&s[q]!==undefined){m[q]=s[q]
        }}}}}};f._prepareProperties=function(){if(!this._isPrepared){var m=this._cloneObjects();
        this._storeTarget=m.target;this._propsTo=m.propsTo;this._storePropsTo=this._propsTo;
        this._propsFrom=m.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
    }};f._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
    };f._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
        this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
    f._setDiffLoop=function(r,q,o,n){var m;var p;for(p in r){if(r.hasOwnProperty(p)){m=typeof r[p];
        if(r[p]!==null&&m==="object"){q[p]=q[p]||{};n[p]=n[p]||{};this._setDiffLoop(r[p],q[p],o[p],n[p])
        }else{if(m==="number"&&o[p]!==undefined){if(q[p]!==undefined){o[p]=q[p]}else{q[p]=o[p]
        }n[p]=r[p]-o[p]}else{r[p]=null;q[p]=null}}}}};f._start=function(){this._startTimeout=null;
        this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
        this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
        }this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
        }this.trigger(h.PLAY,this)};f._stop=function(){this._playing=false;this._running=false;
        this._clock.off("update",this._update);this._clock.off("draw",this._draw)};f._updateProps=function(){var m;
        if(this._direction===1){m=this._ease.getValue(this._progress)}else{m=1-this._ease.getValue(1-this._progress)
        }this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,m)
    };f._updatePropsLoop=function(r,q,o,n,m){var p;for(p in r){if(r.hasOwnProperty(p)&&r[p]!==null){if(typeof r[p]!=="number"){this._updatePropsLoop(r[p],q[p],o[p],n[p],m)
    }else{o[p]=q[p]+(n[p]*m)}}}};f._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
    };f._completePropsLoop=function(o,m){var n;for(n in o){if(o.hasOwnProperty(n)&&o[n]!==null){if(typeof o[n]!=="number"){this._completePropsLoop(o[n],m[n])
    }else{m[n]=o[n]}}}};f._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
        this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
        if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
        this.progress(0);this._start()}else{this.trigger(h.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
    }if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};f._update=function(m){if(this._running){this._progress=(m.timeNow-this._startTime)/this._durationMs;
        if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
        }else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
    f._draw=function(m){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
        if(this._progress===1){this._complete()}}};h._instantiate=function(){this._clips=[];
        return this};h._add=function(m){this._clips.push(m)};h._remove=function(n){var m=this._clips.indexOf(n);
        if(m>-1){this._clips.splice(m,1)}};h.getAll=function(o){if(o!==undefined){var m=[];
        var n=this._clips.length;while(n--){if(this._clips[n].target()===o){m.push(this._clips[n])
        }}return m}return Array.prototype.slice.call(this._clips)};h.destroyAll=function(o){var m=this.getAll(o);
        if(this._clips.length===m.length){this._clips=[]}var n=m.length;while(n--){m[n].destroy()
        }return m};h.to=function(o,n,p,m){m=m||{};if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
    }return new h(o,n,p,m).play()};h.from=function(p,o,m,n){n=n||{};n.propsFrom=m;if(n.destroyOnComplete===undefined){n.destroyOnComplete=true
    }return new h(p,o,n.propsTo,n).play()};b.exports=h._instantiate()},{"@marcom/ac-clock":324,"@marcom/ac-easing":365,"@marcom/ac-event-emitter-micro":373,"@marcom/ac-object/create":376,"@marcom/ac-polyfills/Array/isArray":378}],330:[function(b,c,a){var d=b("./ac-color/Color");
    d.decimalToHex=b("./ac-color/static/decimalToHex");d.hexToDecimal=b("./ac-color/static/hexToDecimal");
    d.hexToRgb=b("./ac-color/static/hexToRgb");d.isColor=b("./ac-color/static/isColor");
    d.isHex=b("./ac-color/static/isHex");d.isRgb=b("./ac-color/static/isRgb");d.isRgba=b("./ac-color/static/isRgba");
    d.mixColors=b("./ac-color/static/mixColors");d.rgbaToArray=b("./ac-color/static/rgbaToArray");
    d.rgbToArray=b("./ac-color/static/rgbToArray");d.rgbToDecimal=b("./ac-color/static/rgbToDecimal");
    d.rgbToHex=b("./ac-color/static/rgbToHex");d.rgbToHsl=b("./ac-color/static/rgbToHsl");
    d.rgbToHsv=b("./ac-color/static/rgbToHsv");d.rgbaToObject=b("./ac-color/static/rgbaToObject");
    d.rgbToObject=b("./ac-color/static/rgbToObject");d.shortToLongHex=b("./ac-color/static/shortToLongHex");
    c.exports={Color:d}},{"./ac-color/Color":331,"./ac-color/static/decimalToHex":333,"./ac-color/static/hexToDecimal":334,"./ac-color/static/hexToRgb":335,"./ac-color/static/isColor":336,"./ac-color/static/isHex":337,"./ac-color/static/isRgb":338,"./ac-color/static/isRgba":339,"./ac-color/static/mixColors":340,"./ac-color/static/rgbToArray":341,"./ac-color/static/rgbToDecimal":342,"./ac-color/static/rgbToHex":343,"./ac-color/static/rgbToHsl":344,"./ac-color/static/rgbToHsv":345,"./ac-color/static/rgbToObject":346,"./ac-color/static/rgbaToArray":347,"./ac-color/static/rgbaToObject":348,"./ac-color/static/shortToLongHex":349}],331:[function(d,a,q){var h=d("./helpers/cssColorNames");
    var m=d("./static/hexToRgb");var l=d("./static/isColor");var f=d("./static/isHex");
    var b=d("./static/isRgba");var p=d("./static/mixColors");var k=d("./static/rgbaToArray");
    var n=d("./static/rgbToArray");var s=d("./static/rgbToDecimal");var i=d("./static/rgbToHex");
    var c=d("./static/rgbaToObject");var j=d("./static/rgbToObject");var o=d("./static/shortToLongHex");
    function r(t){if(!l(t)&&!h.nameToRgbObject[t]){throw new Error(t+" is not a supported color.")
    }this._setColor(t)}var g=r.prototype;g._setColor=function(t){this._color={};if(f(t)){this._color.hex=o(t);
        this._color.rgb={color:m(t)}}else{if(b(t)){this._color.rgba={color:t};var v=this.rgbaObject();
        this._color.rgb={color:"rgb("+v.r+", "+v.g+", "+v.b+")"}}else{if(h.nameToRgbObject[t]){var u=h.nameToRgbObject[t];
        this._color.rgb={object:u,color:"rgb("+u.r+", "+u.g+", "+u.b+")"}}else{this._color.rgb={color:t}
    }}}};g.rgb=function(){return this._color.rgb.color};g.rgba=function(){if(this._color.rgba===undefined){var t=this.rgbObject();
        this._color.rgba={color:"rgba("+t.r+", "+t.g+", "+t.b+", 1)"}}return this._color.rgba.color
    };g.hex=function(){if(this._color.hex===undefined){this._color.hex=i.apply(this,this.rgbArray())
    }return this._color.hex};g.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=s(this.rgb())
    }return this._color.decimal};g.cssName=function(){return h.rgbToName[this.rgb()]||null
    };g.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=n(this.rgb())
    }return this._color.rgb.array};g.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
    }if(this._color.rgba.array===undefined){this._color.rgba.array=k(this.rgba())}return this._color.rgba.array
    };g.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=j(this.rgb())
    }return this._color.rgb.object};g.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
    }if(this._color.rgba.object===undefined){this._color.rgba.object=c(this.rgba())
    }return this._color.rgba.object};g.getRed=function(){return this.rgbObject().r};
    g.getGreen=function(){return this.rgbObject().g};g.getBlue=function(){return this.rgbObject().b
    };g.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
    };g.setRed=function(t){if(t!==this.getRed()){this._setColor("rgba("+t+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
    }return this.rgbObject().r};g.setGreen=function(t){if(t!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+t+", "+this.getBlue()+", "+this.getAlpha()+")")
    }return this.rgbObject().g};g.setBlue=function(t){if(t!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+t+", "+this.getAlpha()+")")
    }return this.rgbObject().b};g.setAlpha=function(t){if(t!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+t+")")
    }return this.rgbaObject().a};g.mix=function(t,u){var v=j(p(this.rgb(),t,u));this._setColor("rgba("+v.r+", "+v.g+", "+v.b+", "+this.getAlpha()+")");
        return this.rgb()};g.clone=function(){return new r(this.rgb())};a.exports=r},{"./helpers/cssColorNames":332,"./static/hexToRgb":335,"./static/isColor":336,"./static/isHex":337,"./static/isRgba":339,"./static/mixColors":340,"./static/rgbToArray":341,"./static/rgbToDecimal":342,"./static/rgbToHex":343,"./static/rgbToObject":346,"./static/rgbaToArray":347,"./static/rgbaToObject":348,"./static/shortToLongHex":349}],332:[function(b,c,a){var d={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
    var f={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
    c.exports={rgbToName:d,nameToRgbObject:f}},{}],333:[function(c,d,b){d.exports=function a(f){return"#"+(f).toString(16)
}},{}],334:[function(c,d,a){d.exports=function b(f){return parseInt(f.substr(1),16)
}},{}],335:[function(d,f,c){var a=d("./shortToLongHex");f.exports=function b(h){h=a(h);
    var g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return g?"rgb("+parseInt(g[1],16)+", "+parseInt(g[2],16)+", "+parseInt(g[3],16)+")":null
}},{"./shortToLongHex":349}],336:[function(c,f,b){var h=c("./isRgb");var g=c("./isRgba");
    var a=c("./isHex");f.exports=function d(i){return a(i)||h(i)||g(i)}},{"./isHex":337,"./isRgb":338,"./isRgba":339}],337:[function(c,d,b){d.exports=function a(g){var f=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    return f.test(g)}},{}],338:[function(b,c,a){c.exports=function d(g){var f=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
    return f.exec(g)!==null}},{}],339:[function(b,c,a){c.exports=function d(g){var f=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
    return f.exec(g)!==null}},{}],340:[function(d,f,c){var b=d("./isHex");var a=d("./hexToRgb");
    var h=d("./rgbToObject");f.exports=function g(n,m,l){n=b(n)?a(n):n;m=b(m)?a(m):m;
        n=h(n);m=h(m);var k=n.r+((m.r-n.r)*l);var j=n.g+((m.g-n.g)*l);var i=n.b+((m.b-n.b)*l);
        return"rgb("+Math.round(k)+", "+Math.round(j)+", "+Math.round(i)+")"}},{"./hexToRgb":335,"./isHex":337,"./rgbToObject":346}],341:[function(b,c,a){var d=b("./rgbToObject");
    c.exports=function f(g){var h=d(g);return[h.r,h.g,h.b]}},{"./rgbToObject":346}],342:[function(d,f,b){var c=d("./hexToDecimal");
    var h=d("./rgbToArray");var g=d("./rgbToHex");f.exports=function a(i){var j=g.apply(this,h(i));
        return c(j)}},{"./hexToDecimal":334,"./rgbToArray":341,"./rgbToHex":343}],343:[function(b,c,a){c.exports=function d(i,h,f){return"#"+((1<<24)+(i<<16)+(h<<8)+f).toString(16).slice(1)
}},{}],344:[function(c,d,b){d.exports=function a(f,m,o){if(arguments.length!==3){return false
}f/=255;m/=255;o/=255;var p=Math.max(f,m,o);var j=Math.min(f,m,o);var n=p+j;var q=p-j;
    var k;var t;var i=(n/2);if(p===j){k=t=0}else{t=i>0.5?q/(2-p-j):q/n;switch(p){case f:k=(m-o)/q;
        break;case m:k=2+((o-f)/q);break;case o:k=4+((f-m)/q);break}k*=60;if(k<0){k+=360
    }}return([k,Math.round(100*t),Math.round(100*i)])}},{}],345:[function(c,d,a){d.exports=function b(f,m,n){if(arguments.length!==3){return false
}var i=f/255;var j=m/255;var p=n/255;var o=Math.max(i,j,p);var k=Math.min(i,j,p);
    var l;var u;var t=o;var q=o-k;u=o===0?0:q/o;if(o===k){l=0}else{switch(o){case i:l=(j-p)/q+(j<p?6:0);
        break;case j:l=(p-i)/q+2;break;case p:l=(i-j)/q+4;break}l/=6}return[Math.round(360*l),Math.round(100*u),Math.round(100*t)]
}},{}],346:[function(b,c,a){c.exports=function d(g){var h=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
    var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3])}}},{}],347:[function(b,c,a){var f=b("./rgbaToObject");
    c.exports=function d(g){var h=f(g);return[h.r,h.g,h.b,h.a]}},{"./rgbaToObject":348}],348:[function(b,c,a){c.exports=function d(g){var h=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
    var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3]),a:Number(f[4])}
}},{}],349:[function(c,d,b){d.exports=function a(g){var f=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    g=g.replace(f,function(i,k,j,h){return"#"+k+k+j+j+h+h});return g}},{}],350:[function(b,c,a){arguments[4][145][0].apply(a,arguments)
},{"./utils/getBoundingClientRect":351,dup:145}],351:[function(b,c,a){arguments[4][154][0].apply(a,arguments)
},{dup:154}],352:[function(d,f,c){var b=d("./shared/stylePropertyCache");var h=d("./getStyleProperty");
    var g=d("./getStyleValue");f.exports=function a(k,j){var i;k=h(k);if(!k){return false
    }i=b[k].css;if(typeof j!=="undefined"){j=g(k,j);if(j===false){return false}i+=":"+j+";"
    }return i}},{"./getStyleProperty":353,"./getStyleValue":354,"./shared/stylePropertyCache":357}],353:[function(f,d,h){var a=f("./shared/stylePropertyCache");
    var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
    var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
        a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
        var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
        if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
        }for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
        }return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":355,"./shared/prefixHelper":356,"./shared/stylePropertyCache":357,"./utils/toCSS":360,"./utils/toDOM":361}],354:[function(d,b,h){var f=d("./getStyleProperty");
    var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
    var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
        n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
            var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
            if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
            });p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
            }i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
    }},{"./getStyleProperty":353,"./shared/prefixHelper":356,"./shared/stylePropertyCache":357,"./shared/styleValueAvailable":358}],355:[function(c,d,b){var f;
    d.exports=function a(){if(!f){f=document.createElement("_")}else{f.style.cssText="";
        f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null}},{}],356:[function(b,c,a){arguments[4][15][0].apply(a,arguments)
},{dup:15}],357:[function(b,c,a){c.exports={}},{}],358:[function(c,b,d){var a=c("./stylePropertyCache");
    var f=c("./getStyleTestElement");var i=false;var k;var j;var g=function(){var l;
        if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);j=false;l=f();try{l.style.width="invalid"
        }catch(m){j=true}}};b.exports=function h(o,n){var m;var l;g();if(k){o=a[o].css;
        return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n}catch(p){return false
    }}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
    }},{"./getStyleTestElement":355,"./stylePropertyCache":357}],359:[function(c,d,a){var b=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
    d.exports=function f(g){g=String.prototype.replace.call(g,b,"");return g.charAt(0).toLowerCase()+g.substring(1)
    }},{}],360:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
    if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],361:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],362:[function(c,d,b){var f=c("@marcom/ac-prefixer/getStyleProperty");
    var g=c("@marcom/ac-prefixer/stripPrefixes");d.exports=function a(){var k=Array.prototype.slice.call(arguments);
        var p=k.shift(k);var m=window.getComputedStyle(p);var l={};var o;var h;var n;var j;
        if(typeof k[0]!=="string"){k=k[0]}for(j=0;j<k.length;j++){o=k[j];h=f(o);if(h){o=g(h);
            n=m[h];if(!n||n==="auto"){n=null}if(n){n=g(n)}}else{n=null}l[o]=n}return l}},{"@marcom/ac-prefixer/getStyleProperty":353,"@marcom/ac-prefixer/stripPrefixes":359}],363:[function(c,d,b){d.exports=function a(j){var h;
    var g;var f;if(!j&&j!==0){return""}if(Array.isArray(j)){return j+""}if(typeof j==="object"){h="";
        g=Object.keys(j);for(f=0;f<g.length;f++){h+=g[f]+"("+j[g[f]]+") "}return h.trim()
    }return j}},{}],364:[function(d,f,c){var a=d("@marcom/ac-prefixer/getStyleCSS");
    var g=d("@marcom/ac-prefixer/getStyleProperty");var b=d("./internal/normalizeValue");
    f.exports=function h(o,l){var k="";var j;var n;var i;var m;var p;if(typeof l!=="object"){throw new TypeError("setStyle: styles must be an Object")
    }for(n in l){m=b(l[n]);if(!m&&m!==0){i=g(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
    }else{o.style[i]=""}}else{j=a(n,m);if(j!==false){k+=" "+j}}}if(k.length){p=o.style.cssText;
        if(p.charAt(p.length-1)!==";"){p+=";"}p+=k;o.style.cssText=p}return o}},{"./internal/normalizeValue":363,"@marcom/ac-prefixer/getStyleCSS":352,"@marcom/ac-prefixer/getStyleProperty":353}],365:[function(b,c,a){c.exports={createBezier:b("./ac-easing/createBezier"),createPredefined:b("./ac-easing/createPredefined"),createStep:b("./ac-easing/createStep"),Ease:b("./ac-easing/Ease")}
},{"./ac-easing/Ease":366,"./ac-easing/createBezier":367,"./ac-easing/createPredefined":368,"./ac-easing/createStep":369}],366:[function(b,c,a){var g="Ease expects an easing function.";
    function f(i,h){if(typeof i!=="function"){throw new TypeError(g)}this.easingFunction=i;
        this.cssString=h||null}var d=f.prototype;d.getValue=function(h){return this.easingFunction(h,0,1,1)
    };c.exports=f},{}],367:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.every");
    var f=b("./Ease");var h=b("./helpers/KeySpline");var d="Bezier curve expects exactly four (4) numbers. Given: ";
    c.exports=function g(j,p,i,o){var q=Array.prototype.slice.call(arguments);var m=q.every(function(r){return(typeof r==="number")
    });if(q.length!==4||!m){throw new TypeError(d+q)}var n=new h(j,p,i,o);var k=function(t,r,u,s){return n.get(t/s)*u+r
    };var l="cubic-bezier("+q.join(", ")+")";return new f(k,l)}},{"./Ease":366,"./helpers/KeySpline":370,"@marcom/ac-polyfills/Array/prototype.every":379}],368:[function(c,a,d){var i=c("./createStep");
    var f=c("./helpers/cssAliases");var b=c("./helpers/easingFunctions");var h=c("./Ease");
    var g='Easing function "%TYPE%" not recognized among the following: '+Object.keys(b).join(", ");
    a.exports=function j(k){var l;if(k==="step-start"){return i(1,"start")}else{if(k==="step-end"){return i(1,"end")
    }else{l=b[k]}}if(!l){throw new Error(g.replace("%TYPE%",k))}return new h(l,f[k])
    }},{"./Ease":366,"./createStep":369,"./helpers/cssAliases":371,"./helpers/easingFunctions":372}],369:[function(d,f,c){var g=d("./Ease");
    var b="Step function expects a numeric value greater than zero. Given: ";var a='Step function direction must be either "start" or "end" (default). Given: ';
    f.exports=function h(i,l){l=l||"end";if(typeof i!=="number"||i<1){throw new TypeError(b+i)
    }if(l!=="start"&&l!=="end"){throw new TypeError(a+l)}var k=function(q,m,r,p){var o=r/i;
        var n=Math[(l==="start")?"floor":"ceil"](q/p*i);return m+o*n};var j="steps("+i+", "+l+")";
        return new g(k,j)}},{"./Ease":366}],370:[function(b,c,a){
    /*! MIT License
     *
     * KeySpline - use bezier curve for transition easing function
     * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
     *
     * Permission is hereby granted, free of charge, to any person obtaining a
     * copy of this software and associated documentation files (the "Software"),
     * to deal in the Software without restriction, including without limitation
     * the rights to use, copy, modify, merge, publish, distribute, sublicense,
     * and/or sell copies of the Software, and to permit persons to whom the
     * Software is furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
     * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
     * DEALINGS IN THE SOFTWARE.
     */
    function d(o,l,n,j){this.get=function(p){if(o===l&&n===j){return p
    }return g(k(p),l,j)};function i(p,q){return 1-3*q+3*p}function h(p,q){return 3*q-6*p
    }function f(p){return 3*p}function g(r,p,q){return((i(p,q)*r+h(p,q))*r+f(p))*r}function m(r,p,q){return 3*i(p,q)*r*r+2*h(p,q)*r+f(p)
    }function k(s){var q=s;for(var r=0;r<4;++r){var t=m(q,o,n);if(t===0){return q}var p=g(q,o,n)-s;
        q-=p/t}return q}}c.exports=d},{}],371:[function(c,d,b){var a={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
    a.easeIn=a["ease-in"];a.easeOut=a["ease-out"];a.easeInOut=a["ease-in-out"];a.easeInCubic=a["ease-in-cubic"];
    a.easeOutCubic=a["ease-out-cubic"];a.easeInOutCubic=a["ease-in-out-cubic"];a.easeInQuad=a["ease-in-quad"];
    a.easeOutQuad=a["ease-out-quad"];a.easeInOutQuad=a["ease-in-out-quad"];a.easeInQuart=a["ease-in-quart"];
    a.easeOutQuart=a["ease-out-quart"];a.easeInOutQuart=a["ease-in-out-quart"];a.easeInQuint=a["ease-in-quint"];
    a.easeOutQuint=a["ease-out-quint"];a.easeInOutQuint=a["ease-in-out-quint"];a.easeInSine=a["ease-in-sine"];
    a.easeOutSine=a["ease-out-sine"];a.easeInOutSine=a["ease-in-out-sine"];a.easeInExpo=a["ease-in-expo"];
    a.easeOutExpo=a["ease-out-expo"];a.easeInOutExpo=a["ease-in-out-expo"];a.easeInCirc=a["ease-in-circ"];
    a.easeOutCirc=a["ease-out-circ"];a.easeInOutCirc=a["ease-in-out-circ"];a.easeInBack=a["ease-in-back"];
    a.easeOutBack=a["ease-out-back"];a.easeInOutBack=a["ease-in-out-back"];d.exports=a
},{}],372:[function(d,b,F){var J=d("../createBezier");var w=J(0.25,0.1,0.25,1).easingFunction;
    var g=J(0.42,0,1,1).easingFunction;var C=J(0,0,0.58,1).easingFunction;var x=J(0.42,0,0.58,1).easingFunction;
    var u=function(Q,O,R,P){return R*Q/P+O};var h=function(Q,O,R,P){return R*(Q/=P)*Q+O
    };var N=function(Q,O,R,P){return -R*(Q/=P)*(Q-2)+O};var D=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q+O
    }return -R/2*((--Q)*(Q-2)-1)+O};var i=function(Q,O,R,P){return R*(Q/=P)*Q*Q+O};
    var a=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q+1)+O};var j=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q+O
    }return R/2*((Q-=2)*Q*Q+2)+O};var o=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q+O};
    var m=function(Q,O,R,P){return -R*((Q=Q/P-1)*Q*Q*Q-1)+O};var p=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q+O
    }return -R/2*((Q-=2)*Q*Q*Q-2)+O};var y=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q*Q+O
    };var v=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q*Q*Q+1)+O};var z=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q*Q+O
    }return R/2*((Q-=2)*Q*Q*Q*Q+2)+O};var c=function(Q,O,R,P){return -R*Math.cos(Q/P*(Math.PI/2))+R+O
    };var L=function(Q,O,R,P){return R*Math.sin(Q/P*(Math.PI/2))+O};var B=function(Q,O,R,P){return -R/2*(Math.cos(Math.PI*Q/P)-1)+O
    };var G=function(Q,O,R,P){return(Q===0)?O:R*Math.pow(2,10*(Q/P-1))+O};var A=function(Q,O,R,P){return(Q===P)?O+R:R*(-Math.pow(2,-10*Q/P)+1)+O
    };var r=function(Q,O,R,P){if(Q===0){return O}else{if(Q===P){return O+R}else{if((Q/=P/2)<1){return R/2*Math.pow(2,10*(Q-1))+O
    }}}return R/2*(-Math.pow(2,-10*--Q)+2)+O};var l=function(Q,O,R,P){return -R*(Math.sqrt(1-(Q/=P)*Q)-1)+O
    };var f=function(Q,O,R,P){return R*Math.sqrt(1-(Q=Q/P-1)*Q)+O};var I=function(Q,O,R,P){if((Q/=P/2)<1){return -R/2*(Math.sqrt(1-Q*Q)-1)+O
    }return R/2*(Math.sqrt(1-(Q-=2)*Q)+1)+O};var E=function(S,Q,U,R){var O=1.70158;
        var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U}}if(!T){T=R*0.3
        }if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}return -(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
    };var H=function(S,Q,U,R){var O=1.70158;var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U
    }}if(!T){T=R*0.3}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)
    }return P*Math.pow(2,-10*S)*Math.sin((S*R-O)*(2*Math.PI)/T)+U+Q};var t=function(S,Q,U,R){var O=1.70158;
        var T=0;var P=U;if(S===0){return Q}else{if((S/=R/2)===2){return Q+U}}if(!T){T=R*(0.3*1.5)
        }if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}if(S<1){return -0.5*(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
        }return P*Math.pow(2,-10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T)*0.5+U+Q};var s=function(R,P,S,Q,O){if(O===undefined){O=1.70158
    }return S*(R/=Q)*R*((O+1)*R-O)+P};var q=function(R,P,S,Q,O){if(O===undefined){O=1.70158
    }return S*((R=R/Q-1)*R*((O+1)*R+O)+1)+P};var k=function(R,P,S,Q,O){if(O===undefined){O=1.70158
    }if((R/=Q/2)<1){return S/2*(R*R*(((O*=(1.525))+1)*R-O))+P}return S/2*((R-=2)*R*(((O*=(1.525))+1)*R+O)+2)+P
    };var K=function(Q,O,R,P){if((Q/=P)<(1/2.75)){return R*(7.5625*Q*Q)+O}else{if(Q<(2/2.75)){return R*(7.5625*(Q-=(1.5/2.75))*Q+0.75)+O
    }else{if(Q<(2.5/2.75)){return R*(7.5625*(Q-=(2.25/2.75))*Q+0.9375)+O}}}return R*(7.5625*(Q-=(2.625/2.75))*Q+0.984375)+O
    };var n=function(Q,O,R,P){return R-K(P-Q,0,R,P)+O};var M=function(Q,O,R,P){if(Q<P/2){return n(Q*2,0,R,P)*0.5+O
    }return K(Q*2-P,0,R,P)*0.5+R*0.5+O};b.exports={linear:u,ease:w,easeIn:g,"ease-in":g,easeOut:C,"ease-out":C,easeInOut:x,"ease-in-out":x,easeInCubic:i,"ease-in-cubic":i,easeOutCubic:a,"ease-out-cubic":a,easeInOutCubic:j,"ease-in-out-cubic":j,easeInQuad:h,"ease-in-quad":h,easeOutQuad:N,"ease-out-quad":N,easeInOutQuad:D,"ease-in-out-quad":D,easeInQuart:o,"ease-in-quart":o,easeOutQuart:m,"ease-out-quart":m,easeInOutQuart:p,"ease-in-out-quart":p,easeInQuint:y,"ease-in-quint":y,easeOutQuint:v,"ease-out-quint":v,easeInOutQuint:z,"ease-in-out-quint":z,easeInSine:c,"ease-in-sine":c,easeOutSine:L,"ease-out-sine":L,easeInOutSine:B,"ease-in-out-sine":B,easeInExpo:G,"ease-in-expo":G,easeOutExpo:A,"ease-out-expo":A,easeInOutExpo:r,"ease-in-out-expo":r,easeInCirc:l,"ease-in-circ":l,easeOutCirc:f,"ease-out-circ":f,easeInOutCirc:I,"ease-in-out-circ":I,easeInBack:s,"ease-in-back":s,easeOutBack:q,"ease-out-back":q,easeInOutBack:k,"ease-in-out-back":k,easeInElastic:E,"ease-in-elastic":E,easeOutElastic:H,"ease-out-elastic":H,easeInOutElastic:t,"ease-in-out-elastic":t,easeInBounce:n,"ease-in-bounce":n,easeOutBounce:K,"ease-out-bounce":K,easeInOutBounce:M,"ease-in-out-bounce":M}
},{"../createBezier":367}],373:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":374}],374:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}var h=this._events[g].indexOf(i);
    if(h===-1){return}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return
}for(var h=this._events[g].length-1;h>=0;h--){if(j!==undefined){this._events[g][h](j)
}else{this._events[g][h]()}}};d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],375:[function(b,c,a){arguments[4][87][0].apply(a,arguments)
},{"./extend":377,"@marcom/ac-polyfills/Array/isArray":378,dup:87}],376:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{dup:88}],377:[function(b,c,a){arguments[4][90][0].apply(a,arguments)},{"@marcom/ac-polyfills/Array/prototype.forEach":380,dup:90}],378:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],379:[function(b,c,a){if(!Array.prototype.every){Array.prototype.every=function d(k,j){var h=Object(this);
    var f=h.length>>>0;var g;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
    }for(g=0;g<f;g+=1){if(g in h&&!k.call(j,h[g],g,h)){return false}}return true}}},{}],380:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(l,k){var j=Object(this);
    var f;var g;if(typeof l!=="function"){throw new TypeError("No function object passed to forEach.")
    }var h=this.length;for(f=0;f<h;f+=1){g=j[f];l.call(k,g,f,j)}}}},{}],381:[function(b,c,a){if(!Function.prototype.bind){Function.prototype.bind=function(d){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var i=Array.prototype.slice.call(arguments,1);var h=this;var f=function(){};var g=function(){return h.apply((this instanceof f&&d)?this:d,i.concat(Array.prototype.slice.call(arguments)))
};f.prototype=this.prototype;g.prototype=new f();return g}}},{}],382:[function(b,c,a){(function(){var f=0;
    var g=["ms","moz","webkit","o"];for(var d=0;d<g.length&&!window.requestAnimationFrame;
                                        ++d){window.requestAnimationFrame=window[g[d]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[g[d]+"CancelAnimationFrame"]||window[g[d]+"CancelRequestAnimationFrame"]
    }if(!window.requestAnimationFrame){window.requestAnimationFrame=function(l,i){var h=Date.now();
        var j=Math.max(0,16-(h-f));var k=window.setTimeout(function(){l(h+j)},j);f=h+j;
        return k}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(h){clearTimeout(h)
    }}}())},{}],383:[function(b,c,a){c.exports=d;function d(f){var g=new Float32Array(16);
    g[0]=f[0];g[1]=f[1];g[2]=f[2];g[3]=f[3];g[4]=f[4];g[5]=f[5];g[6]=f[6];g[7]=f[7];
    g[8]=f[8];g[9]=f[9];g[10]=f[10];g[11]=f[11];g[12]=f[12];g[13]=f[13];g[14]=f[14];
    g[15]=f[15];return g}},{}],384:[function(b,d,a){d.exports=c;function c(){var f=new Float32Array(16);
    f[0]=1;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=1;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;
    f[12]=0;f[13]=0;f[14]=0;f[15]=1;return f}},{}],385:[function(b,c,a){c.exports=d;
    function d(t,r,o){var l=r[0],k=r[1],j=r[2],m=r[3],u=l+l,f=k+k,n=j+j,i=l*u,h=l*f,g=l*n,s=k*f,p=k*n,C=j*n,D=m*u,B=m*f,A=m*n;
        t[0]=1-(s+C);t[1]=h+A;t[2]=g-B;t[3]=0;t[4]=h-A;t[5]=1-(i+C);t[6]=p+D;t[7]=0;t[8]=g+B;
        t[9]=p-D;t[10]=1-(i+s);t[11]=0;t[12]=o[0];t[13]=o[1];t[14]=o[2];t[15]=1;return t
    }},{}],386:[function(c,d,b){d.exports=a;function a(f){f[0]=1;f[1]=0;f[2]=0;f[3]=0;
    f[4]=0;f[5]=1;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;f[12]=0;f[13]=0;f[14]=0;
    f[15]=1;return f}},{}],387:[function(b,c,a){c.exports=d;function d(y,D){var H=D[0],F=D[1],E=D[2],B=D[3],j=D[4],i=D[5],h=D[6],g=D[7],x=D[8],w=D[9],v=D[10],u=D[11],J=D[12],I=D[13],G=D[14],C=D[15],t=H*i-F*j,s=H*h-E*j,r=H*g-B*j,q=F*h-E*i,p=F*g-B*i,o=E*g-B*h,n=x*I-w*J,m=x*G-v*J,l=x*C-u*J,k=w*G-v*I,A=w*C-u*I,z=v*C-u*G,f=t*z-s*A+r*k+q*l-p*m+o*n;
    if(!f){return null}f=1/f;y[0]=(i*z-h*A+g*k)*f;y[1]=(E*A-F*z-B*k)*f;y[2]=(I*o-G*p+C*q)*f;
    y[3]=(v*p-w*o-u*q)*f;y[4]=(h*l-j*z-g*m)*f;y[5]=(H*z-E*l+B*m)*f;y[6]=(G*r-J*o-C*s)*f;
    y[7]=(x*o-v*r+u*s)*f;y[8]=(j*A-i*l+g*n)*f;y[9]=(F*l-H*A-B*n)*f;y[10]=(J*p-I*r+C*t)*f;
    y[11]=(w*r-x*p-u*t)*f;y[12]=(i*m-j*k-h*n)*f;y[13]=(H*k-F*m+E*n)*f;y[14]=(I*s-J*q-G*t)*f;
    y[15]=(x*q-w*s+v*t)*f;return y}},{}],388:[function(c,d,b){d.exports=a;function a(r,v,s){var z=v[0],y=v[1],w=v[2],t=v[3],l=v[4],j=v[5],h=v[6],f=v[7],q=v[8],p=v[9],o=v[10],n=v[11],B=v[12],A=v[13],x=v[14],u=v[15];
    var m=s[0],k=s[1],i=s[2],g=s[3];r[0]=m*z+k*l+i*q+g*B;r[1]=m*y+k*j+i*p+g*A;r[2]=m*w+k*h+i*o+g*x;
    r[3]=m*t+k*f+i*n+g*u;m=s[4];k=s[5];i=s[6];g=s[7];r[4]=m*z+k*l+i*q+g*B;r[5]=m*y+k*j+i*p+g*A;
    r[6]=m*w+k*h+i*o+g*x;r[7]=m*t+k*f+i*n+g*u;m=s[8];k=s[9];i=s[10];g=s[11];r[8]=m*z+k*l+i*q+g*B;
    r[9]=m*y+k*j+i*p+g*A;r[10]=m*w+k*h+i*o+g*x;r[11]=m*t+k*f+i*n+g*u;m=s[12];k=s[13];
    i=s[14];g=s[15];r[12]=m*z+k*l+i*q+g*B;r[13]=m*y+k*j+i*p+g*A;r[14]=m*w+k*h+i*o+g*x;
    r[15]=m*t+k*f+i*n+g*u;return r}},{}],389:[function(c,d,a){d.exports=b;function b(E,L,N,f){var p=f[0],o=f[1],n=f[2],F=Math.sqrt(p*p+o*o+n*n),w,J,v,P,O,M,K,m,l,k,j,D,C,B,A,u,r,q,I,H,G,i,h,g;
    if(Math.abs(F)<0.000001){return null}F=1/F;p*=F;o*=F;n*=F;w=Math.sin(N);J=Math.cos(N);
    v=1-J;P=L[0];O=L[1];M=L[2];K=L[3];m=L[4];l=L[5];k=L[6];j=L[7];D=L[8];C=L[9];B=L[10];
    A=L[11];u=p*p*v+J;r=o*p*v+n*w;q=n*p*v-o*w;I=p*o*v-n*w;H=o*o*v+J;G=n*o*v+p*w;i=p*n*v+o*w;
    h=o*n*v-p*w;g=n*n*v+J;E[0]=P*u+m*r+D*q;E[1]=O*u+l*r+C*q;E[2]=M*u+k*r+B*q;E[3]=K*u+j*r+A*q;
    E[4]=P*I+m*H+D*G;E[5]=O*I+l*H+C*G;E[6]=M*I+k*H+B*G;E[7]=K*I+j*H+A*G;E[8]=P*i+m*h+D*g;
    E[9]=O*i+l*h+C*g;E[10]=M*i+k*h+B*g;E[11]=K*i+j*h+A*g;if(L!==E){E[12]=L[12];E[13]=L[13];
        E[14]=L[14];E[15]=L[15]}return E}},{}],390:[function(c,d,a){d.exports=b;function b(f,m,l){var r=Math.sin(l),k=Math.cos(l),q=m[4],p=m[5],o=m[6],n=m[7],j=m[8],i=m[9],h=m[10],g=m[11];
    if(m!==f){f[0]=m[0];f[1]=m[1];f[2]=m[2];f[3]=m[3];f[12]=m[12];f[13]=m[13];f[14]=m[14];
        f[15]=m[15]}f[4]=q*k+j*r;f[5]=p*k+i*r;f[6]=o*k+h*r;f[7]=n*k+g*r;f[8]=j*k-q*r;f[9]=i*k-p*r;
    f[10]=h*k-o*r;f[11]=g*k-n*r;return f}},{}],391:[function(c,d,b){d.exports=a;function a(j,q,p){var r=Math.sin(p),o=Math.cos(p),i=q[0],h=q[1],g=q[2],f=q[3],n=q[8],m=q[9],l=q[10],k=q[11];
    if(q!==j){j[4]=q[4];j[5]=q[5];j[6]=q[6];j[7]=q[7];j[12]=q[12];j[13]=q[13];j[14]=q[14];
        j[15]=q[15]}j[0]=i*o-n*r;j[1]=h*o-m*r;j[2]=g*o-l*r;j[3]=f*o-k*r;j[8]=i*r+n*o;j[9]=h*r+m*o;
    j[10]=g*r+l*o;j[11]=f*r+k*o;return j}},{}],392:[function(c,d,b){d.exports=a;function a(j,m,l){var r=Math.sin(l),k=Math.cos(l),i=m[0],h=m[1],g=m[2],f=m[3],q=m[4],p=m[5],o=m[6],n=m[7];
    if(m!==j){j[8]=m[8];j[9]=m[9];j[10]=m[10];j[11]=m[11];j[12]=m[12];j[13]=m[13];j[14]=m[14];
        j[15]=m[15]}j[0]=i*k+q*r;j[1]=h*k+p*r;j[2]=g*k+o*r;j[3]=f*k+n*r;j[4]=q*k-i*r;j[5]=p*k-h*r;
    j[6]=o*k-g*r;j[7]=n*k-f*r;return j}},{}],393:[function(b,c,a){c.exports=d;function d(i,g,h){var f=h[0],k=h[1],j=h[2];
    i[0]=g[0]*f;i[1]=g[1]*f;i[2]=g[2]*f;i[3]=g[3]*f;i[4]=g[4]*k;i[5]=g[5]*k;i[6]=g[6]*k;
    i[7]=g[7]*k;i[8]=g[8]*j;i[9]=g[9]*j;i[10]=g[10]*j;i[11]=g[11]*j;i[12]=g[12];i[13]=g[13];
    i[14]=g[14];i[15]=g[15];return i}},{}],394:[function(b,c,a){c.exports=d;function d(r,t,m){var l=m[0],k=m[1],j=m[2],A,w,u,s,i,h,g,f,q,p,o,n;
    if(t===r){r[12]=t[0]*l+t[4]*k+t[8]*j+t[12];r[13]=t[1]*l+t[5]*k+t[9]*j+t[13];r[14]=t[2]*l+t[6]*k+t[10]*j+t[14];
        r[15]=t[3]*l+t[7]*k+t[11]*j+t[15]}else{A=t[0];w=t[1];u=t[2];s=t[3];i=t[4];h=t[5];
        g=t[6];f=t[7];q=t[8];p=t[9];o=t[10];n=t[11];r[0]=A;r[1]=w;r[2]=u;r[3]=s;r[4]=i;
        r[5]=h;r[6]=g;r[7]=f;r[8]=q;r[9]=p;r[10]=o;r[11]=n;r[12]=A*l+i*k+q*j+t[12];r[13]=w*l+h*k+p*j+t[13];
        r[14]=u*l+g*k+o*j+t[14];r[15]=s*l+f*k+n*j+t[15]}return r}},{}],395:[function(b,c,a){c.exports=d;
    function d(i,h){if(i===h){var m=h[1],k=h[2],j=h[3],f=h[6],l=h[7],g=h[11];i[1]=h[4];
        i[2]=h[8];i[3]=h[12];i[4]=m;i[6]=h[9];i[7]=h[13];i[8]=k;i[9]=f;i[11]=h[14];i[12]=j;
        i[13]=l;i[14]=g}else{i[0]=h[0];i[1]=h[4];i[2]=h[8];i[3]=h[12];i[4]=h[1];i[5]=h[5];
        i[6]=h[9];i[7]=h[13];i[8]=h[2];i[9]=h[6];i[10]=h[10];i[11]=h[14];i[12]=h[3];i[13]=h[7];
        i[14]=h[11];i[15]=h[15]}return i}},{}],396:[function(b,d,a){d.exports=c;function c(){var f=new Float32Array(3);
    f[0]=0;f[1]=0;f[2]=0;return f}},{}],397:[function(b,c,a){c.exports=d;function d(g,l,k){var f=l[0],n=l[1],m=l[2],j=k[0],i=k[1],h=k[2];
    g[0]=n*h-m*i;g[1]=m*j-f*h;g[2]=f*i-n*j;return g}},{}],398:[function(c,d,b){d.exports=a;
    function a(g,f){return g[0]*f[0]+g[1]*f[1]+g[2]*f[2]}},{}],399:[function(b,c,a){c.exports=d;
    function d(f,i,h){var g=new Float32Array(3);g[0]=f;g[1]=i;g[2]=h;return g}},{}],400:[function(b,c,a){c.exports=d;
    function d(g){var f=g[0],i=g[1],h=g[2];return Math.sqrt(f*f+i*i+h*h)}},{}],401:[function(c,d,b){d.exports=a;
    function a(i,h){var g=h[0],k=h[1],j=h[2];var f=g*g+k*k+j*j;if(f>0){f=1/Math.sqrt(f);
        i[0]=h[0]*f;i[1]=h[1]*f;i[2]=h[2]*f}return i}},{}],402:[function(b,d,a){d.exports=c;
    function c(){var f=new Float32Array(4);f[0]=0;f[1]=0;f[2]=0;f[3]=0;return f}},{}],403:[function(b,c,a){c.exports=d;
    function d(f,j,i,g){var h=new Float32Array(4);h[0]=f;h[1]=j;h[2]=i;h[3]=g;return h
    }},{}],404:[function(b,d,a){d.exports=c;function c(j,i,g){var f=i[0],l=i[1],k=i[2],h=i[3];
    j[0]=g[0]*f+g[4]*l+g[8]*k+g[12]*h;j[1]=g[1]*f+g[5]*l+g[9]*k+g[13]*h;j[2]=g[2]*f+g[6]*l+g[10]*k+g[14]*h;
    j[3]=g[3]*f+g[7]*l+g[11]*k+g[15]*h;return j}},{}],405:[function(b,c,a){c.exports={Transform:b("./ac-transform/Transform")}
},{"./ac-transform/Transform":406}],406:[function(l,d,H){var k=l("./gl-matrix/mat4");
    var b=l("./gl-matrix/vec3");var a=l("./gl-matrix/vec4");var f=Math.PI/180;var c=180/Math.PI;
    var F=0,y=0,D=1,x=1,B=2,z=3;var j=4,w=4,i=5,v=5,h=6,g=7;var t=8,q=9,o=10,n=11;var G=12,u=12,E=13,s=13,C=14,A=15;
    function p(){this.m=k.create()}var r=p.prototype;r.rotateX=function(J){var I=f*J;
        k.rotateX(this.m,this.m,I);return this};r.rotateY=function(J){var I=f*J;k.rotateY(this.m,this.m,I);
        return this};r.rotateZ=function(J){var I=f*J;k.rotateZ(this.m,this.m,I);return this
    };r.rotate=r.rotateZ;r.rotate3d=function(J,M,L,K){if(M===null||M===undefined){M=J
    }if(L===null||M===undefined){L=J}var I=f*K;k.rotate(this.m,this.m,I,[J,M,L]);return this
    };r.rotateAxisAngle=r.rotate3d;r.scale=function(J,I){I=I||J;k.scale(this.m,this.m,[J,I,1]);
        return this};r.scaleX=function(I){k.scale(this.m,this.m,[I,1,1]);return this};r.scaleY=function(I){k.scale(this.m,this.m,[1,I,1]);
        return this};r.scaleZ=function(I){k.scale(this.m,this.m,[1,1,I]);return this};r.scale3d=function(K,J,I){k.scale(this.m,this.m,[K,J,I]);
        return this};r.skew=function(K,J){if(J===null||J===undefined){return this.skewX(K)
    }K=f*K;J=f*J;var I=k.create();I[w]=Math.tan(K);I[x]=Math.tan(J);k.multiply(this.m,this.m,I);
        return this};r.skewX=function(J){J=f*J;var I=k.create();I[w]=Math.tan(J);k.multiply(this.m,this.m,I);
        return this};r.skewY=function(J){J=f*J;var I=k.create();I[x]=Math.tan(J);k.multiply(this.m,this.m,I);
        return this};r.translate=function(J,I){I=I||0;k.translate(this.m,this.m,[J,I,0]);
        return this};r.translate3d=function(J,I,K){k.translate(this.m,this.m,[J,I,K]);return this
    };r.translateX=function(I){k.translate(this.m,this.m,[I,0,0]);return this};r.translateY=function(I){k.translate(this.m,this.m,[0,I,0]);
        return this};r.translateZ=function(I){k.translate(this.m,this.m,[0,0,I]);return this
    };r.perspective=function(J){var I=k.create();if(J!==0){I[n]=-1/J}k.multiply(this.m,this.m,I)
    };r.inverse=function(){var I=this.clone();I.m=k.invert(I.m,this.m);return I};r.reset=function(){k.identity(this.m);
        return this};r.getTranslateXY=function(){var I=this.m;if(this.isAffine()){return[I[u],I[s]]
    }return[I[G],I[E]]};r.getTranslateXYZ=function(){var I=this.m;if(this.isAffine()){return[I[u],I[s],0]
    }return[I[G],I[E],I[C]]};r.getTranslateX=function(){var I=this.m;if(this.isAffine()){return I[u]
    }return I[G]};r.getTranslateY=function(){var I=this.m;if(this.isAffine()){return I[s]
    }return I[E]};r.getTranslateZ=function(){var I=this.m;if(this.isAffine()){return 0
    }return I[C]};r.clone=function(){var I=new p();I.m=k.clone(this.m);return I};r.toArray=function(){var I=this.m;
        if(this.isAffine()){return[I[y],I[x],I[w],I[v],I[u],I[s]]}return[I[F],I[D],I[B],I[z],I[j],I[i],I[h],I[g],I[t],I[q],I[o],I[n],I[G],I[E],I[C],I[A]]
    };r.fromArray=function(I){this.m=Array.prototype.slice.call(I);return this};r.setMatrixValue=function(J){J=String(J).trim();
        var I=k.create();if(J==="none"){this.m=I;return this}var L=J.slice(0,J.indexOf("(")),M,K;
        if(L==="matrix3d"){M=J.slice(9,-1).split(",");for(K=0;K<M.length;K++){I[K]=parseFloat(M[K])
        }}else{if(L==="matrix"){M=J.slice(7,-1).split(",");for(K=M.length;K--;){M[K]=parseFloat(M[K])
        }I[F]=M[0];I[D]=M[1];I[G]=M[4];I[j]=M[2];I[i]=M[3];I[E]=M[5]}else{throw new TypeError("Invalid Matrix Value")
        }}this.m=I;return this};var m=function(I){return Math.abs(I)<0.0001};r.decompose=function(T){T=T||false;
        var X=k.clone(this.m);var O=b.create();var ad=b.create();var L=b.create();var Q=a.create();
        var J=a.create();var K=b.create();for(var Z=0;Z<16;Z++){X[Z]/=X[A]}var V=k.clone(X);
        V[z]=0;V[g]=0;V[n]=0;V[A]=1;var aa=X[3],M=X[7],P=X[11],af=X[12],ae=X[13],ac=X[14],ab=X[15];
        var S=a.create();if(!m(X[z])||!m(X[g])||!m(X[n])){S[0]=X[z];S[1]=X[g];S[2]=X[n];
            S[3]=X[A];var Y=k.invert(k.create(),V);var R=k.transpose(k.create(),Y);Q=a.transformMat4(Q,S,R)
        }else{Q=a.fromValues(0,0,0,1)}O[0]=af;O[1]=ae;O[2]=ac;var N=[b.create(),b.create(),b.create()];
        N[0][0]=X[0];N[0][1]=X[1];N[0][2]=X[2];N[1][0]=X[4];N[1][1]=X[5];N[1][2]=X[6];N[2][0]=X[8];
        N[2][1]=X[9];N[2][2]=X[10];ad[0]=b.length(N[0]);b.normalize(N[0],N[0]);L[0]=b.dot(N[0],N[1]);
        N[1]=this._combine(N[1],N[0],1,-L[0]);ad[1]=b.length(N[1]);b.normalize(N[1],N[1]);
        L[0]/=ad[1];L[1]=b.dot(N[0],N[2]);N[2]=this._combine(N[2],N[0],1,-L[1]);L[2]=b.dot(N[1],N[2]);
        N[2]=this._combine(N[2],N[1],1,-L[2]);ad[2]=b.length(N[2]);b.normalize(N[2],N[2]);
        L[1]/=ad[2];L[2]/=ad[2];var W=b.cross(b.create(),N[1],N[2]);if(b.dot(N[0],W)<0){for(Z=0;
                                                                                            Z<3;Z++){ad[Z]*=-1;N[Z][0]*=-1;N[Z][1]*=-1;N[Z][2]*=-1}}J[0]=0.5*Math.sqrt(Math.max(1+N[0][0]-N[1][1]-N[2][2],0));
        J[1]=0.5*Math.sqrt(Math.max(1-N[0][0]+N[1][1]-N[2][2],0));J[2]=0.5*Math.sqrt(Math.max(1-N[0][0]-N[1][1]+N[2][2],0));
        J[3]=0.5*Math.sqrt(Math.max(1+N[0][0]+N[1][1]+N[2][2],0));if(N[2][1]>N[1][2]){J[0]=-J[0]
        }if(N[0][2]>N[2][0]){J[1]=-J[1]}if(N[1][0]>N[0][1]){J[2]=-J[2]}var I=a.fromValues(J[0],J[1],J[2],2*Math.acos(J[3]));
        var U=this._rotationFromQuat(J);if(T){L[0]=Math.round(L[0]*c*100)/100;L[1]=Math.round(L[1]*c*100)/100;
            L[2]=Math.round(L[2]*c*100)/100;U[0]=Math.round(U[0]*c*100)/100;U[1]=Math.round(U[1]*c*100)/100;
            U[2]=Math.round(U[2]*c*100)/100;I[3]=Math.round(I[3]*c*100)/100}return{translation:O,scale:ad,skew:L,perspective:Q,quaternion:J,eulerRotation:U,axisAngle:I}
    };r.recompose=function(O,N,K,L,M){O=O||b.create();N=N||b.create();K=K||b.create();
        L=L||a.create();M=M||a.create();var J=k.fromRotationTranslation(k.create(),M,O);
        J[z]=L[0];J[g]=L[1];J[n]=L[2];J[A]=L[3];var I=k.create();if(K[2]!==0){I[q]=K[2];
            k.multiply(J,J,I)}if(K[1]!==0){I[q]=0;I[t]=K[1];k.multiply(J,J,I)}if(K[0]){I[t]=0;
            I[4]=K[0];k.multiply(J,J,I)}k.scale(J,J,N);this.m=J;return this};r.isAffine=function(){return(this.m[B]===0&&this.m[z]===0&&this.m[h]===0&&this.m[g]===0&&this.m[t]===0&&this.m[q]===0&&this.m[o]===1&&this.m[n]===0&&this.m[C]===0&&this.m[A]===1)
    };r.toString=function(){var I=this.m;if(this.isAffine()){return"matrix("+I[y]+", "+I[x]+", "+I[w]+", "+I[v]+", "+I[u]+", "+I[s]+")"
    }return"matrix3d("+I[F]+", "+I[D]+", "+I[B]+", "+I[z]+", "+I[j]+", "+I[i]+", "+I[h]+", "+I[g]+", "+I[t]+", "+I[q]+", "+I[o]+", "+I[n]+", "+I[G]+", "+I[E]+", "+I[C]+", "+I[A]+")"
    };r.toCSSString=r.toString;r._combine=function(J,M,L,K){var I=b.create();I[0]=(L*J[0])+(K*M[0]);
        I[1]=(L*J[1])+(K*M[1]);I[2]=(L*J[2])+(K*M[2]);return I};r._matrix2dToMat4=function(I){var K=k.create();
        for(var L=0;L<4;L++){for(var J=0;J<4;J++){K[L*4+J]=I[L][J]}}return K};r._mat4ToMatrix2d=function(L){var I=[];
        for(var K=0;K<4;K++){I[K]=[];for(var J=0;J<4;J++){I[K][J]=L[K*4+J]}}return I};r._rotationFromQuat=function(I){var M=I[3]*I[3];
        var L=I[0]*I[0];var K=I[1]*I[1];var J=I[2]*I[2];var R=L+K+J+M;var N=I[0]*I[1]+I[2]*I[3];
        var Q,P,O;if(N>0.499*R){P=2*Math.atan2(I[0],I[3]);O=Math.PI/2;Q=0;return b.fromValues(Q,P,O)
        }if(N<-0.499*R){P=-2*Math.atan2(I[0],I[3]);O=-Math.PI/2;Q=0;return b.fromValues(Q,P,O)
        }P=Math.atan2(2*I[1]*I[3]-2*I[0]*I[2],L-K-J+M);O=Math.asin(2*N/R);Q=Math.atan2(2*I[0]*I[3]-2*I[1]*I[2],-L+K-J+M);
        return b.fromValues(Q,P,O)};d.exports=p},{"./gl-matrix/mat4":407,"./gl-matrix/vec3":408,"./gl-matrix/vec4":409}],407:[function(c,d,a){var b={create:c("gl-mat4/create"),rotate:c("gl-mat4/rotate"),rotateX:c("gl-mat4/rotateX"),rotateY:c("gl-mat4/rotateY"),rotateZ:c("gl-mat4/rotateZ"),scale:c("gl-mat4/scale"),multiply:c("gl-mat4/multiply"),translate:c("gl-mat4/translate"),invert:c("gl-mat4/invert"),clone:c("gl-mat4/clone"),transpose:c("gl-mat4/transpose"),identity:c("gl-mat4/identity"),fromRotationTranslation:c("gl-mat4/fromRotationTranslation")};
    d.exports=b},{"gl-mat4/clone":383,"gl-mat4/create":384,"gl-mat4/fromRotationTranslation":385,"gl-mat4/identity":386,"gl-mat4/invert":387,"gl-mat4/multiply":388,"gl-mat4/rotate":389,"gl-mat4/rotateX":390,"gl-mat4/rotateY":391,"gl-mat4/rotateZ":392,"gl-mat4/scale":393,"gl-mat4/translate":394,"gl-mat4/transpose":395}],408:[function(b,d,a){var c={create:b("gl-vec3/create"),dot:b("gl-vec3/dot"),normalize:b("gl-vec3/normalize"),length:b("gl-vec3/length"),cross:b("gl-vec3/cross"),fromValues:b("gl-vec3/fromValues")};
    d.exports=c},{"gl-vec3/create":396,"gl-vec3/cross":397,"gl-vec3/dot":398,"gl-vec3/fromValues":399,"gl-vec3/length":400,"gl-vec3/normalize":401}],409:[function(c,d,a){var b={create:c("gl-vec4/create"),transformMat4:c("gl-vec4/transformMat4"),fromValues:c("gl-vec4/fromValues")};
    d.exports=b},{"gl-vec4/create":402,"gl-vec4/fromValues":403,"gl-vec4/transformMat4":404}],410:[function(g,d,h){g("./helpers/Float32Array");
    var c=g("./helpers/transitionEnd");var i=g("@marcom/ac-clip").Clip;var k=g("./clips/ClipEasing");
    var f=g("./clips/ClipInlineCss");var j=g("./clips/ClipTransitionCss");function b(n,m,o,l){if(n.nodeType){if(c===undefined||(l&&l.inlineStyles)){return new f(n,m,o,l)
    }return new j(n,m,o,l)}return new k(n,m,o,l)}for(var a in i){if(typeof i[a]==="function"&&a.substr(0,1)!=="_"){b[a]=i[a].bind(i)
    }}b.to=function(n,m,o,l){l=l||{};if(l.destroyOnComplete===undefined){l.destroyOnComplete=true
    }return new b(n,m,o,l).play()};b.from=function(o,n,l,m){m=m||{};m.propsFrom=l;if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
    }return new b(o,n,m.propsTo,m).play()};d.exports=b},{"./clips/ClipEasing":413,"./clips/ClipInlineCss":414,"./clips/ClipTransitionCss":415,"./helpers/Float32Array":418,"./helpers/transitionEnd":427,"@marcom/ac-clip":328}],411:[function(b,c,a){c.exports=b("./timeline/Timeline")
},{"./timeline/Timeline":429}],412:[function(b,c,a){c.exports={Clip:b("./Clip"),Timeline:b("./Timeline")}
},{"./Clip":410,"./Timeline":411}],413:[function(b,a,c){var k=b("@marcom/ac-object/clone");
    var g=b("@marcom/ac-object/create");var n=b("@marcom/ac-easing").createPredefined;
    var l=b("../helpers/isCssCubicBezierString");var f=b("../helpers/BezierCurveCssManager");
    var i=b("@marcom/ac-clip").Clip;var j=b("@marcom/ac-easing").Ease;function m(q,p,r,o){if(o&&l(o.ease)){o.ease=f.create(o.ease).toEasingFunction()
    }o=o||{};this._propsEase=o.propsEase||{};i.call(this,q,p,r,o)}var h=i.prototype;
    var d=m.prototype=g(h);d.reset=function(){var p=h.reset.call(this);if(this._clips){var o=this._clips.length;
        while(o--){this._clips[o].reset()}}return p};d.destroy=function(){if(this._clips){var o=this._clips.length;
        while(o--){this._clips[o].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
        return h.destroy.call(this)};d._prepareProperties=function(){var o=0;var r={};var p={};
        var s={};var v;var u;if(this._propsEase){for(v in this._propsTo){if(this._propsTo.hasOwnProperty(v)){u=this._propsEase[v];
            if(l(u)){u=f.create(u).toEasingFunction()}if(u===undefined){if(r[this._ease]===undefined){r[this._ease]={};
                p[this._ease]={};s[this._ease]=this._ease.easingFunction;o++}r[this._ease][v]=this._propsTo[v];
                p[this._ease][v]=this._propsFrom[v]}else{if(typeof u==="function"){r[o]={};p[o]={};
                r[o][v]=this._propsTo[v];p[o][v]=this._propsFrom[v];s[o]=u;o++}else{if(r[u]===undefined){r[u]={};
                p[u]={};s[u]=u;o++}r[u][v]=this._propsTo[v];p[u][v]=this._propsFrom[v]}}}}if(o>1){var q=k(this._options||{},true);
            var t=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
            q.onStart=null;q.onUpdate=null;q.onDraw=null;q.onComplete=null;this._clips=[];for(u in r){if(r.hasOwnProperty(u)){q.ease=s[u];
                q.propsFrom=p[u];this._clips.push(new i(this._target,t,r[u],q))}}u="linear";this._propsTo={};
            this._propsFrom={}}else{for(v in s){if(s.hasOwnProperty(v)){u=s[v]}}}if(u!==undefined){this._ease=(typeof u==="function")?new j(u):n(u)
        }}return h._prepareProperties.call(this)};d._onUpdateClips=function(q){var o=(this._direction===1)?q.progress():1-q.progress();
        var p=this._clips.length;while(p--){this._clips[p].progress(o)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
        }};a.exports=m},{"../helpers/BezierCurveCssManager":417,"../helpers/isCssCubicBezierString":423,"@marcom/ac-clip":328,"@marcom/ac-easing":365,"@marcom/ac-object/clone":375,"@marcom/ac-object/create":376}],414:[function(f,c,g){var l=f("@marcom/ac-dom-styles/setStyle");
    var b=f("../helpers/convertToStyleObject");var d=f("../helpers/convertToTransitionableObjects");
    var i=f("@marcom/ac-object/create");var j=f("../helpers/removeTransitions");var m=f("./ClipEasing");
    function a(p,o,q,n){n=n||{};this._el=p;this._storeOnStart=n.onStart||null;this._storeOnDraw=n.onDraw||null;
        this._storeOnComplete=n.onComplete||null;n.onStart=this._onStart;n.onDraw=this._onDraw;
        n.onComplete=this._onComplete;m.call(this,{},o,q,n)}var k=m.prototype;var h=a.prototype=i(k);
    h.play=function(){var n=k.play.call(this);if(this._remainingDelay!==0){l(this._el,b(this._target))
    }return n};h.reset=function(){var n=k.reset.call(this);l(this._el,b(this._target));
        return n};h.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
        this._storeOnDraw=null;this._storeOnComplete=null;return k.destroy.call(this)};
    h.target=function(){return this._el};h._prepareProperties=function(){var q=d(this._el,this._propsTo,this._propsFrom);
        this._target=q.target;this._propsFrom=q.propsFrom;this._propsTo=q.propsTo;j(this._el,this._target);
        var o=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=b(o);if(this._options.removeStylesOnComplete!==undefined){var r;
            var p=this._options.removeStylesOnComplete;if(typeof p==="boolean"&&p){for(r in this._completeStyles){if(this._completeStyles.hasOwnProperty(r)){this._completeStyles[r]=null
            }}}else{if(typeof p==="object"&&p.length){var n=p.length;while(n--){r=p[n];if(this._completeStyles.hasOwnProperty(r)){this._completeStyles[r]=null
            }}}}}return k._prepareProperties.call(this)};h._onStart=function(n){if(this.playing()&&this._direction===1&&this._delay===0){l(this._el,b(this._propsFrom))
    }if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
    h._onDraw=function(n){l(this._el,b(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
    }};h._onComplete=function(n){l(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
    }};c.exports=a},{"../helpers/convertToStyleObject":420,"../helpers/convertToTransitionableObjects":421,"../helpers/removeTransitions":424,"./ClipEasing":413,"@marcom/ac-dom-styles/setStyle":364,"@marcom/ac-object/create":376}],415:[function(k,b,y){var d=k("@marcom/ac-dom-styles/setStyle");
    var f=k("@marcom/ac-dom-styles/getStyle");var c=k("../helpers/convertToStyleObject");
    var p=k("../helpers/convertToTransitionableObjects");var x=k("@marcom/ac-object/clone");
    var n=k("@marcom/ac-object/create");var u=k("@marcom/ac-easing").createPredefined;
    var m=k("../helpers/isCssCubicBezierString");var v=k("../helpers/removeTransitions");
    var j=k("../helpers/transitionEnd");var o=k("../helpers/waitAnimationFrames");var w=k("../helpers/BezierCurveCssManager");
    var a=k("@marcom/ac-clip").Clip;var s=k("./ClipEasing");var t=k("@marcom/ac-page-visibility").PageVisibilityManager;
    var g="ease";var i="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
    var l="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
    function h(B,A,C,z){z=z||{};this._el=B;this._storeEase=z.ease;if(typeof this._storeEase==="function"){throw new Error(l)
    }this._storeOnStart=z.onStart||null;this._storeOnComplete=z.onComplete||null;z.onStart=this._onStart.bind(this);
        z.onComplete=this._onComplete.bind(this);this._stylesTo=x(C,true);this._stylesFrom=(z.propsFrom)?x(z.propsFrom,true):{};
        this._propsEase=(z.propsEase)?x(z.propsEase,true):{};if(m(z.ease)){z.ease=w.create(z.ease).toEasingFunction()
        }a.call(this,{},A,{},z);this._propsFrom={}}var q=a.prototype;var r=h.prototype=n(q);
    r.play=function(){var z=q.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,c(this._stylesFrom))
    }return z};r.reset=function(){var z=q.reset.call(this);this._stylesClip.reset();
        this._applyStyles(0,c(this._styles));return z};r.destroy=function(){t.off("changed",this._onVisibilityChanged);
        this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
        this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
        this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
        this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
        return q.destroy.call(this)};r.target=function(){return this._el};r.duration=function(A){var z=q.duration.call(this,A);
        if(A===undefined){return z}if(this.playing()){this.progress(this._progress)}return z
    };r.progress=function(z){var A=q.progress.call(this,z);if(z===undefined){return A
    }z=(this._direction===1)?z:1-z;this._stylesClip.progress(z);this._applyStyles(0,c(this._styles));
        if(this.playing()){this._isWaitingForStylesToBeApplied=true;o(this._setStylesAfterWaiting,2)
        }return A};r._prepareProperties=function(){var B=p(this._el,this._stylesTo,this._stylesFrom);
        this._styles=B.target;this._stylesTo=B.propsTo;this._stylesFrom=B.propsFrom;var C=this._storeEase||g;
        this._eases={};this._propsArray=[];var E;this._styleCompleteTo=c(this._stylesTo);
        this._styleCompleteFrom=c(this._stylesFrom);this._propsEaseKeys={};var D;for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){this._propsArray[this._propsArray.length]=D;
            if(this._propsEase[D]===undefined){if(this._eases[C]===undefined){E=this._convertEase(C);
                this._eases[C]=E.css}this._propsEaseKeys[D]=C}else{if(this._eases[this._propsEase[D]]===undefined){E=this._convertEase(this._propsEase[D]);
                this._eases[this._propsEase[D]]=E.css;this._propsEaseKeys[D]=this._propsEase[D];
                this._propsEase[D]=E.js}else{if(m(this._propsEase[D])){this._propsEaseKeys[D]=this._propsEase[D];
                this._propsEase[D]=this._eases[this._propsEase[D]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
        this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
        this._completeStyles=c((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var A=this._options.removeStylesOnComplete;
            if(typeof A==="boolean"&&A){for(D in this._stylesTo){this._completeStyles[D]=null
            }}else{if(typeof A==="object"&&A.length){var z=A.length;while(z--){this._completeStyles[A[z]]=null
            }}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
        this._onVisibilityChanged=this._onVisibilityChanged.bind(this);t.on(t.CHANGED,this._onVisibilityChanged);
        this._stylesClip=new s(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
        a._remove(this._stylesClip);return q._prepareProperties.call(this)};r._convertEase=function(B){if(typeof B==="function"){throw new Error(l)
    }var z;var A;if(m(B)){z=w.create(B);A=z.toEasingFunction()}else{var C=u(B);if(C.cssString===null){throw new Error(i.replace(/%EASE%/g,B))
    }z=w.create(C.cssString);A=B}return{css:{"1":z,"-1":z.reversed()},js:A}};r._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
        q._complete.call(this)}};r._onTransitionEnded=function(){this._isTransitionEnded=true;
        this._complete()};r._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
        this._isTransitionEnded=false;this._el.addEventListener(j,this._onTransitionEnded)
    }};r._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
        this._isTransitionEnded=false;this._el.removeEventListener(j,this._onTransitionEnded)
    }};r._applyStyles=function(B,z){if(B>0){var C="";var A={};var D;for(D in this._eases){if(this._eases.hasOwnProperty(D)){A[D]=this._eases[D][this._direction].splitAt(this.progress()).toCSSString()
    }}for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){C+=D+" "+B+"ms "+A[this._propsEaseKeys[D]]+" 0ms, "
    }}this._currentTransitionStyles=C.substr(0,C.length-2);if(!this._doStylesMatchCurrentStyles(z)){this._addTransitionListener()
    }else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
    }z.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
        d(this._el,z)};r._doStylesMatchCurrentStyles=function(B){var A=f.apply(this,[this._el].concat([this._propsArray]));
        var z;for(z in B){if(B.hasOwnProperty(z)&&A.hasOwnProperty(z)&&B[z]!==A[z]){return false
        }}return true};r._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
        if(this.playing()){var A=this._durationMs*(1-this.progress());var z=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
            this._applyStyles(A,z)}};r._setOtherTransitions=function(){v(this._el,this._stylesTo);
        var z=a.getAll(this._el);var A=z.length;while(A--){if(z[A]!==this&&z[A].playing()&&z[A]._otherTransitions&&z[A]._otherTransitions.length){this._otherTransitions=z[A]._otherTransitions;
            return}}this._otherTransitions=f(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
        }};r._getTransitionStyles=function(){var z=this._getOtherClipTransitionStyles();
        if(this._otherTransitions.length){z+=this._otherTransitions}else{if(z.length){z=z.substr(0,z.length-2)
        }}return z};r._getOtherClipTransitionStyles=function(){var B="";var z=a.getAll(this._el);
        var A=z.length;while(A--){if(z[A]!==this&&z[A].playing()&&z[A]._currentTransitionStyles&&z[A]._currentTransitionStyles.length){B+=z[A]._currentTransitionStyles+", "
        }}return B};r._onVisibilityChanged=function(z){if(this.playing()&&!z.isHidden){this._update({timeNow:this._getTime()});
        var A=this.progress();if(A<1){this.progress(A)}}};r._onPaused=function(A){var z=f.apply(this,[this._el].concat([this._propsArray]));
        z.transition=this._getTransitionStyles();this._removeTransitionListener();d(this._el,z)
    };r._onStart=function(z){var A=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
        if(A){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
        }o(this._setStylesAfterWaiting,A);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
        }};r._onComplete=function(z){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
        d(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
        }};b.exports=h},{"../helpers/BezierCurveCssManager":417,"../helpers/convertToStyleObject":420,"../helpers/convertToTransitionableObjects":421,"../helpers/isCssCubicBezierString":423,"../helpers/removeTransitions":424,"../helpers/transitionEnd":427,"../helpers/waitAnimationFrames":428,"./ClipEasing":413,"@marcom/ac-clip":328,"@marcom/ac-dom-styles/getStyle":362,"@marcom/ac-dom-styles/setStyle":364,"@marcom/ac-easing":365,"@marcom/ac-object/clone":375,"@marcom/ac-object/create":376,"@marcom/ac-page-visibility":558}],416:[function(c,d,a){var g=c("@marcom/ac-easing").createBezier;
    function b(i,h){this.manager=h;this.p1={x:i[0],y:i[1]};this.p2={x:i[2],y:i[3]};
        this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
    }var f=b.prototype;f.splitAt=function(k){if(this._isLinear){return this}k=Math.round(k*40)/40;
        if(k===0){return this}else{if(this._cacheSplits[k]!==undefined){return this._cacheSplits[k]
        }}var q=[this.p1.x,this.p2.x];var n=[this.p1.y,this.p2.y];var m=0;var o=k;var i=0;
        var p=1;var j=this._getStartX(k,q);while(o!==j&&m<1000){if(o<j){p=k}else{i=k}k=i+((p-i)*0.5);
            j=this._getStartX(k,q);++m}var l=this._splitBezier(k,q,n);var r=this._normalize(l);
        var h=this.manager.create(r);this._cacheSplits[o]=h;return h};f.reversed=function(){var h=this.toArray();
        return this.manager.create([0.5-(h[2]-0.5),0.5-(h[3]-0.5),0.5-(h[0]-0.5),0.5-(h[1]-0.5)])
    };f.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};f.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
    };f.toEasingFunction=function(){return g.apply(this,this.toArray()).easingFunction
    };f._getStartX=function(m,h){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return i-3*k*l*h[1]+3*m*j*h[0]
    };f._splitBezier=function(m,h,n){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return[i-3*k*l*h[1]+3*m*j*h[0],i-3*k*l*n[1]+3*m*j*n[0],k-2*m*l*h[1]+j*h[0],k-2*m*l*n[1]+j*n[0],m-l*h[1],m-l*n[1]]
    };f._normalize=function(h){return[(h[2]-h[0])/(1-h[0]),(h[3]-h[1])/(1-h[1]),(h[4]-h[0])/(1-h[0]),(h[5]-h[1])/(1-h[1])]
    };d.exports=b},{"@marcom/ac-easing":365}],417:[function(c,d,a){var b=c("./BezierCurveCss");
    function g(){this._instances={}}var f=g.prototype;f.create=function(k){var j;if(typeof k==="string"){j=k.replace(/ /g,"")
    }else{j="cubic-bezier("+k.join(",")+")"}if(this._instances[j]===undefined){if(typeof k==="string"){k=k.match(/\d*\.?\d+/g);
        var h=k.length;while(h--){k[h]=Number(k[h])}}this._instances[j]=new b(k,this)}return this._instances[j]
    };d.exports=new g()},{"./BezierCurveCss":416}],418:[function(b,c,a){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],419:[function(f,g,d){var a=f("@marcom/ac-dom-metrics/getDimensions");var c=f("./splitUnits");
    var b={translateX:"width",translateY:"height"};function i(j,l,m){this._transform=j;
        var k;var n;var o;for(o in m){if(m.hasOwnProperty(o)&&typeof this._transform[o]==="function"){k=c(m[o]);
            if(k.unit==="%"){n=this._convertPercentToPixelValue(o,k.value,l)}else{n=k.value
            }this._transform[o].call(this._transform,n)}}}var h=i.prototype;h._convertPercentToPixelValue=function(m,l,k){m=b[m];
        var j=a(k);if(j[m]){l*=0.01;return j[m]*l}return l};h.toArray=function(){return this._transform.toArray()
    };h.toCSSString=function(){return this._transform.toCSSString()};g.exports=i},{"./splitUnits":425,"@marcom/ac-dom-metrics/getDimensions":350}],420:[function(b,c,a){c.exports=function d(h){var g={};
    var f;var i;for(i in h){if(h.hasOwnProperty(i)&&h[i]!==null){if(h[i].isColor){if(h[i].isRgb){g[i]="rgb("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+")"
    }else{if(h[i].isRgba){g[i]="rgba("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+", "+h[i].a+")"
    }}}else{if(i==="transform"){f=(h[i].length===6)?"matrix":"matrix3d";g[i]=f+"("+h[i].join(",")+")"
    }else{if(!h[i].unit){g[i]=h[i].value}else{g[i]=h[i].value+h[i].unit}}}}}return g
}},{}],421:[function(h,d,j){var m=h("@marcom/ac-dom-styles/getStyle");var o=h("@marcom/ac-object/clone");
    var f=h("./splitUnits");var b=h("./toCamCase");var c=h("@marcom/ac-color").Color;
    var l=h("@marcom/ac-feature/cssPropertyAvailable");var i=h("@marcom/ac-transform").Transform;
    var a=h("./TransformMatrix");var n=function(s){if(c.isRgba(s)){s=new c(s).rgbaObject();
        s.isRgba=true}else{s=new c(s).rgbObject();s.isRgb=true}s.isColor=true;return s};
    var r=function(s){if(s.isRgb){s.isRgb=false;s.isRgba=true;s.a=1}};var q=function(t,s,u){if(t.isRgba||s.isRgba||u.isRgba){r(t);
        r(s);r(u)}};var p=function(s){return[s[0],s[1],0,0,s[2],s[3],0,0,0,0,1,0,s[4],s[5],0,1]
    };var k=function(t,s,u){if(t.transform.length===16||s.transform.length===16||u.transform.length===16){if(t.transform.length===6){t.transform=p(t.transform)
    }if(s.transform.length===6){s.transform=p(s.transform)}if(u.transform.length===6){u.transform=p(u.transform)
    }}};d.exports=function g(u,A,z){var w={};A=o(A,true);z=o(z,true);var t;var B;var x;
        var y;var v=l("transform");var s;for(s in A){if(A.hasOwnProperty(s)&&A[s]!==null){if(s==="transform"){if(v){B=new i();
            t=m(u,"transform")["transform"]||"none";B.setMatrixValue(t);x=new a(new i(),u,A[s])
        }if(x&&x.toCSSString()!==B.toCSSString()){y=new a(z[s]?new i():B.clone(),u,z[s]);
            w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null}}else{t=m(u,s)[b(s)]||z[s];
            if(c.isColor(t)){w[s]=n(t);z[s]=(z[s]!==undefined)?n(z[s]):o(w[s],true);A[s]=n(A[s])
            }else{w[s]=f(t);z[s]=(z[s]!==undefined)?f(z[s]):o(w[s],true);A[s]=f(A[s])}}}}for(s in z){if(z.hasOwnProperty(s)&&z[s]!==null&&(A[s]===undefined||A[s]===null)){if(s==="transform"){if(v){B=new i();
            B.setMatrixValue(getComputedStyle(u).transform||getComputedStyle(u).webkitTransform||"none");
            y=new a(new i(),u,z[s])}if(y&&y.toCSSString()!==B.toCSSString()){x=new a(B.clone());
            w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null;z[s]=null
        }}else{t=m(u,s)[b(s)];if(c.isColor(t)){w[s]=n(t);A[s]=o(w[s],true);z[s]=n(z[s])
        }else{w[s]=f(t);z[s]=f(z[s]);A[s]=o(w[s],true)}}}if(w[s]&&w[s].isColor){q(w[s],z[s],A[s])
        }}if(w.transform){k(w,z,A)}return{target:w,propsTo:A,propsFrom:z}}},{"./TransformMatrix":419,"./splitUnits":425,"./toCamCase":426,"@marcom/ac-color":330,"@marcom/ac-dom-styles/getStyle":362,"@marcom/ac-feature/cssPropertyAvailable":451,"@marcom/ac-object/clone":375,"@marcom/ac-transform":405}],422:[function(b,c,a){c.exports=function d(j){if(j.transitionProperty){var m="";
    var h=j.transitionProperty.split(", ");var k=j.transitionDuration.split(", ");var l=j.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(i){return i.substr(0,i.length-1)
    }).split(", ");var f=j.transitionDelay.split(", ");var g=h.length;while(g--){m+=h[g]+" "+k[g]+" "+l[g]+" "+f[g]+", "
    }return m.substr(0,m.length-2)}return false}},{}],423:[function(c,d,b){d.exports=function a(f){return typeof f==="string"&&f.substr(0,13)==="cubic-bezier("
}},{}],424:[function(d,f,c){var h=d("@marcom/ac-dom-styles/setStyle");var a=d("@marcom/ac-dom-styles/getStyle");
    var g=d("./getShorthandTransition");f.exports=function b(l,n){var m=a(l,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
        m=m.transition||g(m);if(m&&m.length){m=m.split(",");var k=0;var o;var j=m.length;
            while(j--){o=m[j].trim().split(" ")[0];if(n[o]!==undefined){m.splice(j,1);++k}}if(k){if(m.length===0){m=["all"]
            }h(l,{transition:m.join(",").trim()})}}}},{"./getShorthandTransition":422,"@marcom/ac-dom-styles/getStyle":362,"@marcom/ac-dom-styles/setStyle":364}],425:[function(c,d,b){d.exports=function a(i){i=String(i);
    if(i.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
    }var h=/(\d*\.?\d*)(.*)/;var f=1;if(i&&i.substr(0,1)==="-"){i=i.substr(1);f=-1}var g=String(i).match(h);
    return{value:Number(g[1])*f,unit:g[2]}}},{}],426:[function(c,d,b){d.exports=function a(g){var f=function(i,j,k,h){return(k===0)&&(h.substr(1,3)!=="moz")?j:j.toUpperCase()
};return g.replace(/-(\w)/g,f)}},{}],427:[function(d,f,c){var a;f.exports=(function b(){if(a){return a
}var g;var h=document.createElement("fakeelement");var i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
    for(g in i){if(h.style[g]!==undefined){a=i[g];return a}}})()},{}],428:[function(d,f,b){var a=d("@marcom/ac-page-visibility").PageVisibilityManager;
    f.exports=function c(k,i){if(i){var j=function(l){if(a.isHidden){setTimeout(l,16)
    }else{window.requestAnimationFrame(l)}};var h=0;var g=function(){if(h===i){k.call(this)
    }else{++h;j(g)}};g()}else{k.call(this)}}},{"@marcom/ac-page-visibility":558}],429:[function(c,a,d){var h=c("@marcom/ac-object/create");
    var i=c("@marcom/ac-clip").Clip;var f=c("./TimelineClip");var b=c("./TimelineCallback");
    var l=c("./TimelineItemList");var k=i.prototype;function j(m){m=m||{};m.ease=m.ease||"linear";
        m.destroyOnComplete=false;this.options=m;i.call(this,{t:0},0,{t:1},m);this._itemList=new l()
    }var g=j.prototype=h(k);j.prototype.constructor=j;g._update=function(m){k._update.call(this,m);
        this._render()};g.progress=function(m){k.progress.call(this,m);if(m!==undefined){this._render()
    }return this._progress};g._render=function(){if(this._itemList.length===0){return
    }var p=this._target.t*this._duration;var m=this._itemList.head;var n=m;while(n){n=m.next;
        var o=(p-m.position);m.currentTime(o);m=n}};g.addClip=function(o,n){n=(n===undefined)?this.duration():n;
        var m=o._delay/1000;this._itemList.append(new f(o,n+m));this._updateDuration()};
    g.addCallback=function(n,m){m=(m===undefined)?this.duration():m;this._itemList.append(new b(n,m));
        this._updateDuration()};g.remove=function(m){var n=this._itemList.getItem(m);if(n){this._itemList.remove(n);
        this._updateDuration()}};g._updateDuration=function(){var m=this._itemList.head;
        var n=m.position+m.duration();this._itemList.forEach(function(p){var o=p.position+p.duration();
            if(o>=n){m=p;n=o}});this.duration(n)};g.destroy=function(){var m=this._itemList.head;
        while(m){var n=m;m=n.next;this._itemList.remove(n)}this._duration=0;return k.destroy.call(this)
    };a.exports=j},{"./TimelineCallback":430,"./TimelineClip":431,"./TimelineItemList":432,"@marcom/ac-clip":328,"@marcom/ac-object/create":376}],430:[function(b,c,a){function f(h,g){this.callback=h;
    this._delay=0;this.position=g;this._hasTriggered=false;this.prev=null;this.next=null
}var d=f.prototype;d.duration=function(){return 0};d.currentTime=function(g){if(g>=0&&!this._hasTriggered){this.callback();
    this._hasTriggered=true}if(g<0&&this._hasTriggered){this.callback();this._hasTriggered=false
}return 0};c.exports=f},{}],431:[function(b,c,a){function f(h,g){this.clip=h;this.position=g;
    this.duration=this.clip.duration.bind(this.clip);this.lastProgress=-1;this.prev=null;
    this.next=null}var d=f.prototype;d.currentTime=function(h){var g=Math.min(1,Math.max(0,h/this.clip._duration));
    if(g!==g){g=1}if(this.lastProgress===g){return this.lastProgress}if(this.lastProgress===0||g===0||this.lastProgress===-1){if(this.clip._storeOnStart){this.clip._storeOnStart(this.clip)
    }}this.clip._playing=(g*this.clip._duration===this.clip._duration);this.lastProgress=this.clip.progress(g);
    return this.lastProgress};d.destroy=function(){this.clip.destroy();this.prev=null;
    this.next=null;this.duration=null};c.exports=f},{}],432:[function(b,c,a){var h=b("./TimelineClip");
    var f=b("./TimelineCallback");var g=function(){this.head=null;this.tail=null;this.length=0
    };var d=g.prototype;d.append=function(i){i.prev=null;i.next=null;if(this.tail){this.tail.next=i;
        i.prev=this.tail}else{this.head=i}this.tail=i;this.length++};d.remove=function(i){if(i===this.head){this.head=this.head.next
    }else{if(i===this.tail){this.tail=this.tail.prev}}if(i.prev){i.prev.next=i.next
    }if(i.next){i.next.prev=i.prev}i.next=i.prev=null;if(this.head===null){this.tail=null
    }this.length--};d.getItem=function(i){var j=this.head;while(j){var k=j;if((k instanceof h&&k.clip===i)||(k instanceof f&&k.callback===i)){return k
    }j=k.next}return null};d.forEach=function(m){var j=0;var k=this.head;while(k){var l=k;
        m(l,j,this.length);k=l.next}};d.destroy=function(){while(this.head){var i=this.head;
        this.remove(i);i.destroy()}};c.exports=g},{"./TimelineCallback":430,"./TimelineClip":431}],433:[function(b,c,a){window.matchMedia=window.matchMedia||(function(i,j){var g,d=i.documentElement,f=d.firstElementChild||d.firstChild,h=i.createElement("body"),k=i.createElement("div");
        k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";h.style.background="none";
        h.appendChild(k);return function(l){k.innerHTML='&shy;<style media="'+l+'"> #mq-test-1 { width:42px; }</style>';
            d.insertBefore(h,f);g=k.offsetWidth===42;d.removeChild(h);return{matches:g,media:l}
        }}(document))},{}],434:[function(b,c,a){arguments[4][13][0].apply(a,arguments)},{"./shared/camelCasedEventTypes":437,"./shared/prefixHelper":439,"./shared/windowFallbackEventTypes":442,"./utils/eventTypeAvailable":443,dup:13}],435:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./shared/getStyleTestElement":438,"./shared/prefixHelper":439,"./shared/stylePropertyCache":440,"./utils/toCSS":444,"./utils/toDOM":445,dup:353}],436:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./getStyleProperty":435,"./shared/prefixHelper":439,"./shared/stylePropertyCache":440,"./shared/styleValueAvailable":441,dup:354}],437:[function(b,c,a){arguments[4][14][0].apply(a,arguments)
},{dup:14}],438:[function(b,c,a){arguments[4][355][0].apply(a,arguments)},{dup:355}],439:[function(b,c,a){arguments[4][15][0].apply(a,arguments)
},{dup:15}],440:[function(b,c,a){arguments[4][357][0].apply(a,arguments)},{dup:357}],441:[function(b,c,a){arguments[4][358][0].apply(a,arguments)
},{"./getStyleTestElement":438,"./stylePropertyCache":440,dup:358}],442:[function(b,c,a){arguments[4][16][0].apply(a,arguments)
},{dup:16}],443:[function(b,c,a){arguments[4][17][0].apply(a,arguments)},{dup:17}],444:[function(b,c,a){arguments[4][360][0].apply(a,arguments)
},{dup:360}],445:[function(b,c,a){arguments[4][361][0].apply(a,arguments)},{dup:361}],446:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),mediaQueriesAvailable:b("./mediaQueriesAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":447,"./continuousScrollEventsAvailable":448,"./cookiesAvailable":449,"./cssLinearGradientAvailable":450,"./cssPropertyAvailable":451,"./cssViewportUnitsAvailable":452,"./elementAttributeAvailable":453,"./eventTypeAvailable":454,"./isDesktop":456,"./isHandheld":457,"./isRetina":458,"./isTablet":459,"./localStorageAvailable":460,"./mediaElementsAvailable":461,"./mediaQueriesAvailable":462,"./sessionStorageAvailable":463,"./svgAvailable":464,"./threeDTransformsAvailable":465,"./touchAvailable":466,"./webGLAvailable":467}],447:[function(b,c,a){var g=b("./helpers/globals");
    var f=b("@marcom/ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
        return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
    c.exports.original=d},{"./helpers/globals":455,"@marcom/ac-function/once":269}],448:[function(c,f,b){var d=c("@marcom/ac-useragent");
    var a=c("./touchAvailable").original;var g=c("@marcom/ac-function/once");function h(){return(!a()||(d.os.ios&&d.os.version.major>=8)||d.browser.chrome)
    }f.exports=g(h);f.exports.original=h},{"./touchAvailable":466,"@marcom/ac-function/once":269,"@marcom/ac-useragent":672}],449:[function(c,d,b){var g=c("./helpers/globals");
    var f=c("@marcom/ac-function/once");function a(){var k=false;var h=g.getDocument();
        var j=g.getNavigator();try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";
            k=(h.cookie.indexOf("ac_feature_cookie")!==-1);h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        }}catch(i){}return k}d.exports=f(a);d.exports.original=a},{"./helpers/globals":455,"@marcom/ac-function/once":269}],450:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
    var f=c("@marcom/ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
        return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"@marcom/ac-function/once":269,"@marcom/ac-prefixer/getStyleValue":436}],451:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
    var f=c("@marcom/ac-prefixer/getStyleProperty");var h=c("@marcom/ac-function/memoize");
    function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)}else{return !!f(j)}}d.exports=h(a);
    d.exports.original=a},{"@marcom/ac-function/memoize":268,"@marcom/ac-prefixer/getStyleProperty":435,"@marcom/ac-prefixer/getStyleValue":436}],452:[function(b,c,a){var f=b("@marcom/ac-prefixer/getStyleValue");
    var d=b("@marcom/ac-function/once");function g(){return !!f("margin","1vw 1vh")
    }c.exports=d(g);c.exports.original=g},{"@marcom/ac-function/once":269,"@marcom/ac-prefixer/getStyleValue":436}],453:[function(b,d,a){var f=b("./helpers/globals");
    var g=b("@marcom/ac-function/memoize");function c(h,j){var i=f.getDocument();var k;
        j=j||"div";k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c
},{"./helpers/globals":455,"@marcom/ac-function/memoize":268}],454:[function(c,f,b){var a=c("@marcom/ac-prefixer/getEventType");
    var g=c("@marcom/ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);
    f.exports.original=d},{"@marcom/ac-function/memoize":268,"@marcom/ac-prefixer/getEventType":434}],455:[function(b,c,a){arguments[4][48][0].apply(a,arguments)
},{dup:48}],456:[function(b,c,a){arguments[4][49][0].apply(a,arguments)},{"./helpers/globals":455,"./touchAvailable":466,"@marcom/ac-function/once":269,dup:49}],457:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{"./isDesktop":456,"./isTablet":459,"@marcom/ac-function/once":269,dup:50}],458:[function(b,c,a){arguments[4][51][0].apply(a,arguments)
},{"./helpers/globals":455,dup:51}],459:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"./helpers/globals":455,"./isDesktop":456,"@marcom/ac-function/once":269,dup:52}],460:[function(c,d,a){var g=c("./helpers/globals");
    var f=c("@marcom/ac-function/once");function b(){var j=g.getWindow();var i=false;
        try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)}catch(h){}return i
    }d.exports=f(b);d.exports.original=b},{"./helpers/globals":455,"@marcom/ac-function/once":269}],461:[function(b,c,a){var g=b("./helpers/globals");
    var d=b("@marcom/ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
    }c.exports=d(f);c.exports.original=f},{"./helpers/globals":455,"@marcom/ac-function/once":269}],462:[function(c,d,b){c("@marcom/ac-polyfills/matchMedia");
    var g=c("./helpers/globals");var f=c("@marcom/ac-function/once");function a(){var i=g.getWindow();
        var h=i.matchMedia("only all");return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a
},{"./helpers/globals":455,"@marcom/ac-function/once":269,"@marcom/ac-polyfills/matchMedia":433}],463:[function(c,d,b){var g=c("./helpers/globals");
    var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=false;
        try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
            h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
    d.exports.original=a},{"./helpers/globals":455,"@marcom/ac-function/once":269}],464:[function(c,d,b){var g=c("./helpers/globals");
    var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
    }d.exports=f(a);d.exports.original=a},{"./helpers/globals":455,"@marcom/ac-function/once":269}],465:[function(b,c,a){var g=b("@marcom/ac-prefixer/getStyleValue");
    var d=b("@marcom/ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
    }c.exports=d(f);c.exports.original=f},{"@marcom/ac-function/once":269,"@marcom/ac-prefixer/getStyleValue":436}],466:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./helpers/globals":455,"@marcom/ac-function/once":269,dup:53}],467:[function(c,d,b){var g=c("./helpers/globals");
    var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
        if(typeof i.getContext==="function"){return !!(i.getContext("webgl")||i.getContext("experimental-webgl"))
        }return false}d.exports=f(a);d.exports.original=a},{"./helpers/globals":455,"@marcom/ac-function/once":269}],468:[function(b,c,a){arguments[4][10][0].apply(a,arguments)
},{"./shared/getEventType":476,"./utils/addEventListener":477,dup:10}],469:[function(b,c,a){arguments[4][13][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":470,"./shared/prefixHelper":471,"./shared/windowFallbackEventTypes":472,"./utils/eventTypeAvailable":473,dup:13}],470:[function(b,c,a){arguments[4][14][0].apply(a,arguments)
},{dup:14}],471:[function(b,c,a){arguments[4][15][0].apply(a,arguments)},{dup:15}],472:[function(b,c,a){arguments[4][16][0].apply(a,arguments)
},{dup:16}],473:[function(b,c,a){arguments[4][17][0].apply(a,arguments)},{dup:17}],474:[function(b,c,a){arguments[4][18][0].apply(a,arguments)
},{dup:18}],475:[function(b,c,a){arguments[4][19][0].apply(a,arguments)},{"./shared/getEventType":476,"./utils/removeEventListener":478,dup:19}],476:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getEventType":469,dup:20}],477:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{dup:24}],478:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],479:[function(b,c,a){arguments[4][144][0].apply(a,arguments)
},{"./utils/getBoundingClientRect":489,dup:144}],480:[function(b,c,a){arguments[4][145][0].apply(a,arguments)
},{"./utils/getBoundingClientRect":489,dup:145}],481:[function(b,c,a){arguments[4][146][0].apply(a,arguments)
},{"./getDimensions":480,"./getScrollX":485,"./getScrollY":486,"./utils/getBoundingClientRect":489,dup:146}],482:[function(b,c,a){arguments[4][147][0].apply(a,arguments)
},{"./getDimensions":480,"./getPixelsInViewport":483,dup:147}],483:[function(b,c,a){arguments[4][148][0].apply(a,arguments)
},{"./getViewportPosition":487,dup:148}],484:[function(b,c,a){arguments[4][149][0].apply(a,arguments)
},{"./getDimensions":480,"./utils/getBoundingClientRect":489,dup:149}],485:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{dup:58}],486:[function(b,c,a){arguments[4][59][0].apply(a,arguments)},{dup:59}],487:[function(b,c,a){arguments[4][152][0].apply(a,arguments)
},{"./getPagePosition":481,"./getScrollX":485,"./getScrollY":486,"./utils/getBoundingClientRect":489,dup:152}],488:[function(b,c,a){arguments[4][153][0].apply(a,arguments)
},{"./getPercentInViewport":482,"./getPixelsInViewport":483,dup:153}],489:[function(b,c,a){arguments[4][154][0].apply(a,arguments)
},{dup:154}],490:[function(b,c,a){arguments[4][352][0].apply(a,arguments)},{"./getStyleProperty":491,"./getStyleValue":492,"./shared/stylePropertyCache":495,dup:352}],491:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./shared/getStyleTestElement":493,"./shared/prefixHelper":494,"./shared/stylePropertyCache":495,"./utils/toCSS":498,"./utils/toDOM":499,dup:353}],492:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./getStyleProperty":491,"./shared/prefixHelper":494,"./shared/stylePropertyCache":495,"./shared/styleValueAvailable":496,dup:354}],493:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],494:[function(b,c,a){arguments[4][15][0].apply(a,arguments)},{dup:15}],495:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{dup:357}],496:[function(b,c,a){arguments[4][358][0].apply(a,arguments)},{"./getStyleTestElement":493,"./stylePropertyCache":495,dup:358}],497:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{dup:359}],498:[function(b,c,a){arguments[4][360][0].apply(a,arguments)},{dup:360}],499:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{dup:361}],500:[function(b,c,a){c.exports={getStyle:b("./getStyle"),setStyle:b("./setStyle")}
},{"./getStyle":501,"./setStyle":503}],501:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":491,"@marcom/ac-prefixer/stripPrefixes":497,dup:362}],502:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{dup:363}],503:[function(b,c,a){arguments[4][364][0].apply(a,arguments)},{"./internal/normalizeValue":502,"@marcom/ac-prefixer/getStyleCSS":490,"@marcom/ac-prefixer/getStyleProperty":491,dup:364}],504:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":505,dup:46}],505:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],506:[function(b,c,a){arguments[4][87][0].apply(a,arguments)},{"./extend":508,"@marcom/ac-polyfills/Array/isArray":509,dup:87}],507:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{dup:88}],508:[function(b,c,a){arguments[4][90][0].apply(a,arguments)},{"@marcom/ac-polyfills/Array/prototype.forEach":510,dup:90}],509:[function(b,c,a){arguments[4][378][0].apply(a,arguments)
},{dup:378}],510:[function(b,c,a){arguments[4][380][0].apply(a,arguments)},{dup:380}],511:[function(b,c,a){arguments[4][382][0].apply(a,arguments)
},{dup:382}],512:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;var a=d("@marcom/ac-feature/cssPropertyAvailable");
    f.exports=function g(i,l,k,j,h){if(a("opacity")){h=h||{};if(j){h.propsFrom=h.propsFrom||{};
        h.propsFrom.opacity=l;return c.to(i,j,{opacity:k},h)}else{i.style.opacity=k;if(typeof h.onStart==="function"){h.onStart()
    }if(typeof h.onComplete==="function"){h.onComplete()}}}else{i.style.visibility=(k)?"visible":"hidden";
        if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
        }}}},{"@marcom/ac-eclipse":412,"@marcom/ac-feature/cssPropertyAvailable":451}],513:[function(f,g,c){var d=f("@marcom/ac-eclipse").Clip;
    var b=f("@marcom/ac-feature/cssPropertyAvailable");g.exports=function a(i,j,h){h=h||{};
        if(b("opacity")){if(j){return d.to(i,j,{opacity:1},h)}else{i.style.opacity=1;if(typeof h.onStart==="function"){h.onStart()
        }if(typeof h.onComplete==="function"){h.onComplete()}}}else{i.style.visibility="visible";
            if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
            }}}},{"@marcom/ac-eclipse":412,"@marcom/ac-feature/cssPropertyAvailable":451}],514:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
    var a=d("@marcom/ac-feature/cssPropertyAvailable");f.exports=function g(i,j,h){h=h||{};
        if(a("opacity")){if(j){return c.to(i,j,{opacity:0},h)}else{i.style.opacity=0;if(typeof h.onStart==="function"){h.onStart()
        }if(typeof h.onComplete==="function"){h.onComplete()}}}else{i.style.visibility="hidden";
            if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
            }}}},{"@marcom/ac-eclipse":412,"@marcom/ac-feature/cssPropertyAvailable":451}],515:[function(f,g,c){var d=f("@marcom/ac-eclipse").Clip;
    var h=f("@marcom/ac-dom-styles");var b=f("@marcom/ac-feature/cssPropertyAvailable");
    g.exports=function a(k,i,n,l,j){j=j||{};var m;if(b("transition")){m={transform:{translateX:i+"px",translateY:n+"px"}}
    }else{m={left:i+"px",top:n+"px"}}if(l){return d.to(k,l,m,j)}else{h.setStyle(k,m);
        if(typeof j.onStart==="function"){j.onStart()}if(typeof j.onComplete==="function"){j.onComplete()
        }}}},{"@marcom/ac-dom-styles":500,"@marcom/ac-eclipse":412,"@marcom/ac-feature/cssPropertyAvailable":451}],516:[function(d,f,c){var b=d("@marcom/ac-feature/cssPropertyAvailable");
    var a=d("./move");f.exports=function g(j,h,k,i){return a(j,h,0,k,i)}},{"./move":515,"@marcom/ac-feature/cssPropertyAvailable":451}],517:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
    f.exports=function a(g,o,k,i,r){r=r||{};var h=g===window;var q;var n;if(h){q=g.scrollX;
        n=g.scrollY}else{q=g.scrollLeft;n=g.scrollTop}var m={x:q,y:n};var p={x:o,y:k};if(typeof r.onDraw==="function"){var l=r.onDraw
    }var j=function(s){if(h){g.scrollTo(m.x,m.y)}else{g.scrollLeft=m.x;g.scrollTop=m.y
    }if(l){l.call(this,s)}};r.onDraw=j;return c.to(m,i,p,r)}},{"@marcom/ac-eclipse":412}],518:[function(c,d,b){var a=c("./scroll");
    d.exports=function f(k,g,l,j){var i=k===window;var h;if(i){h=k.scrollY}else{h=k.scrollTop
    }return a(k,g,h,l,j)}},{"./scroll":517}],519:[function(b,a,f){var d=b("@marcom/ac-classlist");
    var j=b("./singletons/analyticsManager");var h=b("@marcom/ac-object/create");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var c=b("./Item");function i(m){m=m||{};this._wrapAround=m.wrapAround||false;this._itemType=m.itemType||c;
        this._items=[];this._itemsIdLookup={};this.showNext=this.showNext.bind(this);this.showPrevious=this.showPrevious.bind(this);
        this._update=this._update.bind(this);this._updateItems=this._updateItems.bind(this);
        l.call(this);if(m.startAt){this._startAt(m.startAt)}i._add(this,m.analyticsOptions)
    }i.FADE="fade";i.FADE_SELECTOR="[data-ac-gallery-fade]";i.SLIDE="slide";i.SLIDE_SELECTOR="[data-ac-gallery-slide]";
    i.UPDATE="update";i.UPDATE_COMPLETE="update:complete";var k=l.prototype;var g=i.prototype=h(k);
    g.addItem=function(n,m){if(n.nodeType){n=new this._itemType(n)}else{if(this._items.indexOf(n)>-1){return n
    }}if(typeof m==="number"){this._items.splice(m,0,n)}else{this._items.push(n)}if(this._items.length===1){n.show();
        this._setCurrentItem(n)}else{n.hide();if(this.getNextItem()===n){this._setNextItem(n)
    }if(this.getPreviousItem()===n){this._setPreviousItem(n)}}if(n.getElementId()!==null){this._itemsIdLookup[n.getElementId()]=n
    }n.on(c.SELECTED,this._update);return n};g.removeItem=function(q,p){p=p||{};if(typeof q==="number"){q=this._items[q]
    }var o=this._items.indexOf(q);if(o>-1){var m=this.getNextItem();var n=this.getPreviousItem();
        this._items.splice(o,1);q.off(c.SELECTED,this._update);if(m===q){this._setNextItem(this.getNextItem())
        }if(n===q){this._setPreviousItem(this.getPreviousItem())}}if(q===this._currentItem&&this._items.length&&p.setCurrentItem!==false){this._update({item:this._items[0]});
        this._setLastItem(null)}if(p.destroyItem&&q.getElement()){q.destroy()}return q};
    g.show=function(n,m){if(typeof n==="number"){n=this._items[n]}else{if(typeof n==="string"){n=this._itemsIdLookup[n]
    }}if(n){m=m||{};this._update({item:n,interactionEvent:m.interactionEvent})}return n||null
    };g.showNext=function(m){var n=this.getNextItem();if(n){this.show(n,m)}return n
    };g.showPrevious=function(m){var n=this.getPreviousItem();if(n){this.show(n,m)}return n
    };g.isInView=function(){return this._currentItem&&this._currentItem.isInView()};
    g.getTotalItems=function(){return this._items.length};g.getItems=function(){return this._items
    };g.getItem=function(m){if(typeof m==="number"){return this.getItemAt(m)}else{if(typeof m==="string"){return this.getItemById(m)
    }}};g.getItemAt=function(m){return this._items[m]||null};g.getItemById=function(m){return this._itemsIdLookup[m]||null
    };g.getItemIndex=function(m){return this._items.indexOf(m)};g.getCurrentItem=function(){return this._currentItem||null
    };g.getLastItem=function(){return this._lastItem||null};g.getNextItem=function(){var n;
        var m=this._items.indexOf(this._currentItem);if(m<this._items.length-1){n=this._items[m+1]
        }else{if(this._wrapAround){n=this._items[0]}}return n||null};g.getPreviousItem=function(){var n;
        var m=this._items.indexOf(this._currentItem);if(m>0){n=this._items[m-1]}else{if(this._wrapAround){n=this._items[this._items.length-1]
        }}return n||null};g.getId=function(){return this._id};g.destroy=function(m){m=m||{};
        if(m.destroyItems===undefined){m.destroyItems=true}this._setCurrentItem(null);if(m.destroyItems){var n;
            while(this._items.length){n=this._items[0];n.off(c.SELECTED,this._update);this.removeItem(n,{destroyItem:true,setCurrentItem:false})
            }}this._items=null;this._itemsIdLookup=null;i._remove(this);return k.destroy.call(this)
    };g._startAt=function(m){var n=this._items[m];if(n&&(this._currentItem!==n)){this._currentItem.hide();
        this._setCurrentItem(n);this._currentItem.show();this.trigger(i.UPDATE,this._items)
    }};g._setCurrentItem=function(m){if(this._currentItem&&this._currentItem.getElement()&&this._currentItem!==m){d.remove(this._currentItem.getElement(),c.CSS_CURRENT_ITEM);
        this._setLastItem(this._currentItem)}this._currentItem=m;if(this._currentItem&&this._currentItem.getElement()){d.add(this._currentItem.getElement(),c.CSS_CURRENT_ITEM);
        this._setNextItem(this.getNextItem());this._setPreviousItem(this.getPreviousItem())
    }};g._setLastItem=function(m){if(this._lastItem&&this._lastItem.getElement()&&this._lastItem!==m){d.remove(this._lastItem.getElement(),c.CSS_LAST_ITEM)
    }this._lastItem=m;if(this._lastItem&&this._lastItem.getElement()){d.add(this._lastItem.getElement(),c.CSS_LAST_ITEM)
    }};g._setNextItem=function(m){if(this._nextItem&&this._nextItem.getElement()&&this._nextItem!==m){d.remove(this._nextItem.getElement(),c.CSS_NEXT_ITEM)
    }this._nextItem=m;if(this._nextItem&&this._nextItem.getElement()){d.add(this._nextItem.getElement(),c.CSS_NEXT_ITEM)
    }};g._setPreviousItem=function(m){if(this._previousItem&&this._previousItem.getElement()&&this._previousItem!==m){d.remove(this._previousItem.getElement(),c.CSS_PREVIOUS_ITEM)
    }this._previousItem=m;if(this._previousItem&&this._previousItem.getElement()){d.add(this._previousItem.getElement(),c.CSS_PREVIOUS_ITEM)
    }};g._updateItems=function(n,m){if(n.outgoing[0]){n.outgoing[0].hide()}n.incoming[0].show();
        if(!m){this.trigger(i.UPDATE_COMPLETE,n)}};g._update=function(m){var o=this._currentItem!==m.item;
        if(o){this._setCurrentItem(m.item)}var n={incoming:[m.item],outgoing:(this._lastItem)?[this._lastItem]:[],interactionEvent:m.interactionEvent||null};
        if(o){this.trigger(i.UPDATE,n)}this._updateItems(n,!o)};i._instantiate=function(){this._galleries=[];
        this._idCounter=0;return this};i._add=function(n,m){this._galleries.push(n);n._id=++this._idCounter;
        j.add(n,m)};i._remove=function(m){var n=this._galleries.indexOf(m);if(n>-1){this._galleries.splice(n,1);
        j.remove(m)}};i.getAll=function(){return Array.prototype.slice.call(this._galleries)
    };i.getAllInView=function(){var n=[];var m=this._galleries.length;while(m--){if(this._galleries[m].isInView()){n.push(this._galleries[m])
    }}return n};i.destroyAll=function(){var m=this._galleries.length;while(m--){this._galleries[m].destroy()
    }this._galleries=[]};a.exports=i._instantiate()},{"./Item":520,"./singletons/analyticsManager":534,"@marcom/ac-classlist":279,"@marcom/ac-event-emitter-micro":504,"@marcom/ac-object/create":507}],520:[function(m,b,s){var c=m("@marcom/ac-classlist");
    var i=m("@marcom/ac-dom-events/addEventListener");var k=m("@marcom/ac-dom-events/removeEventListener");
    var l=m("@marcom/ac-dom-events/preventDefault");var h=m("@marcom/ac-dom-metrics/isInViewport");
    var a=m("@marcom/ac-dom-metrics/getPercentInViewport");var r=m("@marcom/ac-dom-traversal/querySelectorAll");
    var n=m("@marcom/ac-object/create");var g=m("./singletons/tabManager");var q=m("@marcom/ac-keyboard/keyMap");
    var o=m("@marcom/ac-event-emitter-micro").EventEmitterMicro;var f=m("@marcom/ac-keyboard");
    var j="current";function d(u,t){this._el=u;t=t||{};this._triggerKeys=[];this._triggerEls={};
        this._isShown=false;this._isACaption=(t.isACaption===undefined)?false:t.isACaption;
        this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);this._onTriggered=this._onTriggered.bind(this);
        if(!this._isACaption){this._el.setAttribute("role","tabpanel")}this._focusableEls=r(g.focusableSelectors,u);
        o.call(this)}d.CSS_CURRENT_ITEM="ac-gallery-currentitem";d.CSS_LAST_ITEM="ac-gallery-lastitem";
    d.CSS_NEXT_ITEM="ac-gallery-nextitem";d.CSS_PREVIOUS_ITEM="ac-gallery-previousitem";
    d.SELECTED="selected";d.SHOW="show";d.HIDE="hide";var p=d.prototype=n(o.prototype);
    p.show=function(){this._isShown=true;this._addCurrentClassToTriggers();this._setTabIndexOnFocusableItems(null);
        this._el.removeAttribute("aria-hidden");this.trigger(d.SHOW,this)};p.hide=function(){this._isShown=false;
        this._removeCurrentClassFromTriggers();this._setTabIndexOnFocusableItems("-1");
        this._el.setAttribute("aria-hidden","true");this.trigger(d.HIDE,this)};p.addElementTrigger=function(v,u){u=u||"click";
        if(this._triggerEls[u]===undefined){this._triggerEls[u]=[]}var t=this._triggerEls[u].indexOf(v);
        if(t<0){v.setAttribute("role","tab");v.setAttribute("tabindex","0");var w=this.getElementId();
            if(w){v.setAttribute("aria-controls",w)}w=v.getAttribute("id");if(w&&this._el.getAttribute("aria-labelledby")===null){this._el.setAttribute("aria-labelledby",w)
            }i(v,u,this._onTriggered);this._triggerEls[u].push(v);if(this._isShown){v.setAttribute("aria-selected","true");
                c.add(v,j)}else{v.setAttribute("aria-selected","false")}}};p.removeElementTrigger=function(v,u){u=u||"click";
        if(this._triggerEls[u]===undefined){return}var t=this._triggerEls[u].indexOf(v);
        if(t>-1){this._cleanElementTrigger(v,u)}if(this._triggerEls[u].length===0){this._triggerEls[u]=undefined
        }};p.addKeyTrigger=function(u){if(typeof u==="string"){u=q[u.toUpperCase()]}if(typeof u==="number"){var t=this._triggerKeys.indexOf(u);
        if(t<0){f.onDown(u,this._onKeyboardInteraction);this._triggerKeys.push(u)}}};p.removeKeyTrigger=function(u){if(typeof u==="string"){u=q[u.toUpperCase()]
    }if(typeof u==="number"){var t=this._triggerKeys.indexOf(u);if(t>-1){f.offDown(u,this._onKeyboardInteraction);
        this._triggerKeys.splice(t,1)}}};p.removeAllTriggers=function(){var u;var t=this._triggerKeys.length;
        while(t--){u=this._triggerKeys[t];f.offDown(u,this._onKeyboardInteraction)}this._triggerKeys=[];
        var w;var v;for(v in this._triggerEls){t=this._triggerEls[v].length;while(t--){w=this._triggerEls[v][t];
            this._cleanElementTrigger(w,v)}}this._triggerEls={}};p.isInView=function(){if(this._el){return h(this._el)
    }return false};p.percentageInView=function(){if(this._el){return a(this._el)}return 0
    };p.getElement=function(){return this._el};p.getElementId=function(){if(this._elId!==undefined){return this._elId
    }this._elId=this._el.getAttribute("id")||null;return this._elId};p.destroy=function(){if(this._isShown){this._isShown=null;
        c.remove(this._el,d.CSS_CURRENT_ITEM,d.CSS_LAST_ITEM,d.CSS_NEXT_ITEM,d.CSS_PREVIOUS_ITEM);
        this._removeCurrentClassFromTriggers()}this.removeAllTriggers();this._setTabIndexOnFocusableItems(null);
        this._el.removeAttribute("aria-hidden");this._el.removeAttribute("role");this._el.removeAttribute("aria-labelledby");
        this._isACaption=null;this._triggerKeys=null;this._triggerEls=null;this._el=null
    };p._addCurrentClassToTriggers=function(){var v;var u;var t;for(u in this._triggerEls){t=this._triggerEls[u].length;
        while(t--){v=this._triggerEls[u][t];v.setAttribute("aria-selected","true");c.add(v,j)
        }}};p._removeCurrentClassFromTriggers=function(){var v;var u;var t;for(u in this._triggerEls){t=this._triggerEls[u].length;
        while(t--){v=this._triggerEls[u][t];v.setAttribute("aria-selected","false");c.remove(v,j)
        }}};p._cleanElementTrigger=function(u,t){u.removeAttribute("aria-selected");u.removeAttribute("role");
        u.removeAttribute("tabindex");u.removeAttribute("aria-controls");k(u,t,this._onTriggered);
        if(this._isShown){c.remove(u,j)}};p._onKeyboardInteraction=function(t){if(this.isInView()){this._onTriggered(t)
    }};p._setTabIndexOnFocusableItems=function(u){var t=u===null;var w=[];this._currentTabbableEls=this._currentTabbableEls||g.getTabbable(this._focusableEls);
        if(!t){w=g.getTabbable(this._focusableEls);this._currentTabbableEls=w}var v=this._currentTabbableEls.length;
        while(v--){if(t){this._currentTabbableEls[v].removeAttribute("tabindex")}else{this._currentTabbableEls[v].setAttribute("tabindex",u)
        }}};p._onTriggered=function(t){l(t);this.trigger(d.SELECTED,{item:this,interactionEvent:t})
    };b.exports=d},{"./singletons/tabManager":535,"@marcom/ac-classlist":279,"@marcom/ac-dom-events/addEventListener":468,"@marcom/ac-dom-events/preventDefault":474,"@marcom/ac-dom-events/removeEventListener":475,"@marcom/ac-dom-metrics/getPercentInViewport":482,"@marcom/ac-dom-metrics/isInViewport":488,"@marcom/ac-dom-traversal/querySelectorAll":320,"@marcom/ac-event-emitter-micro":504,"@marcom/ac-keyboard":552,"@marcom/ac-keyboard/keyMap":554,"@marcom/ac-object/create":507}],521:[function(d,a,g){var h=d("./helpers/extendProto");
    var j=d("./Gallery");var b=d("./auto/AutoGallery");var i=d("./fade/FadeGallery");
    var l=d("./fade/FadeItem");var c=d("./slide/SlideGallery");var k=d("./slide/SlideItem");
    var f=d("./Item");j.create=d("./factories/create");j.autoCreate=d("./factories/autoCreate");
    j.extend=h;b.extend=h;i.extend=h;l.extend=h;c.extend=h;k.extend=h;f.extend=h;a.exports={Gallery:j,AutoGallery:b,FadeGallery:i,FadeGalleryItem:l,SlideGallery:c,SlideGalleryItem:k,Item:f,ToggleNav:d("./navigation/ToggleNav")}
},{"./Gallery":519,"./Item":520,"./auto/AutoGallery":523,"./factories/autoCreate":524,"./factories/create":525,"./fade/FadeGallery":526,"./fade/FadeItem":527,"./helpers/extendProto":528,"./navigation/ToggleNav":533,"./slide/SlideGallery":536,"./slide/SlideItem":537}],522:[function(b,d,a){var i;
    try{i=b("ac-analytics").observer.Gallery}catch(h){}var g="data-analytics-gallery-id";
    function c(){this._observers={}}var f=c.prototype;f.add=function(j,l){var m=j.getId();
        if(!i||this._observers[m]){return}l=l||{};if(!l.galleryName){l.galleryName=this._getAnalyticsId(j,l.dataAttribute)||m
        }if(!l.beforeUpdateEvent){l.beforeUpdateEvent="update"}if(!l.afterUpdateEvent){l.afterUpdateEvent="update:complete"
        }var k=new i(j,l);if(k.gallery){this._observers[m]=k}};f.remove=function(j){var k=j.getId();
        if(!i||!this._observers[k]){return}if(typeof this._observers[k].destroy==="function"){this._observers[k].destroy()
        }this._observers[k]=null};f._getAnalyticsId=function(j,k){if(typeof j.getElement==="function"){k=k||g;
        var l=j.getElement();return l.getAttribute(k)||l.getAttribute("id")}return null
    };d.exports=c},{"ac-analytics":"ac-analytics"}],523:[function(o,b,H){o("@marcom/ac-polyfills/requestAnimationFrame");
    var c=o("@marcom/ac-classlist");var j=o("@marcom/ac-dom-events/addEventListener");
    var m=o("@marcom/ac-dom-events/removeEventListener");var n=o("@marcom/ac-dom-events/preventDefault");
    var v=o("@marcom/ac-dom-styles");var g=o("@marcom/ac-dom-traversal/querySelector");
    var E=o("@marcom/ac-dom-traversal/querySelectorAll");var q=o("@marcom/ac-object/create");
    var F=o("@marcom/ac-dom-metrics/getContentDimensions");var w=o("@marcom/ac-keyboard/keyMap");
    var D=o("./../helpers/selectElementFromDataAttributeValue");var p=o("./../helpers/selectElementThatHasDataAttribute");
    var l=o("./../helpers/inputHasFocus");var i=o("@marcom/ac-function/throttle");var k=o("@marcom/ac-feature/touchAvailable");
    var s=o("./../Gallery");var d=o("@marcom/ac-keyboard");var y=o("@marcom/ac-page-visibility").PageVisibilityManager;
    var h=o("@marcom/ac-pointer-tracker").PointerTracker;var u=o("./../navigation/ToggleNav");
    var A="disabled";var z=3;var f=0.5;var x="[data-ac-gallery-item]";var C=0.12;var B=o("../templates/paddlenav.js");
    var G="No element supplied.";var I='Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.';
    function r(M,L){L=L||{};if(!M||M.nodeType===undefined){throw new Error(G)}this._el=M;
        s.call(this,L);this._itemHeights=[];this._itemHeightsLookup={};this._toggleNavDuration=L.toggleNavDuration;
        this._isRightToLeft=(L.rightToLeft===undefined)?v.getStyle(M,"direction").direction==="rtl":L.rightToLeft;
        this._keyboardThrottleDelay=((L.keyboardThrottleDelay===undefined)?C:L.keyboardThrottleDelay)*1000;
        this._resizeContainer=!!L.resizeContainer;this._setUpContainerAutoResize(L.resizeContainerOnUpdate);
        this._createToggleNav();this._addPaddleNav(L.addPaddleNav);this._isACaptionsGallery=M.getAttribute("data-ac-gallery-captions")==="";
        this._addItems(L.itemSelector||x);if(!this._wrapAround){this._updatePaddleNavState()
        }if(L.enableArrowKeys!==false){this._enableArrowKeys=true;this._addKeyboardListener()
        }if(L.updateOnWindowResize!==false){this._onWindowResize=this._onWindowResize.bind(this);
            j(window,"resize",this._onWindowResize)}this._componentsContainer=document.getElementById(L.container);
        if(L.startAt){this._startAt(L.startAt)}this.stopAutoPlay=this.stopAutoPlay.bind(this);
        if(L.autoPlay){if(!this._componentsContainer){throw new Error(I)}var K=(typeof L.autoPlay==="number")?L.autoPlay:z;
            this.startAutoPlay(K)}if(L.deeplink!==false){var N=this._getDeeplinkedItem();if(N&&N!==this._currentItem){this.show(N)
        }}if(this._containerResizeDuration!==false){var J=this._itemHeightsLookup[this._currentItem.getElementId()];
            if(J){this._setElHeight(J)}}if(this._toggleNav){this._toggleNav.start()}this._setUpSwiping(L.touch&&k(),L.desktopSwipe);
        if(this._componentsContainer){this._componentsContainer.setAttribute("tabIndex",-1)
        }}r.RESIZED="resized";r.UPDATE=s.UPDATE;r.UPDATE_COMPLETE=s.UPDATE_COMPLETE;var a=s.prototype;
    var t=r.prototype=q(a);t.addItem=function(L,J){if(L.nodeType){var K=this._isACaptionsGallery;
        L=new this._itemType(L,{isACaption:K})}else{if(this._items.indexOf(L)>-1){return L
    }}if(this._resizeContainer){this._storeItemHeight(L,this._containerResizeDuration===false)
    }this._addItemTriggers(L);return a.addItem.call(this,L,J)};t.removeItem=function(L,K){if(this._resizeContainer){var J=this._itemHeights.length;
        while(J--){if(this._itemHeights[J].item===L){this._itemHeights.splice(J,1);if(J===0&&this._itemHeights.length){this._setElHeight(this._itemHeights[0].height)
        }}}}return a.removeItem.call(this,L,K)};t.startAutoPlay=function(K,J){J=J||{};this._isAutoPlaying=true;
        this._autoPlayDelay=(K||z)*1000;this._cancelAutoPlayOnInteraction=(J.cancelOnInteraction===undefined)?true:J.cancelOnInteraction;
        setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);if(this._cancelAutoPlayOnInteraction){this.on(s.UPDATE,this.stopAutoPlay)
        }if(this._componentsContainer){j(this._componentsContainer,"focus",this.stopAutoPlay,true);
            j(this._componentsContainer,"touchend",this.stopAutoPlay,true);j(this._componentsContainer,"click",this.stopAutoPlay,true)
        }else{throw new Error(I)}};t.stopAutoPlay=function(){this._isAutoPlaying=false;
        if(this._cancelAutoPlayOnInteraction){this.off(s.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){m(this._componentsContainer,"focus",this.stopAutoPlay,true);
            m(this._componentsContainer,"touchend",this.stopAutoPlay,true);m(this._componentsContainer,"click",this.stopAutoPlay,true)
        }};t.getElement=function(){return this._el};t.getToggleNav=function(){return this._toggleNav||null
    };t.resize=function(K,J){if(this._resizeContainer){this._itemHeights=[];var L=this._items.length;
        while(L--){this._storeItemHeight(this._items[L],false)}if(this._containerResizeDuration!==false){this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()])
        }else{this._setElHeight(this._itemHeights[0].height)}}if(this._toggleNav){this._toggleNav.resize()
    }this.trigger(r.RESIZED,this)};t.enableKeyboard=function(){if(!this._enableArrowKeys){this._enableArrowKeys=true;
        this._addKeyboardListener()}};t.disableKeyboard=function(){if(this._enableArrowKeys){this._enableArrowKeys=false;
        d.offDown(w.ARROW_RIGHT,this._rightArrowFunc);d.offDown(w.ARROW_LEFT,this._leftArrowFunc)
    }};t.enableTouch=function(){if(!this._touchSwipe){this._setUpSwiping(true,false)
    }};t.disableTouch=function(){if(this._touchSwipe){this._touchSwipe.off(h.END,this._onSwipeEnd);
        this._touchSwipe.destroy();this._touchSwipe=null}};t.enableDesktopSwipe=function(){if(!this._clickSwipe){this._setUpSwiping(false,true)
    }};t.disableDesktopSwipe=function(){if(this._clickSwipe){this._clickSwipe.off(h.END,this._onSwipeEnd);
        this._clickSwipe.destroy();this._clickSwipe=null}};t.destroy=function(K){if(this._isAutoPlaying){this.stopAutoPlay()
    }if(this._componentsContainer){m(this._componentsContainer,"focus",this.stopAutoPlay,true);
        m(this._componentsContainer,"touchend",this.stopAutoPlay,true);m(this._componentsContainer,"click",this.stopAutoPlay,true)
    }if(this._resizeContainer){v.setStyle(this._el,{height:null,transition:null})}if(this._enableArrowKeys){d.offDown(w.ARROW_RIGHT,this._rightArrowFunc);
        d.offDown(w.ARROW_LEFT,this._leftArrowFunc)}var J;if(this._previousButtons){J=this._previousButtons.length;
        while(J--){m(this._previousButtons[J],"click",this._onPaddlePrevious)}this._setPaddleDisabledState(this._previousButtons,false)
    }if(this._nextButtons){J=this._nextButtons.length;while(J--){m(this._nextButtons[J],"click",this._onPaddleNext)
    }this._setPaddleDisabledState(this._nextButtons,false)}if(this._dynamicPaddleNav){this._el.removeChild(this._dynamicPaddleNav)
    }if(this._hasPaddleNavStateHandler){this.off(s.UPDATE,this._updatePaddleNavState)
    }this.disableTouch();this.disableDesktopSwipe();if(this._toggleNav){this._toggleNav.destroy();
        this._toggleNav=null}m(window,"resize",this._onWindowResize);this._el=null;this._itemHeights=null;
        this._itemHeightsLookup=null;this._resizeContainer=null;this._isRightToLeft=null;
        this._enableArrowKeys=null;this._previousButtons=null;this._onPaddlePrevious=null;
        this._nextButtons=null;this._onPaddleNext=null;this._isACaptionsGallery=null;this._componentsContainer=null;
        return a.destroy.call(this,K)};t._getDeeplinkedItem=function(){var L=window.location.hash.substr(1);
        var K;var J=this._items.length;while(J--){K=this._items[J];if(L===K.getElementId()){return K
        }}return null};t._addItems=function(K){var P;var J;var N=/(^\[).*(\]$)/.test(K);
        if(N){K=K.replace(/\[|\]/g,"");J=p(K,this._el)}else{J=E(K,this._el)}var L=0;var O=J.length;
        var M=this._isACaptionsGallery;for(L;L<O;L++){P=new this._itemType(J[L],{isACaption:M});
            this.addItem(P);this._addItemTriggers(P)}};t._createToggleNav=function(){var L=this._getElementId();
        var J='[data-ac-gallery-togglenav="'+L+'"], [data-ac-gallery-tabnav="'+L+'"]';var K=g(J);
        if(K){this._toggleNav=new u(K,this,{duration:this._toggleNavDuration})}};t._addItemTriggers=function(N,J){var L=D("data-ac-gallery-trigger",N.getElementId());
        if(J&&J.length){L=L.concat(J)}var K=0;var M=L.length;for(K;K<M;K++){N.addElementTrigger(L[K]);
            if(this._toggleNav){this._toggleNav.addTrigger(L[K],N)}}};t._addPaddleNav=function(N){var L;
        var P=this._getElementId();if(N){var M=(typeof N==="string")?N:B;M=M.replace(/%ID%/g,this._getElementId());
            this._dynamicPaddleNav=document.createElement("div");this._dynamicPaddleNav.innerHTML=M;
            this._el.insertBefore(this._dynamicPaddleNav,this._el.firstChild)}this._previousButtons=D("data-ac-gallery-previous-trigger",P);
        this._nextButtons=D("data-ac-gallery-next-trigger",P);var J=this._el.getAttribute("aria-label")||"";
        if(J.length){J="("+J+")"}this._onPaddlePrevious=this._onPaddleInteraction.bind(null,this.showPrevious);
        L=this._previousButtons.length;if(L){var O=this._el.getAttribute("data-ac-gallery-previouslabel");
            if(O&&J.length){if(this._isRightToLeft){O=J+" "+O}else{O+=" "+J}}while(L--){if(O&&this._previousButtons[L].getAttribute("aria-label")===null){this._previousButtons[L].setAttribute("aria-label",O)
            }j(this._previousButtons[L],"click",this._onPaddlePrevious)}}this._onPaddleNext=this._onPaddleInteraction.bind(null,this.showNext);
        L=this._nextButtons.length;if(L){var K=this._el.getAttribute("data-ac-gallery-nextlabel");
            if(K&&J.length){if(this._isRightToLeft){K=J+" "+K}else{K+=" "+J}}while(L--){if(K&&this._nextButtons[L].getAttribute("aria-label")===null){this._nextButtons[L].setAttribute("aria-label",K)
            }j(this._nextButtons[L],"click",this._onPaddleNext)}}if(this._nextButtons.length||this._previousButtons.length){this._hasPaddleNavStateHandler=true;
            this._updatePaddleNavState=this._updatePaddleNavState.bind(this);this.on(s.UPDATE,this._updatePaddleNavState)
        }};t._onPaddleInteraction=function(K,J){n(J);K.call(null,{interactionEvent:J})};
    t._updatePaddleNavState=function(){if(!this._wrapAround){var J=this._items.indexOf(this._currentItem);
        if(J===0&&this._previousButtons.length){this._setPaddleDisabledState(this._previousButtons,true);
            this._setPaddleDisabledState(this._nextButtons,false)}else{if(J===this._items.length-1&&this._nextButtons.length){this._setPaddleDisabledState(this._nextButtons,true);
            this._setPaddleDisabledState(this._previousButtons,false)}else{this._setPaddleDisabledState(this._previousButtons,false);
            this._setPaddleDisabledState(this._nextButtons,false)}}}else{this._setPaddleDisabledState(this._previousButtons,false);
        this._setPaddleDisabledState(this._nextButtons,false)}};t._setPaddleDisabledState=function(L,J){var K=L.length;
        while(K--){L[K].disabled=J;if(J){c.add(L[K],A)}else{c.remove(L[K],A)}}};t._addKeyboardListener=function(){if(this._enableArrowKeys){this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
        var J;var K;if(this._isRightToLeft){J=this.showPrevious;K=this.showNext}else{J=this.showNext;
            K=this.showPrevious}this._rightArrowFunc=i(this._onKeyboardInteraction.bind(null,J),this._keyboardThrottleDelay);
        this._leftArrowFunc=i(this._onKeyboardInteraction.bind(null,K),this._keyboardThrottleDelay);
        d.onDown(w.ARROW_RIGHT,this._rightArrowFunc);d.onDown(w.ARROW_LEFT,this._leftArrowFunc)
    }};t._onKeyboardInteraction=function(L,K){if(this.isInView()&&!l()){var J=s.getAllInView();
        if(J.length>1){J.sort(function(N,M){N=(N._enableArrowKeys)?N.getCurrentItem().percentageInView():0;
            M=(M._enableArrowKeys)?M.getCurrentItem().percentageInView():0;return M-N});if(this!==J[0]){return
        }}L.call(null,{interactionEvent:K})}};t._setUpSwiping=function(K,J){this._onSwipeEnd=this._onSwipeEnd.bind(this);
        if(K){this._touchSwipe=new h(this._el,h.TOUCH_EVENTS);this._touchSwipe.on(h.END,this._onSwipeEnd)
        }if(J){this._clickSwipe=new h(this._el,h.MOUSE_EVENTS);this._clickSwipe.on(h.END,this._onSwipeEnd)
        }};t._onSwipeEnd=function(K){var O;var J=K.interactionEvent;var M=J.type!=="touchend"||J.type!=="touchstart"||J.type!=="touchmove";
        if(M){var N={type:"touchmove",target:J.target,srcElement:J.srcElement}}var L={interactionEvent:N||J};
        if(K.swipe===h.SWIPE_RIGHT){O=(this._isRightToLeft)?this.showNext:this.showPrevious
        }else{if(K.swipe===h.SWIPE_LEFT){O=(this._isRightToLeft)?this.showPrevious:this.showNext
        }}if(O){return O.call(this,L)}J=null;return null};t._getElementId=function(){if(this._elementId===undefined){this._elementId=this._el.getAttribute("id")
    }return this._elementId};t._setUpContainerAutoResize=function(J){if(typeof J==="number"){this._containerResizeDuration=J
    }else{if(J){this._containerResizeDuration=f}else{this._containerResizeDuration=false
    }}if(this._containerResizeDuration!==false){this._resizeContainer=true;this._updateContainerSize=this._updateContainerSize.bind(this);
        this.on(s.UPDATE,this._updateContainerSize)}};t._updateContainerSize=function(K){var J=this._itemHeightsLookup[K.incoming[0].getElementId()];
        if(J){this._setElHeight(J,this._containerResizeDuration)}};t._storeItemHeight=function(K,L){var J=F(K.getElement());
        this._itemHeights.push({item:K,height:J.height});this._itemHeightsLookup[K.getElementId()]=J.height;
        this._itemHeights.sort(function(N,M){return M.height-N.height});if(L&&this._itemHeights[0].item===K){this._setElHeight(J.height)
        }};t._setElHeight=function(J,L){var K={height:J+"px"};if(L){K.transition="height "+L+"s"
    }else{K.transition=null}v.setStyle(this._el,K)};t._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!y.isHidden&&this._currentItem.isInView()){if(this._cancelAutoPlayOnInteraction){this.off(s.UPDATE,this.stopAutoPlay)
    }var J=this.showNext();if(J!==null){if(this._cancelAutoPlayOnInteraction){this.on(s.UPDATE,this.stopAutoPlay)
    }setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)}}else{setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
    }}};t._onWindowResize=function(J){window.requestAnimationFrame(function(){if(this._el){this.resize()
    }}.bind(this))};b.exports=r},{"../templates/paddlenav.js":539,"./../Gallery":519,"./../helpers/inputHasFocus":530,"./../helpers/selectElementFromDataAttributeValue":531,"./../helpers/selectElementThatHasDataAttribute":532,"./../navigation/ToggleNav":533,"@marcom/ac-classlist":279,"@marcom/ac-dom-events/addEventListener":468,"@marcom/ac-dom-events/preventDefault":474,"@marcom/ac-dom-events/removeEventListener":475,"@marcom/ac-dom-metrics/getContentDimensions":479,"@marcom/ac-dom-styles":500,"@marcom/ac-dom-traversal/querySelector":319,"@marcom/ac-dom-traversal/querySelectorAll":320,"@marcom/ac-feature/touchAvailable":466,"@marcom/ac-function/throttle":270,"@marcom/ac-keyboard":552,"@marcom/ac-keyboard/keyMap":554,"@marcom/ac-object/create":507,"@marcom/ac-page-visibility":558,"@marcom/ac-pointer-tracker":601,"@marcom/ac-polyfills/requestAnimationFrame":511}],524:[function(c,b,d){var h=c("./create");
    var j=c("./../helpers/selectElementThatHasDataAttribute");var i=c("./../Gallery");
    var a=i.FADE_SELECTOR.replace(/\[|\]/g,"");var g=i.SLIDE_SELECTOR.replace(/\[|\]/g,"");
    b.exports=function f(l){l=l||{};var m=l.context||document.body;var n;var k;n=j(g,m);
        k=n.length;while(k--){h(n[k],i.SLIDE,l)}n=j(a,m);k=n.length;while(k--){h(n[k],i.FADE,l)
        }return i.getAll()}},{"./../Gallery":519,"./../helpers/selectElementThatHasDataAttribute":532,"./create":525}],525:[function(d,b,f){var i=d("./../fade/FadeGallery");
    var k=d("./../Gallery");var c=d("./../slide/SlideGallery");var j="%TYPE% is not a supported gallery type and el has no gallery data attribute.";
    var a=k.FADE_SELECTOR.replace(/\[|\]/g,"");var h=k.SLIDE_SELECTOR.replace(/\[|\]/g,"");
    b.exports=function g(o,n,m){var l;if(typeof n==="string"){if(n===k.SLIDE){l=c}else{if(n===k.FADE){l=i
    }}}if(l===undefined){if(o.getAttribute(h)!==null){l=c}else{if(o.getAttribute(a)!==null){l=i
    }}}if(l===undefined){throw new Error(j.replace(/%TYPE%/g,n))}return new l(o,m)}
},{"./../Gallery":519,"./../fade/FadeGallery":526,"./../slide/SlideGallery":536}],526:[function(c,a,f){var j=c("@marcom/ac-object/clone");
    var h=c("@marcom/ac-object/create");var d=c("./FadeItem");var b=c("./../auto/AutoGallery");
    var k=0.5;function i(n,m){m=j(m)||{};m.itemType=m.itemType||d;this._fadeDuration=m.duration||k;
        m.toggleNavDuration=(m.toggleNavDuration===undefined)?this._fadeDuration:m.toggleNavDuration;
        this._crossFade=m.crossFade;this._zIndexCount=m.startZIndex||1;this._ease=m.ease;
        if(m.resizeContainerOnUpdate===true){m.resizeContainerOnUpdate=this._fadeDuration
        }this._onItemShowComplete=this._onItemShowComplete.bind(this);b.call(this,n,m);
        if(this._currentItem){this._currentItem.fadeIn(0)}}i.RESIZED=b.RESIZED;i.UPDATE=b.UPDATE;
    i.UPDATE_COMPLETE=b.UPDATE_COMPLETE;var l=b.prototype;var g=i.prototype=h(l);g.addItem=function(o,m){if(o.nodeType){o=new this._itemType(o)
    }var n=l.addItem.call(this,o,m);if(o!==this._currentItem){o.fadeOut()}else{o.fadeIn(0)
    }return n};g.destroy=function(m){var n=l.destroy.call(this,m);this._fadeDuration=null;
        this._crossFade=null;this._zIndexCount=null;this._ease=null;this._onItemShowComplete=null;
        return n};g._startAt=function(m){var n=this._items[m];if(n&&(this._currentItem!==n)){this._currentItem.fadeOut(0);
        this._currentItem.hide();this._setCurrentItem(n);this._currentItem.show();this._currentItem.fadeIn(0);
        this.trigger(i.UPDATE,this._items)}};g._onItemShowComplete=function(o){if(o&&o.target()!==this._currentItem.getElement()){if(!this._currentItem.isFading()){this._currentItem.fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
    }return}var n;var m=this._items.length;while(m--){n=this._items[m];if(n!==this._currentItem){n.fadeOut()
    }}if(this._incomingOutgoingItems){this.trigger(i.UPDATE_COMPLETE,this._incomingOutgoingItems)
    }};g._updateItems=function(n,m){if(m){return}if(this._crossFade){var o=(m)?null:this.trigger.bind(this,i.UPDATE_COMPLETE,n);
        n.outgoing[0].fadeOut(this._fadeDuration*0.99,this._ease);n.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,o)
    }else{this._incomingOutgoingItems=(m)?false:n;if(!n.outgoing[0].isFading()){n.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
    }}n.outgoing[0].hide();n.incoming[0].show()};a.exports=i},{"./../auto/AutoGallery":523,"./FadeItem":527,"@marcom/ac-object/clone":506,"@marcom/ac-object/create":507}],527:[function(b,a,g){var k=b("@marcom/ac-dom-styles/setStyle");
    var j=b("@marcom/ac-object/create");var f=b("@marcom/ac-solar/fade");var l=b("@marcom/ac-solar/fadeIn");
    var i=b("@marcom/ac-solar/fadeOut");var d=b("./../Item");function c(o,n){d.call(this,o,n);
        k(o,{position:"absolute"})}c.SELECTED=d.SELECTED;c.SHOW=d.SHOW;c.HIDE=d.HIDE;var m=d.prototype;
    var h=c.prototype=j(m);h.fadeIn=function(n,o,q,p){if(n){k(this._el,{zIndex:q||1});
        this._destroyCurrentClip();this._clip=f(this._el,0,1,n,{ease:o,onComplete:p})}else{l(this._el,0);
        k(this._el,{zIndex:q||1})}};h.fadeOut=function(n,o){if(n){this._destroyCurrentClip();
        this._clip=i(this._el,n,{ease:o})}else{i(this._el,0)}};h.isFading=function(){return !!(this._clip&&this._clip.playing())
    };h.destroy=function(){k(this._el,{position:null,opacity:null,zIndex:null});m.destroy.call(this);
        this._destroyCurrentClip();this._clip=null};h._destroyCurrentClip=function(){if(this.isFading()){this._clip.destroy()
    }};a.exports=c},{"./../Item":520,"@marcom/ac-dom-styles/setStyle":503,"@marcom/ac-object/create":507,"@marcom/ac-solar/fade":512,"@marcom/ac-solar/fadeIn":513,"@marcom/ac-solar/fadeOut":514}],528:[function(c,f,b){var d=c("@marcom/ac-object/create");
    var g=c("@marcom/ac-object/extend");f.exports=function a(k){var i=this;var j=function(){i.apply(this,arguments)
    };var h=d(this.prototype);j.prototype=g(h,k);g(j,this);return j}},{"@marcom/ac-object/create":507,"@marcom/ac-object/extend":508}],529:[function(d,f,c){var b=d("@marcom/ac-dom-styles/getStyle");
    var a=d("@marcom/ac-dom-metrics/getContentDimensions");f.exports=function g(h){var i=b(h,"margin-right","margin-left");
        return Math.round(a(h).width)+parseInt(i.marginRight,10)+parseInt(i.marginLeft,10)
    }},{"@marcom/ac-dom-metrics/getContentDimensions":479,"@marcom/ac-dom-styles/getStyle":501}],530:[function(b,c,a){c.exports=function d(){var f=["input","select","textarea"];
    return f.indexOf(document.activeElement.nodeName.toLowerCase())>-1}},{}],531:[function(c,f,b){var g=c("@marcom/ac-dom-traversal/querySelectorAll");
    var a=function(i,n){var j;var m=document.getElementsByTagName("*");var h=0;var k=m.length;
        var l=[];for(h;h<k;h++){j=m[h];if(j.getAttribute(i)!==null&&j.getAttribute(i).split(" ").indexOf(n)>-1){l[l.length]=j
        }}return l};f.exports=function d(j,m){var l=g("["+j+'*="'+m+'"]');if(l.length===0&&document.documentMode===7){return a(j,m)
    }var n=[];var i=0;var k=l.length;var h;for(i;i<k;i++){h=l[i].getAttribute(j);if(h===m){n.push(l[i])
    }else{if(h&&h.length){h=h.split(" ");if(h.indexOf(m)>-1){n.push(l[i])}}}}return n
    }},{"@marcom/ac-dom-traversal/querySelectorAll":320}],532:[function(c,d,b){var h=c("@marcom/ac-dom-traversal/querySelectorAll");
    var f=c("@marcom/ac-dom-traversal/ancestors");var a=function(j,k){var l;var o=document.getElementsByTagName("*");
        var i=0;var m=o.length;var n=[];for(i;i<m;i++){l=o[i];if(l.getAttribute(j)!==null&&(!k||f(l).indexOf(k)>-1)){n[n.length]=l
        }}return n};d.exports=function g(i,j){j=j||document.body;var k=h("["+i+"]",j);if(k.length===0&&document.documentMode===7){return a(i,j)
    }return k}},{"@marcom/ac-dom-traversal/ancestors":315,"@marcom/ac-dom-traversal/querySelectorAll":320}],533:[function(i,c,s){var g=i("@marcom/ac-dom-events/addEventListener");
    var h=i("@marcom/ac-dom-events/removeEventListener");var m=i("@marcom/ac-dom-metrics/getDimensions");
    var r=i("@marcom/ac-dom-metrics/getPosition");var f=i("@marcom/ac-dom-styles/getStyle");
    var d=i("@marcom/ac-dom-styles/setStyle");var a=i("@marcom/ac-dom-traversal/ancestors");
    var j=i("@marcom/ac-object/create");var q=i("@marcom/ac-solar/scrollX");var k=i("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var n=i("./../Gallery");var l=0.5;function p(v,t,u){u=u||{};this._el=v;this._isRightToLeft=(u.rightToLeft===undefined)?f(v,"direction").direction==="rtl":u.rightToLeft;
        this._scrollType=this._scrollDirection();this._gallery=t;this._triggers={};this._ordered=[];
        this._containerEl=this._el.children[0];this._slideDuration=(u.duration===undefined)?l:u.duration;
        k.call(this)}var b=k.prototype;var o=p.prototype=j(b);o.start=function(){this._onWindowLoad=this._onWindowLoad.bind(this);
        this._onGalleryUpdated=this._onGalleryUpdated.bind(this);this._gallery.on(n.UPDATE,this._onGalleryUpdated);
        this.resize();g(window,"load",this._onWindowLoad)};o.addTrigger=function(u,v){if(this._triggers[v.getElementId()]!==undefined){return
    }var t=a(u);if(t.indexOf(this._el)>-1){var w={el:u};this._triggers[v.getElementId()]=w;
        this._ordered.push(w)}};o.resize=function(){if(!this._ordered.length){return}d(this._containerEl,{paddingLeft:null,paddingRight:null});
        this._containerWidth=m(this._containerEl).width;this._width=m(this._el).width;this._viewCenter=Math.round(this._width*0.5);
        var v=this._ordered.length;while(v--){this._setTriggerData(this._ordered[v])}this._ordered.sort(function(A,z){return A.left-z.left
        });if(this._containerWidth>this._width){var x=this._ordered[0];var w=this._ordered[this._ordered.length-1];
            var u=(this._width-x.width)*0.5;var y=(this._width-w.width)*0.5;d(this._containerEl,{paddingLeft:u+"px",paddingRight:y+"px"});
            var t=this._triggers[this._gallery.getCurrentItem().getElementId()];if(t){this._centerNav(t)
            }}};o.destroy=function(){this._gallery.off(n.UPDATE,this._onGalleryUpdated);h(window,"load",this._onWindowLoad);
        d(this._containerEl,{paddingLeft:null,paddingRight:null});this._el=null;this._gallery=null;
        this._triggers=null;this._ordered=null;this._containerEl=null;this._destroyCurrentClip();
        this._clip=null;return b.destroy.call(this)};o._onWindowLoad=function(){h(window,"load",this._onWindowLoad);
        this.resize()};o._setTriggerData=function(u){u.width=m(u.el).width;var t=r(u.el);
        u.left=t.left;u.right=t.right;u.center=u.left+(u.width*0.5)};o._centerNav=function(t,v){this._setTriggerData(t);
        this._width=m(this._el).width;this._viewCenter=Math.round(this._width*0.5);var u=Math.round(t.center-this._viewCenter);
        if(this._isRightToLeft){if(this._scrollType!=="negative"){u=Math.abs(u)}if(this._scrollType==="default"){u=this._el.scrollWidth-this._el.clientWidth-u
        }}this._destroyCurrentClip();if(v){this._clip=q(this._el,u,v)}else{this._el.scrollLeft=u
        }};o._onGalleryUpdated=function(t){var u=this._triggers[t.incoming[0].getElementId()];
        if(u){this._centerNav(u,this._slideDuration)}};o._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
    }};o._scrollDirection=function(){var u="reverse";var t=document.createElement("div");
        t.style.cssText="width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;";
        t.style.direction="rtl";t.innerHTML="test";document.body.appendChild(t);if(t.scrollLeft>0){u="default"
        }else{t.scrollLeft=1;if(t.scrollLeft===0){u="negative"}}document.body.removeChild(t);
        return u};c.exports=p},{"./../Gallery":519,"@marcom/ac-dom-events/addEventListener":468,"@marcom/ac-dom-events/removeEventListener":475,"@marcom/ac-dom-metrics/getDimensions":480,"@marcom/ac-dom-metrics/getPosition":484,"@marcom/ac-dom-styles/getStyle":501,"@marcom/ac-dom-styles/setStyle":503,"@marcom/ac-dom-traversal/ancestors":315,"@marcom/ac-event-emitter-micro":504,"@marcom/ac-object/create":507,"@marcom/ac-solar/scrollX":518}],534:[function(b,d,a){var c=b("./../analytics/AnalyticsManager");
    d.exports=new c()},{"./../analytics/AnalyticsManager":522}],535:[function(c,d,b){var g=["input","select","textarea","button","object"];
    var h=["href","tabindex","contenteditable"];var a=function(){this.focusableSelectors=g.concat(h.map(function(i){return(i==="href")?"a["+i+"]":"*["+i+"]"
    })).join(",")};var f=a.prototype;f.isFocusable=function(k,i){var l=k.nodeName.toLowerCase();
        var j=g.indexOf(l)>-1;if(l==="a"){return true}if(j){return !k.disabled}if(!k.contentEditable){return true
        }i=i||k.tabIndex;return isNaN(i)};f.isTabbable=function(j){var i=j.getAttribute("tabindex");
        if(!isNaN(i)){return(i>=0)}else{return this.isFocusable(j,i)}};f.getTabbable=function(n){var k=n.length;
        var j=[];for(var m=0;m<k;m++){if(this.isTabbable(n[m])){j.push(n[m])}}return j};
    d.exports=new a()},{}],536:[function(g,c,w){var d=g("@marcom/ac-classlist");var o=g("@marcom/ac-dom-styles");
    var u=g("@marcom/ac-dom-traversal/querySelectorAll");var s=g("@marcom/ac-object/clone");
    var i=g("@marcom/ac-object/create");var v=g("./../helpers/getElementFullWidth");
    var m=g("@marcom/ac-solar/moveX");var t=g("./../helpers/selectElementFromDataAttributeValue");
    var h=g("./../helpers/selectElementThatHasDataAttribute");var l=g("./../auto/AutoGallery");
    var f=g("@marcom/ac-pointer-tracker").PointerTracker;var q=g("./SlideItem");var j=g("./SlideItemWrapper");
    var a=0.5;var k=0.5;var r=true;function p(z,y){y=s(y)||{};y.itemType=y.itemType||q;
        this._itemsPerSlide=y.itemsPerSlide||1;var x=y.deeplink!==false;y.deeplink=false;
        this._slideDuration=(y.duration!==undefined)?y.duration:k;y.toggleNavDuration=(y.toggleNavDuration===undefined)?this._slideDuration:y.toggleNavDuration;
        this._itemCenterPoint=(y.itemCenterPoint!==undefined)?y.itemCenterPoint:a;this._edgePullResistance=(y.edgePullResistance?y.edgePullResistance:r);
        this._slideOptions={ease:y.ease};if(y.resizeContainerOnUpdate===true){y.resizeContainerOnUpdate=this._slideDuration
        }y.touch=y.touch!==false;this._originalWrapAround=y.wrapAround||false;l.call(this,z,y);
        if(x){var A=this._getDeeplinkedItem();if(A){if(this._currentItem!==A){this._currentItem.hide();
            this._setCurrentItem(A);this._currentItem.show()}}}this._positionItems=this._positionItems.bind(this);
        this._createContainer();if(this._items.length!==0){this._positionItems()}this._isInstantiated=true
    }p.RESIZED=l.RESIZED;p.UPDATE=l.UPDATE;p.UPDATE_COMPLETE=l.UPDATE_COMPLETE;var b=l.prototype;
    var n=p.prototype=i(b);n.addItem=function(z,x){if(z.nodeType){z=new this._itemType(z)
    }var y=b.addItem.call(this,z,x);if(this._containerEl!==undefined){this._addItemToContainer(z);
        this._positionItems()}this._updateWrapAround();return y};n.removeItem=function(A,y){if(this._containerEl&&A.getElement().parentElement===this._containerEl){var x=A.getOriginalParentElement();
        if(x){x.appendChild(A.getElement())}else{if(typeof A.removeItems==="function"){A.removeItems();
            y.destroyItem=true}}var z=b.removeItem.call(this,A,y);if(this._currentItem){this._positionItems(this._currentItem)
        }this._updateWrapAround();return z}return b.removeItem.call(this,A,y)};n.resize=function(){this._positionItems();
        this._snapToPosition(this._currentItem.position());return b.resize.call(this)};
    n.destroy=function(y){this._destroyCurrentClip();this._clip=null;var x=this._items.length;
        while(x--){this._items[x].off(q.CENTER_POINT_CHANGED,this._positionItems)}if(this._touchSwipe){this._touchSwipe.off(f.START,this._onSwipeStart);
            this._touchSwipe.off(f.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.off(f.START,this._onSwipeStart);
            this._clickSwipe.off(f.UPDATE,this._onSwipeUpdate)}var A=this._el;var z=b.destroy.call(this,y);
        A.removeChild(this._containerEl);this._containerEl=null;this._slideDuration=null;
        this._itemCenterPoint=null;this._positionItems=null;this._slideOptions=null;return z
    };n._addItems=function(A){if(this._itemsPerSlide>1){var F;var z=/(^\[).*(\]$)/.test(A);
        if(z){F=h(A.replace(/\[|\]/g,""),this._el)}else{F=u(A,this._el)}var x;var E;var B;
        var C=0;var D=0;var y=F.length;for(D;D<y;D++){if(C===0){x=new j()}x.addItem(F[D]);
            B=F[D].getAttribute("id");if(B){E=t("data-ac-gallery-trigger",B);this._addItemTriggers(x,E)
            }if(++C===this._itemsPerSlide||D===y-1){C=0;x.resize();this.addItem(x)}}}else{b._addItems.call(this,A)
    }};n._createContainer=function(){this._containerEl=document.createElement("div");
        d.add(this._containerEl,"ac-gallery-slidecontainer");o.setStyle(this._containerEl,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"});
        this._el.appendChild(this._containerEl);var x=0;var y=this._items.length;for(x;
                                                                                     x<y;x++){this._addItemToContainer(this._items[x])}};n._addItemToContainer=function(x){this._containerEl.appendChild(x.getElement());
        x.on(q.CENTER_POINT_CHANGED,this._positionItems)};n._positionItems=function(B){B=B||this._currentItem;
        var F=this._items;if(this._wrapAround){F=this._shuffleItems()}var H=(this._getActualPositionX()-B.position())||0;
        var G=parseInt(o.getStyle(this._el,"width").width,10);var y=0;var D=0;var A=F.length;
        var I;var z;var x;var C;var E;for(D;D<A;D++){I=F[D];I.resize();z=I.getElement();
            o.setStyle(z,{left:y+"px"});x=v(z);C=G-x;E=(I.centerPoint&&I.centerPoint()!==null)?I.centerPoint():this._itemCenterPoint;
            I.position((y*-1)+(C*E));if(this._isRightToLeft){y-=x}else{y+=x}}y=B.position()+H;
        this._snapToPosition(y)};n._getActualPositionX=function(){var y=o.getStyle(this._containerEl,"transform").transform;
        if(!y||y==="none"){var z=o.getStyle(this._containerEl,"left").left;return parseInt(z,10)
        }else{if(y===this._transformStyles&&this._actualPositionX!==undefined){return this._actualPositionX
        }}this._transformStyles=y;var x=this._transformStyles.split(",");this._actualPositionX=x[4]||this._currentItem.position();
        return this._actualPositionX*1};n._snapToPosition=function(x){this._destroyCurrentClip();
        this._positionX=x;o.setStyle(this._containerEl,{transition:"transform 0s, left 0s"});
        m(this._containerEl,x,0,this._slideOptions)};n._slideToPosition=function(x,y,z){this._positionX=x;
        this._clip=m(this._containerEl,x,y,{ease:this._slideOptions.ease,onComplete:z})
    };n._setUpSwiping=function(y,x){var z=b._setUpSwiping.call(this,y,x);this._onSwipeStart=this._onSwipeStart.bind(this);
        this._onSwipeUpdate=this._onSwipeUpdate.bind(this);if(this._touchSwipe){this._touchSwipe.on(f.START,this._onSwipeStart);
            this._touchSwipe.on(f.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.on(f.START,this._onSwipeStart);
            this._clickSwipe.on(f.UPDATE,this._onSwipeUpdate)}return z};n._onSwipeStart=function(x){if(this._clip&&this._clip.playing()){this._destroyCurrentClip();
        this._positionX=this._getActualPositionX()}};n._onSwipeUpdate=function(x){this._destroyCurrentClip();
        var z=this.getItems().slice(-1)[0].position();var A=this._positionX>0||this._positionX<z;
        var y=x.diffX;if(this._edgePullResistance&&!this._wrapAround&&A){y*=0.5}this._snapToPosition(this._positionX-y)
    };n._onSwipeEnd=function(x){var y=b._onSwipeEnd.call(this,x);if(y===null){y=this.show(this._currentItem,{interactionEvent:x.interactionEvent})
    }return y};n._shuffleItems=function(){var B=this._items.length===2&&!this._isAutoPlaying;
        if(B){return this._items.slice()}var E=this._items.length;var y=this._items.indexOf(this._currentItem);
        var D=Math.floor(E*0.5);var A;var x;var z;if(y<D){A=D-y;var C=E-A;x=this._items.slice(C);
            z=this._items.slice(0,C);return x.concat(z)}else{if(y>D){A=y-D;x=this._items.slice(0,A);
            z=this._items.slice(A);return z.concat(x)}}return this._items};n._updateItems=function(y,x){this._destroyCurrentClip();
        if(this._wrapAround){this._positionItems(y.outgoing[0])}if(this.getItemIndex(y.outgoing[0])>-1){var A=(x)?null:this.trigger.bind(this,p.UPDATE_COMPLETE,y);
            var z=this._slideDuration;this._slideToPosition(y.incoming[0].position(),z,A);if(y.incoming[0]!==y.outgoing[0]){y.incoming[0].show();
                y.outgoing[0].hide()}}else{this._slideToPosition(this._currentItem.position(),this._slideDuration);
            y.incoming[0].show();if(!x){this.trigger(p.UPDATE_COMPLETE,y)}}};n._updateWrapAround=function(){if(this._items.length<=2){this._wrapAround=false
    }else{if(this._originalWrapAround){this._wrapAround=this._originalWrapAround}}if(this._isInstantiated&&(this._previousButtons||this._nextButtons)){this._updatePaddleNavState()
    }};n._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
    }};c.exports=p},{"./../auto/AutoGallery":523,"./../helpers/getElementFullWidth":529,"./../helpers/selectElementFromDataAttributeValue":531,"./../helpers/selectElementThatHasDataAttribute":532,"./SlideItem":537,"./SlideItemWrapper":538,"@marcom/ac-classlist":279,"@marcom/ac-dom-styles":500,"@marcom/ac-dom-traversal/querySelectorAll":320,"@marcom/ac-object/clone":506,"@marcom/ac-object/create":507,"@marcom/ac-pointer-tracker":601,"@marcom/ac-solar/moveX":516}],537:[function(b,a,d){var h=b("@marcom/ac-dom-styles/setStyle");
    var g=b("@marcom/ac-object/create");var c=b("./../Item");function i(l,k){c.call(this,l,k);
        h(l,{position:"absolute",transform:{translateZ:0}});this._parentElement=l.parentElement
    }i.CENTER_POINT_CHANGED="centerpointchanged";i.SELECTED=c.SELECTED;i.SHOW=c.SHOW;
    i.HIDE=c.HIDE;var j=c.prototype;var f=i.prototype=g(j);f.position=function(k){if(k!==undefined){this._position=k
    }return this._position||0};f.centerPoint=function(k){if(k!==undefined){this._centerPoint=k;
        this.trigger(i.CENTER_POINT_CHANGED)}return(this._centerPoint!==undefined)?this._centerPoint:null
    };f.getOriginalParentElement=function(){return this._parentElement};f.resize=function(){};
    f.destroy=function(){h(this._el,{position:null,left:null,transform:null});j.destroy.call(this)
    };a.exports=i},{"./../Item":520,"@marcom/ac-dom-styles/setStyle":503,"@marcom/ac-object/create":507}],538:[function(g,d,h){var n=g("@marcom/ac-classlist");
    var k=g("@marcom/ac-dom-styles/setStyle");var c=g("@marcom/ac-dom-traversal/querySelectorAll");
    var j=g("@marcom/ac-object/create");var o=g("./../singletons/tabManager");var a=g("./../helpers/getElementFullWidth");
    var l=g("./SlideItem");var b="ac-gallery-slideitemwrapper";function f(){l.call(this,document.createElement("div"));
        this._items=[];this._currentWidth=0;n.add(this._el,b)}var m=l.prototype;var i=f.prototype=j(m);
    i.addItem=function(r){this._items.push({el:r,parentElement:r.parentElement});this._el.appendChild(r);
        var p=r.getAttribute("id");if(p){var s=this._el.getAttribute("id")||"";var q=(s.length)?"-":"";
            s+=q+p;this._el.setAttribute("id",s)}this._focusableEls=this._focusableEls.concat(c(o.focusableSelectors,r))
    };i.removeItems=function(){var r;var p;var q=0;var s=this._items.length;for(q;q<s;
                                                                                q++){r=this._items[q].el;k(r,{position:null,left:null});p=this._items[q].parentElement;
        if(p){p.appendChild(r)}}};i.resize=function(){this._currentWidth=0;var q;var p=0;
        var r=this._items.length;for(p;p<r;p++){q=this._items[p].el;k(q,{position:"absolute",left:this._currentWidth+"px"});
            this._currentWidth+=a(q)}k(this._el,{width:this._currentWidth+"px"})};i.destroy=function(){this.removeItems();
        this._items=null;this._currentWidth=null;var p=this._el.parentElement;if(p){p.removeChild(this._el)
        }m.destroy.call(this)};d.exports=f},{"./../helpers/getElementFullWidth":529,"./../singletons/tabManager":535,"./SlideItem":537,"@marcom/ac-classlist":279,"@marcom/ac-dom-styles/setStyle":503,"@marcom/ac-dom-traversal/querySelectorAll":320,"@marcom/ac-object/create":507}],539:[function(b,c,a){var d="";
    d+='<nav class="paddlenav">';d+="<ul>";d+='<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>';
    d+='<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>';
    d+="</ul>";d+="</nav>";c.exports=d},{}],540:[function(b,c,a){(function(v){
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    "use strict";
    var aI=b("base64-js");var g=b("ieee754");var f=b("isarray");a.Buffer=aG;a.SlowBuffer=aT;
    a.INSPECT_MAX_BYTES=50;aG.poolSize=8192;var a4={};aG.TYPED_ARRAY_SUPPORT=v.TYPED_ARRAY_SUPPORT!==undefined?v.TYPED_ARRAY_SUPPORT:aM();
    function aM(){function a8(){}try{var a7=new Uint8Array(1);a7.foo=function(){return 42
    };a7.constructor=a8;return a7.foo()===42&&a7.constructor===a8&&typeof a7.subarray==="function"&&a7.subarray(1,1).byteLength===0
    }catch(a9){return false}}function ar(){return aG.TYPED_ARRAY_SUPPORT?2147483647:1073741823
    }function aG(a7){if(!(this instanceof aG)){if(arguments.length>1){return new aG(a7,arguments[1])
    }return new aG(a7)}if(!aG.TYPED_ARRAY_SUPPORT){this.length=0;this.parent=undefined
    }if(typeof a7==="number"){return aw(this,a7)}if(typeof a7==="string"){return h(this,a7,arguments.length>1?arguments[1]:"utf8")
    }return ag(this,a7)}function aw(a9,a8){a9=m(a9,a8<0?0:aP(a8)|0);if(!aG.TYPED_ARRAY_SUPPORT){for(var a7=0;
                                                                                                    a7<a8;a7++){a9[a7]=0}}return a9}function h(ba,a7,a9){if(typeof a9!=="string"||a9===""){a9="utf8"
    }var a8=ax(a7,a9)|0;ba=m(ba,a8);ba.write(a7,a9);return ba}function ag(a8,a7){if(aG.isBuffer(a7)){return ac(a8,a7)
    }if(f(a7)){return a0(a8,a7)}if(a7==null){throw new TypeError("must start with number, buffer, array or string")
    }if(typeof ArrayBuffer!=="undefined"){if(a7.buffer instanceof ArrayBuffer){return R(a8,a7)
    }if(a7 instanceof ArrayBuffer){return am(a8,a7)}}if(a7.length){return N(a8,a7)}return az(a8,a7)
    }function ac(a9,a7){var a8=aP(a7.length)|0;a9=m(a9,a8);a7.copy(a9,0,0,a8);return a9
    }function a0(a9,ba){var a8=aP(ba.length)|0;a9=m(a9,a8);for(var a7=0;a7<a8;a7+=1){a9[a7]=ba[a7]&255
    }return a9}function R(a9,ba){var a8=aP(ba.length)|0;a9=m(a9,a8);for(var a7=0;a7<a8;
                                                                        a7+=1){a9[a7]=ba[a7]&255}return a9}function am(a7,a8){if(aG.TYPED_ARRAY_SUPPORT){a8.byteLength;
        a7=aG._augment(new Uint8Array(a8))}else{a7=R(a7,new Uint8Array(a8))}return a7}function N(a9,ba){var a8=aP(ba.length)|0;
        a9=m(a9,a8);for(var a7=0;a7<a8;a7+=1){a9[a7]=ba[a7]&255}return a9}function az(ba,a7){var bb;
        var a9=0;if(a7.type==="Buffer"&&f(a7.data)){bb=a7.data;a9=aP(bb.length)|0}ba=m(ba,a9);
        for(var a8=0;a8<a9;a8+=1){ba[a8]=bb[a8]&255}return ba}if(aG.TYPED_ARRAY_SUPPORT){aG.prototype.__proto__=Uint8Array.prototype;
        aG.__proto__=Uint8Array}else{aG.prototype.length=undefined;aG.prototype.parent=undefined
    }function m(a9,a8){if(aG.TYPED_ARRAY_SUPPORT){a9=aG._augment(new Uint8Array(a8));
        a9.__proto__=aG.prototype}else{a9.length=a8;a9._isBuffer=true}var a7=a8!==0&&a8<=aG.poolSize>>>1;
        if(a7){a9.parent=a4}return a9}function aP(a7){if(a7>=ar()){throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ar().toString(16)+" bytes")
    }return a7|0}function aT(a8,a9){if(!(this instanceof aT)){return new aT(a8,a9)}var a7=new aG(a8,a9);
        delete a7.parent;return a7}aG.isBuffer=function y(a7){return !!(a7!=null&&a7._isBuffer)
    };aG.compare=function a3(ba,a9){if(!aG.isBuffer(ba)||!aG.isBuffer(a9)){throw new TypeError("Arguments must be Buffers")
    }if(ba===a9){return 0}var a8=ba.length;var bc=a9.length;var bb=0;var a7=Math.min(a8,bc);
        while(bb<a7){if(ba[bb]!==a9[bb]){break}++bb}if(bb!==a7){a8=ba[bb];bc=a9[bb]}if(a8<bc){return -1
        }if(bc<a8){return 1}return 0};aG.isEncoding=function X(a7){switch(String(a7).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;
        default:return false}};aG.concat=function a1(bb,ba){if(!f(bb)){throw new TypeError("list argument must be an Array of Buffers.")
    }if(bb.length===0){return new aG(0)}var a8;if(ba===undefined){ba=0;for(a8=0;a8<bb.length;
                                                                           a8++){ba+=bb[a8].length}}var a7=new aG(ba);var bc=0;for(a8=0;a8<bb.length;a8++){var a9=bb[a8];
        a9.copy(a7,bc);bc+=a9.length}return a7};function ax(a8,a9){if(typeof a8!=="string"){a8=""+a8
    }var a7=a8.length;if(a7===0){return 0}var ba=false;for(;;){switch(a9){case"ascii":case"binary":case"raw":case"raws":return a7;
        case"utf8":case"utf-8":return aW(a8).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a7*2;
        case"hex":return a7>>>1;case"base64":return ah(a8).length;default:if(ba){return aW(a8).length
        }a9=(""+a9).toLowerCase();ba=true}}}aG.byteLength=ax;function Q(a8,ba,a7){var a9=false;
        ba=ba|0;a7=a7===undefined||a7===Infinity?this.length:a7|0;if(!a8){a8="utf8"}if(ba<0){ba=0
        }if(a7>this.length){a7=this.length}if(a7<=ba){return""}while(true){switch(a8){case"hex":return ae(this,ba,a7);
            case"utf8":case"utf-8":return aR(this,ba,a7);case"ascii":return K(this,ba,a7);case"binary":return aS(this,ba,a7);
            case"base64":return aK(this,ba,a7);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return al(this,ba,a7);
            default:if(a9){throw new TypeError("Unknown encoding: "+a8)}a8=(a8+"").toLowerCase();
                a9=true}}}aG.prototype.toString=function at(){var a7=this.length|0;if(a7===0){return""
    }if(arguments.length===0){return aR(this,0,a7)}return Q.apply(this,arguments)};
    aG.prototype.equals=function J(a7){if(!aG.isBuffer(a7)){throw new TypeError("Argument must be a Buffer")
    }if(this===a7){return true}return aG.compare(this,a7)===0};aG.prototype.inspect=function aX(){var a8="";
        var a7=a.INSPECT_MAX_BYTES;if(this.length>0){a8=this.toString("hex",0,a7).match(/.{2}/g).join(" ");
            if(this.length>a7){a8+=" ... "}}return"<Buffer "+a8+">"};aG.prototype.compare=function a3(a7){if(!aG.isBuffer(a7)){throw new TypeError("Argument must be a Buffer")
    }if(this===a7){return 0}return aG.compare(this,a7)};aG.prototype.indexOf=function l(a9,a8){if(a8>2147483647){a8=2147483647
    }else{if(a8<-2147483648){a8=-2147483648}}a8>>=0;if(this.length===0){return -1}if(a8>=this.length){return -1
    }if(a8<0){a8=Math.max(this.length+a8,0)}if(typeof a9==="string"){if(a9.length===0){return -1
    }return String.prototype.indexOf.call(this,a9,a8)}if(aG.isBuffer(a9)){return a7(this,a9,a8)
    }if(typeof a9==="number"){if(aG.TYPED_ARRAY_SUPPORT&&Uint8Array.prototype.indexOf==="function"){return Uint8Array.prototype.indexOf.call(this,a9,a8)
    }return a7(this,[a9],a8)}function a7(ba,bd,bc){var be=-1;for(var bb=0;bc+bb<ba.length;
                                                                 bb++){if(ba[bc+bb]===bd[be===-1?0:bb-be]){if(be===-1){be=bb}if(bb-be+1===bd.length){return bc+be
    }}else{be=-1}}return -1}throw new TypeError("val must be string, number or Buffer")
    };aG.prototype.get=function aE(a7){console.log(".get() is deprecated. Access using array indexes instead.");
        return this.readUInt8(a7)};aG.prototype.set=function P(a7,a8){console.log(".set() is deprecated. Access using array indexes instead.");
        return this.writeUInt8(a7,a8)};function s(a9,a8,be,bd){be=Number(be)||0;var bb=a9.length-be;
        if(!bd){bd=bb}else{bd=Number(bd);if(bd>bb){bd=bb}}var bc=a8.length;if(bc%2!==0){throw new Error("Invalid hex string")
        }if(bd>bc/2){bd=bc/2}for(var ba=0;ba<bd;ba++){var a7=parseInt(a8.substr(ba*2,2),16);
            if(isNaN(a7)){throw new Error("Invalid hex string")}a9[be+ba]=a7}return ba}function Z(a8,a7,ba,a9){return Y(aW(a7,a8.length-ba),a8,ba,a9)
    }function a5(a8,a7,ba,a9){return Y(ai(a7),a8,ba,a9)}function aa(a8,a7,ba,a9){return a5(a8,a7,ba,a9)
    }function V(a8,a7,ba,a9){return Y(ah(a7),a8,ba,a9)}function x(a8,a7,ba,a9){return Y(av(a7,a8.length-ba),a8,ba,a9)
    }aG.prototype.write=function aZ(a7,bc,ba,a9){if(bc===undefined){a9="utf8";ba=this.length;
        bc=0}else{if(ba===undefined&&typeof bc==="string"){a9=bc;ba=this.length;bc=0}else{if(isFinite(bc)){bc=bc|0;
        if(isFinite(ba)){ba=ba|0;if(a9===undefined){a9="utf8"}}else{a9=ba;ba=undefined}}else{var bb=a9;
        a9=bc;bc=ba|0;ba=bb}}}var a8=this.length-bc;if(ba===undefined||ba>a8){ba=a8}if((a7.length>0&&(ba<0||bc<0))||bc>this.length){throw new RangeError("attempt to write outside buffer bounds")
    }if(!a9){a9="utf8"}var bd=false;for(;;){switch(a9){case"hex":return s(this,a7,bc,ba);
        case"utf8":case"utf-8":return Z(this,a7,bc,ba);case"ascii":return a5(this,a7,bc,ba);
        case"binary":return aa(this,a7,bc,ba);case"base64":return V(this,a7,bc,ba);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,a7,bc,ba);
        default:if(bd){throw new TypeError("Unknown encoding: "+a9)}a9=(""+a9).toLowerCase();
            bd=true}}};aG.prototype.toJSON=function E(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}
    };function aK(a8,a9,a7){if(a9===0&&a7===a8.length){return aI.fromByteArray(a8)}else{return aI.fromByteArray(a8.slice(a9,a7))
    }}function aR(a9,a8,bb){bb=Math.min(a9.length,bb);var be=[];var bc=a8;while(bc<bb){var bg=a9[bc];
        var bf=null;var bi=(bg>239)?4:(bg>223)?3:(bg>191)?2:1;if(bc+bi<=bb){var bh,a7,bd,ba;
            switch(bi){case 1:if(bg<128){bf=bg}break;case 2:bh=a9[bc+1];if((bh&192)===128){ba=(bg&31)<<6|(bh&63);
                if(ba>127){bf=ba}}break;case 3:bh=a9[bc+1];a7=a9[bc+2];if((bh&192)===128&&(a7&192)===128){ba=(bg&15)<<12|(bh&63)<<6|(a7&63);
                if(ba>2047&&(ba<55296||ba>57343)){bf=ba}}break;case 4:bh=a9[bc+1];a7=a9[bc+2];bd=a9[bc+3];
                if((bh&192)===128&&(a7&192)===128&&(bd&192)===128){ba=(bg&15)<<18|(bh&63)<<12|(a7&63)<<6|(bd&63);
                    if(ba>65535&&ba<1114112){bf=ba}}}}if(bf===null){bf=65533;bi=1}else{if(bf>65535){bf-=65536;
            be.push(bf>>>10&1023|55296);bf=56320|bf&1023}}be.push(bf);bc+=bi}return af(be)}var W=4096;
    function af(a8){var a7=a8.length;if(a7<=W){return String.fromCharCode.apply(String,a8)
    }var ba="";var a9=0;while(a9<a7){ba+=String.fromCharCode.apply(String,a8.slice(a9,a9+=W))
    }return ba}function K(a9,bb,a7){var a8="";a7=Math.min(a9.length,a7);for(var ba=bb;
                                                                            ba<a7;ba++){a8+=String.fromCharCode(a9[ba]&127)}return a8}function aS(a9,bb,a7){var a8="";
        a7=Math.min(a9.length,a7);for(var ba=bb;ba<a7;ba++){a8+=String.fromCharCode(a9[ba])
        }return a8}function ae(ba,bc,a8){var a7=ba.length;if(!bc||bc<0){bc=0}if(!a8||a8<0||a8>a7){a8=a7
    }var a9="";for(var bb=bc;bb<a8;bb++){a9+=aB(ba[bb])}return a9}function al(a9,bc,a8){var a7=a9.slice(bc,a8);
        var bb="";for(var ba=0;ba<a7.length;ba+=2){bb+=String.fromCharCode(a7[ba]+a7[ba+1]*256)
        }return bb}aG.prototype.slice=function B(bc,a8){var a7=this.length;bc=~~bc;a8=a8===undefined?a7:~~a8;
        if(bc<0){bc+=a7;if(bc<0){bc=0}}else{if(bc>a7){bc=a7}}if(a8<0){a8+=a7;if(a8<0){a8=0
        }}else{if(a8>a7){a8=a7}}if(a8<bc){a8=bc}var bb;if(aG.TYPED_ARRAY_SUPPORT){bb=aG._augment(this.subarray(bc,a8))
        }else{var ba=a8-bc;bb=new aG(ba,undefined);for(var a9=0;a9<ba;a9++){bb[a9]=this[a9+bc]
        }}if(bb.length){bb.parent=this.parent||this}return bb};function au(a9,a7,a8){if((a9%1)!==0||a9<0){throw new RangeError("offset is not uint")
    }if(a9+a7>a8){throw new RangeError("Trying to access beyond buffer length")}}aG.prototype.readUIntLE=function k(bc,a7,ba){bc=bc|0;
        a7=a7|0;if(!ba){au(bc,a7,this.length)}var bb=this[bc];var a9=1;var a8=0;while(++a8<a7&&(a9*=256)){bb+=this[bc+a8]*a9
        }return bb};aG.prototype.readUIntBE=function aC(bb,a7,a9){bb=bb|0;a7=a7|0;if(!a9){au(bb,a7,this.length)
    }var ba=this[bb+ --a7];var a8=1;while(a7>0&&(a8*=256)){ba+=this[bb+ --a7]*a8}return ba
    };aG.prototype.readUInt8=function o(a8,a7){if(!a7){au(a8,1,this.length)}return this[a8]
    };aG.prototype.readUInt16LE=function r(a8,a7){if(!a7){au(a8,2,this.length)}return this[a8]|(this[a8+1]<<8)
    };aG.prototype.readUInt16BE=function aN(a8,a7){if(!a7){au(a8,2,this.length)}return(this[a8]<<8)|this[a8+1]
    };aG.prototype.readUInt32LE=function O(a8,a7){if(!a7){au(a8,4,this.length)}return((this[a8])|(this[a8+1]<<8)|(this[a8+2]<<16))+(this[a8+3]*16777216)
    };aG.prototype.readUInt32BE=function a6(a8,a7){if(!a7){au(a8,4,this.length)}return(this[a8]*16777216)+((this[a8+1]<<16)|(this[a8+2]<<8)|this[a8+3])
    };aG.prototype.readIntLE=function an(bc,a7,ba){bc=bc|0;a7=a7|0;if(!ba){au(bc,a7,this.length)
    }var bb=this[bc];var a9=1;var a8=0;while(++a8<a7&&(a9*=256)){bb+=this[bc+a8]*a9
    }a9*=128;if(bb>=a9){bb-=Math.pow(2,8*a7)}return bb};aG.prototype.readIntBE=function C(bc,a7,ba){bc=bc|0;
        a7=a7|0;if(!ba){au(bc,a7,this.length)}var a8=a7;var a9=1;var bb=this[bc+ --a8];
        while(a8>0&&(a9*=256)){bb+=this[bc+ --a8]*a9}a9*=128;if(bb>=a9){bb-=Math.pow(2,8*a7)
        }return bb};aG.prototype.readInt8=function aO(a8,a7){if(!a7){au(a8,1,this.length)
    }if(!(this[a8]&128)){return(this[a8])}return((255-this[a8]+1)*-1)};aG.prototype.readInt16LE=function ay(a9,a7){if(!a7){au(a9,2,this.length)
    }var a8=this[a9]|(this[a9+1]<<8);return(a8&32768)?a8|4294901760:a8};aG.prototype.readInt16BE=function L(a9,a7){if(!a7){au(a9,2,this.length)
    }var a8=this[a9+1]|(this[a9]<<8);return(a8&32768)?a8|4294901760:a8};aG.prototype.readInt32LE=function aY(a8,a7){if(!a7){au(a8,4,this.length)
    }return(this[a8])|(this[a8+1]<<8)|(this[a8+2]<<16)|(this[a8+3]<<24)};aG.prototype.readInt32BE=function ad(a8,a7){if(!a7){au(a8,4,this.length)
    }return(this[a8]<<24)|(this[a8+1]<<16)|(this[a8+2]<<8)|(this[a8+3])};aG.prototype.readFloatLE=function n(a8,a7){if(!a7){au(a8,4,this.length)
    }return g.read(this,a8,true,23,4)};aG.prototype.readFloatBE=function aH(a8,a7){if(!a7){au(a8,4,this.length)
    }return g.read(this,a8,false,23,4)};aG.prototype.readDoubleLE=function d(a8,a7){if(!a7){au(a8,8,this.length)
    }return g.read(this,a8,true,52,8)};aG.prototype.readDoubleBE=function ao(a8,a7){if(!a7){au(a8,8,this.length)
    }return g.read(this,a8,false,52,8)};function aQ(a8,bb,bc,ba,a7,a9){if(!aG.isBuffer(a8)){throw new TypeError("buffer must be a Buffer instance")
    }if(bb>a7||bb<a9){throw new RangeError("value is out of bounds")}if(bc+ba>a8.length){throw new RangeError("index out of range")
    }}aG.prototype.writeUIntLE=function aq(a9,bc,a7,bb){a9=+a9;bc=bc|0;a7=a7|0;if(!bb){aQ(this,a9,bc,a7,Math.pow(2,8*a7),0)
    }var ba=1;var a8=0;this[bc]=a9&255;while(++a8<a7&&(ba*=256)){this[bc+a8]=(a9/ba)&255
    }return bc+a7};aG.prototype.writeUIntBE=function H(a9,bc,a7,bb){a9=+a9;bc=bc|0;
        a7=a7|0;if(!bb){aQ(this,a9,bc,a7,Math.pow(2,8*a7),0)}var a8=a7-1;var ba=1;this[bc+a8]=a9&255;
        while(--a8>=0&&(ba*=256)){this[bc+a8]=(a9/ba)&255}return bc+a7};aG.prototype.writeUInt8=function aD(a7,a9,a8){a7=+a7;
        a9=a9|0;if(!a8){aQ(this,a7,a9,1,255,0)}if(!aG.TYPED_ARRAY_SUPPORT){a7=Math.floor(a7)
        }this[a9]=(a7&255);return a9+1};function aA(a8,ba,bc,bb){if(ba<0){ba=65535+ba+1
    }for(var a9=0,a7=Math.min(a8.length-bc,2);a9<a7;a9++){a8[bc+a9]=(ba&(255<<(8*(bb?a9:1-a9))))>>>(bb?a9:1-a9)*8
    }}aG.prototype.writeUInt16LE=function ab(a7,a9,a8){a7=+a7;a9=a9|0;if(!a8){aQ(this,a7,a9,2,65535,0)
    }if(aG.TYPED_ARRAY_SUPPORT){this[a9]=(a7&255);this[a9+1]=(a7>>>8)}else{aA(this,a7,a9,true)
    }return a9+2};aG.prototype.writeUInt16BE=function i(a7,a9,a8){a7=+a7;a9=a9|0;if(!a8){aQ(this,a7,a9,2,65535,0)
    }if(aG.TYPED_ARRAY_SUPPORT){this[a9]=(a7>>>8);this[a9+1]=(a7&255)}else{aA(this,a7,a9,false)
    }return a9+2};function U(a8,ba,bc,bb){if(ba<0){ba=4294967295+ba+1}for(var a9=0,a7=Math.min(a8.length-bc,4);
                                                                          a9<a7;a9++){a8[bc+a9]=(ba>>>(bb?a9:3-a9)*8)&255}}aG.prototype.writeUInt32LE=function ap(a7,a9,a8){a7=+a7;
        a9=a9|0;if(!a8){aQ(this,a7,a9,4,4294967295,0)}if(aG.TYPED_ARRAY_SUPPORT){this[a9+3]=(a7>>>24);
            this[a9+2]=(a7>>>16);this[a9+1]=(a7>>>8);this[a9]=(a7&255)}else{U(this,a7,a9,true)
        }return a9+4};aG.prototype.writeUInt32BE=function F(a7,a9,a8){a7=+a7;a9=a9|0;if(!a8){aQ(this,a7,a9,4,4294967295,0)
    }if(aG.TYPED_ARRAY_SUPPORT){this[a9]=(a7>>>24);this[a9+1]=(a7>>>16);this[a9+2]=(a7>>>8);
        this[a9+3]=(a7&255)}else{U(this,a7,a9,false)}return a9+4};aG.prototype.writeIntLE=function w(bb,be,a8,bd){bb=+bb;
        be=be|0;if(!bd){var a7=Math.pow(2,8*a8-1);aQ(this,bb,be,a8,a7-1,-a7)}var a9=0;var bc=1;
        var ba=bb<0?1:0;this[be]=bb&255;while(++a9<a8&&(bc*=256)){this[be+a9]=((bb/bc)>>0)-ba&255
        }return be+a8};aG.prototype.writeIntBE=function aU(bb,be,a8,bd){bb=+bb;be=be|0;
        if(!bd){var a7=Math.pow(2,8*a8-1);aQ(this,bb,be,a8,a7-1,-a7)}var a9=a8-1;var bc=1;
        var ba=bb<0?1:0;this[be+a9]=bb&255;while(--a9>=0&&(bc*=256)){this[be+a9]=((bb/bc)>>0)-ba&255
        }return be+a8};aG.prototype.writeInt8=function aj(a7,a9,a8){a7=+a7;a9=a9|0;if(!a8){aQ(this,a7,a9,1,127,-128)
    }if(!aG.TYPED_ARRAY_SUPPORT){a7=Math.floor(a7)}if(a7<0){a7=255+a7+1}this[a9]=(a7&255);
        return a9+1};aG.prototype.writeInt16LE=function ak(a7,a9,a8){a7=+a7;a9=a9|0;if(!a8){aQ(this,a7,a9,2,32767,-32768)
    }if(aG.TYPED_ARRAY_SUPPORT){this[a9]=(a7&255);this[a9+1]=(a7>>>8)}else{aA(this,a7,a9,true)
    }return a9+2};aG.prototype.writeInt16BE=function A(a7,a9,a8){a7=+a7;a9=a9|0;if(!a8){aQ(this,a7,a9,2,32767,-32768)
    }if(aG.TYPED_ARRAY_SUPPORT){this[a9]=(a7>>>8);this[a9+1]=(a7&255)}else{aA(this,a7,a9,false)
    }return a9+2};aG.prototype.writeInt32LE=function aJ(a7,a9,a8){a7=+a7;a9=a9|0;if(!a8){aQ(this,a7,a9,4,2147483647,-2147483648)
    }if(aG.TYPED_ARRAY_SUPPORT){this[a9]=(a7&255);this[a9+1]=(a7>>>8);this[a9+2]=(a7>>>16);
        this[a9+3]=(a7>>>24)}else{U(this,a7,a9,true)}return a9+4};aG.prototype.writeInt32BE=function T(a7,a9,a8){a7=+a7;
        a9=a9|0;if(!a8){aQ(this,a7,a9,4,2147483647,-2147483648)}if(a7<0){a7=4294967295+a7+1
        }if(aG.TYPED_ARRAY_SUPPORT){this[a9]=(a7>>>24);this[a9+1]=(a7>>>16);this[a9+2]=(a7>>>8);
            this[a9+3]=(a7&255)}else{U(this,a7,a9,false)}return a9+4};function S(a8,bb,bc,ba,a7,a9){if(bb>a7||bb<a9){throw new RangeError("value is out of bounds")
    }if(bc+ba>a8.length){throw new RangeError("index out of range")}if(bc<0){throw new RangeError("index out of range")
    }}function z(a7,a8,bb,ba,a9){if(!a9){S(a7,a8,bb,4,3.4028234663852886e+38,-3.4028234663852886e+38)
    }g.write(a7,a8,bb,ba,23,4);return bb+4}aG.prototype.writeFloatLE=function p(a7,a9,a8){return z(this,a7,a9,true,a8)
    };aG.prototype.writeFloatBE=function aL(a7,a9,a8){return z(this,a7,a9,false,a8)
    };function u(a7,a8,bb,ba,a9){if(!a9){S(a7,a8,bb,8,1.7976931348623157e+308,-1.7976931348623157e+308)
    }g.write(a7,a8,bb,ba,52,8);return bb+8}aG.prototype.writeDoubleLE=function I(a7,a9,a8){return u(this,a7,a9,true,a8)
    };aG.prototype.writeDoubleBE=function a2(a7,a9,a8){return u(this,a7,a9,false,a8)
    };aG.prototype.copy=function G(ba,bb,bc,a8){if(!bc){bc=0}if(!a8&&a8!==0){a8=this.length
    }if(bb>=ba.length){bb=ba.length}if(!bb){bb=0}if(a8>0&&a8<bc){a8=bc}if(a8===bc){return 0
    }if(ba.length===0||this.length===0){return 0}if(bb<0){throw new RangeError("targetStart out of bounds")
    }if(bc<0||bc>=this.length){throw new RangeError("sourceStart out of bounds")}if(a8<0){throw new RangeError("sourceEnd out of bounds")
    }if(a8>this.length){a8=this.length}if(ba.length-bb<a8-bc){a8=ba.length-bb+bc}var a7=a8-bc;
        var a9;if(this===ba&&bc<bb&&bb<a8){for(a9=a7-1;a9>=0;a9--){ba[a9+bb]=this[a9+bc]
        }}else{if(a7<1000||!aG.TYPED_ARRAY_SUPPORT){for(a9=0;a9<a7;a9++){ba[a9+bb]=this[a9+bc]
        }}else{ba._set(this.subarray(bc,bc+a7),bb)}}return a7};aG.prototype.fill=function D(bb,bc,a9){if(!bb){bb=0
    }if(!bc){bc=0}if(!a9){a9=this.length}if(a9<bc){throw new RangeError("end < start")
    }if(a9===bc){return}if(this.length===0){return}if(bc<0||bc>=this.length){throw new RangeError("start out of bounds")
    }if(a9<0||a9>this.length){throw new RangeError("end out of bounds")}var ba;if(typeof bb==="number"){for(ba=bc;
                                                                                                            ba<a9;ba++){this[ba]=bb}}else{var a8=aW(bb.toString());var a7=a8.length;for(ba=bc;
                                                                                                                                                                                        ba<a9;ba++){this[ba]=a8[ba%a7]}}return this};aG.prototype.toArrayBuffer=function M(){if(typeof Uint8Array!=="undefined"){if(aG.TYPED_ARRAY_SUPPORT){return(new aG(this)).buffer
    }else{var a8=new Uint8Array(this.length);for(var a9=0,a7=a8.length;a9<a7;a9+=1){a8[a9]=this[a9]
    }return a8.buffer}}else{throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
    }};var aV=aG.prototype;aG._augment=function j(a7){a7.constructor=aG;a7._isBuffer=true;
        a7._set=a7.set;a7.get=aV.get;a7.set=aV.set;a7.write=aV.write;a7.toString=aV.toString;
        a7.toLocaleString=aV.toString;a7.toJSON=aV.toJSON;a7.equals=aV.equals;a7.compare=aV.compare;
        a7.indexOf=aV.indexOf;a7.copy=aV.copy;a7.slice=aV.slice;a7.readUIntLE=aV.readUIntLE;
        a7.readUIntBE=aV.readUIntBE;a7.readUInt8=aV.readUInt8;a7.readUInt16LE=aV.readUInt16LE;
        a7.readUInt16BE=aV.readUInt16BE;a7.readUInt32LE=aV.readUInt32LE;a7.readUInt32BE=aV.readUInt32BE;
        a7.readIntLE=aV.readIntLE;a7.readIntBE=aV.readIntBE;a7.readInt8=aV.readInt8;a7.readInt16LE=aV.readInt16LE;
        a7.readInt16BE=aV.readInt16BE;a7.readInt32LE=aV.readInt32LE;a7.readInt32BE=aV.readInt32BE;
        a7.readFloatLE=aV.readFloatLE;a7.readFloatBE=aV.readFloatBE;a7.readDoubleLE=aV.readDoubleLE;
        a7.readDoubleBE=aV.readDoubleBE;a7.writeUInt8=aV.writeUInt8;a7.writeUIntLE=aV.writeUIntLE;
        a7.writeUIntBE=aV.writeUIntBE;a7.writeUInt16LE=aV.writeUInt16LE;a7.writeUInt16BE=aV.writeUInt16BE;
        a7.writeUInt32LE=aV.writeUInt32LE;a7.writeUInt32BE=aV.writeUInt32BE;a7.writeIntLE=aV.writeIntLE;
        a7.writeIntBE=aV.writeIntBE;a7.writeInt8=aV.writeInt8;a7.writeInt16LE=aV.writeInt16LE;
        a7.writeInt16BE=aV.writeInt16BE;a7.writeInt32LE=aV.writeInt32LE;a7.writeInt32BE=aV.writeInt32BE;
        a7.writeFloatLE=aV.writeFloatLE;a7.writeFloatBE=aV.writeFloatBE;a7.writeDoubleLE=aV.writeDoubleLE;
        a7.writeDoubleBE=aV.writeDoubleBE;a7.fill=aV.fill;a7.inspect=aV.inspect;a7.toArrayBuffer=aV.toArrayBuffer;
        return a7};var aF=/[^+\/0-9A-Za-z-_]/g;function q(a7){a7=t(a7).replace(aF,"");if(a7.length<2){return""
    }while(a7.length%4!==0){a7=a7+"="}return a7}function t(a7){if(a7.trim){return a7.trim()
    }return a7.replace(/^\s+|\s+$/g,"")}function aB(a7){if(a7<16){return"0"+a7.toString(16)
    }return a7.toString(16)}function aW(ba,a8){a8=a8||Infinity;var a9;var bd=ba.length;
        var bc=null;var a7=[];for(var bb=0;bb<bd;bb++){a9=ba.charCodeAt(bb);if(a9>55295&&a9<57344){if(!bc){if(a9>56319){if((a8-=3)>-1){a7.push(239,191,189)
        }continue}else{if(bb+1===bd){if((a8-=3)>-1){a7.push(239,191,189)}continue}}bc=a9;
            continue}if(a9<56320){if((a8-=3)>-1){a7.push(239,191,189)}bc=a9;continue}a9=(bc-55296<<10|a9-56320)+65536
        }else{if(bc){if((a8-=3)>-1){a7.push(239,191,189)}}}bc=null;if(a9<128){if((a8-=1)<0){break
        }a7.push(a9)}else{if(a9<2048){if((a8-=2)<0){break}a7.push(a9>>6|192,a9&63|128)}else{if(a9<65536){if((a8-=3)<0){break
        }a7.push(a9>>12|224,a9>>6&63|128,a9&63|128)}else{if(a9<1114112){if((a8-=4)<0){break
        }a7.push(a9>>18|240,a9>>12&63|128,a9>>6&63|128,a9&63|128)}else{throw new Error("Invalid code point")
        }}}}}return a7}function ai(a9){var a7=[];for(var a8=0;a8<a9.length;a8++){a7.push(a9.charCodeAt(a8)&255)
    }return a7}function av(bc,a8){var bd,a9,bb;var a7=[];for(var ba=0;ba<bc.length;
                                                             ba++){if((a8-=2)<0){break}bd=bc.charCodeAt(ba);a9=bd>>8;bb=bd%256;a7.push(bb);a7.push(a9)
    }return a7}function ah(a7){return aI.toByteArray(q(a7))}function Y(ba,bb,a9,a8){for(var a7=0;
                                                                                        a7<a8;a7++){if((a7+a9>=bb.length)||(a7>=ba.length)){break}bb[a7+a9]=ba[a7]}return a7
    }}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"base64-js":541,ieee754:542,isarray:543}],541:[function(b,c,a){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    (function(k){var n=(typeof Uint8Array!=="undefined")?Uint8Array:Array;var m="+".charCodeAt(0);
        var g="/".charCodeAt(0);var j="0".charCodeAt(0);var h="a".charCodeAt(0);var o="A".charCodeAt(0);
        var q="-".charCodeAt(0);var i="_".charCodeAt(0);function f(r){var s=r.charCodeAt(0);
            if(s===m||s===q){return 62}if(s===g||s===i){return 63}if(s<j){return -1}if(s<j+10){return s-j+26+26
            }if(s<o+26){return s-o}if(s<h+26){return s-h+26}}function l(r){var v,u,s,w,t,x;
            if(r.length%4>0){throw new Error("Invalid string. Length must be a multiple of 4")
            }var y=r.length;t="="===r.charAt(y-2)?2:"="===r.charAt(y-1)?1:0;x=new n(r.length*3/4-t);
            s=t>0?r.length-4:r.length;var A=0;function z(B){x[A++]=B}for(v=0,u=0;v<s;v+=4,u+=3){w=(f(r.charAt(v))<<18)|(f(r.charAt(v+1))<<12)|(f(r.charAt(v+2))<<6)|f(r.charAt(v+3));
                z((w&16711680)>>16);z((w&65280)>>8);z(w&255)}if(t===2){w=(f(r.charAt(v))<<2)|(f(r.charAt(v+1))>>4);
                z(w&255)}else{if(t===1){w=(f(r.charAt(v))<<10)|(f(r.charAt(v+1))<<4)|(f(r.charAt(v+2))>>2);
                z((w>>8)&255);z(w&255)}}return x}function p(r){var v,u=r.length%3,t="",s,x;function w(z){return d.charAt(z)
        }function y(z){return w(z>>18&63)+w(z>>12&63)+w(z>>6&63)+w(z&63)}for(v=0,x=r.length-u;
                                                                             v<x;v+=3){s=(r[v]<<16)+(r[v+1]<<8)+(r[v+2]);t+=y(s)}switch(u){case 1:s=r[r.length-1];
            t+=w(s>>2);t+=w((s<<4)&63);t+="==";break;case 2:s=(r[r.length-2]<<8)+(r[r.length-1]);
            t+=w(s>>10);t+=w((s>>4)&63);t+=w((s<<2)&63);t+="=";break}return t}k.toByteArray=l;
        k.fromByteArray=p}(typeof a==="undefined"?(this.base64js={}):a))},{}],542:[function(b,c,a){a.read=function(n,l,h,g,q){var r,k;
    var j=q*8-g-1;var p=(1<<j)-1;var f=p>>1;var u=-7;var o=h?(q-1):0;var t=h?-1:1;var v=n[l+o];
    o+=t;r=v&((1<<(-u))-1);v>>=(-u);u+=j;for(;u>0;r=r*256+n[l+o],o+=t,u-=8){}k=r&((1<<(-u))-1);
    r>>=(-u);u+=g;for(;u>0;k=k*256+n[l+o],o+=t,u-=8){}if(r===0){r=1-f}else{if(r===p){return k?NaN:((v?-1:1)*Infinity)
    }else{k=k+Math.pow(2,g);r=r-f}}return(v?-1:1)*k*Math.pow(2,r-g)};a.write=function(o,w,n,h,g,r){var t,k,v;
    var j=r*8-g-1;var q=(1<<j)-1;var f=q>>1;var l=(g===23?Math.pow(2,-24)-Math.pow(2,-77):0);
    var p=h?0:(r-1);var u=h?1:-1;var x=w<0||(w===0&&1/w<0)?1:0;w=Math.abs(w);if(isNaN(w)||w===Infinity){k=isNaN(w)?1:0;
        t=q}else{t=Math.floor(Math.log(w)/Math.LN2);if(w*(v=Math.pow(2,-t))<1){t--;v*=2
    }if(t+f>=1){w+=l/v}else{w+=l*Math.pow(2,1-f)}if(w*v>=2){t++;v/=2}if(t+f>=q){k=0;
        t=q}else{if(t+f>=1){k=(w*v-1)*Math.pow(2,g);t=t+f}else{k=w*Math.pow(2,f-1)*Math.pow(2,g);
        t=0}}}for(;g>=8;o[n+p]=k&255,p+=u,k/=256,g-=8){}t=(t<<g)|k;j+=g;for(;j>0;o[n+p]=t&255,p+=u,t/=256,j-=8){}o[n+p-u]|=x*128
}},{}],543:[function(b,c,a){var d={}.toString;c.exports=Array.isArray||function(f){return d.call(f)=="[object Array]"
    }},{}],544:[function(g,a,s){var j=a.exports={};var k;var m;function h(){throw new Error("setTimeout has not been defined")
}function q(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){k=setTimeout
}else{k=h}}catch(t){k=h}try{if(typeof clearTimeout==="function"){m=clearTimeout
}else{m=q}}catch(t){m=q}}());function f(t){if(k===setTimeout){return setTimeout(t,0)
}if((k===h||!k)&&setTimeout){k=setTimeout;return setTimeout(t,0)}try{return k(t,0)
}catch(u){try{return k.call(null,t,0)}catch(u){return k.call(this,t,0)}}}function d(t){if(m===clearTimeout){return clearTimeout(t)
}if((m===q||!m)&&clearTimeout){m=clearTimeout;return clearTimeout(t)}try{return m(t)
}catch(u){try{return m.call(null,t)}catch(u){return m.call(this,t)}}}var n=[];var r=false;
    var i;var o=-1;function l(){if(!r||!i){return}r=false;if(i.length){n=i.concat(n)
    }else{o=-1}if(n.length){p()}}function p(){if(r){return}var u=f(l);r=true;var t=n.length;
        while(t){i=n;n=[];while(++o<t){if(i){i[o].run()}}o=-1;t=n.length}i=null;r=false;
        d(u)}j.nextTick=function(t){var u=new Array(arguments.length-1);if(arguments.length>1){for(var v=1;
                                                                                                   v<arguments.length;v++){u[v-1]=arguments[v]}}n.push(new b(t,u));if(n.length===1&&!r){f(p)
    }};function b(t,u){this.fun=t;this.array=u}b.prototype.run=function(){this.fun.apply(null,this.array)
    };j.title="browser";j.browser=true;j.env={};j.argv=[];j.version="";j.versions={};
    function c(){}j.on=c;j.addListener=c;j.once=c;j.off=c;j.removeListener=c;j.removeAllListeners=c;
    j.emit=c;j.binding=function(t){throw new Error("process.binding is not supported")
    };j.cwd=function(){return"/"};j.chdir=function(t){throw new Error("process.chdir is not supported")
    };j.umask=function(){return 0}},{}],545:[function(c,b,d){var j="data-focus-method";
    var h="touch";var i="mouse";var a="key";function g(l,k){this._target=l||document.body;
        this._attr=k||j;this._focusMethod=this._lastFocusMethod=false;this._onKeyDown=this._onKeyDown.bind(this);
        this._onMouseDown=this._onMouseDown.bind(this);this._onTouchStart=this._onTouchStart.bind(this);
        this._onFocus=this._onFocus.bind(this);this._onBlur=this._onBlur.bind(this);this._onWindowBlur=this._onWindowBlur.bind(this);
        this._bindEvents()}var f=g.prototype;f._bindEvents=function(){if(this._target.addEventListener){this._target.addEventListener("keydown",this._onKeyDown);
        this._target.addEventListener("mousedown",this._onMouseDown);this._target.addEventListener("touchstart",this._onTouchStart);
        this._target.addEventListener("focus",this._onFocus,true);this._target.addEventListener("blur",this._onBlur,true);
        window.addEventListener("blur",this._onWindowBlur)}};f._onKeyDown=function(k){this._focusMethod=a
    };f._onMouseDown=function(k){if(this._focusMethod===h){return}this._focusMethod=i
    };f._onTouchStart=function(k){this._focusMethod=h};f._onFocus=function(k){if(!this._focusMethod){this._focusMethod=this._lastFocusMethod
    }k.target.setAttribute(this._attr,this._focusMethod);this._lastFocusMethod=this._focusMethod;
        this._focusMethod=false};f._onBlur=function(k){k.target.removeAttribute(this._attr)
    };f._onWindowBlur=function(k){this._focusMethod=false};b.exports=g},{}],546:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{dup:24}],547:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],548:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":549,dup:46}],549:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],550:[function(b,c,a){arguments[4][88][0].apply(a,arguments)},{dup:88}],551:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/KeyEvent":553,"@marcom/ac-dom-events/utils/addEventListener":546,"@marcom/ac-dom-events/utils/removeEventListener":547,"@marcom/ac-event-emitter-micro":548,"@marcom/ac-object/create":550,dup:54}],552:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{"./Keyboard":551,dup:55}],553:[function(b,c,a){arguments[4][56][0].apply(a,arguments)
},{dup:56}],554:[function(b,c,a){arguments[4][57][0].apply(a,arguments)},{dup:57}],555:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":556,dup:46}],556:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],557:[function(b,c,a){arguments[4][88][0].apply(a,arguments)},{dup:88}],558:[function(b,c,a){c.exports={PageVisibilityManager:b("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":559}],559:[function(c,f,b){var d=c("@marcom/ac-object/create");
    var h=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;function a(){if(typeof document.addEventListener==="undefined"){return
    }var i;if(typeof document.hidden!=="undefined"){this._hidden="hidden";i="visibilitychange"
    }else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";i="mozvisibilitychange"
    }else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";i="msvisibilitychange"
    }else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
        i="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
    }else{this.isHidden=document[this._hidden]}if(i){document.addEventListener(i,this._handleVisibilityChange.bind(this),false)
    }h.call(this)}var g=a.prototype=d(h.prototype);g.CHANGED="changed";g._handleVisibilityChange=function(i){this.isHidden=document[this._hidden];
        this.trigger(this.CHANGED,{isHidden:this.isHidden})};f.exports=new a()},{"@marcom/ac-event-emitter-micro":555,"@marcom/ac-object/create":557}],560:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
    var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
    }for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],561:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
    var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
    }for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],562:[function(d,f,b){var g=d("./ac-browser/BrowserData");var a=/applewebkit/i;
    var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
        return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
    if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":563,"./ac-browser/IE":564}],563:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.filter");
    b("@marcom/ac-polyfills/Array/prototype.some");var d=b("./data");function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;
        if(!h||!i){return}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
            var l=h.indexOf(k);if(l>-1){g=parseFloat(h.substring(l+k.length+1));return true
            }});return g},__getName:function(g){return this.__getIdentityStringFromArray(g)
    },__getIdentity:function(g){if(g.string){return this.__matchSubString(g)}else{if(g.prop){return g.identity
    }}},__getIdentityStringFromArray:function(g){for(var k=0,h=g.length,j;k<h;k++){j=this.__getIdentity(g[k]);
        if(j){return j}}},__getOS:function(g){return this.__getIdentityStringFromArray(g)
    },__getOSVersion:function(i,l){if(!i||!l){return}var k=d.os.filter(function(m){return m.identity===l
    })[0];var g=k.versionSearch||l;var j=new RegExp(g+" ([\\d_\\.]+)","i");var h=i.match(j);
        if(h!==null){return h[1].replace(/_/g,".")}},__matchSubString:function(h){var g=h.subString;
        if(g){var i=g.test?!!g.test(h.string):h.string.indexOf(g)>-1;if(i){return h.identity
        }}}};f.create=function(){var g=new f();var h={};h.name=g.__getName(d.browser);h.version=g.__getBrowserVersion(d.versionString,h.name);
        h.os=g.__getOS(d.os);h.osVersion=g.__getOSVersion(d.versionString,h.os);return h
    };c.exports=f},{"./data":565,"@marcom/ac-polyfills/Array/prototype.filter":560,"@marcom/ac-polyfills/Array/prototype.some":561}],564:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
    if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
    }}}return d}}},{}],565:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],566:[function(b,c,a){arguments[4][10][0].apply(a,arguments)},{"./shared/getEventType":577,"./utils/addEventListener":581,dup:10}],567:[function(b,c,a){arguments[4][11][0].apply(a,arguments)
},{"./shared/getEventType":577,"./utils/dispatchEvent":582,dup:11}],568:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{"./addEventListener":566,"./dispatchEvent":567,"./preventDefault":575,"./removeEventListener":576,"./stop":578,"./stopPropagation":579,"./target":580,dup:12}],569:[function(b,c,a){arguments[4][284][0].apply(a,arguments)
},{dup:284}],570:[function(b,c,a){arguments[4][13][0].apply(a,arguments)},{"./shared/camelCasedEventTypes":571,"./shared/prefixHelper":572,"./shared/windowFallbackEventTypes":573,"./utils/eventTypeAvailable":574,dup:13}],571:[function(b,c,a){arguments[4][14][0].apply(a,arguments)
},{dup:14}],572:[function(b,c,a){arguments[4][15][0].apply(a,arguments)},{dup:15}],573:[function(b,c,a){arguments[4][16][0].apply(a,arguments)
},{dup:16}],574:[function(b,c,a){arguments[4][17][0].apply(a,arguments)},{dup:17}],575:[function(b,c,a){arguments[4][18][0].apply(a,arguments)
},{dup:18}],576:[function(b,c,a){arguments[4][19][0].apply(a,arguments)},{"./shared/getEventType":577,"./utils/removeEventListener":583,dup:19}],577:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getEventType":570,dup:20}],578:[function(b,c,a){arguments[4][21][0].apply(a,arguments)
},{"./preventDefault":575,"./stopPropagation":579,dup:21}],579:[function(b,c,a){arguments[4][22][0].apply(a,arguments)
},{dup:22}],580:[function(b,c,a){arguments[4][23][0].apply(a,arguments)},{dup:23}],581:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{dup:24}],582:[function(b,c,a){arguments[4][25][0].apply(a,arguments)},{"@marcom/ac-polyfills/CustomEvent":569,dup:25}],583:[function(b,c,a){arguments[4][26][0].apply(a,arguments)
},{dup:26}],584:[function(b,c,a){arguments[4][352][0].apply(a,arguments)},{"./getStyleProperty":585,"./getStyleValue":586,"./shared/stylePropertyCache":589,dup:352}],585:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./shared/getStyleTestElement":587,"./shared/prefixHelper":588,"./shared/stylePropertyCache":589,"./utils/toCSS":592,"./utils/toDOM":593,dup:353}],586:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./getStyleProperty":585,"./shared/prefixHelper":588,"./shared/stylePropertyCache":589,"./shared/styleValueAvailable":590,dup:354}],587:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],588:[function(b,c,a){arguments[4][15][0].apply(a,arguments)},{dup:15}],589:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{dup:357}],590:[function(b,c,a){arguments[4][358][0].apply(a,arguments)},{"./getStyleTestElement":587,"./stylePropertyCache":589,dup:358}],591:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{dup:359}],592:[function(b,c,a){arguments[4][360][0].apply(a,arguments)},{dup:360}],593:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{dup:361}],594:[function(b,c,a){arguments[4][500][0].apply(a,arguments)},{"./getStyle":595,"./setStyle":597,dup:500}],595:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":585,"@marcom/ac-prefixer/stripPrefixes":591,dup:362}],596:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{dup:363}],597:[function(b,c,a){arguments[4][364][0].apply(a,arguments)},{"./internal/normalizeValue":596,"@marcom/ac-prefixer/getStyleCSS":584,"@marcom/ac-prefixer/getStyleProperty":585,dup:364}],598:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":599,dup:46}],599:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],600:[function(b,c,a){arguments[4][88][0].apply(a,arguments)},{dup:88}],601:[function(b,c,a){c.exports={PointerTracker:b("./ac-pointer-tracker/PointerTracker")}
},{"./ac-pointer-tracker/PointerTracker":602}],602:[function(b,a,f){var n=b("@marcom/ac-browser");
    var l=b("@marcom/ac-dom-events");var k=b("@marcom/ac-dom-styles");var h=b("@marcom/ac-object/create");
    var c=n.os==="Android"||(n.name==="IE"&&n.version<=8);var j=b("@marcom/ac-feature/touchAvailable")();
    var m=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;function d(p,q,o){this._el=p;
        o=o||{};this._lockVertical=o.lockVertical!==false;this._swipeThreshold=o.swipeThreshold||d.DEFAULT_SWIPE_THRESHOLD;
        this._pointerEvents=q||{};this._pointerEvents.down=this._pointerEvents.down||((j)?d.TOUCH_EVENTS.down:d.MOUSE_EVENTS.down);
        this._pointerEvents.up=this._pointerEvents.up||((j)?d.TOUCH_EVENTS.up:d.MOUSE_EVENTS.up);
        this._pointerEvents.out=this._pointerEvents.out||((j)?d.TOUCH_EVENTS.out:d.MOUSE_EVENTS.out);
        this._pointerEvents.move=this._pointerEvents.move||((j)?d.TOUCH_EVENTS.move:d.MOUSE_EVENTS.move);
        this._onMouseDown=this._onMouseDown.bind(this);this._onMouseUp=this._onMouseUp.bind(this);
        this._onMouseOut=this._onMouseOut.bind(this);this._onMouseMove=this._onMouseMove.bind(this);
        m.call(this);l.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
        this._setCursorStyle("grab")}d.START="start";d.END="end";d.UPDATE="update";d.SWIPE_RIGHT="swiperight";
    d.SWIPE_LEFT="swipeleft";d.DEFAULT_SWIPE_THRESHOLD=(c)?2:8;d.TOUCH_EVENTS={down:"touchstart",up:"touchend",out:"mouseout",move:"touchmove"};
    d.MOUSE_EVENTS={down:"mousedown",up:"mouseup",out:"mouseout",move:"mousemove"};
    var i=m.prototype;var g=d.prototype=h(i);g.destroy=function(){if(this._isDragging){this._onMouseUp()
    }l.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);this._setCursorStyle(null);
        this._el=null;this._pointerEvents=null;this._lockVertical=null;this._swipeThreshold=null;
        this._checkForTouchScrollY=null;this._isDragging=null;this._currentX=null;this._currentY=null;
        this._velocityX=null;this._velocityY=null;this._lastX=null;this._lastY=null;return i.destroy.call(this)
    };g._onMouseDown=function(o){if(this._isDragging){return}this._isDragging=true;
        this._setCursorStyle("grabbing");l.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
        l.addEventListener(document.body,this._pointerEvents.up,this._onMouseUp);l.addEventListener(document,this._pointerEvents.out,this._onMouseOut);
        l.addEventListener(document.body,this._pointerEvents.move,this._onMouseMove);this._checkForTouchScrollY=this._lockVertical&&!!(o.touches&&o.touches[0]);
        if(this._checkForTouchScrollY){this._lastY=this._getTouchY(o)}var p=this._storeAndGetValues(o);
        this._velocityX=p.diffX=0;this._velocityY=p.diffY=0;this.trigger(d.START,p)};g._onMouseUp=function(o){if(!this._isDragging){return
    }this._isDragging=false;this._setCursorStyle("grab");l.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
        l.removeEventListener(document.body,this._pointerEvents.up,this._onMouseUp);l.removeEventListener(document,this._pointerEvents.out,this._onMouseOut);
        l.removeEventListener(document.body,this._pointerEvents.move,this._onMouseMove);
        var q;if(this._checkForTouchScrollY){q=null}else{if(this._velocityX>this._swipeThreshold){q=d.SWIPE_LEFT
        }else{if((this._velocityX*-1)>this._swipeThreshold){q=d.SWIPE_RIGHT}}}var p=this._storeAndGetValues(o);
        p.swipe=q;this.trigger(d.END,p);if(q){this.trigger(q,p)}};g._onMouseOut=function(o){o=(o)?o:window.event;
        var p=o.relatedTarget||o.toElement;if(!p||p.nodeName==="HTML"){this._onMouseUp(o)
        }};g._onMouseMove=function(o){if(this._checkForTouchScrollY&&this._isVerticalTouchMove(o)){this._onMouseUp(o);
        return}l.preventDefault(o);this.trigger(d.UPDATE,this._storeAndGetValues(o))};g._storeAndGetValues=function(o){if(o===undefined){return{}
    }this._currentX=this._getPointerX(o);this._currentY=this._getPointerY(o);this._velocityX=this._lastX-this._currentX;
        this._velocityY=this._lastY-this._currentY;var p={x:this._currentX,y:this._currentY,lastX:this._lastX,lastY:this._lastY,diffX:this._velocityX,diffY:this._velocityY,interactionEvent:o};
        this._lastX=this._currentX;this._lastY=this._currentY;return p};g._getPointerX=function(o){if(o.pageX){return o.pageX
    }else{if(o.touches&&o.touches[0]){return o.touches[0].pageX}else{if(o.clientX){return o.clientX
    }}}return 0};g._getPointerY=function(o){if(o.pageY){return o.pageY}else{if(o.touches&&o.touches[0]){return o.touches[0].pageY
    }else{if(o.clientY){return o.clientY}}}return 0};g._getTouchX=function(o){if(o.touches&&o.touches[0]){return o.touches[0].pageX
    }return 0};g._getTouchY=function(o){if(o.touches&&o.touches[0]){return o.touches[0].pageY
    }return 0};g._isVerticalTouchMove=function(p){var o=this._getTouchX(p);var s=this._getTouchY(p);
        var r=Math.abs(o-this._lastX);var q=Math.abs(s-this._lastY);this._checkForTouchScrollY=(r<q);
        return this._checkForTouchScrollY};g._setCursorStyle=function(o){k.setStyle(this._el,{cursor:o})
    };a.exports=d},{"@marcom/ac-browser":562,"@marcom/ac-dom-events":568,"@marcom/ac-dom-styles":594,"@marcom/ac-event-emitter-micro":598,"@marcom/ac-feature/touchAvailable":466,"@marcom/ac-object/create":600}],603:[function(b,c,a){arguments[4][8][0].apply(a,arguments)
},{"./ac-console/log":604,dup:8}],604:[function(b,c,a){arguments[4][9][0].apply(a,arguments)
},{dup:9}],605:[function(b,c,a){arguments[4][560][0].apply(a,arguments)},{dup:560}],606:[function(b,c,a){arguments[4][313][0].apply(a,arguments)
},{dup:313}],607:[function(b,c,a){arguments[4][280][0].apply(a,arguments)},{dup:280}],608:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{dup:27}],609:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],610:[function(b,c,a){arguments[4][29][0].apply(a,arguments)
},{dup:29}],611:[function(b,c,a){c.exports=10},{}],612:[function(b,c,a){arguments[4][30][0].apply(a,arguments)
},{dup:30}],613:[function(b,c,a){arguments[4][31][0].apply(a,arguments)},{dup:31}],614:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),indexOf:b("./indexOf"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":608,"./DOCUMENT_FRAGMENT_NODE":609,"./DOCUMENT_NODE":610,"./DOCUMENT_TYPE_NODE":611,"./ELEMENT_NODE":612,"./TEXT_NODE":613,"./createDocumentFragment":615,"./filterByNodeType":616,"./hasAttribute":617,"./indexOf":618,"./insertAfter":619,"./insertBefore":620,"./insertFirstChild":621,"./insertLastChild":622,"./isComment":625,"./isDocument":626,"./isDocumentFragment":627,"./isDocumentType":628,"./isElement":629,"./isNode":630,"./isNodeList":631,"./isTextNode":632,"./remove":633,"./replace":634}],615:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
    var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
    }}return f}},{}],616:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
    d("@marcom/ac-polyfills/Array/prototype.filter");var g=d("./internal/isNodeType");
    var a=d("./ELEMENT_NODE");f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);
        return i.filter(function(j){return g(j,h)})}},{"./ELEMENT_NODE":612,"./internal/isNodeType":623,"@marcom/ac-polyfills/Array/prototype.filter":605,"@marcom/ac-polyfills/Array/prototype.slice":607}],617:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],618:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.indexOf");
    c("@marcom/ac-polyfills/Array/prototype.slice");var g=c("./internal/validate");
    var a=c("./filterByNodeType");d.exports=function f(k,i){var h=k.parentNode;var j;
        if(!h){return 0}j=h.childNodes;if(i!==false){j=a(j,i)}else{j=Array.prototype.slice.call(j)
        }return j.indexOf(k)}},{"./filterByNodeType":616,"./internal/validate":624,"@marcom/ac-polyfills/Array/prototype.indexOf":606,"@marcom/ac-polyfills/Array/prototype.slice":607}],619:[function(b,c,a){var f=b("./internal/validate");
    c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
        f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
        }return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":624}],620:[function(c,d,a){var f=c("./internal/validate");
    d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
        f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":624}],621:[function(c,d,b){var f=c("./internal/validate");
    d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
        if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
    }},{"./internal/validate":624}],622:[function(b,c,a){arguments[4][128][0].apply(a,arguments)
},{"./internal/validate":624,dup:128}],623:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{"../isNode":630,dup:32}],624:[function(b,c,a){arguments[4][33][0].apply(a,arguments)
},{"../COMMENT_NODE":608,"../DOCUMENT_FRAGMENT_NODE":609,"../ELEMENT_NODE":612,"../TEXT_NODE":613,"./isNodeType":623,dup:33}],625:[function(c,d,a){var g=c("./internal/isNodeType");
    var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":608,"./internal/isNodeType":623}],626:[function(c,d,b){var g=c("./internal/isNodeType");
    var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":610,"./internal/isNodeType":623}],627:[function(b,c,a){arguments[4][34][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":609,"./internal/isNodeType":623,dup:34}],628:[function(b,c,a){var g=b("./internal/isNodeType");
    var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":611,"./internal/isNodeType":623}],629:[function(b,c,a){arguments[4][35][0].apply(a,arguments)
},{"./ELEMENT_NODE":612,"./internal/isNodeType":623,dup:35}],630:[function(b,c,a){arguments[4][36][0].apply(a,arguments)
},{dup:36}],631:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
    d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
    }if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
    }},{}],632:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
    d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":613,"./internal/isNodeType":623}],633:[function(b,c,a){arguments[4][37][0].apply(a,arguments)
},{"./internal/validate":624,dup:37}],634:[function(b,d,a){var f=b("./internal/validate");
    d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
        f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
    }},{"./internal/validate":624}],635:[function(b,c,a){arguments[4][378][0].apply(a,arguments)
},{dup:378}],636:[function(b,c,a){arguments[4][380][0].apply(a,arguments)},{dup:380}],637:[function(b,c,a){arguments[4][86][0].apply(a,arguments)
},{"./clone":638,"./create":639,"./defaults":640,"./extend":641,"./getPrototypeOf":642,"./isDate":643,"./isEmpty":644,"./isRegExp":645,"./toQueryParameters":646,dup:86}],638:[function(b,c,a){arguments[4][87][0].apply(a,arguments)
},{"./extend":641,"@marcom/ac-polyfills/Array/isArray":635,dup:87}],639:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{dup:88}],640:[function(b,c,a){arguments[4][89][0].apply(a,arguments)},{"./extend":641,dup:89}],641:[function(b,c,a){arguments[4][90][0].apply(a,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":636,dup:90}],642:[function(b,c,a){arguments[4][91][0].apply(a,arguments)
},{dup:91}],643:[function(b,c,a){arguments[4][92][0].apply(a,arguments)},{dup:92}],644:[function(b,c,a){arguments[4][93][0].apply(a,arguments)
},{dup:93}],645:[function(b,c,a){arguments[4][94][0].apply(a,arguments)},{dup:94}],646:[function(b,c,a){arguments[4][95][0].apply(a,arguments)
},{"@marcom/ac-url/joinSearchParams":660,dup:95}],647:[function(b,c,a){c.exports={adler32:b("./ac-checksum/adler32")}
},{"./ac-checksum/adler32":648}],648:[function(b,c,a){c.exports=function d(h){var f=65521;
    var k=1;var g=0;var l;var j;for(j=0;j<h.length;j+=1){l=h.charCodeAt(j);k=(k+l)%f;
        g=(g+k)%f}return(g<<16)|k}},{}],649:[function(d,g,a){var h="ac-storage-";var c=d("./ac-storage/Item");
    var i=d("./ac-storage/Storage");var b=d("./ac-storage/Storage/storageAvailable");
    var f=new i(h);f.Item=c;f.storageAvailable=b;g.exports=f},{"./ac-storage/Item":650,"./ac-storage/Storage":657,"./ac-storage/Storage/storageAvailable":659}],650:[function(d,b,j){var a=d("@marcom/ac-checksum").adler32;
    var i=d("@marcom/ac-object");var k=d("./Item/apis");var c=d("./Item/createExpirationDate");
    var l=d("./Item/encoder");var h=1000*60*60*24;var g=30;function f(m){if(!m||typeof m!=="string"){throw"ac-storage/Item: Key for Item must be a string"
    }this._key=m;this._checksum=null;this._expirationDate=null;this._metadata=null;
        this._value=null;this.setExpirationDate(f.createExpirationDate(g))}f.prototype={save:function(){var o;
        var n;var p;var m={};o=k.best(m);if(o){if(this.value()===null&&typeof o.removeItem==="function"){return o.removeItem(this.key())
        }else{if(typeof o.setItem==="function"){n=this.__state();p=l.encode(n);return o.setItem(this.key(),p,this.expirationDate())
        }}}return false},load:function(){var m;var n;m=k.best();if(m&&typeof m.getItem==="function"){n=m.getItem(this.key());
        this.__updateState(l.decode(n));if(n===null||this.hasExpired()){this.remove();return false
        }else{return true}}else{return false}},remove:function(){var m;this.__updateState(null);
        m=k.best();return m.removeItem(this.key())},hasExpired:function(m){if(((this.expirationDate()!==false)&&(this.expirationDate()<=Date.now()))||!this.__checksumIsValid(m)){return true
    }return false},value:function(m){if(this.hasExpired(m)){this.remove()}return this._value
    },setValue:function(m){this._value=m},setChecksum:function(m){if(m===null){this._checksum=m
    }else{if(typeof m==="string"&&m!==""){this._checksum=a(m)}else{throw"ac-storage/Item#setChecksum: Checksum must be null or a string"
    }}},checksum:function(){return this._checksum},setExpirationDate:function(m){if(m===null){m=f.createExpirationDate(g)
    }if(m!==false){if(typeof m==="string"){m=new Date(m).getTime()}if(m&&typeof m.getTime==="function"){m=m.getTime()
    }if(!m||isNaN(m)){throw"ac-storage/Item: Invalid date object provided as expirationDate"
    }m-=m%h;if(m<=Date.now()){m=false}}this._expirationDate=m},expirationDate:function(){return this._expirationDate
    },__state:function(){var m={};m.checksum=this.checksum();m.expirationDate=this.expirationDate();
        m.metadata=this.metadata();m.value=this.value();return m},__updateState:function(m){var o;
        var n;if(m===null){m={checksum:null,expirationDate:null,metadata:null,value:null}
        }for(o in m){n="set"+o.charAt(0).toUpperCase()+o.slice(1);if(typeof this[n]==="function"){this[n](m[o])
        }}},__checksumIsValid:function(m){if(m){m=a(m);if(!this.checksum()){throw"ac-storage/Item: No checksum exists to determine if this Itemâ€™s value is valid. Try loading context from persistent storage first."
    }else{if(m===this.checksum()){return true}}return false}else{if(this.checksum()){throw"ac-storage/Item: No checksum passed, but checksum exists in Itemâ€™s state."
    }}return true},setKey:function(){throw"ac-storage/Item: Cannot set key /after/ initialization!"
    },key:function(){return this._key},metadata:function(){return this._metadata},setMetadata:function(m){this._metadata=m
    }};f.createExpirationDate=c;b.exports=f},{"./Item/apis":651,"./Item/createExpirationDate":654,"./Item/encoder":655,"@marcom/ac-checksum":647,"@marcom/ac-object":637}],651:[function(d,g,b){var h=d("@marcom/ac-console").log;
    var c=d("./apis/localStorage");var a=d("./apis/userData");var f={_list:[c,a],list:function(){return this._list
    },all:function(k){h("ac-storage/Item/apis.all: Method is deprecated");var i=Array.prototype.slice.call(arguments,1);
        if(typeof k!=="string"){throw"ac-storage/Item/apis.all: Method name must be provided as a string"
        }var j=this.list().map(function(l){if(l.available()){if(typeof l[k]==="function"){return l[k].apply(l,i)
        }else{throw"ac-storage/Item/apis.all: Method not available on api"}}return false
        });return j},best:function(){var i=null;this.list().some(function(j){if(j.available()){i=j;
        return true}});return i}};g.exports=f},{"./apis/localStorage":652,"./apis/userData":653,"@marcom/ac-console":603}],652:[function(d,a,g){var c=d("@marcom/ac-feature");
    var b;try{var h=window.localStorage;var j=window.sessionStorage}catch(i){b=false
    }var f={name:"localStorage",available:function(){try{h.setItem("localStorage",1);
        h.removeItem("localStorage")}catch(k){b=false}if(b===undefined){b=c.localStorageAvailable()
    }return b},getItem:function(k){return h.getItem(k)||j.getItem(k)},setItem:function(l,m,k){if(k===false){j.setItem(l,m)
    }else{h.setItem(l,m)}return true},removeItem:function(k){h.removeItem(k);j.removeItem(k);
        return true}};a.exports=f},{"@marcom/ac-feature":446}],653:[function(d,f,c){var g=d("@marcom/ac-dom-nodes");
    var i=1000*60*60*24;var a="ac-storage";var h;var b={name:"userData",available:function(){if(h===undefined){h=false;
        if(document&&document.body){var j=this.element();if(g.isElement(j)&&j.addBehavior!==undefined){h=true
        }if(h===false){this.removeElement()}}else{throw"ac-storage/Item/apis/userData: DOM must be ready before using #userData."
        }}return h},getItem:function(j){var k=this.element();k.load(a);return k.getAttribute(j)||null
    },setItem:function(k,m,j){var l=this.element();l.setAttribute(k,m);if(j===false){j=new Date(Date.now()+i)
    }if(j&&typeof j.toUTCString==="function"){l.expires=j.toUTCString()}l.save(a);return true
    },removeItem:function(j){var k=this.element();k.removeAttribute(j);k.save(a);return true
    },_element:null,element:function(){if(this._element===null){this._element=document.createElement("meta");
        this._element.setAttribute("id","userData");this._element.setAttribute("name","ac-storage");
        this._element.style.behavior="url('#default#userData')";document.getElementsByTagName("head")[0].appendChild(this._element)
    }return this._element},removeElement:function(){if(this._element!==null){g.remove(this._element)
    }return this._element}};f.exports=b},{"@marcom/ac-dom-nodes":614}],654:[function(b,c,a){var f=1000*60*60*24;
    var d=function(h,g){if(typeof h!=="number"){throw"ac-storage/Item/createExpirationDate: days parameter must be a number."
    }if(g===undefined||typeof g==="number"){g=g===undefined?new Date():new Date(g)}if(typeof g.toUTCString!=="function"||g.toUTCString()==="Invalid Date"){throw"ac-storage/Item/createExpirationDate: fromDate must be a date object, timestamp, or undefined."
    }g.setTime(g.getTime()+(h*f));return g.getTime()};c.exports=d},{}],655:[function(b,c,a){var f=b("./encoder/compressor");
    var d={encode:function(i){var g;var h;h=f.compress(i);try{g=JSON.stringify(h)}catch(j){}if(!this.__isValidStateObjString(g)){throw"ac-storage/Item/encoder/encode: state object is invalid or cannot be saved as string"
    }return g},decode:function(g){var h;var i;if(!this.__isValidStateObjString(g)){if(g===undefined||g===null||g===""){return null
    }throw"ac-storage/Item/encoder/decode: state string does not contain a valid state object"
    }try{h=JSON.parse(g)}catch(j){throw"ac-storage/Item/encoder/decode: Item state object could not be decoded"
    }i=f.decompress(h);return i},__isValidStateObjString:function(g){try{if(g!==undefined&&g.substring(0,1)==="{"){return true
    }return false}catch(h){return false}}};c.exports=d},{"./encoder/compressor":656}],656:[function(b,c,a){var g=1000*60*60*24;
    var d=14975;var f={mapping:{key:"k",checksum:"c",expirationDate:"e",metadata:"m",value:"v"},compress:function(j){var h={};
        var i=f.mapping;for(var l in i){if(j.hasOwnProperty(l)&&j[l]){if(l==="expirationDate"){var k=this.millisecondsToOffsetDays(j[l]);
            h[i[l]]=k}else{h[i[l]]=j[l]}}}return h},decompress:function(h){var k={};var j=f.mapping;
        for(var l in j){if(h.hasOwnProperty(j[l])){if(l==="expirationDate"){var i=this.offsetDaysToMilliseconds(h[j[l]]);
            k[l]=i}else{k[l]=h[j[l]]}}}return k},millisecondsToOffsetDays:function(h){return Math.floor(h/g)-d
    },offsetDaysToMilliseconds:function(h){return(h+d)*g}};c.exports=f},{}],657:[function(g,h,d){var c=g("@marcom/ac-object");
    var f=g("./Item/apis/localStorage");var b=g("./Storage/registry");var a={};function i(k,j){this._namespace=k||"";
        this._options=c.extend(c.clone(a),j||{})}i.prototype={getItem:function(j){var k=this.__item(j);
        k.load();return k.value()},setItem:function(j,l){var k=this.__item(j);if(l===undefined){throw"ac-storage/Storage#setItem: Must provide value to set key to. Use #removeItem to remove."
    }k.setValue(l);return k.save()},removeItem:function(j){var k=this.__item(j);b.remove(k.key(),true);
        return k.save()},removeExpired:function(){var p;var n;if(f.available()){for(n=0;
                                                                                    n<window.localStorage.length;n++){p=this.__item(window.localStorage.key(n));if(p.hasExpired()&&JSON.parse(window.localStorage[window.localStorage.key(n)]).v!=="undefined"){p.remove()
    }}}else{var l="ac-storage";var o=document.getElementById("userData");o.load(l);
        var k;var q=o.xmlDocument;var m=q.firstChild.attributes;var j=m.length;n=-1;while(++n<j){k=m[n];
            p=this.__item(k.nodeName);if(p.hasExpired()&&JSON.parse(k.nodeValue).v!=="undefined"){p.remove()
            }}}},__item:function(j){if(typeof j!=="string"||j===""){throw"ac-storage/Storage: Key must be a String."
    }var k=b.item(this.namespace()+j);return k},namespace:function(){return this._namespace
    },setNamespace:function(j){this._namespace=j},options:function(){return this._namespace
    },setOptions:function(j){this._namespace=j}};h.exports=i},{"./Item/apis/localStorage":652,"./Storage/registry":658,"@marcom/ac-object":637}],658:[function(f,g,c){var d=f("../Item");
    var b={};var a={item:function(h){var i=b[h];if(!i){i=this.register(h)}return i},register:function(h){var i=b[h];
        if(!i){i=new d(h);b[h]=i}return i},clear:function(i){var h;for(h in b){this.remove(h,i)
    }return true},remove:function(h,i){var j=b[h];if(j&&!!i){j.remove()}b[h]=null;return true
    }};g.exports=a},{"../Item":650}],659:[function(c,f,a){var d=c("../Item/apis");var g;
    f.exports=function b(){if(g!==undefined){return g}g=!!d.best();return g}},{"../Item/apis":651}],660:[function(b,c,a){arguments[4][81][0].apply(a,arguments)
},{dup:81,qs:661}],661:[function(b,c,a){arguments[4][82][0].apply(a,arguments)},{"./parse":662,"./stringify":663,dup:82}],662:[function(b,c,a){arguments[4][83][0].apply(a,arguments)
},{"./utils":664,dup:83}],663:[function(b,c,a){arguments[4][84][0].apply(a,arguments)
},{"./utils":664,dup:84}],664:[function(b,c,a){arguments[4][85][0].apply(a,arguments)
},{dup:85}],665:[function(c,d,b){var a=c("qs");d.exports=function f(g){g=g||window.location.search;
    g=g.replace(/^\?/,"");return a.parse(g,{strictNullHandling:true})}},{qs:661}],666:[function(c,d,b){var f=c("./parseSearchParams");
    d.exports=function a(g){var i;var h;if(!g){i=window.location}else{if(window.URL){i=new URL(g,window.location)
    }else{i=document.createElement("a");i.href=g;i.href=i.href}}return{hash:i.hash,host:i.host,hostname:i.hostname,href:i.href,origin:i.origin||i.protocol+"//"+i.host,pathname:i.pathname,port:i.port,protocol:i.protocol,search:i.search,searchParams:f(i.search)}
    }},{"./parseSearchParams":665}],667:[function(c,b,d){var j=c("@marcom/ac-console").log;
    var a=c("@marcom/ac-dom-traversal/querySelectorAll");var h=c("./PromoManager");
    var i=c("./PromoManager/selectors");function g(l,k){this._options=k||{};this._el=l;
        this._selectors=i;this.promoManagers={};this._initialize()}var f=g.prototype;f._setUpPromoManagersProp=function(){var l=this._selectors.manager.types.length;
        for(var k=0;k<l;k++){this.promoManagers[this._selectors.manager.types[k]]=[]}};
    f._initialize=function(){var l=a(this._selectors.manager.selector,this._el);var m=l.length;
        var n;this._setUpPromoManagersProp();for(var k=0;k<m;k++){n=l[k].getAttribute(this._selectors.manager.dataAttribute);
            if(this.promoManagers[n]){this.promoManagers[n].push(new h(l[k],this._options))
            }else{j(n+" is not a valid manager type.")}}};b.exports=g},{"./PromoManager":668,"./PromoManager/selectors":671,"@marcom/ac-console":603,"@marcom/ac-dom-traversal/querySelectorAll":320}],668:[function(c,b,f){var j=c("@marcom/ac-url/parseURL");
    var a=c("@marcom/ac-dom-traversal/querySelectorAll");var d=c("./PromoManager/History");
    var i=c("./PromoManager/Promo");var k=c("./PromoManager/selectors");function h(m,l){this._options=l;
        this._id=m.id;this._selectors=k;this._history=null;this._type=null;this.el=m;this.promos={all:null,current:null};
        this._removeManagerAttr=this._removeManagerAttr.bind(this);this._initialize()}var g=h.prototype;
    g.setCurrentPromo=function(l){this.promos.current=l;this._history.addValue(l.historyValue)
    };g._getManagerType=function(){var l=this.el.getAttribute(this._selectors.manager.dataAttribute);
        if(this._selectors.manager.types.indexOf(l)!==-1){return l}};g._createPromoArr=function(m){var p=a(this._selectors.promo.selector,m);
        var o=p.length-1;var n=[];var l;while(o>=0){l=new i(p[o]);l.index=o;n.unshift(l);
            o--}return n};g._getURLIdentifier=function(){var l=j().pathname;l=l.replace(/\/+/g,"/");
        l=l.substring(1,l.lastIndexOf("/")+1);l=l.replace(/\//g,"-");return l};g._assembleHistoryKey=function(n){var m=this._getURLIdentifier();
        var l=n.concat("-",this._type);return m.concat(l)};g._setupHistory=function(){var l=this.promos.all.length-1;
        var m=this._assembleHistoryKey(this._id);return new d(m,l,this._options)};g._getPromosNotInHistory=function(){var l=this._history.getValue();
        var m=function(n){return l.indexOf(n.historyValue)===-1};return this.promos.all.filter(m)
    };g._selectFirstPromo=function(){var m=this.promos.all.length;var n=this._getPromosNotInHistory();
        var o=n.length;var l;if(m>1&&o>0){l=n[0]}else{l=this.promos.all[0];if(o<1){this._history.resetValue()
        }}return l};g._removeHiddenPromos=function(){var l=this.promos.all.length-1;while(l>=0){if(this.promos.all[l].historyValue!==this.promos.current.historyValue){this.promos.all[l].remove()
    }l--}};g._reorderPromoArr=function(){var m=this.promos.all.splice(this.promos.current.index);
        var l;this.promos.all=m.concat(this.promos.all);l=this.promos.all.length-1;while(l>=0){this.promos.all[l].index=l;
            l--}};g._appendPromoArrToDom=function(){var l=document.createDocumentFragment();
        var o=this.promos.all.length;var m=0;var n;while(m<o){n=this.promos.all[m].el;l.appendChild(n);
            m++}this.el.appendChild(l)};g._removeManagerAttr=function(){this.el.removeAttribute(this._selectors.manager.dataAttribute)
    };g._initialize=function(){var l;this._type=this._getManagerType();this.promos.all=this._createPromoArr(this.el);
        this._history=this._setupHistory();l=this._selectFirstPromo();this.setCurrentPromo(l);
        if(this._type===this._selectors.manager.types[0]){this._removeHiddenPromos()}else{if(this._type===this._selectors.manager.types[1]){this._reorderPromoArr();
            this._appendPromoArrToDom()}else{throw new Error("PromoManager must be supplied with a valid manager type")
        }}window.requestAnimationFrame(this._removeManagerAttr)};b.exports=h},{"./PromoManager/History":669,"./PromoManager/Promo":670,"./PromoManager/selectors":671,"@marcom/ac-dom-traversal/querySelectorAll":320,"@marcom/ac-url/parseURL":666}],669:[function(d,b,h){var c=d("@marcom/ac-storage");
    var j=c.Item;var k=d("@marcom/ac-console").log;var g=d("@marcom/ac-object/defaults");
    var a={daysUntilExpires:null};function f(n,l,m){this._key=n;this._maxLen=l;this._options=g(a,m);
        this._item=null;this._initialize()}var i=f.prototype;i.getValue=function(){this._item.load();
        return this._item.value()||[]};i.addValue=function(m){var l=this.getValue();l.unshift(m);
        l=this._maxLenArrTrim(l);this._item.setValue(l);this._item.save()};i.resetValue=function(){this._item.setValue([]);
        this._item.save()};i._setHistoryExpiration=function(m){var l=this._options.daysUntilExpires;
        var n=m;if(l!==30&&l!==null){if(typeof l!=="number"){k("daysUntilExpires option must be a number.")
        }else{l=j.createExpirationDate(l);m.setExpirationDate(l)}}return n};i._createLocalStorageItem=function(){var l;
        l=new c.Item(this._key);l.load();if(!l.value()){l.setValue([]);l.save();l=this._setHistoryExpiration(l)
        }return l};i._maxLenArrTrim=function(l){var m=l;if(m.length>this._maxLen){m.pop()
    }return m};i._initialize=function(){this._item=this._createLocalStorageItem();this._item.save()
    };b.exports=f},{"@marcom/ac-console":603,"@marcom/ac-object/defaults":640,"@marcom/ac-storage":649}],670:[function(b,d,a){var f=b("@marcom/ac-dom-nodes/remove");
    var c=b("./selectors");function h(i){this.el=i;this.index=null;this.historyValue=this._getDataAttribPromoId()
    }var g=h.prototype;g.remove=function(){f(this.el)};g._getDataAttribPromoId=function(){var i=c.promo.dataAttribute;
        return this.el.getAttribute(i)};d.exports=h},{"./selectors":671,"@marcom/ac-dom-nodes/remove":633}],671:[function(b,d,a){function c(){this.dataAttributePrefix="data-promo-";
    this.promo={attribute:"id",dataAttribute:null,selector:null};this.manager={types:["show-hide","reorder"],attribute:"type",dataAttribute:null,selector:null};
    this._initialize()}var f=c.prototype;f._assembleDataAttribute=function(g){return this.dataAttributePrefix+g
};f._assembleDataAttribSelector=function(g){return"["+g+"]"};f._initialize=function(){this.promo.dataAttribute=this._assembleDataAttribute(this.promo.attribute);
    this.promo.selector=this._assembleDataAttribSelector(this.promo.dataAttribute);
    this.manager.dataAttribute=this._assembleDataAttribute(this.manager.attribute);
    this.manager.selector=this._assembleDataAttribSelector(this.manager.dataAttribute)
};d.exports=new c()},{}],672:[function(b,c,a){arguments[4][109][0].apply(a,arguments)
},{"./parseUserAgent":675,dup:109}],673:[function(b,c,a){arguments[4][110][0].apply(a,arguments)
},{dup:110}],674:[function(b,c,a){arguments[4][111][0].apply(a,arguments)},{dup:111}],675:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{"./defaults":673,"./dictionary":674,dup:112}],676:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{dup:24}],677:[function(b,c,a){arguments[4][46][0].apply(a,arguments)},{"./ac-event-emitter-micro/EventEmitterMicro":678,dup:46}],678:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],679:[function(b,c,a){arguments[4][381][0].apply(a,arguments)},{dup:381}],680:[function(b,c,a){if(!Object.create){var d=function(){};
    Object.create=function(f){if(arguments.length>1){throw new Error("Second argument not supported")
    }if(f===null||typeof f!=="object"){throw new TypeError("Object prototype may only be an Object.")
    }d.prototype=f;return new d()}}},{}],681:[function(b,c,a){if(!Object.keys){Object.keys=function d(g){var f=[];
    var h;if((!g)||(typeof g.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
    }for(h in g){if(g.hasOwnProperty(h)){f.push(h)}}return f}}},{}],682:[function(b,a,f){b("@marcom/ac-polyfills/Function/prototype.bind");
    b("@marcom/ac-polyfills/Object/keys");b("@marcom/ac-polyfills/Object/create");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var i=b("@marcom/ac-dom-events/utils/addEventListener");var h=b("@marcom/ac-feature/mediaQueriesAvailable");
    var c="viewport-emitter";var j="::before";var d="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
    function k(m){l.call(this);this._initializeElement(m);if(h()){this._updateViewport=this._updateViewport.bind(this);
        i(window,"resize",this._updateViewport);i(window,"orientationchange",this._updateViewport);
        this._retinaQuery=window.matchMedia(d);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
            this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var g=k.prototype=Object.create(l.prototype);
    g.viewport=false;g.retina=false;g._initializeElement=function(n){var m;n=n||c;m=document.getElementById(n);
        if(!m){m=document.createElement("div");m.id=n;m=document.body.appendChild(m)}this._el=m
    };g._getElementContent=function(){var m;if("currentStyle" in this._el){m=this._el.currentStyle["x-content"]
    }else{this._invalidateStyles();m=window.getComputedStyle(this._el,j).content}if(m){m=m.replace(/["']/g,"")
    }if(m){return m}return false};g._updateViewport=function(){var m=this.viewport;
        var n;var o;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
        }if(m&&this.viewport!==m){o={from:m,to:this.viewport};this.trigger("change",o);
            this.trigger("from:"+m,o);this.trigger("to:"+this.viewport,o)}};g._updateRetina=function(m){var n=this.retina;
        this.retina=this._retinaQuery.matches;if(n!==this.retina){this.trigger("retinachange",{from:n,to:this.retina})
        }};g._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?"Â ":" ";
        document.documentElement.clientWidth};a.exports=k},{"@marcom/ac-dom-events/utils/addEventListener":676,"@marcom/ac-event-emitter-micro":677,"@marcom/ac-feature/mediaQueriesAvailable":462,"@marcom/ac-polyfills/Function/prototype.bind":679,"@marcom/ac-polyfills/Object/create":680,"@marcom/ac-polyfills/Object/keys":681}],683:[function(c,d,b){var a=c("./ViewportEmitter");
    d.exports=new a()},{"./ViewportEmitter":682}],684:[function(b,c,a){c.exports={lerp:function(f,g,d){return g+(d-g)*f
},map:function(i,h,f,g,d){return this.lerp(this.norm(i,h,f),g,d)},mapClamp:function(i,h,f,g,d){var i=this.lerp(this.norm(i,h,f),g,d);
    return Math.max(g,Math.min(d,i))},norm:function(g,f,d){return(g-f)/(d-f)},clamp:function(g,f,d){return Math.max(f,Math.min(d,g))
},randFloat:function(f,d){return(Math.random()*(d-f))+f},randInt:function(f,d){return Math.floor((Math.random()*(d-f))+f)
}}},{}],685:[function(i,b,v){var n=i("@marcom/ac-gallery").Gallery;var p=i("@marcom/ac-gallery").SlideGallery;
    var f=i("@marcom/ac-dom-events").addEventListener;var r=i("@marcom/ac-feature/isTablet");
    var g=i("@marcom/ac-feature/touchAvailable");var s=i("./js/home/HomepageGallery/HomepageGallery");
    var q=i("./js/home/HomepageGallery/SlideScaleItem");var d=i("./js/home/HomepageGallery/createDashnav");
    var m=i("./js/home/HomepageGallery/setBackingLinks");var c=i("./js/home/Promos");
    var j=".gallery-slide-wrapper";var a="a.backing-link";var t="has-backing-link";
    var h="showing-first-slide";var u="showing-last-slide";var o="is-autoplaying";var l="is-interacting";
    var k=(function(){return{initialize:function(){this.initializePromos();if(document.documentElement.classList.contains("enhanced-gallery")){this.initializeGallery()
    }if(r&&g){f(window,"orientationchange",this._fixIosOverscrollOnRotation)}},initializeGallery:function(){var A=document.getElementById("promos")!=null;
        var z="homepage-gallery";var y=document.getElementById(z);var w=document.getElementById(z).classList.contains("infinite-gallery");
        var x={container:z,wrapAround:w,enableArrowKeys:true,touch:true,desktopSwipe:false,movementRateMultiplier:1.15,velocityMultiplier:8,autoPlay:3.5,promos:A};
        var B=y.querySelectorAll("[data-ac-gallery-item]").length;m(y);if(B>1){d(y);x.itemType=q;
            this.slideGallery=new s(y,x)}else{this.slideGallery=new p(y,x)}},initializePromos:function(){this.promos=new c();
        this.promos.initialize()},_fixIosOverscrollOnRotation:function(){var x=document.body.scrollTop;
        var w=document.body.offsetHeight-window.innerHeight+1;if(x>w){window.scrollTo(0,w)
        }}}}());b.exports=k},{"./js/home/HomepageGallery/HomepageGallery":687,"./js/home/HomepageGallery/SlideScaleItem":688,"./js/home/HomepageGallery/createDashnav":689,"./js/home/HomepageGallery/setBackingLinks":691,"./js/home/Promos":692,"@marcom/ac-dom-events":290,"@marcom/ac-feature/isTablet":459,"@marcom/ac-feature/touchAvailable":466,"@marcom/ac-gallery":521}],686:[function(b,d,a){var c={Gallery:{animationDuration:1,promoImageOffset:200},Item:{Incoming:{CopyXScaleFactor:-0.2},Outgoing:{CopyXScaleFactor:0.95}},updateConstants:function(f){switch(f){case"x-large":this.Gallery.promoImageOffset=200;
    case"large":this.Gallery.animationDuration=1;this.Gallery.promoImageOffset=100;
        break;case"medium":this.Gallery.animationDuration=0.8;this.Gallery.promoImageOffset=80;
        break;case"small":this.Gallery.animationDuration=0.4;this.Gallery.promoImageOffset=74;
        break;default:}}};d.exports=c},{}],687:[function(o,d,F){var w=o("@marcom/ac-gallery").Gallery;
    var t=o("@marcom/ac-gallery").AutoGallery;var b=t.prototype;var n=o("@marcom/ac-useragent").browser.edge;
    var k=o("@marcom/ac-headjs/FocusManager");var v=o("@marcom/ac-keyboard/keyMap");
    var j=o("@marcom/ac-pointer-tracker").PointerTracker;var z=o("@marcom/ac-page-visibility").PageVisibilityManager;
    var B=o("@marcom/sm-math-utils");var q=o("@marcom/ac-browser-prefixed");var c=o("@marcom/ac-eclipse").Clip;
    var l=o("@marcom/ac-dom-events").addEventListener;var i=o("@marcom/ac-viewport-emitter");
    var g=o("./Constants");var r=".gallery-slide-wrapper";var a="a.backing-link";var D="has-backing-link";
    var m="showing-first-slide";var E="showing-last-slide";var y="is-autoplaying";var s="is-interacting";
    var u=!(document.getElementsByTagName("html")[0].classList.contains("no-touch"));
    var h=!(document.getElementsByTagName("html")[0].classList.contains("no-android"));
    var p=u?"easeOutCubic":"easeInOutCubic";if(!Date.now){Date.now=function f(){return new Date().getTime()
    }}var C=function(H,G){this._lastReportedWidth=document.body.offsetWidth;t.apply(this,arguments);
        this._wrapAround=G.wrapAround;this.hasPromos=G.promos||false;this.movementRateMultiplier=G.movementRateMultiplier||2;
        this.positionX=0;this.swipeVelocity=0;this.velocityMultiplier=G.velocityMultiplier||8;
        this.autoPlayerTimeTracker=0;this._wasAutoPlaying=this._isAutoPlaying;this._onResizeDebouncedTimeout=-1;
        this._onOrientationChangeDebouncedTimeout=-1;this.currentSlideIndex=-1;this.widthOfSlideItem=this.getWidthOfSingleSlide();
        this.galleryContainer=this._el.parentNode;this.slideWrapperElement=this._el.querySelector(r);
        this.previousPaddle=this._el.querySelector("[data-ac-gallery-previous-trigger]");
        this.nextPaddle=this._el.querySelector("[data-ac-gallery-next-trigger]");this.previousPaddleContainer=this._el.querySelector(".paddlenav-arrow-container-previous");
        this.nextPaddleContainer=this._el.querySelector(".paddlenav-arrow-container-next");
        this.lastInteractionEvent=null;this._onRequestAnimationFrame=this._onRequestAnimationFrame.bind(this);
        this._onPreviousPaddleClick=this._onPreviousPaddleClick.bind(this);this._onNextPaddleClick=this._onNextPaddleClick.bind(this);
        this._onDashnavTriggerClicked=this._onDashnavTriggerClicked.bind(this);this._onResizeDebounced=this._onResizeDebounced.bind(this);
        this._onBreakpointChanged=this._onBreakpointChanged.bind(this);this._onOrientationChange=this._onOrientationChange.bind(this);
        this._validateGalleryHeight=this._validateGalleryHeight.bind(this);this._onVisibilityChanged=this._onVisibilityChanged.bind(this);
        this._onPaddleNavContainerClick=this._onPaddleNavContainerClick.bind(this);this._onFocusChangePreventShifts=this._onFocusChangePreventShifts.bind(this);
        this._setSlideSpecificWrapperClasses=this._setSlideSpecificWrapperClasses.bind(this);
        this._killAutoPlay=this._killAutoPlay.bind(this);g.updateConstants(i.viewport);
        this._setupEvents();this._validateGalleryHeight();this._setInitialPositions();this._onFocusChangePreventShifts();
        this._setSlideSpecificWrapperClasses();this.lastTime=Date.now();this._onRequestAnimationFrame()
    };var x=C.prototype=Object.create(t.prototype);C.prototype.constructor=C;x._onVisibilityChanged=function(){if(z.isHidden){this._wasAutoPlaying=this._isAutoPlaying;
        this.stopAutoPlay()}if(!z.isHidden&&this._wasAutoPlaying){this.startAutoPlay()}};
    x._onFocusChangePreventShifts=function(){this._el.scrollLeft=0};x._setSlideSpecificWrapperClasses=function(){var H=this.getCurrentItem();
        var G=this.getItemIndex(H);var I=H.getElement().querySelector(a);this._el.classList[(I&&I.getAttribute("href"))?"add":"remove"](D);
        this._el.classList[(G===0)?"add":"remove"](m);this._el.classList[(G===this.getTotalItems()-1)?"add":"remove"](E)
    };x._killAutoPlay=function(){if(this.getItemIndex(this.getCurrentItem())===this.getTotalItems()-1&&this._isAutoPlaying){setTimeout(function(){this._onAutoPlayToNextItem();
        this.stopAutoPlay()}.bind(this),this._autoPlayDelay)}this._lastAutoPlayerTimeTracker=this.autoPlayerTimeTracker
    };x._setupEvents=function(){[this.previousPaddleContainer,this.nextPaddleContainer,this.previousPaddle,this.nextPaddle].forEach(function(H){new k(H)
    }.bind(this));l(this.previousPaddle,"click",this._onPreviousPaddleClick);l(this.nextPaddle,"click",this._onNextPaddleClick);
        l(this.previousPaddleContainer,"click",this._onPaddleNavContainerClick);l(this.nextPaddleContainer,"click",this._onPaddleNavContainerClick);
        l(this._el,"scroll",this._onFocusChangePreventShifts,true);l(window,"orientationchange",this._onOrientationChange);
        z.on("changed",this._onVisibilityChanged);this.on(w.UPDATE_COMPLETE,this._setSlideSpecificWrapperClasses);
        this.on(w.UPDATE_COMPLETE,this._killAutoPlay);i.on("change",this._onBreakpointChanged);
        for(var G=0;G<this._items.length;G++){this._items[G].on("selected",this._onDashnavTriggerClicked)
        }};x._onPaddleNavContainerClick=function(G){var H=this.getCurrentItem().getElement().querySelector(a);
        if(n&&G.target.getAttribute("data-focus-method")==="mouse"){G.target.blur()}if(H&&H.getAttribute("href")){window.location.href=H.getAttribute("href")
        }};x._validateGalleryHeight=function(){if(!u){return}var G=window.innerHeight;if(this.hasPromos){G=G-g.Gallery.promoImageOffset
    }this.galleryContainer.style.height=G+"px"};x.startAutoPlay=function(H,G){this._el.classList.add(y);
        this._el.classList.remove(s);this.autoPlayerTimeTracker=this._autoPlayDelay*this.wrapSlideIndex(this.getSlideIndexTakingAnimationIntoAccount());
        this.lastTime=Date.now();b.startAutoPlay.call(this,H,G)};x.stopAutoPlay=function(G){this._el.classList.remove(y);
        this._el.classList.add(s);b.stopAutoPlay.call(this)};x._setInitialPositions=function(){var H=this._items[this._items.length-1];
        for(var I=0;I<this._items.length;I++){this._items[I].prev=H;this._items[I].next=this._items[I+1];
            this._items[I].zIndex=1000+I;var G=this.widthOfSlideItem*this._items.length;this._items[I]._el.style[q.transform]="translate3d("+G+"px, 0, 0)";
            this._items[I].x=this._items[I].width*I;H=this._items[I]}H.next=this._items[0];
        this._items[0]._el.style[q.transform]="translate3d("+0+"px, 0, 0)"};x._setUpSwiping=function(H,G){this._onSwipeStart=this._onSwipeStart.bind(this);
        this._onSwipeEnd=this._onSwipeEnd.bind(this);this._onSwipeUpdate=this._onSwipeUpdate.bind(this);
        if(H){this._touchSwipe=new j(this._el,j.TOUCH_EVENTS);this._touchSwipe.on(j.START,this._onSwipeStart);
            this._touchSwipe.on(j.END,this._onSwipeEnd);this._touchSwipe.on(j.UPDATE,this._onSwipeUpdate);
            window.addEventListener("touchmove",function(){})}if(G){this._clickSwipe=new j(this._el,j.MOUSE_EVENTS);
            this._clickSwipe.on(j.START,this._onSwipeStart);this._clickSwipe.on(j.END,this._onSwipeEnd);
            this._clickSwipe.on(j.UPDATE,this._onSwipeUpdate)}};x._onSwipeStart=function(G){if(this.clip){this.clip.destroy()
    }if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
    }this.lastInteractionEvent=G;this.swipeVelocity=0};x._onSwipeUpdate=function(G){var H=this.positionX;
        this.lastPositionX=this.positionX;this.positionX+=G.diffX*this.movementRateMultiplier;
        this.lastInteractionEvent=G;this.swipeVelocity=(this.positionX-H)*this.velocityMultiplier
    };x._onSwipeEnd=function(O){var N=[this.currentSlideIndex-1,this.currentSlideIndex,this.currentSlideIndex+1];
        var M=0;var L=Number.MAX_VALUE;for(var H=0,I=N.length;H<I;H++){var P=N[H]*this.widthOfSlideItem;
            var G=Math.abs(P-(this.positionX+this.swipeVelocity));if(G<L){L=G;M=H}}this.lastInteractionEvent=O;
        var J=this.wrapSlideIndex(N[M]),K=(J+1)%2;this.animateToSlide(N[M]);if(this._items.length==2){this._items[J]._addCurrentClassToTriggers();
            this._items[K]._removeCurrentClassFromTriggers()}};x._onWindowResize=function(G){if(this._lastReportedWidth!=document.body.offsetWidth){this._lastReportedWidth=document.body.offsetWidth;
        if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay(G)
        }window.clearTimeout(this._onResizeDebouncedTimeout);this._onResizeDebouncedTimeout=setTimeout(this._onResizeDebounced,500);
        b._onWindowResize.call(this,G)}};x._onOrientationChange=function(){if(h){window.clearTimeout(this._onOrientationChangeDebouncedTimeout);
        this._onOrientationChangeDebouncedTimeout=setTimeout(this._validateGalleryHeight,200)
    }else{this._validateGalleryHeight()}};x._onResizeDebounced=function(){if(this.clip&&this.clip._running){this.clip.destroy()
    }this.widthOfSlideItem=this.getWidthOfSingleSlide(true);for(var G=0;G<this._items.length;
                                                                G++){var I=this._items[G];I.x=this.widthOfSlideItem*G;I.width=I.updateWidth()}for(G=0;
                                                                                                                                                  G<this._items.length;G++){I=this._items[G];I.slideElement.style[q.transform]="translate3d("+I.x+"px, 0,0)"
    }var H=this.wrapSlideIndex(this.currentSlideIndex);this.lastPositionX=this.positionX;
        this.positionX=this._items[H].x;this.currentSlideIndex=-1};x._onBreakpointChanged=function(G){g.updateConstants(G.to)
    };x._onRequestAnimationFrame=function(){window.requestAnimationFrame(this._onRequestAnimationFrame);
        this.msSinceLastRenderTime=(typeof this.lastRenderTime!=="undefined")?new Date()-this.lastRenderTime:1000;
        if(this.msSinceLastRenderTime>=1000/25){this.lastRenderTime=new Date();this.throttledDashnavFrameHasArrived=true
        }else{this.throttledDashnavFrameHasArrived=false}this.slideWrapperElement.style[q.transform]="translate3d("+(-this.positionX)+"px, 0,0)";
        this.updateAutoPlayTimeTracker();if(this._items.length==2){this.checkForCurrentSlideUpdateForTwoSlideGallery()
        }else{this.checkForCurrentSlideUpdate()}var G=this._isAutoPlaying?this.getDashTForAutoPlay():this.getDashTForInteraction();
        var J=1/this._items.length;for(var K=0,N=this._items.length;K<N;K++){var R=this._items[K];
            var L=this.positionX-R.x;var M=L/this.widthOfSlideItem;R.onRequestAnimationFrame(M);
            var H=1;if(this._isAutoPlaying){var I=K*J;var Q=(K+1)*J;H=B.norm(G,I,Q)}else{var O=this.wrapSlideIndex(this.currentSlideIndex);
                var P=this.wrapSlideIndex(this.getSlideIndexTakingAnimationIntoAccount());H=(K===O||K===P)?1:0
            }if(R.lastTValue!=H&&this.throttledDashnavFrameHasArrived){R.updateDash(H)}}};x.animateToSlide=function(J,H){var L=p;
        if(this.clip){if(this.clip._running){L="easeOutQuint"}this.clip.destroy()}if(this._isAutoPlaying&&u){L="easeInOutCubic"
        }var K=J*this.widthOfSlideItem;var I={slideIndex:J,x:this.positionX,extraOptions:null};
        var G=this;this.clip=new c(I,g.Gallery.animationDuration,{x:K},{ease:L,destroyOnComplete:true,onUpdate:function(){G.lastPositionX=G.positionX;
            G.positionX=I.x}});this.clip.play()};x._onAutoPlayToNextItem=function(){this.lastInteractionEvent=null;
        if(!z.isHidden){if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){var G=(this._wrapAround===false&&this.getItemIndex(this.getCurrentItem())===this.getTotalItems()-1)?0:this.currentSlideIndex+1;
            this.animateToSlide(G)}}b._onAutoPlayToNextItem.call(this)};x._onDashnavTriggerClicked=function(H){this.lastInteractionEvent=null;
        if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()}var I=this.getCurrentItemIndex();
        var J=this.getItemIndex(H.item);var G=J-I;this.animateToSlide(this.currentSlideIndex+G)
    };x._onPreviousPaddleClick=function(G){G.stopPropagation();if(n&&G.target.getAttribute("data-focus-method")==="mouse"){G.target.blur()
    }this.lastInteractionEvent=null;if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
    }var H=this.getSlideIndexTakingAnimationIntoAccount();if(H>0||this._wrapAround){this.animateToSlide(H-1)
    }};x._onNextPaddleClick=function(G){G.stopPropagation();if(n&&G.target.getAttribute("data-focus-method")==="mouse"){G.target.blur()
    }this.lastInteractionEvent=null;if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
    }var H=this.getSlideIndexTakingAnimationIntoAccount();if(H<this.getTotalItems()-1||this._wrapAround){this.animateToSlide(H+1)
    }};x._onKeyboardInteraction=function(I,G){this.lastInteractionEvent=null;var H=this.getSlideIndexTakingAnimationIntoAccount();
        if(G.keyCode==v.ARROW_RIGHT&&(H<this.getTotalItems()-1||this._wrapAround)){this.animateToSlide(H+1)
        }if(G.keyCode==v.ARROW_LEFT&&(H>0||this._wrapAround)){this.animateToSlide(H-1)}b._onKeyboardInteraction.call(this,I,G)
    };x.getSlideIndexTakingAnimationIntoAccount=function(){var G=this.currentSlideIndex;
        if(this.clip&&this.clip.target()){G=this.clip.target().slideIndex}return G};x.checkForCurrentSlideUpdate=function(){var H=Math.floor((this.positionX+this.widthOfSlideItem*0.5)/this.widthOfSlideItem);
        if(H==this.currentSlideIndex){return}this.currentSlideIndex=H;var J=this.getCurrentItemIndex();
        var K=this._items[J];var G=null;if(this.lastInteractionEvent){G={interactionEvent:this.lastInteractionEvent.interactionEvent}
        }this.show(K,G);var I;I=K.next;I.x=((this.currentSlideIndex+1)*this.widthOfSlideItem);
        I.slideElement.style[q.transform]="translate3d("+I.x+"px, 0,0)";I=K.prev;I.x=((this.currentSlideIndex-1)*this.widthOfSlideItem);
        I.slideElement.style[q.transform]="translate3d("+I.x+"px, 0,0)"};x.checkForCurrentSlideUpdateForTwoSlideGallery=function(){var M=this.positionX<this.lastPositionX?1:-1;
        var G=M==-1?0.001:0.9999;var I=Math.floor((this.positionX+this.widthOfSlideItem*G)/this.widthOfSlideItem);
        if(this.currentSlideIndex!=I){var H=null;if(this.lastInteractionEvent){H={interactionEvent:this.lastInteractionEvent.interactionEvent}
        }this.show(this.wrapSlideIndex(I),H)}this.currentSlideIndex=I;var K=this.getCurrentItemIndex();
        var L=this._items[K];var J;if(M<0){J=L.next;J.x=((this.currentSlideIndex+1)*this.widthOfSlideItem);
            J.slideElement.style[q.transform]="translate3d("+J.x+"px, 0,0)"}else{J=L.prev;J.x=((this.currentSlideIndex-1)*this.widthOfSlideItem);
            J.slideElement.style[q.transform]="translate3d("+J.x+"px, 0,0)"}};x.updateAutoPlayTimeTracker=function(){if(!z.isHidden){var G=Date.now();
        var H=(G-this.lastTime);this.lastTime=G;this.autoPlayerTimeTracker+=H}};x.getDashTForAutoPlay=function(){var I=(this._autoPlayDelay*this._items.length);
        var G=(this.autoPlayerTimeTracker)%I;var H=G/I;return H};x.getDashTForInteraction=function(){return 1
    };x.getCurrentItemIndex=function(){var G=this.currentSlideIndex%this._items.length;
        if(G<0){G=this._items.length+G}return G};x.getWidthOfSingleSlide=function(G){if(G){return this._items[0].updateWidth()
    }return this._items[0].width};x.wrapSlideIndex=function(G){G=G%this._items.length;
        if(G<0){return this._items.length+G}return G};var A=function(){t.prototype.startAutoPlay=function(H,G){G=G||{};
        this.options=G||{};this._isAutoPlaying=true;this._autoPlayDelay=this._autoPlayDelay||(H*1000);
        this._cancelAutoPlayOnInteraction=(G.cancelOnInteraction===undefined)?true:G.cancelOnInteraction;
        clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);
        if(this._cancelAutoPlayOnInteraction){this.on(w.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){l(this._componentsContainer,"focus",this.stopAutoPlay,true);
            l(this._componentsContainer,"touchend",this.stopAutoPlay,true);l(this._componentsContainer,"click",this.stopAutoPlay,true)
        }};t.prototype.stopAutoPlay=function(){clearTimeout(this._autoPlayTimeoutId);this._isAutoPlaying=false;
        if(this._cancelAutoPlayOnInteraction){this.off(w.UPDATE,this.stopAutoPlay)}};t.prototype._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!z.isHidden){if(this._cancelAutoPlayOnInteraction){this.off(w.UPDATE,this.stopAutoPlay)
    }var G=this.showNext();if(G!==null){if(this._cancelAutoPlayOnInteraction){this.on(w.UPDATE,this.stopAutoPlay)
    }clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
    }}else{clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
    }}}};A();d.exports=C},{"./Constants":686,"@marcom/ac-browser-prefixed":271,"@marcom/ac-dom-events":290,"@marcom/ac-eclipse":412,"@marcom/ac-gallery":521,"@marcom/ac-headjs/FocusManager":545,"@marcom/ac-keyboard/keyMap":554,"@marcom/ac-page-visibility":558,"@marcom/ac-pointer-tracker":601,"@marcom/ac-useragent":672,"@marcom/ac-viewport-emitter":683,"@marcom/sm-math-utils":684}],688:[function(c,b,f){var l=c("@marcom/ac-browser-prefixed");
    var g=c("@marcom/sm-math-utils");var a=c("./Constants");var d=c("@marcom/ac-gallery").Item;
    var m=d.prototype;var j=0;var h=function(){d.apply(this,arguments);this.zIndex=1000;
        this.mI=j++;this.slideElement=this._el;this.imageElement=this.slideElement.querySelector(".gallery-item-image-element");
        this.copyElement=this.slideElement.querySelector(".gallery-item-copy-wrapper");
        this.width=this.slideElement.clientWidth;this.dashnavElement=document.querySelector('[data-ac-gallery-trigger="'+this._el.id+'"]');
        this.dashnavProgressElement=this.dashnavElement.querySelector(".dashnav-progress");
        this.dashnavMaxWidth=this.dashnavElement.clientWidth};var k=h.prototype=Object.create(d.prototype);
    k.onRequestAnimationFrame=function(n){var i,o;n=g.clamp(n,-1,1);if(n>=0){i=n*this.width*a.Item.Outgoing.CopyXScaleFactor;
        o=g.map(n,0,1,1,0.9);
        o=g.map(n,0,1,1,0.9);i=g.map(n,0,1,0,this.width*0.9);if(this.imageElement){this.imageElement.style[l.transform]="translate3d("+i+"px, 0, 0) scale3d("+o+","+o+", 1)"
        }}else{i=n*this.width*a.Item.Incoming.CopyXScaleFactor;o=1;
        if(this.imageElement){this.imageElement.style[l.transform]="translate3d("+i+"px, 0, 0) scale3d("+o+","+o+", 1)"
        }}};k.updateDash=function(i){this.lastTValue=i;i=g.clamp(i,0,1);this.dashnavProgressElement.style[l.transform]="scaleX("+i+")"
    };k.setZIndex=function(i){this.zIndex=i;this.slideElement.style.zIndex=i};k.updateWidth=function(){this.width=this._el.clientWidth;
        return this.width};b.exports=h},{"./Constants":686,"@marcom/ac-browser-prefixed":271,"@marcom/ac-gallery":521,"@marcom/sm-math-utils":684}],689:[function(c,d,a){var g=c("@marcom/ac-gallery").SlideGallery;
    var f=c("./safewarn");var b=function(h){var i=document.querySelector(".dashnav ul");
        if(i){var j=h.querySelectorAll(".gallery-item");[].forEach.call(j,function(l){var o=document.createElement("li");
            var n=document.createElement("a");var m=l.querySelector("h2");var k="";if(m){k=m.textContent
            }else{f("Per SEO, our header for each slide should be wrapped in an H2. See: https://aa.apple.com//#technical-structure")
            }n.setAttribute("href","#"+l.id);n.setAttribute("data-ac-gallery-trigger",l.id);
            n.setAttribute("id",l.id+"-trigger");n.className="dashnav-item";n.innerHTML='<div class="dashnav-dash"><span class="dashnav-progress"></span><span class="dashnav-label">'+k+"</span></div>";
            o.setAttribute("role","presentation");o.appendChild(n);i.appendChild(o)})}};d.exports=b
},{"./safewarn":690,"@marcom/ac-gallery":521}],690:[function(b,c,a){var d=function(f){if(/^ic[^\.]+\-dev\.apple\.com/.test(document.location.host)){try{console.warn(f)
}catch(g){}}};c.exports=d},{}],691:[function(d,f,b){var i=d("@marcom/ac-gallery").SlideGallery;
    var h=d("./safewarn");var a="backing-link";var g="data-backing-link";var c=function(k){var j=function(m,o){var n=o.getAttribute("href");
        m.setAttribute("href",n);m.setAttribute("data-analytics-click","prop3:"+n+",prefix:h")
    };var l=k.querySelectorAll(".gallery-item");[].forEach.call(l,function(n){var m=(n.querySelectorAll("a").length>1);
        var o=n.querySelector("["+g+"][href]:not(."+a+")"),o=o||n.querySelector("a[href]:not(."+a+")");
        if(o){var p=document.createElement("a");p.classList.add(a);p.setAttribute("aria-hidden","true");
            p.setAttribute("tabindex","-1");p.setAttribute("data-analytics-title",n.id.split("homepage-gallery-")[1]);
            p=n.insertBefore(p,n.firstChild);j(p,o);if(!o.hasAttribute(g)&&m){h('Gallery slide "'+n.id+'" has multiple links,but no "data-backing-link" data attribute')
            }}})};f.exports=c},{"./safewarn":690,"@marcom/ac-gallery":521}],692:[function(c,d,b){var a=c("@marcom/ac-promomanager/AutoPromoManager");
    var g=c("@marcom/ac-gallery").FadeGallery;var h=function(i){this._options=i||{};
        this.intervalPromos=null};var f=h.prototype;f.initialize=function(){var i=this._initAutoPromoManager();
        this.intervalPromoArr=this._initIntervalGalleries(i);this._addIntervalGalleryItems(this.intervalPromoArr);
        this._initUpdateIntervalCurrentPromos(this.intervalPromoArr);this._startIntervalGallery(this.intervalPromoArr)
    };f._initAutoPromoManager=function(){var i=document.getElementById("promos");return new a(i,this._options)
    };f._initIntervalGalleries=function(q){var p=q.promoManagers.reorder;var l=p.length;
        var n=[];var o={enableArrowKeys:false,deeplink:false,wrapAround:true};var k;var j;
        if(l>0){for(var m=0;m<l;m++){k=p[m];j=new g(k.el,o);n.push({promoManager:k,gallery:j})
        }}return n};f._addIntervalGalleryItems=function(q){var m=q.length;var r;var l;var p;
        var k;for(var o=0;o<m;o++){l=q[o].gallery;p=q[o].promoManager.promos.all;k=p.length;
            for(var n=0;n<k;n++){l.addItem(p[n].el)}}};f._onIntervalGalleryUpdate=function(k){var l=this;
        var j=l.gallery.getItemIndex(k.incoming[0]);var i=l.promoManager.promos.all[j];
        l.promoManager.setCurrentPromo(i)};f._bindIntervalGalleryUpdate=function(l){var j=l.length;
        var m;for(var k=0;k<j;k++){m=l[k];m.boundUpdate=this._onIntervalGalleryUpdate.bind(l[k])
        }};f._initUpdateIntervalCurrentPromos=function(l){var k=l.length;this._bindIntervalGalleryUpdate(l);
        for(var j=0;j<k;j++){l[j].gallery.on("update",l[j].boundUpdate)}};f._startIntervalGallery=function(l){var j=l.length;
        for(var k=0;k<j;k++){l[k].gallery.startAutoPlay()}};d.exports=h},{"@marcom/ac-gallery":521,"@marcom/ac-promomanager/AutoPromoManager":667}],693:[function(b,c,a){var d=b("./promise/promise").Promise;
    var f=b("./promise/polyfill").polyfill;a.Promise=d;a.polyfill=f},{"./promise/polyfill":697,"./promise/promise":698}],694:[function(c,d,b){var a=c("./utils").isArray;
    var g=c("./utils").isFunction;function f(h){var i=this;if(!a(h)){throw new TypeError("You must pass an array to all.")
    }return new i(function(o,n){var l=[],m=h.length,q;if(m===0){o([])}function p(r){return function(s){j(r,s)
    }}function j(r,s){l[r]=s;if(--m===0){o(l)}}for(var k=0;k<h.length;k++){q=h[k];if(q&&g(q.then)){q.then(p(k),n)
    }else{j(k,q)}}})}b.all=f},{"./utils":702}],695:[function(b,c,a){(function(f,g){var o=(typeof window!=="undefined")?window:{};
    var l=o.MutationObserver||o.WebKitMutationObserver;var n=(typeof g!=="undefined")?g:(this===undefined?window:this);
    function m(){return function(){f.nextTick(p)}}function i(){var s=0;var q=new l(p);
        var r=document.createTextNode("");q.observe(r,{characterData:true});return function(){r.data=(s=++s%2)
        }}function k(){return function(){n.setTimeout(p,1)}}var j=[];function p(){for(var s=0;
                                                                                      s<j.length;s++){var r=j[s];var t=r[0],q=r[1];t(q)}j=[]}var h;if(typeof f!=="undefined"&&{}.toString.call(f)==="[object process]"){h=m()
    }else{if(l){h=i()}else{h=k()}}function d(s,q){var r=j.push([s,q]);if(r===1){h()
    }}a.asap=d}).call(this,b("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{_process:544}],696:[function(d,f,a){var c={instrument:false};function b(g,h){if(arguments.length===2){c[g]=h
}else{return c[g]}}a.config=c;a.configure=b},{}],697:[function(b,c,a){(function(f){var d=b("./promise").Promise;
    var h=b("./utils").isFunction;function g(){var j;if(typeof f!=="undefined"){j=f
    }else{if(typeof window!=="undefined"&&window.document){j=window}else{j=self}}var i="Promise" in j&&"resolve" in j.Promise&&"reject" in j.Promise&&"all" in j.Promise&&"race" in j.Promise&&(function(){var k;
            new j.Promise(function(l){k=l});return h(k)}());if(!i){j.Promise=d}}a.polyfill=g
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./promise":698,"./utils":702}],698:[function(q,d,D){var B=q("./config").config;
    var A=q("./config").configure;var s=q("./utils").objectOrFunction;var a=q("./utils").isFunction;
    var f=q("./utils").now;var g=q("./all").all;var j=q("./race").race;var l=q("./resolve").resolve;
    var c=q("./reject").reject;var u=q("./asap").asap;var r=0;B.async=u;function h(E){if(!a(E)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }if(!(this instanceof h)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }this._subscribers=[];z(E,this)}function z(I,H){function E(J){v(H,J)}function G(J){k(H,J)
    }try{I(E,G)}catch(F){G(F)}}function x(L,N,K,G){var E=a(K),J,I,M,F;if(E){try{J=K(G);
        M=true}catch(H){F=true;I=H}}else{J=G;M=true}if(t(N,J)){return}else{if(E&&M){v(N,J)
    }else{if(F){k(N,I)}else{if(L===b){v(N,J)}else{if(L===C){k(N,J)}}}}}}var m=void 0;
    var p=0;var b=1;var C=2;function o(E,J,I,H){var G=E._subscribers;var F=G.length;
        G[F]=J;G[F+b]=I;G[F+C]=H}function w(I,E){var K,J,H=I._subscribers,G=I._detail;for(var F=0;
                                                                                          F<H.length;F+=3){K=H[F];J=H[F+E];x(E,K,J,G)}I._subscribers=null}h.prototype={constructor:h,_state:undefined,_detail:undefined,_subscribers:undefined,then:function(J,H){var I=this;
        var F=new this.constructor(function(){});if(this._state){var G=arguments;B.async(function E(){x(I._state,F,G[I._state-1],I._detail)
        })}else{o(this,F,J,H)}return F},"catch":function(E){return this.then(null,E)}};
    h.all=g;h.race=j;h.resolve=l;h.reject=c;function t(I,G){var H=null,E;try{if(I===G){throw new TypeError("A promises callback cannot return that same promise.")
    }if(s(G)){H=G.then;if(a(H)){H.call(G,function(J){if(E){return true}E=true;if(G!==J){v(I,J)
    }else{i(I,J)}},function(J){if(E){return true}E=true;k(I,J)});return true}}}catch(F){if(E){return true
    }k(I,F);return true}return false}function v(F,E){if(F===E){i(F,E)}else{if(!t(F,E)){i(F,E)
    }}}function i(F,E){if(F._state!==m){return}F._state=p;F._detail=E;B.async(y,F)}function k(F,E){if(F._state!==m){return
    }F._state=p;F._detail=E;B.async(n,F)}function y(E){w(E,E._state=b)}function n(E){w(E,E._state=C)
    }D.Promise=h},{"./all":694,"./asap":695,"./config":696,"./race":699,"./reject":700,"./resolve":701,"./utils":702}],699:[function(c,f,b){var a=c("./utils").isArray;
    function d(g){var h=this;if(!a(g)){throw new TypeError("You must pass an array to race.")
    }return new h(function(m,l){var k=[],n;for(var j=0;j<g.length;j++){n=g[j];if(n&&typeof n.then==="function"){n.then(m,l)
    }else{m(n)}}})}b.race=d},{"./utils":702}],700:[function(b,c,a){function d(g){var f=this;
    return new f(function(i,h){h(g)})}a.reject=d},{}],701:[function(b,c,a){function d(g){if(g&&typeof g==="object"&&g.constructor===this){return g
}var f=this;return new f(function(h){h(g)})}a.resolve=d},{}],702:[function(d,f,b){function g(i){return h(i)||(typeof i==="object"&&i!==null)
}function h(i){return typeof i==="function"}function a(i){return Object.prototype.toString.call(i)==="[object Array]"
}var c=Date.now||function(){return new Date().getTime()};b.objectOrFunction=g;b.isFunction=h;
    b.isArray=a;b.now=c},{}],703:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],704:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(l,k){var j=Object(this);
    var f;var g;if(typeof l!=="function"){throw new TypeError("No function object passed to forEach.")
    }var h=this.length;for(f=0;f<h;f+=1){g=j[f];l.call(k,g,f,j)}}}},{}],705:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
    var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
    }}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],706:[function(b,c,a){(function(){var d=Array.prototype.slice;
    try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
        if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
        }var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
        }k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
        }}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],707:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
    var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
    return g}f.prototype=window.Event.prototype;return f}())}}},{}],708:[function(b,c,a){
    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
    if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
    }var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
        },g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
        }}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
    },k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
    }if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
    }return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
        for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
        }},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
    };i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
        do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
        }};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
        u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
    }};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
        if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
    };if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
    }catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
    }}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
        f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
            DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
                h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
            }else{return d.call(this,h)}}}f=null}())}}},{}],709:[function(b,c,a){if(!Object.create){var d=function(){};
    Object.create=function(f){if(arguments.length>1){throw new Error("Second argument not supported")
    }if(f===null||typeof f!=="object"){throw new TypeError("Object prototype may only be an Object.")
    }d.prototype=f;return new d()}}},{}],710:[function(b,c,a){c.exports=b("es6-promise").polyfill()
},{"es6-promise":693}],711:[function(b,c,a){var d=b("@marcom/ac-films").create;
    c.exports=(function(){var i=[".promo-tile-yaks-tile",".promo-tile-breathe-tile",".promo-tile-sweat-tile",".promo-tile-zero-waste-tile"];
        var g=[];i.forEach(function(j){var j=document.querySelector(j);if(j){g.push(j)}});
        if(g.length>0){var h={modal:true};d(g,h)}var f=document.querySelector("#homepage-gallery-environment");
        if(f){f.parentElement.style.transform="translateX(0px) translateY(0px)";f.addEventListener("touchstart",function(j){j.stopPropagation()
        })}})()},{"@marcom/ac-films":254}],712:[function(d,f,c){var b=d("@marcom/ac-function/debounce");
    var g=d("@marcom/ac-homepage/main");var a=(function(){var h=document.querySelectorAll(".gallery-item-copy-wrapper");
        h=Array.prototype.slice.call(h);var i=function(){h.forEach(function(l){var k=l.querySelector(".inner");
            l.style.height="";k.style.height="";var n=l.offsetHeight;var m=k.clientHeight;l.style.height=Math.round(n)+"px";
            if(m%2!==0){k.style.height=m+1+"px"}})};var j=b(i,300);return{initialize:function(){g.initialize();
            window.onload=i;window.addEventListener("resize",j);d("./component/environment")
        }}})().initialize()},{"./component/environment":711,"@marcom/ac-function/debounce":267,"@marcom/ac-homepage/main":685}]},{},[712]);