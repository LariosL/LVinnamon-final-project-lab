$(function() {
    let $content = $('#slider-content')
    let WIDTH = 271.5

    function handleResize() {
        const windowWidth = $(window).width();
        if(windowWidth <= 800) {
            WIDTH = 250
        }else if(windowWidth > 800){
            WIDTH = 271.5
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

