/**
 * Asyncronous Javascript with async/await (actually promises under the hood).
 */

async function getCatFacts() {
  const response = await fetch("https://cat-fact.herokuapp.com/facts");
  const data = await response.json();

  return data;
}

getCatFacts().then((res) => console.log(res));

/**
 * Wrapping code in an asynchronous IIFE works if you want to use `await` on the top-level of your module.
 *
 * Not sure how safe it is, but ¯\_(ツ)_/¯
 *
 * Pro-tip: There is currenty a propsal for a top-level `await` thats currently on stage 3 -- https://github.com/tc39/proposal-top-level-await
 */

// (async () => {
//   async function getCatFacts() {
//     const response = await fetch("https://cat-fact.herokuapp.com/facts");

//     const data = await response.json();

//     return data;
//   }

//   const catFacts = await getCatFacts();

//   console.log("Cat Facts:", catFacts);
// })();

/**
 * Asyncronous Javascript with Promise
 */

//   const getCatFacts = new Promise((resolve, reject) => {
//     fetch("https://cat-fact.herokuapp.com/facts")
//       .then(response => {
//         const data = response.json();
//         resolve(data);
//       })
//       .catch(err => {
//         reject(console.error(err))
//       });
//   });

// getCatFacts.then(res => console.log(res));
