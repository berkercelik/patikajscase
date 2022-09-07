function oddishOrEvenish(number)
{
var digit=0;
var sumValue=0;
digit=parseInt(number.toString().length);
for(i=0;i<=digit;i++){
sumValue=(number%10)+sumValue;
number=Math.floor(number/10);
}
if (sumValue%2==0){
return "Even";
}
else return "Odd";
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
