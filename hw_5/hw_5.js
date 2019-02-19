// var score = document.getElementById("score").innerHTML = 0
myFunction();
myFunction2();
myFunction3();

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

    img2.src = "images/wrong.png";
    var src = document.getElementById("x");

    src.appendChild(img2);
    document.getElementById("demo").innerHTML = img.src;

    src.appendChild(img2);
    var img = document.createElement("div2");

    img.src = question12()
    var src = document.getElementById("x");

    src.appendChild(img);
    // document.getElementById("score").text("loser")

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

function myFunction2() {
    setTimeout(function () {
        alert("you have 30 secs to answer all questions");
    }, 1000);
}


function emptybody() {
    $("#body").empty();
    var img2 = document.createElement("#body");

    img2.src = "images/giphy.gif";
    var src = document.getElementById("body");

    src.appendChild(img2);
    document.getElementById("body").innerHTML = img.src;

    src.appendChild(img2);
    var img = document.createElement("div2");

    img.src = question11()
    var src = document.getElementById("body");

    src.appendChild(img);
}
var divClone = $("body").clone();

function emptydiv() {
    $("body").empty();
    $("body").replaceWith(divClone.clone()); // Restore element with a copy of divClone

    var img2 = document.createElement("#body");

    img2.src = "images/giphy.gif";
    var src = document.getElementById("body");

    src.appendChild(img2);
    document.getElementById("body").innerHTML = img.src;

    src.appendChild(img2);
    var img = document.createElement("div2");

    img.src = question11()
    var src = document.getElementById("body");

    src.appendChild(img);
}




function myFunction() {
    setTimeout(function () {
        war = alert("times up, game over!");
    }, 30000);
    divClone = $("body").clone();

    // emptydiv();
}

function myFunction3() {
    setTimeout(function () {
        emptybody();
    }, 30000);

}
// if (confirm("times up, play again?") = true) {
//     alert("fixed")
// }

function myfunct() {
    var question1 = {
        question: prompt("who won the 2002 superbowl (ANSWER MUST BE A ONE WORD ANSWER)"),

        answer_choices: ["patriots", "panthers", "cowboys", "glossy-patriots-logo-png-17.png"],

    }

    if (question1.question.toLowerCase() === question1.answer_choices[0]) {


        setTimeout(function () {
            question11()
        }, 300);


        // score = document.getElementById("score").innerHTML = 1


    } else if (question1.question.toLowerCase() !== question1.answer_choices[0]) {
        question12()

    }

}





function myfunct2() {
    var question1 = {
        question: prompt("who are the 2017 champs (ANSWER MUST BE A ONE WORD ANSWER)"),

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


// $("#demo").on("click", function () {
//     //  Set the button alert's timeout to run three seconds after the function's called.
//     delayButtonAlert = setTimeout(function () {
//         alert("Alert #2: Called 3 seconds after the start button is clicked.");
//     }, 3000);
// });