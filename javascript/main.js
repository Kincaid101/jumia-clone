var PhoneOne = {
    phone: "images/iphone11.jpg",
    name:"iphone 11",
    price: "Now " +98499,
    originalPrice: "Was "+ 102459,
    itemId:"I001"
}
document.getElementById("Iphone11").src=PhoneOne.phone
document.getElementById("name1").innerText = PhoneOne.name
document.getElementById("price1").innerText = PhoneOne.price
document.getElementById("original1").innerText = PhoneOne.originalPrice

var PhoneTwo = {
    phone: "images/iPhone12.jpg",
    name:"iphone 12",
    price: "Now " +10000,
    originalPrice: "Was "+ 100000,
    itemId:"1002"
}
document.getElementById("Iphone12").src=PhoneTwo.phone
document.getElementById("name2").innerText = PhoneTwo.name
document.getElementById("price2").innerText = PhoneTwo.price
document.getElementById("original2").innerText = PhoneTwo.originalPrice

var phoneThree = {
    phone:"images/iphone13.jpg",
    name:"iphone 13",
    price: "Now "+ 97499,
    originalPrice: "Was " +102249,
    itemId:"1003"
}
document.getElementById("Iphone13").src = phoneThree.phone
document.getElementById("name3").innerText = phoneThree.name
document.getElementById("price3").innerText = phoneThree.price
document.getElementById("original3").innerText = phoneThree.originalPrice

var phoneFour = {
    phone:"images/iphone14.jpg",
    name:"iphone 14",
    price: "Now " + 19999,
    originalPrice: "Was " + 200000,
    itemId:"1004"

}
document.getElementById("Iphone14").src = phoneFour.phone
document.getElementById("name4").innerText = phoneFour.name
document.getElementById("price4").innerText = phoneFour.price
document.getElementById("original4").innerText = phoneFour.originalPrice

document.getElementById("phone1").onclick = function(){
    window.location.href = "select.html" + "?" + PhoneOne.itemId
}
document.getElementById("phone2").onclick = function() {
    window.location.href = "select.html" + "?" + PhoneTwo.itemId
}

document.getElementById("phone3").onclick = function() {
    window.location.href = "select.html" + "?" +phoneThree.itemId
}

document.getElementById("phone4").onclick = function() {
    window.location.href = "select.html" + "?" +phoneFour.itemId
}