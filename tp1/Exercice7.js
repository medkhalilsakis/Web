const notes = [12, 5, 17, 9, 20];

const moyenne = notes.reduce(
    (acc, note) => acc + note, 0
) / notes.length;
console.log(moyenne); 

const sN = [...notes].sort((a, b) => b - a);
console.log(sN); 

const fN = notes.filter(note => note >= 10);
console.log(fN); 