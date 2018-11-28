"use strict";
var myObj = {
  myProp: "outer-value",
  createInnerObj: function createInnerObj() {
    var hidden = "value-in-closure";
    return {
      myProp: "inner-value",
      innerFunc: function innerFunc() {
        return "hidden: '" + hidden + "', myProp: '" + this.myProp + "'";
      }
    };
  }
  
};
var myInnerObj = myObj.createInnerObj();
console.log( myInnerObj.innerFunc() );
