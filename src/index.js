// PLEASE DON'T change function name
module.exports = function makeExchange(currency) 
{
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

var ob={}, val;
var coins=[50, 25, 10, 5, 1];
var nom=["H","Q","D","N","P"];
console.log (currency);
if (currency>=0)
 {
  if (currency<=10000)
   {
     for (i=0; i<5; i++)
      {

      val=Math.floor(currency/coins[i]);
      if (val>0)
        {
          ob[nom[i]]=val;
          currency=currency % coins[i];
         }
      
       }


 
    }
  else
   {
    ob={error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
 }
//console.log (ob);
return ob;
}
