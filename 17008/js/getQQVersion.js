BizQQWPA.define("wpa.getQQVersion","globalSettings,lang.browser,util.events",function(require){var globalSettings=require("globalSettings"),browser=require("browser"),events=require("events");var version;return function(callback){if(typeof version!=="undefined"){callback(version);return}if(browser.msie){try{var xmlhttp=new ActiveXObject("TimwpDll.TimwpCheck");version=xmlhttp.GetHummerQQVersion()}catch(e){version=null}callback(version);return}if(browser.mozilla||browser.webkit){var body=document.getElementsByTagName("body")[0],iframe=document.createElement("iframe"),proxyPage=globalSettings.srcRoot+globalSettings.srcPath+"/wpa/getQQVersion.html";iframe.style.display="none";events.addEvent(window,"message",function(event){if(event.origin!=="http://combo.b.qq.com"){return}version=event.data;callback(version);events.removeEvent(window,"message",arguments.callee);iframe.parentNode.removeChild(iframe)});iframe.src=proxyPage;body.insertBefore(iframe,body.firstChild);return}version=null;callback(version)}});