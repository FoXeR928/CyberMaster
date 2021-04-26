$(function (){
    $('.send_button').click(function(evt){
    evt.preventDefault();
    var name=$('.name').val();
    var contact=$('.contacts').val();
    if(name.length>0 && contact.length>0){    
        $('.name').val('');
        $('.contacts').val('');
        $('.description').val('');
    }
    })
})