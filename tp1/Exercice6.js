class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }

    getMention() {
        if (this.note >= 16) return "Tres bien";
        if (this.note >= 14) return "Bien";
        if (this.note >= 10) return "Passable";
        return "echec";
    }
}

const etudiant1 = new Etudiant("Noor", 18);
const etudiant2 = new Etudiant("Ali", 12);
const etudiant3 = new Etudiant("Zara", 9);

console.log(etudiant1.getMention());  
console.log(etudiant2.getMention());  
console.log(etudiant3.getMention());  