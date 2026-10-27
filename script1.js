// let array=[75,82,38,90,65]
// var total=(array[0])+(array[1])+(array[2])+(array[3])+(array[4])
// console.log(total)
// var avg=total/5
// console.log(avg)
// console.log(avg>=50)
// console.log(array[0]>40&&array[1]>40&&array[2]>40&&array[3]>40&&array[4]);
// console.log(avg>=75 &&array[1]>=80)
var array=[15000,22000,18000,25000,12000,28000]
var total=(array[0])+(array[1])+(array[2])+(array[3])+(array[4])+(array[5])
var avg=total/6


console.log(total)
console.log(avg)
console.log(total>100000)
console.log(avg>=20000)
console.log(total>=100000&&avg>=20000)
console.log((array[0])>=20000&&(array[1])>=20000&&(array[2])>=20000&&(array[3])>=20000&&(array[4])>=20000&&(array[5])>=20000)

var cart=[
    {
    name:"gown",
    price:5000,
    quantity:2,
},
{
    name:"salwar",
    price:700,
    quantity:20
},
{
    name:"cordset",
    price:2000,
    quantity:3
}
]
console.log(cart)

cart.push(
    {
        name:"chinkakari",
    price:200,
    quantity:4
    }
)
cart.pop()
console.log(cart[0].price>=500)&&(cart[0].quantity>=0)
var array=
    {
        name:"Shana",
        age:19,
        marks:[75,80,65],
    }

console.log(array)

array.marks.push(90)
console.log(array.marks);
array.marks.pop()
console.log(array.marks)
array.marks.push(85,95)
console.log(array.marks)
array.name
console.log(array.name)
console.log(array.age)
console.log(array.marks)
console.log(array.marks.length)
 console.log(array.marks[0]+array.marks[1]+array.marks[2]+array.marks[3]+array.marks[4])
