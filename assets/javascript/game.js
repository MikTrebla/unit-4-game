// var newGameNumbers = function(newGame) {
//     var garnet = Math.ceil(Math.random() * 20);
//     var pearl = Math.ceil(Math.random() * 20);
//     var amethyst = Math.ceil(Math.random() * 20);
//     var roseQuartz = Math.ceil(Math.random() * 20);
//     var randomTarget = Math.ceil(Math.random() * 100)
   
// }
// console.log(newGameNumbers)


// var increment = numberArray[Math.round(Math.random())];






$(document).ready ( function() {

    var wins = 0;
    $('#wins').text(wins);

    var losses = 0;
    $('#losses').text(losses);
    
    var targetNumber = Math.floor(Math.random() * 120);
    $('#target-number').text(targetNumber);


    var totalCounter = 0;
    var garnet = Math.floor((Math.random() * 10)+1);
    var pearl = Math.floor((Math.random() * 10)+1);
    var amethyst = Math.floor((Math.random() * 10)+1);
    var roseQuartz = Math.floor((Math.random() * 10)+1);

    $('#garnet').click(function () {
        totalCounter += garnet;
        $('#crystal-number').text(totalCounter);
    });
    $('#pearl').click(function () {
        totalCounter += pearl;
        $('#crystal-number').text(totalCounter);
    });
    $('#amethyst').click(function () {
        totalCounter += amethyst;
        $('#crystal-number').text(totalCounter);
    });
    $('#rosequartz').click(function () {
        totalCounter += roseQuartz;
        $('#crystal-number').text(totalCounter);
    });

    var resetGame = function() {
        totalCounter = 0;
        $('#crystal-number').text(totalCounter);
        targetNumber = Math.floor(Math.random() * 120);
        $('#target-number').text(targetNumber);
        garnet = Math.ceil(Math.random() * 15);
        pearl = Math.ceil(Math.random() * 15);
        amethyst = Math.ceil(Math.random() * 15);
        roseQuartz = Math.ceil(Math.random() * 15);
    }

    $('img').click('.crystalImage', function(event) {
        if (totalCounter === targetNumber) {
            alert('you win');
            wins++;
            $('#wins').text(wins);
            resetGame();

        } else if (totalCounter >= targetNumber) {
            alert ('you lose');
            losses++;
            $('#losses').text(losses);
            resetGame();
        }
    });
   
});




