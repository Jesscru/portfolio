$( document ).ready(function() {
var emailIcon = $('.email-icon');
var form = $('.form');


    emailIcon.on('click', function(){
        form.css('visibility', 'visible');
        emailIcon.css('visibility', 'hidden');
    })


})