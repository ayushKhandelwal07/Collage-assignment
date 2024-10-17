// 2: What if I ask you that the input string should start with devadnani26 ? How would the code change?

const crypto = require('crypto');

function getNameHash(name){
      
      for(let i = 0; ;i++){
            let input = name + i.toString();
            let hash = crypto.createHash('sha256').update(input).digest('hex');
            if(hash.startsWith('00000')){
                  console.log('Input:', input);
                  console.log('Hash:', hash);
                  return;
            }
      }
}

getNameHash("ayush")