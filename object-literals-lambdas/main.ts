namespace ObjectLiteralsWithLambdas {    

	type Score = number;
  type ScoreCollection = number[];
	type AllowedScoreTypes = Score | ScoreCollection;
  
  //interface ScoreTypedFn{ (n: AllowedScoreTypes): AllowedScoreTypes };  // Interface version
  type ScoreTypedFn = { (n: AllowedScoreTypes): AllowedScoreTypes };  // Type version
  //type ScoreTypedFn = (n: AllowedScoreTypes) => AllowedScoreTypes; // Type Lambda version
  
  export function squareScore(n: AllowedScoreTypes): AllowedScoreTypes {

    const SQUARE_NUMBER_FOR_CLOSURE = 2;
    const squareLambdaClosure = (x: number): number => x**SQUARE_NUMBER_FOR_CLOSURE; // Lambda function with clousure
    const squareAndReduceLambda = (a: number, b: number) => squareLambdaClosure(a) + squareLambdaClosure(b);  // Lambda function
    const processWithTypedAndLambdas: ScoreTypedFn = (n: AllowedScoreTypes): AllowedScoreTypes => { // Anonymous function / Arrow function 
      var cases = {
        'number': function () {
          return (n as Score)**2;
        },
        'object': function () {
          //return (n as ScoreCollection).map(x=>x**2);
          //return (n as ScoreCollection).map(squareLambdaClosure);
          return (n as ScoreCollection).reduce(squareAndReduceLambda);
        },
        'default': function () {
          throw new Error('!!!!!!Type not supported!!!!!!!!');
        }
      };
      return (cases[typeof n] || cases['default'])();
    }

    function processWithOutTyped (n) {
      var cases = {
        'number': function () {
          return n**2;
        },
        'object': function () {
          return n.map(x=>x**2);
        },
        'default': function () {
          throw new Error('Type not supported');
        }
      };
      return (cases[typeof n] || cases['default'])();
    }

    //return processWithOutTyped(n);   
    return processWithTypedAndLambdas(n);   
  }

  export function main(){
    let score: Score = 3;
    let scoreCollection: ScoreCollection = [2,3];
    console.log(`::::::::::: DEBUG OBJECT-LITERALS-LAMBDAS: squareScore(${score}): ${squareScore(score)}`);
    console.log(`::::::::::: DEBUG OBJECT-LITERALS-LAMBDAS: squareScore(${scoreCollection}): ${squareScore(scoreCollection)}`);
    //console.log(`::::::::::: DEBUG OBJECT-LITERALS: squareScore(${scoreCollection}): ${squareScore(undefined)}`);
  }
}
ObjectLiteralsWithLambdas.main();