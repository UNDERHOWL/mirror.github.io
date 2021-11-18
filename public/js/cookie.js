var cookie = $.cookie('campaign');
if(cookie){
    $('.notification_container').addClass('close');
}
$('.notification_container').on('click',function(){
    $('.notification_container').addClass('close');
    $.cookie('campaign','close');
});