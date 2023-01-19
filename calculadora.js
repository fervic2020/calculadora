const calculator = {
  //start atributes of calculator object
  //keyword
  one: document.getElementById("one"),
  two: document.getElementById("two"),
  three: document.getElementById("three"),
  four: document.getElementById("four"),
  five: document.getElementById("five"),
  six: document.getElementById("six"),
  seven: document.getElementById("seven"),
  eigth: document.getElementById("eight"),
  nine: document.getElementById("nine"),
  zero: document.getElementById("zero"),
  less: document.getElementById("less"),
  more: document.getElementById("more"),
  multiplicator: document.getElementById("multiplicator"),
  divider: document.getElementById("divider"),
  cleaner: document.getElementById("cleaner"),
  same: document.getElementById("same"),
  // end keyword
  screen: document.getElementById("screen"),
  screenReset: false,
  // end atributes of calculator object
  //000000000000000000000000000000000000000000000000000

  // start methods of calculator object
  addToScreen: function (character) {
    let screenChars = this.screen.innerText;
    let lastCharacter = this.screen.innerText.slice(-1);
    console.log(character);

    // first and main conditional to evit operators whitout operand (with empty screen)
    if (!(screenChars === "" && /[+X/=-]/i.test(character))) {
      // second conditional to evit operators super posing
      if (/[+X/=-]/i.test(lastCharacter) && /[+X/=-]/i.test(character)) {
        this.screen.innerText = screenChars.replace(lastCharacter, character);
      } else if (/[0-9]/.test(character)) {
        //here a number is added to the screen
        if (this.screenReset) {
          // here is to cleaner to screen if already pulsed same buton for add new number
          this.cleanerScreen();
          this.screenReset = false;
        }
        this.screen.innerText += character;
      } else {
        // here add the operator to screen
        this.screen.innerText += character;
        this.screenReset = false;
      }
    }
  },

  result: function () {
    let result;
    if (/[x/]/i.test(this.screen.innerText.slice(-1))) {
      result = this.screen.innerText + "1";
      console.log(result);
    } else if (/[+-]/i.test(this.screen.innerText.slice(-1))) {
      result = this.screen.innerText + "0";
    }
    console.log(result);
    result = result.replaceAll(/x/gi, "*");
    this.screenReset = true;
    console.log(result);
    this.screen.innerText = eval(result);
  },

  cleanerScreen: function () {
    this.screen.innerText = "";
    console.log("estoy en cleaner");
  },
  // end methods and calculator object
  //000000000000000000000000000000000000000000000000000
};

const assigmentEvents = () => {
  for (const properties in calculator) {
    // this conditional is to select operator and digits
    if (/[^=c]/i.test(calculator[properties].innerText)) {
      calculator[properties].addEventListener("click", function (element) {
        let character = element.target.innerText;
        calculator.addToScreen(character);
      });
    } else if (calculator[properties].innerText === "=") {
      calculator[properties].addEventListener("click", function () {
        calculator.result();
      });
    } else if (calculator[properties].innerText === "C") {
      calculator[properties].addEventListener("click", function () {
        calculator.cleanerScreen();
      });
    }
  }
  console.log(this);
};

assigmentEvents();
