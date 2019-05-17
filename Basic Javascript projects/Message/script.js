const sendBtn = document.querySelector('#sendBtn');
const messageInput = document.querySelector('#messageIn');
const messageOutput = document.querySelector('#messageDelivered');

sendBtn.addEventListener('click', messageDisplay);

function messageDisplay(){
    let message = messageInput.value;
    messageOutput.innerHTML = message;
    messageInput.value = '';
}