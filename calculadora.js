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
  eigth: document.getElementById("eigth"),
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
  addNumber: (e) => {
    console.log(e.target);
  },
  // addNumber: () => {
  //   console.log("this");
  // },

  events: () => {
    one.addEventListener("click", (e) => {
      calculator.addNumber(e);
    });
  },

  //end events
  //000000000000000000000000000000000000000000000000000
};
calculator.events();
