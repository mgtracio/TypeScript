namespace GenericsTypes {  
    export enum LoanApplicationStatus { Open = 'Open', Close = 'Çlose', Pending = 'Pending' };
    export type LoanApplicationStatusTypeAlias = keyof typeof LoanApplicationStatus;
    export type LoanApplicationScore = number;
    export type PairValue<A, B> = [A, B];    
    export function main(){      
        let status: LoanApplicationStatusTypeAlias = LoanApplicationStatus.Open;        
        let score: LoanApplicationScore = 3;
        let statusScoreVal: PairValue<LoanApplicationStatusTypeAlias, LoanApplicationScore> = [status, score];
        let anyTuple: PairValue<string, Boolean> = [status, false];        
        console.log(`::::::::::: DEBUG GENERICS-TYPES: statusScoreVal<LoanApplicationStatusTypeAlias, LoanApplicationScore>: ${statusScoreVal}`);
        console.log(`::::::::::: DEBUG GENERICS-TYPES: anyTuple<string, Boolean>: ${anyTuple}`);
    }
}
GenericsTypes.main();