let btn = document.getElementById('showQuotesButton');
let output = document.getElementById('output');
let copyBtn = document.getElementById('copyText')
let latestQuote = ''; // variable to store the latest quote

btn.addEventListener('click', function () {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
            'X-Api-Key': 'kjoU+11C92/wu+A8LYDJrw==sxZOppFnoTlbgB4I'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns an array and we're interested in the first quote
            const firstQuote = data[0]; // Adjust to access the first element of the array
            const latestQuote = `"${firstQuote.quote}" - ${firstQuote.author}`; // Use firstQuote for quote and author
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

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});