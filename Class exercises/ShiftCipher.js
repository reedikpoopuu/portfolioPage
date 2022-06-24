document.getElementById("encrypt-button").addEventListener('click', function() {
  let word = document.getElementById("encrypt-input").value.toLowerCase();
  let shift = Number(document.getElementById("encrypt-shift").value);
  let result = '';
  for(let i = 0; i < word.length; i++) {
    let j = word.charCodeAt(i);
    if(j < 97 || j > 122) {
      result += word[i];
    } else if(j + shift > 122) {
      result += String.fromCharCode(word.charCodeAt(i) -26 + shift);
    } else {
      result += String.fromCharCode(word.charCodeAt(i) + shift);
    }
  }
  document.getElementById("encrypt-result").innerHTML = result.toUpperCase(); 
});

document.getElementById("decrypt-button").addEventListener('click', function() {
  let word = document.getElementById("decrypt-input").value.toLowerCase();
  let shift = Number(document.getElementById("decrypt-shift").value);
  let result1 = '';
  for(let i = 0; i < word.length; i++) {
    let j = word.charCodeAt(i);
    if(j < 97 || j > 122) {
      result1 += word[i];
    } else if(j - shift < 97) {
    result1 += String.fromCharCode(word.charCodeAt(i) +26 - shift);
    } else {
    result1 += String.fromCharCode(word.charCodeAt(i) - shift);
    }
  }
  document.getElementById("decrypt-result").innerHTML = result1.toLowerCase(); 
});

/*
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
  }; */