
function vowel(){
    var char = document.getElementById("char").value;   // Input From The User
    
    if
    (char === 'a' ||  char === 'e' || char === 'i' || char === 'o' || char === 'u' 
    || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')
    {
      
        document.getElementById("output").innerHTML= char +" :" + " Is Vowel " + "\n" 
        + char +" :" + " Is Vowel " + "\n"
        + char +" :" + " Is Vowel " + "\n"
        + char +" :" + " Is Vowel " + "\n"
        + char +" :" + " Is Vowel " + "\n"

    
    }
    else if  (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z' )
    {
      document.getElementById("output").innerHTML= 
      char +" :" + " Is Consonent " + "\n" 
      + char +" :" + " Is Consonent " + "\n"
      + char +" :" + " Is Consonent " + "\n"
      + char +" :" + " Is Consonent " + "\n"
      + char +" :" + " Is Consonent " + "\n"+
        char +" :" + " Is Consonent " + "\n" 
        + char +" :" + " Is Consonent " + "\n"
        + char +" :" + " Is Consonent " + "\n"
        + char +" :" + " Is Consonent " + "\n"
        + char +" :" + " Is Consonent " + "\n"
    }
    else
    {
      document.getElementById("output").innerHTML= char +" :" + " IS INVALID CHARACTER "
    }   
  }
  

