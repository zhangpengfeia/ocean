 
 //调用用户信息接口函数

 function adminUser(){
    $.ajax({
        type:'get',
        url:'my/userinfo',
        success:function(res){
            if(res.status == 0){
                console.log(res);
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