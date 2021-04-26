$(function(){
    $('.details').click(function (){
        if($('.hide_footer').is(':visible')){
            $(this).css('transform','rotate(0deg)')
        }
        else{
            $(this).css('transform','rotate(180deg)') 
        }
        $('.hide_footer').slideToggle()
    });
});