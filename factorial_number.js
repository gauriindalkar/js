var i=1
var a=require("readline-sync")
var num=a.questionInt("enter number") 
var sum=1
while (num>=i){
    sum=sum*num
    num--}
console.log(sum)
