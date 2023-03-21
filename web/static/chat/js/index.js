//starting page
if(document.querySelector('#btn-commencer')){
    var btn_start = document.querySelector('#btn-commencer')

    // managing start button

    btn_start.onclick = function  () {
        window.location.href = 'file:///home/monja/PycharmProjects/esti/web/static/chat.html';
    }
}



// MANAGING SEND MESSAGE

// area
var msg_are_one = document.querySelector('#msg-content-one');
var msg_are_two = document.querySelector('#msg-content-two');

// send message buttons
var send_one = document.querySelector('#send-one');
var send_two = document.querySelector('#send-two');

// typing content
var typing_one = document.querySelector('#typing-one');
var typing_two = document.querySelector('#typing-two');

// message content

var content_two = document.querySelector('#user-two');
var content_one = document.querySelector('#user-one');

var message_model_you =
    `<div class="msg">
        <img src="images/profile_pictures/tom.png" alt="monja" class="small-image-30 rounded-circle float-left ml-1">
            <div class="msg-you-content mt-2">
                content   
            </div>
     </div>`;

var message_model_me =
    `<div class="msg">
        <div class="msg-me-content mt-2">
            content    
        </div>
    </div>
    `;

var typing_one_content =
    `<img src="images/profile_pictures/tom.png" alt="monja" class="small-image-30 rounded-circle float-left ml-1">
        <i class="typing ml-3 mt-1">
           Typing...
    </i>`;

var typing_two_content =
    `<img src="images/profile_pictures/jerry.png" alt="monja" class="small-image-30 rounded-circle float-left ml-1">
        <i class="typing ml-3 mt-1">
           Typing...
    </i>`;



// managing typing information
// user one
msg_are_one.onkeypress = function () {
    typing_two.innerHTML = typing_two_content;
}
msg_are_one.onblur = function () {
    typing_two.innerHTML = '';
}

// user two
msg_are_two.onkeypress = function () {
    typing_one.innerHTML = typing_one_content;
}
msg_are_two.onblur = function () {
    typing_one.innerHTML = '';
}


// sending message
// user one
send_one.onclick = function () {
    // message content
    var new_msg_one = document.querySelector('#msg-content-one');
    content_two.innerHTML +=
        `
         <div class="msg">
            <img src="images/profile_pictures/jerry.png" alt="monja" class="small-image-30 rounded-circle float-left ml-1">
                <div class="msg-you-content mt-2">
                    `+ new_msg_one.value +`
                </div>
         </div>   
        `;

    content_one.innerHTML +=
        `
           <div class="msg">
                <div class="msg-me-content mt-2">
                    `+ new_msg_one.value +`   
                </div>
            </div>
        `;
}

// user two
send_two.onclick = function () {
    // message content
    var new_msg_two = document.querySelector('#msg-content-two');
    content_one.innerHTML +=
        `
         <div class="msg">
            <img src="images/profile_pictures/tom.png" alt="monja" class="small-image-30 rounded-circle float-left ml-1">
                <div class="msg-you-content mt-2">
                    `+ new_msg_two.value +`
                </div>
         </div>   
        `;

    content_two.innerHTML +=
        `
           <div class="msg">
                <div class="msg-me-content mt-2">
                    `+ new_msg_two.value +`   
                </div>
            </div>
        `;
}

