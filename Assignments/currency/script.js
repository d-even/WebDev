
// Get HTML elements
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");
const rateText = document.getElementById("rateText");
const swapBtn = document.getElementById("swapBtn");


const flagCodes = {
    USD: "us",
    EUR: "eu",
    GBP: "gb",
    INR: "in",
    JPY: "jp",
    AUD: "au",
    CAD: "ca",
    CHF: "ch"
};

function updateFlags() {
    const fromFlag = document.getElementById("fromFlag");
    const toFlag = document.getElementById("toFlag");

    if (fromFlag && flagCodes[fromCurrency.value]) {
        fromFlag.src =
            `https://flagcdn.com/w80/${flagCodes[fromCurrency.value]}.png`;
        fromFlag.alt = fromCurrency.value + " flag";
    }

    if (toFlag && flagCodes[toCurrency.value]) {
        toFlag.src =
            `https://flagcdn.com/w80/${flagCodes[toCurrency.value]}.png`;
        toFlag.alt = toCurrency.value + " flag";
    }
}


async function convertCurrency() {
    const amount = Number(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // if (amountInput.value.trim() === "" || !Number.isFinite(amount) || amount < 0) {
    //     result.textContent = "Enter a valid amount";
    //     return;
    // }

    // updateFlags();

    if (from === to) {
        result.textContent = amount.toFixed(2);
        rateText.textContent = `1 ${from} = 1 ${to}`;
        return;
    }

    // rateText.textContent = "Fetching exchange rate...";

    try {
        const url =
            `https://api.frankfurter.dev/v2/rate/${from}/${to}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Rate unavailable for this currency pair");
        }

        const data = await response.json();
        const convertedAmount = amount * data.rate;

        result.textContent = convertedAmount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        rateText.textContent =
            `1 ${from} = ${data.rate.toFixed(4)} ${to}`;

    } catch (error) {
        console.error("Conversion error:", error);
        result.textContent = "Conversion failed";
        rateText.textContent = "Please try another currency pair.";
    }
}

fromCurrency.addEventListener("change", () => {
    updateFlags();
    convertCurrency();
});

toCurrency.addEventListener("change", () => {
    updateFlags();
    convertCurrency();
});

amountInput.addEventListener("input", convertCurrency);

swapBtn.addEventListener("click", () => {
    const previousFrom = fromCurrency.value;

    fromCurrency.value = toCurrency.value;
    toCurrency.value = previousFrom;

    updateFlags();
    convertCurrency();
});

updateFlags();
convertCurrency();



const tickerTrack = document.getElementById("tickerTrack");

const marketPairs = [
    { from: "USD", to: "CAD" },
    { from: "EUR", to: "USD" },
    { from: "USD", to: "JPY" },
    { from: "GBP", to: "USD" }
];

let previousRates = {};

async function loadMarketRates() {
    try {
        const results = await Promise.all(
            marketPairs.map(async ({ from, to }) => {
                const response = await fetch(
                    `https://api.frankfurter.dev/v2/rate/${from}/${to}`
                );

                if (!response.ok) {
                    throw new Error(`${from}/${to} rate unavailable`);
                }

                return response.json();
            })
        );

        const items = results.map((data) => {
            const pair = `${data.base}/${data.quote}`;
            const rate = data.rate;
            const previous = previousRates[pair];

            let arrow = "";
            let direction = "";

            if (previous !== undefined) {
                if (rate > previous) {
                    arrow = "▲";
                    direction = "up";
                } else if (rate < previous) {
                    arrow = "▼";
                    direction = "down";
                } else {
                    arrow = "—";
                }
            }

            previousRates[pair] = rate;

            return `
                <span>
                    ${pair}
                    <b>${rate.toFixed(4)}</b>
                    <b class="${direction}">${arrow}</b>
                </span>
            `;
        });

        // Duplicate the items to create a continuous carousel
        const tickerContent = items.join("");

        tickerTrack.innerHTML = tickerContent + tickerContent;

    } catch (error) {
        console.error("Market ticker error:", error);
        tickerTrack.innerHTML =
            "<span>Unable to load exchange rates. Please try again.</span>";
    }
}

loadMarketRates();


setInterval(loadMarketRates, 60000);
