/**
 * Created by jackklein on 12/9/15.


$(document).ready(function(){
  $('img').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('data-other-src')
        , 'data-other-src': $(this).attr('src')
    })
});
});

 */
