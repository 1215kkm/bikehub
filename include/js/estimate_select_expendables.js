$(document).ready(function(){

    $('.expend li').click(function(){
        $(this).toggleClass('on');
    });

    $(window).scroll(function(){
        let scrT = $(window).scrollTop();
        if(scrT > 30){
            $('.somobox-head').addClass('on');
        } else {
            $('.somobox-head').removeClass('on');
        }
    })
})
