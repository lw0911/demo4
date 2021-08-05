
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="renderer" content="webkit|ie-comp|ie-stand" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>	临时书架只记录最新30部浏览过的小说_笔趣阁</title>
</head>
<body>
    
<link rel="stylesheet" href="https://cdn.bootcss.com/sweetalert/0.5.0/sweet-alert.css" />
<link rel="stylesheet" href="https://zqjscss.cdn.bcebos.com/css/style.css"/>
<script src="https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
<script src="/static/js/novel.js"></script>
<script src="https://zqjscss.cdn.bcebos.com/js/apps.js"></script>
  <div class="topbar">
    <div class="topbar-con">
      <div class="topbar-sethome">
        <a href="javascript:winSetHP();">将本站设为首页</a>
      </div>
      <div class="topbar-addfavorite">
        <a href="javascript:winAddFav()">收藏笔趣阁</a>
      </div>
      <div class="topbar-right">
         <script>PCLogin()</script>
      </div>
    </div>
  </div>

  <div class="header">
    <h1 class="logo"><a href="/">笔趣阁</a></h1>
    <form action="/ar.php" class="search-form" id="form">
        <input class="input-text input-key" id="keyWord" name="keyWord" type="text" maxlength="30"
            placeholder="可搜书名和作者，请您少字也别输错字。" />
        <input type="button" class="btn-tosearch" value="搜索" title="搜索" onclick="check()"/>
    </form>
    <div class="m-user" style="color:#fff">
       <script>MLogin()</script>
    </div>
  </div>

  <ul class="nav">
    <li><a href="/">首页</a></li>
    <li><a rel="nofollow" href="/user/case.php">永久书架</a></li>
	<li><a href="/xuanhuanxiaoshuo/">玄幻奇幻</a></li>
	<li><a href="/xiuzhenxiaoshuo/">武侠仙侠</a></li>
	<li><a href="/dushixiaoshuo/">都市言情</a></li>
	<li><a href="/lishixiaoshuo/">历史军事</a></li>
	<li><a href="/kehuanxiaoshuo/">科幻灵异</a></li>
	<li><a href="/wangyouxiaoshuo/">网游竞技</a></li>
	<li><a href="/nvshengxiaoshuo/">女生频道</a></li>
    <li><a href="/paihangbang/">排行榜单</a></li>
    <li><a href="/collect/">收藏榜单</a></li>
    <li><a href="/wanbenxiaoshuo/">完本小说</a></li>
    <li><a rel="nofollow" href="/reader/case.php">阅读记录</a></li>
  </ul>
  <ul class="m-nav">
    <li><a href="/paihangbang/">排行</a></li>
    <li><a href="/collect/">收藏</a></li>
    <li><a href="/wanbenxiaoshuo/">完本</a></li>
    <li><a href="/reader/case.php">阅读记录</a></li>
    <li><a href="/user/case.php"  rel="nofollow">书架</a></li>
  </ul>
<script>createApp()</script>
    <div class="container">
        <div class="history-box">
            <table class="history-table">
                <caption><span class="xs-hidden">临时书架 - 浏览过的小说会自动保存到书架中（限同一电脑）</span><span class="xs-show">临时书架 - 浏览过的小说会自动保存到书架中</span></caption>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>小说名称</th>
                        <th class="xs-hidden">作者</th>
                        <th class="xs-hidden">最新章节</th>
                        <th>上次阅读章节</th>
                        <th class="xs-hidden">更新时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    <script>createApp()</script>
<div class="footer" id="footer">
    <div class="pc-footer">
        <p>本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。</p>
    </div>
    <div class="m-footer">
        <a href="/">首页</a>
        <a href="/user/case.php" rel="nofollow">我的书架</a>
        <a href="/reader/case.php" rel="nofollow">阅读记录</a>
        <a href="https://mgzs.cdn.bcebos.com/appdown.html?w=tg12">客户端</a>
        <a href="#">顶部↑</a>
    </div>
</div>

<script src="https://zqjscss.cdn.bcebos.com/js/iconfont.js"></script>
<script src="https://apps.bdimg.com/libs/jquery/1.4.2/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/sweetalert/0.5.0/sweet-alert.min.js"></script>
<script>
    function check() {
        var keyWord = $("#keyWord").val().trim();
        if (keyWord == "" || keyWord == null || keyWord == undefined) {
            swal({
                title: "请输入正确的信息！",
                type: "warning",
            });
        } else {
            $("#form").submit();
        }
    }
    function winSetHP() {
        var name = document.title;
        if (document.all) {
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(name);
        } else {
            swal({
                title: "提示",
                text: '浏览器不支持此操作, 请手动设为首页'
            });
        }
    }
    function winAddFav() {
        var domain = window.location.href;
        var name = document.title;
        try {
            window.external.addFavorite(domain, name);
        } catch (e) {
            try {
                window.sidebar.addPanel(name, domain, '');
            } catch (e) {
                swal({
                    title: "提示",
                    text: '加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置'
                });
            }
        }
    }
    function loginbtn() {
	var domain = window.location.href;
        $.post("/MemberAction.php", { action: 'login', username: $("#small-username").val(), password: $("#small-password").val(), usecookie: "720" },
            function (result) {
                if (result != []) {
                    if (result.status == 1) {
                        swal({
                            title: "提示",
                            text: result.info
                        });
                        setTimeout(function () {
						if(domain.indexOf("login.php") >= 0 ) {
                            location.href = "/";
						}else{
							location.href = domain;
						}	
                        }, 1500);
                    } else {
                        swal({
                            title: "提示",
                            text: result.info
                        });
                    }
                }
            })
    }
</script>
<div style="display:none;">
	<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1178a65c6e06652b52745ae1c757aa87";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
  <script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1278951145&web_id=1278951145"></script>
  </div>
	<script type="text/javascript" src="/static/js/novel.js"></script>
    <script type="text/javascript">
        $(function () {
            var chapterList = $("a[bookid]");
            if (chapterList == undefined || chapterList == null || chapterList.length == 0) return;
            convertBookData();

            var bookList = getBookcase();
            chapterList.each(function () {
                var currentChapterNode = $(this);
                var bookId = parseInt(currentChapterNode.attr("bookid"));
                var chapterId = bookList[bookId].ChapterId;
                var chapterName = bookList[bookId].ChapterName;
                currentChapterNode.attr("href", currentChapterNode.attr("href") + chapterId + ".html");
                currentChapterNode.attr("title", chapterName);
                currentChapterNode.text(chapterName);
            });
        });

        function clearCookies(id) {
            var bookList = new Array();
            var strBookList = getCookie("booklist");
            if (strBookList != null && strBookList != undefined && strBookList.length > 0) {
                var arrBookList = strBookList.split(",");
                for (var i = 0; i < arrBookList.length; i++) {
                    var bookItem = JSON.parse(unescape(arrBookList[i]));
                    if (bookItem.BookId != id) {
                        bookList[bookItem.BookId] = bookItem;
                    }
                }
            }
            saveBookcase(bookList);
        }

        function delBook(bookId) {
            if (confirm("确认从书架中删除此书吗？")) {
                clearCookies(bookId);
                $("a[bookid='" + bookId + "']").parent().parent().remove();
            }
        }

    </script>
</body>
</html>