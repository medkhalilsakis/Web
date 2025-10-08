function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Salut ${name}, tu as ${age} ans.`);
    } else {
        console.log(`Salut ${name}!`);
    }
}

function power(base: number, exp: number = 2): number {
    return Math.pow(base, exp);
}

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}
