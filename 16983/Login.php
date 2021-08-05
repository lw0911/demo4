
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
  <meta name="renderer" content="webkit|ie-comp|ie-stand"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <title>用户登录</title>
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
    <form name="frmLogin" id="frmLogin" method="post">
      <table class="grid" width="580">
        <caption>用户登录</caption>
        <tbody>
          <tr>
            <td width="28%">手机号：</td>
            <td>
              <input type="text" class="text" id="username" maxlength="30" value=""/>
            </td>
          </tr>
          <tr>
            <td width="28%">密码：</td>
            <td>
              <input type="password" class="text" id="password" maxlength="20" value=""/>
            </td>
          </tr>
          <tr>
            <td width="28%">有效期：</td>
            <td>
              <select id="usecookie" name="usecookie" class="select">
                <option value="0">浏览器进程</option>
                <option value="1440">保存一天</option>
                <option value="43200">保存一月</option>
                <option value="525600">保存一年</option>
              </select>
            </td>
          </tr>
          <tr>
            <td width="28%"> &nbsp; </td>
            <td>
              <input type="hidden" name="action" id="action" value="login"/>
              <input type="button" class="button" name="submit" id="submit" value="提 交"/></td>
          </tr>
        </tbody>
      </table>
    </form>
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
    <script type="text/javascript">
        $(function () {
            $("#submit").click(function () {
                var username = $("#username").val();
                var password = $("#password").val();
                if (username == null || username == '' || username.length < 5) {
                    swal({
                        title: "提示",
                        text: "请输入有效的手机号"
                    });
                    return;
                }
                if (password == null || password == '' || password.length < 5) {
                    swal({
                        title: "提示",
                        text: "请输入有效的密码"
                    })
                    return;
                }
                var action = $("#action").val();
				var domain = window.location.href;
                $.post("/MemberAction.php", { action: action, username: username, password: password, usecookie: $("#usecookie").val() },
                    function (result) {
                        if (result != []) {
                            if (result.status == 1) {
                                swal({
                                    title: "提示",
                                    text: result.info
                                })
                                setTimeout(function () {
                                    if(domain.indexOf("Login.php") >= 0) {
									location.href = "/";
								}else{
									location.href = domain;
								}
                                }, 3000);
                            } else {
                                swal({
                                    title: "提示",
                                    text: result.info
                                })
                            }
                        }
                })
            })
        })
    </script>
</body>
</html>