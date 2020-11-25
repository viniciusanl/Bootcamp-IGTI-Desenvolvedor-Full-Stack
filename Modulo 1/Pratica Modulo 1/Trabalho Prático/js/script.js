window.addEventListener('load', startPage);

let numberInt = null;
let numberText = null;
let rangeControl = null;
let arrNumber1 = [
  { id: 0, number: 'Zero' },
  { id: 1, number: 'Um' },
  { id: 2, number: 'Dois' },
  { id: 3, number: 'Três' },
  { id: 4, number: 'Quatro' },
  { id: 5, number: 'Cinco' },
  { id: 6, number: 'Seis' },
  { id: 7, number: 'Sete' },
  { id: 8, number: 'Oito' },
  { id: 9, number: 'Nove' },
];

let arrNumber2 = [
  { id: 1, number: 'Dez' },
  { id: 2, number: 'Vinte' },
  { id: 3, number: 'Trinta' },
  { id: 4, number: 'Quarenta' },
  { id: 5, number: 'Cinquenta' },
  { id: 6, number: 'Sessenta' },
  { id: 7, number: 'Setenta' },
  { id: 8, number: 'Oitenta' },
  { id: 9, number: 'Noventa' },
];

let arrNumber3 = [
  { id: 1, number: 'Cem' },
  { id: 10, number: 'Cento' },
  { id: 2, number: 'Duzentos' },
  { id: 3, number: 'Trezentos' },
  { id: 4, number: 'Quatrocentos' },
  { id: 5, number: 'Quinhentos' },
  { id: 6, number: 'Seiscentos' },
  { id: 7, number: 'Setecentos' },
  { id: 8, number: 'Oitocentos' },
  { id: 9, number: 'Novecentos' },
];

let arrNumberOthers = [
  { id: 10, number: 'Dez' },
  { id: 11, number: 'Onze' },
  { id: 12, number: 'Doze' },
  { id: 13, number: 'Treze' },
  { id: 14, number: 'Quatorze' },
  { id: 15, number: 'Quinze' },
  { id: 16, number: 'Dezesseis' },
  { id: 17, number: 'Dezessete' },
  { id: 18, number: 'Dezoito' },
  { id: 19, number: 'Dezenove' },
];

function startPage() {

  numberInt = document.querySelector('#numberInt');
  numberText = document.querySelector('#numberText');
  rangeControl = document.querySelector('#rangeControl');
  rangeControl.addEventListener('change', controlNumber);
}

function controlNumber(event) {
  let getValueNUmberInt = event.target.value;
  numberInt.value = getValueNUmberInt;
  if (getValueNUmberInt.length === 1) {
    numberText.value = verifyNumberText1Dig(getValueNUmberInt);
  } else if (getValueNUmberInt.length === 2) {
    numberText.value = verify2Dig(getValueNUmberInt);
  } else {
    numberText.value = verify3Dig(getValueNUmberInt);
  }
}

function verifyNumberText1Dig(numberInt) {
  let getValue = '';
  arrNumber1.forEach(element => {
    element.id === parseInt(numberInt) ? getValue = element.number : '';
  });
  return getValue;
}

function verify2Dig(num) {
  let getValue2dig = '';
  if (num.substring(1, 2) === '0') {
    getValue2dig = verifyNumberText2Dig(num.substring(0, 1));
  } else if (num.substring(0, 1) === '1') {
    getValue2dig = verifyNumberText2DigOthers(num);
  } else {
    getValue2dig = verifyNumberText2Dig(num.substring(0, 1)) + ' e ' + verifyNumberText1Dig(num.substring(1, 2));
  }
  return getValue2dig;
}

function verifyNumberText2Dig(numberInt) {
  let getValue = '';
  arrNumber2.forEach(element => {
    element.id === parseInt(numberInt) ? getValue = element.number : '';
  });
  return getValue;
}

function verifyNumberText2DigOthers(numberInt) {
  let getValue = '';
  arrNumberOthers.forEach(element => {
    element.id === parseInt(numberInt) ? getValue = element.number : '';
  });
  return getValue;
}

function verify3Dig(num) {
  let getValue3dig = '';
  if (num.substring(1, 2) === '0' && num.substring(2, 3) === '0') {
    getValue3dig = verifyNumberText3Dig(num.substring(0, 1));
  } else if (num.substring(1, 2) === '1') {
    getValue3dig = verifyNumberText3Dig(num.substring(0, 1) === '1' ? '10' : num.substring(0, 1)) + ' e ' + verifyNumberText2DigOthers(num.substring(1, 3));
  } else if (num.substring(2, 3) === '0') {
    getValue3dig = verifyNumberText3Dig(num.substring(0, 1) === '1' ? '10' : num.substring(0, 1)) + ' e ' + verifyNumberText2Dig(num.substring(1, 2));
  } else if (num.substring(1, 2) === '0') {
    getValue3dig = verifyNumberText3Dig(num.substring(0, 1) === '1' ? '10' : num.substring(0, 1)) + ' e ' + verifyNumberText1Dig(num.substring(2, 3));
  } else {
    getValue3dig = verifyNumberText3Dig(num.substring(0, 1) === '1' ? '10' : num.substring(0, 1)) + ' e ' + verifyNumberText2Dig(num.substring(1, 2)) + ' e ' + verifyNumberText1Dig(num.substring(2, 3));
  }
  return getValue3dig;
}

function verifyNumberText3Dig(numberInt) {
  let getValue = '';
  arrNumber3.forEach(element => {
    element.id === parseInt(numberInt) ? getValue = element.number : '';
  });
  return getValue;
}