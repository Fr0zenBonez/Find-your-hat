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

  print() {
    console.log(this.field.map(row => row.join(' ')).join('\n'));
  } // Thissets up the field and a print method to visualize it.

  move(direction) {
    let { x, y } =this.playerPostion;

    swtich (direction) {
        case 'w': y--; break; // Move up
        case 's': y++; break; // Move down
        case 'a': x--; break; // Move left
        case 'd': x++; break; // Move right
        default: console.log('Invalid move! Use w/a/s/d'); return;
    }

    //Check bounderies
    if (y < 0 || y >= this.field.length || x < 0 || x>= this.field[0].length) {
        console.log('You moved out of bounds! Game Over!');
        process.exit();
    }
    
    //Check the new Postion
    const newTile = this.field[y][x];
    if (newTile === '0') {
        console.log('YOu fell into a hole! Game Over!');
        process.exit();
    } else if (newTile === '^') {
        console.log('You found your hat! You Win!');
        process.exit();
    }

    // MOve the PLayer
    this.field[y][x] = '*';
    this.playerpostion = {x, y };
  }
}
