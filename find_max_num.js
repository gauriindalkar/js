var numbers=[50,40,23,70,56,12,10,5,7]
var i=0
var num1=numbers[i]
while(i<numbers.length){
    a=numbers[i]
    if (a>num1){
        num1=a
    }
    i++
}
console.log(num1)