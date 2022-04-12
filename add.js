               // Question 1
/*

let firstName = prompt("first-name"); 
let lastName= prompt("last-name");
let fullName= firstName + lastName;
console.log(fullName);
alert("Welcome "+"  "+ fullName);

*/
               // Question 2
/*
var text =prompt("Your fravite phone plz? ");
var _lenth =text.length;

    document.write("My fravite phone is :  " +text +"<br>");
    document.write("length of a string : "+ _lenth);

    */

               // Question 3
/*
               let text = "Pakistani";
              document.write("String : " + text +"<br>")
               var result=text.indexOf("n");

               document.write("IndexOf 'n' is : " +result);
*/


               // Question 4
  /*

  var texxt ="Hello World";
  document.write("string :"+texxt +"<br>");
  var _result= texxt.lastIndexOf("l");
  document.write("Last IndexOf 'l :  "  + _result);

*/  
               // Question 5
/*
    var first ="pakistani";
    document.write("String : "+ first +"<br>");
    var _index =first.charAt("3");
    document.write(_index);
*/

               // Question 6
       /* 
        var firstName = prompt("first-name"); 
        var lastName= prompt("last-name");
        var answer =firstName .concat(lastName);
        document.write("using concat method :  " +answer);
         */      

               // Question 7
/*
    var city="Hyderabad";
    document.write("city :"+city);
    var _replace=city.replace("Hyder","Islam"+"<br>");
    document.write("after replace : "+_replace);
*/

              // Question 9

/*
 var value=472;
var sting =value.toString();
document.write(sting);
*/

               // Question 10
/*
  var user =prompt("value plz");
  document.write("User input : "+user+"<br>");
  var sse =user.toUpperCase();
  document.write("Upper case : "+sse);
*/

               // Question 11
/*
               var digt="javascript";
               document.write("user input : "+digt+"<br>");
               var digt2=digt.charAt(0).toUpperCase() +digt.slice(1);
               document.write("Title case : "+digt2);
  */
               // Question 12
  /*
 var num = 35.36;
 document.write("Number : " +num +"<br>");
 var num2 = num.toString().replace(".", "");
 document.write("Result : " +num2);
 */   
               // Question 14
/*
    var A=["cake","apple pie","cookie","chips","patties"]
    var resurch =prompt("Welcome to ABC Bakery.what do you want to order\n sir/mam? ");
  
      resurch.charAt(A);
    var index = A.indexOf();
    if(A===resurch){
      document.write(resurch+"is available at Index :" +index +"in our backery")

    }
      else{
      document.write(resurch+"is not available in our backery")

    }
    */
              // Question 15
    /*
              var passw=prompt("please inter your pasword")
      function CheckPassword(password) 
{ 

var mypass=passw.tolowercase()===password.tolowercase();
if(password.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}
document.write(mypass); */
               // Question 16
           /*
               myText.split(/\n/)
             
               var string = "University of Karachi";
var newstrings = string.split("\n"); 
             
              
            
               document.write(myText);
*/

               // Question 17
        /*       
var country= "pakistan";
document.write("User input : " +country+"<br>")
var chek=country.charAt(7);
document.write("Last character of input"+chek);

*/          

// Question 18

var textt="The quick brown fox jumps over the lazy dog";
var set =textt.match("the");
document.write(set);