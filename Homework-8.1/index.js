// Перший варіант

// let ladder = {
//   step: 0,
//   up: function () {
//     this.step++;
//     return console.log(`Вгору! Сходинка - ${this.step}`);
//   },
//   down: function () {
//     this.step--;
//     return console.log(`Вниз! Сходинка - ${this.step}`);
//   },
//   showStep: function () {
//     this.step;
//     return console.log(`Ти зараз на сходинці - ${this.step}`);
//   },
// };

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.down();
// ladder.showStep();


// виклик по ланцюжку

let ladder = {
  step: 0,

  up: function() {
      this.step++;
      return this;
  },

  down: function() {
      this.step--;
      return this;
  },

  showStep: function() {
      console.log(this.step);
      return this;
  }
};

ladder.up().up().up().up().down().showStep();
