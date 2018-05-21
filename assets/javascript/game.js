$(document).ready ( function() {

    var wins = 0;
    $('#wins').text(wins);

    var losses = 0;
    $('#losses').text(losses);
    
    var targetNumber = Math.floor(Math.random() * (120-19+1) + 19);
    $('#target-number').text(targetNumber);


    var totalCounter = 0;
    var garnet = Math.floor((Math.random() * 12)+1);
    var pearl = Math.floor((Math.random() * 12)+1);
    var amethyst = Math.floor((Math.random() * 12)+1);
    var roseQuartz = Math.floor((Math.random() * 12)+1);

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
        targetNumber = Math.floor(Math.random() * (120-19+1) + 19);
        $('#target-number').text(targetNumber);
        garnet = Math.floor((Math.random() * 12)+1);
        pearl = Math.floor((Math.random() * 12)+1); 
        amethyst = Math.floor((Math.random() * 12)+1);
        roseQuartz = Math.floor((Math.random() * 12)+1);
        // console.log('New target number is ' + targetNumber);
    }
    

    $('img').click('.crystalImage', function(event) {
        if (totalCounter === targetNumber) {
            alert('you win');
            wins++;
            $('#wins').text(wins);
            resetGame();

        } else if (totalCounter > targetNumber) {
            alert ('you lose');
            losses++;
            $('#losses').text(losses);
            resetGame();
        }
        // console.log(totalCounter);
    });
   
});




