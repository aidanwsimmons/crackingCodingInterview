//checks if string contains all unique characters
//0(n) time

function isUnique(str){
    let charMap = {}
    for(let i = 0; i < str.length; i++){
        let char = str[i]
          if(!charMap[char]){
            charMap[char] = 1
          }
          else{
            return false
          }
    }
    return true
}

//same as above but with no additional data structure
//O(n^2) time

function isUniqueNoNewStructure(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}