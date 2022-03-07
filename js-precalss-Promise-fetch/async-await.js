class Request {
  async get(url) {
    let response = await fetch(url);
    let getData = await response.json();
    return getData; // new Promise()'un resolve parametresini döndürür.
  }
  async post(url, data) {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    let getData = await response.json();
    return getData
  }
}

let request = new Request();

request
  .get("http://api.exchangeratesapi.io/v1/latest?access_key=65c89bb8d0a2aa581f7585cccaa35418")
  .then((result) => {
    console.log(result.rates.TRY);
  })
  .catch((err) => {
    console.log(err);
  });

// request.post("https://jsonplaceholder.typicode.com/posts",{
//     userId: 1, title : "Mustafa"
// }).then((result) => {
//    console.log(result); 
// }).catch((err) => {
//     console.log(err);
// });
