/********VARIABLE DECLARATION *************/

let quantity;
let incBtn = document.getElementById("incrmnt");
let dcrBtn = document.getElementById("dcrmnt");
let incBtnFrShrts = document.getElementById("incrmntFrShrts");
let dcrBtnFrShrts = document.getElementById("dcrmntFrShrts");
let calcBtn = document.getElementById("Calculate");
let unitPrice;
let extndedPrice;

//***********FUNCTION DECLARATION *********/

function increment() {
    quantity = parseInt(document.getElementById("quantity").innerHTML);
    quantity += 1;
    document.getElementById("quantity").innerHTML = quantity;
    
    unitPrice = parseFloat(document.getElementById("unitPrice").innerHTML);
    extndedPrice = unitPrice * quantity;
    document.getElementById("extndpr").innerHTML = extndedPrice;
}

function decrement() {

    quantity = parseInt(document.getElementById("quantity").innerHTML);
    quantity--;

    if (quantity < 0) {
        alert("Come On Dude");
        // document.getElementById("quantity").innerHTML = 0;
    }

    else {
        document.getElementById("quantity").innerHTML = quantity;

        unitPrice = parseFloat(document.getElementById("unitPrice").innerHTML);
        extndedPrice = unitPrice * quantity;
        document.getElementById("extndpr").innerHTML = extndedPrice
    }
}

function incrementForShrts() {

    quantity = parseInt(document.getElementById("quantityOfShrts").innerHTML);
    quantity += 1;
    document.getElementById("quantityOfShrts").innerHTML = quantity;
    
    unitPrice = parseFloat(document.getElementById("unitPriceForShrts").innerHTML);
    extndedPrice = unitPrice * quantity;
    document.getElementById("extndprForShrts").innerHTML = extndedPrice;
}

function decrementForShrts() {

    quantity = parseInt(document.getElementById("quantityOfShrts").innerHTML);
    quantity--;

    if (quantity < 0) {
        alert("Come On Dude");
    }

    else {
        document.getElementById("quantityOfShrts").innerHTML = quantity;

        unitPrice = parseFloat(document.getElementById("unitPriceForShrts").innerHTML)
        extndedPrice = unitPrice * quantity;
        document.getElementById("extndprForShrts").innerHTML = extndedPrice
    }
}

//****************EXECUTION *********************/
incBtn.addEventListener("click", increment);

dcrBtn.addEventListener("click", decrement);

incBtnFrShrts.addEventListener("click", incrementForShrts);

dcrBtnFrShrts.addEventListener("click",decrementForShrts);
