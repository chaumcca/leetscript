'use strict';
// Array random helper
const _arrayRandom = (arr, maxOffset, minOffset) => {
  let max = maxOffset || arr.length
 	let min = minOffset || 0
	let random = Math.floor( (Math.random() * (max - min)) + min );
  return arr[random];
}

class l3375c21p7 {
  constructor(simple = false) {
    this.simple = simple
    this.CHARMAP = {
      "a": ["a", "A", "4", "@"],
      "b": ["b", "B", "8"],
      "c": ["c", "C", "(", "[", "<"],
      "d": ["d", "D"],
      "e": ["e", "E", "3"],
      "f": ["f", "F"],
      "g": ["g", "G", "6", "9"],
      "h": ["h", "H", "4"],
      "i": ["i", "I", "!"],
      "j": ["j", "J"],
      "k": ["k", "K"],
      "l": ["l", "L", "1", "|"],
      "m": ["m", "M"],
      "n": ["n", "N"],
      "o": ["o", "O", "0"],
      "p": ["p", "P"],
      "q": ["q", "Q"],
      "r": ["r", "R"],
      "s": ["s", "S", "5", "$"],
      "t": ["t", "T", "7", "+"],
      "u": ["u", "U"],
      "v": ["v", "V"],
      "w": ["w", "W"],
      "x": ["x", "X"],
      "y": ["y","Y"],
      "z": ["z", "Z", "2"]
    }
  }

  encode (str) {
	if(!str) {
		return false
	}
  // Return everything that is not a string
  if(typeof str !== 'string') {
    return str;
  }
  // Defines a new empty string
  let encString = '';
  // Goes through every character in the string
  str.split('').forEach( letter => {
    let key = letter.toLowerCase()
    let hasLetter = this.CHARMAP[key]
    if(hasLetter) {
      if(this.simple) {
        letter = this.CHARMAP[key][0]
      } else {
        // Get a random letter in LEET
        letter = _arrayRandom(this.CHARMAP[key])
      }
    }
    // Add it to the string
    encString += letter
  });

  return encString
  }

	encodePromise (str) {
    return new Promise( (resolve, reject) => {
      let new_str = this.encode(str);
      if(new_str) {
        resolve(new_str)
      } else {
        reject('Unable to convert string! Got: ' + str)
      }
    })
  }

}

module.exports = l3375c21p7
