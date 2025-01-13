//luua hashes (hash paroolid)
// luua random 16-süsteemis sõne
// enkrüptida ja dekrüptida andmeid

import crypto from 'crypto';

/* //createHash()
const hash = crypto.createHash('sha256');
hash.update('password1234');
console.log(hash.digest('hex')); //this is my hash: b9c950640e1b3740e98acb93e669c65766f6670dd1609ba91ff41052ba48c6f3

//randomBytes()
crypto.randomBytes(16, (err, buf) => { //size:16, callback: error & buffer(=fixed-length sequence of bytes)
    if (err) throw err;
    console.log(buf.toString('hex')); //every time different: 83a36e3f9e2831cf62bd37e34f3fa73e
}); //miks 16 korral tulemus 16x2 ja 8 korral tulem 8x2 pikkune sõne? */

//encrypt and decrypt: ciphertext on segamini lugematu sõne.
// Vaid õige dekrüpteerimisvõtmega adressaat saab šifreeritud teksti teisendada tagasi lihttekstiks
//IV - tagab, et šifereeritud tekst on igakord erinev, kui plain tezti krüpteerida ja dekrüpteerida

//createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Tere, see on salajane kiri, milles on salajane sõnum', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted); //iga kord erinev? ciphertext: 861710e1a1dacad567d9e4c8b5fa801744b7a8f28f7c931d3e7e1be034e0f702

//decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted); //plaintext: Tere, see on salajane kiri, milles on salajane sõnum