console.clear()

console.log('hihihi');

const a = 5;
const b = 10;
const c = 15;

//suma

console.log(`Skaiciaus ${a} ir skaiciaus ${b} suma yra ${a + b}`);
console.log(`Skaiciaus ${a} ir skaiciaus ${c} suma yra ${a + c}`);
console.log(`Skaiciaus ${b} ir skaiciaus ${c} suma yra ${b + c}`);



const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];

// let suma = 0;

// a1.forEach (e => {
//     suma += e;
// });
// const vidurkis = suma / a1.length;

// console.log(`Skaiciu masyvas, kuri sudaro ${a1.length} skaiciai, vidurkis yra ${vidurkis}.`);

function vidurkis(array) {
    let suma = 0
    array.forEach (e => {
        suma += e;
    });
    const vidurkis = suma / array.length;
    console.log(`Skaiciu masyvas, kuri sudaro ${array.length} skaiciai, vidurkis yra ${vidurkis}.`);

}

vidurkis(a1);
vidurkis(a2);
vidurkis(a3);

const s1 = 'mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder WomaN';
const s4 = 'Algimantas cekuolis';
// Rezultata pateikti tokiu sablonu:
// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]


function akronimuGeneratorius(acronym) {
    const vardoPirmaRaide = acronym.split(' ');
    const vardas = vardoPirmaRaide[0][0].toLocaleUpperCase();
    const pavarde = vardoPirmaRaide[1][0].toLocaleUpperCase();
    console.log(`Legendines asmenybes ${vardoPirmaRaide[0]} ${vardoPirmaRaide[1]} trumpinys yra ${vardas}. ${pavarde}.`);
}

akronimuGeneratorius(s1);
akronimuGeneratorius(s2);
akronimuGeneratorius(s3);
akronimuGeneratorius(s4);

// [Vardas] [Pavarde] yra [amzius] metu amziaus.

const jonas = {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 99,
}

const maryte = {
    name: 'Maryte',
    surname: 'Marytaite',
    age: 87,
}

console.log(`${jonas.name}, ${jonas.surname}, yra ${jonas.age} metu amziaus`)

