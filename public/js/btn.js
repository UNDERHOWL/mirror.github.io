$(function(){
  //ボタンのイベント
  $("#record").click(function() {
      //h2要素のsampleクラスを追加する
      $("#record").addClass("record_none");
      $("#stop").addClass("stop_block");
      $(".record").addClass("record_none");
      $(".stop").addClass("stop_block");
  });

  $("#stop").click(function() {
      //h2要素のsampleクラスを追加する
      $("#stop").removeClass("stop_block");
      $("#again").addClass("again_block")
      $("#download").addClass("download_block")
      $(".stop").removeClass("stop_block");
      $(".again").addClass("again_block")
      $(".download").addClass("download_block")
  });

  $("#again").click(function() {
      //h2要素のsampleクラスを追加する
      $("#again").removeClass("again_block");
      $("#download").removeClass("download_block");
      $("#stop").addClass("stop_block");
      $(".again").removeClass("again_block");
      $(".download").removeClass("download_block");
      $(".stop").addClass("stop_block");
  });
});