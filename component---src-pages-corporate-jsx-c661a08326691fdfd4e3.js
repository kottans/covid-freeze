(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0OBr":function(e,t,a){"use strict";a("Tze0"),a("pIFo"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("hHhE"),a("f3/d"),a("91GP");var l=a("q1tI"),r=a.n(l),n=a("MgzW"),o=a.n(n),c=function(){return(c=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.a=function(e){for(var t=e.url,a=e.allowFullScreen,l=e.position,n=e.display,i=e.height,s=e.width,m=e.overflow,u=e.styles,b=e.onLoad,d=e.onMouseOver,p=e.onMouseOut,h=e.scrolling,y=e.id,f=e.frameBorder,g=e.ariaHidden,E=e.sandbox,v=e.allow,w=e.className,k=e.title,O=e.ariaLabel,x=e.ariaLabelledby,N=e.name,C=e.target,z=e.loading,M=e.importance,q=e.referrerpolicy,j=e.allowpaymentrequest,A=e.src,F=o()({src:A||t,target:C||null,style:{position:l||null,display:n||"block",overflow:m||null},scrolling:h||null,allowpaymentrequest:j||null,importance:M||null,sandbox:E||null,loading:z||null,styles:u||null,name:N||null,className:w||null,referrerpolicy:q||null,title:k||null,allow:v||null,id:y||null,"aria-labelledby":x||null,"aria-hidden":g||null,"aria-label":O||null,width:s||null,height:i||null,onLoad:b||null,onMouseOver:d||null,onMouseOut:p||null}),B=Object.create(null),G=0,H=Object.keys(F);G<H.length;G++){var L=H[G];null!=F[L]&&(B[L]=F[L])}for(var P=0,W=Object.keys(B.style);P<W.length;P++){var R=W[P];null==B.style[R]&&delete B.style[R]}if(a)if("allow"in B){var U=B.allow.replace("fullscreen","");B.allow=("fullscreen "+U.trim()).trim()}else B.allow="fullscreen";return f>=0&&(B.style.hasOwnProperty("border")||(B.style.border=f)),r.a.createElement("iframe",c({},B))}},"fd+T":function(e,t,a){"use strict";a.r(t);a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Z2Ku"),a("L9s1");var l=a("q1tI"),r=a.n(l),n=a("0OBr"),o=a("hBwG"),c=a("ntAx"),i=a("DGZL"),s=a("Wkq1"),m=a("Tq89"),u=a("5gvO"),b={"#it":{tableUrl:"https://airtable.com/embed/shrOnixvEeyehP4fc?backgroundColor=cyan&viewControls=on",form:{url:"https://airtable.com/embed/shrtkZHzVtYeA04om?backgroundColor=cyan",height:"1200px"}},"#general":{tableUrl:"https://airtable.com/embed/shryqDMQ4UmjFlQef?backgroundColor=cyan&viewControls=on",form:{url:"https://airtable.com/embed/shra5VdhFVKNEKN37?backgroundColor=cyan"}},"#survival":{tableUrl:"https://airtable.com/embed/shri5QNsNFHXZ6dRO?backgroundColor=cyan&viewControls=on",form:{url:"https://airtable.com/embed/shr7pczRDtpRzTG7x?backgroundColor=cyan",height:"1280px"}}};t.default=function(e){var t=e.location.hash,a=Object.keys(b).includes(t)?t:void 0,d=Object(l.useState)(a||"#it"),p=d[0],h=d[1];return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Компанії",pathname:"/corporate",description:"Як карантинні заходи впливають на компанії і як компанії реагують на зміни",isArticle:!0,articleMeta:{datePublished:"2020-04-05",dateModified:"2020-04-05"}}),r.a.createElement(u.b,null),r.a.createElement(s.a,{as:"h2",mb:2},"Компанії"),r.a.createElement(s.a,{mb:4},"Інформація про стан найму у компаніях"),r.a.createElement(s.a,{mb:4},"Відкрита інформація дозволяє зрозуміти, що відбувається поряд із нами.",r.a.createElement(m.b,null),"Більш конкретно, ніж в термінах «бізнеси закриваються», «компанії скорочують персонал» - тим більше, що це неправда, або принаймні не вся правда."),r.a.createElement(s.a,{mb:4},"Люди, що втрачають роботу, зможуть побачити, які компанії шукають співробітників, і в яких випадках доцільно зекономити час та зусилля.",r.a.createElement(m.b,null),"Дехто вважає, що люди бояться втратити роботу і їх жахає думка про ризик потрапити під скорочення. Ми можемо знизити рівень їх тривожності, показавши як компанії реагують на зміни, які рішення знаходять."),r.a.createElement(s.a,{mb:4},"Ознайомтесь із зібраною інформацією та додайте від себе - відкриті дані це ви і для вас!"),r.a.createElement(u.a,{from:"corporate"}),r.a.createElement(m.a,{mb:2,id:"main-data"},r.a.createElement(m.c,null,r.a.createElement("button",{type:"button",className:"button "+("#it"===p?"active":""),onClick:function(){return h("#it")}},"ІТ компанії"),r.a.createElement("button",{type:"button",className:"button "+("#general"===p?"active":""),onClick:function(){return h("#general")}},"Всі індустрії"),r.a.createElement("button",{type:"button",className:"button "+("#survival"===p?"active":""),onClick:function(){return h("#survival")}},"Управління ризиками"))),r.a.createElement(s.a,{mb:4,style:{textAlign:"center"}},r.a.createElement(o.a,{to:"/corporate/#more-data"},"Ще більше відкритих даних")),r.a.createElement(m.a,{mb:4},r.a.createElement(n.a,{url:b[p].tableUrl,className:"airtable-embed",width:"100%",height:"533px",styles:{background:"transparent",border:"0px none #ccc"},frameborder:"0",display:"initial",onMouseWheel:"",position:"relative"})),r.a.createElement(m.a,{mb:4,style:{textAlign:"center"}},r.a.createElement(s.a,{as:"h3",mb:4},"Розкажіть нам і співшукачам про компанію"),r.a.createElement(s.a,{mb:4,style:{fontSize:"80%"}},"Будь ласка перевірте, чи не має вже інформації про вашу компанію у списку вище.",r.a.createElement(m.b,null),"Дякуємо, що підтримуєте відкриті дані чистими."),r.a.createElement(n.a,{url:b[p].form.url,className:"airtable-embed",width:"100%",height:b[p].form.height||"1120px",styles:{background:"transparent",border:"0px none #ccc"},frameborder:"0",display:"initial",onMouseWheel:"",position:"relative"})),r.a.createElement(s.a,{mb:2,style:{textAlign:"center"},id:"more-data"},"Ще більше відкритих даних"),r.a.createElement(m.c,{mb:2},r.a.createElement(o.a,{className:"button secondary",from:"corporate",to:"/local-business/"},"Локальний бізнес і фріланс"),r.a.createElement(o.a,{className:"button secondary",from:"corporate",to:"/individuals/"},"Люди")),r.a.createElement(m.c,{mb:6},r.a.createElement(o.a,{className:"button secondary",from:"corporate",to:"/corporate/#main-data"},"Наверх"),r.a.createElement(o.a,{className:"button secondary",from:"corporate",to:"/"},"На головну")),r.a.createElement(s.a,{mb:6,style:{textAlign:"center"}},"Ідея проекту:"," ",r.a.createElement(o.b,{from:"corporate",to:"https://candor.co/hiring-freezes/",target:"_blank"},"Candor Hiring Freeze")," // ",r.a.createElement(o.b,{from:"corporate",to:"https://podbor.io/hiring-freezes/",target:"_blank"},"Podbor Hiring Freeze")))}}}]);
//# sourceMappingURL=component---src-pages-corporate-jsx-c661a08326691fdfd4e3.js.map