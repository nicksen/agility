var pages=pages||{};pages.timer=pages.timer||function(){function n(){$.get("./javascripts/templates/mobster.mustache").success(function(n){j=n}).then(t)}function t(){T=$(".counter"),x=T.find(".counter-text"),w=$("input.period"),U=$(".nav-timer"),L=$(".nav-timer-stop"),O=$(".nav-timer-play"),G=$(".nav-timer-pause"),Y=$(".nav-timer-settings"),R=$(".add-mobster"),B=$(".mobster-container"),N=$("title"),I=$(".turn-text"),M=[],q=0,T.bind("click",function(){J===F.STOPPED?u():J===F.PAUSED?d():J===F.PLAYING&&l()}),L.bind("click",P),O.bind("click",function(){J===F.STOPPED?u():d()}),G.bind("click",l),Y.bind("click",l),R.bind("click",e),window.Notification&&Notification.requestPermission(),P()}function e(){var n=M.length,t=$(Mustache.render(j,{id:n})),e={root:t,name:t.find(".mobster-control-name")[0],disabled:!1};t.find(".mobster-control-turn").bind("click",function(){e.disabled||(q=e.root.index(),m())}),t.find(".mobster-control-up").bind("click",function(){var n=e.root.index();if(0!==n){var t=M[n-1];e.root.after(t.root),M[n]=M[n-1],M[n-1]=e}}),t.find(".mobster-control-down").bind("click",function(){var n=e.root.index();if(n!==M.length){var t=M[n+1];e.root.before(t.root),M[n]=M[n+1],M[n+1]=e}}),t.find(".mobster-control-disable").bind("click",function(){e.disabled||e===M[q]?(e.disabled=!1,e.root.removeClass("disabled")):(e.disabled=!0,e.root.addClass("disabled"))}),M.push(e),B.append(e.root)}function o(){var n=w[0].value.split(":");return 60*parseInt(n[0],10)+parseInt(n[1],10)}function i(){z=o()}function r(){return getComputedStyle(T[0])["background-color"]}function a(){if("granted"===Notification.permission){var n="Click here and step away from the keyboard.";b()&&(n+="\n"+M[q].name.value+" is next"),C=new Notification("It's time to rotate!",{body:n,icon:"./images/rotate.png",vibrate:[200,100,200]}),C.onclick=function(){window.focus(),C.close()}}$("audio.alert")[0].play()}function c(n){x.text(n),s()}function s(){var n=["["+x.text()+"]"];b()&&n.push(p()+"'s Turn"),n.push("- Agility Timer"),N.text(n.join(" "))}function u(){g(F.PLAYING),i(),c(A(z)),T.css({"background-color":H.START,transition:"none"}),m(),E()}function l(){J===F.PLAYING&&(g(F.PAUSED),T.css({"background-color":r()}),S())}function d(){g(F.PLAYING),T.css({"background-color":H.END,transition:"background-color "+z+"s"}),E()}function f(){g(F.STOPPED),S(),c("Rotate"),v(),a()}function b(){return M.filter(function(n){return!n.disabled}).length>=2}function m(){if(M.forEach(function(n){n.root.removeClass("active")}),b()){var n=M[q];I.text(n.name.value+"'s Turn"),n.root.addClass("active")}else I.empty();s()}function v(){if(b()){do q++,q>=M.length&&(q=0);while(M[q].disabled);I.text(p()+" is next")}else I.empty();s()}function p(){return M[q].name.value}function P(){g(F.STOPPED),S(),c("Start"),T.removeAttr("style")}function g(n){T.removeClass(J),J=n,T.addClass(n);var t;switch(n){case F.PLAYING:t=O;break;case F.PAUSED:t=G;break;case F.STOPPED:t=L}k(t),C&&C.close()}function k(n){U.children().each(function(){$(this).removeClass("active")}),n.addClass("active")}function h(){z===o()&&T.css({"background-color":H.END,transition:"background-color "+z+"s"}),z--,c(A(z)),0===z&&f()}function E(){y&&clearInterval(y),y=setInterval(h,1e3)}function S(){clearInterval(y),y=null}function A(n){var t=Math.floor(n/60),e=n%60;return D(t)+":"+D(e)}function D(n){return(10>n?"0":"")+n}var T,N,x,I,y,C,w,O,G,L,Y,U,R,j,B,M,q,z=0,F={STOPPED:"stopped",PLAYING:"playing",PAUSED:"paused"},H={START:"#71B284",END:"#B22727"},J=F.STOPPED;return{init:n}}(),pages.timer.init();