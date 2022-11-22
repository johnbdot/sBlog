const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("luigi.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    getTodos("mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    getTodos("shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

// promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("some data");
//     reject("some error");
//   });
// };
