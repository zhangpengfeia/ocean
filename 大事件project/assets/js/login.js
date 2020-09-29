
console.log(1);
$('.toggle').on('click',function(e){
    console.log(2);
    $(this).parents('.login').addClass('none').siblings('.login').removeClass('none')
})