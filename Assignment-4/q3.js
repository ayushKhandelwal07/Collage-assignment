const crypto = require('crypto');

function getDataHash(data){
      
      for(let i = 0; ; i++){
            const input = data + i.toString();
            const hash = crypto.createHash('sha256').update(input).digest("hex");
            if(hash.startsWith("00000")){
                  console.log("Input : " , data);
                  console.log("Hash : ",hash);
                  return;
            }
      }
}

getDataHash("Dev => Karan | Rs 100")
getDataHash("Karan => Darsh | Rs 10")