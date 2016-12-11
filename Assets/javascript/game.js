// jQuery Ready Function waits for the document to complete loading before initiating Javascript
$(document).ready(function(){

//Variables================================================================
 

        // When random-button is clicked...
      $("#gem1").on("click", function() {
        
        var randomNumber="";

        for (var i = 0; i < 2; i++) {
          var random = Math.floor(Math.random() * 9) + 1;

          randomNumber = random + randomNumber; 
        }
        console.log(randomNumber)
      })

      $("#gem2").on("click", function() {
        
        var randomNumber="";

        for (var i = 0; i < 2; i++) {
          var random = Math.floor(Math.random() * 9) + 1;

          randomNumber = random + randomNumber; 
        }
        console.log(randomNumber)
      })

      $("#gem3").on("click", function() {
        
        var randomNumber="";

        for (var i = 0; i < 2; i++) {
          var random = Math.floor(Math.random() * 9) + 1;

          randomNumber = random + randomNumber; 
        }
        console.log(randomNumber)
      })

      $("#gem4").on("click", function() {
        
        var randomNumber="";

        for (var i = 0; i < 2; i++) {
          var random = Math.floor(Math.random() * 9) + 1;

          randomNumber = random + randomNumber; 
        }
        console.log(randomNumber)
      })
    })
    //     // ...create a string which will hold the lottery number.
    //     var lottoNumber = "";

    //     // Then create a loop that generates 9 separate numbers.
    //     for (var i = 0; i < 9; i++) {
    //       var random = Math.floor(Math.random() * 9) + 1;

    //       // Add to the lottery number.
    //       lottoNumber = random + lottoNumber;
    //     }

    //     // Then prepend the lotto number to the top of our random-number div.
    //     $("#gem1").prepend("<br><hr>" + lottoNumber);
    //   });
    // });


//Set-up gems===============================================================



//Check for outcome of the click=============================================
	




//GamePlay===================================================================


//Set-up and play the game=================================================

	

