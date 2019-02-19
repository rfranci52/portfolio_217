function work() {



    // used  https://stackoverflow.com/questions/7056770/changing-the-way-a-javascript-alert-or-prompt-looks for this function
    function closeAlertBox() {
        alertBox = document.getElementById("alertBox");
        alertClose = document.getElementById("alertClose");
        alertBox.style.visibility = "hidden";
        alertClose.style.visibility = "hidden";
    }
    window.alert = function (msg) {
        var id = "alertBox",
            alertBox, closeId = "alertClose",
            alertClose;
        alertBox = document.createElement("div");
        document.body.appendChild(alertBox);
        alertBox.id = id;
        alertBox.innerHTML = msg;
        alertClose = document.createElement("div");
        alertClose.id = closeId;
        alertClose.innerHTML = "x";
        // alertBox.appendChild(alertClose);
        alertBox.style.visibility = "visible";
        alertClose.style.visibility = "visible";
        alertClose.onclick = closeAlertBox;
    };






    var array2 = ["bird", "cat", "house", "google", "because"]

    var word = array2[Math.floor(Math.random() * array2.length)];

    //   parse should be used to make numbers literal like "10" would equal 10
    // var par_se = parseInt(store_letter)




    console.log(word)
    var answer = [];
    // this for statement prints a "_" for every letter in the word

    for (var i = 0; i < word.length; i++) {
        answer[i] = "_";
        console.log(answer[i])
    }

    // this variable holds the word
    var remainingLetters = word.length;
    console.log(word.length)
    var remaining_after = word.length
    // console.log(store_remaining_letters)
    var remaining_let = word.length



    while (remainingLetters > 0) {
        alert("This is the number of remaining letters:\n" + answer.join(" "));

        // while the there are more letters remaining
        while (remainingLetters > 0) {

            alert("the correct answer is " + " " +

                word +

                ", good job, you win!")
            console.log(answer.join(" "))

            // keep this variable constant

            var enter_a_letter2 = prompt((
                    "Please enter a letter , if you guess the word correctly, you win!") +
                "This is the number of remaining letters:\n" + answer.join(" "));
            //  + prompt(
            // "hint " +
            // (remaining_after) + " " + "total letters " +
            // "if you enter a letter here, it will not be recorded")
            var store_letter = word[j]
            // for (var j = 0; j < word.length; j++) {
            //     if (word[j] === enter_a_letter2) {
            //         prompt(
            //             remainingLetters--)
            //     }


            for (var j = 0; j < word.length; j++) {
                if (word[j] === enter_a_letter2) {
                    console.log(word[j])
                    console.log(answer[j])
                    answer[j] = enter_a_letter2;
                    store_letter = word[j];
                    // enter_a_letter2 = prompt("Please enter a letter");;
                    remainingLetters--;

                    // if (remainingLetters-- === true) {
                    //     var store_remaining_letters = remainingLetters - 1
                    // }


                    if (word.includes !== store_letter) {

                        // alert("hint:" + " " + "the answer has " + (remainingLetters - 1 + 1) + " " +
                        //     "characters remaining  " + " [ " +
                        //     answer +
                        //     " ] " +
                        //     "hit the ok button to continue ")
                    }
                }
            }
        }
    }
}