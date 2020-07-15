var chalk = require('chalk');
function Mouse() {
    this.isDie = false;
    this.name = "Jerry";
}

Mouse.prototype.sayHi = function() {
    console.log('Hi! I am an Mouse.' + chalk.blue(this.name));
};

module.exports = Mouse;