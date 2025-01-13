import url from 'url';

const urlString  = 'https://www.google.com/search?q=hello+world';

//URL Obj
const urlObj = new URL(urlString);

console.log(urlObj);

//if// console.log(urlObj.pathname);
//then// /search

//format()
console.log(url.format(urlObj));

//import.meta.url - file URL
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q')); //terminal: (just value) 'hello world'
params.append('limit', '5'); //add on (nt limit). Mida see limit 5 näitab?
params.delete('limit'); //now limit is gone
console.log(params); //terminal: (obj) 'q' => (value) 'hello world'
