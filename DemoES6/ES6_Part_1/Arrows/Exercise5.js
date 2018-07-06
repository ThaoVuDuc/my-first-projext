function Car() {
  var that = this;
  this.speed = 0;

  setTimeout(function () {
    that.speed += 10;
  }, 100);
}

var c = new Car();
setTimeout(function () {
  console.log(c.speed);
}, 200);
