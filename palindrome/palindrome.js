var output, input,i,
len,outputArr,a ,b,n
function checkBtn(){
    // console.log("heljl")
    input = document.getElementById("input").value;
    // console.log(input)
    output=document.getElementById("output").innerHTML
    outputArr= output=Array.from(input) 

    //  console.log(output) 
    document.getElementById("output").style.display="block";  
    len = outputArr.length;
     return input
}
//[2,3,4,3,2] output.length-1-i

function checkPalindrome(n){
//  console.log("pallindrom function")
 n= outputArr  
//  console.log(output)
//  console.log(len)
 for (var i = 0; i<=len/2; i++){
    if(outputArr[i]==outputArr[len-1-i]){
        document.getElementById("output").innerHTML = input + " is palindrom"
    //   console.log( input + " is palindrom")
    }
    else{
        document.getElementById("output").innerHTML = input + " is NOT palindrom"
    //    console.log( input + " it is NOT a palindrom")
    }
    return 0
}
}
// output=document.getElementById("output").innerHTML

