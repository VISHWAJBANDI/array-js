var veggies=["beans","carrot"]
console.log(veggies.length)
// o/p =2

var veggies=["beetroot","radish"]
veggies.push("brinjal");
console.log(veggies)
// o/p=["beetroot","radish","brinjal"]

var veggies=["beetroot","radish","brinjal"]
veggies.pop()
console.log(veggies)
// o/p=['beetroot', 'radish']

var veggies=["beetroot","radish"]
veggies.unshift("onion")
console.log(veggies)
// o/p=['onion', 'beetroot', 'radish']

var veggies=['onion', 'beetroot', 'radish']
veggies.shift();
console.log(veggies)
// o/p=['beetroot', 'radish']

var veggies=["beetroot","radish","onion","brinjal"]
veggies.reverse();
console.log(veggies)
// o/p=['brinjal', 'onion', 'radish', 'beetroot']

var veggies=["beetroot","radish","onion","brinjal","tomato","potato"]
console.log(veggies.indexOf("brinjal"))
// o/p=3

var veggies=["beetroot","radish","onion","brinjal","tomato","potato"]
console.log(veggies.includes("tomato"))
// o/p=true
console.log(veggies.includes("drumstciks"))
// o/p=false

var veggies=["beetroot","radish","onion","brinjal","tomato","potato"]
console.log(veggies.sort())
// o/p=['beetroot', 'brinjal', 'onion', 'potato', 'radish', 'tomato']

var veggies="beetroot"
console.log(veggies.split(""))
// o/p=['b', 'e', 'e', 't', 'r', 'o', 'o', 't']



// task 2

var veggies=["carrot","beetroot","mirchi"]
var add_veggies=veggies.push("capsicum")
var del_veggies=veggies.shift()
console.log(veggies)
// o/p =['beetroot', 'mirchi', 'capsicum']

var veggies=["carrot","beetroot","mirchi"]
var rev_veggies=veggies.reverse()
var join_veggies=rev_veggies.join("")
console.log(join_veggies)
// o/p=mirchibeetrootcarrot

var veggies=["beetroot","radish","onion","brinjal","tomato","potato"]
var sort_veggies=veggies.sort()
var del_veggies=sort_veggies.pop()
console.log(veggies)
// o/p=['beetroot', 'brinjal', 'onion', 'potato', 'radish', ]

var veggies=["carrot","beetroot","mirchi"]
var add_veggies=veggies.unshift("beans","radish")
var del_veggies=veggies.shift()
console.log(veggies.length)
// o/p=4

var veggies1=["carrot","beetroot","mirchi"]
var veggies2=["brinjal","tomato","potato"]
var concat_veggies=veggies1.concat(veggies2)
var sort_veggies=concat_veggies.sort()
var del_veggies=sort_veggies.pop()
console.log(concat_veggies)
// o/p=['beetroot', 'brinjal', 'carrot', 'mirchi', 'potato']

