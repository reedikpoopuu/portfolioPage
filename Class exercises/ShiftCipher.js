class ShiftCipher {
    constructor(shift) {
      this.shift = shift;
    }
  
    encrypt(word) {
      word = word.toLowerCase();
      let result = '';
      for(let i = 0; i < word.length; i++) {
        let j = word.charCodeAt(i);
        if(j < 97 || j > 122) {
          result += word[i];
        } else if(j + this.shift > 122) {
        result += String.fromCharCode(word.charCodeAt(i) -26 + this.shift);
        } else {
        result += String.fromCharCode(word.charCodeAt(i) + this.shift);
        }
      }
      console.log(result.toUpperCase());
      return result.toUpperCase()
    }
  
    decrypt(word) {
      word = word.toLowerCase();
      let result = '';
      for(let i = 0; i < word.length; i++) {
        let j = word.charCodeAt(i);
        if(j < 97 || j > 122) {
          result += word[i];
        } else if(j - this.shift < 97) {
        result += String.fromCharCode(word.charCodeAt(i) +26 - this.shift);
        } else {
        result += String.fromCharCode(word.charCodeAt(i) - this.shift);
        }
      }
      console.log(result);
      return result
    }
  };

  const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!');
cipher.decrypt('K <3 OA RWRRA'); 

const cipher2 = new ShiftCipher(25);
cipher2.encrypt('abcdefg');