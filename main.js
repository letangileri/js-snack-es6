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
        elemMinore = element['peso'];
        console.log(elemMinore);        
    }

}
document.writeln(elemMinore);

// 10 7 5 2 3


// Snack2

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

