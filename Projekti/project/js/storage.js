// Web Storage
// localStorage
// sessionStorage
// JSON 
// setItem()
// getItem()
// clear() - fshi gjithqka
// removeItem( key ) - fshi nje objekt
// key( index ) - merr emrin e objektit

localStorage.setItem('modeli', 'iPhone8');
let val = localStorage.getItem('modeli');
console.log(val);
let key = 'Kapaciteti';
localStorage.setItem(key, 64);

let options = {
    "modeli":"iPhone", 
    "kapacitetiGB":"32", 
    "ngjyra":["e zeze", "hiri", "e bardhe"]};
let str = JSON.stringify(options);

localStorage.setItem("ModeliTel", str);

let original = localStorage.getItem("ModeliTel");

console.log(original);
let obj = JSON.parse(original);
console.log(obj);
console.log(obj.ngjyra[2]);
