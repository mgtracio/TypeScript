namespace TypeAliasesBad {    
    export function squareScore(n) {
        return n ** 2;
    }
    export function main(){
        let score = 3;
        let status = 'Open';
        console.log(`::::::::::: DEBUG WITHOUT TYPING: status: ${status} / squareScore(${score}): ${squareScore(score)}`);
    }
}

namespace TypeAliasesNormal {    
    export function squareScore(n: number): number {
        return n ** 2;
    }
    export function main(){
        let score: number = 3;
        let status: string = 'Open';
        console.log(`::::::::::: DEBUG WITHOUT TYPE-ALIASES: status: ${status} / squareScore(${score}): ${squareScore(score)}`);
    }
}

namespace TypeAliasesImproved1 {   
    export type LoanApplicationScore = number;
    export type LoanApplicationStatus = string; // Open, Close, Pending
    export function squareScore(n: LoanApplicationScore): LoanApplicationScore {
        return n ** 2;
    }
    export function main(){
        let score: LoanApplicationScore = 3;
        let status: LoanApplicationStatus = 'Open';
        console.log(`::::::::::: DEBUG WITH TYPE-ALIASES: status: ${status} / squareScore(${score}): ${squareScore(score)}`);
    }
}


namespace TypeAliasesImproved2 {   
    export enum LoanApplicationStatus { Open = 'Open', Close = 'Çlose', Pending = 'Pending' };
    export type LoanApplicationStatusTypeAlias = keyof typeof LoanApplicationStatus;
    export type LoanApplicationScore = number;
    export function squareScore(n: LoanApplicationScore): LoanApplicationScore {return n ** 2};
    export function main(){
        let score: LoanApplicationScore = 3;
        let status: LoanApplicationStatus = LoanApplicationStatus.Open;
        let status2: LoanApplicationStatusTypeAlias = LoanApplicationStatus.Open;        
        console.log(`::::::::::: DEBUG WITH TYPE-ALIASES: status: ${status} / squareScore(${score}): ${squareScore(score)}`);
        console.log(`::::::::::: DEBUG WITH TYPE-ALIASES: status: ${status2} / squareScore(${score}): ${squareScore(score)}`);
    }
}

TypeAliasesBad.main();
TypeAliasesNormal.main();
TypeAliasesImproved1.main();
TypeAliasesImproved2.main();