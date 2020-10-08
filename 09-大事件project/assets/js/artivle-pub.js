$(function(){
    //初始化富文本
    initEditor()

    var opt = {
        aspectRatio:1,
        preview:".img-preview"
    }
    $("#image").cropper(opt)



    $("#select-pic").on('click',function(){
        $("#myfile").click()

    })

    $("#myfile").change(function(e){
        var imgfd = e.target.files[0]
        var imgurl = URL.createObjectURL(imgfd)
        $("#image")
        .cropper('destroy')
        .attr("src",imgurl)
        .cropper(opt)
    })


    $('.layui-form').submit(function(e){
        e.preventDefault()

        var fd = new FormData(this)

        $('#image').cropper('getCroppedCanvas',{
            width:400,
            height:200
        }).toBlob(function(blob){
            fd.append('cover_img',blob)
            fd.append('state',"已发布")

            $.ajax({
                type: 'post',
                url: 'my/article/add',
                data: fd,
                // 防止参数转换为字符串
                processData: false,
                // 方式使用www格式请求参数
                contentType: false,
                success: function (res) {
                  layer.msg(res.message)
                }
              })
        })
    })

})