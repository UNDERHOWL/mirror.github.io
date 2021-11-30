var new_url = "nmkvdslzv"
var old_url

$(document).ready(function(){
    old_url = $.cookie("old_url");
    console.log('新しいURLは' + new_url)
    console.log('古いURLは' + old_url)
    if (new_url === old_url || new_url === null) {
        console.log('同じURLのため通知は表示しません');
        $(".notification_sentence").removeClass("notification_sentence_block");
    } else if(new_url != old_url) {
        console.log('違うURLのため通知を表示し、old_urlを上書きします。');
        $(".notification_sentence").addClass("notification_sentence_block");
        old_url = new_url;
        $.cookie("old_url",old_url);
        console.log(old_url)
    }
})

