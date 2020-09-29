
$('#quit').click(function(e){
    sessionStorage.removeItem('token');
    location.href = './login.html'
})