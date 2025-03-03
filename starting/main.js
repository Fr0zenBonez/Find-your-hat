const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.feild = feild;
    this.playerPostion = { x: 0, y: 0}; //Player starts at 0,0
    }
  }

  // Print the current field state
  print() {
    console.clear();
    this.field.forEach(row => console.log(row.join('')));
  }
 // Thissets up the field and a print method to visualize it.

 // Move the player based on input
 move(direction) {
  switch (direction) {
    case 'w': this.playerY -= 1; break; // Up
    case 's': this.playerY += 1; break; // Down
    case 'a': this.playerX -= 1; break; // Left
    case 'd': this.playerX += 1; break; // Right
    default:
      console.log("Invalid input! Use 'w', 'a', 's', or 'd'.");
      return;
  }

  // Check if out of bounds
  if (this.playerY < 0 || this.playerY >= this.field.length ||
      this.playerX < 0 || this.playerX >= this.field[0].length) {
    console.log("You moved out of bounds! Game over.");
    this.gameOver = true;
    return;
  }

  // Get the new tile
  const tile = this.field[this.playerY][this.playerX];

  if (tile === 'O') {
    console.log("You fell into a hole! Game over.");
    this.gameOver = true;
  } else if (tile === '^') {
    console.log("Congratulations! You found your hat! 🎉");
    this.gameOver = true;
  } else {
    this.field[this.playerY][this.playerX] = '*'; // Mark path
  }
}

// Start the game loop
play() {
  console.log("Find Your Hat! Move with 'w', 'a', 's', 'd'.");
  
  while (!this.gameOver) {
    this.print();
    let move = prompt("Move: ");
    this.move(move);
  }
}

// Static method to generate a random field
static generateField(height, width, holePercentage = 20) {
  let field = Array.from({ length: height }, () => Array(width).fill('░'));

  // Add holes
  let totalTiles = height * width;
  let numHoles = Math.floor((holePercentage / 100) * totalTiles);

  for (let i = 0; i < numHoles; i++) {
    let holeX, holeY;
    do {
      holeX = Math.floor(Math.random() * width);
      holeY = Math.floor(Math.random() * height);
    } while ((holeX === 0 && holeY === 0) || field[holeY][holeX] !== '░');
    field[holeY][holeX] = 'O';
  }

  // Add hat
  let hatX, hatY;
  do {
    hatX = Math.floor(Math.random() * width);
    hatY = Math.floor(Math.random() * height);
  } while ((hatX === 0 && hatY === 0) || field[hatY][hatX] === 'O');
  field[hatY][hatX] = '^';

  // Place player start
  field[0][0] = '*';

  return field;
}
}

// Create a field and start the game
const myField = new Field(Field.generateField(5, 5, 20));
myField.play();