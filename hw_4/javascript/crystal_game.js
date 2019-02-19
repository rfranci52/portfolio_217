function getRandomInt(max) {
    return Math.floor(Math.random() * 120) + 1;
}
var targetNumber = getRandomInt();

var score = 0

// $("#crystal").on("click", function () {

//   score = crystal + score

//   $("#score").text(score);

//   if (score == numberOptions) {

//     win();

//   } else if (score > numberOptions) {
//     lose();

//   }



// })



$("#number-to-guess").text(targetNumber);
$("#score").text(score);

// the var counter = 0 to set the starting value to 0, if you made it 20, the starting value would be 20
var counter = 0;


var numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() *
    12) + 1, Math.floor(Math.random() * 12) + 1];

for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr(
        "src",
        "images/crystal_epic.png"
    );
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}
$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert(("New score: ") + counter);

    if (counter === targetNumber) {
        var win =
            console.log(counter)

        alert("You win!");
        (reset())
        console.log(counter)



    } else if (counter >= targetNumber) {
        var lose =
            alert("You lose!!");
        (reset())
        console.log(counter)


    }
})

function reset() {



    counter = 0;

    targetNumber = getRandomInt();
    var score = 0
    win_att = 1
    for (var q = 0; q > 5; q++) {
        if (win

            ==
            true

        ) {
            $("#score").text(score + win_att);
        }
        if (loss

            ==
            true

        ) {
            $("#score").text(score - win_att);
        }
    }

    $("#number-to-guess").text(targetNumber);
    // $("#score").text(score + 1);




}