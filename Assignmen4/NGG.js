
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    let attempts = 0;
    let permission= confirm("Are you ready to play Number Guessing Game");
    if(permission)
    {
        while (true) {
            guess = prompt("Enter your guess:");
            attempts++;
    
            if (guess === null) {
                alert("Game cancelled.");
                break;
            }
    
            guess = Number(guess);
    
            if (isNaN(guess)) {
                alert("Please enter a valid number.");
                continue;
            }
    
            if (guess < 1 || guess > 100) {
                alert("Please enter a number between 1 and 100.");
                continue;
            }
    
            if (guess < randomNumber) {
                alert("Too low! Try again.");
            } else if (guess > randomNumber) {
                alert("Too high! Try again.");
            } else {
                alert("Congratulations! You guessed the number correctly in " + attempts + " attempts.");
                break;
            }
        }
    
    }

    