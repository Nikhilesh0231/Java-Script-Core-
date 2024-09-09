// async function hello(){
//   console.log("Hello, World!");
// }

// function api(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve("success");
//     }, 2000);
//   })
// }

// async function getWeatherData() {
//   await api();
//   await api();
//   await api();
// }

// getWeatherData();

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data = ", dataId);
      resolve("success");
    }, 4000);
  })
}

// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
//   await getData(4);
//   await getData(5);
//   await getData(6);
// }

// getAllData();

(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);
})();