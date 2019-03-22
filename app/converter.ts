const patterns:number[][][] = [
[[0,1,0],[2,0,2],[2,1,2]],
[[0,0,0],[0,2,0],[0,2,0]],
[[0,1,0],[0,1,2],[2,1,0]],
[[0,1,0],[0,1,2],[0,1,2]],
[[0,0,0],[2,1,2],[0,0,2]],
[[0,1,0],[2,1,0],[0,1,2]],
[[0,1,0],[2,1,0],[2,1,2]],
[[0,1,0],[0,0,2],[0,0,2]],
[[0,1,0],[2,1,2],[2,1,2]],
[[0,1,0],[2,1,2],[0,1,2]]];

const symbols : string[] = [
" ",
"_",
"|"];

export const convert:(input:string) => string = function(input:string){
    if(input == null || input.length == 0){throw new TypeError('Please provide a number as argument');}
    let output :string = "";
    for (let i = 0; i < 3; i++) {
        for (let snumber of input) {
            let number: number = +snumber;
            if(Number.isNaN(number)){throw new TypeError('Non numeric char are not supported');}
            let pattern: number[] = patterns[number][i];
            Array.from(pattern).forEach(function (pat) {
                output += symbols[pat];
            });
        }
        output += '\n';
    }
    return output;
}