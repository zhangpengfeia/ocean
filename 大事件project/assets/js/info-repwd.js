$(function(){
    
    $('.layui-form').submit(function(e){
        e.preventDefault()

        var form = $(this).serialize()
       
        $.ajax({
            type:'post',
            url:"my/updatepwd",
            data:form,
            success:function(res){
                layer.msg(res.message)
            }
        })
    })

    var  form = layui.form;
    form.verify({
        pwd:function(val){
            if($('.newpwd').val() !== val){
                return '两次密码不一致'
            }
            if($(".oldPwd").val() == val){
                return '原密码和新密码重复'
            }
            
        }
    })


})