const sendBtn = document.querySelector('#sendBtn');
const messageInput = document.querySelector('#messageIn');
const messageOutput = document.querySelector('#messageDelivered');

sendBtn.addEventListener('click', messageDisplay);

function messageDisplay(){
    let message = messageInput.value;

    if(message === ''){
        alert('Please enter valid value. Current value is empty!')
    }
    else {
        messageOutput.innerHTML = message;
        messageInput.value = '';
    }
}