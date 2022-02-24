const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    let str = '';
    let expr_arr;
    if (expr.includes('**********')){
        expr_arr = expr.trim().split('**********')
    } else {
        expr_arr = [expr.trim()];
    }

    for (let i = 0; i <= expr_arr.length - 1; i++){
        let letterFull = '';
        let letterJust = '';

        for(let j = 0; j < expr_arr[i].length; j+=10){
            letterFull = expr_arr[i].slice(j, j+10);
            letterJust = letterFull.slice(letterFull.indexOf('1'));
            let key = '';
            for(let k = 0; k < letterJust.length; k+= 2){
                if (letterJust.slice(k, k+2) === '10'){
                    key += '.';
                } else {
                    key += '-';
                }
            }
            str += MORSE_TABLE[key];

        }
    str += ' ';
    }
    return str.trim();
}

module.exports = {
    decode
}

