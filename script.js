
//===========================================================================//
                        /* ~~~ firstReverse ~~~ */ 
//===========================================================================//

var revSentence = ("Write a function firstReverse that takes a single string parameter and returns the string in reverse order.")

function firstReverse(string) {

    // log out the string in normal order for comparison
    console.log(string);

    // turn string into array
    var stringArr = string.split('');

    //set left and right vars
    var left;
    var right;


    // reverse in place:

        // loop over array from both sides
        // loop stops when the left var is greater than the right var (which means we are in the middle of the array and have already swapped all of the elements)
    for (var left = 0 , right = ( stringArr.length - 1 ); left < right; left++, right--) {
        
        // Set the swap
        var temp = stringArr[left];
        stringArr[left] = stringArr[right];
        stringArr[right] = temp
    };

    // Join the stringArr back into a string
    return stringArr.join('');
}

// -> Victory

//===========================================================================//
                        /* ~~~ swapCase ~~~ */ 
//===========================================================================//

var swapSentence = "Write a function swapCase that takes a single string parameter and swaps the case of each character"

function swapCase(string) {

    // log original string for comparison
    console.log(string);

    // turn string into an array
    var stringArr = string.split('');

    // loop over array
    for (var i = 0; i < stringArr.length; i++) {

        // if the letter is equal to the capital letter -> downcase
        if ( stringArr[i] === stringArr[i].toUpperCase() ) {

            stringArr[i] = stringArr[i].toLowerCase();

        // if the letter is equal to the lowercase letter -> upcase
        } else if ( stringArr[i] === stringArr[i].toLowerCase() ) {

            stringArr[i] = stringArr[i].toUpperCase();
        }
    }

    return stringArr.join('');
}

// -> Victory


//===========================================================================//
                        /* ~~~ Bonus ~~~ */ 
//===========================================================================//

function letterCounter(string) {

    // Make an array out of the string
    var wordArr = string.toLowerCase().split(' ');  

    // array to contain the object we create for each word
    var countArr = [];

    // loop thru each word in array
    for (var i = 0; i < wordArr.length; i++) {

        // reference the word
        var word = wordArr[i];

        // create new object for the word
        var charCount = {};

        // put the word into the object to reference which word we are looking at
        charCount['thisWord'] = word;

        // Iterate through the letters of the word
        for (var j = 0; j < word.length; j ++) {

            // reference the letter
            var character = word[j];

            // If the letter has already been added to the object
            if (charCount[character] === undefined) {

                charCount[character] = 1;

            // else we create a new property for the letter
            } else {

                charCount[character] ++;
            }

        // console.log('------ inner Loop -----');
        }

        countArr.push(charCount)
        // console.log('------ outer Loop -----');
    }

    return countArr;
}


//This Function takes an array of objects
function mostRepeat(string) {

    // create an array of the words in the string
    var array = letterCounter(string);

    // set current most repeat to 1
    var most = 1;

    // initialize variable to contain the word that has the most repeated letters
    var firstWithMost;

    // loop through array objects
    for (var i = 0; i < array.length; i++) {

        // set reference to current word object
        var word = array[i];

        // loop through the keys in each object
        for (var key in word) {

            // if the repetition is more than the value held by 'most', replace most value and set firstWithMost as the word in question
            if ( word[key] > most ) {

                most = word[key];
                firstWithMost = word.thisWord;
            }
        }
    }

    // if there is no repetition, return -1
    if ( most === 1 ) {

        return -1;

    // if there is repetition we return the wordname referenced by firstWithMost
    } else {

        return firstWithMost;
    }
}

