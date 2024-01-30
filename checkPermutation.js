function checkPermutation(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let charMap1 = {}
    let charMap2 = {}

    for(let i = 0; i < str1.length; i++){
        let char = str1[i]
        if(!charMap1[char]){
            charMap1[char] = 1
        } else {
            charMap1[char]++
        }
    }
    for(let i = 0; i < str2.length; i++){
        let char = str2[i]
        if(!charMap2[char]){
            charMap2[char] = 1
        } else {
            charMap2[char]++
        }
    }

    for(let key in charMap1){
        if(charMap1[key] !== charMap2[key]){
            return false
        }
    }
    return true
}