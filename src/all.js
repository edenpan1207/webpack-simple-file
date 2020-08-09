// function test() {
//   console.log('test')
// }

// const test = () => {
//   test2();
// }

// const test2 = () => {
//   console.log('test2');
// }

// test();

// export default test;


const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

export function getUsers() {
  return fetch(ENDPOINT)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}