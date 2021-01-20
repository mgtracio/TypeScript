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
        ['cmd1']: [string];
        ['cmd2']: [boolean, number, string];
        ['cmd3']: [boolean, boolean];
    }
    export type CommandType = ICommandType;
    export function runCommand<A, B extends keyof CommandType, C extends CommandType[B]>(command: B, ...rest: C): C { // ... "Rest Parameters" already standardized in ES2015 (ES6).
        return rest;
    }
    export function main(){      
        const x = runCommand('cmd2', true, 1, 'hello');
        console.log(`::::::::::: DEBUG GENERIC-TYPES-WITH-EXTEND-AND-REST-PARAMETERS : statusScoreVal<LoanApplicationStatusTypeAlias, LoanApplicationScore>: ${x }`);
    }
}
GenericTypesImproved1.main();

/*namespace GenericTypesImproved2 {  
    class Person {
        name: string;
        constructor(name: string) {
          this.name = name;
        }
    }
    class Owner extends Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
          super(name);
          this.age = age;
        }
    }
    class Collection<T extends Person | Owner> {
        private items: T[] = [];
        constructor(items: T[]) {
          this.items.push(...items);
        }
        add(items: T) {
          this.items.push(items);
        }
        remove(index: number) {
          this.items.splice(index, 1);
        }
        getItem(index: number): T {
          return this.items[index];
        }
    }
    export function main(){      
        console.log(`::::::::::: DEBUG EXTENDING-GENERIC-TYPES: statusScoreVal<LoanApplicationStatusTypeAlias, LoanApplicationScore>: ${statusScoreVal}`);    
    }
}
GenericTypesImproved2.main();
*/