$(function() {

    let WIDTH = 800
    let $content = $('#slider-content')

    function handleResize() {
    const windowWidth = $(window).width();
    if(windowWidth <= 800) {
        WIDTH = 600
    }else if(windowWidth > 800){
        WIDTH = 800
    }
    }

    handleResize();
    $(window).resize(handleResize);

    $('.left').click(() => {
        $content.animate({
            left: +WIDTH,
        }, 'slow', () => {
            $('#slider-content :last-child').prependTo($content)
            $content.css('left', '0')
        })
    })

    $('.right').click(() => {
        $content.animate({
            left: -WIDTH,
        }, 'slow', () => {
            $('#slider-content :first-child').appendTo($content)
            $content.css('left', '0')
        })
    })


})

