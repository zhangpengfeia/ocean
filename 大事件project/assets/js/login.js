

$('.toggle').on('click',function(e){
    $(this).parents('.login').addClass('none').siblings('.login').removeClass('none')
})


$('#form-signin').submit(function(e){
    e.preventDefault()
    var fd = $(this).serialize();
    $.ajax({
        type:'post',
        url:"api/login",
        data:fd,
        success:function(res){
            if(res.status == 0){
                sessionStorage.setItem('token',res.token)
                location.href = './index.html'
            }
            $('.alt2').show();
            $('.alt2').html(res.message)
            setTimeout(function(){
                $('.alt2').hide();
            },2000)
        }
    })
})


$('#form-signup').submit(function(e){
    e.preventDefault();
    var fd = $(this).serialize();
    console.log(fd);
    $.ajax({
        type:'post',
        url:"api/reguser",
        data:fd,
        success:function(res){
            console.log(res);
            if(res.status == 0){
                setTimeout(function(){
                    $('.signUp').addClass('none')
                    $('.signIn').removeClass('none')
                },2000)
            }
            $('.alt').show();
            $('.alt').html(res.message)
            setTimeout(function(){
                $('.alt').hide();
            },2000)
        }
    })

})