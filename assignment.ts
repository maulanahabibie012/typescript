/**
 * Soal 1
 * Buat sebuah fungsi bernama getFullName yang menerima parameter dengan tipe data Person. 
 * Tipe Person ini adalah sebuah type alias yang memiliki properti firstName (string) dan lastName (string).
 * Kembalikan hasil concatenasi dari firstName dan lastName, dipisahkan oleh spasi.
 */
console.log(`======== SOAL 1 =========`);
type Person = { // Mendefinisikan type alias Person
    firstName: string;
    lastName: string;
};

function getFullName(person: Person): string { // Fungsi untuk mendapatkan nama lengkap
    return `${person.firstName} ${person.lastName}`; // Mengembalikan concatenasi firstName dan lastName
}

const person1: Person = {
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
console.log(`======== SOAL 2 =========`);
function wrapInArray<T>(item: T): T[] { // Fungsi generic untuk membungkus item dalam array
    return [item]; // Mengembalikan array yang berisi item
}

const numberArray = wrapInArray(27); // Menggunakan tipe number
const stringArray = wrapInArray("Habibie"); // Menggunakan tipe string
const booleanArray = wrapInArray(false); // Menggunakan tipe boolean
const objectArray = wrapInArray({ name: "Habibie", age: 27 }); // Menggunakan tipe object

console.log(numberArray); 
console.log(stringArray);
console.log(booleanArray); 
console.log(objectArray);

export {};