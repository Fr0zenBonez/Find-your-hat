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
  }
}
