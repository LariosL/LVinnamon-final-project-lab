$(function() {
    let $content = $('#slider-content')
    const width = 271.5

    $('.left').click(() => {
        $content.animate({
            left: +width,
        }, 'slow', () => {
            $('#slider-content :last-child').prependTo($content)
            $content.css('left', '0')
        })
    })

    $('.right').click(() => {
        $content.animate({
            left: -width,
        }, 'slow', () => {
            $('#slider-content :first-child').appendTo($content)
            $content.css('left', '0')
        })
    })


})

