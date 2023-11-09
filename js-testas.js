/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
let eurai = Math.round(Math.random() * (1000 - 1 + 1) +1) 
let dollar = 1.05 
let convert = eurai * dollar
console.log(`${eurai} EUR = ${convert.toFixed(2)} USD`)



/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
let dollars = Math.round(Math.random() * (1000 - 1 + 1) +1)
let euras = 0.88
let convertToEurai = dollars * euras
console.log(`${dollars} USD = ${convertToEurai.toFixed(2)} EUR`)


/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu.

Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
*/ 

let svoris = 80
let ugis = 1.8
let BMI = (svoris / ugis**2)
console.log(`${BMI}`)

if(BMI > 25) {
    console.log(`Zmogus turi BMI indeks ${BMI.toFixed(1)}. Cia yra viršsvoris`)
} else if (BMI < 25 && BMI >= 18.5) {
    console.log(`Zmogus turi BMI indeks ${BMI.toFixed(1)}. Cia yra normalus svoris`)
} else if (BMI < 18.5) {
    console.log(`Zmogus turi BMI indeks ${BMI.toFixed(1)}. Cia yra per mažas svoris`)
}

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
let birthday = "28 January, 1989 13:30:00";
let date1 = new Date(birthday); 
let date2 = new Date(); 
let timeDiff = Math.abs(date2.getTime() - date1.getTime()); 
let diffDays = Math.round(timeDiff / (1000 * 3600 * 24)); 
let diffHours = diffDays * 24; 
let diffMin = diffHours * 60;
let diffSec = diffMin * 60; 

console.log(diffDays + ' days');
console.log(diffHours + ' hours');
console.log(diffMin + ' minutes'); 
console.log(diffSec + ' seconds')
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
let degrees = Math.round(Math.random() * (1000 - 1 + 1) +1)
let convertToCelcium = (degrees - 32) * 5/9
console.log(`${degrees} Farenheito = ${convertToCelcium.toFixed(2)} Celsiju`)



let convertToFar = (degrees * 9/5) + 32
console.log(`${degrees} Celsiju = ${convertToFar.toFixed(2)} Farenheito`)

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
let numbers = [1,2,3,4,5,6,7,8,9,10]
let masyvas = numbers.join(`-`)
console.log(masyvas)
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
let string = ''
suma = 0
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++){
        string += '*'
    }
    string += "\n"
}
console.log(string)
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
function getNumberOfDays(now, end) {
let today = new Date(now);
let kaledos = new Date (end);
let diffInTime = Math.abs(kaledos.getTime() - today.getTime());
let diffInDays = Math.round(diffInTime / (1000 * 3600 * 24)); 
return diffInDays;
}
console.log(`Liko ${getNumberOfDays("09 November, 2023", "25 December, 2023")} dienų iki Kalėdų`)


/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let mas = ['Tomas','Dainius','Paulius','Jonas']
console.log(mas.join(','))
console.log(mas.join('+'))
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
function generatePassword () {
    const length = 12; 
    cLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    sLetters ="abcdefghijklmnopqrstuvwxyz"
    numbers = "0123456789"
    signs = "!@#%^&*-+/"
    result = ''
    for (let i = 1, a = cLetters.length, b = sLetters.length, c = numbers.length, d = signs.length; i <= 3; i++) {
      result += (cLetters.charAt(Math.floor(Math.random() * a)) + sLetters.charAt(Math.floor(Math.random() * b)) + numbers.charAt(Math.floor(Math.random() * c)) + signs.charAt(Math.floor(Math.random() * d)))

    }
    return result
} 

console.log(generatePassword())
