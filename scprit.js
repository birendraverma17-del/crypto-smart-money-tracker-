<span id="btc-price">Loading...</span>

<script>
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
.then(res => res.json())
.then(data => {
document.getElementById("btc-price").innerText = "$" + data.bitcoin.usd;
});
</script>
