$(document).ready(function(){
    //비밀번호 찾기에서 변경페이지로 갈때
    if(window.location.href.indexOf('?rental=onlybohum') > -1){
        $('.onlybohum').show();
    } 
    if(window.location.href.indexOf('?rental=bikeandbohum') > -1){
        $('.bikeandbohum').show();
    }
})

