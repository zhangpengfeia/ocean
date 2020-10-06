$(function (){
    function showUser(){
        $.ajax({
            type:"get",
            url:'my/userinfo',
            success:function(res){
                console.log(res);
                if(res.status === 0){
                    var form = layui.form
                    form.val('layFilt',res.data)
                }
              
            }
        })
    }
    showUser()


    $('.layui-form').submit(function(e){
        e.preventDefault()
        var data = $(this).serializeArray()

        data = data.filter(function(val){
            return val.name !== 'username'
        })
  
        $.ajax({
            type:'post',
            url:"my/userinfo",
            data:data,
            success:function(res){
                if(res.status == 0){
                    layer.msg("修改成功！")
                }
            }

        })
    })


    $('#reset').click(function(e){
        e.preventDefault();
        showUser()
    })


})