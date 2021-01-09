var Improved;
(function (Improved) {
    function squareIt(n) {
        return Math.pow(n, 2);
    }
    Improved.squareIt = squareIt;
    function main() {
        var result = 85;
        var firstName = 'Marco';
        console.log("::::::::::: DEBUG WITHOUT TYPE-ALIASES: firstName: " + firstName + " / squareIt(" + result + "): " + squareIt(result));
    }
    Improved.main = main;
})(Improved || (Improved = {}));
Improved.main();
