<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<LINK rel="Bookmark" href="/favicon.ico" >
<LINK rel="Shortcut Icon" href="/favicon.ico" />
<!--[if lt IE 9]>
<script type="text/javascript" src="/miniCMS/Public/style/js/html5.js"></script>
<script type="text/javascript" src="/miniCMS/Public/style/js/respond.min.js"></script>
<script type="text/javascript" src="/miniCMS/Public/style/js/PIE_IE678.js"></script>
<![endif]-->
<link href="/miniCMS/Public/style/css/H-ui.css" rel="stylesheet" type="text/css" />
<link href="/miniCMS/Public/style/css/H-ui.login.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script type="text/javascript" src="/miniCMS/Public/style/js/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>后台登录</title>
<meta name="keywords" content="miniCMS">
<meta name="description" content="miniCMS">
</head>
<body>
<input type="hidden" id="TenantId" name="TenantId" value="" />
<div class="header"></div>
<div class="loginWraper">
  <div id="loginform" class="loginBox">
    <form action="index.html" method="post">
      <div class="formRow user">
        <input id="" name="" type="text" placeholder="账户" class="input_text input-big">
      </div>
      <div class="formRow password">
        <input id="" name="" type="password" placeholder="密码" class="input_text input-big">
      </div>
      <div class="formRow yzm">
        <input class="input_text input-big" type="text" name="code" placeholder="验证码" onBlur="if(this.value==''){this.value='验证码:'}" onClick="if(this.value=='验证码:'){this.value='';}" value="验证码:" style="width:150px;">
        <img src="<?php echo U('Login/verify');?>" onclick='this.src="/miniCMS/index.php/Login/verify/rand/"+Math.random()' border="0" alt="点击刷新验证码" style="cursor:pointer; " align="absmiddle"> 
      </div>
      <div class="formRow">
        <label for="online">
          <input type="checkbox" name="online" id="online" value="">
          使我保持登录状态</label>
      </div>
      <div class="formRow">
        <input name="" type="submit" class="btn radius btn-success btn-big" value="&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;">
        <input name="" type="reset" class="btn radius btn-default btn-big" value="&nbsp;取&nbsp;&nbsp;&nbsp;&nbsp;消&nbsp;">
      </div>
    </form>
  </div>
</div>
<div class="footer">miniCMS V1.0</div>
<script type="text/javascript" src="/miniCMS/Public/style/js/jquery.min.js"></script>
<script type="text/javascript" src="/miniCMS/Public/style/js/H-ui.js"></script>

</body>
</html>