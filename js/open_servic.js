$(function(){
    $('.send_button').click(function(evt){
        evt.preventDefault();
        $('form').animate({
            height : '0px',
        },1200)
        $('.back_conteiner').fadeOut(1000);
        $('.name').val('');
        $('.contacts').val('');
        $('.description').val('');
    })
    $('.services').click(function(evt){
        $('form').animate({
            height : '505px',
        },800)
        $('.back_conteiner').fadeIn(1000);
    }) 
})