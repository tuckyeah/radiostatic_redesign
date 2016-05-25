function randomPosition() {
    var h = $(document).height()-10;
    var w = $(document).width()-10;
    
    var newHeight = Math.floor(Math.random() * h);
    var newWidth = Math.floor(Math.random() * w);
    
    return [newHeight, newWidth];
}

function randomSize() {
    return Math.round(Math.random() * 2) + 5;
}
    

$(document).ready(function(){

//hides all fadeIns 
    $('.fadeIn').hide();
	$('.seqFade').hide();
    $('.hover').hide();

    $(document).on('click',function() {

// fades in items sequentially on document click
    $('.fadeIn:hidden:first').fadeIn('slow', function() {
          $("html, body").animate({ scrollTop: $("body")[0].scrollHeight}, 1000);
    });
		if('#flash') {
			$('#flash').fadeIn('slow').fadeOut('slow').fadeIn('slow').fadeOut('slow').fadeIn('slow');
		} 
    })
    .click();
//hides all instances of autoFadeIn, then fades them in sequentially;
	$('.autoFadeIn').hide();
	$('.autoFadeIn').each(function(index) {
		$(this).delay(1500*index).fadeIn('slow');
	})
    
//random stars;
    
     var starLimit = 30;
    
    for(var i = 0; i<= starLimit; i++) {
        $('.wrapper').append($('<div/>', {'id' : i, 'class': 'star'}))
    }
    
    $('.star').each(function(index) {
        var newPosition = randomPosition();
        var newSize = randomSize();
        
        $(this).css( {
            'margin-left':newPosition[1]+'px',
            'margin-top':newPosition[0]+'px',
            'width':newSize + 'px',
            'height':newSize + 'px'
        });
        $(this).delay(800*index).fadeIn('slow') 
    })
    
//hover function
    $('.mouseOver').hover(function() {
        $('.hover').fadeIn('slow');
        });

//crossFade function fadeIn    
    $('#letter').on('click', function() {
                $('#crossFadeOut').fadeOut('slow', function() {
                    $('#crossFadeIn').fadeIn('slow')
                })
            }); 
    
//make sure it's always at the bottom
  $(".content").click(function() {
    $("html, body").animate({ scrollTop: $(".content")[0].scrollHeight}, 1000);
  });



});
    


