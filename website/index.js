const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://obdisrm3wduoc2szzqwfn7y6bi0wqvto.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Visitors: ${data}`;
}

updateCounter();