const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodedExpr = '';
    for (let i = 0; i < expr.length; i += 10) {
        let encodedExprWord = expr.slice(i, i + 10);
        let encodedMorseWord = '';
        if (encodedExprWord.includes('**********')) {
            decodedExpr += ' ';
            continue;
        }
        for (let j = 0; j < encodedExprWord.length; j += 2) {
            let encodedSymbol = encodedExprWord.slice(j, j + 2);
            if (encodedSymbol.includes('10')) {
                encodedMorseWord += '.';
                continue;
            }
            if (encodedSymbol.includes('11')) {
                encodedMorseWord += '-';
            }
        }
        decodedExpr += MORSE_TABLE[encodedMorseWord];
    }
    return decodedExpr;
}

module.exports = {
    decode
}