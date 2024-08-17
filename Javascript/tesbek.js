console.log("keluar di konsol");
alert("ini bakal muncul ditengah-tengah");
prompt("ini bakal muncul ditengah-tengah dan bisa dimasukin input");

let namaVariabel; // cara bikin variabel biasa
namaVariabel = 10; // bisa diubah
let wibu = 10; // bisa juga bikin langsung dikasih nilai

const dia = 15; // cara bikin variabel constant
// dia = 7; ini error, constant GAK BOLEH DIUBAH

// var jangan dipake

let input = prompt("masukin kata kata terserah");
console.log(input); 

// data struktur primitif
let string = "ini teks" // ini string, kalimat
let number = 69         // ini number, angka
let float = 69.420      // bisa juga pake koma
let bool = true;        // true atau false, bener atau salah

// array
let array = ["a", 2, true, 3.2321123] // array itu kayak variabel yang bisa nyimpen banyak, barisan
// array bisa nyimpen apapun, 
// tapi KALO BISA JANGAN DICAMPUR PLS PLS PLS
array[2] // ini buat dapetin elemen index ke 2 (penomoran dari 0)
console.log(array); // keluarin ["a", 2, true, 3.2321123]
array[3] = 70; // bisa diubah kayak variabel biasa
console.log(array); // keluarin ["a", 2, true, 70]

// ada banyak operasi bawaan dari array
array.pop(); // ini ngeluarin elemen paling belakang
console.log(array); // keluarin ["a", 2, true]
array.push("bebek"); // ini masukin elemen ke paling belakanng
console.log(array); // keluarin ["a", 2, true, "bebek"]
array.reverse(); // ini ngebalik arraynya
console.log(array); // keluarin ["bebek", true, 2, "a"]

let iniContohAjaGausahDiapalin = "saip wibu";
console.log(iniContohAjaGausahDiapalin.split("").reverse().join(""));
// takeaway, banyak fungsi bawaan, gausah dihapalin tapi bakal berguna
// ingat Al-Alaq:1, baca baca baca

// object itu kayak variabel tapi banyak propertinya (key-value)
// bayangin kayak mobil punya properti ban, mesin, bensin, dll.
const mobil = {
    ban: 4, 
    mesin: "v4",
    bensin: "pertamax",
    km: 232213.5,
    driver: {
        nama: "atila",
        skill: "issue"
    }, // isi objek bisa apa aja, bahkan another object
    "ini nama": 5, // bisa juga dalam bentuk string
}


mobil.km // ini buat dapetin isinya, bakal ngeluarin 232213.5

mobil["km"] // ini juga bisa buat dapetin isinya, bedanya apa sama yang sebelumnya?

let iniVariabel = "km";
mobil[iniVariabel] // ini sama aja ngambil properti km nya
mobil.iniVariabel // ini berusaha ngakses properti objeknya namanya iniVariabel, kan gak ada

mobil.mesin = "v12"; // isi object bisa diganti juga
mobil.merek = "toyota"; // kita juga bisa nambahin properti baru

console.log(mobil.ban) // 4
console.log(mobil.driver); // {nama: "atila", skill: "issue"}
console.log(mobil.driver.nama); // "atila"

console.log(mobil["ini nama"]); // "5"


// fungsi buat bikin kode yang bisa dipake berkali kali
function add(x, y) {  // function namaFungsi(parameter1, parameter2, ...){
    // bisa dimasukin apapun
    return x + y; // nanti kalo dipanggil, fungsinya bakal ngembaliin ini
}

console.log(add(5, 9)); // 14
console.log(add(add(add(5, 9), 5), 69)); // 88



// ------- //
// LOOPING //
// ------- //

while(x){
    position = position + 1;
    // fdsafsajfslkafj
    if(y) break;
    if(z) continue; // ini bakal ngeskip bawahnya, balik ke atas
    // dalksfslfdlkjs
}

let j = 0;
while(j < 10){
    console.log("bebek " + j);
    //f fsdflsdaflksjf kldsafljkls
    /// dsjkfsadlfkdlsafkldsaf lksa
    j++;
}
 console.log("---------------");

for (let i = 0; i < 10; i++) {
    console.log("bebek " + i);
}

for(let i = 9; i >= 0; i = i-1){
    console.log("bebek alternate " + i);
}

for(let i = 1; i <= 1024; i = i * 2){
    console.log("bebek cp " + i);
}

// fizzbuzz
function fizzbuzz(x){
    for(let i = 1; i <= x; i++){
        let output = "";
        if(i % 3 == 0) output = output + "fizz";
        if(i % 5 == 0) output += "buzz";
        if(output == "") console.log(i);
        else console.log(output);
    }
}