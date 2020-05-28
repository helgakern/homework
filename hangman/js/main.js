$(document).ready(() => {
    //Stretch #1 - list of random words
    var words = [
      "monitor",
      "program",
      "application",
      "keyboard",
      "javascript",
      "gaming",
      "network",
      "octopus",
      "shark",
      "snake",
      "rabbit",
      "react",
      "tiger",
      "giraffe",
      "zombie",
      "human",
      "donkey",
      "zebra",
      "angel",
      "demon"
    ];
    let errorCount = 0;
    let guessArray = [];
    let finalArray = [];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    let word = selectedWord.split("");
  
    function selectWord() {
      selectedWord = words[Math.floor(Math.random() * words.length)];
      word = selectedWord.split("");
  
      finalArray = [];
      guessArray = [];
      errorCount = 0;
  
      //Set finalArray as array filled with "_"
      for (let i = 0; i < word.length; i++) {
        finalArray.push("_");
      }
      //Initialize the empty space
      $(".empty-word").replaceWith(
        `<div class="empty-word"><h1>${finalArray.join(" ")}</h1></div>`
      );
      $(".key").removeClass("highlight");
      refreshImage();
    }
  
    function refreshImage() {
      // Change image based on Error Count
      switch (errorCount) {
        case 0:
          document.querySelector("#hang-image").src = `./images/gallows-00.jpg`;
          break;
        case 1:
          document.querySelector("#hang-image").src = `./images/gallows-01.jpg`;
          break;
        case 2:
          document.querySelector("#hang-image").src = `./images/gallows-02.jpg`;
          break;
        case 3:
          document.querySelector("#hang-image").src = `./images/gallows-03.jpg`;
          break;
        case 4:
          document.querySelector("#hang-image").src = `./images/gallows-04.jpg`;
          break;
        case 5:
          document.querySelector("#hang-image").src = `./images/gallows-05.jpg`;
          break;
        case 6:
          document.querySelector("#hang-image").src = `./images/gallows-06.jpg`;
          break;
        default:
      }
    }
  
    selectWord();
  
    let deathSound = new Audio(
      "http://soundbible.com/mp3/neck_snap-Vladimir-719669812.mp3"    );
    let victory = new Audio(
      "https://themushroomkingdom.net/sounds/wav/smb/smb_stage_clear.wav"
    );
  
    function checkWord() {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < guessArray.length; j++) {
          if (word[i] == guessArray[j]) {
            finalArray[i] = word[i];
          }
        }
      }
      $(".empty-word").replaceWith(
        `<div class="empty-word"><h1>${finalArray.join(" ")}</h1></div>`
      );
    }
  
    function mainCallback(char) {
      if (errorCount > 5) {
        deathSound.play();
        setTimeout(function() {
          if (confirm("You died! Do you want to play again?")) {
            selectWord();
          } else {
          }
        }, 200);
        return;
      } else if (word.join("") == finalArray.join("")) {
        setTimeout(function() {
          if (confirm("You Win! Do you want to play again?")) {
            selectWord();
          } else {
          }
        }, 200);
        return;
      } else {
        //Check if the character has already been guessed.  Exit if it has.
        if (guessArray.includes(char)) {
          return;
        }
        // Push the character into guessArray if it hasn't been checked.
        guessArray.push(char);
        if (word.includes(char)) {
          //run check word function the word includes the character
          checkWord();
        } else {
          //Otherwise increase the error count
          errorCount++;
          console.log(`Error Count: ${errorCount}`);
        }
  
        console.log(word);
        console.log(finalArray);
  
        refreshImage();
  
        if (word.join("") == finalArray.join("")) {
          victory.play();
          setTimeout(function() {
            if (confirm("You Win!")) {
              selectWord();
            } else {
            }
          }, 200);
          return;
        }
  
        if (errorCount > 5) {
          deathSound.play();
          setTimeout(function() {
            if (
              confirm(
                "You experienced a painful death! Do you want to try again?"
              )
            ) {
              selectWord();
            } else {
            }
          }, 200);
          return;
        }
      }
    }
  
    $(".key").on("click", function(event) {
      $(this).addClass("highlight");
      let character = event.target.innerHTML.toLocaleLowerCase();
      mainCallback(character);
    });
  
    //Stretch #2 - Take keyboard inputs
    document.addEventListener("keydown", event => {
      const { key } = event;
      console.log("key:", key);
      capitalKey = key.toUpperCase();
      $(`span:contains(${capitalKey})`).addClass("highlight");
      mainCallback(key);
    });
  });