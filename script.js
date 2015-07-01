
//===========================================================================//
                        /* ~~~ firstReverse ~~~ */ 
//===========================================================================//

var sentence = ("Write a function firstReverse that takes a single string parameter and returns the string in reverse order.")

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


//===========================================================================//
                        /* ~~~ swapCase ~~~ */ 
//===========================================================================//

