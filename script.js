$( document ).ready(function() {

const messageIcon = $('.message-icon');
const emailIcon = $('.email-icon');
const form = $('.form');
const contactLabels = $('.contact');
const populateInfo = $('.populate-info');
const contactInfo = $('.email-and-phone');



    messageIcon.on('click', function(){
        form.css('visibility', 'visible');
        messageIcon.css('visibility', 'hidden');
        emailIcon.css('visibility', 'hidden');
        emailIcon.css('visibility', 'hidden');
        contactLabels.css('visibility', 'hidden');
    })

const resumeInfo = {
    skills: {
        general: ['web development', 'attentive to detail', 'customer service', 'team collaboration', 'teaching and training', 'malleable and adaptable', 'handling confidential information', 'conversational in Spanish'],
        codingSpecific: ['HTML', 'CSS', 'Javascript']
    },

     workExperience: {
        'Peace Corps': 'Taught English as a second language to Ecuadorian high school students',
        'Restaurant manager': 'Trained numerous employees, delegated work duties, counted and balanced cash register',
        'U of Miss Tutor': 'Provided Spanish help and practice to university students'
    }, 

    leadershipOther: {
        'Reasearch assistant': 'Worked with a team to study cognitive function in children; handled data collection and entry',
        'President of Sport Club Council': 'Collaborated with council members to make decisions about the organization as a whole as well as decisions about each sport club',
        'Vice president of Wellness Ambassadors': 'Assisted each of 4 wellness subgroups in running their programs and events'
    }, 

    education: {
        university: 'University of Mississippi', 
        years: 'August 2015-May 2019',
        major: 'B.A. Psychology', 
        minors: 'Spanish, chemistry, biology',
        GPA: 3.74
    }
};

    $("#skills").mouseover(function() {
        let newPar = $('<p>');
        newPar.html(`${resumeInfo.skills.general}`);
        populateInfo.append(newPar);
    })

    $("#experience").mouseover(function() {
        let newPar = $('<p>');
        newPar.html(`Reasearch assistant: ${resumeInfo.workExperience["Peace Corps"]}

        Restaurant manager: ${resumeInfo.workExperience["Restaurant manager"]}

        U of Miss Tutor: ${resumeInfo.workExperience["U of Miss Tutor"]}`);
        populateInfo.append(newPar);
    })

    $("#education").mouseover(function() {
        let newPar = $('<p>');
        newPar.html(`${resumeInfo.education.university}
        \n
        ${resumeInfo.education.years}
        \n
        Major: ${resumeInfo.education.major}
        \n
        Minors: ${resumeInfo.education.minors}
        \n
        GPA: ${resumeInfo.education.GPA}`);
        populateInfo.append(newPar);
    })

    $(".brand").mouseover(function() {
        let email = $('<p>');
        let phone = $('<p>');
        phone.html('(601) 668-9467');
        email.html('jessicacrump7@gmail.com');
        contactInfo.append(phone);
        contactInfo.append(email);
    })

$("#skills").mouseleave(function(){
    populateInfo.empty();
})

$("#experience").mouseleave(function(){
        populateInfo.empty();
    })

$("#education").mouseleave(function(){
    populateInfo.empty();
})

$(".brand").mouseleave(function(){
    contactInfo.empty();
})

})