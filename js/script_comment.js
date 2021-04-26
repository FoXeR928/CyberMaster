$(function (){
    $('.send_button').click(function(evt){
    evt.preventDefault();
    var name=$('.name').val();
    var descript=$('.description').val();
    var hide='Информация отсутствует или не известна'
    if(name.length>0){
        name=name;
    }
    else{
        name=hide;
    };
    if(name.length>0 && descript.length>0){    
        $('article').append('<section class="reviews_box">'+'<h3 class="reviews_name">'+name+'</h3>'+'<p class="reviews_text">'+descript+'</p>'+'</section>')
        $('.name').val('');
        $('.description').val('');
    }
    })
})