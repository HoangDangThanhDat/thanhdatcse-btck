/* cach 1*/
function allLongestStrings(inputArray) {
    var inputArray = [];
    
    var longestlength = inputArray[0].length;
    for(var i = 1; i < inputArray.length; i++){
        if(longestlength < inputArray[i].length){
            longestlength = inputArray[i]+1;
        }

    }
    inputArray = inputArray.filter((element)=>{
        return element.length == longestlength;

    });

    return longestlength;
}

/*cach 2*/
function allLongestStrings_2(inputArray) {
    let arr = inputArray;
    let longest = 0;
    let longestArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= longest) {
            longest = arr[i].length;
        }
    }
    for(let j = 0; j < arr.length; j++) {
        if(arr[j].length === longest) {
            longestArr.push(arr[j]);
        }
    }

    return longestArr;
}

allLongestStrings();

