//-------------------------- OBJECT EXTENSIONS
//export type TupleType<A, B> = [A, B];

const getType = function (elem: any) {
    return Object.prototype.toString.call(elem).slice(8, -1);
};

//-------------------------- STRING EXTENSIONS
interface String {
    isEmpty(): Boolean;
    take(n: Number): String;
    purge(m: [String, String]): String;
}

if(!String.prototype.take) {
    Object.defineProperty(String.prototype, 'take', {
        value: function(n: Number){
            return this.slice(0,n);
        }
    });
}
if(!String.prototype.isEmpty) {
    Object.defineProperty(String.prototype, 'isEmpty', {
        value: function(){
            if (this === undefined || this === null || this.trim() === '') {
                return true;
            }
            return false;
        }
    });
}
if(!String.prototype.purge) {
    Object.defineProperty(String.prototype, 'purge', {
        value: function(m: [String, String]){
            return this.toLowerCase().replace(m[0], m[1]);
        }
    });
}
// let anyTuple: TupleType<string, Boolean> = [status, false];                
//-------------------------- NUMBER EXTENSIONS
interface Number {
    toIntRound(): Number;
    isPrime(): Boolean;
    toCelcius(): Number;
    toRoundCelcius(): Number; 
}

if(!Number.prototype.isPrime) {
    Object.defineProperty(Number.prototype, 'isPrime', {
        value: function(){
            if (this===1){return false;}
            else if(this === 2){return true;}
            else{
                for(var x = 2; x < this; x++){
                    if(this % x === 0) return false;
                }
            }
        return true;  
        }
    }
    );
}
if(!Number.prototype.toCelcius) {
    Object.defineProperty(Number.prototype, 'toCelcius', {
        value: function(){ 
            return (this * (9 / 5)) + 32;
        }    
    });
}
if(!Number.prototype.toRoundCelcius) {
    Object.defineProperty(Number.prototype, 'toRoundCelcius', {
        value: function(){
            return this.toCelcius(this).toIntRound();
        }    
    });
}
if(!Number.prototype.toIntRound) {
    Object.defineProperty(Number.prototype, 'toIntRound', {
        value: function(){
            return Math.round(this);
        }    
    });
}

namespace Extensions { 
    type Status = String;
    type Brand = String;
    type Score = Number;

    export function main(){ 
        let status: Status = "Open";
        let brand: Brand = "Mercedes BENZ"        
        let brand2: Brand = "ALFa RomeO"        
        let score: Score = 3.8675;        
        let notPrimeNum: Score = 6;
        let fahrenheit: Score = 7;        
        console.log(`::::::::::: DEBUG OBJECT EXTENSIONS: getType(status): ${getType(status)} / getType(brand): ${getType(brand)} / getType(score)): ${getType(1)}`);    
        console.log(`::::::::::: DEBUG STRING EXTENSIONS: status.isEmpty(): ${status.isEmpty()} / brand ${brand} /brand.take(4): ${brand.take(4)} / brand.purge(): ${brand.purge([' ','-']) } / brand2.purge(): ${brand2.purge([' ','-']) }`); 
        console.log(`::::::::::: DEBUG NUMBER EXTENSIONS: fahrenheit.toCelcius(): ${fahrenheit.toCelcius()} / fahrenheit.toRoundCelcius(): ${fahrenheit.toRoundCelcius()}`); 
        console.log(`::::::::::: DEBUG NUMBER EXTENSIONS: score.toIntRound(): ${score.toIntRound()} / score.isPrime(): ${notPrimeNum.isPrime()}`);         
    }
}
Extensions.main();