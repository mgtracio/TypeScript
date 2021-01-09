namespace Improved {    
    export type MyTypeAliasNumber = number;
    export type MyTypeAliasString = string; // Status (Open, Close, Pending)
    export function squareIt(n: MyTypeAliasNumber): MyTypeAliasNumber {
        return n ** 2;
    }
    export function main(){
        let result: MyTypeAliasNumber = 85;
        let firstName: MyTypeAliasString = 'Marco';
        console.log(`::::::::::: DEBUG WITHOUT TYPE-ALIASES: firstName: ${firstName} / squareIt(${result}): ${squareIt(result)}`);
    }
}
Improved.main();

