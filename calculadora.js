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
  screen: document.getElementById("screen"),
  // end keyword
  // end atributes of calculator object
  //000000000000000000000000000000000000000000000000000

  //events
  addToScreen: function (character) {
    let screenChars = this.screen.innerText;
    let lastCharacter = this.screen.innerText.slice(-1);

    let newCharacter = character;
    console.log("entré1");
    console.log(newCharacter);
    // console.log(/[X/+-=]/i.test(newCharacter)); //duda que tengo que solventar
    // console.log(/[+X/=-]/i.test(newCharacter));

    // first and main conditional to evit operators whitout operand (with empty screen)
    if (!(screenChars === "" && /[+X/=-]/i.test(newCharacter))) {
      // second conditional to evit operators super posing
      console.log("entré2");
      if (/[+X/=-]/i.test(lastCharacter) && /[+X/=-]/i.test(newCharacter)) {
        screenChars = screenChars.replace(lastCharacter, newCharacter);
        console.log("segundo conditional");
        this.screen.innerText = screenChars;
      } else if (/[0-9]/.test(newCharacter)) {
        this.screen.innerText += newCharacter; //here a number is added to the screen
      } else {
        this.screen.innerText += newCharacter;
        console.log("aqui llegue con el boton igual");
      }
    }
  },

  result: function () {
    let result = "";
    console.log("boton igual");
    console.log(result);

    if (/X/i.test(this.screen.innerText)) {
      result = this.screen.innerText.replace(/x/gi, "*");
    }

    result = eval(result);
    console.log(result);
    this.screen.innerText = result;
  },

  cleanerScreen: function () {
    this.screen.innerText = "";
    console.log("estoy en cleaner");
  },

  //

  //end events
  //000000000000000000000000000000000000000000000000000
};

const assigmentEvents = () => {
  for (const properties in calculator) {
    if (/[^=c]/i.test(calculator[properties].innerText)) {
      console.log(calculator[properties].innerText);
      calculator[properties].addEventListener("click", function (element) {
        let character = element.target.innerText;
        calculator.addToScreen(character);
      });
    } else if (calculator[properties].innerText === "=") {
      console.log(calculator[properties].innerText);
      calculator[properties].addEventListener("click", function () {
        calculator.result();
      });
    } else if (calculator[properties].innerText === "C") {
      console.log("estoy con la letra C");
      calculator[properties].addEventListener("click", function () {
        calculator.cleanerScreen();
      });
    }
  }

  console.log(this);
};

//
assigmentEvents();
// calculator.metodo();
