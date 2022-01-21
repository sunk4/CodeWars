/*Task
Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/
function padIt(str, n) {
  let num = 0
  let asterisk = "*"
  while (num < n) {
    num % 2 ? (str += asterisk) : (str = asterisk + str)
    num++
  }
  return str
}
