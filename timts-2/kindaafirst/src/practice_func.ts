

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// there could be 2 ways -> 1. tuple and 2. array of arrays
function applyFunc(f: ((a: number, b:number) => number)[], arr: [number, number][]): number[]{

    // read it like result was string     ||    const restult : string = "initial_value";   || same its just inti with empty array 
    const result: number[] = [];
    for(let i=0; i<f.length; i++){
        const func = f[i];
        const [a, b] = arr[i];
        const res = func(a, b);
        result.push(res);
    }
    return result;
}


console.log(applyFunc([multiply, divide] , [[10, 5], [20, 4]]));

