<?php

namespace Home\Controller;


use Think\Controller;

class UserController extends CommonController {
    /**
     * 用户列表
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function userList(){

		$this->display();
    }


    /**
     * 用户添加
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function userAdd(){

		$this->display();
    }


    /**
     * 用户添加处理
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function userAddAction(){
        if (IS_POST) {
            // 拼装数组
            $userArr = array(
                'user_name'  => I('post.name', '', 'htmlspecialchars'),
                'password'   => I('post.pwd', '', 'htmlspecialchars'),
                'create_time'=> date('Y-m-d H:i:s')
            );

            // Model 验证
            D('User')->create($userArr);

            // 开始处理，并返回处理结果
            if(D('User')->addUser($userArr)) {
                $this->ajaxReturn('success');
            } else{
                $this->ajaxReturn('error');
            }

        }
    }


    /**
     * 用户详情
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function userDetail(){

		$this->display();
    }
    
}