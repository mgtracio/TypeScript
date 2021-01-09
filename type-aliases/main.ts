namespace Normal {    
    export function squareIt(n: number): number {
        return n ** 2;
    }
    export function main(){
        let result: number = 3;
        let firstName: string = 'Marco';
        console.log(`::::::::::: DEBUG WITHOUT TYPE-ALIASES: firstName: ${firstName} / squareIt(${result}): ${squareIt(result)}`);
    }
}
Normal.main();