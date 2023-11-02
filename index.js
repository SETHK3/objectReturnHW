//CHALLENGE 1

// const users = [
//   {
//     id: 1,
//     name: "Seth",
//     email: "seth@seth.com",
//     password: "123",
//   },
//   {
//     id: 2,
//     name: "Tyler",
//     email: "tyler@tyler.com",
//     password: "456",
//   },
//   {
//     id: 3,
//     name: "Jake",
//     email: "jake@jake.com",
//     password: "789",
//   },
// ];

// function logUser(userId) {
//   users.forEach((user) => {
//     if (user.id === userId) {
//       console.log(`Hello, ${user.name}, your email is ${user.email}`);
//     }
//   });
// }

// logUser(1);

//CHALLENGE 2

function toPromisify(url) {
  return new Promise((resolve, reject) => {
    const requestObject = new XMLHttpRequest();
    requestObject.open("GET", `https://www.swapi.tech/api/${url}`);
    requestObject.responseType = "json";
    requestObject.send();
    requestObject.onload = () => {
      if (requestObject.status >= 200 && requestObject.status < 300) {
        resolve(requestObject.response);
      } else {
        reject(new Error(`Request failed with status ${requestObject.status}`));
      }
    };
  });
}

function getSwapi() {
  const dataPoint = prompt("Enter a specific data point (e.g. starships/1): ");

  if (!dataPoint) {
    return alert("Please enter a correct data point.");
  }

  toPromisify(dataPoint)
    .then((data) => {
      console.log(data.results);
      return data;
    })
    .then((data) => {
      console.log(data.results[3].name);
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}

getSwapi();
