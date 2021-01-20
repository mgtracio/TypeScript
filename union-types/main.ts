namespace UnionTypes {    
	type Score = number;
    type ScoreCollection = number[];
	type AllowedScoreTypes = Score | ScoreCollection;
    export function squareScore(n: AllowedScoreTypes): AllowedScoreTypes {
        if(typeof n === 'number') return n**2;
        if(Array.isArray(n)) return n.map(x=>x**2);
        throw new Error('Type not supported');
    }
    export function main(){
        let score: Score = 3;
        let scoreCollection: ScoreCollection = [2,3];
        console.log(`::::::::::: DEBUG UNION-TYPES: squareScore(${score}): ${squareScore(score)}`);
        console.log(`::::::::::: DEBUG UNION-TYPES: squareScore(${scoreCollection}): ${squareScore(scoreCollection)}`);
    }
}
UnionTypes.main();