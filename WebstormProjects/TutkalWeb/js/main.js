$(".Header-switch").on("click", function(){
    if($(".Header").is(".menu-show")){
        $(".Header").removeClass("menu-show")
    }else{
        $(".Header").addClass("menu-show")

    }
})
$('.Highlights-slider').flickity({
    // options
    prevNextButtons: false,
    CellAlign: 'center',
    contain: false,
    pageDots: false,
})