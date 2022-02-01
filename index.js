// Add answers here 
function nameOfCity(string) {
   
    if (string.length >= 3 && (string.substring(0, 3) === "Los") || (string.substring(0, 3) === "New")) {
        return string;
    }
    return "The city name does not begin with Los or New";
}

console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("Los Angeles"));
console.log(nameOfCity("California"));

function isDivisible(number) {
    if (number % 100 === 0) {
        return true;
    }
    return false;
}

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

function missingAngle(angle1, angle2) {
    angleIs = null;
    let missing = angle1 + angle2;
    let check = 180 - missing;
    if (check < 90) {
        angleIs = "acute";
    }
    else if (check === 90) {
        angleIs = "right angle";
    }
    else if (check > 90 && check < 180) {
        angleIs = "obtuse";
    }
return angleIs;
}

console.log(missingAngle(11, 20));
console.log(missingAngle(27, 59));
console.log(missingAngle(135, 11));
console.log(missingAngle(45, 45));



     function multiplesOfThree() {
        let multiples = 1;
        let returnString = [];
        for (i = 1; i <= 5; i++) {
          multiples = 3 * i;
          returnString.push(multiples);
        }
        return returnString.join(" ");
      }
      console.log(multiplesOfThree());

      function geometricalSequence() {
        let string = 1;
        let sequence = [string];
        for (i = 1; i < 9; i++) {
            string = string * 2;
            sequence.push(string);
        }
        return sequence.join(" ");
      }
      console.log(geometricalSequence());

    function powerOf (number) {
        let result = Math.pow(number, number)
        return result;
    }
      console.log(powerOf(3));

      const array = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
function vowelCount(str) {
  let vowelCount = 0;
  for (i = 0; i < str.length; i++) {
    if (array.includes(str[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));
     


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

