let myMath = {
    sum() {
        let sum = this.a + this.b;
        return console.log(sum);
    },
    multiplication() {
        let sum = this.a * this.b;
        return console.log(sum);
    },
    division() {
        let sum = this.a / this.b;
        return console.log(sum);
    },
    subtraction() {
        let sum = this.a - this.b;
        console.log(sum);
    }
};
myMath.a = 5;
myMath.b = 2;
console.log(myMath);

myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();
