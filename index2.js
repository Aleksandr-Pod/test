import { handle } from "./fn.js";
// с ф-циями можно работать как со св-вами объекта
// вызывать ту ф-цию, которая приходит в переменной
let x = "fnCar";
handle[x]();

x = "fnPrice";
handle[x]();