// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)
// I have also created other katas. Take a look if you enjoyed this kata!

/* 
First solution:

function findMissingLetter(array)
{
    const myObject = {'65': 'A',
    '66': 'B',
    '67': 'C',
    '68': 'D',
    '69': 'E',
    '70': 'F',
    '71': 'G',
    '72': 'H',
    '73': 'I',
    '74': 'J',
    '75': 'K',
    '76': 'L',
    '77': 'M',
    '78': 'N',
    '79': 'O',
    '80': 'P',
    '81': 'Q',
    '82': 'R',
    '83': 'S',
    '84': 'T',
    '85': 'U',
    '86': 'V',
    '87': 'W',
    '88': 'X',
    '89': 'Y',
    '90': 'Z',
    '97': 'a',
    '98': 'b',
    '99': 'c',
    '100': 'd',
    '101': 'e',
    '102': 'f',
    '103': 'g',
    '104': 'h',
    '105': 'i',
    '106': 'j',
    '107': 'k',
    '108': 'l',
    '109': 'm',
    '110': 'n',
    '111': 'o',
    '112': 'p',
    '113': 'q',
    '114': 'r',
    '115': 's',
    '116': 't',
    '118': 'v',
    '119': 'w',
    '120': 'x',
    '121': 'y',
    '122': 'z'}
    let temp = 0;
    for(let i = 65; i <= 122; i++){
        if (array[0] == myObject[i]) {
            temp = i;
           break;
        }
    }
    console.log('temp value: ' + temp);
    for(let i = 0; i < array.length; i++){
        if (array[i] != myObject[temp]) {
            return String.fromCharCode(temp);
        }
        temp++
    }

  return ' ';
}

console.log(findMissingLetter(['g', 'h', 'i', 'j', 'l'])); 


Second solution:                                                        */
function findMissingLetter(array){
    let charCode = array[0].charCodeAt(0);
    for(let i = 0; i < array.length; i++){
        if (array[i] !== String.fromCharCode(charCode)) {
            return String.fromCharCode(charCode);
        }
        charCode++
    }
}

console.log(findMissingLetter(['a', 'b', 'c', 'e']));