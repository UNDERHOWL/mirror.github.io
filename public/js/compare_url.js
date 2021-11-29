var new_url = "jkeojkwal"
var old_url

function compare(){
    old_url = $.cookie("old_url");
    console.log('新しいURLは' + new_url)
    console.log('古いURLは' + old_url)
    if (new_url === old_url || new_url === null) {
        console.log('同じURLです');
        $(".notification_sentence").removeClass("notification_sentence_block");
    } else if(new_url != old_url) {
        console.log('違うURLです');
        $(".notification_sentence").addClass("notification_sentence_block");
        old_url = new_url;
        $.cookie("old_url",old_url);
        console.log(old_url)
    }
}

$(document).ready(function(){
    compare();
});


