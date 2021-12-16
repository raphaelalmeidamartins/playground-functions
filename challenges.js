// Desafio 1
function compareTrue(par1, par2) {
  return (par1 && par2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let scoreWins = wins * 3;
  let scoreTies = ties * 1;
  return scoreWins + scoreTies;
}

// Desafio 6
function highestNumberOfArray(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  for (let number of arrayNumbers) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  }
  return highestNumber;
}

function highestCount(arrayNumbers) {
  let howManyTimes = 0;
  let highestNumber = highestNumberOfArray(arrayNumbers);
  for (let number of arrayNumbers) {
    if (number === highestNumber) {
      howManyTimes += 1;
    }
  }
  return howManyTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let whichCatCaught = '';
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (Math.abs(distanceCat1) > Math.abs(distanceCat2)) {
    whichCatCaught = 'cat2';
  } else if (Math.abs(distanceCat1) === Math.abs(distanceCat2)) {
    whichCatCaught = 'os gatos trombam e o rato foge';
  } else {
    whichCatCaught = 'cat1';
  }
  return whichCatCaught;
}

// Desafio 8
function isDivisibleBy3(number) {
  return (number % 3) === 0;
}

function isDivisibleBy5(number) {
  return (number % 5) === 0;
}

/*
Tive a ideia de fazer essa função dividindo por 15 depois de consultar o projeto da da Luá.
(https://github.com/tryber/sd-019-a-project-playground-functions/pull/20)
Assim consegui reduzir a complexidade ciclomática do meu código.
*/
function isDivisibleBy15(number) {
  return (number % 15) === 0;
}

function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let number of arrayNumbers) {
    switch (true) {
    case (isDivisibleBy15(number)):
      arrayFizzBuzz.push('fizzBuzz');
      break;
    case (isDivisibleBy3(number)):
      arrayFizzBuzz.push('fizz');
      break;
    case (isDivisibleBy5(number)):
      arrayFizzBuzz.push('buzz');
      break;
    default:
      arrayFizzBuzz.push('bug!');
      break;
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
// Luá me ajudou a entender porque o objeto deixaria o código menos complexo. Antes eu estaba utilizando switch-case.
function encode(string) {
  let arrayStringSplit = string.split('');
  let vowelsNumbers = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let i = 0; i < arrayStringSplit.length; i += 1) {
    if (vowelsNumbers[arrayStringSplit[i]]) {
      arrayStringSplit[i] = vowelsNumbers[arrayStringSplit[i]];
    }
  }
  return arrayStringSplit.join('');
}
function decode(string) {
  let arrayStringSplit = string.split('');
  let numbersVowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < arrayStringSplit.length; i += 1) {
    if (numbersVowels[arrayStringSplit[i]]) {
      arrayStringSplit[i] = numbersVowels[arrayStringSplit[i]];
    }
  }
  return arrayStringSplit.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
