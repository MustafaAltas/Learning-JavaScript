// let score = 51;

// let grade = score >= 50;

// if (grade) {
//     console.log("Tebrikler Geçtiniz!!! notunuz ${score}")
// }



//------------------------------------


// let score = prompt("notunuzu giriniz :");

// if (score >= 50) {
//     console.log("Tekrikler geçtiniz !");
// }

// let score = 48;
// let grade = score >= 50;

// if (grade) {
//     console.log("tebrikler geçtiniz");
// } else {
//     console.log("kaldınız!");
// }


// let score = 75;

// if (score > 80) {
//     console.log(`Tebrikler başarılı bir öğrencisiniz`);
// } else if (score >= 50) {
//     console.log(`Tebrikler notunuz ${score}, geçtiniz!`);

// } else {
//     console.log(`Üzgünüz kaldınız!`);
// }


// let score = 90;

// if (score >= 50) {
    
//     if (score > 80) {
//         console.log("Tebrikler çok başarılı bir öğrencisiniz!");
//     } else {
//         console.log("Tebrikler geçtiniz!!!");
//     }

// }else {
//     console.log(`Üzgünüz kaldınız!`);
// }

 //Ternary if

 var score = 49;

//  score >= 50 ? console.log("Tebrikler çok başarılı") : console.log("Üzgünüm kaldınız");
//  score >= 80 ? console.log("Tebrikler çok başarılı bir öğrencisiniz") : ( score >= 50 ? console.log("Tebrikler geçtiniz!") : console.log("Üzgünüm kaldınız"))

// var text ;

// var meyveler = prompt("giriniz:: ");


// //toLowerCase == bütün karakterleri lower yapıyor.

// switch (meyveler.toLowerCase()) {
//     case "banana":
//         text = "Banana is good"
//     break;
//     case "orange":
//     case "lemon":
//     case "lime" :
//         text = `${meyveler.toLowerCase()} is good`
//     break;
//     case  "apple":
//         text = "Apple is good"
//     break; 

//     default:
//         text = "Aranan meyve bulunamadı"
//         break;
// }

// console.log(text);


// pazartesi, çarşamba perşembe cumartesi günler inclass var 
// salı cuma team work
// pazar tatil

//-----------------------------------

let gun = prompt("Lütfen günü giriniz : ")
let ifade ;

switch (gun.toLowerCase()) {
    case "pazatesi":
    case "perşembe":
    case "çarşamba":
    case "cumartesi":
        ifade = `${gun.toLowerCase()} İn-class dersi var`
    break;
    case "salı":
    case "cuma":
        ifade = `${gun.toLowerCase()} günü teamwork çalışması var.`
    break;
    case "pazar":
        ifade = `${gun.toLowerCase()} günü tatil`
    break;

    default:
        ifade = `Yanlış bir gün girdiniz.`
        break;
}

console.log(ifade);