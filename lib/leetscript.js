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
      "a": ["4", "a", "A", "@"],
      "b": ["8", "b", "B"],
      "c": ["c", "C", "(", "[", "<"],
      "d": ["d", "D"],
      "e": ["3", "e", "E"],
      "f": ["f", "F"],
      "g": ["6", "g", "G", "9"],
      "h": ["h", "H", "4"],
      "i": ["i", "I", "!"],
      "j": ["j", "J"],
      "k": ["k", "K"],
      "l": ["1", "l", "L", "|"],
      "m": ["m", "M"],
      "n": ["n", "N"],
      "o": ["0", "o", "O"],
      "p": ["p", "P"],
      "q": ["q", "Q"],
      "r": ["2", "r", "R"],
      "s": ["5", "s", "S", "$"],
      "t": ["7", "t", "T", "+"],
      "u": ["u", "U"],
      "v": ["v", "V"],
      "w": ["w", "W"],
      "x": ["x", "X"],
      "y": ["y", "Y"],
      "z": ["2", "z", "Z"]
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
