var PhoneOne = {
    phone: "images/iphone11.jpg",
    name:"iphone 11",
    price:98499,
    originalPrice:102459,
    itemId:"1001"
}

var PhoneTwo = {
    phone: "images/iphone12.jpg",
    name:"iphone 12",
    price:10000,
    originalPrice:100000,
    itemId:"1002",
}

var phoneThree = {
    phone:"images/iphone13.jpg",
    name:"iphone 13",
    price:97499,
    originalPrice:102249,
    itemId:"1003"
}

var phoneFour = {
    phone:"images/iphone14.jpg",
    name:"iphone 14",
    price: "NOW" + 19999,
    originalPrice: "WAS" + 200000,
    itemId:"1004"

}

var selectId= decodeURIComponent(window.location.search)
var selectItem=selectId.substring(1)
console.log(selectItem)
if(selectItem==PhoneOne.itemId) {
    document.getElementById("Iphone11").src=PhoneOne.phone
    document.getElementById("name1").innerText=PhoneOne.name
    document.getElementById("price1").innerText=PhoneOne.price
    document.getElementById("original1").innerText=PhoneOne.originalPrice
    var cost = PhoneOne.price
    qty(cost)
}

else if (selectItem==PhoneTwo.itemId){
    document.getElementById("Iphone11").src=PhoneTwo.phone
    document.getElementById("name1").innerText=PhoneTwo.name
    document.getElementById("price1").innerText=PhoneTwo.price
    document.getElementById("original1").innerText=PhoneTwo.originalPrice
    var cost = PhoneTwo.price
    qty(cost)
}
else if (selectItem==phoneThree.itemId){
    document.getElementById("Iphone11").src=phoneThree.phone
    document.getElementById("name1").innerText=phoneThree.name
    document.getElementById("price1").innerText=phoneThree.price
    document.getElementById("original1").innerText=phoneThree.originalPrice
    var cost = phoneThree.price
    qty(cost)
}
else if (selectItem==phoneFour.itemId){
    document.getElementById("Iphone11").src=phoneFour.phone
    document.getElementById("name1").innerText=phoneFour.name
    document.getElementById("price1").innerText=phoneFour.price
    document.getElementById("original1").innerText=phoneFour.originalPrice
    var cost = phoneFour.price
    qty(cost)
}

function qty(cost){
    document.getElementById("quantity").onkeyup = function(){
        let quantity = document.getElementById("quantity").value
        let amount = cost
        if(quantity>1){
            total=quantity*amount
            document.getElementById("total").innerText = total
            UserLocation(total)
        }
        else if(quantity==1){
            total=amount
            document.getElementById("total").innerText = total
            UserLocation(total)
        }
    }
}

function UserLocation(total) {
    document.getElementById("location").onchange = function() {
        let delivery = document.getElementById("location").value
        let karen = 600
        let thika = 1000
        let ngala = 1200
        if (delivery =="karen") {
            document.getElementById("total").innerText = karen + total
        }
        else if (delivery =="thika") {
            document.getElementById("total").innerText = thika + total
        }
        else if (delivery =="ngala") {
            document.getElementById("total").innerText = ngala + total
        }
        else if (delivery ==" ") {
            document.getElementById("total").innerText = total
        }
    }
}
