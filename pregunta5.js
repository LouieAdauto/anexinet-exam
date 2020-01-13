//Return all the permutations of a string 
const permut = (word) => {
    if (word.length < 2) return word
    let words = []
    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i];      
      if (word.indexOf(currentLetter) != i)continue       
        let notrepeatedword = word.slice(0, i) + word.slice(i + 1, word.length)
            for (let secondMix of permut(notrepeatedword)){
                words.push(currentLetter + secondMix)
            }
    }
    return words;
  }
  const word = "Hey"
  const permutationsArr= permut(word)
  console.log(permutationsArr)
