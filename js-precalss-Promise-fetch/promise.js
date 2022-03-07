//  function getData(data) { //promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             resolve("olumlu sonuç")
//         },5000);
        
//     });
//  }


//  getData("Merhaba").then(function(response) {
//      console.log(response);

//  getData("Merhaba").catch(function(response) {
//      console.log(response);
//  })   // reject değerini almak için kullanılır.
 

 // resolve ile olumlu sonucumuzu döndürürz
 // reject ile olumsuz sonucumuzu döndürürz

 // olumu sonucu then ile , olumsuz sonucu catch ile alırız.


//  function getData(data) { //promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             if(typeof data === "string") {
//                 resolve(data)
//             }else {
//                 reject(new Error("lütfen string bir değer giriniz."));
//             }
//         },5000);
        
//     });
//  }


//  getData(12).then((response) => {
//      console.log(response);
//  }).catch((err) => {
//      console.error(err);
//  })




//**** Promise Chain */
function addTwo(number) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof number === "number") {
                resolve(number + 2);
            }else {
                reject(new Error("Lütfen number bir değer yazınız"))
            }
        },1000)
    })
}

addTwo(10).then((response) => {
    console.log(response);
    return response + 2;
}).then(function(response2) {
    console.log(response2);
}).catch((err) =>{
    console.log(err);
}) // promise chain yapısı kullanıldı bu durumda bir tane catch kullanılır.