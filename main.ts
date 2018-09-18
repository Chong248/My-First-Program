class MyFirstProgram {
    constructor(...argArray: Array<any>) {
        this.printArgs(argArray);
    }
    printArgs(argArray) {
        console.log(argArray);
    }
    runFirst(callback: Function) {
        console.log('this method rungs first!...');
    }
    runLast() {
        console.log('this method runs last!');
    }
    runMiddle(){
        console.log('this code runs in between the other two functions...!');
    }
}
const newInstance = new MyFirstProgram("a", "b", "c");






