

async function convertcurrency() {
    let response = await fetch("https://open.er-api.com/v6/latest/USD");
    let data = await response.json();


    let rates = data.rates;
    let selectfrom = document.getElementById("from");
    let selectto = document.getElementById("to");
    let Convert = document.getElementById("convert");

    for (let currency in rates) {
        let option1 = document.createElement("option");
        option1.value = rates[currency];
        option1.textContent = currency;

        let option2 = document.createElement("option");
        option2.value = rates[currency];
        option2.textContent = currency;

        selectfrom.appendChild(option1);
        selectto.appendChild(option2);
    }
    selectfrom.value = 1;
    selectto.value = 90.667679;

    Convert.addEventListener("click", () => {
        let amount = Number(document.getElementById("amount").value);
        let fromRate = Number(selectfrom.value);
        let toRate = Number(selectto.value);
        let Output = document.getElementById("response");

        let Ratefrom = document.getElementById("ratefrom");
        let Rateto = document.getElementById("rateto");

        let fromCurrency = selectfrom.selectedOptions[0].text;
        let toCurrency = selectto.selectedOptions[0].text;

        if (amount <= 0 || isNaN(amount)) {
            Output.innerText = "Enter valid amount";
            return;
        }

        let converted = (amount / fromRate) * toRate;
        let display = (1 / fromRate) * toRate;

        Output.innerText = converted.toFixed(2);

        Ratefrom.innerText = `1 ${fromCurrency}`
        Rateto.innerText = `${display.toFixed(4)} ${toCurrency}`

    });
console.log(rates);
}

convertcurrency()