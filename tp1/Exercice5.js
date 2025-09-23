const livre = {
    titre: "Js",
    auteur: "Auteur",
    annee: 2023,
    getInfo: function() {
        return `${this.titre} - ${this.auteur} - ${this.annee}`;
    }
};
console.log(livre.getInfo());