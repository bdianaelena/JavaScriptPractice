
var x ="DianaElenaBadita";
var lungime = x.length;

console.log("Lungimea lui x este:" , lungime);

let a ="AnaAreMere";
let AltCuvant = a.slice(3,8);

console.log("Noul cuvant este: ", AltCuvant);

let b ="Masa Casa Masina";
let AltCuvantt = b.slice(-10, -2);

console.log("Noul cuvant este: ", AltCuvantt);

let text = "maine e vineri si maine alerg.";
let newText = text.replace(/maine/g, "Azi");
console.log("Noul text: ", newText);