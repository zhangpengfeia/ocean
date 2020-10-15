$(function(){

    function load(){
        $.ajax({
            type:"get",
            url:"my/article/cates",
            success:function(res){
               if(res.status == 0){
                    var temp = template('cates-list',res)
                    $('tbody').html(temp)
               }
            }
        })
        
    }

    function del(i){
        $.ajax({
            type:"get",
            url:"my/article/deletecate/"+i,
            success:function(res){
                if(res.status == 0){
                  load()
                }
                    layer.msg(res.message)  
            }
        })
    }

    $("#delAll").click(function(){
        $.ajax({
            type:"get",
            url:"my/article/cates",
            success:function(res){
                for(let i=0;i<res.data.length;i++){
                    var index = res.data[i].Id
                    del(index)
                }
               if(res.status == 0){
                    var temp = template('cates-list',res)
                    $('tbody').html(temp)
               }
            }
        })
    })

    load()

    $('#cate-add').click(function(e){
        var op = layer.open({
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            title:"添加分类",
            content:$('#add-tpl').html(),
            area:["550px","350px"]
        })

        //为什么放在里面，因为当点击时弹出层的模板才添加到html页面中
        $("#add-form").submit(function(e){
            e.preventDefault()
            console.log(1);
            var fd = $(this).serialize()
    
            $.ajax({
                type:"post",
                url:"my/article/addcates",
                data:fd,
                success:function(res){
                   if(res.status == 0){
                        load()
                        layer.close(op)
                   }
                }
            })
        })
    })

    //删除
    $('.layui-table').on('click','#cate-del',function(e){
        var i = e.target.dataset.id

        del(i)

    })

    
    //编辑
    $('.layui-table').on('click','#cate-info',function(e){
        var i = e.target.dataset.id


        $.ajax({
            type:"get",
            url:"my/article/cates/" + i,
            success:function(res){
                if(res.status == 0){
                    var op = layer.open({
                        type: 1,
                        skin: 'layui-layer-rim', //加上边框
                        title:"编辑",
                        content:$('#info-tpl').html(),
                        area:["550px","350px"]
                    })

                    layui.form.val('info-form', res.data)

                    $('#info-form').submit(function(e){
                        e.preventDefault()

                        var fd = $(this).serialize()
                        $.ajax({
                            type: 'post',
                            url: 'my/article/updatecate',
                            data: fd,
                            success: function (res) {
                              if (res.status === 0) {
                                // 更新成功，关闭弹出层，刷新列表
                                layer.close(op)
                                load()
                              }
                              layer.msg(res.message)
                            }
                          })
                    })

                }
            }
        })


     })

})