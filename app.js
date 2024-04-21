import fs from "fs";
import util from "util";

// Inspeccionar y mostrar información del objeto process
console.log(util.inspect(process.argv, { showHidden: false, depth: 1 }));
console.log(util.inspect(process.platform, { showHidden: false, depth: null }));

const filename = "./dates.txt"; // Ruta fija al archivo
const content = fs.readFileSync(filename, "utf8").trim(); // Lee y trima el archivo en formato UTF-8

const lines = content.split("\n"); // Divide el contenido en líneas
const lineCount = lines.length; // Cuenta las líneas

const words = content.split(/\s+/); // Divide en palabras
const wordCount = words.filter(Boolean).length; // Filtra espacios vacíos y cuenta las palabras

const characterCount = content.replace(/\s/g, "").length; // Cuenta los caracteres sin espacios

// Utiliza util.format para crear la cadena formateada
const resultString = util.format(
  "Numero de líneas: %d\nNumero de palabras: %d\nNumero de caracteres (excluyendo espacios vacíos): %d",
  lineCount,
  wordCount,
  characterCount
);

// Imprime la cadena formateada
console.log(resultString);
