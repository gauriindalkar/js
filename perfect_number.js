var user = require("readlinesync")
var n = user.questionInt("enter number")
var i = 1
var s = 0
while (i<=n){
    if (n%i==0){
        s++
    }
    i++
}
if (n==s){
    console.log(n,"is perfect number")
}else{
    console.log(n,"is not perfect number")
}
