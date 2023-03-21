function CheckLengthWordVowels(sentence) {
   var lengthCounter=0;
    var wordCounter=1;
    var vowelCounter=0;

   for(var i=0; i<sentence.length; i++) {
    lengthCounter ++;

   if (sentence[i]===" "){
     wordCounter ++;
   }
    if ((sentence[i]==="a") || (sentence[i]==="e") || (sentence[i]==="i") || (sentence[i]==="o") || (sentence[i]==="u") || (sentence[i]==="y") || (sentence[i]==="A") || (sentence[i]==="E") || (sentence[i]==="I") || (sentence[i]==="O") || (sentence[i]==="U") || (sentence[i]==="Y")) {
    vowelCounter ++;
   }
}
 return {length: lengthCounter, word: wordCounter, vowel: vowelCounter};
}