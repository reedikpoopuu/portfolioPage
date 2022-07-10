const assert = require('assert');
const fs = require('fs');
let path, str;
describe('appendFileSync', () => {
    it('creates a new file with a string of text', () => {
        // Setup
        path = './message.txt';
        str = 'Hello Node.js';

        /* beforeEach(() => {
            fs.appendFileSync(path, str);
        });

        afterEach(() => {
            fs.unlinkSync(path);
        }); */

        // Exercise: write to file
        fs.appendFileSync(path, str);
        
        // Verify: compare file contents to string
        const contents = fs.readFileSync(path);
        assert.equal(contents.toString(), str);
        
        // Teardown: restore file
        fs.unlinkSync(path);
    });
    
    it('creates a new file with a string of text', () => {
        // Setup
        path = './message.txt';
        str = '';
        
        // Exercise: write to file
        fs.appendFileSync(path, str);
        
        // Verify: compare file contents to string
        const contents = fs.readFileSync(path);
        assert.equal(contents.toString(), str);
        
        // Teardown: restore file
        fs.unlinkSync(path);
    });
});

const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //Setup
      const expected = 'cock-a-doodle-doo!';
      //Exercise
      const result = Rooster.announceDawn();
      //Verify
      assert.equal(result, expected);
      //Teardown
    });
  });

})

/* 
// Implementation code
// Define a rooster
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;

// Test code

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //Setup
      const expectedType = 'string';
      //Exercise
      const resultType = typeof Rooster.timeAtDawn(4);
      //Verify
      assert.strictEqual(resultType, expectedType);
      });
      it('throws an error if passed a number less than 0', () => {
        //Setup
        let lowHour = -1;
        //Exercise
      assert.throws(() => {
        Rooster.timeAtDawn(lowHour)
      }, RangeError);
      });
      it('throws an error if passed a number more than 23', () => {
        //Setup
        let highHour = 25;
        //Exercise
      assert.throws(() => {
        Rooster.timeAtDawn(highHour)
      }, RangeError);
      });
  });
}); */