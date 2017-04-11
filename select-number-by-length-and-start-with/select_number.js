const message = 'Hello World #unitellao 9 3302077363677 3377363677 3382303030 33555 ';
const mobileNumberCollection = message.match(/\d+/g);

const mobileNumberPattern = /^[0,2,5,9].*$/;

console.log(mobileNumberCollection);

function getMobileNumberFromMessage(mobileNumberCollection) {
  let foundNumber = 'Not found';

  _.some(mobileNumberCollection, function(number) {
    if ((number.length >= 8 && number.length <= 11) && (mobileNumberPattern.test(number))) {
      foundNumber = number;
      return;
    }
  });

  return foundNumber;
}

console.log(getMobileNumberFromMessage(mobileNumberCollection));