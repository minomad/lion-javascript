import { pokemon, xhrPromise } from './lib/index.js';


const data = await pokemon.get('https://jsonplaceholder.typicode.com/users');

console.log(data);