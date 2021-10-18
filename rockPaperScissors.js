/* This Project demonstrates the Rock Paper Scissors game:
    Rules:
        Rock destroys scissors.
        Scissors cut paper.
        Paper covers rock.
        If there’s a tie, then the game ends in a draw.

    Cheat code: 
        'bomb' - always wins
                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/


const getUserChoice = userInput => {            // Arrow Function to get user input (static hardcoded input)
    userInput = userInput.toLowerCase();        // change to lowercase to prevent case type errors
  
    if (userInput === 'bomb'){
      return 'bomb'
    }
  
    if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors'){
      return userInput
    }
    else {
      console.log("Damn man! It's either rock, paper or scissors! What's " + userInput + ' ?') 
      }
  };
  

  function getComputerChoice(){                        // generate computer choice randomly
    const choice = Math.floor(Math.random() * 4);
  
    switch (choice){
      case 0:
        return 'rock'
      
      case 1:
        return 'paper'
  
      case 2:
        return 'scissors'
      
      default:
        return "I won't play again - I'm tired! :)"
    }
  }
  

  function determineWinner(userChoice, computerChoice){         // determines winner by comparison
    if (userChoice === 'bomb'){                 // cheat code
      return 'Cheat code activated! - You Win!'
    }
    if (userChoice === computerChoice){         
      return 'The game is tied!'
    }
  
    if (computerChoice === "I won't play again - I'm tired! :)"){    // extra fun line added :)
      return '\nYou win! - Buh on the real, the computer sef taya! Go do something meaningful with your life man!'
    }
    
    else if (userChoice === 'rock'){
      if (computerChoice === 'scissors'){
        return 'Congrats! - you won.'
      }
  
      else {
        return 'Sorry Champ, you lost! - better luck next time'
      }
    }
  
    else if (userChoice ==='paper'){
      if (computerChoice === 'scissors'){
        return 'Sorry Champ, you lost! - better luck next time'
      }
      else {
        return 'Congrats! - you won.'
      }
    }
  
    else {
      if (computerChoice === 'paper'){
        return 'Congrats! - you won.'
      }
  
      else {
        return 'Sorry Champ, you lost! - better luck next time'
      }
    }
  }
  
  
  function playGame(){                          // funtion to initiate the game
    const userChoice = getUserChoice('bomb');
    console.log(`You played ${userChoice}`);
  
    const computerChoice = getComputerChoice();
      console.log(`Computer:  ${computerChoice}`);
  
  console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame()


  // End of Code