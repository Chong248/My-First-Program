var MyFirstProgram = /** @class */ (function () {
    function MyFirstProgram() {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        this.printArgs(argArray);
    }
    MyFirstProgram.prototype.printArgs = function (argArray) {
        console.log(argArray);
    };
    MyFirstProgram.prototype.runFirst = function (callback) {
        console.log('this method rungs first!...');
    };
    MyFirstProgram.prototype.runLast = function () {
        console.log('this method runs last!');
    };
    MyFirstProgram.prototype.runMiddle = function () {
        console.log('this code runs in between the other two functions...');
    };
    return MyFirstProgram;
}());
var newInstance = new MyFirstProgram("a", "b", "c");
