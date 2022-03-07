class Request {
  get(url) {
    //
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  post(url, data) {  //veri ekleme
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(url,data){  //veriyi değiştirme
      return new Promise((resolve,reject) => {
          fetch(url,{
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
      })
  }
  delete(url) {
      return new Promise((resolve,reject) => {
          fetch(url,{
              method:"DELETE"
          }).then(response => resolve("veri başarıyla silindi"))
          .catch(err => console.log(err));
      })
  }
}
const request = new Request();



request.post("https://jsonplaceholder.typicode.com/albums", {
  userId: 1,
  title: "Mustafa"
}).then(newAlbum => console.log(newAlbum)).catch(err => console.log(err))

request.put("https://jsonplaceholder.typicode.com/albums/1",{
    userId:1,
    title:"altaş"
}).then(album => console.log(album)).catch(err => console.log(err));

request
  .get("https://www.nosyapi.com/apiv2/economy/getCurrencyList")
  .then((albums) => {
    console.log(albums);
  })
  .catch((err) => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1").then(mesaj => console.log(mesaj)).catch(err => console.log(err));