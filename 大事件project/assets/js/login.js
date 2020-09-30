

$('.toggle').on('click',function(e){
    $(this).parents('.login').addClass('none').siblings('.login').removeClass('none')
})

//登录
$('#form-signin').submit(function(e){
    e.preventDefault()
    var fd = $(this).serialize();
    $.ajax({
        type:'post',
        url:"api/login",
        data:fd,
        success:function(res){
            if(res.status == 0){
                sessionStorage.setItem('token',res.token)
                location.href = './index.html'
            }
            layer.msg(res.message,{icon:2})
        }
    })
})


//注册
$('#form-signup').submit(function(e){
    e.preventDefault();
    var fd = $(this).serialize();
    console.log(fd);
    $.ajax({
        type:'post',
        url:"api/reguser",
        data:fd,
        success:function(res){
            if(res.status == 0){
                setTimeout(function(){
                    $('.signUp').addClass('none')
                    $('.signIn').removeClass('none')
                },3000)
                layer.msg(res.message,{icon:1})
            }
        }
    })

})


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

