namespace GenericTypes {  
    export enum LoanApplicationStatus { Open = 'Open', Close = 'Çlose', Pending = 'Pending' };
    export type LoanApplicationStatusTypeAlias = keyof typeof LoanApplicationStatus;
    export type LoanApplicationScore = number;
    export type PairValue<A, B> = [A, B];
    function fun<T>(args:T):T {
        return args;
      }  
    export function main(){      
        let status: LoanApplicationStatusTypeAlias = LoanApplicationStatus.Open;        
        let score: LoanApplicationScore = 3;
        let statusScoreVal: PairValue<LoanApplicationStatusTypeAlias, LoanApplicationScore> = [status, score];
        let anyTuple: PairValue<string, Boolean> = [status, false];        
        console.log(`::::::::::: DEBUG GENERIC-TYPES: statusScoreVal<LoanApplicationStatusTypeAlias, LoanApplicationScore>: ${statusScoreVal}`);
        console.log(`::::::::::: DEBUG GENERIC-TYPES: anyTuple<string, Boolean>: ${anyTuple}`);
    }
}
GenericTypes.main();