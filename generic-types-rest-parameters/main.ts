namespace GenericTypes {  
    enum LoanApplicationStatus { Open = 'Open', Close = 'Çlose', Pending = 'Pending' };
    type LoanApplicationStatusTypeAlias = keyof typeof LoanApplicationStatus;
    type LoanApplicationScore = number;
    type TupleType<A, B> = [A, B];
    function fnWithGenericParams<T>(args:T):T {
        return args;
    }  
    export function main(){      
        let status: LoanApplicationStatusTypeAlias = LoanApplicationStatus.Open;        
        let score: LoanApplicationScore = 3;
        let statusScoreVal: TupleType<LoanApplicationStatusTypeAlias, LoanApplicationScore> = [status, score];
        let anyTuple: TupleType<string, Boolean> = [status, false];                
        let fnWithGenericParam1 = fnWithGenericParams<string>("!Code refactoring is making your code more efficient and maintainable!");
        let fnWithGenericParam2 = fnWithGenericParams<number>(2021);
        let anyTuple2: TupleType<LoanApplicationScore, LoanApplicationStatusTypeAlias> = [score, status];                
        let fnWithGenericParam3 = fnWithGenericParams<TupleType<LoanApplicationScore, LoanApplicationStatusTypeAlias>>(anyTuple2);
        console.log(`::::::::::: DEBUG GENERIC-TYPES: statusScoreVal<LoanApplicationStatusTypeAlias, LoanApplicationScore>: ${statusScoreVal}`);
        console.log(`::::::::::: DEBUG GENERIC-TYPES: anyTuple<string, Boolean>: ${anyTuple}`);
        console.log(`::::::::::: DEBUG GENERIC-TYPES: fnWithGenericParams<string>: ${fnWithGenericParam1}`);
        console.log(`::::::::::: DEBUG GENERIC-TYPES: fnWithGenericParams<number>: ${fnWithGenericParam2}`);
        console.log(`::::::::::: DEBUG GENERIC-TYPES: fnWithGenericParams<TupleType<LoanApplicationScore, LoanApplicationStatusTypeAlias>>: ${fnWithGenericParam3}`);
    }
}
GenericTypes.main();

namespace GenericTypesImproved1 {  
    export interface ICommandType {
        ['cmdA']: [string];
        ['cmdB']: [string, boolean, number];
        ['cmdC']: [boolean, boolean];
    }
    export type CommandType = ICommandType;
    export function runCommand<A extends keyof CommandType, B extends CommandType[A]>(command: A, ...rest: B): B { // ... "Rest Parameters" already standardized in ES2015 (ES6).
        return rest;
    }
    export function main(){      
        const GENERICS_MESSAGE = '!!Powerful abstractions with generic programming!!';
        const resultCommandA:[string] = runCommand('cmdA', GENERICS_MESSAGE);
        const resultCommandB:[string, boolean, number] = runCommand('cmdB', GENERICS_MESSAGE, true, 2021);
        const resultCommandC:[boolean, boolean] = runCommand('cmdC', false, true);
        console.log(`::::::::::: DEBUG GENERIC-TYPES-WITH-EXTEND-AND-REST-PARAMETERS : resultCommandA:[string]: ${resultCommandA}`);
        console.log(`::::::::::: DEBUG GENERIC-TYPES-WITH-EXTEND-AND-REST-PARAMETERS : resultCommandB:[string]: ${resultCommandB}`);
        console.log(`::::::::::: DEBUG GENERIC-TYPES-WITH-EXTEND-AND-REST-PARAMETERS : resultCommandC:[string]: ${resultCommandC}`);
    }
}
GenericTypesImproved1.main();

namespace GenericTypesImproved2 {  
    class FinancialEntity {
        name: string;
        personalLoansTerms: number[];         
        constructor(name: string, personalLoansTerms: number[]) {
          this.name = name;
          this.personalLoansTerms = personalLoansTerms;
        }
    }
    class Bank extends FinancialEntity {
        name: string;
        personalLoansTerms: number[]; 
        autoLoansTerms: number[]; 
        constructor(name: string, personalLoansTerms: number[], autoLoansTerms: number[]) {
          super(name, personalLoansTerms);
          this.autoLoansTerms = autoLoansTerms;
        }
    }
    class FinancialEntities<T extends FinancialEntity | Bank> {
        private entities: T[] = [];
        constructor(entities: T[]) {
          this.entities.push(...entities);
        }
        add(entities: T) {
          this.entities.push(entities);
        }
        getAll() {
          return this.entities;
        }
    }
    /*const items: FinancialEntities<Bank> = new FinancialEntities<Bank>([
      new Bank("BBVA", [12, 24, 36, 48, 60], [12, 24, 36]),
      new FinancialEntity("Central Bank", [12, 24, 36, 48, 60])
    ]);*/
    const financialEntities: FinancialEntities<Bank> = new FinancialEntities<Bank>([
      new Bank("BBVA", [12, 24, 36, 48, 60], [12, 24, 36]),
      new Bank("Banco Autofin", [12, 24, 36, 48, 60], [12, 24, 36])
    ]);
    financialEntities.add(new Bank("CREDITO REAL", [12, 24, 36, 48, 60], [12, 24, 36]));
    export function main(){      
        console.log(`::::::::::: DEBUG EXTENDING-GENERIC-TYPES: (items: FinancialEntities<Bank>): ${financialEntities.getAll().map(x=>x.name)}`);    
    }
}
GenericTypesImproved2.main();