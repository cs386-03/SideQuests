function bubbleSort( array ) {
    var outerIndex = 0;
    var innerIndex = 0;
    var temp;

    for (outerIndex = 0; outerIndex < array.length; outerIndex++) {

        for (innerIndex = 0; innerIndex < array.length; innerIndex++) {

            if ( array[innerIndex] > array[innerIndex + 1] ) {

                temp = array[innerIndex];

                array[innerIndex] = array[innerIndex + 1];
                
                array[innerIndex + 1] = temp;

            }
        }
    }

    console.log("Array sorted");

    return array;
}

module.exports = bubbleSort;