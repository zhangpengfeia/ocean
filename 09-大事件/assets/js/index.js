
$('#quit').click(function(e){
    layer.confirm('确认要退出吗',{title:"提示"},function(index){
        sessionStorage.removeItem('token');
        location.href = './login.html'
    })

})

 //调用用户信息接口函数

 function adminUser(){
    $.ajax({
        type:'get',
        url:'my/userinfo',
        success:function(res){
            console.log(res);
            if(res.status == 0){
/*                 $('.admin').html(`
                    <div class="headPhoto userphoto">
                        <img src="${res.data.user_pic}" alt="">
                    </div>
                    <div class="adminName username">
                        ${res.data.username}
                    </div>
                `) */
                $('.userphoto').attr('src',res.data.user_pic)
                $('.username').html(res.data.username)
            }
        }
    })
 }

 adminUser();