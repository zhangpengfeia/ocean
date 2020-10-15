$(function(){

  function loadArticleList (options) {
    $.ajax({
        type:'get',
        url:"my/article/list",
        data:options,
        success:function(res){
            if(res.status == 0){
                var temp = template("arctive-list",res)
                $('tbody').html(temp)
            }
        }
    })
  }

  var params = {
    // 表示页码：当前查询第几页数据
    pagenum: 1,
    // 表示每页的条数：每页显示多少条数据
    pagesize: 10
  }

  loadArticleList(params)




  function loadCateList () {
    $.ajax({
        type:'get',
        url:"my/article/cates",
        success:function(res){
            console.log(res);
            if(res.status == 0){
                var temp = template('article-name',res)
                $('#category').html(temp)
                    layui.form.render('select') 
                }
            }
        })
    }
    loadCateList()

    $('.layui-form').submit(function(e){
        e.preventDefault()
        
        var fd = $(this).serializeArray()
        fd.forEach(function (item) {
            // 1.获取筛选条件的键和值
            var key = item.name
            var value = item.value
            
            // 2.先删除所有的键
            delete params[key]
            // 3.当有值的时候在给params添加键并设置值
            if (value) {
              params[key] = value
            }
          })

          //4.然后将这个对象传入获取列表函数
          loadArticleList(params)
    })

    $('.layui-table tbody').on('click','#arctive-del',function(e){
      
        var  id = e.target.dataset.id
        layer.confirm('确认要删除吗？', {icon: 3, title:'提示'}, function (index) {
        $.ajax({
          type:"get",
          url:"my/article/delete/"+id,
          success:function(res){
              layer.close(index)
              loadArticleList(params)
          }
        })
      })


    })



})