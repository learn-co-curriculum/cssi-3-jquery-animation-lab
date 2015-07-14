$(document).ready(function(){

    $("#showPig").click(function(){
      $("#pig").show();
    });

    $("#hidePig").click(function(){
        $("#pig").hide();
    });

    $("div").click(function(){
        $(this).animate({left: '2000px'},"slow");
    });

});
