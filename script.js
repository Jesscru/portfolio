$( document ).ready(function() {
var messageIcon = $('.message-icon');
var emailIcon = $('.email-icon');
var form = $('.form');
var contactLabels = $('.find-me');


    messageIcon.on('click', function(){
        form.css('visibility', 'visible');
        messageIcon.css('visibility', 'hidden');
        emailIcon.css('visibility', 'hidden');
        emailIcon.css('visibility', 'hidden');
        contactLabels.css('visibility', 'hidden');
    })


})