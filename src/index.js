module.exports = function toReadable (number) {
  const Numb0_19  = {'0':'zero', '1':'one', '2':'two', '3':'three', '4':'four', '5':'five', '6':'six', '7':'seven', '8':'eight', '9':'nine', '10':'ten', '11':'eleven', '12':'twelve', '13':'thirteen', '14':'fourteen', '15':'fifteen', '16':'sixteen', '17':'seventeen', '18':'eighteen', '19':'nineteen'};
const Numb20_99 = {'2':'twenty', '3':'thirty', '4':'forty', '5':'fifty', '6':'sixty', '7':'seventy', '8':'eighty', '9':'ninety'};
let result="";
let numb = number;
if (numb%100===0 && numb>0){
	result = Numb0_19[numb/100] + ' hundred'
}
else{
let thousand = Math.trunc(numb/1000);
thousand>0 ? result+= Numb0_19[thousand.toString()] + ' thousand ' : result+=''; 
numb = number%1000;
let hundred = Math.trunc(numb/100);
hundred>0 ? result+= Numb0_19[hundred.toString()] + ' hundred ' : result+='';
numb = number%100;
if(numb<20){
result+= Numb0_19[numb.toString()];
}
else{
let tens = Math.trunc(numb/10);
tens>0 ? result+=Numb20_99[tens.toString()]  : result+='';
numb = number%10;
numb>0? result+=' ' + Numb0_19[numb.toString()]  : result+=''
}
}
return result;
}
