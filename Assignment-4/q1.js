const crypto = require('crypto');

// 1:   What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

function getHash() {

      for(let i = 0; i < 1000000; i++) {
            let input = i.toString();
      let hash = crypto.createHash('sha256').update(input).digest('hex');
      if (hash.startsWith('00000')) {
            console.log('Input:', input);
            console.log('Hash:', hash);
            return hash;
      } 
      }    
}

getHash();