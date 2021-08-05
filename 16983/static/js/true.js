function p1(bookName, appstoreurl1, appstoreurl2) {

    dp_url = new Array(2);
    dp_url[0] = appstoreurl1;
    dp_url[1] = appstoreurl2;
    dp_txt = decodeURI('%E5%90%AC%E9%9F%B3%E9%A2%91%E6%9B%B4%E8%BD%BB%E6%9D%BE%EF%BC%81');
    dp_txt2 = decodeURI('%E4%B8%8B%E8%BD%BD%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BD%93%E9%AA%8C%E6%9B%B4%E5%A5%BD');
    var index = Math.floor(Math.random() * dp_url.length);
    var url = dp_url[index];

    var bd = document.getElementsByTagName('body')[0];
    if (Math.random() > .5) { bd.classList.add('gs-top') } else { bd.classList.add('gs-bottom') }

    var html = '<style> body.gs-top { padding-top: 70px; } body.gs-bottom { padding-bottom: 70px; } body.gs-top .web-wrapper { bottom: auto; top: 0px; } .web-wrapper { width: 100%; right: 0px; bottom: 0px; position: fixed; overflow: auto; z-index: 10020; } .web-wrapper * { display: block; } .web-wrapper .web-info { display: flex; height: 50px; border-radius: 5px; margin: 10px; color: #fff; background: #d4e9f2; background-image: linear-gradient(90deg, #86d797, #d4e9f2); } .web-wrapper .web-icon { width: 50px; height: 50px; background: url(http://s.kjcdn.com/es/resource/imgs/read/icon.png) 5px 5px no-repeat; background-size: 40px; } .web-wrapper .web-txt { flex: 1; line-height: 22px; padding: 3px 10px; color: #484747; } .web-wrapper .h4 { font-size: 16px; } .web-wrapper .p { font-size: 12px; } .web-wrapper .web-play { width: 50px; height: 50px; background: url(http://s.kjcdn.com/es/resource/imgs/read/pause.png) no-repeat center; background-size: 35px auto; } </style> <div class="web-wrapper" onclick="window.location.href=\'' + url + '\'"> <section class="web-info"> <span class="web-icon"></span> <div class="web-txt"> <h4 class="h4">' + dp_txt + '</h4> <p class="p">' + dp_txt2 + '</p> </div> <span class="web-play"></span> </section> </div>';


    return html;

}
function p2(bookName, appstoreurl1, appstoreurl2) {
    dp_url = new Array(2);
    dp_url[0] = appstoreurl1;
    dp_url[1] = appstoreurl2;
    dp_txt = decodeURI('%E7%AC%94%E8%B6%A3%E9%98%81APP');
    dp_txt2 = decodeURI('%E4%B8%8D%E6%83%B3%E9%94%99%E8%BF%87');
    dp_txt3 = decodeURI('%E6%9B%B4%E6%96%B0%EF%BC%9F%E5%AE%89%E8%A3%85%E4%B8%93%E7%94%A8APP%EF%BC%8C%E4%BD%9C%E8%80%85%E6%9B%B4%E6%96%B0%E7%AB%8B%E5%8D%B3%E6%8E%A8%E9%80%81!');
    dp_txt4 = decodeURI('%E7%82%B9%E5%87%BB%E5%AE%89%E8%A3%85');

    var index = Math.floor(Math.random() * dp_url.length);
    var url = dp_url[index];

    var bd = document.getElementsByTagName('body')[0];
    // if (Math.random() > .5) { bd.classList.add('gs-top') } else { bd.classList.add('gs-bottom') }
    bd.classList.add('gs-top')

    var html = '<style> body.gs-top { padding-top: 105px; } body.gs-bottom { padding-top: 105px; } .web-wrapper { width: 100%; right: 0px; top: 0px; position: fixed; overflow: auto; z-index: 10020; } .web-wrapper * { display: block; } .web-wrapper .web-box { border-radius: 10px; overflow: hidden; margin: 10px; -webkit-animation-name: fadeIn; animation-name: fadeIn; -webkit-animation-duration: .3s; animation-duration: .3s; -webkit-animation-delay: 1s; animation-delay: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both; } .web-wrapper .web-top { display: flex; line-height: 30px; color: #2a6a6d; padding: 8px 10px; border-bottom: 1px solid #cee4ec; background: #d2e8f1; background: rgb(212, 233, 242, .99);} .web-wrapper .web-logo { width: 30px; height: 30px; border-radius: 5px; margin-right: 10px; overflow: hidden; } .web-wrapper .web-name { flex: 1; } .web-wrapper .web-time { font-size: 13px; } .web-wrapper .web-bottom { padding: 8px 10px; color: #1b1f1f; line-height: 22px; background: #d0e6f0; background: rgb(212, 233, 242, .97);} @-webkit-keyframes fadeIn { 0% { opacity: .5; -webkit-transform: translateY(-150%); -ms-transform: translateY(-150%); transform: translateY(-150%) } to { opacity: 1; -webkit-transform: translateY(0%); -ms-transform: translateY(0%); transform: translateY(0%) } } @keyframes fadeIn { 0% { opacity: .5; -webkit-transform: translateY(-150%); -ms-transform: translateY(-150%); transform: translateY(-150%) } to { opacity: 1; -webkit-transform: translateY(0%); -ms-transform: translateY(0%); transform: translateY(0%) } } </style> <div class="web-wrapper" onclick="window.location.href=\'' + url + '\'"> <section class="web-box"> <div class="web-top"> <img src="http://file.market.xiaomi.com/thumbnail/PNG/l96/AppStore/02a3975147578427e19e304b72bed17fadeb479a2" class="web-logo"> <div class="web-name">' + dp_txt + '</div> <span class="web-time">' + dp_txt4 + '</span> </div> <div class="web-bottom">' + dp_txt2 + bookName + dp_txt3 + '</div> </section> </div>';
    return html;

}
function p3(bookName, appstoreurl1, appstoreurl2) {
    var dp_url = new Array(2);
    dp_url[0] = appstoreurl1;
    dp_url[1] = appstoreurl2;
    var dp_txt1 = decodeURI('%E6%97%A0%E5%B9%BF%E5%91%8A%E9%98%85%E8%AF%BB');
    var dp_txt2 = decodeURI('%E6%9C%AC%E5%B0%8F%E8%AF%B4%E5%B7%B2%E5%8E%BB%E9%99%A4%E5%B9%BF%E5%91%8A%EF%BC%8C%E6%8F%90%E5%8D%87%E9%98%85%E8%AF%BB%E6%B5%81%E7%95%85%E5%BA%A6');
    var dp_txt3 = decodeURI('%E7%AC%94%E8%B6%A3%E9%98%81APP');
    var index = Math.floor(Math.random() * dp_url.length);
    var url = dp_url[index];

    var bd = document.getElementsByTagName('body')[0];
    // if (Math.random() > .5) { bd.classList.add('gs-top') } else { bd.classList.add('gs-bottom') }
    bd.classList.add('gs-bottom')

    var html = '<style> body.gs-bottom { padding-bottom: 102px; } .web-wrapper { width: 100%; right: 0px; bottom: 0px; position: fixed; overflow: auto; z-index: 10020; border-radius: 10px 10px 0 0; overflow: hidden; -webkit-animation-name: fadeIn; animation-name: fadeIn; -webkit-animation-duration: .3s; animation-duration: .3s; -webkit-animation-delay: 1s; animation-delay: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both; background: #182432; } .web-wrapper * { display: block; } .web-wrapper .web-bottom { display: flex; line-height: 30px; color: #fff; padding: 10px; } .web-wrapper .web-logo { width: 30px; height: 30px; border-radius: 5px; margin-right: 10px; overflow: hidden; } .web-wrapper .web-name { flex: 1; } .web-wrapper .web-txt { color: #16ab84; } .web-wrapper .web-top { text-align: center; font-size: 12px; color: #68707b; padding-bottom: 5px; } .web-wrapper .web-tit { font-size: 16px; color: #fff; padding: 10px 0 5px; } .web-wrapper .web-close { width: 15px; height: 15px; background: url("https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/baiduappAdCloseWhite_b84ffa8.png") center center no-repeat; background-size: contain; position: absolute; top: 10px; right: 10px; } @-webkit-keyframes fadeIn { 0% { opacity: .5; -webkit-transform: translateY(150%); -ms-transform: translateY(150%); transform: translateY(150%) } to { opacity: 1; -webkit-transform: translateY(0%); -ms-transform: translateY(0%); transform: translateY(0%) } } @keyframes fadeIn { 0% { opacity: .5; -webkit-transform: translateY(150%); -ms-transform: translateY(150%); transform: translateY(150%) } to { opacity: 1; -webkit-transform: translateY(0%); -ms-transform: translateY(0%); transform: translateY(0%) } } </style> <div class="web-wrapper" onclick="window.location.href=\'' + url + '\'"> <i class="web-close"></i> <div class="web-top"> <main class="web-tit">' + dp_txt1 + '</main> <p class="web-desc">' + dp_txt2 + '</p> </div> <div class="web-bottom"> <img src="http://file.market.xiaomi.com/thumbnail/PNG/l96/AppStore/02a3975147578427e19e304b72bed17fadeb479a2" class="web-logo"> <div class="web-name">' + dp_txt3 + '</div> <span class="web-txt">' + dp_txt1 + ' &gt;</span> </div> </div>';
    return html;

}
function p4(bookName, appstoreurl1, appstoreurl2) {
    var dp_url = new Array(2);
    dp_url[0] = appstoreurl1;
    dp_url[1] = appstoreurl2;
    var dp_txt1 = decodeURI('%E4%B8%80%E9%94%AE%E5%90%AC%E4%B9%A6');
    var index = Math.floor(Math.random() * dp_url.length);
    var url = dp_url[index];

    var bd = document.getElementsByTagName('body')[0];
    if (Math.random() > .5) { bd.classList.add('gs-top') } else { bd.classList.add('gs-bottom') }

    var html = '<style> @-webkit-keyframes fadeIn { 0% { opacity: .5; -webkit-transform: translateX(150%); -ms-transform: translateX(150%); transform: translateX(150%) } to { opacity: 1; -webkit-transform: translateX(0%); -ms-transform: translateX(0%); transform: translateX(0%) } } @keyframes fadeIn { 0% { opacity: .5; -webkit-transform: translateX(150%); -ms-transform: translateX(150%); transform: translateX(150%) } to { opacity: 1; -webkit-transform: translateX(0%); -ms-transform: translateX(0%); transform: translateX(0%) } } .web-wrapper { display: -ms-flexbox; display: flex; -ms-flex-align: center; align-items: center; position: fixed; right: 10px; bottom: 72px; z-index: 9999;-webkit-animation-name: fadeIn; animation-name: fadeIn; -webkit-animation-duration: .3s; animation-duration: .3s; -webkit-animation-delay: 1s; animation-delay: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both;} .web-wrapper .web-listen { position: relative; width: 50px; height: 50px; border-radius: 50%; background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAFNpgC8AAAAAXNSR0IArs4c6QAACMBJREFUaAXVWn2MnEUZn5ndvT3a3t3ugVrbSm/3rlBAG40x0T9EFCWN0Yga8J/iIbndwjVINWrw+xIrCf/YVmpL7w6DRRLEYIyIxi9oBJTEAE0IULhPoTVHofdu7w646+77jr9n9mZu3ndn9/b2runxJu/N8/3MM/PMMzPvHmOLPZM9HdKWieI2T8FevuProoI6T5AB22+Ysu+qZi34Vm/n+wg2zJlTJzOauebgyKsaZl6uwzcIgChu8xZgr6cj0Ji8tSupYFcsXi5zlLkYpKF6ZzM1bLqtfeg2zri4E0hKE9oHxzm0ZrgmUDuZy/YyGfzCpmmYFDSs2sl89nb0shgiOhDdt7JSZBod8oZEinGNwdMs4N+kB8a6Nc1uVSycx6WcTxPtltrp3i2X2cIEa76GzdDBggp0XfKicWJGH8TdNpW/5KIovW48NIx2N0IWhOht7x89FKIRQgomcyJcyq4KgxWEiBKhNI+FfMd3CBZeT3Y3Z/yfhNR6MBWJIGCUViwuWbC3IkVqaYNnhnwRuRBbZQRlA+a52D4w1hLiziPgHwF4vc4G5Qn9bY6tW7PZNSDTua4rIHwDyWiDpntte5+f1ES7LTG/08YJNkpRhsa5YG9rWLdKCXl18Zv5y96riXYbSP4S4bKvzzgQariD4IWzwey4a+iRPq9gHh8unLy3iOV/mAyEco8I0QdlsxsL4ACTcl2Up3DOZ7hku9KDY0ec/Hmi05HXkzklmXwXyUBgVMTE9rbDo0MuQ1O57CW+DP6Mac4qec5PYXbeE5UNOcIC8KCQIuPpwfGK2Ykqu3DYGCGnsFGAjbSWMY50/qSv+UicX//b0C6ghett5YPXxby//qdE8noO1Qzr7UQkWtqX64SMkw2+LqWiQYTKoXKEeqna1KHnPBJciSe971iB7GAYY9QqBwSc68dsF+RIz5PtVI+xTXPBLl1bLuTINqoVactpOTj0oq0UhQu57JcDHEXocdkg+ooMHarAW2Ss1rMijoIYryhuUadqHaESTKASVKxmEraHIqps43qobRrBnPM5u45H+e9M3JQfV/e93R9MsZnCPVhwX3LxiYZheYitbevRi9Ml53Qi8x9OeMHpV6Cw3qVUhTaRFhdezPufrjggVjhBrfsEytBRbYgL8c10/+hejUdbL5/9hgyCny3Q+ZXtg2OPL+Bqe1lAsbXewoLgIFEwDHuQHT9c4NaGCj2ZPQGT3ycpIdjNqf5xtZMSbiLBeXBrKTirVns8wbe2HhpT+zUJ1ftM3ZK5tFSUx0netmEWpnaAXfPTjTggw6RH+gRrZwQrJ14+c4AQxPVC6vDoPxTc4B+lDzukjtPYz40ZWrXVVq4RWiJg2xTTt3aVDxicq11uibaqiiNxlD06+4vS2/4dSpKz26tqNMKYt1cKij8VuIdsJxsiiD3ZiK1qOoLJJxQP9gVncgMhrRewZ6spNEJvTcaPkR7WyAahDxnswh0V5aAR45ZO+QrNpKDrLOqfWuFzRkCyVwWL3dA2OPyUoS0CTO3s+pjvl36NUrFRiUqGE69s4pwFZjHispA0L5NdPiv9u7Aze/UithXby3V+seSX/kWnTMtGk9Y1Tmgn1C/S7x4SkH7wFy1Yq5XS/53ic/6gtpHedKM6jxHdOLGNpPpHc4Trg5vNqwXjHvYVF9/pBJGoeXIpNEJzOmnEUC2d8+cEGWL2mVo9rJdHkaiNCteAh0iJLpUo/fcTDE9Lmht8Mbqb9Ok9c/JXdyl7jL3GqUpiw3qdCNFHxPg1qcNjf4vSo3ghl8kFUvZH6YQnePz9orX/5Tea402baMOinuP1sUrHErH4FfU4IEOpgbGBGAohsvINWuHllw8lmhKXtwwMP08y5/xZsQmmL0NTs/JTuFZcjeHYCsNb0Pt2vC1UatDOItIZFOTTGLVhrMTjOA/8vbWJP8bvGl6om8sIuaFg5Le2rfWmpncj/b6Nbw9ty/AfVuX8DNL6zjRP78dhdNFrUFhZLYgoyY3T5xseBL/H8vmQW4KM8WHsKo8AOoaz5EQQiIlEomlibal56s34bGuxeHa9EMF6fFVbj++wZOez2Hm6qtrj7JlkInZt6MN0NWHQF52ZyZ7MLiyAfUiV0A0XqthG2Z62TZt/yfuOLvtcRVeKM+z0Tfiu9QPM9ia7z0jPouT8NufXT0uwajCFnZnP4Fb9p1AQnE9Bgb7v/cGycU5A1NUvIIAjCKxVO0BQJS749mrH6opg6EeJwon/PmdPP4QKsQT/aKOHf92ZRlq6nfhF+RTS2/yGgKCGUhs3b0NG0Ld584SCoeN4cdYfDo8G250eGN9vNM4TgIvnbaiE+4x7FIs4T3TRvqJpJhi1wKUcCaeV+Hz7wOgftfD5brEdfw6F42HdD1pLSRnLrhkcPkE0c4rhgbwvEsiO1RQIdVb1h4sdBNOD/ibmWOm+MjYfTCGf6cEauVITUb0ehaI6zGjaammpX9Q/3R+spau8ndmvEa5mJpCsWzPLbax8IQ8TVw/GY+rEZzrkyxsJ1mm2zTAASC6ftvHVBiOLngn1icsPEF4OxqrlRExv+KpaUASvxiedFK9F+qWOVHpmIrzVjU7PCeevfJEjSjkI78S9Pr4EVI0I9Rz3ef4jnAT2VBVqkIGd/8dY1H211HEpcrIbmhk44yiLP8FGZqqK0/oSiTgHHl8skFomnTNT7bv+9M2d7y6WfJOv2JE/eaa3s6vt4MhwLSf18Lx857Uy8C+1ZZPNyY1rD7z0P5tGMN1hKXui9CXNTMvdI6cqDYhElLZSuCuQWraXFEwtQ8vlIW1Ly7WxaoKJsWDZ3zVXTTBSxlYmGLr02FNMJ2gb17Drvx78knTXSa1UZ+v66ZMKjkt9+vUH0i66ugIUch134Hz2XZdALRoG4XHsNeaAWku2Hh5+OR2yL4X16JAM+nEE/ehWaZYaGP8efs36OIjmolPLEOTm8C8ku1YyEPKH/yLZAtt1H3IhW8SMdlMgtfr7juT9H3FQUSQ2tfSvAAAAAElFTkSuQmCC") center center no-repeat; background-size: 16px; box-shadow: 0 2px 8px 1px rgba(0,0,0,.08); } .web-wrapper .web-ani { margin-left: -10px; width: 106px; overflow: hidden; border-radius: 0 16px 16px 0; box-shadow: 0 2px 8px 0 rgba(0,0,0,.08); } .web-wrapper .web-bar { display: -ms-flexbox; display: flex; -ms-flex-align: center; align-items: center; float: right; padding-left: 20px; height: 32px; background: #fff; white-space: nowrap; } .web-wrapper .web-text { -ms-flex-negative: 0; flex-shrink: 0; font-size: 14px; color: #ee6420; } .web-wrapper .web-close { -ms-flex-negative: 0; flex-shrink: 0; margin: 0 10px; width: 10px; height: 10px; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAEFCu8CAAAAAXNSR0IArs4c6QAAAeZJREFUSA2tV71OwzAQriNWNqayt30vNsrISqXAKwAb79V2bx+g7An3mX7WxfYlF0Sl6uzz93O2L1G7OB6Pz4v8s9/v+zy38CcjNcHLAaXTChMSixwSRRIEnUzjw+HQKrU0FMCpkdmdAD5SVgZgbjab+5jDIgFJUqOxmC9ANn76vn8MIXxSgflBpdoiXM1DQsqA7CCDViR3kFyv11sNqo3zuqISklTMSVgrSBoEohawCIP6KSClYwsd5t4txJPSJeUVUDxFqyQCCgEhnLQDgVakAO7qlBrFQqu8EFvZ9zfaY+l1hBvuXL63UQvEKTJLRFQF/Pa2RTZJVKg5T5Jq5DFStXN0yVbnpIeOjogAc249MQUR5clxxycXZO1OsSLW9lQ7sAGxRiLAJI+RTLKHVCPHF5J15CQwqgf8HJ8OWVhi0StAIU/EjnBLV+w5Nk6W/BdjS3PQqRbIsxNipjQGhl4ScTpOGRFbNeSiR8SDoR7iqCGBNVGsqWZw37vL0DJGfm5nuw3zXbKIuaaThrkRdrRarZ5gJD8F3+ceq2lYM7LeyXOwheEcsj5WjD3cZOgB5wbWfEwryD28dl33QvLcriMvj3hh53fcNM3bjQAv8j3L5EuaYZcT/zqXwvE3Ar9ct9dNPcj48gOWfUjk0Kf49AAAAABJRU5ErkJggg==") no-repeat 50%/cover; } </style> <div class="web-wrapper" onclick="window.location.href=\'' + url + '\'"> <div class="web-listen"></div> <div class="web-ani"> <div class="web-bar"> <span class="web-text">' + dp_txt1 + '</span> <i class="web-close"></i> </div> </div> </div>';
    return html;

}
function p5(bookName, appstoreurl1, appstoreurl2) {
    var dp_url = new Array(2);
    dp_url[0] = appstoreurl1;
    dp_url[1] = appstoreurl2;
    var dp_txt1 = decodeURI('%E6%83%B3%E8%BE%B9%E7%9C%8B%E5%B0%8F%E8%AF%B4%EF%BC%8C%E8%BE%B9%E8%B5%9A%E9%92%B1%EF%BC%9F');
    var dp_txt2 = decodeURI('%E6%9D%A5%E7%AC%94%E8%B6%A3%E9%98%81APP%E5%B0%B1%E5%AF%B9%E5%95%A6%EF%BD%9E');
    var dp_txt3 = decodeURI('%E5%8E%BB%E8%AF%95%E8%AF%95');
    var index = Math.floor(Math.random() * dp_url.length);
    var url = dp_url[index];

    var bd = document.getElementsByTagName('body')[0];
    if (Math.random() > .5) { bd.classList.add('gs-top') } else { bd.classList.add('gs-bottom') }

    var html = '<style>body.gs-top { padding-top: 90px; } body.gs-bottom { padding-bottom: 90px; } body.gs-top .web-wrapper { bottom: auto; top: 0px; } .web-wrapper { width: 100%; position: fixed; right: 0px; bottom: 0px; z-index: 9999;} .web-wrapper * { display: block; } .web-wrapper .web-box { margin: 10px;  display: flex; justify-content: space-between; align-items: center; padding: 10px; border-radius: 10px; background: #fff; box-shadow: rgba(5, 24, 74, 0.3) 0px 0px 6px 0px; position: relative;} .web-wrapper .web-red { position: relative; width: 50px; height: 50px; border-radius: 50%; background: #fff url("https://www.114la.com/static/upd/202006/08100911f376381e.gif") center center no-repeat; background-size: 40px; } .web-wrapper .web-txt { flex: 1; line-height: 22px; padding: 3px 10px; color: #484747; } .web-wrapper .h4 { font-size: 16px; } .web-wrapper .p { font-size: 14px; } .web-wrapper .web-btn { height: 30px; line-height: 30px; padding: 0 14px; border-radius: 15px; color: #fff; background: rgb(248, 103, 89);} .web-wrapper .web-close { position: absolute; top: 0px; right: 0px; width: 26px; height: 26px; background: url(https://mat1.gtimg.com/rain/bailing20/44d6ab40d963.red_app_close.png) 0px center / 100% no-repeat; } @media screen and (max-width: 340px) { .web-wrapper .h4 { font-size: 14px; } } </style> <div class="web-wrapper" onclick="window.location.href=\'' + url + '\'"> <section class="web-box"> <p class="web-red"></p> <div class="web-txt"> <h4 class="h4">' + dp_txt1 + '</h4> <p class="p">' + dp_txt2 + '</p> </div> <span class="web-btn">' + dp_txt3 + '</span> <i class="web-close"></i> </section> </div>';
    return html;
}
function p6(bookName, appstoreurl1, appstoreurl2) {
    var dp_url = new Array(2);
    dp_url[0] = appstoreurl1;
    dp_url[1] = appstoreurl2;
    var index = Math.floor(Math.random() * dp_url.length);
    var url = dp_url[index];

    var bd = document.getElementsByTagName('body')[0];
    if (Math.random() > .5) { bd.classList.add('gs-top') } else { bd.classList.add('gs-bottom') }

    var html = '<style> .web-wrapper { width: 100%; width: 58px; padding: 10px 4px 10px 10px; position: fixed; right: 0px; bottom: 196px; z-index: 9999;} .web-wrapper * { display: block; } .web-wrapper .web-img { max-width: 100%;} </style> <div class="web-wrapper" onclick="window.location.href=\'' + url + '\'"> <img class="web-img" src="http://n.sinaimg.cn/sinanews/228/w110h118/20200630/d16f-ivrxcex6261902.gif"> </div>';
    return html;
}
function p7(bookName, appstoreurl1, appstoreurl2) {
    var dp_url = new Array(2);
    dp_url[0] = appstoreurl1;
    dp_url[1] = appstoreurl2;
    var dp_txt1 = decodeURI('%E8%AF%B4%E8%AF%B4%E4%BD%A0%E5%AF%B9');
    var dp_txt2 = decodeURI('%E7%9A%84%E7%9C%8B%E6%B3%95');
    var index = Math.floor(Math.random() * dp_url.length);
    var url = dp_url[index];

    var bd = document.getElementsByTagName('body')[0];
    // if (Math.random() > .5) { bd.classList.add('gs-top') } else { bd.classList.add('gs-bottom') }
    bd.classList.add('gs-bottom')

    var html = '<style> body.gs-bottom { padding-bottom: 44px; } .web-wrapper { position: fixed; width: 100%; left: 0; bottom: 0; z-index: 10 } .web-wrapper * { display: block; } .web-wrapper .fl_words_box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 6px 0; background: #f5f4f4; text-align: right; height: 44px; max-width: 750px; position: relative; margin: 0 auto } .web-wrapper .fl_words_box, .web-wrapper .fl_words_input { -webkit-box-sizing: border-box; box-sizing: border-box } .web-wrapper .fl_words_input { height: 30px; width: 200px; font-size: 14px; padding: 0 5px; margin: 0 0 0 10px; border: 1px solid #e9e9e9; border-radius: 3px; line-height: 30px; text-align: left; color: #aaa; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1 1; flex: 1 1; -webkit-appearance: none; cursor: pointer }  .web-wrapper .fl_words_num { position: absolute; height: 18px; padding: 0 4px; background: #fe350e; border-radius: 12px; border: 2px solid #fff; font-size: 12px; color: #fff; left: 15px; top: -10px; z-index: 33; } .web-wrapper .fl_fun { white-space: nowrap; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; float: right; } .web-wrapper .fl_fun { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row } .web-wrapper .fl_words_ic { position: relative; margin: 0 8px; cursor: pointer; width: 30px; height: 30px; background-size: 30px; border-radius: 5px; } .web-wrapper .fl_words_ic.fi-1 { background-image: url("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDIwIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOTY4NjhCOEI2RDExMUVBQTA4MkUzRERFRDI3QThDMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOTY4NjhCOUI2RDExMUVBQTA4MkUzRERFRDI3QThDMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5NjY0NUZGQjZEMTExRUFBMDgyRTNEREVEMjdBOEMwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ5NjY0NjAwQjZEMTExRUFBMDgyRTNEREVEMjdBOEMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgG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");} .web-wrapper .fl_words_ic.fi-2 { background-image: url("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDIwIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOTY4NjhDMEI2RDExMUVBQTA4MkUzRERFRDI3QThDMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOTY4NjhDMUI2RDExMUVBQTA4MkUzRERFRDI3QThDMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5Njg2OEJFQjZEMTExRUFBMDgyRTNEREVEMjdBOEMwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ5Njg2OEJGQjZEMTExRUFBMDgyRTNEREVEMjdBOEMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgG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");} .web-wrapper .fl_words_ic.fi-3 { background-image: url("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDIwIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOTZBMEI1NUI2RDExMUVBQTA4MkUzRERFRDI3QThDMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOTZBMEI1NkI2RDExMUVBQTA4MkUzRERFRDI3QThDMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5NkEwQjUzQjZEMTExRUFBMDgyRTNEREVEMjdBOEMwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ5NkEwQjU0QjZEMTExRUFBMDgyRTNEREVEMjdBOEMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgG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");} </style> <section class="web-wrapper" onclick="window.location.href=\'' + url + '\'"> <section class="fl_words_box"> <p class="fl_words_input ">' + dp_txt1 + bookName + dp_txt2 + '</p> <ul class="fl_fun"> <li href="javascript:;" class="fl_words_ic fi-1"><em class="fl_words_num">99+</em></li> <li href="javascript:;" class="fl_words_ic fi-2"></li> <li href="javascript:;" class="fl_words_ic fi-3"></li> </ul> </section> </section>';
    return html;
}
function p8(bookName, appstoreurl1, appstoreurl2) {
    var dp_url = new Array(2);
    dp_url[0] = appstoreurl1;
    dp_url[1] = appstoreurl2;
    var index = Math.floor(Math.random() * dp_url.length);
    var url = dp_url[index];
    var dp_txt1 = decodeURI('%E6%89%8B%E6%9C%BA%E7%9C%8B%E5%B0%8F%E8%AF%B4%EF%BC%8C%E5%B0%B1%E7%94%A8%E7%AC%94%E8%B6%A3%E9%98%81APP');
    var dp_txt2 = decodeURI('%E5%9C%A8APP%E5%86%85%E6%89%93%E5%BC%80');
    var dp_txt3 = decodeURI('%E7%82%B9%E5%87%BB%E4%B8%8B%E8%BD%BDAPP');

    var bd = document.getElementsByTagName('body')[0];
    if (Math.random() > .5) { bd.classList.add('gs-top') } else { bd.classList.add('gs-bottom') }

    var html = '<style>body.gs-top { padding-top: 98px; } body.gs-bottom { padding-bottom: 98px; } body.gs-top .web-wrapper { bottom: auto; top: 0px; }  .web-wrapper { position: fixed; width: 100%; left: 0; bottom: 0; z-index: 10; background: #fff url(https://g1.dfcfw.com/g4/202006/20200618161031.png) no-repeat;background-size: cover; text-align: center; }.web-wrapper * { display: block; } .web-wrapper .web-top { padding: 10px 0 8px 0;} .web-wrapper .web-logo { display: inline-block; vertical-align: middle; width: 36px; height: 36px; border-radius: 5px; margin-right: 6px;} .web-wrapper .web-bottom { padding: 0 0 10px 0 ;} .web-wrapper .web-btn { display: inline-block; border-radius: 20px;padding: 6px 20px; background: #fff; border: 1px solid #000; margin: 0 20px;} .web-wrapper .web-btn:last-child { background: #05a7ff; color: #fff; border-color: #05a7ff;} </style> <section class="web-wrapper" onclick="window.location.href=\'' + url + '\'"> <div class="web-top"> <img src="http://file.market.xiaomi.com/thumbnail/PNG/l96/AppStore/02a3975147578427e19e304b72bed17fadeb479a2" class="web-logo">' + dp_txt1 + '</div> <div class="web-bottom"> <span class="web-btn">' + dp_txt2 + '</span> <span class="web-btn">' + dp_txt3 + '</span> </div> </section>';
    return html;
}


function getSuijiLunbo(bookName, sitename, type, hidden) {
    if(type == 1){
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            tipios = new Array(6);
            tipios[0] = 'https://apps.apple.com/cn/app/id1493908580';
            tipios[1] = 'https://apps.apple.com/cn/app/id1493908580';
            tipios[2] = 'https://apps.apple.com/cn/app/id1490746965';
            tipios[3] = 'https://apps.apple.com/cn/app/id1490746965';
            tipios[4] = 'https://apps.apple.com/cn/app/id1490746965';
            tipios[5] = 'https://apps.apple.com/cn/app/id1493908580';
            index = Math.floor(Math.random() * tipios.length);

            var appstoreurl1 = tipios[index];
            var appstoreurl2 = tipios[index];
        }
        else if (/(Android)/i.test(navigator.userAgent)) {
            var appstoreurl1 = 'https://appdowns.cdn.bcebos.com/tg/bqg_tg6.apk';
            var appstoreurl2 = 'https://appdowns.cdn.bcebos.com/tg/bqg_tg6.apk';
        }else {
            console.log('pc端');
            return false
        }

        var hr = Math.ceil(Math.random() * 8);
        // hr = 8;
        var html = window['p' + hr](bookName, appstoreurl1, appstoreurl2);
        html = formatHtml(html);
        document.write(html);
    }else if(type == 2){
        if(!hidden){
            _f(bookName, sitename)
        }
    }
}


function formatHtml(html) {
    html = html.replaceAll('web-wrapper', getRandomName(4, 6));
    html = html.replaceAll('web-', getRandomName(4, 6));

    var tagArr = html.match(/<\w+\s/ig);
    for (var i in tagArr) {
        if (tagArr[i] !== '<img ' && tagArr[i] !== '<svg ' && tagArr[i] !== '<use ') {
            var tag = tagArr[i];
            var tagEnd = '</' + tag.slice(1, -1) + '>';
            var newTag = getRandomName(4, 6, 'tag');
            html = html.replaceAll(tag, '<' + newTag + ' ');
            html = html.replaceAll(tagEnd, '</' + newTag + '>');
        }
    }
    var wpdiv = '', wparr = [], wplen = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
    for (var j = 0; j < wplen; j++) {
        var wptag = getRandomName(4, 6, 'tag');
        wparr.push(wptag)
        wpdiv += '<' + wptag + '>';
    }
    html = wpdiv + html;
    for (var k = wparr.length - 1; k >= 0; k--) {
        html += '</' + wparr[k] + '>';
    }
    return html;
}
function getRandomName(min, max, type) {
    var rule1 = 'bcefghijklmnopqrstuvwxyz';
    var rule2 = 'bcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var rule3 = 'bcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var len = Math.floor(Math.random() * (max - min + 1)) + min;
    if (type == 'tag') {
        var cname = '';
        for (var i = 0; i < len; i++) {
            cname += rule1.charAt(Math.random() * (rule1.length - 1))
        }
    } else {
        var cname = rule2.charAt(Math.random() * (rule2.length - 1))
        for (var i = 0; i < len; i++) {
            cname += rule3.charAt(Math.random() * (rule3.length - 1))
        }
    }
    return cname;
}

String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}

function ggf1(bookName, sitename, appstoreurl) {
    dp_img = new Array(4);
    dp_img[0] = 'https://mgzs.cdn.bcebos.com/hf/gx.jpg';
    dp_img[1] = 'https://mgzs.cdn.bcebos.com/hf/ts.jpg';
    dp_img[2] = 'https://mgzs.cdn.bcebos.com/hf/xz.jpg';
    dp_img[3] = 'https://mgzs.cdn.bcebos.com/hf/xz.jpg';
    index1 = Math.floor(Math.random() * dp_img.length);
    var appimg = dp_img[index1];
    var txt = decodeURI('%e7%94%a8');
    var txt1 = decodeURI('%e4%b8%93%e7%94%a8APP%e7%9c%8b');
    var txt2 = decodeURI('%e8%af%ad%e9%9f%b3%e6%9c%97%e8%af%bb');
    var txt3 = decodeURI('%e6%87%92%e4%ba%ba%e5%90%ac%e4%b9%a6%e5%bf%85%e5%a4%87');
    var txt4 = decodeURI('%e5%a4%9a%e7%a7%8d%e6%a8%a1%e5%bc%8f%e5%8f%af%e9%80%89');
    var txt5 = decodeURI('%e7%a6%bb%e7%ba%bf%e7%bc%93%e5%ad%98');
    var txt6 = decodeURI('%e4%b8%80%e9%94%ae%e4%b8%8b%e8%bd%bd%e7%bc%93%e5%ad%98');
    var txt7 = decodeURI('%e6%96%ad%e7%bd%91%e7%85%a7%e6%a0%b7%e9%98%85%e8%af%bb');
    var txt8 = decodeURI('%e4%ba%91%e7%ab%af%e4%b9%a6%e6%9e%b6');
    var txt9 = decodeURI('%e8%b4%a6%e5%8f%b7%e4%b9%a6%e6%9e%b6%e5%90%8c%e6%ad%a5');
    var txt10 = decodeURI('%e9%98%85%e8%af%bb%e8%bf%9b%e5%ba%a6%e4%b8%8d%e4%b8%a2%e5%a4%b1');
    var txt11 = decodeURI('%e7%82%b9%e5%87%bb%e4%b8%8b%e8%bd%bd%e5%ae%89%e8%a3%85%e4%b8%93%e7%94%a8');



    document.write('<a href="' + appstoreurl + '" style="text-decoration:none;"><div style="width:100%;background-color:#ffe07a;"><div style="padding:50px 15px 15px;"><div style="color:#976114;font-size:17px;text-align:center;padding:10px;font-weight:700;">' + txt + sitename + txt1 + '<' + bookName + '></div><div style="display:flex;background:#fff;border-radius:5px;margin-top:30px;padding-bottom:20px;"><div style="flex:1;text-align:center;padding-top:30px;position:relative;"><div style="color: #303741;font-size:16px;font-weight:700;padding-bottom:5px;">' + txt2 + '</div><p style="color:#8f96a0;font-size:12px;line-height:1.4;">' + txt3 + '<br>' + txt4 + '</p><div style="position:absolute;top:-22px;left:0;font-size:0;width:100%;display:flex;justify-content:center;"><img style="width:44px;height:44px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAABGdBTUEAALGPC/xhBQAAAXpQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAA/+Ov/+Ku/96g//Lb/92g/8ts/+a5//Xi//36/9mT/+e7//Lc/9qW/+vI//fp//v0/+a3/+nC/+nB/+zI//fq/9qX//La/+7Q/9B4//nt/9OC/9yc//HX//78/8Zb/+Gp/8RW/9+j//nw/92f/8ll/8hj//js/9mS/9WI//7+/9F8/893/8RY/96j/8Va/9SE//z4/9ya/+W1//jr/+zJ/8RX/892/9OB/8xu//nv//79/8JR/85z//ry/+W2/8Zd//37/8NU/+Cn/////8JQeQeohQAAADl0Uk5TD2e4ucZmED1Zmu/IGBZki9arUtL98VjFCX+iEYz8PwqdEgJLbPmIycQySQgcDJTt/rZ1AQTs6N8A2+U86gAABTNJREFUeNrVnGdX3DoQhk2H0OtSEnoJbWELC7fXQCgBQidAAqF3yLLNWP/9LqQw47aWJS9z3y8c7ZHGzxFWG81YmXCn8qKKyupcX+34WE/P2HitL7e6sqKo3KUxhb9JWXFJ6QvNVC9KS4rLPIfoqPFXaRlU5a/p8A6isSHwSnOkV4GGRi8gQq3t9RqH6ttbQ5IhBrvHNW6Ndw9KhBgORjRXigSHJUG0NI1orjXS1CIBorNAAOERo6BTFKK/TxNWX78QRKG/TpOgOr/iHmIgoklSZMAlRLh31Nrq54vF87Plg9udpKomd24Pls/OFy8+W9cf7Q27gRh6bWUwtbqxf8VMdLW/sZqyavV6iB+ia8zcVnz65pDZ6PBmOm7ecqyLFyJo+q9Ize2pLKPUvTnT/hgNckGEXpoZ2TpKModKHm2ZWXgZcg4RbjYx8Gllk3Foc+WTiZHmsFOItoCx9Zd5lXFKnf9itBNocwbR5jM0jSaOmQsdJ6IGU742JxBhYz8sxJhLxX419kU4M0TI8D6ktu+Ya91tGwZKcygjhGFcvLtmQrp+ZxgjmSCC+haX60xQ65d6m0F7iC79HPWBSdAH/azVZQcxpJur13aZFO2u6WbwIWuIsG7NOj1hknRyqlvNwpYQvbjm2/dMmt6/xbZ7rSAG8AtxKpEhTYH7YnTAHKIQ76PWTphUneD3IlJoCuHHHbbLJGsX2/ebQfTXyR+bdiO1rt8I0Yn39pfMA+FZq6/TAJGDKkytewGxjmfwAj1ECzpnpa6ZJ7pGq9lIiw6iCTFuM4+0jR7ThCGGUUcs3HkFcbeAumIYQaDFMxpjnikWNVlOv0IMonkqwTxUAs1YgwCiG+1pj72EOEa73+4niBDyBb1hnmoeeZRCPyBa0flC9RZCReeR1h8Q7fDnFeaxVuDT2r9DNELf4Nam1xCb8IRY3/gNogGiHTHPdQSf1/ANAp52UvZn3o8zS448M0uzH21Oy3DyDnyF6IC+4kl7hrhjB1HchmIOeqA7HiFqYNs9W4gZDjfVrLWZPViv5hEC7qji9uNziQNiyWaUxvEOKw1R5XzG5vLY2diZhjcTDxBlsOFNdiBuYL2yNEQxHBuH2YE4hOOjOA1RAsqrLDsQbBXUK0lDlILyRrYgNkC90jQEvFPbzxbEPry9m1DKoa/4KlsQV9ADXa4UgdIFyxYEuwAVi5QKUFoUg/gn5nwrsgjaVSiVoHQuBPELz0p6DhpWKtWgdCYC8SfXOeEMtKxW8kBpWQTij4cKf//719Mv9zaWlkHLPCUflA5EIB4e+ZPhFysdgHr5Si0o3QpC/B51DHEL6tUqcLe/IwjxRnMMsQP3/Qp0GiYFIe4f/97fO4BIQoei0gNKqgyIp2p2ECpo2UMDgsS/g8SLSWKI+mROVj+7mqx8Su7zT9u5NBYweUv5b+6XchKbGhLbOxIbXRJbfhqHHxLHQBIHYhKuARJOEhruIg7H2SwHxAyX4wy5EOeeyYXI5UyddehMneF0ptJwK5NwsJO4aqBx6YKvn+af5/qJxEUcjStJEpezNK6pSVzY0whdmCjAAXfPEsRBI5yFRGAPjRAnGsFeJMLeaAQA0giFJBEUSiM8lkagsEnI9JRoyPQUd8g0jeBxyWH0C67C6GkkFNBIraCRZEIj3cY68WjSWeLRpIzEI7sUrESmFKyEtBQsGsloNNLyaCQoykzVLPy/J60+nEdyRNN3c4TTd2kkMhNJ6SaS3E4kzZ/IBw+ofPqBykcw8OdA8vK/fw4kP0/kcyD/AeZijxx0t7lmAAAAAElFTkSuQmCC"></div></div><div style="flex:1;text-align:center;padding-top:30px;position:relative;"><div style="color: #303741;font-size:16px;font-weight:700;padding-bottom:5px;">' + txt5 + '</div><p style="color:#8f96a0;font-size:12px;line-height:1.4;">' + txt6 + '<br>' + txt7 + '</p><div style="position:absolute;top:-22px;left:0;font-size:0;width:100%;display:flex;justify-content:center;"><img style="width:44px;height:44px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAABGdBTUEAALGPC/xhBQAAAf5QTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAA/8NT/9SF/+vH/9J+/9iQ/9uY/81v/8pn/9eM//bl/9J//92g//bm/9qV/9uZ/+7O/9WH/+e8/+Sz//DU//Lb//Th/9eN/851/96g//Lc/8df/8po/+e6/9F7/8tr/9SG/+Cm/81w//Xk/+Co//DW/8tq/8hh//Pd/9iR/9iP/+7P//z3//Pe/+Ow/9qW/8NV//nt/9J9/891/+3M/9+l//Pc//DV//36/+rD/+Sy//v2//fp//HZ//v0/8JS/+a3/+zI/+vI//fq/9qX/9B4/9SE/8Zb/9OB/8RY/8JR//La/92f/893/9+j//HX/8Va/96j/85z/+7Q/8RW/9mS/+Gp/9OC//nw/9F8/+zJ//ry//js/9ya/+W1/892/8xu//z4/9yc//nv/8RX/9WI//jr//79/8ll//78/+W2//7+/8Zd//37/8NU/+Cn/////8JQwiHVxAAAADl0Uk5TD2fGubhmEBbIWe8Ymj1ki9arUhHEDAkcbIhL/BICSZ3F0vkIWArxfz/Jooz9MpQBBHXt37bs6P4AgIUQBAAABiVJREFUeNrVnHV720gQxhVmbrABh6GJIXzYY2ZmKrdXCjTQNJyGueEYY7vStzwnaXKzlmTPCJ7be//bPJr1L5J2d3Z2RkK3NiVlZGblxFsq2zqqqjraKi3xOVmZGUkaOxPoJmkp6cmpoqJSk9NT0kyHKM21ZotRlG3NLTUPoqCm/aKI0sX2mgIzIGwNFXUiQXUVDTaDIaqL2kSy2oqqDYTId3SKmtTpyDcIIq++VdSs1vo8AyDKEnQgnGAklOmFaGkUdauxRRdEorVZNEDNVkE7RHmnaJA6yzVC2Iu71Hs9ci1ub63O7Hr8waDfszuzurW96DpSv76r2K4FovCCWoeB2ZX1Q0lBh+srswE1qwuFdIiSDuW+NgfHJ6QImhgf3FS27CihQjgUH0VgyBmUoiroHFK8H10OEoTtklIna/N+CSn//JpSD5dseAh7k0IHz/aXJIKW9p8pdNJkx0LUtsutD0aCElHBkQN5P+21OIhai8zU7ZuTNGjO55Z1ZanFQNjl92FqQdKohU/l98IeHcImex8C05OSZk1OywZKky0qhGxcPN6RdGnnsWyMRINwhFtsjEk6NbYR3qcjMkRJ+Bz1VDJAT8NnrZJIEIVhc7V3WTJEy96wGbxQHcIetmbtjUoGaXQvbDWzq0IUs1c+eiIZpieP2L6L1SDK2Rdiz0CGEAV7L7rKlSESWT/KOyoZqlH2vehMVISwsjdsWTJYy2z/ViWIlmbjx2akkdrcIocoY337DckEsbNWY5kMIoa5oG/MDIgxdgZPCIfIY/ZZgR3JFO0wq1lrXhhEPcM4LZmkaeZn6lmIfOZGTE2aBTE5xdyKfAaCWTzdC5JpWnArLKenENXMPOWTTJSPmbGqAUQR49POmQkxx3i/Rf9C2JhY0A1yxwO3b7zz4e/Ii0eYiJLtHKKB2V+QffvTHYb3oQe3E2D2Iw3nEBXwz/tUhjfPt6m3cczw1yrOIApgbHBtiQrRf27b+xtqbwZ3iHUFLyBqINo8leEbYNyPspiHv1fzAgLudgJ+KsRrsMs7qN0ynLzbTyFKYax4mDw0eiDEdZTJEIxAl55A5MJenGSIhyL5f3BCk9wTCOhRbZLHp3SFWXVwo3ST9bBCENn6ZuxfIcR9nM0gPJk4hkiDnYzTIT6D9n/jbMahTVoIIgWOjQk6BLMWbONsJuD4SAlBpIP2LJ1hgFmb30dazQKb9BBEMmiv0CE8jK90GWm1AmySQxDwTG2dDrEOGW5psUrtFpJgrPiQDsEsRz1Yq0MYgU4SMkDLpcFJ+Qj+E9+jzVzALEPIBK1FDRD36AP0WIvALFPIog8w5r4+APZv4+22gVmWkANaW3SIl4H5uwS7LWCXI8SB1iodYhiY/0KwWwV2cUIsaM2QGb5zyxaeoGfn1S+iDrMZYBcrVILWLnW2fL2Xmap+vvLJHwcng+/qxy9FNt0FZpUC9PY9JITdu64Ip14fDKAn2jYBBg1Jrp0rytnbD5FdPBhQFKpAi+TRRDsAjBxmCYIrqwgQP9174PW6j06eOQLiLQIE/nFcA1ciIPYIjwP/Yh7RIK4SXkz8EBVpEC7CELWgJysixFfoycoixKOnbSLEK+hpO56wgBEhrhMWMPxSToR4j7CU450aIsQdglODd+9oEN6bBPcO7+jSIK5RHF28y0+D+Jbi8uM3PzSIz0mbH/Q2kARx9DVpG4jeEJMg+mkbYnRogATxJS00gA6SkCDeoAVJ0OEiCsR9argIGzijQPxJDZwxIcQhQyBu3aSGELHB1F48hJMcTMWGlXuwEHtbGsLK2AC788fnZwq1nqvo7l9+LQF2nUcNumI7FUYdutCkdujCHj+NmAuhdvzExUEcH0eSXBzO8nFMzcWBPR+pC90JbMLdf5LEwUc6CxeJPXykOPGR7MVF2hsfCYB8pEJykRTKR3osH4nCCinTfXpTpvvIKdN8JI8bnEY/pSmNno+CAj5KK/goMuGj3Ea98GgYV3g0bEThUaQSLF+0EiyfYSVYfBSj8VGWx0eBopGlmon/96LV4/1IjN7y3Rjd5bt8FDJzUtLNSXE7J2X+nHzwgJdPP/DyEQz2cyBxsWefA4mN0/M5kH8Ay6+Aps1qHZ8AAAAASUVORK5CYII="> </div></div><div style="flex:1;text-align:center;padding-top:30px;position:relative;"><div style="color: #303741;font-size:16px;font-weight:700;padding-bottom:5px;">' + txt8 + '</div><p style="color:#8f96a0;font-size:12px;line-height:1.4;">' + txt9 + '<br>' + txt10 + '</p><div style="position:absolute;top:-22px;left:0;font-size:0;width:100%;display:flex;justify-content:center;"><img style="width:44px;height:44px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAABGdBTUEAALGPC/xhBQAAAhlQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAA/81x/+/T/+Kt/9B5/9aK/+Gr/+7O/9WG/+Ks//Xi//rz/8df/+i9/+i//+vG//z2//Lb//v1/9SG/+vH/+7R//Pc/+3L/+nC/8ts/8hi/9eO/+e8//35/8po/+a4/+Ku/9F7//Xk/8hj/9iP//Lc/9F9/9aL/+Co//Pf/9qV/+/R//nt//fo/9yb//z3/8VY/9B6/+nA/+3N/8VZ/+e6//Pe/9mT/+e7/+Gq//36/9qW/9OD//LZ/+nB/8pp/9+l/92e/9iR/+Ov/8Zc//bm//DV//fp/+vI/+a3//v0//fq/+zI/9qX/96j/+zJ//nv/85z/9SE/8JS/+W1/9mS/9F8/893/92f/9WI/8RX/9OC/9OB//jr/+7Q/9ya/8ll/892/8RY//nw/+Gp//78/9yc//La//js/8RW//HX/8Va/9B4/9+j//79/8JR//ry/8xu/8Zb//z4/+W2//7+/8Zd//37/8NU/////8JQxz7OywAAADl0Uk5TD2fGuLlmEJo9Fu9ZGMhki9arUqIM8RwIS8k/xRICMn9Jnf2I0ozECRH5/FhsCpTtdQH+7ATf6LYAMQ4JjAAABotJREFUeNrVnHdb3DgQxk2H0HtZOiRAqAtLuZrrvffea/pdkrtAIHQIvfdeAix1V5/wlj5ja2VpbT/Rvf/Zq5n9PbIljUaSlTrfFBYaFR0bYMuvrioqqqrOtwXERkeFhvnoTBE3iQgPibzgpupCZEh4hOUQ6XFlMW4dxZTFpVsHUVBce9nNpcu1xQVWQNjTchLdAkrMSbObDJFcUu0WVnVJsokQCRU1bp9UU5FgEkRhVrnbZ5VnFZoAkRFkAOEIIyjDKERmqtuwUjMNQQSX5bpNUG6Z4jtEdo3bJNVk+wjhyKv07nVvYrJ/amzIOb3vcu1PO4fGpvonJ/a8l6/Mc/gCkXTJm8OD1fnBUULR6OD86oE3q0tJ4hApVXRfW63js4Sh2fHWLbplVYooRAX1URx0jLiIrlwjHdT6qKwQgrBfpDmZ69onnNrvmqN5uGjnh3DEUxwsL64QAa0sLlOcxDt4IUprtdaPOl1EUK7OR1o/taV8EKU2jenG7hrxQWu7GxpXtlIeCIe2HpZ6iI/qeVNbFw59CLvmfTgY3iQ+a3NY01Di7boQmnbRPkMMaaZd00b0ICrUFt3bxKC2u9U+K9gQKeo+6jExQY/VvVYKCyJJ1VcvDBBTNLCg6sGTvEM4VGPWTi8xSb07qtHM4RUiD5dsWyemab0N+87zBpGNX4gdExk8FLguKrPpEME4jlroJaaqF78XNcFUiDJcYQPEZA1g/2U0iMxc89smq6XmZmohMnBs300sEO61UjM0EH6oQPO2FRDbuAcPUkMUonnWwQyxRDNoNCsvVEFkIcZhYpGG0d9kYYgEVBFLm1ZBbC6hqkhAEGjw3OghlqlngzKcHkMko35ql1ioXdRjJQOIEhTTrlkJsYai35JzCDvKBd0hlqoTZZTsZxBpaH7hshbCheYjaWcQOfD2IrFYi/Dfck4hCmBucG7FaogVOENMLDiBKIZoXcRydcH/Kz6BgLOdg33rIfZh5117DJEOc8Ut+j761hvq659zan/4bOzOrbf/5aDogBno9COIOFg7I3oOPnztreOSv77YCO83zn91MgB/8YqejxH4j3FHEDCi2tJpnys3QLfbNnX+w28vg+BULyBybeEIywMRw99jT9/EIdqrJ8yuq/j++zqdbitcmTiEiIDW40zbxib1hO7aEcXKz+r7D9k1Og7LRnggwmHbYObE+t7VJj1a+jz1cE17/wYTYha2j3APRAi4XmWaNtDSUB9s9r1Du/8d09UqKBnigYgE1/PMimiiZgY/+Yd6e4kJMQ9KRnog4JraIPeD1BczTB2Eq3d1ShjMFY+yDB+IQTzP8jUKM9BhSii4mmBW4T0xCPb7NQFKhipR4GqS245D7Uxnk6BklBINrvqZdr+LQfzNdNYPSkYrseBqimm3IwaxxXQ2BUrGKoHgaoxp1yQG8RLT2RgoGaj4g6shpt3TYhCvM50NgZL+Sj64cnJ3MBz6ienMCUrmKzDan2baPSvEsPA1ezyGcb8Ck4bs0K5vWQTiqk6IBxOKShG40olo6gUY9pw6cQ0oWyQC8cccP8QDIgLB/zgIeYGb4abeNA4/Dv4X06PbvB2VbsyNX0z+JnpYiQ/5euw/daN+3ERt3J3Voa4v8UB8rD/1gJ2VTQng7raPE3Dv6TPc55j/wG47QGAAO6H4Vo/hNs9UEA9g/EP5KYXOE7nSx+MFD+X8Qc1ZwmeVxfDjdS4nOKjhD+/OZw2MNrL8EZ8PHN7xB7ogTJ30xtDm5PSAA13+kB/2Fx10Bu51GlXIzz/5QSMqdcazcJfXXj354Z8Govzw55SR8xtuc/U0kH9CrDcX4s/7aSbEAqkBrPsqhr/4TTWpAZEkiSohiXYTPSNgqUmSCKWLsG5t+FQPtHSRWOIM6fuzZ/uDiBklcYZSiB1iKcm7n/IPnMwUoqFk6pdviK9f0pKpxtLKT93b+6XBhLSywQS76NIEPcEuxVKDHIsuePmp88ksP0mxECfHkqQUi7NyLFNLsWAvx9aFuiCcCX0imzjk2M4ixcYeObY4ybHZS4ptb3JsAJRjK6QUm0Ll2B4rx0ZhypbpZqNbppuFt0zLsXnc5G30Sz5to5fjQIEcRyvkOGQix3Eb7wePWvgOHrWYcfCIdQRrV+8I1q5pR7DkOIwmx7E8OQ4omnlUM/j/fmj1cD7iZ/T4rp/h47tyHGSW5Ei3JIfbJTnmL8kHD2T59IMsH8HAnwMJ9D/9HIh/oJHPgfwHk7dRXFoGbxEAAAAASUVORK5CYII="> </div></div></div><div style="color:red;font-size:13px;text-align:center;padding-top:15px;font-weight:700;">>>' + txt11 + 'APP<<</div></div></div></a>');

}

function ggf2(bookName, sitename, appstoreurl) {
    var txt = decodeURI('APP%EF%BC%8C%E4%BD%A0%E7%9A%84%E9%9A%8F%E8%BA%AB%E7%9C%8B%E4%B9%A6%E5%B7%A5%E5%85%B7');
    var txt1 = decodeURI('%E4%B9%A6%E5%8D%95%E3%80%81%E6%A6%9C%E5%8D%95%E5%90%84%E7%A7%8D%E7%B1%BB%E5%9E%8B%E5%B0%8F%E8%AF%B4%E6%8E%A8%E8%8D%90');
    var txt2 = decodeURI('%E8%AE%B0%E5%BD%95%E4%BD%A0%E6%83%B3%E7%9C%8B%E3%80%81%E7%9C%8B%E8%BF%87%E7%9A%84%E5%B0%8F%E8%AF%B4');
    var txt3 = decodeURI('%E6%B5%B7%E9%87%8F%E5%B0%8F%E8%AF%B4%E7%BB%88%E8%BA%AB%E5%85%8D%E8%B4%B9%E9%98%85%E8%AF%BB');
    var txt4 = decodeURI('%E7%94%A8APP%E6%89%93%E5%BC%80');

    document.write('<div style="padding: 10px;"><a style="text-decoration:none;padding:13px 16px;background:linear-gradient(270deg,#f8e2bc 0,#eed09d 100%);border-radius: 5px;display:flex;align-items: center;position:relative;"href="' + appstoreurl + '"><div style="font-size:30px;width:35px;height:35px;color:#fff;background-color:red;border-radius:50%;line-height:30px;text-align:center;position:absolute;right:5px;top:5px;font-weight:bold;z-index:99;">x</div><div style="flex: 1;color:#5a3d21;"><div style="font-size: 15px;font-weight: 800;">' + sitename + txt + '</div><div style="font-size:12px;padding-top:6px;font-weight:500;"><span style="font-weight:bold;padding-right:5px;">1. </span>' + txt1 + '</div><div style="font-size:12px;padding-top:6px;font-weight:500;"><span style="font-weight:bold;padding-right:5px;">2. </span>' + txt2 + '</div><div style="font-size:12px;padding-top:6px;font-weight:500;"><span style="font-weight:bold;padding-right:5px;">3. </span>' + txt3 + '</div></div><div style="padding-left: 10px;border:solid 1px #fbf7f2;color: #fbf7f2;font-size: 12px;padding:6px;font-weight:bold;background-color: #eabf87;border-radius: 20px;">' + txt4 + '</div></a></div>');
}
function ggf3(bookName, sitename, appstoreurl) {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        var url = appstoreurl;
    }
    else if (/(Android)/i.test(navigator.userAgent)) {
        var url = 'https://mgzs.cdn.bcebos.com/bxwx/index.html?w=tg15';
    }
    var imgurl = "https://mgzs.cdn.bcebos.com/ad20200217.jpg";
    document.write('<div style="float:left;width:100%;"><a href="' + url + '" style="text-decoration:none;display:block;font-size:0;position:relative;"><div style="font-size:30px;width:35px;height:35px;color:#fff;background-color:red;border-radius:50%;line-height:30px;text-align:center;position:absolute;right:5px;top:5px;font-weight:bold;z-index:99;">x</div><img src="' + imgurl + '" style="width:100%;" /></a></div>');
}
function ggf4(bookName, sitename, appstoreurl) {
    var txt = decodeURI('%E7%AC%94%E8%B6%A3%E9%98%81');
    var txt1 = decodeURI('%E4%BD%9C%E8%80%85%E6%9B%B4%E6%96%B0%E7%AB%8B%E5%8D%B3%E6%8E%A8%E9%80%81');
    var txt2 = decodeURI('%E5%90%83%E6%88%91%E4%B8%80%E5%89%82%E5%AE%89%E5%88%A9%EF%BC%8C%E6%88%91%E7%9A%84%E7%A7%81%E8%97%8F%E5%B0%8F%E8%AF%B4%E9%83%BD%E5%9C%A8%E5%B0%8F%E8%AF%B4APP%EF%BC%8C%E4%B8%8A%E4%B8%87%E6%9C%AC%E6%AD%A3%E7%89%88%E5%B0%8F%E8%AF%B4%E6%B0%B8%E4%B9%85%E5%85%8D%E8%B4%B9%E7%9C%8B%EF%BC%81');
    var txt3 = decodeURI('%E4%B8%8B%E8%BD%BD%E7%AC%94%E8%B6%A3%E9%98%81%20%E5%91%8A%E5%88%AB%E4%B9%A6%E8%8D%92');

    document.write('<div style="padding:10px;"><a href="' + appstoreurl + '" style="text-decoration:none;"><div style="display:flex;padding:10px;position:relative;"><div style="font-size:30px;width:35px;height:35px;color:#fff;background-color:red;border-radius:50%;line-height:30px;text-align:center;position:absolute;right:5px;top:5px;font-weight:bold;z-index:99;">x</div><div style="font-size:0;"><img style="width:40px;height:40px;border-radius:40px;" src="http://file.market.xiaomi.com/thumbnail/PNG/l96/AppStore/02a3975147578427e19e304b72bed17fadeb479a2" /></div><div style="display:flex;align-content:space-between;flex-wrap:wrap;padding-left:10px;"><div style="width:100%;font-size:16px;color:#666666;">' + txt + '</div><div style="width:100%;color:#999999;font-size:12px;">' + txt1 + '</div></div></div><div style="background:url(https://mgzs.cdn.bcebos.com/mhbg.png);background-size: 100% 100%;padding:20px;"><div style="color:#333333;font-size:15px;font-weight:500;">' + txt2 + '</div><div style="padding-top:20px;display:flex;justify-content:center;"><div style="background-color:#27cf6e;text-align:center;color:#fff;padding:6px 25px;border-radius:50px;font-size:15px;font-weight:500;">' + txt3 + '</div></div></div></a></div>');
}
function ggf5(bookName, sitename, appstoreurl) {
    img = new Array(6);
    img[0] = 'https://mgzs.cdn.bcebos.com/3.jpg';
    img[1] = 'https://mgzs.cdn.bcebos.com/4.jpg';
    img[2] = 'https://mgzs.cdn.bcebos.com/5.jpg';
    img[3] = 'https://mgzs.cdn.bcebos.com/7.jpg';
    img[4] = 'https://mgzs.cdn.bcebos.com/8.jpg';
    img[5] = 'https://mgzs.cdn.bcebos.com/10.jpg';
    img[6] = 'https://mgzs.cdn.bcebos.com/11.jpg';
    img[7] = 'https://mgzs.cdn.bcebos.com/13.jpg';
    img[8] = 'https://mgzs.cdn.bcebos.com/15.jpg';
    img[9] = 'https://mgzs.cdn.bcebos.com/16.jpg';

    index = Math.floor(Math.random() * img.length);
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        var url = appstoreurl;
    }
    else if (/(Android)/i.test(navigator.userAgent)) {
        var url = 'https://appdowns.cdn.bcebos.com/tg/bqg_tg13.apk';
    }
    var imgurl = img[index];

    document.write('<div style="float:left;width:100%;"><a href="' + url + '" style="text-decoration:none;display:block;font-size:0;position:relative;"><div style="font-size:30px;width:35px;height:35px;color:#fff;background-color:red;border-radius:50%;line-height:30px;text-align:center;position:absolute;right:5px;top:5px;font-weight:bold;z-index:99;">x</div><img src="' + imgurl + '" style="width:100%;" /></a></div>');
}
function _f(bookName, sitename) {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        tipios = new Array(6);
        tipios[0] = 'https://itunes.apple.com/app/id1493259928';
        tipios[1] = 'https://apps.apple.com/cn/app/id1493259928';
        tipios[2] = 'https://apps.apple.com/cn/app/id1492115251';
        tipios[3] = 'https://apps.apple.com/cn/app/id1492115251';
        tipios[4] = 'https://apps.apple.com/cn/app/id1492115251';
        tipios[5] = 'https://itunes.apple.com/app/id1493259928';
        index = Math.floor(Math.random() * tipios.length);


        var appstoreurl = tipios[index];

    }
    else if (/(Android)/i.test(navigator.userAgent)) {

        var appstoreurl = 'https://appdowns.cdn.bcebos.com/tg/bqg_tg13.apk';
    }
    var hr = Math.ceil(Math.random() * 5);

    if (hr == 1) {
        ggf1(bookName, sitename, appstoreurl);
    } else if (hr == 2) {
        ggf2(bookName, sitename, appstoreurl);
    } else if (hr == 3) {
        ggf3(bookName, sitename, appstoreurl);
    } else if (hr == 4) {
        ggf4(bookName, sitename, appstoreurl);
    } else {
        ggf5(bookName, sitename, appstoreurl);
    }
}