<?php

namespace Home\Controller;


use Think\Controller;

class IndexController extends CommonController {
    /**
     * 框架 | iframe
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function index(){

		$this->display();
    }


    /**
     * 主页
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function main(){

		$this->display();
    }
    
}