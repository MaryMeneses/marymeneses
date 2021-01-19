// document.getElementById("numbers").innerHTML = 5 + 6;

let input = 

function isPalindrome(word) {
    let arr = [];
    for (let i=0; i<word.length; i++) {
        arr.push(word[i])
    }
    
    let arr2String = arr.toString()
    let rev = arr.reverse()
    let rev2String = rev.toString()

    return console.log(arr2String == rev2String) //returns boolean
}