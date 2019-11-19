let quantity = parseInt(document.getElementById("quantity").innerHTML);
let incBtn = document.getElementById("incrmnt");
let dcrBtn = document.getElementById("dcrmnt");
let calcBtn = document.getElementById("Calculate");
let unitPrice = parseFloat(document.getElementById("unitPrice").innerHTML);
let extndedPrice = parseInt(document.getElementById("extndpr").innerHTML);
let newExtndPrce ;

function increment()
{
quantity+= 1;
document.getElementById("quantity").innerHTML = quantity;

}

function decrement()
{

if(quantity<0){
    alert("Come On Dude");
    // document.getElementById("quantity").innerHTML = 0;
}

else
{
document.getElementById("quantity").innerHTML = quantity;
quantity--;
}
}

function extndPrice() {
    
    newExtndPrce = unitPrice * extndedPrice;
    console.log(extndedPrice);
}


incBtn.addEventListener("click",increment);

dcrBtn.addEventListener("click",decrement);