namespace TypeAnnotations {    
    export function main(){    
        var score: number = 10;
        var firstName: string = "Marco";
        var isOpen: boolean = true;// Boolean variable  
        console.log(`::::::::::: DEBUG TYPE-ANNOTATIONS: score (number): ${score} / firstName (string): ${firstName} / isOpen (boolean): ${isOpen}`);
    }
}
TypeAnnotations.main();