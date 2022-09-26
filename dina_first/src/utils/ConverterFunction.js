const numberConverter = (number) => {
  let outputText;
  let numberInput = number;

  let digitsToNineteenArr = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  const decimals = [
    "",
    "",
    "twenty ",
    "thirty ",
    "forty ",
    "fifty ",
    "sixty ",
    "seventy ",
    "eighty ",
    "ninety ",
  ];

  if (numberInput.toString().length > 7) {
    outputText = "Too big number";
    return outputText;
  }

  let numberArr = ("0000000" + numberInput)
    .slice(-7)
    .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
  console.log(numberArr);
  if (!numberArr) return;
  //console.log(numberArr[0], numberArr[1], numberArr[2], numberArr[3], numberArr[4], numberArr[5])
  outputText =
    numberArr[1] != 0
      ? (digitsToNineteenArr[Number(numberArr[1])] ||
          decimals[numberArr[1][0]] +
            " " +
            digitsToNineteenArr[numberArr[1][1]]) + "million "
      : "";

  if (numberArr[2] != 0 && numberArr[3] % 10 == 0) {
    outputText +=
      digitsToNineteenArr[Number(numberArr[2])] + "hundred thousand ";
  } else if (numberArr[2] != 0) {
    outputText +=
      (digitsToNineteenArr[Number(numberArr[2])] ||
        decimals[numberArr[2][0]] +
          " " +
          digitsToNineteenArr[numberArr[2][1]]) + "hundred and ";
  } else {
    outputText += "";
  }

  outputText +=
    numberArr[3] != 0
      ? (digitsToNineteenArr[Number(numberArr[3])] ||
          decimals[numberArr[3][0]] +
            " " +
            digitsToNineteenArr[numberArr[3][1]]) + " thousand "
      : "";

  if (numberArr[4] != 0 && numberArr[5] == 0) {
    outputText +=
      (digitsToNineteenArr[Number(numberArr[4])] ||
        decimals[numberArr[4][0]] +
          " " +
          digitsToNineteenArr[numberArr[4][1]]) + " hundred";
  } else if (numberArr[4] != 0) {
    outputText +=
      (digitsToNineteenArr[Number(numberArr[4])] ||
        decimals[numberArr[4][0]] +
          " " +
          digitsToNineteenArr[numberArr[4][1]]) + " hundred and ";
  } else {
    outputText += "";
  }

  if (numberArr[5] != 0 && numberArr[5] % 10 == 0) {
    outputText +=
      digitsToNineteenArr[Number(numberArr[5])] ||
      decimals[numberArr[5][0]] + " " + digitsToNineteenArr[numberArr[5][1]];
  } else if (numberArr[5] != 0) {
    outputText +=
      digitsToNineteenArr[Number(numberArr[5])] ||
      decimals[numberArr[5][0]] + "- " + digitsToNineteenArr[numberArr[5][1]];
  } else {
    outputText += "";
  }

  if (numberInput == 0) {
    outputText = "zero";
  }
  if (numberInput < 0) {
    outputText = "Only positive integers allowed";
  }

  return outputText;
};

export default numberConverter;
