console.clear();

const fs = require('fs/promises');

(async () => {
    const drinksContent = await fs.readFile('./data/drinks.txt', 'utf-8');
    const drinksList = drinksContent.split('\r\n');

    let i = 0;
    for(const drink of drinksList){
        // const drinkDetails = drink.split(' ');
        // const drinkName = drinkDetails[0];
        // const drinkPrice = drinkDetails[1];
        // console.log(`Pasirinkimas ${++i}: ${drinkName} kurios kaina yra ${drinkPrice} EUR.`);
    
        const drinkDetails = drink.split(' ');
        const [name, price, count] = drinkDetails;
        // totalSum = parseInt(count) * parseFloat(price);
        //parseInt(sveikieji), parseFloat(desimtainiai)

        const balance = +count * +price;
        const precision = 2;
        const b1 = balance.toFixed(precision);
        // const b2 = Math.round(balance * (10 ** precision)) / (10 ** precision);

        console.log(`Pasirinkimas ${++i}: ${name}, kurio kaina yra ${price} EUR buvo parduota ${count} kiekis ir bendra apyvarta yra ${b1} EUR.`);
    }
})();






