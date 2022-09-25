const NumberConverter = (e, number) => {
  e.preventDefault(); 

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
   "twenty",
   "thirty",
   "forty",
   "fifty",
   "sixty",
   "seventy",
   "eighty",
   "ninety",
 ];

 if (numberInput.toString().length > 7) return alert("Too big number"); //Checking the incoming numbers length
 console.log(numberInput);

 let numberArr = ("0000000" + numberInput)
   .slice(-7)
   .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/); //Array for the numbers, with slice and and a regex, to separate the 
 console.log(numberArr);
 if (!numberArr) return;
 //console.log(numberArr[0], numberArr[1], numberArr[2], numberArr[3], numberArr[4], numberArr[5])

 //Conditional rendering part
 outputText =
   numberArr[1] != 0
     ? (digitsToNineteenArr[Number(numberArr[1])] ||
         decimals[numberArr[1][0]] +
           " " +
           digitsToNineteenArr[numberArr[1][1]]) + " million "
     : "";

 outputText +=
   numberArr[2] != 0
     ? (digitsToNineteenArr[Number(numberArr[2])] ||
         decimals[numberArr[2][0]] +
           " " +
           digitsToNineteenArr[numberArr[2][1]]) + " hundred "
     : "";
 outputText +=
   numberArr[3] != 0
     ? (digitsToNineteenArr[Number(numberArr[3])] ||
         decimals[numberArr[3][0]] +
           " " +
           digitsToNineteenArr[numberArr[3][1]]) + " thousand "
     : "";
 outputText +=
   numberArr[4] != 0
     ? (digitsToNineteenArr[Number(numberArr[4])] ||
         decimals[numberArr[4][0]] +
           " " +
           digitsToNineteenArr[numberArr[4][1]]) + " hundred and "
     : "";
 outputText +=
   numberArr[5] != 0
     ? digitsToNineteenArr[Number(numberArr[5])] ||
       decimals[numberArr[5][0]] +
         " " +
         digitsToNineteenArr[numberArr[5][1]]
     : "";
     return outputText;    
};

export default NumberConverter;