<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html style="overflow-y:hidden;">

<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <LINK rel="Bookmark" href="/favicon.ico">
    <LINK rel="Shortcut Icon" href="/favicon.ico" />
    <!--[if lt IE 9]>
<script type="text/javascript" src="/miniCMS/Public/style/js/html5.js"></script>
<script type="text/javascript" src="/miniCMS/Public/style/js/respond.min.js"></script>
<script type="text/javascript" src="/miniCMS/Public/style/js/PIE_IE678.js"></script>
<![endif]-->
    <link href="/miniCMS/Public/style/css/H-ui.css" rel="stylesheet" type="text/css" />
    <link href="/miniCMS/Public/style/css/H-ui.admin.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="/miniCMS/Public/style/font/font-awesome.min.css" />
    <!--[if IE 7]>
<link href="/miniCMS/Public/style/font/font-awesome-ie7.min.css" rel="stylesheet" type="text/css" />
<![endif]-->
    <!--[if IE 6]>
<script type="text/javascript" src="/miniCMS/Public/style/js/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
    <title>miniCMS</title>
    <meta name="keywords" content="miniCMS" />
    <meta name="description" content="miniCMS" />
</head>

<body style="overflow:hidden">
    <header class="Hui-header cl"> <a class="Hui-logo l" title="miniCMS" href="/">miniCMS</a>  <a class="Hui-logo-m l" href="/" title="H-ui.admin">miniCMS</a>  <span class="Hui-subtitle l">V1.0</span>  <span class="Hui-userbox"><span class="c-white">超级管理员：admin</span>  <a class="btn btn-danger radius ml-10"
        href="#" title="退出"><i class="icon-off"></i> 退出</a>
        </span>
        <a aria-hidden="false" class="Hui-nav-toggle" id="nav-toggle" href="#"></a>
    </header>
    <div class="cl Hui-main">
        <aside class="Hui-aside" style="">
            <input runat="server" id="divScrollValue" type="hidden" value="" />
            <div class="menu_dropdown bk_2">
                <dl id="menu-user"> <dt><i class="icon-user"></i> 用户中心<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="<?php echo U('User/userList');?>" href="javascript:;">用户列表</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-comments"> <dt><i class="icon-comments"></i> 评论管理<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="" href="javascript:;">评论列表</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#意见反馈</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-article"> <dt><i class="icon-edit"></i> 资讯管理<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="<?php echo U('Category/cateList');?>" href="javascript:void(0)">分类管理</a>
                            </li>
                            <li><a _href="#" href="javascript:void(0)">#资讯管理</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-picture"> <dt><i class="icon-picture"></i> 图片库<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="" href="javascript:void(0)">#分类管理</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#图片管理</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-product"> <dt><i class="icon-beaker"></i> 产品库<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="" href="javascript:void(0)">#品牌管理</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#分类管理</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#产品管理</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-page"> <dt><i class="icon-paste"></i> 页面管理<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="" href="javascript:void(0)">#首页管理</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#友情链接</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-order"> <dt><i class="icon-credit-card"></i> 财务管理<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="" href="javascript:void(0)">#订单列表</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#充值管理</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#发票管理</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-tongji"> <dt><i class="icon-bar-chart"></i> 系统统计<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="<?php echo U('Log/recordList');?>" href="javascript:void(0)">日志管理</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-admin"> <dt><i class="icon-key"></i> 管理员管理<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="" href="javascript:void(0)">#角色管理</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#权限管理</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#管理员列表</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-system"> <dt><i class="icon-cogs"></i> 系统管理<b></b></dt>
                    <dd>
                        <ul>
                            <li><a _href="<?php echo U('System/baseSetting');?>" href="javascript:void(0)">基本设置</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#栏目设置</a>
                            </li>
                            <li><a _href="" href="javascript:void(0)">#数据字典</a>
                            </li>
                            <li><a _href="<?php echo U('System/filter');?>" href="javascript:void(0)">屏蔽词</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </aside>
        <div class="dislpayArrow">
            <a class="pngfix" href="javascript:void(0);"></a>
        </div>
<!-- 加载头部End -->
<section class="Hui-article">
    <div id="Hui-tabNav" class="Hui-tabNav">
        <div class="Hui-tabNav-wp">
            <ul id="min_title_list" class="acrossTab cl">
                <li class="active"><span title="系统主页" data-href="<?php echo U('Index/main');?>">系统主页</span><em></em>
                </li>
            </ul>
        </div>
        <div class="Hui-tabNav-more btn-group"><a id="js-tabNav-prev" class="btn radius btn-default btn-small" href="javascript:;"><i class="icon-step-backward"></i></a><a id="js-tabNav-next" class="btn radius btn-default btn-small" href="javascript:;"><i class="icon-step-forward"></i></a>
        </div>
    </div>
    <div id="iframe_box" class="Hui-articlebox">
        <div class="show_iframe">
            <div style="display:none" class="loading"></div>
            <iframe scrolling="yes" frameborder="0" src="<?php echo U('Index/main');?>"></iframe>
        </div>
    </div>
</section>
<!-- 加载尾部 -->
</div>
<script type="text/javascript" src="/miniCMS/Public/style/js/jquery.min.js"></script>
<script type="text/javascript" src="/miniCMS/Public/style/js/Validform_v5.3.2_min.js"></script>
<script type="text/javascript" src="/miniCMS/Library/layer/layer.min.js"></script>
<script type="text/javascript" src="/miniCMS/Public/style/js/H-ui.js"></script>
<script type="text/javascript" src="/miniCMS/Public/style/js/H-ui.admin.js"></script>
</body>

</html>