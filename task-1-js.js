// Write 3 functions of your choice that will have following in any of them:

// First function: If statements
// Second function: Function takes at least 3 arguments.
// Third function: Use Object key & value pairs in it.

// All functions should return the value.

// After finishing this, please push it to your initial repository under new branch name.

// See you on Thursday!

function greetings(houres) {
  if (5 <= houres && houres <= 12) {
    return "Good morning!";
  } else if (12 < houres && houres <= 18) {
    return "Good afternoon!";
  } else if (18 <= houres && houres < 22) {
    return "Good evening!";
  } else {
    return "Good night!";
  }
}

console.log(greetings(14));

function counterBmi(name, height, weight) {
  const bmiIndex = (weight / Math.pow(height / 100, 2)).toFixed(1);

  if (bmiIndex <= 18.5) {
    return name + ", you are underweight";
  } else if (18.5 < bmiIndex && bmiIndex < 25) {
    return name + ", you are normal weight";
  } else if (24.99 < bmiIndex && bmiIndex < 30) {
    return name + ", you are overweight";
  } else {
    return name + ", you are obese";
  }
}

console.log(counterBmi("Lina", 178, 79));

function personalGreeting(firstName, lastName, age, eyeColor) {
    personalDetails =  {
        personalName: firstName,
        personalLastName: lastName,
        personalAge: age,
        personalEyeColor: eyeColor,
        greeting: function() {
            return "Hi, " + this.personalName + " " + this.lastName + " you are " + this.personalAge + " years old. And you have beutiful " + this.personalEyeColor + "eye color. Have a great day!"
        }
    }
    return personalDetails.greeting()
}

   console.log(personalGreeting("Thomas", "Blooming", 40, "green")); 

