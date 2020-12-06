$(document).ready(function(){
    $(".hamburg_bar").click(function(){
        if($(this).hasClass("fa-reorder")){
            $(this).removeClass("fa-reorder");
            $(this).addClass("fa-remove");

            $(".nav").addClass("hamburg_bar_show");
        }
        else{
            $(this).removeClass("fa-remove");
            $(this).addClass("fa-reorder");

            $(".nav").removeClass("hamburg_bar_show");
        }
    });

    $(window).resize(function() {
        var window_width = $(window).width();

        if(window_width >= 768){ //表示不為手機板
            $(".nav").removeClass("hamburg_bar_show");

            if($(".hamburg_bar").hasClass("fa-remove")){ //表示如果從其他屏幕切換回來時，漢堡bar不可顯示 X (叉叉) icon
                $(".hamburg_bar").removeClass("fa-remove");
                $(".hamburg_bar").addClass("fa-reorder");
            }
        }
    });
});