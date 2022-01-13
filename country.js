console.clear();



const fs = require('fs/promises');
const path = require('path');

console.log(__dirname);
console.log(__filename);

(async () => {

    function parseJSONtoObject(text) {
        try {
            const obj = JSON.parse(text);
            return [false, obj];
        } catch (error) {
            return [true, {}];
        } finally {
            console.log('Baigiau bandyti parsinti faila...');
        }
    }

    function childrenNames(childrenList) {
        const namesOnly = [];
        for(let i = 0; i < childrenList.length; i++){
        const name = childrenList[i].name;
        namesOnly.push(name)
    }
        return namesOnly.join(', ')
    }
    
    const fullPath = path.join(__dirname, './data/country.json')
    const countryContent = await fs.readFile(fullPath, 'utf-8');
    const [personError, personObj] = parseJSONtoObject(countryContent);

    if(personError){
        console.log('Parsinant faila ivyko klaida.')
    } else {
        // console.log(personObj);
        console.log(`${personObj.name} ${personObj.lastname} has ${personObj.childrenCount} children and their names are: ${childrenNames(personObj.children)}`);
    }

})();

const skaiciai = [1, 2, 3, 8];
const dvigubiSkaiciai = [];

for (const skaicius of skaiciai) {
    dvigubiSkaiciai.push(skaicius * 2);
}

console.log(skaiciai);
console.log(dvigubiSkaiciai);

const vardai = ['Jonas', 'Ona', 'Ciubaka'];
const pirmosRaides = [];

for (const vardas of vardai) {
    pirmosRaides.push(vardas[0]);
}

const pirmosRaidesMap = vardai.map(v => v[0]);

console.log(vardai);
console.log(pirmosRaides);
console.log(pirmosRaidesMap);