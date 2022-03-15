const M = 'CRYPTOGRAPHY';
const n = 3;

function rail_fence_code(message, n){
    const codingArray = [];
    
    for (let i = 0; i < message.length; i++) {
        codingArray[i] = []
    }
  
    let if_up = true;
    for (let i = 0; i < message.length;) {
        for (let j = 0; j < n; i++) {
            if(j == n-1) if_up = false;
            else if(j == 0) if_up = true;
            if(i >= message.length) break;
            codingArray[i][j] = message[i];
            if(if_up) j++;
            else j--;
        }
    }
  
    let result = ""
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < message.length;i++) {
            const element = codingArray[i][j];
            if(element != undefined){
              result = result+element;
            }

        }
    }
    return result;
}

function rail_fence_decode(message, n){
    const codingArray = [];
    
    for (let i = 0; i < message.length; i++) {
        codingArray[i] = []
    }
  
    let if_up = true;
    for (let i = 0; i < message.length;) {
        for (let j = 0; j < n; i++) {
            if(j == n-1) if_up = false;
            else if(j == 0) if_up = true;
            if(i >= message.length) break;
            codingArray[i][j] = message[i];
            if(if_up) j++;
            else j--;
        }
    }
  
    let result = ""
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < message.length;i++) {
            const element = codingArray[i][j];
            if(element != undefined){
              result = result+element;
            }
        }
    }
    return result;
}

console.log(rail_fence_code(M,n))