/*
 * SmartMenus.org "common.js"
 * Depends on: jQuery
 * Copyright 2013, Vasil Dinkov, http://www.smartmenus.org
 */

$(function() {

	// SmartMenus init
	// =================================

	// Main menu
	$('#main-menu').smartmenus({
			markCurrentItem: true,
			subMenusSubOffsetX: 1,
			subMenusSubOffsetY: -1,
			showTimeout:0,
			hideTimeout:0
		})
		// do not highlight the home (SmartMenus) item
		.find('> li:first > a').removeClass('current');
	// make sure Blog item is highlighted for all blog entries
	if (/\/blog\//.test(window.location.href))
		$('#main-menu > li > a[href*="../blog/default.htm"]').addClass('current');

	// add menu show hide button on sub pages
	/*if (!$('body.home')[0] && $('#main-menu')[0]) {
		var $menuButton = $('<a href="#" class="gray-button"></a>').click(function(e) {
			var $this = $(this),
				$menu = $('#main-menu');
			if (!$this.parent().hasClass('expand')) {
				$menu.addClass('hidden');
				$this.parent().addClass('expand');
			} else {
				$menu.removeClass('hidden');
				$this.parent().removeClass('expand');
			}
			return false;
		}).prependTo($('#header >.inner')).wrap('<p id="menu-button"></p>').click();
	}*/

	// Docs menu
	var $docsMenu = $('#docs-menu');
	$docsMenu.smartmenus({
		collapsibleShowFunction: function($ul, complete) { $ul.slideDown(0, complete); },
		collapsibleHideFunction: function($ul, complete) { $ul.slideUp(0, complete); },
		hideOnClick: false
	});
	// reset menu on main menu item select
	$docsMenu.bind('select.smapi', function(e, item) {
		if ($(item).parent().parent()[0] === this && (!$(item).parent().dataSM('sub') || !$(item).parent().dataSM('sub').is(':visible')))
			$(this).smartmenus('menuHideAll');
	});

	// share buttons
	// =================================
	$('#share').mouseenter(function() {
		var $this = $(this);
		if (!$this.data('init')) {
			$this.html('<div id="fb-root"></div><div style="margin-right:15px;" class="fb-like" data-href="../../www.smartmenus.org" data-send="false" data-layout="button_count" data-width="90" data-show-faces="false" data-colorscheme="dark"></div><a href="../../https@twitter.com/share" class="twitter-share-button" data-url="../../www.smartmenus.org" data-text="Responsive and accessible jQuery website menu plugin by @vadikom" data-count="horizontal" data-related="vadikom"></a><div class="g-plusone" data-size="medium" data-href="../../www.smartmenus.org"></div>');
			(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "../../connect.facebook.net/en_US/all.js#xfbml=1&appId=141156142734726";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
			(function() {
			  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			  po.src = '../../https@apis.google.com/js/plusone.js';
			  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
			})();
			!function(e,t,n){
			var r,i=e.getElementsByTagName(t)[0];
			r=e.createElement(t);
			r.id=n;
			r.src="../../platform.twitter.com/widgets.js"
			i.parentNode.insertBefore(r,i)
			}(document,"script","twitter-wjs");

			$this.data('init', true);
		}
	});

	// newsletter email field
	// =================================
	var $email_input = $('#id_email'),
		$subscribeButton = $('<span id="subscribe-button" aria-hidden="true" data-icon="1"></span>').click(function() { if (!$(this).hasClass('disabled')) $('#newsletter').submit(); });
	$email_input.after($subscribeButton)
		.bind('keyup change', function() {
			if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test($email_input.val())) {
				$subscribeButton.attr('title', 'Subscribe').removeClass('disabled');
			} else {
				$subscribeButton.attr('title', 'Enter a valid email first').addClass('disabled');
			}
		}).keyup();

	// link contact emails
	// =================================
	$('span.contact-link').each(function() {
		var $this = $(this);
		$this.wrap('<a href="mailto:' + ($this.data('address') == 'smartmenus' ? 'smartmenus_40smartmenus.org' : $this.data('address') == 'hello' ? 'hello_40vadikom.com' : '#') + '"></a>');
	});

	// init SHJS (syntax highlighter)
	// =================================
	window.sh_highlightDocument();

	// smooth scroll on Docs page
	// =================================
	$('body.docs a').smoothScroll();

	// Google Analytics - track downloads and external links
	// =================================
	if (typeof pageTracker != 'undefined') {
		$('a').each(function() {
			var href = this.href;
			if (!href)
				return;

			var trackFileTypes = ['zip', 'gz', 'bz2', 'rar', 'pdf'],
				fileExt = href.substring(href.lastIndexOf('.') + 1),
				hrefNoProtocol = href.replace(/https?:\/\//, ''),
				domain = hrefNoProtocol.substring(0, hrefNoProtocol.indexOf('/'));

			// track downloads
			if ($.inArray(fileExt, trackFileTypes) > -1) {
				$(this).click(function() {
					pageTracker._trackEvent('Downloads', fileExt.toUpperCase() + ' files', href);
				});
			// track extrenal links
			} else if (/^http/.test(href) && domain != document.domain) {
				$(this).click(function() {
					pageTracker._trackEvent('Extrenal Links', domain, href);
				});
			}
		});
	}

});


/*!
 * Smooth Scroll - v1.4.10 - 2013-02-20
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (/blob/master/LICENSE-MIT)
 */
(function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.10",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);


/* Copyright (C) 2007, 2008 gnombat@users.sourceforge.net */
/* License: http://shjs.sourceforge.net/doc/gplv3.html */

if(!this.sh_languages){this.sh_languages={}}var sh_requests={};function sh_isEmailAddress(a){if(/^mailto:/.test(a)){return false}return a.indexOf("@")!==-1}function sh_setHref(b,c,d){var a=d.substring(b[c-2].pos,b[c-1].pos);if(a.length>=2&&a.charAt(0)==="<"&&a.charAt(a.length-1)===">"){a=a.substr(1,a.length-2)}if(sh_isEmailAddress(a)){a="mailto:"+a}b[c-2].node.href=a}function sh_konquerorExec(b){var a=[""];a.index=b.length;a.input=b;return a}function sh_highlightString(B,o){if(/Konqueror/.test(navigator.userAgent)){if(!o.konquered){for(var F=0;F<o.length;F++){for(var H=0;H<o[F].length;H++){var G=o[F][H][0];if(G.source==="$"){G.exec=sh_konquerorExec}}}o.konquered=true}}var N=document.createElement("a");var q=document.createElement("span");var A=[];var j=0;var n=[];var C=0;var k=null;var x=function(i,a){var p=i.length;if(p===0){return}if(!a){var Q=n.length;if(Q!==0){var r=n[Q-1];if(!r[3]){a=r[1]}}}if(k!==a){if(k){A[j++]={pos:C};if(k==="sh_url"){sh_setHref(A,j,B)}}if(a){var P;if(a==="sh_url"){P=N.cloneNode(false)}else{P=q.cloneNode(false)}P.className=a;A[j++]={node:P,pos:C}}}C+=p;k=a};var t=/\r\n|\r|\n/g;t.lastIndex=0;var d=B.length;while(C<d){var v=C;var l;var w;var h=t.exec(B);if(h===null){l=d;w=d}else{l=h.index;w=t.lastIndex}var g=B.substring(v,l);var M=[];for(;;){var I=C-v;var D;var y=n.length;if(y===0){D=0}else{D=n[y-1][2]}var O=o[D];var z=O.length;var m=M[D];if(!m){m=M[D]=[]}var E=null;var u=-1;for(var K=0;K<z;K++){var f;if(K<m.length&&(m[K]===null||I<=m[K].index)){f=m[K]}else{var c=O[K][0];c.lastIndex=I;f=c.exec(g);m[K]=f}if(f!==null&&(E===null||f.index<E.index)){E=f;u=K;if(f.index===I){break}}}if(E===null){x(g.substring(I),null);break}else{if(E.index>I){x(g.substring(I,E.index),null)}var e=O[u];var J=e[1];var b;if(J instanceof Array){for(var L=0;L<J.length;L++){b=E[L+1];x(b,J[L])}}else{b=E[0];x(b,J)}switch(e[2]){case -1:break;case -2:n.pop();break;case -3:n.length=0;break;default:n.push(e);break}}}if(k){A[j++]={pos:C};if(k==="sh_url"){sh_setHref(A,j,B)}k=null}C=w}return A}function sh_getClasses(d){var a=[];var b=d.className;if(b&&b.length>0){var e=b.split(" ");for(var c=0;c<e.length;c++){if(e[c].length>0){a.push(e[c])}}}return a}function sh_addClass(c,a){var d=sh_getClasses(c);for(var b=0;b<d.length;b++){if(a.toLowerCase()===d[b].toLowerCase()){return}}d.push(a);c.className=d.join(" ")}function sh_extractTagsFromNodeList(c,a){var f=c.length;for(var d=0;d<f;d++){var e=c.item(d);switch(e.nodeType){case 1:if(e.nodeName.toLowerCase()==="br"){var b;if(/MSIE/.test(navigator.userAgent)){b="\r"}else{b="\n"}a.text.push(b);a.pos++}else{a.tags.push({node:e.cloneNode(false),pos:a.pos});sh_extractTagsFromNodeList(e.childNodes,a);a.tags.push({pos:a.pos})}break;case 3:case 4:a.text.push(e.data);a.pos+=e.length;break}}}function sh_extractTags(c,b){var a={};a.text=[];a.tags=b;a.pos=0;sh_extractTagsFromNodeList(c.childNodes,a);return a.text.join("")}function sh_mergeTags(d,f){var a=d.length;if(a===0){return f}var c=f.length;if(c===0){return d}var i=[];var e=0;var b=0;while(e<a&&b<c){var h=d[e];var g=f[b];if(h.pos<=g.pos){i.push(h);e++}else{i.push(g);if(f[b+1].pos<=h.pos){b++;i.push(f[b]);b++}else{i.push({pos:h.pos});f[b]={node:g.node.cloneNode(false),pos:h.pos}}}}while(e<a){i.push(d[e]);e++}while(b<c){i.push(f[b]);b++}return i}function sh_insertTags(k,h){var g=document;var l=document.createDocumentFragment();var e=0;var d=k.length;var b=0;var j=h.length;var c=l;while(b<j||e<d){var i;var a;if(e<d){i=k[e];a=i.pos}else{a=j}if(a<=b){if(i.node){var f=i.node;c.appendChild(f);c=f}else{c=c.parentNode}e++}else{c.appendChild(g.createTextNode(h.substring(b,a)));b=a}}return l}function sh_highlightElement(d,g){sh_addClass(d,"sh_sourceCode");var c=[];var e=sh_extractTags(d,c);var f=sh_highlightString(e,g);var b=sh_mergeTags(c,f);var a=sh_insertTags(b,e);while(d.hasChildNodes()){d.removeChild(d.firstChild)}d.appendChild(a)}function sh_getXMLHttpRequest(){if(window.ActiveXObject){return new ActiveXObject("Msxml2.XMLHTTP")}else{if(window.XMLHttpRequest){return new XMLHttpRequest()}}throw"No XMLHttpRequest implementation available"}function sh_load(language,element,prefix,suffix){if(language in sh_requests){sh_requests[language].push(element);return}sh_requests[language]=[element];var request=sh_getXMLHttpRequest();var url=prefix+"sh_"+language+suffix;request.open("GET",url,true);request.onreadystatechange=function(){if(request.readyState===4){try{if(!request.status||request.status===200){eval(request.responseText);var elements=sh_requests[language];for(var i=0;i<elements.length;i++){sh_highlightElement(elements[i],sh_languages[language])}}else{throw"HTTP error: status "+request.status}}finally{request=null}}};request.send(null)}function sh_highlightDocument(g,k){var b=document.getElementsByTagName("pre");for(var e=0;e<b.length;e++){var f=b.item(e);var a=sh_getClasses(f);for(var c=0;c<a.length;c++){var h=a[c].toLowerCase();if(h==="sh_sourcecode"){continue}if(h.substr(0,3)==="sh_"){var d=h.substring(3);if(d in sh_languages){sh_highlightElement(f,sh_languages[d])}else{if(typeof(g)==="string"&&typeof(k)==="string"){sh_load(d,f,g,k)}else{throw'Found <pre> element with class="'+h+'", but no such language exists'}}break}}}};


// JavaScript syntax module
if(!this.sh_languages){this.sh_languages={}}sh_languages.javascript=[[[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/\b(?:abstract|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|final|finally|for|function|goto|if|implements|in|instanceof|interface|native|new|null|private|protected|public|return|static|super|switch|synchronized|throw|throws|this|transient|true|try|typeof|var|volatile|while|with)\b/g,"sh_keyword",-1],[/(\+\+|--|\)|\])(\s*)(\/=?(?![*\/]))/g,["sh_symbol","sh_normal","sh_symbol"],-1],[/(0x[A-Fa-f0-9]+|(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?)(\s*)(\/(?![*\/]))/g,["sh_number","sh_normal","sh_symbol"],-1],[/([A-Za-z$_][A-Za-z0-9$_]*\s*)(\/=?(?![*\/]))/g,["sh_normal","sh_symbol"],-1],[/\/(?:\\.|[^*\\\/])(?:\\.|[^\\\/])*\/[gim]*/g,"sh_regexp",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",10],[/'/g,"sh_string",11],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/\b(?:Math|Infinity|NaN|undefined|arguments)\b/g,"sh_predef_var",-1],[/\b(?:Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt)\b/g,"sh_predef_func",-1],[/\b(?:applicationCache|closed|Components|content|controllers|crypto|defaultStatus|dialogArguments|directories|document|frameElement|frames|fullScreen|globalStorage|history|innerHeight|innerWidth|length|location|locationbar|menubar|name|navigator|opener|outerHeight|outerWidth|pageXOffset|pageYOffset|parent|personalbar|pkcs11|returnValue|screen|availTop|availLeft|availHeight|availWidth|colorDepth|height|left|pixelDepth|top|width|screenX|screenY|scrollbars|scrollMaxX|scrollMaxY|scrollX|scrollY|self|sessionStorage|sidebar|status|statusbar|toolbar|top|window)\b/g,"sh_predef_var",-1],[/\b(?:alert|addEventListener|atob|back|blur|btoa|captureEvents|clearInterval|clearTimeout|close|confirm|dump|escape|find|focus|forward|getAttention|getComputedStyle|getSelection|home|moveBy|moveTo|open|openDialog|postMessage|print|prompt|releaseEvents|removeEventListener|resizeBy|resizeTo|scroll|scrollBy|scrollByLines|scrollByPages|scrollTo|setInterval|setTimeout|showModalDialog|sizeToContent|stop|unescape|updateCommands|onabort|onbeforeunload|onblur|onchange|onclick|onclose|oncontextmenu|ondragdrop|onerror|onfocus|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onpaint|onreset|onresize|onscroll|onselect|onsubmit|onunload)\b/g,"sh_predef_func",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];


// CSS syntax module
if(!this.sh_languages){this.sh_languages={}}sh_languages.css=[[[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/(?:\.|#)[A-Za-z0-9_]+/g,"sh_selector",-1],[/\{/g,"sh_cbracket",10,1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\}/g,"sh_cbracket",-2],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/[A-Za-z0-9_-]+[ \t]*:/g,"sh_property",-1],[/[.%A-Za-z0-9_-]+/g,"sh_value",-1],[/#(?:[A-Za-z0-9_]+)/g,"sh_string",-1]]];


// PHP syntax module
if(!this.sh_languages){this.sh_languages={}}sh_languages.php=[[[/\b(?:include|include_once|require|require_once)\b/g,"sh_preproc",-1],[/\/\//g,"sh_comment",1],[/#/g,"sh_comment",1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",2],[/'/g,"sh_string",3],[/\b(?:and|or|xor|__FILE__|exception|php_user_filter|__LINE__|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|each|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|for|foreach|function|global|if|isset|list|new|old_function|print|return|static|switch|unset|use|var|while|__FUNCTION__|__CLASS__|__METHOD__)\b/g,"sh_keyword",-1],[/\/\/\//g,"sh_comment",4],[/\/\//g,"sh_comment",1],[/\/\*\*/g,"sh_comment",9],[/\/\*/g,"sh_comment",10],[/(?:\$[#]?|@|%)[A-Za-z0-9_]+/g,"sh_variable",-1],[/<\?php|~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/\\(?:\\|')/g,null,-1],[/'/g,"sh_string",-2]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",5,1],[/<!DOCTYPE/g,"sh_preproc",6,1],[/<!--/g,"sh_comment",7],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",8,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",8,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",7]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",5,1],[/<!DOCTYPE/g,"sh_preproc",6,1],[/<!--/g,"sh_comment",7],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",8,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",8,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]]];


// HTML syntax module
if(!this.sh_languages){this.sh_languages={}}sh_languages.html=[[[/<\?xml/g,"sh_preproc",1,1],[/<!DOCTYPE/g,"sh_preproc",3,1],[/<!--/g,"sh_comment",4],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",5,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",5,1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",4]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]]];


/*
 * SmartMenus jQuery v0.9.0
 * http://www.smartmenus.org/
 *
 * Copyright 2013 Vasil Dinkov
 * http://vadikom.com/
 *
 * Released under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function($) {

	var menuTrees = [],
		IE = !!window.createPopup, // we need to detect old IE's, unfortunately
		IElt9 = IE && !document.defaultView,
		IElt8 = IE && !document.querySelector,
		IE6 = IE && typeof document.documentElement.currentStyle.minWidth == 'undefined',
		mouse = false, // optimize for touch by default - we will detect for mouse input
		mouseDetectionEnabled = false;

	// Handle detection for mouse input (i.e. desktop browsers, tablets with a mouse, etc.)
	function initMouseDetection(disable) {
		if (!mouseDetectionEnabled && !disable) {
			// in IE10 it's simple
			if (window.navigator.msPointerEnabled) {
				$(document).bind('MSPointerOver.smartmenus_mouse', function(e) {
					mouse = e.originalEvent.pointerType == 4;
				});
			// in other browsers, if we get two consecutive mousemoves within 2 pixels from each other and within 300ms, we assume a real mouse/cursor is present (we also reset this ontouchstart just in case)
			// in practice, this seems like impossible to trick unintentianally with a real mouse and a pretty safe detection on touch devices (even with older browsers that do not support touch events)
			} else {
				var firstTime = true,
					lastMove = null;
				$(document).bind({
					'mousemove.smartmenus_mouse': function(e) {
						var thisMove = { x: e.pageX, y: e.pageY, timeStamp: new Date().getTime() };
						if (lastMove) {
							var deltaX = Math.abs(lastMove.x - thisMove.x),
								deltaY = Math.abs(lastMove.y - thisMove.y);
	 						if ((deltaX > 0 || deltaY > 0) && deltaX <= 2 && deltaY <= 2 && thisMove.timeStamp - lastMove.timeStamp <= 300) {
								mouse = true;
								// if this is the first check after page load, check if we are not over some item by chance and call the mouseenter handler if yes
								if (firstTime) {
									var $a = $(e.target);
									if (!$a.is('a')) {
										$a = $a.parentsUntil('a').parent();
									}
									if ($a.is('a')) {
										$.each(menuTrees, function() {
											if ($.contains(this.$root[0], $a[0])) {
												this.itemEnter({ currentTarget: $a[0] });
												return false;
											}
										});
									}
									firstTime = false;
								}
							}
						}
						lastMove = thisMove;
					},
					'touchstart.smartmenus_mouse': function(e) {
						mouse = false;
					}
				});
			}
			mouseDetectionEnabled = true;
		} else if (mouseDetectionEnabled && disable) {
			$(document).unbind('.smartmenus_mouse');
			mouseDetectionEnabled = false;
		}
	};

	$.SmartMenus = function(elm, options) {
		this.$root = $(elm);
		this.opts = options;
		this.$subArrow = null;
		this.subMenus = []; // all sub menus in the tree (UL elms) in no particular order (only real - e.g. UL's in mega sub menus won't be counted)
		this.activatedItems = []; // stores last activated A's for each level
		this.visibleSubMenus = []; // stores visible sub menus UL's
		this.showTimeout = 0;
		this.hideTimeout = 0;
		this.scrollTimeout = 0;
		this.clickActivated = false;
		this.zIndexInc = 0;
		this.$firstLink = null; // we'll use these for some tests
		this.$firstSub = null; // at runtime so we'll cache them
		this.disabled = false;
		this.$disableOverlay = null;
		this.init();
	};

	$.extend($.SmartMenus, {
		hideAll: function() {
			$.each(menuTrees, function() {
				this.menuHideAll();
			});
		},
		destroy: function() {
			while (menuTrees[0]) {
				menuTrees[0].destroy();
			}
			initMouseDetection(true);
		},
		prototype: {
			init: function(refresh) {
				var self = this;

				if (!refresh) {
					menuTrees.push(this);

					if (this.$root.hasClass('sm-rtl')) {
						this.opts.rightToLeftSubMenus = true;
					}

					// init root (main menu)
					this.$root
						.data('smartmenus', this)
						.dataSM('level', 1)
						.bind({
							'mouseover.smartmenus focusin.smartmenus': $.proxy(this.rootOver, this),
							'mouseout.smartmenus focusout.smartmenus': $.proxy(this.rootOut, this)
						})
						.delegate('a', {
							'mouseenter.smartmenus': $.proxy(this.itemEnter, this),
							'mouseleave.smartmenus': $.proxy(this.itemLeave, this),
							'focus.smartmenus': $.proxy(this.itemFocus, this),
							'blur.smartmenus': $.proxy(this.itemBlur, this),
							'click.smartmenus': $.proxy(this.itemClick, this),
							'touchend.smartmenus': $.proxy(this.itemTouchEnd, this)
						});

				
					var eNamespace = '.smartmenus' + this.$root[0].id;
					// hide menus on tap or click outside the root UL
					if (this.opts.hideOnClick) {
						$(document).bind('touchstart' + eNamespace, $.proxy(this.docTouchStart, this))
							.bind('touchmove' + eNamespace, $.proxy(this.docTouchMove, this))
							.bind('touchend' + eNamespace, $.proxy(this.docTouchEnd, this))
							// for Opera Mobile < 11.5, webOS browser, etc. we'll check click too
							.bind('click' + eNamespace, $.proxy(this.docClick, this));
					}
					// hide sub menus on resize
					$(window).bind('resize' + eNamespace + ' orientationchange' + eNamespace, $.proxy(this.winResize, this));

					if (this.opts.subIndicators) {
						this.$subArrow = $('').addClass('');
						if (this.opts.subIndicatorsText) {
							this.$subArrow.html(this.opts.subIndicatorsText);
						}
					}

					// make sure mouse detection is enabled
					initMouseDetection();
				}

				// init sub menus
				this.$firstSub = this.$root.find('ul').each(function() { self.menuInit($(this)); }).eq(0);

				this.$firstLink = this.$root.find('a:first');

				// find current item
				if (this.opts.markCurrentItem) {
					var reDefaultDoc = /(index|default)\.[^#\?\/]*/i,
						reHash = /#.*/,
						locHref = window.location.href.replace(reDefaultDoc, ''),
						locHrefNoHash = locHref.replace(reHash, '');
					this.$root.find('a').each(function() {
						var href = this.href.replace(reDefaultDoc, ''),
							$this = $(this);
						if (href == locHref || href == locHrefNoHash) {
							$this.addClass('current');
							if (self.opts.markCurrentTree) {
								$this.parents('li').each(function() {
									var $this = $(this);
									if ($this.dataSM('sub')) {
										$this.children('a').addClass('current');
									}
								});
							}
						}
					});
				}
			},
			destroy: function() {
				this.menuHideAll();
				this.$root
					.removeData('smartmenus')
					.removeDataSM('level')
					.unbind('.smartmenus')
					.undelegate('.smartmenus');
				var eNamespace = '.smartmenus' + this.$root[0].id;
				$(document).unbind(eNamespace);
				$(window).unbind(eNamespace);
				if (this.opts.subIndicators) {
					this.$subArrow = null;
				}
				var self = this;
				$.each(this.subMenus, function() {
					if (this.hasClass('mega-menu')) {
						this.find('ul').removeDataSM('in-mega');
					}
					if (this.dataSM('shown-before')) {
						if (IElt8) {
							this.children().css({ styleFloat: '', width: '' });
						}
						if (self.opts.subMenusMinWidth || self.opts.subMenusMaxWidth) {
							if (!IE6) {
								this.css({ width: '', minWidth: '', maxWidth: '' }).removeClass('sm-nowrap');
							} else {
								this.css({ width: '', overflowX: '', overflowY: '' }).children().children('a').css('white-space', '');
							}
						}
						if (this.dataSM('scroll-arrows')) {
							this.dataSM('scroll-arrows').remove();
						}
						this.css({ zIndex: '', top: '', left: '', marginLeft: '', marginTop: '', display: '' });
					}
					if (self.opts.subIndicators) {
						this.dataSM('parent-a').removeClass('has-submenu').children('span.sub-arrow').remove();
					}
					this.removeDataSM('shown-before')
						.removeDataSM('ie-shim')
						.removeDataSM('scroll-arrows')
						.removeDataSM('parent-a')
						.removeDataSM('level')
						.removeDataSM('beforefirstshowfired')
						.parent().removeDataSM('sub');
				});
				if (this.opts.markCurrentItem) {
					this.$root.find('a.current').removeClass('current');
				}
				this.$root = null;
				this.$firstLink = null;
				this.$firstSub = null;
				if (this.$disableOverlay) {
					this.$disableOverlay.remove();
					this.$disableOverlay = null;
				}
				menuTrees.splice($.inArray(this, menuTrees), 1);
			},
			disable: function(noOverlay) {
				if (!this.disabled) {
					this.menuHideAll();
					// display overlay over the menu to prevent interaction
					if (!noOverlay && !this.opts.isPopup && this.$root.is(':visible')) {
						var pos = this.$root.offset();
						this.$disableOverlay = $('<div class="sm-jquery-disable-overlay"/>').css({
							position: 'absolute',
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight(),
							zIndex: this.getStartZIndex() + 1,
							opacity: 0
						}).appendTo(document.body);
					}
					this.disabled = true;
				}
			},
			docClick: function(e) {
				// hide on any click outside the menu or on a menu link
				if (this.visibleSubMenus[0] && !$.contains(this.$root[0], e.target) || $(e.target).is('a')) {
					this.menuHideAll();
				}
			},
			docTouchEnd: function(e) {
				if (!this.lastTouch) {
					return;
				}
				if (this.visibleSubMenus[0] && (this.lastTouch.x2 === undefined || this.lastTouch.x1 == this.lastTouch.x2) && (this.lastTouch.y2 === undefined || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !$.contains(this.$root[0], this.lastTouch.target))) {
					if (this.hideTimeout) {
						clearTimeout(this.hideTimeout);
						this.hideTimeout = 0;
					}
					// hide with a delay to prevent triggering accidental unwanted click on some page element
					var self = this;
					this.hideTimeout = setTimeout(function() { self.menuHideAll(); }, 350);
				}
				this.lastTouch = null;
			},
			docTouchMove: function(e) {
				if (!this.lastTouch) {
					return;
				}
				var touchPoint = e.originalEvent.touches[0];
				this.lastTouch.x2 = touchPoint.pageX;
				this.lastTouch.y2 = touchPoint.pageY;
			},
			docTouchStart: function(e) {
				var touchPoint = e.originalEvent.touches[0];
				this.lastTouch = { x1: touchPoint.pageX, y1: touchPoint.pageY, target: touchPoint.target };
			},
			enable: function() {
				if (this.disabled) {
					if (this.$disableOverlay) {
						this.$disableOverlay.remove();
						this.$disableOverlay = null;
					}
					this.disabled = false;
				}
			},
			getHeight: function($elm) {
				return this.getOffset($elm, true);
			},
			// returns precise width/height float values in IE9+, FF4+, recent WebKit
			// http://vadikom.com/dailies/offsetwidth-offsetheight-useless-in-ie9-firefox4/
			getOffset: function($elm, height) {
				var old;
				if ($elm.css('display') == 'none') {
					old = { position: $elm[0].style.position, visibility: $elm[0].style.visibility };
					$elm.css({ position: 'absolute', visibility: 'hidden' }).show();
				}
				var defaultView = $elm[0].ownerDocument.defaultView,
					compStyle = defaultView && defaultView.getComputedStyle && defaultView.getComputedStyle($elm[0], null),
					val = compStyle && parseFloat(compStyle[height ? 'height' : 'width']);
				if (val) {
					val += parseFloat(compStyle[height ? 'paddingTop' : 'paddingLeft'])
	 					+ parseFloat(compStyle[height ? 'paddingBottom' : 'paddingRight'])
	 					+ parseInt(compStyle[height ? 'borderTopWidth' : 'borderLeftWidth'])
	 					+ parseInt(compStyle[height ? 'borderBottomWidth' : 'borderRightWidth']);
				} else {
					val = height ? $elm[0].offsetHeight : $elm[0].offsetWidth;
				}
				if (old) {
					$elm.hide().css(old);
				}
				return val;
			},
			getWidth: function($elm) {
				return this.getOffset($elm);
			},
			getStartZIndex: function() {
				var zIndex = parseInt(this.$root.css('z-index'));
				return !isNaN(zIndex) ? zIndex : 1;
			},
			isCollapsible: function() {
				return this.$firstSub.css('position') == 'static';
			},
			isCSSOn: function() {
				return this.$firstLink.css('display') == 'block';
			},
			isFixed: function() {
				return this.$root.css('position') == 'fixed';
			},
			isTouchMode: function() {
				return !mouse || this.isCollapsible();
			},
			itemActivate: function($a) {
				var $li = $a.parent(),
					$ul = $li.parent(),
					level = $ul.dataSM('level');
				if (level > 1 && (!this.activatedItems[level - 2] || this.activatedItems[level - 2][0] != $ul.dataSM('parent-a')[0])) {
					// if for some reason the parent item is not activated (e.g. this is an API call to activate the item), activate all parent items first
					var self = this;
					$($ul.parentsUntil('#' + this.$root[0].id, 'ul').get().reverse()).add($ul).each(function() {
						self.itemActivate($(this).dataSM('parent-a'));
					});
				}
				// hide any visible deeper level sub menus
				if (this.visibleSubMenus.length > level) {
					for (var i = this.visibleSubMenus.length - 1, l = !this.activatedItems[level - 1] || this.activatedItems[level - 1][0] != $a[0] ? level - 1 : level; i > l; i--) {
						this.menuHide(this.visibleSubMenus[i]);
					}
				}
				// save new active item and sub menu for this level
				this.activatedItems[level - 1] = $a;
				this.visibleSubMenus[level - 1] = $ul;
				if (this.$root.triggerHandler('activate.smapi', $a[0]) === false) {
					return;
				}
				// show the sub menu if this item has one
				var $sub = $li.dataSM('sub');
				if ($sub && (this.isTouchMode() || (!this.opts.showOnClick || this.clickActivated))) {
					this.menuShow($sub);
				}
			},
			itemBlur: function(e) {
				if (this.disabled || !this.isCSSOn()) {
					return;
				}
				var $a = $(e.currentTarget);
				// neglect it if this is an A inside a mega drop-down
				if ($a.parent().parent().dataSM('level')) {
					this.$root.triggerHandler('blur.smapi', $a[0]);
				}
			},
			itemClick: function(e) {
				if (this.disabled || !this.isCSSOn()) {
					return;
				}
				var $a = $(e.currentTarget);
				if (this.$root.triggerHandler('click.smapi', $a[0]) === false) {
					return false;
				}
				var $sub = $a.parent().dataSM('sub');
				if (this.isTouchMode()) {
					// undo fix: prevent the address bar on iPhone from sliding down when expanding a sub menu
					if ($a.dataSM('href')) {
						$a.attr('href', $a.dataSM('href')).removeDataSM('href');
					}
					var prevent = $sub && (!$sub.dataSM('shown-before') || !$sub.is(':visible'));
					if (prevent) {
						this.itemActivate($a);
					}
					// if "itemActivate" couldn't show it, then the sub menus are disabled with an !important declaration (e.g. in mobile styles) so don't prevent the click
					if (prevent && $sub.is(':visible')) {
						return false;
					}
				} else if (this.opts.showOnClick && $a.parent().parent().dataSM('level') == 1 && $sub) {
					this.clickActivated = true;
					this.menuShow($sub);
					return false;
				}
				if ($a.hasClass('disabled')) {
					return false;
				}
				if (this.$root.triggerHandler('select.smapi', $a[0]) === false) {
					return false;
				}
			},
			itemEnter: function(e) {
				if (this.disabled || !this.isCSSOn()) {
					return;
				}
				var $a = $(e.currentTarget);
				// neglect it if this is a LI inside a mega drop-down or CSS is off
				if ($a.parent().parent().dataSM('level')) {
					if (!this.isTouchMode()) {
						if (this.showTimeout) {
							clearTimeout(this.showTimeout);
							this.showTimeout = 0;
						}
						var self = this;
						this.showTimeout = setTimeout(function() { self.itemActivate($a); }, this.opts.showOnClick && $a.parent().parent().dataSM('level') == 1 ? 1 : this.opts.showTimeout);
					}
					this.$root.triggerHandler('mouseenter.smapi', $a[0]);
				}
			},
			itemFocus: function(e) {
				if (this.disabled || !this.isCSSOn()) {
					return;
				}
				var $a = $(e.currentTarget);
				// neglect it if this is an A inside a mega drop-down
				if ($a.parent().parent().dataSM('level')) {
					// on touch or in collapsible mode don't activate on focus, except if it's an API call (i.e. like $(link).focus())
					if (!this.isTouchMode() || !e.originalEvent) {
						this.itemActivate($a);
					}
					this.$root.triggerHandler('focus.smapi', $a[0]);
				}
			},
			itemLeave: function(e) {
				if (this.disabled || !this.isCSSOn()) {
					return;
				}
				var $a = $(e.currentTarget);
				// neglect it if this is a LI inside a mega drop-down
				if ($a.parent().parent().dataSM('level')) {
					if (!this.isTouchMode()) {
						if ($a[0].blur) {
							$a[0].blur();
						}
						if (this.showTimeout) {
							clearTimeout(this.showTimeout);
							this.showTimeout = 0;
						}
					}
					this.$root.triggerHandler('mouseleave.smapi', $a[0]);
				}
			},
			itemTouchEnd: function(e) {
				if (this.disabled || !this.isCSSOn()) {
					return;
				}
				// prevent the address bar on iPhone from sliding down when expanding a sub menu
				var $a = $(e.currentTarget),
					$sub = $a.parent().dataSM('sub');
				if ($a.attr('href').charAt(0) !== '#' && $sub && (!$sub.dataSM('shown-before') || !$sub.is(':visible'))) {
					$a.dataSM('href', $a.attr('href'));
					$a.attr('href', '#');
				}
			},
			menuFixLayout: function($ul) {
				// fixes a menu that is being shown for the first time
				if (!$ul.dataSM('shown-before')) {
					$ul.hide().dataSM('shown-before', true);
					// fix the layout of the items in IE<8
					if (IElt8) {
						$ul.children().css({ styleFloat: 'left', width: '100%' });
					}
				}
			},
			menuHide: function($sub) {
				if (this.$root.triggerHandler('beforehide.smapi', $sub[0]) === false) {
					return;
				}
				$sub.stop(true, true);
				if ($sub.is(':visible')) {
					var complete = function() {
						// unset z-index
						if (IElt9) {
							$sub.parent().css('z-index', '');
						} else {
							$sub.css('z-index', '');
						}
					};
					// if sub is collapsible (mobile view)
					if (this.isCollapsible()) {
						if (this.opts.collapsibleHideFunction) {
							this.opts.collapsibleHideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.collapsibleHideDuration, complete);
						}
					} else {
						if (this.opts.hideFunction) {
							this.opts.hideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.hideDuration, complete);
						}
					}
					// remove IE iframe shim
					if ($sub.dataSM('ie-shim')) {
						$sub.dataSM('ie-shim').remove();
					}
					// deactivate scrolling if it is activated for this sub
					if ($sub.dataSM('scroll')) {
						$sub.unbind('.smartmenus_scroll').removeDataSM('scroll').dataSM('scroll-arrows').hide();
					}
					// unhighlight parent item
					$sub.dataSM('parent-a').removeClass('highlighted');
					var level = $sub.dataSM('level');
					this.activatedItems.splice(level - 1, 1);
					this.visibleSubMenus.splice(level - 1, 1);
					this.$root.triggerHandler('hide.smapi', $sub[0]);
				}
			},
			menuHideAll: function() {
				if (this.showTimeout) {
					clearTimeout(this.showTimeout);
					this.showTimeout = 0;
				}
				// hide all subs
				for (var i = this.visibleSubMenus.length - 1; i > 0; i--) {
					this.menuHide(this.visibleSubMenus[i]);
				}
				// hide root if it's popup
				if (this.opts.isPopup) {
					this.$root.stop(true, true);
					if (this.$root.is(':visible')) {
						if (this.opts.hideFunction) {
							this.opts.hideFunction.call(this, this.$root);
						} else {
							this.$root.hide(this.opts.hideDuration);
						}
						// remove IE iframe shim
						if (this.$root.dataSM('ie-shim')) {
							this.$root.dataSM('ie-shim').remove();
						}
					}
				}
				this.activatedItems = [];
				this.visibleSubMenus = [];
				this.clickActivated = false;
				// reset z-index increment
				this.zIndexInc = 0;
			},
			menuIframeShim: function($ul) {
				// create iframe shim for the menu
				if (IE && this.opts.overlapControlsInIE && !$ul.dataSM('ie-shim')) {
					$ul.dataSM('ie-shim', $('<iframe/>').attr({ src: 'javascript:0', tabindex: -9 })
						.css({ position: 'absolute', top: 'auto', left: 'auto', opacity: 0, border: '0' })
					);
				}
			},
			menuInit: function($ul) {
				if (!$ul.dataSM('in-mega')) {
					this.subMenus.push($ul);
					// mark UL's in mega drop downs (if any) so we can neglect them
					if ($ul.hasClass('mega-menu')) {
						$ul.find('ul').dataSM('in-mega', true);
					}
					// get level (much faster than, for example, using parentsUntil)
					var level = 2,
						par = $ul[0];
					while ((par = par.parentNode.parentNode) != this.$root[0]) {
						level++;
					}
					// cache stuff
					$ul.dataSM('parent-a', $ul.prevAll('a'))
						.dataSM('level', level)
						.parent().dataSM('sub', $ul);
					// add sub indicator to parent item
					if (this.opts.subIndicators) {
						$ul.dataSM('parent-a').addClass('has-submenu')[this.opts.subIndicatorsPos](this.$subArrow.clone());
					}
				}
			},
			menuPosition: function($sub) {
				var $a = $sub.dataSM('parent-a'),
					$ul = $sub.parent().parent(),
					level = $sub.dataSM('level'),
					subW = this.getWidth($sub),
					subH = this.getHeight($sub),
					itemOffset = $a.offset(),
					itemX = itemOffset.left,
					itemY = itemOffset.top,
					itemW = this.getWidth($a),
					itemH = this.getHeight($a),
					$win = $(window),
					winX = $win.scrollLeft(),
					winY = $win.scrollTop(),
					winW = $win.width(),
					winH = $win.height(),
					horizontalParent = $ul.hasClass('sm') && !$ul.hasClass('sm-vertical'),
					subOffsetX = level == 2 ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
					subOffsetY = level == 2 ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY,
					x, y;
				if (horizontalParent) {
					x = this.opts.rightToLeftSubMenus ? itemW - subW - subOffsetX : subOffsetX;
					y = this.opts.bottomToTopSubMenus ? -subH - subOffsetX : itemH + subOffsetY;
				} else {
					x = this.opts.rightToLeftSubMenus ? subOffsetX - subW : itemW - subOffsetX;
					y = this.opts.bottomToTopSubMenus ? itemH - subOffsetY - subH : subOffsetY;
				}
				if (this.opts.keepInViewport && !this.isCollapsible()) {
					if (this.isFixed()) {
						itemX -= winX;
						itemY -= winY;
						winX = winY = 0;
					}
					var absX = itemX + x,
						absY = itemY + y;
					if (this.opts.rightToLeftSubMenus && absX < winX) {
						x = horizontalParent ? winX - absX + x : itemW - subOffsetX;
					} else if (!this.opts.rightToLeftSubMenus && absX + subW > winX + winW) {
						x = horizontalParent ? winX + winW - subW - absX + x : subOffsetX - subW;
					}
					if (!horizontalParent) {
						if (subH < winH && absY + subH > winY + winH) {
							y += winY + winH - subH - absY;
						} else if (subH >= winH || absY < winY) {
							y += winY - absY;
						}
					}
					// do we need scrolling?
					// 0.49 added for the sake of IE9/FF4+ where we might be dealing with float numbers for "subH"
					if (mouse && (horizontalParent && (absY + subH > winY + winH + 0.49 || absY < winY) || !horizontalParent && subH > winH + 0.49)) {
						var self = this;
						if (!$sub.dataSM('scroll-arrows')) {
							$sub.dataSM('scroll-arrows', $([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], $('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]])
								.eq(0)
								.hover(function() { self.menuScroll($sub, true); }, function(e) {
									self.menuScrollStop($sub);
									self.menuScrollOut($sub, e);
								})
								.bind('mousewheel DOMMouseScroll', function(e) { e.preventDefault(); }).end()
								.eq(1)
								.hover(function() { self.menuScroll($sub); }, function(e) {
									self.menuScrollStop($sub);
									self.menuScrollOut($sub, e);
								}).bind('mousewheel DOMMouseScroll', function(e) { e.preventDefault(); }).end()
								.insertAfter($sub)
							);
						}
						// bind events to show/hide arrows on hover and save scrolling data for this sub
						var vportY = winY - (itemY + itemH);
						$sub.dataSM('scroll', {
								vportY: vportY,
								subH: subH,
								winH: winH,
								step: 1
							})
							.bind({
								'mouseover.smartmenus_scroll': function(e) { self.menuScrollOver($sub, e); },
								'mouseout.smartmenus_scroll': function(e) { self.menuScrollOut($sub, e); },
								'mousewheel.smartmenus_scroll DOMMouseScroll.smartmenus_scroll': function(e) { self.menuScrollMousewheel($sub, e); }
							})
							.dataSM('scroll-arrows').css({ top: 'auto', left: 'auto', marginLeft: x + (parseInt($sub.css('border-left-width')) || 0), width: this.getWidth($sub) - (parseInt($sub.css('border-left-width')) || 0) - (parseInt($sub.css('border-right-width')) || 0), zIndex: this.getStartZIndex() + this.zIndexInc })
							.eq(0).css('margin-top', vportY).end()
							.eq(1).css('margin-top', vportY + winH - this.getHeight($sub.dataSM('scroll-arrows').eq(1))).end()
							.eq(horizontalParent && this.opts.bottomToTopSubMenus ? 0 : 1).show();
					}
				}
				$sub.css({ top: 'auto', left: 'auto', marginLeft: x, marginTop: y - itemH });
				// IE iframe shim
				this.menuIframeShim($sub);
				if ($sub.dataSM('ie-shim')) {
					$sub.dataSM('ie-shim').css({ zIndex: $sub.css('z-index'), width: subW, height: subH, marginLeft: x, marginTop: y - itemH });
				}
			},
			menuScroll: function($sub, up, wheel) {
				var y = parseFloat($sub.css('margin-top')),
					scroll = $sub.dataSM('scroll'),
					end = scroll.vportY + (up ? 0 : scroll.winH - scroll.subH),
					step = wheel || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor($sub.dataSM('scroll').step);
				$sub.add($sub.dataSM('ie-shim')).css('margin-top', Math.abs(end - y) > step ? y + (up ? step : -step) : end);
				y = parseFloat($sub.css('margin-top'));
				// show opposite arrow if appropriate
				if (up && y + scroll.subH > scroll.vportY + scroll.winH || !up && y < scroll.vportY) {
					$sub.dataSM('scroll-arrows').eq(up ? 1 : 0).show();
				}
				// accelerate when not using mousewheel to scroll
				if (!wheel && this.opts.scrollAccelerate && $sub.dataSM('scroll').step < this.opts.scrollStep) {
					$sub.dataSM('scroll').step += 0.5;
				}
				// "y" and "end" might be float numbers in IE9/FF4+ so this weird way to check is used
				if (Math.abs(y - end) < 1) {
					$sub.dataSM('scroll-arrows').eq(up ? 0 : 1).hide();
					$sub.dataSM('scroll').step = 1;
				} else if (!wheel) {
					var self = this;
					this.scrollTimeout = setTimeout(function() { self.menuScroll($sub, up); }, this.opts.scrollInterval);
				}
			},
			menuScrollMousewheel: function($sub, e) {
				var $closestSub = $(e.target).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if ($closestSub[0] == $sub[0]) {
					var up = (e.originalEvent.wheelDelta || -e.originalEvent.detail) > 0;
					if ($sub.dataSM('scroll-arrows').eq(up ? 0 : 1).is(':visible')) {
						this.menuScroll($sub, up, true);
					}
				}
				e.preventDefault();
			},
			menuScrollOut: function($sub, e) {
				var reClass = /^scroll-(up|down)/,
					$closestSub = $(e.relatedTarget).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if (!reClass.test((e.relatedTarget || '').className) && ($sub[0] != e.relatedTarget && !$.contains($sub[0], e.relatedTarget) || $closestSub[0] != $sub[0])) {
					$sub.dataSM('scroll-arrows').css('visibility', 'hidden');
				}
			},
			menuScrollOver: function($sub, e) {
				var reClass = /^scroll-(up|down)/,
					$closestSub = $(e.target).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if (!reClass.test(e.target.className) && $closestSub[0] == $sub[0]) {
					$sub.dataSM('scroll-arrows').css('visibility', 'visible');
				}
			},
			menuScrollStop: function($sub) {
				if (this.scrollTimeout) {
					clearTimeout(this.scrollTimeout);
					this.scrollTimeout = 0;
					$sub.dataSM('scroll').step = 1;
				}
			},
			menuShow: function($sub) {
				if (!$sub.dataSM('beforefirstshowfired')) {
					$sub.dataSM('beforefirstshowfired', true);
					if (this.$root.triggerHandler('beforefirstshow.smapi', $sub[0]) === false) {
						return;
					}
				}
				if (this.$root.triggerHandler('beforeshow.smapi', $sub[0]) === false) {
					return;
				}
				this.menuFixLayout($sub);
				$sub.stop(true, true);
				if (!$sub.is(':visible')) {
					// set z-index - for IE < 9 set it to the parent LI
					var zIndex = this.getStartZIndex() + (++this.zIndexInc);
					if (IElt9) {
						$sub.parent().css('z-index', zIndex);
					} else {
						$sub.css('z-index', zIndex);
					}
					// highlight parent item
					if (this.opts.keepHighlighted || this.isCollapsible()) {
						$sub.dataSM('parent-a').addClass('highlighted');
					}
					// min/max-width fix - no way to rely purely on CSS as all UL's are nested
					if (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {
						if (!IElt8) {
							$sub.css({ width: 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');
							if (this.opts.subMenusMinWidth) {
							 	$sub.css('min-width', this.opts.subMenusMinWidth);
							}
							if (this.opts.subMenusMaxWidth) {
							 	var noMaxWidth = this.getWidth($sub);
							 	$sub.css('max-width', this.opts.subMenusMaxWidth);
								if (noMaxWidth > this.getWidth($sub)) {
									$sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);
								}
							}
						// these need special attention as always
						} else if (IE6) {
							$sub.width(this.opts.subMenusMinWidth ? this.opts.subMenusMinWidth : 1)
								.children().css('styleFloat', 'none')
								.children('a').css('white-space', 'nowrap');
							if (this.opts.subMenusMaxWidth) {
							 	var noMaxWidth = $sub.width(),
									maxWidth = $sub.css({ width: this.opts.subMenusMaxWidth, overflowX: 'hidden', overflowY: 'hidden' }).width();
								if (noMaxWidth > maxWidth) {
									$sub.css({ width: maxWidth, overflowX: 'visible', overflowY: 'visible' }).children().children('a').css('white-space', '');
								} else {
									$sub.css({ width: noMaxWidth, overflowX: 'visible', overflowY: 'visible' });
								}
							} else {
							 	$sub.width($sub.width());
							}
							$sub.children().css('styleFloat', 'left');
						} else { // IE7
							$sub.children().css('styleFloat', 'none');
							$sub.css({ width: 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');
							if (this.opts.subMenusMinWidth) {
							 	$sub.css('min-width', this.opts.subMenusMinWidth);
							}
							if (this.opts.subMenusMaxWidth) {
								var noMaxWidth = $sub.width();
								$sub.css('max-width', this.opts.subMenusMaxWidth);
								if (noMaxWidth > $sub.width()) {
									$sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);
								} else {
									$sub.width(noMaxWidth);
								}
							} else {
								$sub.width($sub.width());
							}
							$sub.children().css('styleFloat', 'left');
						}
					}
					this.menuPosition($sub);
					// insert IE iframe shim
					if ($sub.dataSM('ie-shim')) {
						$sub.dataSM('ie-shim').insertBefore($sub);
					}
					// if sub is collapsible (mobile view)
					if (this.isCollapsible()) {
						if (this.opts.collapsibleShowFunction) {
							this.opts.collapsibleShowFunction.call(this, $sub);
						} else {
							$sub.show(this.opts.collapsibleShowDuration);
						}
					} else {
						if (this.opts.showFunction) {
							this.opts.showFunction.call(this, $sub);
						} else {
							$sub.show(this.opts.showDuration);
						}
					}
					// save new sub menu for this level
					this.visibleSubMenus[$sub.dataSM('level') - 1] = $sub;
					this.$root.triggerHandler('show.smapi', $sub[0]);
				}
			},
			popupHide: function(noHideTimeout) {
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				var self = this;
				this.hideTimeout = setTimeout(function() {
					self.menuHideAll();
				}, noHideTimeout ? 1 : this.opts.hideTimeout);
			},
			popupShow: function(left, top) {
				if (!this.opts.isPopup) {
					alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				this.menuFixLayout(this.$root);
				this.$root.stop(true, true);
				if (!this.$root.is(':visible')) {
					this.$root.css({ left: left, top: top });
					// IE iframe shim
					this.menuIframeShim(this.$root);
					if (this.$root.dataSM('ie-shim')) {
						this.$root.dataSM('ie-shim').css({ zIndex: this.$root.css('z-index'), width: this.getWidth(this.$root), height: this.getHeight(this.$root), left: left, top: top }).insertBefore(this.$root);
					}
					// show menu
					if (this.opts.showFunction) {
						this.opts.showFunction.call(this, this.$root);
					} else {
						this.$root.show(this.opts.showDuration);
					}
					this.visibleSubMenus[0] = this.$root;
				}
			},
			refresh: function() {
				this.menuHideAll();
				this.$root.find('ul').each(function() {
						var $this = $(this);
						if ($this.dataSM('scroll-arrows')) {
							$this.dataSM('scroll-arrows').remove();
						}
					})
					.removeDataSM('in-mega')
					.removeDataSM('shown-before')
					.removeDataSM('ie-shim')
					.removeDataSM('scroll-arrows')
					.removeDataSM('parent-a')
					.removeDataSM('level')
					.removeDataSM('beforefirstshowfired');
				this.$root.find('a.has-submenu').removeClass('has-submenu')
					.parent().removeDataSM('sub');
				if (this.opts.subIndicators) {
					this.$root.find('span.sub-arrow').remove();
				}
				if (this.opts.markCurrentItem) {
					this.$root.find('a.current').removeClass('current');
				}
				this.subMenus = [];
				this.init(true);
			},
			rootOut: function(e) {
				if (this.isTouchMode()) {
					return;
				}
				if (e.target != this.$root[0]) {
					if (this.hideTimeout) {
						clearTimeout(this.hideTimeout);
						this.hideTimeout = 0;
					}
					if (!this.opts.showOnClick || !this.opts.hideOnClick) {
						var self = this;
						this.hideTimeout = setTimeout(function() { self.menuHideAll(); }, this.opts.hideTimeout);
					}
				}
			},
			rootOver: function(e) {
				if (this.isTouchMode()) {
					return;
				}
				if (e.target != this.$root[0]) {
					if (this.hideTimeout) {
						clearTimeout(this.hideTimeout);
						this.hideTimeout = 0;
					}
				}
			},
			winResize: function(e) {
				if (this.disabled || !this.isCSSOn()) {
					if (this.$disableOverlay) {
						var pos = this.$root.offset();
	 					this.$disableOverlay.css({
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight()
						});
					}
				// hide sub menus on resize
				// on mobile do it only on orientation change
				} else if (!this.isCollapsible() && (!('onorientationchange' in window) || e.type == 'orientationchange')) {
					if (this.activatedItems.length > 0) {
						this.activatedItems[this.activatedItems.length - 1][0].blur();
					}
					this.menuHideAll();
				}
			}
		}
	});

	$.fn.dataSM = function(key, val) {
		if (val) {
			return this.data(key + '_smartmenus', val);
		}
		return this.data(key + '_smartmenus');
	}

	$.fn.removeDataSM = function(key) {
		return this.removeData(key + '_smartmenus');
	}

	$.fn.smartmenus = function(options) {
		if (typeof options == 'string') {
			var args = arguments,
				method = options;
			Array.prototype.shift.call(args);
			return this.each(function() {
				var smartmenus = $(this).data('smartmenus');
				if (smartmenus && smartmenus[method]) {
					smartmenus[method].apply(smartmenus, args);
				}
			});
		}
		var opts = $.extend({}, $.fn.smartmenus.defaults, options);
		return this.each(function() {
			new $.SmartMenus(this, opts);
		});
	}

	// default settings
	$.fn.smartmenus.defaults = {
		isPopup:		false,		// is this a popup menu (can be shown via the popupShow/popupHide methods) or a permanent menu bar
		mainMenuSubOffsetX:	0,		// pixels offset from default position
		mainMenuSubOffsetY:	0,		// pixels offset from default position
		subMenusSubOffsetX:	0,		// pixels offset from default position
		subMenusSubOffsetY:	0,		// pixels offset from default position
		subMenusMinWidth:	'1em',		// min-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
		subMenusMaxWidth:	'100em',		// max-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
		subIndicators: 		true,		// create sub menu indicators - creates a SPAN and inserts it in the A
		subIndicatorsPos: 	'prepend',	// position of the SPAN relative to the menu item content ('prepend', 'append')
		subIndicatorsText:	'+',		// [optionally] add text in the SPAN (e.g. '+') (you may want to check the CSS for the sub indicators too)
		scrollStep: 		30,		// pixels step when scrolling long sub menus that do not fit in the viewport height
		scrollInterval:		30,		// interval between each scrolling step
		scrollAccelerate:	true,		// accelerate scrolling or use a fixed step
		showTimeout:		250,		// timeout before showing the sub menus
		hideTimeout:		500,		// timeout before hiding the sub menus
		showDuration:		0,		// duration for show animation - set to 0 for no animation - matters only if showFunction:null
		showFunction:		null,		// custom function to use when showing a sub menu (the default is the jQuery 'show')
							// don't forget to call complete() at the end of whatever you do
							// e.g.: function($ul, complete) { $ul.fadeIn(250, complete); }
		hideDuration:		0,		// duration for hide animation - set to 0 for no animation - matters only if hideFunction:null
		hideFunction:		function($ul, complete) { $ul.fadeOut(200, complete); },	// custom function to use when hiding a sub menu (the default is the jQuery 'hide')
							// don't forget to call complete() at the end of whatever you do
							// e.g.: function($ul, complete) { $ul.fadeOut(250, complete); }
		collapsibleShowDuration:0,		// duration for show animation for collapsible sub menus - matters only if collapsibleShowFunction:null
		collapsibleShowFunction:function($ul, complete) { $ul.slideDown(200, complete); },	// custom function to use when showing a collapsible sub menu
							// (i.e. when mobile styles are used to make the sub menus collapsible)
		collapsibleHideDuration:0,		// duration for hide animation for collapsible sub menus - matters only if collapsibleHideFunction:null
		collapsibleHideFunction:function($ul, complete) { $ul.slideUp(200, complete); },	// custom function to use when hiding a collapsible sub menu
							// (i.e. when mobile styles are used to make the sub menus collapsible)
		showOnClick:		false,		// show the first-level sub menus onclick instead of onmouseover (matters only for mouse input)
		hideOnClick:		true,		// hide the sub menus on click/tap anywhere on the page
		keepInViewport:		true,		// reposition the sub menus if needed to make sure they always appear inside the viewport
		keepHighlighted:	true,		// keep all ancestor items of the current sub menu highlighted (adds the 'highlighted' class to the A's)
		markCurrentItem:	false,		// automatically add the 'current' class to the A element of the item linking to the current URL
		markCurrentTree:	true,		// add the 'current' class also to the A elements of all ancestor items of the current item
		rightToLeftSubMenus:	false,		// right to left display of the sub menus (check the CSS for the sub indicators' position)
		bottomToTopSubMenus:	false,		// bottom to top display of the sub menus
		overlapControlsInIE:	true		// make sure sub menus appear on top of special OS controls in IE (i.e. SELECT, OBJECT, EMBED, etc.)
	};

})(jQuery);