(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{LoQL:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),r=(t("Tze0"),t("pIFo"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("hHhE"),t("f3/d"),t("91GP"),t("MgzW")),c=t.n(r),o=function(){return(o=Object.assign||function(e){for(var a,t=1,l=arguments.length;t<l;t++)for(var n in a=arguments[t])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e}).apply(this,arguments)},i=function(e){for(var a=e.url,t=e.allowFullScreen,l=e.position,r=e.display,i=e.height,s=e.width,m=e.overflow,u=e.styles,b=e.onLoad,d=e.onMouseOver,h=e.onMouseOut,f=e.scrolling,p=e.id,E=e.frameBorder,v=e.ariaHidden,y=e.sandbox,g=e.allow,w=e.className,N=e.title,P=e.ariaLabel,O=e.ariaLabelledby,k=e.name,x=e.target,j=e.loading,q=e.importance,M=e.referrerpolicy,L=e.allowpaymentrequest,T=e.src,W=c()({src:T||a,target:x||null,style:{position:l||null,display:r||"block",overflow:m||null},scrolling:f||null,allowpaymentrequest:L||null,importance:q||null,sandbox:y||null,loading:j||null,styles:u||null,name:k||null,className:w||null,referrerpolicy:M||null,title:N||null,allow:g||null,id:p||null,"aria-labelledby":O||null,"aria-hidden":v||null,"aria-label":P||null,width:s||null,height:i||null,onLoad:b||null,onMouseOver:d||null,onMouseOut:h||null}),A=Object.create(null),G=0,C=Object.keys(W);G<C.length;G++){var F=C[G];null!=W[F]&&(A[F]=W[F])}for(var z=0,B=Object.keys(A.style);z<B.length;z++){var Q=B[z];null==A.style[Q]&&delete A.style[Q]}if(t)if("allow"in A){var S=A.allow.replace("fullscreen","");A.allow=("fullscreen "+S.trim()).trim()}else A.allow="fullscreen";return E>=0&&(A.style.hasOwnProperty("border")||(A.style.border=E)),n.a.createElement("iframe",o({},A))},s=function(e){var a=e.url,t=e.height,l=e.className;return n.a.createElement(i,{url:a,className:l,height:t,styles:{background:"transparent",border:"0px none #ccc"},width:"100%",frameborder:"0",display:"initial",onMouseWheel:"",position:"relative",marginHeight:"0",marginWidth:"0"})};s.defaultProps={height:"1120px",className:void 0};a.a=s},tQRl:function(e,a,t){"use strict";t("f3/d");var l=t("q1tI"),n=t.n(l),r=t("u2Gm"),c=t("Tq89"),o=t("hBwG"),i=function(e){var a=e.to,t=e.title,l=e.isActive;return n.a.createElement(o.b,{className:"button "+(l?"active":""),to:a},t)};i.defaultProps={isActive:!1};var s=i,m=function(e){var a=e.tags,t=e.basePath,l=e.activeTabName,o=Object(r.a)();return n.a.createElement(n.a.Fragment,null,a.map((function(e,a){return n.a.createElement("div",{name:e.name,key:o("tabtags-div"+a)})})),n.a.createElement(c.a,{mb:2},n.a.createElement(c.c,null,a.map((function(e,a){var r=e.name,c=e.title;return n.a.createElement(s,{to:t+"#"+r,title:c,isActive:r===l,key:o("tabtags-tabtag"+a)})})))))};m.defaultProps={basePath:"/"};var u=m,b=function(e){var a=e.id,t=e.tabs,l=e.basePath,c=e.activeTabName,o=e.children,i=Object(r.a)();return n.a.createElement("div",{id:a},n.a.createElement(u,{tags:t.map((function(e){return{name:e.name,title:e.title}})),basePath:l,activeTabName:c}),o,t.filter((function(e){return e.name===c})).map((function(e,a){return n.a.createElement("div",{key:i("tabset-content-"+a+")")},e.content)})))};b.defaultProps={id:void 0,basePath:"/",children:void 0};var d=b;a.a=d},yVMq:function(e,a,t){"use strict";t.r(a);t("Z2Ku"),t("L9s1"),t("f3/d");var l=t("q1tI"),n=t.n(l),r=t("LoQL"),c=t("hBwG"),o=t("ntAx"),i=t("DGZL"),s=t("Wkq1"),m=t("Tq89"),u=t("5gvO"),b=t("tQRl"),d="/individuals",h=[{name:"personal-stories",title:"Особисті історії",content:n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{mb:4},n.a.createElement(r.a,{url:"https://airtable.com/embed/shrZPaMPSGvTftBnt?backgroundColor=cyan&viewControls=on",className:"airtable-embed",height:"533px"})),n.a.createElement(m.a,{mb:4,style:{textAlign:"center"}},n.a.createElement(s.a,{as:"h3",mb:4},"Розкажіть свою історію"),n.a.createElement(s.a,{mb:4,style:{fontSize:"80%"}},"Що з вами сталось і як ви реагуєте на виклики?",n.a.createElement(m.b,null),"Дякуємо, що підтримуєте відкриті дані чистими."),n.a.createElement(r.a,{url:"https://airtable.com/embed/shrWMin8tyw50itPo?backgroundColor=cyan",className:"airtable-embed",height:"1090px"})),n.a.createElement(m.c,{mb:6},n.a.createElement(c.a,{basepath:d,name:"main-data",className:"button secondary"},"Наверх")))},{name:"vacancy-sources-and-career-advice",title:"Джерела вакансій та кар'єрні поради",content:n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{mb:4},n.a.createElement(r.a,{url:"https://airtable.com/embed/shrDhcjrQNJWEzjdr?backgroundColor=cyan&viewControls=on",className:"airtable-embed",height:"533px"})),n.a.createElement(m.a,{mb:4,style:{textAlign:"center"}},n.a.createElement(s.a,{as:"h3",mb:4},"Додайте корисний ресурс"),n.a.createElement(s.a,{mb:4,style:{fontSize:"80%"}},"Кар'єрні поради або канали чи групи, де не проходить і дня без публікації вакансії",n.a.createElement(m.b,null),"Інформація в цьому розділі підлягає модерації для уникнення спаму.",n.a.createElement(m.b,null),"Дякуємо, що підтримуєте відкриті дані чистими."),n.a.createElement(r.a,{url:"https://airtable.com/embed/shrvWPpqJsc57Rukx?backgroundColor=cyan",className:"airtable-embed",height:"1330px"})),n.a.createElement(m.c,{mb:6},n.a.createElement(c.a,{basepath:d,name:"main-data",className:"button secondary"},"Наверх")))},{name:"more-data",title:"Ще більше відкритих даних...",content:n.a.createElement(n.a.Fragment,null,n.a.createElement(m.c,{mb:2},n.a.createElement(c.b,{className:"button secondary",from:d,to:"/corporate"},"Компанії"),n.a.createElement(c.b,{className:"button secondary",from:d,to:"/local-business"},"Локальний бізнес і фріланс")),n.a.createElement(m.c,{mb:7},n.a.createElement(c.b,{className:"button secondary",from:d,to:"/"},"На головну")))}];a.default=function(e){var a=e.location,t=h.map((function(e){return"#"+e.name})),r=t.includes(a.hash)?a.hash:void 0,c=Object(l.useState)(r||t[0]),f=c[0],p=c[1];return Object(l.useEffect)((function(){a.hash&&t.includes(a.hash)&&p(a.hash)}),[a,t]),console.log(d+":location",a),n.a.createElement(o.a,null,n.a.createElement(i.a,{title:"Люди",pathname:d,description:"Як люди потерпають від карантинних заходів та реагують на зміни",isArticle:!0,articleMeta:{datePublished:"2020-04-05",dateModified:"2020-04-05"}}),n.a.createElement(u.b,null),n.a.createElement(s.a,{mb:4},"Люди втрачають роботу через обмежувальні заходи. Хтось шукає нову роботу, де-кому вдається знайти нову, інші знаходять нові для себе способи заробітку або знаходять застосування своїм іншим вмінням."),n.a.createElement(s.a,{mb:4},"Почитайте міні-історії успіху або лайфхаки та поділіться своєю - заради інших.",n.a.createElement(m.b,null),"Знайдіть джерело вакансій та кар'єрні поради для себе та поділіться своїми знахідками.",n.a.createElement(m.b,null),"Ми всі - в одному човні посеред бурхливого моря."),n.a.createElement(s.a,{mb:4},"Ознайомтесь із зібраною інформацією та додайте від себе - відкриті дані це ви!"),n.a.createElement(u.a,{from:d}),n.a.createElement(b.a,{id:"main-data",tabs:h,basePath:d,activeTabName:f.slice(1)}))}}}]);
//# sourceMappingURL=component---src-pages-individuals-jsx-dd5e44d2deb423538abf.js.map