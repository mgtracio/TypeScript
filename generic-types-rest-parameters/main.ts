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
      countries: string[];
      constructor(name: string, personalLoansTerms: number[], countries: string[]) {
        this.name = name;
        this.personalLoansTerms = personalLoansTerms;
        this.countries = countries
      }
  }
  class Bank extends FinancialEntity {
      countries: string[];
      autoLoansTerms: number[]; 
      constructor(name: string, personalLoansTerms: number[], countries: string[], autoLoansTerms: number[]) {
        super(name, personalLoansTerms, countries);
        this.autoLoansTerms = autoLoansTerms;
        this.countries = countries;
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
  const reduceLambdaForMaxValue = (a: number, b: number): number => b > a ? b : a;
  const filterLambdaForSpecificStringValue = (a: string, filteredValue: string) => a === filteredValue;
  /*const financialEntities: FinancialEntities<Bank> = new FinancialEntities<Bank>([
    new Bank("BBVA", [24, 36, 48, 60],["MEXICO", "ECUADOR"], [12, 24, 36]),
    new FinancialEntity("Banco Autofin", [12, 24, 36, 48, 60], ["MEXICO"])
  ]);*/
  const financialEntities: FinancialEntities<Bank> = new FinancialEntities<Bank>([
    new Bank("BBVA", [24, 36, 48, 60],["MEXICO", "ECUADOR"], [12, 24, 36]),
    new Bank("Banco Autofin", [12, 24, 36, 48, 60], ["MEXICO"], [12, 24, 36])
  ]);
  financialEntities.add(new Bank("PICHINCHA", [36, 48, 60], ["ECUADOR"], [12, 24, 36]));
  financialEntities.add(new Bank("PRODUBANCO", [24, 36, 48, 60], ["ECUADOR"], [12, 24, 36]));
  export function main(){      
      console.log(`::::::::::: DEBUG EXTENDING-GENERIC-TYPES: (items: FinancialEntities<Bank>): ${financialEntities.getAll().map(x=>`  ENTITY: ${x.name} - ${x.countries}`)}`);    
      console.log(`::::::::::: DEBUG EXTENDING-GENERIC-TYPES: (items: FinancialEntities<Bank>): ${financialEntities.getAll().map(x=>`  ENTITY: ${x.personalLoansTerms.reduce((a,b)=>Math.max(a,b))}`)}`);    
      console.log(`::::::::::: DEBUG EXTENDING-GENERIC-TYPES: (items: FinancialEntities<Bank>): ${financialEntities.getAll().map(x=>`  ENTITY: ${x.personalLoansTerms.reduce((a,b)=> b>a?b:a)}`)}`);    
      console.log(`::::::::::: DEBUG EXTENDING-GENERIC-TYPES: (items: FinancialEntities<Bank>): ${financialEntities.getAll().map(x=>`  ENTITY: ${x.personalLoansTerms.reduce(reduceLambdaForMaxValue)}`)}`);    
      console.log(`::::::::::: DEBUG EXTENDING-GENERIC-TYPES: (items: FinancialEntities<Bank>): Ecuadorian Banks: ${financialEntities.getAll().filter(x=>x.countries.some(x=>x==="ECUADOR")).map(x=>x.name)}`);    
  }
}
GenericTypesImproved2.main();