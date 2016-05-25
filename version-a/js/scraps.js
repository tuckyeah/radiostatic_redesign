function onPageClick(c) {
    
    var sectionNum = totalSections()

    for (n=0; n<sectionNum; n++) {
        //counts all fadeIns contained in that section
        var sectionLen = sectionCounter(n)
        //counts the fadeIns that are currently visible
        var visFades = visFadeCounter(n)

        if (sectionLen == visFades) {
            $('.section-'+n+':not(:last-child)').fadeOut('slow', function() {
                $('.section-'+n).next().find('.fadeIn:first').fadeIn('slow')
                return;
            });
        } else {
            $('.section-'+n).find('.fadeIn:hidden:first').fadeIn('slow');
            break;
        } 
    }

}


function totalSections() {
    return ($('.content').children()).length;
}

function sectionCounter(n) {
    return $('.section-'+n+' .fadeIn').length 
}

function visFadeCounter(n) {
    return $('.section-'+n+' .fadeIn:visible').length
}

$(document).ready(function() {
    var n = 0 //number of clicks on page
    $('.fadeIn').hide();

    $(document).on('click', function(){
        onPageClick(n);
    })
})

