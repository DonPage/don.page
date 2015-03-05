"use strict";function init(){var a,b;a=document.querySelector("#canvas"),a.className="homeCanvas",camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1e4),camera.position.z=100,scene=new THREE.Scene,renderer=new THREE.CanvasRenderer,renderer.setClearColor(16053492),renderer.setSize(window.innerWidth,window.innerHeight),a.appendChild(renderer.domElement);for(var c=(2*Math.PI,new THREE.SpriteMaterial({color:2565943,ambient:3617471,specular:3617471,shininess:250,side:THREE.DoubleSide,vertexColors:THREE.VertexColors})),d=new THREE.Geometry,e=0;77>e;e++)b=new THREE.Sprite(c),b.position.x=2.5*Math.random()-1,b.position.y=2.5*Math.random()-1,b.position.z=2.5*Math.random()-1,b.position.normalize(),b.position.multiplyScalar(2*Math.random()+200),b.scale.x=b.scale.y=.4,scene.add(b),d.vertices.push(b.position);var f=new THREE.Line(d,new THREE.LineBasicMaterial({color:2565943,opacity:.2}));scene.add(f),document.addEventListener("mousemove",onDocumentMouseMove,!1),document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1),window.addEventListener("resize",onWindowResize,!1)}function onWindowResize(){windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function onDocumentMouseMove(a){mouseX=a.clientX-windowHalfX,mouseY=a.clientY-windowHalfY}function onDocumentTouchStart(a){a.touches.length>1&&(a.preventDefault(),mouseX=a.touches[0].pageX-windowHalfX,mouseY=a.touches[0].pageY-windowHalfY)}function generateSprite(){var a=document.createElement("canvas");a.width=16,a.height=16;var b=a.getContext("2d"),c=b.createRadialGradient(a.width/2,a.height/2,0,a.width/2,a.height/2,a.width/2);return c.addColorStop(0,"rgba(39, 39, 55, 1)"),c.addColorStop(.2,"rgba(39, 39, 55, 1)"),c.addColorStop(.4,"rgba(0, 0, 55, 1)"),c.addColorStop(1,"rgba(0,0,0,.5)"),b.fillStyle=c,b.fillRect(0,0,a.width,a.height),a}function onDocumentTouchMove(){}function animate(){requestAnimationFrame(animate),render()}function render(){theta+=.03,camera.position.x=radius*Math.sin(THREE.Math.degToRad(theta)),camera.position.y=radius*Math.cos(THREE.Math.degToRad(theta)),camera.position.z=radius*Math.cos(THREE.Math.degToRad(theta))-60,camera.lookAt(scene.position),renderer.render(scene,camera)}angular.module("donSiteApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/ego",{templateUrl:"views/ego.html",controller:"EgoCtrl"}).when("/work",{templateUrl:"views/work.html",controller:"WorkCtrl"}).when("/blog/:pageNumber",{templateUrl:"views/blog.html",controller:"BlogCtrl"}).when("/blog/:pageNumber/:articleID",{templateUrl:function(a){return"articles/"+a.articleID+".html"},controller:"ArticleCtrl"}).otherwise({redirectTo:"/"})}]),console.log("nav-animation"),$(window).scroll(function(){$("#navBar").hasClass("open")&&$("#navBar").css($(this).scrollTop()<80?{position:"absolute",top:80}:{position:"fixed",top:0})});var mouseX=0,mouseY=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,SEPARATION=200,AMOUNTX=10,AMOUNTY=10,camera,scene,renderer;init(),animate();var radius=200,theta=0,pageHeight=$(window).height(),stopPoint=pageHeight-8;console.log(pageHeight),$(window).scroll(function(){$("#back2top").hasClass("showing")&&$("#back2top").css($(this).scrollTop()<80?{bottom:"-4em"}:{bottom:"0"})}),angular.module("donSiteApp").controller("MainCtrl",["$scope","siteService",function(a,b){b.closePage(),a.konami=!1,a.openKonami=function(){console.log("opening konami."),a.konami=!0};var c=[],d="38,38,40,40,37,39,37,39,66,65";window.addEventListener("keydown",function(a){c.push(a.keyCode),-1!=c.toString().indexOf(d)&&(console.log("CHEATCODE"),$("#secret-btn").fadeIn("fast"))})}]),angular.module("donSiteApp").controller("EgoCtrl",["$scope","siteService",function(a,b){b.openPage(),a.column1Array=b.getColumn1Array(),a.column2Array=b.getColumn2Array(),a.column3Array=b.getColumn3Array(),a.column4Array=b.getColumn4Array(),a.column5Array=b.getColumn5Array(),a.column6Array=b.getColumn6Array(),a.column7Array=b.getColumn7Array(),a.column8Array=b.getColumn8Array(),a.column9Array=b.getColumn9Array()}]),angular.module("donSiteApp").controller("WorkCtrl",["$scope","siteService",function(a,b){b.openPage(),a.projectArray=b.getProjects();var c="";a.activeType=function(){return c},a.changeType=function(a){c=a},a.openProject=function(a){1==$("#"+a).hasClass("isOpen")?($("#"+a).velocity({height:"5.8em"},{duration:"normal"}).removeClass("isOpen"),$("#pInfo-"+a).velocity({left:"-100%"},{duration:"slow"}),$("#pLinks-"+a).velocity({top:"-20em"},{duration:"slow"})):(1==$(".project").hasClass("isOpen")&&($(".project").velocity({height:"5.8em"},{duration:"normal"}).removeClass("isOpen"),$(".p-info").velocity({left:"-100%"},{duration:"slow"}),$(".p-links").velocity({top:"-20em"},{duration:"slow"})),$("#"+a).velocity({height:"30em"},{duration:"normal"}).addClass("isOpen"),$("#pInfo-"+a).velocity({left:"0%"},{duration:"slow"}),$("#pLinks-"+a).velocity({top:"0%"},{duration:"slow"}))},a.newTab=function(a){""!=a&&" "!=a&&window.open(a,"_blank").focus()}}]),angular.module("donSiteApp").controller("BlogCtrl",["$scope","siteService","$routeParams",function(a,b,c){b.openPage(),b.populateShadowArray(),a.pageArray=b.getArticlePages(),a.articleArray=b.getArticleArray(c.pageNumber),a.pageNum=c.pageNumber,a.articleShadowArray=b.getShadowArray()}]),angular.module("donSiteApp").controller("ArticleCtrl",["$scope","siteService","$routeParams",function(a,b,c){$(window).height();b.getCurrentArticle(c.articleID,c.pageNumber),b.openPage(),b.loadSH();var d=b.loadArticle();a.articleTitle=d.title,a.articleTags=d.tags,a.typeColor=d.typeColor,a.articleType=d.type,a.articleImg=d.img,a.authorInfo=d.author[0],$("#back2top").on("click",function(){$("html, body").animate({scrollTop:0},{duration:300,easing:"linear"})})}]),angular.module("donSiteApp").service("siteService",function(){var a=document.location.hash,b=null,c=[],d=[{title:"Karma Lounge",type:"development",bg:"http://i.imgur.com/yUFAOn8.png",key:"karmalounge",link:"",githubLink:"https://github.com/DonPage/Bracket-Server",imageLink:"",video:"videos/karmalounge-vid.webm",videoLink:"http://youtu.be/alEgC9ynb6U",blogLink:"",penLink:"",desc:"Karma Lounge is real time feed of bets, matches, and trades in GuildWars2 & Twitch. NodeJS was used to read twitch chat (IRC). Firebase for the realtime data syncing with backend servers. Angular used to make this project at SPA (single page application)."},{title:"Angular Labs",type:"design",bg:"http://i.imgur.com/XHm9Rs1.png",key:"angularlabs",link:"",githubLink:"",imageLink:"http://i.imgur.com/XHm9Rs1.png",video:"",videoLink:"",blogLink:"",penLink:"",desc:"With my love for angular I decided to make a logo for my future angular blog? Maybe? Adobe Illustrator used for this design."},{title:"Source Box",type:"design",bg:"http://i.imgur.com/tjSbD7l.png",key:"sourcebox",link:"",githubLink:"https://github.com/adamgedney/yootunes.com/graphs/contributors",imageLink:"http://i.imgur.com/tjSbD7l.png",video:"",videoLink:"",blogLink:"",penLink:"",desc:"This is the logo I created for one of my personal projects, a voice recognition twitch bot (under construction), competitor to NightBot. Adobe Illustrator was used to create this logo."},{title:"Scotch",type:"contributions",bg:"http://scotch.io/wp-content/themes/thirty/img/scotch-home.jpg",key:"scotchmaterial",link:"",githubLink:"",imageLink:"",video:"",videoLink:"",blogLink:"http://buff.ly/U7fpiI",penLink:"http://codepen.io/DonPage/pen/zhpEt",desc:"With the buzz around Material/Paper elements, ScotchIO did an amazing tutorial on the Input Boxes in CSS3. For my contribution I decided to fork off there codepen example and add in forum validation. Forked version has nearly 1,000 views & was added to the blog post."},{title:"Atom Player",type:"contributions",bg:"http://i.imgur.com/sVCr7H4.png",key:"atomplayer",link:"http://atomplayer.com/",githubLink:"https://github.com/adamgedney/yootunes.com/graphs/contributors",imageLink:"",video:"",videoLink:"",blogLink:"",penLink:"",desc:"AtomPlayer is a music player. What's special about this project? You can select songs to play on one device and hear the music on another. I forked off the main repo and added quality of life changes; Song loop, playlist loop, etc."}],e=[[{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"}],[{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"}],[{skillName:"Jquery",skillDesc:"Jquery is life.",skillImg:"#jquery-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"Illustrator",skillDesc:"Making SVGs the easy way",skillImg:"#ai-patt"},{skillName:"Firebase",skillDesc:"my data stay synced",skillImg:"#firebase-patt"}],[{skillName:"Photoshop",skillDesc:"",skillImg:"#ps-patt"},{skillName:"Parfait",skillDesc:"Extract your design from PSD",skillImg:"#parfait-patt"},{skillName:"CSS3",skillDesc:"",skillImg:"#css3-patt"},{skillName:"Bower",skillDesc:"Dependencies dependencies...",skillImg:"#bower-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"}],[{skillName:"WebStorm",skillDesc:"Underrated IDE for javascript",skillImg:"#ws-patt"},{skillName:"HTML5",skillDesc:"Keepin' up with the standards!",skillImg:"#html5-patt"},{skillName:"SASS",skillDesc:"Can't live without this preprocessor.",skillImg:"#sass-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"}],[{skillName:"Javascript",skillDesc:"Let's change the world, one line at a time.",skillImg:"#js-patt"},{skillName:"Angular",skillDesc:"My preferred MVC framework",skillImg:"#angular-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"}],[{skillName:"Terminal",skillDesc:"Nerd!",skillImg:"#terminal-patt"},{skillName:"HandleBars",skillDesc:"Templating like a boss.",skillImg:"#handlebars-patt"},{skillName:"Git",skillDesc:"Version control baby.",skillImg:"#git-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"}],[{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"}],[{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"},{skillName:"",skillDesc:"",skillImg:"#nothing-patt"}]],f=[[{ID:"inspiration",img:"images/devart.png",title:"Inspiration",typeImg:"",type:"Blog",typeColor:"#70c989",tags:["Inspiration","Blog"],author:[{name:"Don Page",title:"Web Developer",avatar:"http://xcellis.com/wp-content/uploads/2013/09/avatar-placeholder-300x284.png"}]}]];this.getArticleArray=function(a){return f[a-1]},this.populateShadowArray=function(){c=[];for(var a=0;a<f.length;a++)for(var b=0;b<f[a].length;b++)c.push(f[a][b])},this.getArticlePages=function(){return console.log(f),f},this.getColumn1Array=function(){return e[0]},this.getColumn2Array=function(){return e[1]},this.getColumn3Array=function(){return e[2]},this.getColumn4Array=function(){return e[3]},this.getColumn5Array=function(){return e[4]},this.getColumn6Array=function(){return e[5]},this.getColumn7Array=function(){return e[6]},this.getColumn8Array=function(){return e[7]},this.getColumn9Array=function(){return e[8]},this.getColumn10Array=function(){return e[9]},this.getTest=function(){return"GOT TEST FROM SERVICE!"},this.closePage=function(){a=document.location.hash,console.log("closing page!"),$(".overlay").fadeOut("fast"),$("#small-logo").fadeOut("fast"),$("#navBar").velocity({top:"100%"},{duration:600}).velocity({top:"-=7em"},{duration:400}).removeClass("open"),$("#back2top").removeClass("showing")},this.openPage=function(){a=document.location.hash,$(".overlay").fadeIn("fast"),$("#navBar").addClass("open").velocity({top:80}),$("#back2top").addClass("showing"),$("#view-page").velocity({delay:50}).velocity("transition.slideUpIn",900),$(".homeCanvas").velocity({height:"150"}),$("footer").velocity("transition.slideUpIn",900)},this.loadSH=function(){$("pre code").each(function(a,b){hljs.highlightBlock(b)})},this.getArticle=function(a){document.location.hash="/blog/"+a},this.getShadowArray=function(){return c},this.getCurrentArticle=function(a,c){for(var d=0;d<f[c-1].length;d++){if(f[c-1][d].ID==a){b=f[c-1][d];break}console.log("didn't find match")}},this.loadArticle=function(){return b},$(".overlay").on("click",function(){document.location.hash="goingHome"}),this.getProjects=function(){return d},this.getType=function(a){return a}});