(this.webpackJsonpliterak=this.webpackJsonpliterak||[]).push([[0],{21:function(e,r,s){},22:function(e,r,s){},26:function(e,r,s){"use strict";s.r(r);var c,t,a,n,o,i=s(0),z=s.n(i),d=s(13),g=s.n(d),l=(s(21),s(22),s(2)),p=s(5),w=s(3),j=s(11),b=s(4),u=s(1),_=b.a.li(c||(c=Object(w.a)(["\n    width: 0.25em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    margin-right: 0.25em;\n    background-color: green;\n    listStyleType: none;\n    display: inline;\n    border-radius: 0.35em;\n    pointer-events: auto;\n    cursor: pointer;\n    font-size: 1em;\n"]))),O=b.a.ul(t||(t=Object(w.a)(["\n    margin-top: 0.2em;\n    margin-bottom: 0.2em;\n"]))),y=b.a.div(a||(a=Object(w.a)(["\n    font-size: 1.25em;\n"]))),m=function(e){var r=e.word,s=e.goToNextWord;return Object(u.jsxs)(u.Fragment,{children:[r.guessed?Object(u.jsx)(y,{children:r.correct}):Object(u.jsx)(y,{children:r.gap}),Object(u.jsx)(O,{children:r.answers.map((function(e){return Object(u.jsx)(_,{id:e,onClick:function(){Object(j.a)(document.getElementsByTagName("li")).forEach((function(e){e.style.pointerEvents="none",e.style.cursor="default"})),setTimeout((function(){Object(j.a)(document.getElementsByTagName("li")).forEach((function(e){e.style.pointerEvents="auto",e.style.cursor="pointer",e.style.color="white"}))}),2500),s(e)},children:e},e)}))})]})},k=b.a.div(n||(n=Object(w.a)(["\n    font-size: 0.3em;\n"]))),h=b.a.div(o||(o=Object(w.a)(["\n    font-size: 0.75em;\n"]))),f=function(e){var r=e.words,s=Object(i.useState)(0),c=Object(p.a)(s,2),t=c[0],a=c[1],n=Object(i.useState)(Object(u.jsx)(h,{children:"Zgadnij \ud83d\ude00"})),o=Object(p.a)(n,2),z=o[0],d=o[1],g=Object(i.useState)(Object(l.a)(Object(l.a)({},r[0]),{},{guessed:!1})),w=Object(p.a)(g,2),j=w[0],b=w[1],_=Object(i.useState)(0),O=Object(p.a)(_,2),y=O[0],f=O[1],x=Object(i.useState)(0),v=Object(p.a)(x,2),E=v[0],G=v[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{word:j,goToNextWord:function(e){if(j.gap.slice().replace("_",e)===j.correct)document.getElementById(e).style.color="yellow",b(Object(l.a)(Object(l.a)({},j),{},{guessed:!0})),f(++y),d(Object(u.jsx)(h,{children:"Dobrze \ud83d\udc4d"}));else{var s=j.answers.filter((function(e){return j.gap.slice().replace("_",e)===j.correct}));document.getElementById(e).style.color="red",document.getElementById(s).style.color="yellow",G(++E),d(Object(u.jsx)(h,{children:"Ups \ud83d\ude43"}))}setTimeout((function(){d(Object(u.jsx)(h,{children:"Zgadnij \ud83d\ude00"})),t<r.length-1?(b(Object(l.a)(Object(l.a)({},r[t+1]),{},{guessed:!1})),a(++t)):(b(Object(l.a)(Object(l.a)({},r[0]),{},{guessed:!1})),a(0),f(0),G(0))}),2500)}}),r.length-y-E!==0?Object(u.jsxs)(k,{children:["Wynik: ",y,"/",r.length," (pozosta\u0142o: ",r.length-y-E,")"]}):Object(u.jsxs)(k,{children:["Wynik ko\u0144cowy: ",y,"/",r.length]}),z]})},x=[{correct:"d\u017awigi",gap:"_wigi",answers:["d\u017a","dz","\u017a","\u015b"]},{correct:"ko\u017al\u0105tko",gap:"ko_l\u0105tko",answers:["d\u017a","\u015b","\u017a","dz"]},{correct:"\u0142\xf3d\u017a",gap:"\u0142\xf3_",answers:["\u0107","d\u017a","\u017a","dzi"]},{correct:"\u017ad\u017ab\u0142o",gap:"\u017a_b\u0142o",answers:["\u015b","d\u017a","\u017a","dz"]},{correct:"dziecko",gap:"_ecko",answers:["d\u017a","dz","dzi","\u017a"]},{correct:"\u0142odzie",gap:"\u0142o_e",answers:["d\u017a","zi","dz","dzi"]},{correct:"gwo\u017adzie",gap:"gwo_dzie",answers:["d\u017a","\u017a","dz","dzi"]},{correct:"dzwonki",gap:"_wonki",answers:["d\u017a","c","dz","dzi"]},{correct:"rydz",gap:"ry_",answers:["d\u017a","dz","c","dzi"]},{correct:"rodzynki",gap:"ro_ynki",answers:["dz","z","dzi","c"]},{correct:"\u017ar\xf3d\u0142o",gap:"_r\xf3d\u0142o",answers:["z","\u017a","\u015b","sz"]},{correct:"ga\u0142\u0105\u017a",gap:"ga\u0142\u0105_",answers:["d\u017a","\u015b","\u017a","\u0107"]},{correct:"zio\u0142a",gap:"_o\u0142a",answers:["\u017a","zi","d\u017a","z"]},{correct:"\u017ad\u017ab\u0142o",gap:"_d\u017ab\u0142o",answers:["zi","\u017a","d\u017a","z"]},{correct:"ga\u0142\u0119zie",gap:"ga\u0142\u0119_e",answers:["zi","\u017a","d\u017a","z"]},{correct:"gw\xf3\u017ad\u017a",gap:"gw\xf3\u017a_",answers:["zi","d\u017a","\u0107","dzi"]},{correct:"jezioro",gap:"je_oro",answers:["zi","d\u017a","\u017a","z"]},{correct:"\u015blady",gap:"_lady",answers:["\u015b","si","s","sz"]},{correct:"Grze\u015b",gap:"G_e\u015b",answers:["rz","\u017c","z","sz"]},{correct:"ro\u015blina",gap:"ro_lina",answers:["s","\u015b","sz","si"]},{correct:"siano",gap:"_ano",answers:["sz","s","\u015b","si"]},{correct:"\u0142osie",gap:"\u0142o_e",answers:["sz","si","s","\u015b"]},{correct:"Zosia",gap:"Zo_a",answers:["si","s","sz","\u015b"]},{correct:"\u0142o\u015b",gap:"\u0142o_",answers:["s","si","\u015b","sz"]},{correct:"Grzesia",gap:"Grze_a",answers:["s","\u015b","si","sz"]},{correct:"cztery",gap:"_tery",answers:["c","cz","\u0107","sz"]},{correct:"gwo\u017adzie",gap:"gwo\u017a_e",answers:["d\u017a","dzi","\u017a","dz"]},{correct:"Grze\u015b",gap:"Grze_",answers:["s","\u015b","sz","rz"]},{correct:"klucz",gap:"klu_",answers:["c","\u0107","cz","rz"]},{correct:"oczy",gap:"o_y",answers:["c","cz","\u0107","sz"]},{correct:"szalik",gap:"_alik",answers:["\u015b","cz","sz","s"]},{correct:"mysz",gap:"my_",answers:["\u015b","sz","rz","s"]},{correct:"szyszka",gap:"_yszka",answers:["\u015b","cz","sz","s"]},{correct:"\u017caba",gap:"_aba",answers:["z","\u017c","rz","d\u017c"]},{correct:"je\u017c",gap:"je_",answers:["\u017a","rz","\u017c","sz"]},{correct:"Grzegorz",gap:"G_egorz",answers:["rz","\u017a","\u017c","z"]},{correct:"szyszka",gap:"szy_ka",answers:["\u015b","sz","s","cz"]},{correct:"le\u017cak",gap:"le_ak",answers:["rz","\u017c","sz","z"]},{correct:"rzeka",gap:"_eka",answers:["\u017a","rz","sz","cz"]},{correct:"talerz",gap:"tale_",answers:["\u017c","rz","Rz","sz"]},{correct:"drzewo",gap:"d_ewo",answers:["\u017a","sz","d\u017c","rz"]},{correct:"szynka",gap:"_ynka",answers:["sz","\u017c","s","\u015b"]},{correct:"Grzegorz",gap:"Grzego_",answers:["\u017c","sz","rz","r"]}];var v=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f,{words:x})})};g.a.render(Object(u.jsx)(z.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.d4d04049.chunk.js.map