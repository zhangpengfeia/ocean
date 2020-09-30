
$('#quit').click(function(e){
    layer.confirm('确认要退出吗',{title:"提示"},function(index){
        sessionStorage.removeItem('token');
        location.href = './login.html'
    })

})