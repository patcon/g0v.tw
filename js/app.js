require.register("config.jsenv",function(t,e,n){n.exports={BUILD:"git-40930a3"}});var deferSrcSetters,show;deferSrcSetters=[],angular.element(document).ready(function(){var t,e,n,r,o=[];for(t=0,n=(e=deferSrcSetters).length;n>t;++t)r=e[t],o.push(r());return o}),angular.module("g0v.tw",["firebase","btford.markdown","pascalprecht.translate"]).config(["$httpProvider","$translateProvider"].concat(function(t,e){var n;return t.defaults.useXDomain=!0,delete t.defaults.headers.common["X-Requested-With"],e.useStaticFilesLoader({prefix:"/translations/",suffix:".json"}),n=window.location.pathname.split("/")[1],(n.match("html")||document.title.match("找不到"))&&(n=window.navigator.userLanguage||window.navigator.language),"zh-TW"===n||"en-US"===n?e.preferredLanguage(n):void 0})).factory({fireRoot:["angularFireCollection"].concat(function(){var t;return t="https://g0vfeedthefire.firebaseio.com",new Firebase(t)})}).factory({eventsPromise:["$http"].concat(function(t){var e,n;return e="http://www.kimonolabs.com/api/dzdrrgx6",n={params:{apikey:"c626b7443a0cbcb5525f492411d10567",callback:"JSON_CALLBACK"}},t.jsonp(e,n).then(function(t){var e,n,r,o;return e=t.data.results,n=function(t){return{link:t.event.href,title:t.event.text}},r=e.recent.map(n),o=e.past.map(n),{recent:r,past:o}})})}).directive("deferSrc",function(){return{restrict:"A",link:function(t,e){var n;return n=e.attr("defer-src"),deferSrcSetters.push(function(){return e.attr("src",n)})}}}).controller({EventCtrl:["$scope","eventsPromise"].concat(function(t,e){return e.then(function(e){var n,r;return n=e.recent.map(function(t){return t.finished=!1,t}),r=e.past.map(function(t){return t.finished=!0,t}),t.events=n.concat(r)})})}).controller({BlogCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(t,e,n){return t.articles=e(n.child("feed/blog/articles").limit(2))})}).controller({FeaturedCtrl:["$scope","angularFireCollection"].concat(function(t,e){var n;return n=new Firebase("https://g0vhub.firebaseio.com/projects"),t.projects=e(n),t.nextProject=function(){return void 0!==t.idx?($("#prj-img").css("opacity",0),++t.idx,t.idx%=t.featured.length):void 0},t.$watch("projects.length",function(){var e,n,r,o,i;for(e=[],n=0,o=(r=t.projects).length;o>n;++n)i=r[n],i.thumbnail&&e.push(i);return t.featured=e,t.idx=Math.floor(Math.random()*t.featured.length)}),t.$watch("idx",function(e,n){return void 0!==n?t.project=t.featured[n]:void 0})})}).controller({CommuniqueCtrl:["$scope","$http","$element","$sce"].concat(function(t,e,n,r){return e.get("http://g0v-communique-api.herokuapp.com/api/1.0/entry/all?limit=50").success(function(e){return t.idx=0,t.nextCommunique=function(){return void 0!==t.idx?(++t.idx,t.idx%=e.length):void 0},t.$watch("idx",function(n,o){var i,a,c,u;for(o=t.idx,void 0!==o&&(t.communique=e[o]),i=0,c=(a=t.communique.urls).length;c>i;++i)u=a[i],t.communique.content=t.communique.content.replace(u.name,'<a target="_blank" href="#url.url">'+u.name+"</a>");return t.communique.content=r.trustAsHtml(t.communique.content)})}).error(function(e,n){return t.communique.content=r.trustAsHtml(n)})})}).controller({BuildIdCtrl:["$scope"].concat(function(t){var e;return e=require("config.jsenv"),t.buildId=e.BUILD})}).controller({langCtrl:["$scope","$window"].concat(function(t,e){return t.changeLang=function(t){var n;return n=e.location.pathname.split("/")[2],e.location.href="/"+t+"/"+n}})}),show=function(){var t,e;return t=$("#prj-img"),t.animate({opacity:1},500),e=[40+t.height()][0],$("#prj-img-div").animate({height:e+"px"},500)},$(function(){return $(".ui.dropdown").dropdown({on:"hover",transition:"fade"}),$(function(){return $(".navbar-wrapper").stickUp({parts:{0:"openGov",1:"openData",2:"socEngage",3:"newMedia",4:"policyFeedback",5:"comCollaboration"},itemClass:"menuItem",itemHover:"active",topMargin:"auto"}),$(function(){return $('a[href^="#"]').bind("click.smoothscroll",function(t){var e;return t.preventDefault(),e=this.hash,$("html, body").stop().animate({scrollTop:$(e).offset().top},900,"swing",function(){return window.location.hash=e})}),$(function(){return $(".navbar-wrapper").stickUp({parts:{0:"newtalks",1:"talkvideo",2:"alltalks",3:"invitetalks"},itemClass:"menuItem",itemHover:"active",topMargin:"auto"}),$(function(){$(".item .meta").each(function(){var t,e;if(t=$(this),e=/\d{4}\/\d{1,2}\/\d{1,2}$/.exec(t.text())){if(30<moment().diff(moment(e[0]),"days"))return;return t.closest(".item").addClass("recent-talk")}})})})})})});