const submitButton = document.getElementById('submitButton');
submitButton.addEventListener("click", main);

function main() {
    // Get User's Full name
    var fullName = document.getElementById('fullName').value;
    // Get IP Address and Display
    getIpAddress('https://hutils.loxal.net/whois');
    async function getIpAddress(url) {
        let response = await fetch(url);
        if (response.status === 200) {
            let data = await response.json();
            console.log(data);
            document.getElementById("result-display").innerHTML = `Hello - ${fullName}, your IP Address is - ${data.ip}`;
        }
    }
}

