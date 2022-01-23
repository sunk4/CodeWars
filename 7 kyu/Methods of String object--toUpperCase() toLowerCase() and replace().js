/*Task
Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
A small hint: The first conversion of the entire string will make the code easier
*/

function alienLanguage(str) {
  let finalSolution = []
  let capitalLet = str.toUpperCase().split(" ")
  for (let i = 0; i < capitalLet.length; i++) {
    let result =
      capitalLet[i].slice(0, -1) + capitalLet[i].slice(-1).toLowerCase()
    finalSolution.push(result)
  }
  let a = finalSolution.join(" ")
  return a
}
