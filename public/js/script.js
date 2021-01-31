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
        general: ['Problem Solving',  'Team collaboration', 'Teaching and training', 'Attentive to detail', 'Work well under pressure'],
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
        college: {
            university: 'University of Mississippi', 
            years: 'August 2015—May 2019',
            major: 'B.A. Psychology', 
            minors: 'Spanish, chemistry, biology',
        }, 
        coding: {
            university: 'UCLA Coding Bootcamp', 
            years: 'October 2020—May 2021',
            major: 'Web Development', 
        }
        
    }
};

    $("#skills").mouseover(function() {
        
        for (i = 0; i < resumeInfo.skills.general.length; i++) {
            let newList = $('<ul>');
            let newListItem = $('<li>');
            newListItem.html(`${resumeInfo.skills.general[i]}`);
            newList.append(newListItem);
            populateInfo.append(newList);
           
        }
        
    })

    $("#experience").mouseover(function() {
        let newList = $('<ul>');
        let newListItem1 = $('<li>');
        let newListItem2 = $('<li>');
        let newListItem3 = $('<li>');
        newListItem1.html(`Reasearch assistant: ${resumeInfo.workExperience["Peace Corps"]}`);
        newListItem2.html(`Restaurant manager: ${resumeInfo.workExperience["Restaurant manager"]}`)
        newListItem3.html(`U of Miss Tutor: ${resumeInfo.workExperience["U of Miss Tutor"]}`);
        newList.append(newListItem1);
        newList.append(newListItem2);
        newList.append(newListItem3);
        populateInfo.append(newList);
    })

    $("#education").mouseover(function() {
        
        let coding = $('<ul>');
        let codingItem1 = $('<li>');
        let codingItem2 = $('<li>');
        let codingItem3 = $('<li>');

        codingItem1.html(`${resumeInfo.education.coding.university}`);

        codingItem2.html(`${resumeInfo.education.coding.years}`);
    
        codingItem3.html(`${resumeInfo.education.coding.major}`);
    
        coding.append(codingItem1);
        coding.append(codingItem2);
        coding.append(codingItem3);
        populateInfo.append(coding);


        const { university, years, major, minors, GPA } = resumeInfo.education.college;
        let college = $('<ul>');
        let collegeItem1 = $('<li>');
        let collegeItem2 = $('<li>');
        let collegeItem3 = $('<li>');
        let collegeItem4 = $('<li>');

        collegeItem1.html(`${university}`);

        collegeItem2.html(`${years}`);
    
        collegeItem3.html(`Major: ${major}`);
    
        collegeItem4.html(`Minors: ${minors}`);

        college.append(collegeItem1);
        college.append(collegeItem2);
        college.append(collegeItem3);
        college.append(collegeItem4);
        populateInfo.append(college);



        
    })

    // $("#education").mouseover(function() {
    //     let newPar = $('<p>');
    //     newPar.html(`${resumeInfo.education.university}

    //     ${resumeInfo.education.years}
    
    //     Major: ${resumeInfo.education.major}
    
    //     Minors: ${resumeInfo.education.minors}

    //     GPA: ${resumeInfo.education.GPA}`);
    //     populateInfo.append(newPar);
    // })

    $(".brand").mouseover(function() {
        let email = $('<p>');
        let phone = $('<p>');
        phone.html('(601) 668-9467');
        email.html('jessicacrump7@gmail.com');
        contactInfo.append(phone);
        phone.append(email);
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