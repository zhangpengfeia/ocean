$(function(){

    //设置裁剪区域
    var options = {
        aspectRation:1,
        preview:".img-preview"
    }


    //将裁剪区域配置插入
    $('#image').cropper(options)

    //点击上传文件，触发隐藏文件的事件
    $('#select-img').click(function(e){
        e.preventDefault()
        $('#myfile').click()
    })

    //事件触发事件
    $('#myfile').change(function(e){
        //获取所有文件
        var file = e.target.files
        //将图片转为url地址
        var newurl = URL.createObjectURL(file[0])
        console.log(newurl);
        //重新渲染裁剪区域
        $('#image').cropper('destroy')    // 销毁旧的裁剪区域
        .attr('src', newurl)  // 重新设置图片路径
        .cropper(options)        // 重新初始化裁剪区域
        // $('#image').attr('src',newurl)

    })


    $('#crop-img').click(function(e){
        //将裁剪区裁剪出的 图片生成url地址
        var imgurl = $('#image').cropper('getCroppedCanvas',{
            width:100,
            height:100
        }).toDataURL('image/png')
        $.ajax({
            type:"post",
            url:"my/update/avatar",
            data:{
                avatar:imgurl
            },
            success:function(res){
                layer.msg(res.message)
                parent.adminUser();
            }
        })

    })



})