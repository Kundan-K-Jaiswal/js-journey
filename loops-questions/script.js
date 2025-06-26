//Question Number 1: Print all even numbers form 1 to 100
for (let i = 0; i < 100; i += 2) {
  console.log(i);
}
console.log("\n");


//Question Number 2: Create a number guessing game
let game_number = 50;
let user_input = prompt("Guess the number: ");
while (user_input != game_number) {
  if (user_input > game_number) {
    user_input = prompt("Guess a little lower : ");
  }
  if (user_input < game_number) {
    user_input = prompt("Guess a little higher : ");
  }
}
console.log(`You guessed the number correctly. The number was ${game_number}.`);