async function loadPrice(){

try{

let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");

let data = await res.json();

let price = data.bitcoin.usd;

document.getElementById("price").innerHTML =
"BTC Price : $" + price;

}

catch(error){

document.getElementById("price").innerHTML =
"Error loading BTC price";

}

}

setInterval(loadPrice,3000);

loadPrice();
