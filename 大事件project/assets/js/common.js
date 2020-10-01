
//优化ajax,在每次ajax请求前都会触发
var baseURL = 'http://ajax.frontend.itheima.net/'
$.ajaxPrefilter(function(options){

    if(options.url !== 'api/login' && options.url !== 'api/reguser'){
        options.headers = {
            Authorization:sessionStorage.getItem('token')
        }
    }

    options.url = baseURL + options.url



    options.beforeSend = function(){
        window.NProgress && window.NProgress.start()
        // window.NProgress && window.NProgress.set() - 设置百分比
        // window.NProgress && window.NProgress.inc() - 稍微增加


    }

    options.complete = function(res){
        window.NProgress && window.NProgress.done()
        if(res.responseJSON && res.responseJSON.status === 1 && res.responseJSON.message == "身份认证失败！"){
            sessionStorage.removeItem('mytoken')
            location.href = './login.html'
        }
    }

})
