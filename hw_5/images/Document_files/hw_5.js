function question11() {


    var img2 = document.createElement("img");

    img2.src = "images/ezgif.com_optimize__24_.gif";
    var src = document.getElementById("x");

    src.appendChild(img2);
    document.getElementById("demo").innerHTML = img.src;

    src.appendChild(img2);
    var img = document.createElement("div2");

    img.src = question11()
    var src = document.getElementById("x");

    src.appendChild(img);

}




function question12() {


    var img2 = document.createElement("img");

    img2.src = "images/download.png";
    var src = document.getElementById("x");

    src.appendChild(img2);
    document.getElementById("demo").innerHTML = img.src;

    src.appendChild(img2);
    var img = document.createElement("div2");

    img.src = question12()
    var src = document.getElementById("x");

    src.appendChild(img);

}




function question13() {


    var img2 = document.createElement("img");

    img2.src = "images/giphy.gif";
    var src = document.getElementById("x");

    src.appendChild(img2);
    document.getElementById("demo").innerHTML = img.src;

    src.appendChild(img2);
    var img = document.createElement("div2");

    img.src = question11()
    var src = document.getElementById("x");

    src.appendChild(img);

}

function question14() {


    var img2 = document.createElement("img");

    img2.src = "images/patsfalcons.gif";
    var src = document.getElementById("x");

    src.appendChild(img2);
    document.getElementById("demo").innerHTML = img.src;

    src.appendChild(img2);
    var img = document.createElement("div2");

    img.src = question11()
    var src = document.getElementById("x");

    src.appendChild(img);

}

function myfunct() {
    var question1 = {
        question: prompt("who won the 2002 superbowl (ANSWER MUST BE A ONE WORD ANSWER)"),

        answer_choices: ["patriots", "panthers", "cowboys", "glossy-patriots-logo-png-17.png"],

    }

    if (question1.question.toLowerCase() === question1.answer_choices[0]) {
        question11()
    } else if (question1.question.toLowerCase() !== question1.answer_choices[0]) {
        question12()

    }

}

function myfunct2() {
    var question1 = {
        question: prompt("who are the 2019 champs (ANSWER MUST BE A ONE WORD ANSWER)"),

        answer_choices: ["patriots", "panthers", "cowboys", "glossy-patriots-logo-png-17.png"],

    }

    if (question1.question.toLowerCase() === question1.answer_choices[0]) {
        question13()
    } else if (question1.question.toLowerCase() !== question1.answer_choices[0]) {
        question12()

    }

}

function myfunct3() {
    var question1 = {
        question: prompt("who are the 2019 champs (ANSWER MUST BE A ONE WORD ANSWER)"),

        answer_choices: ["patriots", "panthers", "cowboys", "glossy-patriots-logo-png-17.png"],

    }

    if (question1.question.toLowerCase() === question1.answer_choices[0]) {
        question14()
    } else if (question1.question.toLowerCase() !== question1.answer_choices[0]) {
        question12()

    }

}