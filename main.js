const mapping = {
    "A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
    "E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
    "I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
    "M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
    "Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
    "U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
    "Y" : "-.--", "Z" : "--..",
    
    
    "0" : "-----",
    "1" : ".----", "2" : "..---", "3" : "...--",
    "4" : "....-", "5" : ".....", "6" : "-....",
    "7" : "--...", "8" : "---..", "9" : "----."
}
//Function for toggle functionality
function toggle()
{
const decrypt = "Decrypt Message";
const encrypt = "Encrypt Message";
let curr = document.getElementById("toggle").innerHTML;

if(curr == decrypt)
{
document.getElementById("toggle").innerHTML = encrypt;
document.getElementById("input").value = "";
document.getElementById("output").value = "";
document.getElementById("input").placeholder = "Write your message";
}
else{
document.getElementById("toggle").innerHTML = decrypt;
document.getElementById("input").value = "";
document.getElementById("output").value = "";
document.getElementById("input").placeholder = "Write your message";
document.getElementById("convert").innerHTML = "Convert to Morse Code"
document.getElementById("convert").setAttribute('onclick','text_to_morse()');
}
}



// Function for encrypting the message 
function text_to_morse()			
{	
let input = document.getElementById("input").value;

input = input.toUpperCase();

let arr1 = input.split("");

let arr2 = arr1.map(x => {
if(mapping[x])
{
return mapping[x];
}
else{						
return x;
}
});

let code = arr2.join(" ");

document.getElementById("output").value = code;	
}



