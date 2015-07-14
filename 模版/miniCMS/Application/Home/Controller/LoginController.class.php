<?php

namespace Home\Controller;


use Think\Controller;

class LoginController extends CommonController {
    /**
     * 登录
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function login() {
  
        $this->display();
    }


    /**
     * 登录处理
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function loginAction() {
        //验证用户登录 # encryptDecrypt('123456', 'cyq2015') => 9UklK9vps3Bv3JHguCaFp7jXhUcrlZeCaMjWGcXj69M=
        if (IS_POST) {
            // 验证验证码是否正确
            if (!check_code(I('post.code'))) {
                $this->error('提示：验证码有误(请输入 0 ~ 9 的数字)');
            }

            $account_map = array(
                'account' => I('post.user'),
                'password'=> encryptDecrypt(I('post.pwd'), 'cyq2015')
            );
            $account = M("account")->where($account_map)->find();
            !$account && exit("系统暂时无法介入，请稍后访问！");

            cookie("aid", $account['id']);
            cookie("name", $account['account']);
            cookie("isLogin", 1);
            
            // 存储用户输入，便于下次执行登陆
            cookie('user', I('post.user'), 86400);
            cookie('password', I('post.pwd'), 86400);

            unset($account);
            exit("success");
        }
    }
    
    /**
     * 登出处理
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function logout() {
        cookie("aid", null);
    	cookie("name", null);
    	cookie("isLogin", null);
        cookie(null);

        1 != cookie("isLogin") && $this->redirect('Index/index');
    }


    /**
     * 验证码生成
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function verify() {
        $config =    array(    
            'fontSize'    =>    17,    // 验证码字体大小    
            'length'      =>    6,     // 验证码位数    
            'useNoise'    =>    false, // 关闭验证码杂点
        );
        $Verify =     new \Think\Verify($config);
        // 开启验证码背景图片功能 随机使用 ThinkPHP/Library/Think/Verify/bgs 目录下面的图片
        $Verify->useImgBg = true;
        // 设置验证码字符
        $Verify->codeSet = 'abcdefghkmnpqrstuvwxyz';

        $Verify->entry();

    }
}