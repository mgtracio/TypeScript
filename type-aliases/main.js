var Normal;
(function (Normal) {
    function squareIt(n) {
        return Math.pow(n, 2);
    }
    Normal.squareIt = squareIt;
    function main() {
        var result = 3;
        var firstName = 'Marco';
        console.log("::::::::::: DEBUG WITHOUT TYPE-ALIASES: firstName: " + firstName + " / squareIt(" + result + "): " + squareIt(result));
    }
    Normal.main = main;
})(Normal || (Normal = {}));
Normal.main();
