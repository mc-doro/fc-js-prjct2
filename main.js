const btn = document.querySelector("#btn");
const select = document.querySelector("#currencies");
const amount = document.querySelector("#amount");
const span = document.querySelector("#span1");

select.addEventListener("change", (event) => console.log(event.target.value));

btn.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(`https://api.nbp.pl/api/exchangerates/rates/A/${select.value}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.rates[0].mid);
      span.innerText = data.rates[0].mid * amount.value + " PLN";
    })
    .catch((err) => console.error(err));
});
