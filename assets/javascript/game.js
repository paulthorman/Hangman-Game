// Hangman Game


// Variables
var wordArray = ["toy story","cars","up","finding nemo","monsters inc","wall e"];
var open = [];
var score;
var guessed = [];
var attempts;
var allowedI = [' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',

'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',

't', 'u', 'v', 'w', 'x', 'y', 'z'];


// FUNCTIONS // 

document.onkeyup = function(event){
    score = 0;
    // randomizing words from array
    var randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];
    // Allowing total attempts to guess letters 5 greater than count of letters in random word 
    attempts = randomWord.length + 5; 
    // Display attempts
    document.getElementById('guesses-remaining').innerHTML = attempts;
    for (var i = 0; i < randomWord.length; i++) {
        // Pushing _ for each letter in randomword to array
        open.push(" _ ");
        // Using join method to turn array elements into string
        var dash = open.join(" ");
        // Displaying dashes in html 
        document.getElementById("currentWord").innerHTML = dash;
        }; 

    
    document.onkeyup = function(event) {
        //  Gathering user input from key event and making lower case
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();
        // 
        if ((allowedI.includes(userInput)) && (guessed.includes(userInput) == false) ) {
            for (i=0; i<(randomWord.length); i++) {
                // if the key selected is part of the random word replace the _ with the letter
                if(randomWord[i] === userInput){
                    open[i] = userInput
                    dash = open.join("");
                    document.getElementById("currentWord").innerHTML = dash;
                };
            }
            // Subtract an attempt after each key is selected 
            attempts--;
            document.getElementById('guesses-remaining').innerHTML = attempts;
            // Push key event into into guessed array so it can only be selected once
            guessed.push(userInput);
            // Using join method to turn array elements into string
            var used = guessed.join(" ");
            document.getElementById('used-letters').innerHTML = used;
            // evalutaing win or loss 
            if(dash === randomWord) {
                setTimeout(function(){
                    alert("To infinity, and beyond!");   
                }, 500);
                // Increasing score if random word is guessed
                score++;
                // Update score
                document.getElementById('score').innerHTML = score;
            // if no more attempts left alert player they lost and the word 
            } else if(attempts === 0) {
                alert("Reach for the sky, the movie was: " + randomWord);
            }


            // restarting the the game
            if(dash === randomWord || attempts === 0) {
                // Generate new random word
                randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
                // Allowing total attempts to guess letters 5 greater than count of letters in random word 
                attempts = randomWord.length + 5;
                document.getElementById('guesses-remaining').innerHTML =  attempts;
                used = null;
                document.getElementById('used-letters').innerHTML = used;
                dash = null;
                guessed = [];
                open = [];
                for (var i = 0; i < randomWord.length; i++) {
                open.push(" _ ");
                var dash = open.join(" ");
                setTimeout(function(){
                 document.getElementById('currentWord').innerHTML = dash;   
                 }, 500)
            }

            //change hangman photos based on incorrect answer
                      if('guesses-remaining' === 1){
                        $('.1').show();
                        $('.0, .2, .3, .4, .5, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 2){
                        $('.2').show();
                        $('.0, .1, .3, .4, .5, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 3){
                        $('.3').show();
                        $('.0, .1, .2, .4, .5, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 4){
                        $('.4').show();
                        $('.0, .1, .2, .3, .5, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 5){
                        $('.5').show();
                        $('.0, .1, .2, .3, .4, .6, .7, .8, .9, .10').hide();
                      }else if(guessCount === 6){
                        $('.6').show();
                        $('.0, .1, .2, .3, .4, .5, .7, .8, .9, .10').hide();
                      }else if(guessCount === 7){
                        $('.7').show();
                        $('.0, .1, .2, .3, .4, .5, .6, .8, .9, .10').hide();
                      }else if(guessCount === 8){
                        $('.8').show();
                        $('.0, .1, .2, .3, .4, .5, .6, .7, .9, .10').hide();
                      }else if(guessCount === 9){
                        $('.9').show();
                        $('.0, .1, .2, .3, .4, .5, .6, .7, .8, .10').hide();
                      }

            }

        }

        
    }

 }