(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{434:function(o,e,t){var content=t(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(67).default)("b5d53ec2",content,!0,{sourceMap:!1})},435:function(o,e,t){var content=t(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(67).default)("56f6996e",content,!0,{sourceMap:!1})},436:function(o,e,t){var content=t(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(67).default)("13807396",content,!0,{sourceMap:!1})},466:function(o,e,t){"use strict";t(434)},467:function(o,e,t){var n=t(66)((function(i){return i[1]}));n.push([o.i,"a.book{color:#fff;display:block;line-height:1.2;margin:0 .25em 2em;text-align:center;width:10em}a.book img{display:block;height:10em;margin:0 auto .5em}a.book span.name{font-size:.9em}a.book span.copies{font-size:.75em;margin-left:.25em;white-space:nowrap}",""]),n.locals={},o.exports=n},468:function(o,e,t){"use strict";t(435)},469:function(o,e,t){var n=t(66)((function(i){return i[1]}));n.push([o.i,"#donorbox-outer{display:flex;justify-content:center}#donorbox{margin:0 auto;max-width:100%;width:400px}",""]),n.locals={},o.exports=n},470:function(o,e,t){var map={"./ae.jpg":471,"./amap.jpg":472,"./bor.jpg":473,"./dr.jpg":474,"./es.jpg":475,"./et.jpg":476,"./gc.jpg":477,"./icp.jpg":478,"./iy.jpg":479,"./lr.jpg":480,"./lwl.jpg":481,"./ma.jpg":482,"./mtt.jpg":483,"./nvc.jpg":484,"./ob.jpg":485,"./ou.jpg":486,"./ph.jpg":487,"./pi21.jpg":488,"./ps.jpg":489,"./pw.jpg":490,"./rh.jpg":491,"./rtr.jpg":492,"./sad.jpg":493,"./sftp.jpg":494,"./sm.jpg":495,"./sp.jpg":496,"./tk.jpg":497,"./wdp.jpg":498,"./wsylip.jpg":499};function n(o){var e=r(o);return t(e)}function r(o){if(!t.o(map,o)){var e=new Error("Cannot find module '"+o+"'");throw e.code="MODULE_NOT_FOUND",e}return map[o]}n.keys=function(){return Object.keys(map)},n.resolve=r,o.exports=n,n.id=470},471:function(o,e,t){o.exports=t.p+"img/ae.f08f0fe.jpg"},472:function(o,e,t){o.exports=t.p+"img/amap.d4f53d7.jpg"},473:function(o,e,t){o.exports=t.p+"img/bor.8c9f2d7.jpg"},474:function(o,e,t){o.exports=t.p+"img/dr.14bcddf.jpg"},475:function(o,e,t){o.exports=t.p+"img/es.0e9f03e.jpg"},476:function(o,e,t){o.exports=t.p+"img/et.76002cc.jpg"},477:function(o,e,t){o.exports=t.p+"img/gc.e8b4e86.jpg"},478:function(o,e,t){o.exports=t.p+"img/icp.8806eef.jpg"},479:function(o,e,t){o.exports=t.p+"img/iy.31b6fb8.jpg"},480:function(o,e,t){o.exports=t.p+"img/lr.0176f99.jpg"},481:function(o,e,t){o.exports=t.p+"img/lwl.3fb7ffe.jpg"},482:function(o,e,t){o.exports=t.p+"img/ma.6a384c0.jpg"},483:function(o,e,t){o.exports=t.p+"img/mtt.02caab6.jpg"},484:function(o,e,t){o.exports=t.p+"img/nvc.a2d19ed.jpg"},485:function(o,e,t){o.exports=t.p+"img/ob.7599540.jpg"},486:function(o,e,t){o.exports=t.p+"img/ou.a0cd909.jpg"},487:function(o,e,t){o.exports=t.p+"img/ph.7f2e185.jpg"},488:function(o,e,t){o.exports=t.p+"img/pi21.bf4d15a.jpg"},489:function(o,e,t){o.exports=t.p+"img/ps.de0aa04.jpg"},490:function(o,e,t){o.exports=t.p+"img/pw.7288c5f.jpg"},491:function(o,e,t){o.exports=t.p+"img/rh.03598be.jpg"},492:function(o,e,t){o.exports=t.p+"img/rtr.6ed9c39.jpg"},493:function(o,e,t){o.exports=t.p+"img/sad.9b218cd.jpg"},494:function(o,e,t){o.exports=t.p+"img/sftp.524b02d.jpg"},495:function(o,e,t){o.exports=t.p+"img/sm.f6e0ec6.jpg"},496:function(o,e,t){o.exports=t.p+"img/sp.dba90c3.jpg"},497:function(o,e,t){o.exports=t.p+"img/tk.2455f34.jpg"},498:function(o,e,t){o.exports=t.p+"img/wdp.f8560f5.jpg"},499:function(o,e,t){o.exports=t.p+"img/wsylip.b7d35d3.jpg"},500:function(o,e,t){"use strict";t(436)},501:function(o,e,t){var n=t(66)((function(i){return i[1]}));n.push([o.i,"div#books{display:flex;flex-wrap:wrap;justify-content:space-around}",""]),n.locals={},o.exports=n},508:function(o,e,t){"use strict";t.r(e);t(41);var n={props:["name","goodreads","copies","image","caution"],computed:{url:function(){return"https://www.goodreads.com/book/show/".concat(this.goodreads)}}},r=(t(466),t(31)),c=Object(r.a)(n,(function(){var o=this,e=o._self._c;return e("a",{staticClass:"book",attrs:{href:o.url,target:"_blank",rel:"noopener"}},[e("img",{attrs:{src:o.image,alt:"cover of ".concat(o.name)}}),o._v(" "),e("span",{staticClass:"name"},[o._v("\n    "+o._s(o.name)+"\n    "),"fv"===o.caution?e("nuxt-link",{attrs:{to:"/notes/on-franklin-veaux"}},[o._v("[caution]")]):o._e()],1),o._v(" "),o.copies>1?e("span",{staticClass:"copies"},[o._v("("+o._s(o.copies)+" copies)")]):o._e()])}),[],!1,null,null,null).exports,l=(t(468),Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var o=this._self._c;return o("div",{attrs:{id:"donorbox-outer"}},[o("script",{attrs:{src:"https://donorbox.org/widget.js",type:"text/javascript"}}),this._v(" "),o("iframe",{attrs:{src:"https://donorbox.org/embed/y-open?hide_donation_meter=true",id:"donorbox",seamless:"seamless",name:"donorbox",frameborder:"0",scrolling:"no",allowpaymentrequest:""}})])}],!1,null,null,null).exports),d={ae:{name:"The Art and Etiquette of Polyamory",goodreads:"9453844"},amap:{name:"Ask Me About Polyamory",goodreads:"28384607"},bor:{name:"Building Open Relationships",goodreads:"40747183"},dr:{name:"Designer Relationships",goodreads:"24402980"},es:{name:"The Ethical Slut",goodreads:"4469773",copies:2},et:{name:"Eight Things I Wish I'd Known About Polyamory",goodreads:"22016663"},gc:{name:"The Game Changer",goodreads:"25403882",caution:"fv"},icp:{name:"It's Called Polyamory",goodreads:"34448525"},iy:{name:"Intimacy: Trusting Oneself and the Other",goodreads:"97001"},lr:{name:"Love, Retold",goodreads:"32280028"},lwl:{name:"Love Without Limits",goodreads:"433499"},ou:{name:"Opening Up",goodreads:"1128665",copies:2},ma:{name:"Multiamory",goodreads:"61272930"},mtt:{name:"More Than Two",goodreads:"21955937",copies:3,caution:"fv"},nvc:{name:"Nonviolent Communication",goodreads:"71730",copies:3},ob:{name:"One Big Happy Family",goodreads:"7479423"},pi21:{name:"Polyamory in the 21st Century",goodreads:"7773079"},ph:{name:"The Polyamory Handbook",goodreads:"3450704"},ps:{name:"Polysecure",goodreads:"52569124"},pw:{name:"Polywise",goodreads:"62998140"},rtr:{name:"Rewriting the Rules",goodreads:"36870504"},rh:{name:"The Relationship Handbook",goodreads:"2534653"},sad:{name:"Sex At Dawn",goodreads:"7640261"},sftp:{name:"Stories From The Polycule",goodreads:"25707128"},sm:{name:"Sex Matters: From Sex to Superconsciousness",goodreads:"97004"},sp:{name:"Spiritual Polyamory",goodreads:"717111"},tk:{name:"Trans-Kin",goodreads:"15841440"},wdp:{name:"What Does Polyamory Look Like?",goodreads:"8874052",copies:2},wsylip:{name:"When Someone You Love is Polyamorous",goodreads:"29633526",copies:3}};for(var code in d)d[code].image=t(470)("./".concat(code,".jpg"));var m=d,f={components:{Book:c,DonorBox:l},data:function(){return{books:m}},head:function(){return{title:"Members' page"}}},h=(t(500),Object(r.a)(f,(function(){var o=this,e=o._self._c;return e("main",[e("h2",[o._v("Members' page")]),o._v(" "),e("p",[o._v("Below you can find out how to help with our running costs, read about our private Facebook group and see what books are in our library.")]),o._v(" "),e("section",{attrs:{id:"donate"}},[e("h3",[o._v("Help with our running costs")]),o._v(" "),e("p",[o._v("Yorkshire O.P.E.N doesn't cost too much to run, but we do need to spend a little bit each month on Zoom and Meetup, and we like to buy books and resources for the library if we get chance.")]),o._v(" "),e("p",[o._v("Anything you can spare, either as a monthly donation or as a one-off, will be greatly appreciated. All donations will be spent on Yorkshire O.P.E.N!")]),o._v(" "),e("DonorBox"),o._v(" "),e("p",[o._v("If you would like to help with running events or with the admin or social media for the group, we'd love to hear more. "),e("nuxt-link",{attrs:{to:"/contact"}},[o._v("Get in touch!")])],1)],1),o._v(" "),e("section",{attrs:{id:"discord"}},[e("h3",[o._v("Discord")]),o._v(" "),o._m(0),o._v(" "),o._m(1),o._v(" "),o._m(2),o._v(" "),e("p",[o._v("We will share an invite link to the Discord group in each of our support & community events.")]),o._v(" "),e("p",[o._v("If you've been to a meetup in the past and you would like an invite link at any time, please "),e("nuxt-link",{attrs:{to:"/contact"}},[o._v("get in touch")]),o._v(".")],1)]),o._v(" "),o._m(3),o._v(" "),e("section",{attrs:{id:"library"}},[e("h3",[o._v("O.P.E.N Library")]),o._v(" "),e("p",[o._v("We have a free lending library of books and resources to help with polyamory or relationships in general. You can borrow a book for up to a year as long as we know how to get hold of you to get it back!")]),o._v(" "),e("p",[o._v("Many of the books have been donated - the presence of a book in our library does not mean we necessarily endorse its contents. Clicking on any book cover below will take you to reviews on Goodreads.")]),o._v(" "),e("p",[o._v("See below for a list of the books that are currently in our library.")]),o._v(" "),o._m(4),o._v(" "),e("div",{attrs:{id:"books"}},o._l(o.books,(function(t,code){return e("Book",o._b({key:code},"Book",t,!1))})),1)])])}),[function(){var o=this,e=o._self._c;return e("p",[o._v("As well as our monthly meetups, we keep the discussion going in between with our "),e("em",[o._v("private")]),o._v(" Discord group.")])},function(){var o=this,e=o._self._c;return e("p",[o._v("Our Discord is for "),e("b",[o._v("members only")]),o._v(": our definition of a member is anyone we've met at one of our meetups (even if it was long ago!) or someone who is considered a partner/connection/love by one of our existing members.")])},function(){var o=this,e=o._self._c;return e("p",[e("a",{attrs:{href:"https://discord.com/"}},[o._v("Discord")]),o._v(" is a community-oriented chat software that can be installed on your computer or mobile, but is also available through any web browser.")])},function(){var o=this,e=o._self._c;return e("section",{attrs:{id:"facebook"}},[e("h3",[o._v("Facebook: no more")]),o._v(" "),e("p",[o._v("We used to have a private group on Facebook. However, the number of members who do not have Facebook accounts made this gradually feel rather exclusionary. We now exclusively meet on Discord between events.")])])},function(){var o=this,e=o._self._c;return e("p",[o._v("We're also big fans of the work of "),e("b",[o._v("Meg-John Barker")]),o._v(", and many of "),e("a",{attrs:{href:"https://www.rewriting-the-rules.com/zines/",target:"_blank",rel:"noopener"}},[o._v("their zines are available free on their website")]),o._v(". Particularly relevant to this group are "),e("i",[o._v("Queer Relationships")]),o._v(" and "),e("i",[o._v("Consent Checklist")]),o._v(".")])}],!1,null,null,null));e.default=h.exports}}]);