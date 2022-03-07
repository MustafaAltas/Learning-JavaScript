function getTextFile() {
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))  //text değeri çağırıldıktan sonra tekrardan then ile promise chain oluşturulup içindeki değerin verisine ulaşabiliyoruz.
    .catch(err => console.log(err));

}  // 

// getTextFile();

function getJsonFile() {  //localdeki bir json dosyasından  veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

// getJsonFile();


function getExternalJson() {
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=65c89bb8d0a2aa581f7585cccaa35418&base=EUR")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
}

getExternalJson();