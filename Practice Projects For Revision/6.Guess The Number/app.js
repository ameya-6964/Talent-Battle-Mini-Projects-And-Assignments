var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;
document.getElementById("submitguess").onclick = function(){     
var x = document.getElementById("guessField").value;
if(x == y)
{    
   alert(" YOU GUESS IS RIGHT "
            + " NUMBER OF GUESS REQUIRED = " + guess) ;
}
else if(x > y) // If Guessed Number Is Bigger
{    
   guess++;
   alert("You Have Guessed Larger Number!! TRY A SMALLER NUMBER");
}
else // If Guessed Number Is Smaller
{
   guess++;
   alert("You Have Guessed Smaller Number!! TRY A GREATER NUMBER")
}
}