new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      // Decrease monsters's health with calculated damage (per click)
      this.monsterHealth -= this.calculateDamage(3, 10);
      if (this.gameResult()) {
          return;
      }
      this.monsterAttacks();
    },
    specialAttack: function () {
      // Decrease monsters's health with calculated damage (per click)
      this.monsterHealth -= this.calculateDamage(10, 20);
      if (this.gameResult()) {
        return;
      }
      this.monsterAttacks();
    },
    monsterAttacks: function () {
      // Decrease player's health with calculated damage (per click)
      this.playerHealth -= this.calculateDamage(5, 12);
      this.gameResult();
    },
    heal: function () {
        if (this.playerHealth <= 90) {
          this.playerHealth += 15;
        } else {
          this.playerHealth = 100;
        }

        this.monsterAttacks();
    },
    giveUp: function () {
        this.gameIsRunning = false;
    },
    calculateDamage: function (min, max) {
      // Calc random damage between 3 and 10 HINT (Math.random() works with values between 0 and 1, so we need to multiply it with max)
      return Math.max(Math.floor(Math.random() * min) + 1, max);
    },
    gameResult: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! Do you want a new game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }

        return true;
      } else if (this.playerHealth <= 0) {

        if (confirm('You lost! Do you want a new game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
