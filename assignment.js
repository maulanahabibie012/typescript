"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Soal 1
 * Buat sebuah fungsi bernama getFullName yang menerima parameter dengan tipe data Person.
 * Tipe Person ini adalah sebuah type alias yang memiliki properti firstName (string) dan lastName (string).
 * Kembalikan hasil concatenasi dari firstName dan lastName, dipisahkan oleh spasi.
 */
console.log("======== SOAL 1 =========");
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName); // Mengembalikan concatenasi firstName dan lastName
}
var person1 = {
    firstName: "Maulana",
    lastName: "Habibie"
};
console.log(getFullName(person1));
/**
 * Soal 2
 * Buat fungsi wrapInArray yang menggunakan generic type untuk mengubah input menjadi array.
 * Fungsi ini menerima satu parameter item dengan tipe T dan mengembalikan sebuah array berisi item tersebut.
 * Gunakan generic type T untuk mendefinisikan tipe parameter input dan hasil return.
 */
console.log("======== SOAL 2 =========");
function wrapInArray(item) {
    return [item]; // Mengembalikan array yang berisi item
}
var numberArray = wrapInArray(27); // Menggunakan tipe number
var stringArray = wrapInArray("Habibie"); // Menggunakan tipe string
var booleanArray = wrapInArray(false); // Menggunakan tipe boolean
var objectArray = wrapInArray({ name: "Habibie", age: 27 }); // Menggunakan tipe object
console.log(numberArray);
console.log(stringArray);
console.log(booleanArray);
console.log(objectArray);
