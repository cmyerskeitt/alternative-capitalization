function capitalize(s){
    let evenCap = []
    let oddCap = []
    for (let i=0; i < s.length; i++){
      if (i % 2 == 0 | i == 0 ){
        let evenUpper = s[i].toUpperCase()
        evenCap.push(evenUpper)
      } else {
        evenCap.push(s[i].toLowerCase())
      }
      if(i % 2 != 0){
        let oddUpper = s[i].toUpperCase()
        oddCap.push(oddUpper)
      }else {
        oddCap.push(s[i].toLowerCase())
      }
    }
    let even = evenCap.join("")
    let odd = oddCap.join("")
    return ([`${even}`, `${odd}`])
};