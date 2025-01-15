const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    //Added Field to the constructor
    constructor(Field){
        this.field = Field;
    }
    //Step 3 gave Field a .print()
    .print(){
        thid.field.forEach(row => console.log(row.join('')));
    }

    
}