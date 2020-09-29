
//layui的form表单提示
var form = layui.form;
form.verify({
    uname:function(value){
        if(value.length < 4 || value.length >12){
            return '请输入4到9个字符串'
        }
    },
    pwd:function(value){
        if(value.length<6 || value.length >16){
            return '请输入6-16个字符'
        }else if($('#pwd').val() !== value){
            return '两次密码不一致'
        }
    }

})


//优化ajax,在每次ajax请求前都会触发
var baseURL = 'http://ajax.frontend.itheima.net/'
$.ajaxPrefilter(function(options){
    console.log(options);

    options.url = baseURL + options.url
})
