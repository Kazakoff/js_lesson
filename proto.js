function B() {}
B.prototype.x = 10;

b = new B();
console.log(b.x); //10
console.log(b.y); //undefined

B.prototype = {constructor:B, x:30, y:20};

console.log(b.x); //10
console.log(b.y); //undefined

b2 = new B();
console.log(b2.x); //30
console.log(b2.y); //20

