let btn = document.getElementById('showQuotesButton');
let output = document.getElementById('output');
let copyBtn = document.getElementById('copyText')
let latestQuote = ''; // variable to store the latest quote

btn.addEventListener('click', function () {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            latestQuote = `"${data.content}" - ${data.author}`; // store the latest quote
            output.innerHTML = latestQuote;
            console.log(latestQuote);
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            output.innerHTML = "Oops! Couldn't fetch a quote right now. Try again later."
        });
});

copyBtn.addEventListener('click', function () {
    // Check if the latest quote is not empty
    if (latestQuote !== '') {
        navigator.clipboard.writeText(latestQuote)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    } Swal.fire({
        icon: 'success',
        title: 'Copied',
        text: 'Text has been copied.',
    });
});