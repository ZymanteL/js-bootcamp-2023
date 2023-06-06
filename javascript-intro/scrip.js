function myFirstFunction() {
  // var a;
  let b;
  const c = 1;

  // a = 10
  b = 20;
  b = 25;

  const answer = b + c;
  console.log(answer);

  let firstNumber;
  const secondNumber = 15;
  firstNumber = 25;
  const answer2 = secondNumber + firstNumber;
  console.log(answer2);

  firstNumber++;
  console.log(firstNumber);

  const myName = "Lelesiute";
  const myName2 = "'Zymante'";
  const myName3 = `${myName} ${myName2}`;
  console.log(myName3);

  const piNumber = 3.1415926532;
  const hasPet = true;
  const myArr = [1, 5, 6, 7, 4, 2]; // Array => Object
  const mixOfTypes = [true, "ZymanteL", 4, []];
}

function personDetailFunction(
  personName,
  personAge,
  personGender,
  personIsStudent,
  personGrades
) {
  // const averageGrade = Math.round()
  const personDetails = {
    name: personName,
    age: personAge,
    gender: personGender,
    isStudent: personIsStudent,
    grades: personGrades,
  };
  return personDetails;
}
// console.log(personDetailFunction("ZymanteL", 16, "female", true, [95, 96, 40]));

function strinfMethods(string) {
  return string.toUpperCase().concat(" your provided name");
}

// console.log(strinfMethods('Zymante L'));

function personHasLongName(string) {
  if (string.length > 8) {
    return true;
  }
  return false;
}
// console.log(personHasLongName("Zymante"));

const numberMethods = (number) => {
  if (typeof number === "string") {
    return Number.isInteger(parseInt(number));
  }
  return Number.isInteger(number);
};

// console.log(numberMethods("10"))

const numberMethods2 = (number) => {
  return number > Number.MAX_SAFE_INTEGER;
};
// console.log(numberMethods2(9007199254740992));

const numberMethods3 = (number) => {
  // return number.toFixed(0)
  return Math.round(number);
};

// console.log(numberMethods3(150.55));

const numberMethods4 = (number) => {
  return !!typeof number === "number";
};

// console.log(numberMethods4([]));

const numberMethods5 = (number) => {
    return Number.isNaN(number);
  };
  
  console.log(numberMethods5(123));