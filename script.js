$(document).ready(function () {
    $('.flexbox-container-2 .flexbox-item2:lt(3) ').show();
    $('.less').hide();
    var items =  12;
    var shown =  3;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.flexbox-container-2 .flexbox-item2:visible').length+3;
        if(shown< items) {
          $('.flexbox-container-2 .flexbox-item2:lt('+shown+')').show(300);
        } else {
          $('.flexbox-container-2 .flexbox-item2:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('.flexbox-container-2 .flexbox-item2').not(':lt(3)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});