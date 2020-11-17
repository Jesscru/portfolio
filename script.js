$( document ).ready(function() {
var emailIcon = $('.email-icon');
var form = $('.form');
var border = $('.border');


    emailIcon.on('click', function(){
        form.css('visibility', 'visible');
        emailIcon.css('visibility', 'hidden');
        border.css('visibility', 'hidden');
    })


})