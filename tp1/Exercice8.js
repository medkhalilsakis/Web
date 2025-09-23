const wait = ms => new Promise(res => setTimeout(res, ms));

console.log("Debut");
wait(2000).then(() => console.log("Fin"));