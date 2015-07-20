<?php

namespace Home\Model;


use Think\Model;

class UserModel extends Model {   
    public $_validate = array(
            array("phone","require","请输入手机号码",1,"",1),//验证手机号是否填写
            array("phone","/^(1[3|5|8])[\d]{9}$/","手机号码不正确",2,"regex",1),//验证手机号码是否正确
            array("phone","","手机号码已经被注册",1,"unique",1),// 验证手机号码是否被注册
            array("telephone","/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/","固定电话号码不正确",2,"regex",1),//验证固定电话是否正确
            array("email","/^\w+@[0-9a-z-]+\.[a-z]+(\w+)?$/i","邮箱不正确",2,"regex",1),//验证邮箱是否正确
            array("identity","/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/","身份证号码不正确",2,"regex",3),//验证身份证是否正确
            array("age","number","年龄不正确",2,"",3),//验证年龄是否合法;
    );
    

	/**
     * 用户添加
     * @param  *addData (Array)  添加的数组数据
     * @author cyq <chenyuanqi90s@163.com>
     **/
    public function addUser($addData) {
        $result = M('User')->add($addData);
        return $result;
    }


    /**
     * 用户编辑
     * @param  *editData (Array)  编辑的数组数据
     * @author cyq <chenyuanqi90s@163.com>
     **/
    public function editUser($editData) {
        $result = M('User')->save($editData);
        return $result;
    }


    /**
     * 用户删除
     * @param  *id (Int/String)  要删除的记录 ID / id 以英文逗号 (,) 拼接的数组 =>删除多条记录
     * @author cyq <chenyuanqi90s@163.com>
     **/
    public function delUser($id) {
        $result = M('User')->delete($id);
        return $result;
    }


    /**
     * 用户查询
     * @param  *id (Int)  要查询的记录 ID
     * @param  field (String) 要获取的用户字段
     * @author cyq <chenyuanqi90s@163.com>
     **/
    public function getUserInfo($id, $field = null) {
        $result = M('User')->find($id);
        return is_null($field) ? $result : $result[$field];
    }


     /**
     * 用户头像上传
     * @param  *fileName (String)  文件表单中的名称
     * @author cyq <chenyuanqi90s@163.com>
     **/
    public function uploadHeadImg($fileName) {
        if (!empty($_FILES) && 0 === $_FILES[$fileName]["error"]) {
            $uploadObj = new \Think\Upload();// 实例化上传类    
            $uploadObj->maxSize   =     $maxSize;// 设置附件上传大小    
            $uploadObj->exts      =     array('jpg', 'gif', 'png', 'jpeg', 'mp4', 'flv');// 设置附件上传类型
            $uploadObj->allowTypes=    array('image/jpeg','image/png','image/gif','image/wbmp', 'video/mp4',  "video/flv");// 指定文件类型    
            $uploadObj->rootPath  =     './Upload/';
            $uploadObj->savePath  =     $savepath; // 设置附件上传目录
            
            // 上传文件     
            $info =   $uploadObj->upload();

            if(!$info) {
                // 上传报错响应, 与路径对比，无 ‘/’   
                return $uploadObj->getError();    
            } else {     
                // 开始上传,移动
                $path = substr($info[$fileName]['savepath'],strpos($info[$fileName]['savepath'],'/'));
                return $path.$info[$fileName]['savename'];      
            }
        }
    }


    /**
     * 判断是否报错/返回路径
     * @param  path (String)  要判断的字符串
     * @author cyq <chenyuanqi90s@163.com>
     **/
    public function isPath($path) {
        $result = strrpos($path, '/');
        return $result ? true : false;
    }


			
 }

