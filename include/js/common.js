$(document).ready(function(){

    $('header').load('/html/common/top.html', headerAction);
    $('footer').load('/html/common/footer.html');

    function headerAction(){
        $('.over-menu .ham').click(function(){
            $('.over-menu nav').fadeIn(100).addClass('on');
        });
        $('.over-menu nav').click(function(e){
            if($(e.target).hasClass('over-nav') || $(e.target).hasClass('btn-close')){
                console.log('k')
                $('.over-menu nav').removeClass('on').fadeOut(700);
            }
        })
    }

    setTimeout(function(){
        $('.splash').fadeOut(200)
    },1500)
    


    
    $(window).scroll(function(){
        header()
    });
    
    header()
    function header(){
        let scrT = $(window).scrollTop();
    
        if(scrT > 30){
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }
    };

})
