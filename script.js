function bitprice() {
  fetch("https://blockchain.info/ticker")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      document.querySelector("#btckurs").insertAdjacentHTML("afterbegin", data.EUR["15m"] + " " + data.EUR.symbol);
    });
}

bitprice();
