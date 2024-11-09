function countWordOccurrences(sentence:string,word:string):number{
   return  sentence.toLowerCase().split(word.toLowerCase()).length - 1
}
