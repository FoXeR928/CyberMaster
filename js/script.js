$(function(){
    /*Функция кнопки отправки*/
    $('.send_button').click(function(evt){
        evt.preventDefault();
        /*Введение переменных*/
        var name=$('.name').val();
        var contact=$('.contacts').val();
        var descript=$('.description').val();
        var hide='Информация отсутствует или не известна'
        /*Проверка описания*/
        if(descript.length>0){
            descript=descript;
        }
        else{
            descript=hide;
        };
        /*Проверка введиныли имя и описание*/
        if(name.length>0 && contact.length>0){
            $('.ask_window').animate({
                height : '200px',
            },800)
            $('.back_conteiner').fadeIn(1000);
            $('.yes').click(function(){
                $('.ask_window').animate({
                    height : '0px',
                },1200)
                $('.back_conteiner').fadeOut(1000);
                $('.calls').prepend('<section class=call>'+'<h3 class=call_name>'+ name +'</h3>'+'<p class=call_text>'+descript+'</p>'+'</section>');
            })
            $('.no').click(function(){
                $('.ask_window').animate({
                    height : '0px',
                },1200)
                $('.back_conteiner').fadeOut(1000);
                $('.calls').prepend('<section class=call>'+'<h3 class=call_name>'+ hide +'</h3>'+'<p class=call_text>'+hide+'</p>'+'</section>');
            })
            /*Удаление содержимого полей*/
            $('.name').val('');
            $('.contacts').val('');
            $('.description').val('');
        };
    });
    /*Функция открытия футера*/
    $('.details').click(function (){
        /*Проверка открыт или нет*/
        if($('.hide_footer').is(':visible')){
            $(this).css('transform','rotate(0deg)')
        }
        else{
            $(this).css('transform','rotate(180deg)') 
        }
        $('.hide_footer').slideToggle()
    });
});