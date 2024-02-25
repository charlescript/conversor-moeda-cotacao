const button = document.getElementById('convert-button');
const select = document.getElementById('currency-select');

const dolar = 4.97;
const euro = 5.35;
const bitcoin = 257730.31;

const convertValues = () => {
    // Pegando o volor do real no campo input
    const inputReal = parseFloat(document.getElementById('input-real').value.trim());
    const realValueText = document.getElementById("real-value-text");

    const inputValue = document.getElementById('input-real').value.trim(); // Trim para remover espaços em branco extras
    
    // Pegando o valor do dolar e setando na apresentação
    const currencyValueText = document.getElementById("currency-value-text");
    
    if (inputValue !== "" && !/[a-zA-Z]/.test(inputValue)) {
        realValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputReal);


        if (select.value === "US$ Dólar americano") {
            currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputReal / dolar);
            // console.log("Converte dolar");
        }
    
        if (select.value === "€ EURO") {
            currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputReal / euro);
            // console.log("Converte euro");
        }

        if (select.value === "Bitcoin") {
            currencyValueText.innerHTML = (inputReal / bitcoin);
            // console.log("Converte euro");
        }

    } else {
        // Trate o caso em que o campo está vazio
        currencyValueText.innerHTML = "Digite um valor para ser convertido!";
    }

};


const changeCurrency = () => {
    //console.log('Fui chamada');
    //console.log(select.value);

    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img");
    convertValues(); // Essa chamada de função faz com que ao alterar a moeda de conversão automaticamente ele já converte sem precisar clicar no botão novamente

    switch (select.value) {
        case "US$ Dólar americano":
            currencyName.innerHTML = "Dólar Americano";
            currencyImg.src = './assets/estados-unidos.png';
            break;

        case "€ EURO":
            currencyName.innerHTML = "Euro";
            currencyImg.src = './assets/uniao-europeia.png';
            break;

            case "Bitcoin":
                currencyName.innerHTML = "Bitcoin";
                currencyImg.src = './assets/bitcoin.png';
                break;

        default:
            console.log("Moeda indefinida nesse escopo");
            break;
    }
};


button.addEventListener('click', convertValues);
select.addEventListener('change', changeCurrency);