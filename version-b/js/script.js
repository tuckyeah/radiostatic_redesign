function fadeCounter(n) {
    return $('.section-'+n+' .fadeIn').length 
}

function visFadeCounter(n) {
    return $('.section-'+n+' .fadeIn:visible').length
}


$(document).ready(function() {
    $('.fadeIn').hide();

    $(document).on('click', function() {
        onPageClick();
    }).click();

    $(document).keypress(function() {
        onPageClick(); 
    });
})

