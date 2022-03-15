const M = 'CRYPTOGRAPHYOSA';
const key = [3, 1, 4, 2];

function macierz_num_code(message, key){
    const codingArray = [];
    
    for (let i = 0; i < key.length; i++) {
        codingArray[i] = []
    }
    let deep = (message.length/key.length);

    for (let j = 0; j < deep; j++) {
        for (let i = 0; i < key.length; i++) {
            const charToSave = message[i+(4*j)]
            if(charToSave != undefined){
              codingArray[i][j] = charToSave;
            }
        }
    }
    let result = ""
    for (let j = 0; j < deep; j++) {
        for (let i = 0; i < key.length; i++) {
            const element = codingArray[key[i]-1][j];
            if(element != undefined){
              result = result+element;
            }
        }
    }
    console.log(result);
    return result;
}

function macierz_num_decode(message, key){
    const codingArray = [];
    
    for (let i = 0; i < key.length; i++) {
        codingArray[i] = []
    }
    let deep = (message.length/key.length);
    for (let j = 0; j < deep; j++) {
        for (let i = 0; i < key.length; i++) {
            const charToSave = message[i+(4*j)]
            if(charToSave != undefined){
              codingArray[i][j] = charToSave;
            }
        }
    }
  
    key.reverse();
    let result = ""
    let k = 0;
    for (let j = 0; j < deep; j++) {
        for (let i = 0; i < key.length-k; i++) {
            let element = codingArray[key[i]-1][j];
            if(element != undefined){
              result = result+element;
            } else {
              while(element == undefined){
                k++;
                element = codingArray[key[i]-1-k][j];
              }
              result = result+element;
            }
        }
    }
    console.log(result);
    return result;
}

macierz_num_decode(macierz_num_code(M,key),key);