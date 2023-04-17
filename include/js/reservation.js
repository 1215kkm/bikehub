$(function(){

    let inputVal
    $('.price input').click(function(){
        inputVal = $(this).val();
        if(inputVal == 0){
            $(this).val('')
        };
    })


    $('.price input').blur(function(){
        inputVal = $(this).val();
        if (inputVal == ''){
            $(this).val('0')
        }
    })


    $('.price input').keyup(function(){
        inputVal = $(this).val();
        
        if(inputVal > 0){
            $('.price button span.delete').show();
        } else {
            $('.price button span.delete').hide();
        }

    });

    $('.price button .delete').click(function(){
        $('.price input').val('0')
    })
    
})