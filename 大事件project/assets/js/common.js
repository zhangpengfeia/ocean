
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
    }

    options.complete = function(res){

        window.NProgress && window.NProgress.done()

        if(res.responseJSON && res.responseJSON.status === 1 && responseJSON.message == "身份认证失败！"){
            sessionStorage.removeItem('mytoken')
            location.href = './login.html'
        }
    }

})
