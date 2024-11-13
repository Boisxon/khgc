let savolBir = prompt('String typedagi molumot kriting')
let savolIkki = prompt('Number typedagi molumot kriting')
let savolUch = prompt('boolean typedagi molumot kriting')

console.log(typeof (savolBir));
console.log(typeof (Number(savolIkki)));
console.log(typeof (Boolean(savolUch)));

alert("Hamma malumotlarni togri kiritganingizga ishonchingiz komilmi?")
alert("siz kritgan " + savolBir + " sozi " + typeof (savolBir) + " typega tegishli \n" +
    "siz kritgan " + savolIkki + " sozi " + typeof Number(savolIkki) + " typega tegishli \n" +
    "siz kritgan " + savolUch + " sozi " + typeof Boolean(savolUch) + " typega tegishli \n");