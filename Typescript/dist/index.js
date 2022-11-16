"use strict";
let age = 123456789;
let lang = "Typescript";
let isGood = true;
let abc;
abc = 1;
abc = "s";
function xyz(doc) {
    console.log(doc);
}
let numbers = [];
let info = [1, 'Rahul'];
let mySize = "8";
console.log(mySize);
function calcTax(income, year = 2022) {
    if (year < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calcTax(100));
function calcTax2(income, year) {
    if ((year || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calcTax2(100));
let emp = {
    id: 1,
    name: "Rahul",
    phone: '',
    retire: (date) => {
        console.log(date);
    }
};
console.log(emp);
function kgToLbs(wgt) {
    if (typeof (wgt) === "number")
        return wgt * 2.2;
    return parseInt(wgt) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kgsdfdf"));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let qty = 20;
let met = "inch";
function getName(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
getName(undefined);
let log = null;
console.log(log === null || log === void 0 ? void 0 : log('abc'));
//# sourceMappingURL=index.js.map