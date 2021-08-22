const mainContainer = document.querySelector('.mainContainer');
const messageInput = document.querySelector('.execute');

messageInput.addEventListener('input', () => {
    const message = document.querySelector('.execute').value;
    sha256(message);
});


async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    display(hashHex);
}

function display(hashHex) {
    mainContainer.innerHTML = '';
    const newThing = document.createElement('h1');
    newThing.innerHTML = `${hashHex}`;
    mainContainer.appendChild(newThing);
}
