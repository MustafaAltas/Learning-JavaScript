import mustafa,{a as değişken,api} from "./module1.js";
import * as myModule from "./module2.js"
import {style} from "./module3.js";

//import * as myModule from "./module2.js" kullanımı içerideki bütün export edilenler import edilebiliyor.

// default olarak export edilenler süslü parantez içine yazılmadan import edilebilir.

// import ederken as ile export edilen değişkenlerin adını değiştirebiliriz.

//default olarak export edilenler farklı bir isimle de kullanılabilir. (as kullanmadan)

console.log(mustafa());
console.log(değişken);
console.log(api);

console.log(myModule.api);
console.log(myModule.selam());
console.log(myModule.default);

// console.log(style);


//************************************ */

const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    const module = await import("./module3.js");
    btn.style.color = module.style.color
    btn.style.backgroundColor = module.style.bColor
})