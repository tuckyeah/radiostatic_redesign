    // Special Thanks to Russell Quinn for his immense help on crafting this code

function pageSpecificFunction() {
    //dummy function for page specific behavior
}


function onPageClick() {

    if (allowClicks == false) {
        //we haven't finished the previous animation, so ignore this click
        return;
    }

    allowClicks = false;

    currentStage++;

    if (currentStage > stagesInSections[currentSection]) {

        $('.section-' + currentSection).fadeOut('slow', function() {

            currentSection++;
            currentStage = 1;
            fadeInCurrentStage();
        });

    } else {
        
        fadeInCurrentStage();
    }
    
    pageSpecificFunction();

}

function fadeInCurrentStage() {

      $('.section-' + currentSection).find('.fadeIn:hidden:first').fadeIn('slow', function() {

            if ((currentStage + 1) > stagesInSections[currentSection] && (currentSection + 1) >= totalSections) {
                
                //we've reached the end of this page, so unset the pointer hand and don't set allowClicks to true
                $("html").css('cursor', 'auto');

                nextPageLink = $('a').attr("href");
                
                console.log('<a href="'+nextPageLink+'" />')
                
                $("body").wrapInner('<a href="'+nextPageLink+'" />')
                
                return;
            }
            else {
                allowClicks = true;
            }

        });
}


$(document).ready(function() {
    
    $('.fadeIn').hide();
    $('.active').hide();
    $("html").css('cursor', 'pointer');

    allowClicks = true;

    currentSection = 0;
    currentStage = 0;

    totalSections = $('.content').children().length;
    stagesInSections = [];
    

    for (i = 0; i < totalSections; i++) {
        stagesInSections[i] = $('.section-' + i + ' .fadeIn').length
    }
    
    $(document).on('click', function(){
        onPageClick();
    })

    $(document).keypress(function() {
        onPageClick(); 
    });
    

    
    //manually call this once, so we show the first stage on page load
    onPageClick();

})

