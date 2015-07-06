var $win = $(window);

function checkScroll() {
    if ($win.scrollTop() > 100) {
        $win.off('scroll', checkScroll);
        $('#header').fadeIn(2000);
    }
}

$win.scroll(checkScroll);
