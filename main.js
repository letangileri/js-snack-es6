// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    {
        nome: "Lucia",
        peso: 23
    },
    {
        nome: "Alice",
        peso: 7
    },    
    {
        nome: "Genoveffa",
        peso: 12
    },    
    {
        nome: "Lidia",
        peso: 2
    },    
    {
        nome: "Mia",
        peso: 3
    },
    {
        nome: "Genoveffa",
        peso: 12
    },    
    {
        nome: "Lidia",
        peso: 2
    },    
    {
        nome: "Mia",
        peso: 1
    }
]

//memorizzo il peso del primo oggetto
let elemMinore = bici[0]['peso'];
console.log(elemMinore);

//il for parte da 1 perchè il valore del peso del primo oggetto è memorizzato in elemMinore
for (let i = 1; i < bici.length; i++) {
    const element = bici[i];
    if(element['peso'] < elemMinore){
        biciPesoMinore = element.nome;
        elemMinore = element['peso'];

        console.log(elemMinore);        
    }

}
document.writeln(elemMinore);

document.writeln(biciPesoMinore);


// 10 7 5 2 3


// Snack2

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [
    {
        nome : "Viareggio",
        punti : 0,
        "falli subiti" : 0
    },
    {
        nome : "Cus Pisa",
        punti : 0,
        "falli subiti" : 0
    },
    {
        nome : "Boca Juniores",
        punti : 0,
        "falli subiti" : 0
    },
    {
        nome : "Lazio",
        punti : 0,
        "falli subiti" : 0
    },
    {
        nome : "TikiTaka",
        punti : 0,
        "falli subiti" : 0
    },
    {
        nome : "Lazio",
        punti : 0,
        "falli subiti" : 0
    },
    {
        nome : "Bitonto",
        punti : 0,
        "falli subiti" : 0
    }
]
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//da completare
for (let i = 0; i < squadre.length; i++) {
    let thisPunti = squadre[i].punti;
    let thisFalli = squadre[i]['falli subiti'];
    console.log(squadre[i]);
    
    console.log(thisPunti);
    console.log(thisFalli);
    thisPunti = Number.parseInt(Math.random() * 40);
    thisFalli = Number.parseInt(Math.random() * 20);
    console.log("Punti " + thisPunti);
    console.log("Falli " + thisFalli);

    console.log("squadre " + squadre[i]);
    
    
    


    
    
}
console.log(squadre);
