function Duck (name) {
    this.name = name;
  };
  
  // Parent method
  Duck.prototype.quack = function () {
    return this.name + " Duck: Quack-quack!";
  };
  
  // Child constructor
  function TalkingDuck (name) {
    // Call parent constructor with proper arguments
    Duck.call(this, name); // This is often forgotten
  }
  
  // Inheritance
  TalkingDuck.prototype = Object.create(Duck.prototype);
  TalkingDuck.prototype.constructor = TalkingDuck; // This is often forgotten
  
// Method overload
TalkingDuck.prototype.quack = function () {
    // Call parent method
    return Duck.prototype.quack.call(this)  + " My name is " + this.name;
  };
  
  // Object instantiation
  var donald = new TalkingDuck("Donald");

  console.log(donald.quack());
    