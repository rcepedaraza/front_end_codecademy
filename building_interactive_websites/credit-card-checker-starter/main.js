// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

function validateCred (cardNumber) {
    // Return true when an array contains digits of a valid credit card number
    // and false when it is invalid.
    // Save check digit.
    // console.log(cardNumber.length);
    const checkDigit = cardNumber[cardNumber.length - 1]
    var checkArray = [];
    var cardDigit = 0;
    checkArray.push(checkDigit)
    for (let i = cardNumber.length - 2; i >= 0; i--) {
        // console.log(i, cardNumber[i]);
        if (cardNumber.length % 2 === 0) {
            if (i % 2 === 0) {
                cardDigit = cardNumber[i] * 2;
                if (cardDigit > 9) {
                    checkArray.push(cardDigit - 9);
                } else {
                    checkArray.push(cardDigit)
                }
            } else {
                checkArray.push(cardNumber[i]);
            }
        } else {
            if (i % 2 != 0) {
                cardDigit = cardNumber[i] * 2;
                if (cardDigit > 9) {
                    checkArray.push(cardDigit - 9);
                } else {
                    checkArray.push(cardDigit)
                }
            } else {
                checkArray.push(cardNumber[i]);
            }
        }
        
    }
    // console.log(checkArray);
    const sum = checkArray.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue;
        }
    )
    // console.log(sum);
    if (sum % 10 === 0) {
        // console.log(`The credit card number:\n${cardNumber.join('')} is valid!`);
        return true;
    } else {
        // console.log(`The credit card number:\n${cardNumber.join('')} is invalid!`);
        return false;
    }
}

const findInvalidCards = (creditCard) => {
    // Check through the nested array for which numbers are invalid.
    const invalidCards = creditCard.filter(card => !validateCred(card));
    return invalidCards;

}

const idInvalidCardCompanies  = (creditCards) => {
    // Identify credit card companies that have possibly issued these faulty numbers.
    var cardCompanies = [];
    // const validCompanies = [3, 4, 5, 6];
    for (let i = 0; i < creditCards.length; i++) {
        switch (creditCards[i][0]) {
            case 3:
                if (!cardCompanies.includes('Amex (American Express)')) {
                    cardCompanies.push('Amex (American Express)');
                }
                break;
            case 4:
                if (!cardCompanies.includes('Visa')) {
                    cardCompanies.push('Visa');
                }
                break;
            case 5: 
                if (!cardCompanies.includes('Mastercard')) {
                    cardCompanies.push('Mastercard');
                }
                break;
            case 6: 
                if (!cardCompanies.includes('Discover')) {
                    cardCompanies.push('Discover');
                }
                break;
            default:
                console.log('Company not found');
                break;
        }
        }
        // console.log(cardCompanies);
        return cardCompanies;
    }



// console.log(validateCred([4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]));
// console.log(validateCred(invalid1));
// console.log(validateCred(invalid2));
// console.log(validateCred(invalid3));
// console.log(validateCred(invalid4));
// console.log(validateCred(invalid5));

const invalidBatch = findInvalidCards(batch);
// for (let i = 0; i < invalidBatch.length; i++) {
//     console.log(invalidBatch[i]);
// }
const invalidCompanies = idInvalidCardCompanies(invalidBatch);
// console.log(invalidCompanies);

// Test functions:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false

console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

console.log(findInvalidCards(batch)); // Test what the mystery numbers are

console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards