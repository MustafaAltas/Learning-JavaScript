
while (true) {
    let x = +prompt("Lütfen bir sayı giriniz");
    let işlem = prompt("Yapılacak işlemi giriniz : ('+','-','/','*'");
    let y = +prompt("Lütfen bir sayı giriniz");
    let sonuç;
    if (işlem == "q") {
        break;
    }


    switch (işlem) {
        case "+":
            console.log(+(x + y));
        break;

        case "-":
            console.log(+(x - y));
        break;

        case "/":
            if (x == 0){
                console.log("Hiç bir sayı 0'a bölünenez");
            } else {
                console.log(+(x/y));
            }
        break;

        case "*":
            console.log(+(x * y));
        break;
    
    }

    
}