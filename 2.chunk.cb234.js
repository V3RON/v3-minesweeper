(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/oP7":function(){},"41Yq":function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var l=t("hosL"),o=t("ID4Z"),r=t("SbsL"),c=function(n){var e=n.className,t=n.onClick,c=n.onRightClick;return Object(l.h)(o.a,{className:Object(r.twCascade)("hover:shadow-2xl",e),onClick:t,onRightClick:c})}},"9r8w":function(){},DDLo:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var l=t("hosL"),o=t("l3WG"),r=t("WYo3"),c=t("eswm"),u=t("SbsL"),i=function(n){var e=n.className,t=n.onCellSelect,i=n.onCellFlag,a=n.showBombs,s=Object(r.l)(r.d);return Object(l.h)("div",{className:Object(u.twCascade)("flex flex-wrap",e)},s.map((function(n){return Object(l.h)("div",null,n.map((function(n){var e=n.position[0]+":"+n.position[1];return a&&n.type===r.a.BOMB?Object(l.h)(o.BombCell,{className:"bg-red",key:e}):n.flagged?Object(l.h)(c.FlagCell,{key:e,onRightClick:function(){return i(n.position)}}):n.discovered?n.type===r.a.BOMB?Object(l.h)(o.BombCell,{key:e}):Object(l.h)(o.ClearCell,{key:e,value:n.bombsAroundCount}):Object(l.h)(o.UnknownCell,{key:e,onClick:function(){return t(n.position)},onRightClick:function(){return i(n.position)}})})))})))}},ID4Z:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var l=t("hosL"),o=t("SbsL"),r=function(n){var e=n.className,t=n.children,r=n.onClick,c=n.onRightClick;return Object(l.h)("button",{className:Object(o.twCascade)("flex justify-center items-center w-8 h-8 font-bold","bg-white shadow-inner","select-none focus:outline-none",e),onClick:r,onContextMenu:function(n){n.preventDefault(),null==c||c(n)}},t)}},"MW+p":function(n,e,t){"use strict";var l=t("dAmo");t.d(e,"BombCell",(function(){return l.a}));var o=t("tj8e");t.o(o,"ClearCell")&&t.d(e,"ClearCell",(function(){return o.ClearCell})),t.o(o,"UnknownCell")&&t.d(e,"UnknownCell",(function(){return o.UnknownCell}))},"Oo/s":function(){},QMrb:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var l=t("hosL"),o=t("SbsL"),r=t("ID4Z"),c=function(n){var e=n.className,t=n.onRightClick;return Object(l.h)(r.a,{className:Object(o.twCascade)("",e),onRightClick:t},"🚩")}},dAmo:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var l=t("hosL"),o=t("ID4Z"),r=function(n){var e=n.className;return Object(l.h)(o.a,{className:e},"💣")}},eswm:function(n,e,t){"use strict";var l=t("QMrb");t.d(e,"FlagCell",(function(){return l.a}));t("/oP7")},hznG:function(n,e,t){"use strict";var l=t("DDLo");t.d(e,"Board",(function(){return l.a}));t("9r8w")},l3WG:function(n,e,t){"use strict";var l=t("uV3Q");t.o(l,"BombCell")&&t.d(e,"BombCell",(function(){return l.BombCell})),t.o(l,"ClearCell")&&t.d(e,"ClearCell",(function(){return l.ClearCell})),t.o(l,"UnknownCell")&&t.d(e,"UnknownCell",(function(){return l.UnknownCell}));var o=t("MW+p");t.o(o,"BombCell")&&t.d(e,"BombCell",(function(){return o.BombCell})),t.o(o,"ClearCell")&&t.d(e,"ClearCell",(function(){return o.ClearCell})),t.o(o,"UnknownCell")&&t.d(e,"UnknownCell",(function(){return o.UnknownCell}));var r=t("w9cf");t.o(r,"BombCell")&&t.d(e,"BombCell",(function(){return r.BombCell})),t.o(r,"ClearCell")&&t.d(e,"ClearCell",(function(){return r.ClearCell})),t.o(r,"UnknownCell")&&t.d(e,"UnknownCell",(function(){return r.UnknownCell}))},lHkC:function(n,e,t){"use strict";t.r(e);var l=t("hosL"),o=t("WYo3"),r=t("hznG");e.default=function(){var n=Object(o.k)(),e=Object(o.l)(o.f);return Object(l.h)("div",{className:""},Object(l.h)("button",{type:"button",onClick:function(){return n(Object(o.j)())}},"Xray"),Object(l.h)(r.Board,{onCellSelect:function(e){return n(Object(o.h)({position:e}))},onCellFlag:function(e){return n(Object(o.c)({position:e}))},showBombs:e}))}},miH7:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var l=t("hosL"),o=(t("QRet"),t("ID4Z")),r=t("SbsL"),c=function(n){var e=n.className,t=n.value;return Object(l.h)(o.a,{className:Object(r.twCascade)({"text-blue-600":1===t,"text-green-600":2===t,"text-red-600":3===t,"text-blue-900":t>3},"bg-white",e)},{0:"0️⃣",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣"}[t])}},sEBz:function(){},tj8e:function(){},uV3Q:function(n,e,t){"use strict";var l=t("miH7");t.d(e,"ClearCell",(function(){return l.a}));var o=t("sEBz");t.o(o,"BombCell")&&t.d(e,"BombCell",(function(){return o.BombCell})),t.o(o,"UnknownCell")&&t.d(e,"UnknownCell",(function(){return o.UnknownCell}))},w9cf:function(n,e,t){"use strict";var l=t("41Yq");t.d(e,"UnknownCell",(function(){return l.a}));var o=t("Oo/s");t.o(o,"BombCell")&&t.d(e,"BombCell",(function(){return o.BombCell})),t.o(o,"ClearCell")&&t.d(e,"ClearCell",(function(){return o.ClearCell}))}}]);
//# sourceMappingURL=2.chunk.cb234.js.map