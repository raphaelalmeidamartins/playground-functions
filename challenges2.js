// Desafio 10
function techList(arrayTechList, namePerson) {
  let arrayTechListSorted = arrayTechList.sort();
  let arrayObjectsTechList = [];
  for (let item of arrayTechListSorted) {
    let object = {
      tech: item,
      name: namePerson,
    };
    arrayObjectsTechList.push(object);
  }
  if (arrayObjectsTechList.length === 0) {
    return 'Vazio!';
  }
  return arrayObjectsTechList;
}

// Desafio 11
function isArrayValid(numbers) {
  return (numbers.length === 11);
}

function areNumbersSizeRight(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function doesNumberRepeatsLessThan3(currentNumber, numbers) {
  let howManyTimes = 0;
  for (let number of numbers) {
    if (currentNumber === number) {
      howManyTimes += 1;
    }
  }
  return (howManyTimes < 3);
}

function areNumbersValid(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (!doesNumberRepeatsLessThan3(numbers[i], numbers)) {
      return false;
    }
  }
  return areNumbersSizeRight(numbers);
}

function formatNumber(numbers) {
  let ddd = `(${numbers[0]}${numbers[1]})`;
  let part1 = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
  let part2 = `${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return `${ddd} ${part1}-${part2}`;
}

function generatePhoneNumber(numbers) {
  if (!isArrayValid(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (!areNumbersValid(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formatNumber(numbers);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let stringReplaced = string.replace(' e ', ', ');
  let arrayStringSplited = stringReplaced.split(', ');
  let howManyCupsOfWater = 0;
  let howManyCupsCurrentDrink = 0;
  for (let i = 0; i < arrayStringSplited.length; i += 1) {
    let drink = arrayStringSplited[i].split(' ');
    howManyCupsCurrentDrink = parseInt(drink[0], 10); // 10 é o radix
    howManyCupsOfWater += howManyCupsCurrentDrink;
  }
  if (howManyCupsOfWater > 1) {
    return `${howManyCupsOfWater} copos de água`;
  }
  return `${howManyCupsOfWater} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
