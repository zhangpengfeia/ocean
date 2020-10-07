$(function(){

    $.ajax({
        type:'get',
        url:"my/article/list",
        data:{
            pagenum:1,
            pagesize:10
        },
        success:function(res){
            console.log(res);
            if(res.status == 0){

                var temp = template("arctive-list",res)

                $('tbody').html(temp)

            }
        }
    })




})