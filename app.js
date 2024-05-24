


let numbers = [23, 45, 12, 56, 67, 34, 89, 14]

function orderNum() {
    let num = numbers.sort(function (a, b) { return b - a })
    document.getElementById("number").innerHTML = num
}







const animals = ["cat", "lion", "dog", "eliphant"];

function first() {
    let animal = animals.find((value) => value.length > 3)
    document.getElementById("animal").innerHTML = "First word is " + animal
}







let menfi = [5, 29, -3, 42, -1]

function negativ() {
    let negNum = menfi.find((value) => value < 0)
    document.getElementById("fn").innerHTML = "First negative number is " + negNum

}




let cut = [21, 24, 3, 67, 85, 60];



function even() {
    let lastEven=cut.findLast((value)=>value%2==0)
    document.getElementById("even").innerHTML = "Last even number is " + lastEven

}
