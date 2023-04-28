var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+212708051744'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>(212) 70805-1744</label></div> </a> <a href='mailto:nawfal.razouk@enim.ac.ma'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/NawfalRAZOUK7'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/212708051744'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/nawfalrazouk'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/nawfalrazouk7/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/nawfal-razouk/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resume.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>RAZOUK Nawfal Resume.pdf</label></div><a href='assets/CV RAZOUK.pdf' download='RAZOUK_Nawfal_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7647891568276!2d-6.859423293344735!3d33.99857484761788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76cf3277d1491%3A0x8c3ffba683de412!2sAnnexe%20de%20l&#39;ENIM%2C%20Rabat!5e0!3m2!1sfr!2sma!4v1676323639248!5m2!1sfr!2sma' class='map'></iframe></div><label class='add'><address>Rue Mohamed Bel Hassan Al Wazani<br>Agdal<br>Rabat, MOROCCO 10106</address>";

var portfolio = "<img src='images/portfolio.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><label>Nawfal RAZOUK | Portfolio</label></div><a target='_blank' href='https://www.nawfalrazouk.live'><img class='download' src='images/go.svg' alt=''></a></div>";
var plateform = "<img src='images/Github-profile.jpg' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><label>Nawfal RAZOUK | Github</label></div><a target='_blank' href='https://github.com/NawfalRAZOUK7'><img class='download' src='images/go.svg' alt=''></a></div>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>RAZOUK Nawfal</a>.</span><br><br>I am a Software Engineering student at <span class='bold'>ENSMR (Ex: ENIM) 👨🏻‍💻📚</span><br><br>I am excited to explore potential career opportunities and discover what's out there. If you have any opportunities that you think may be a good fit for my skills and experience, I would be delighted to chat with you about them.<br> Let's connect and see if there is a potential match.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'portfolio'</span> - to check my portfolio<br><span class='bold'>'social'</span> - to get my social links<br><span class='bold'>'adress'</span> - to get my location<br><span class='bold'>'more'</span> - to check my github profile<br><span class='bold'>'clear'</span> - to clear conversation</span>");
            break;

        case "resume":
            sendTextMessage(resumeString);
            break;

        case "portfolio":
            sendTextMessage(portfolio);
            break;

        case "social":
            sendTextMessage(contactString);
            break;

        case "offre":
            sendTextMessage("offre");
            break;

        case "adress":
            sendTextMessage(addressString);
            break;

        case "more":
            sendTextMessage(plateform);
            break;

        case "clear":
            clearChat();
            break;

        case "return":
            back();
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function getCurrentURL() {
    return window.location.href
}


function back() {
    document.getElementById("listUL").innerHTML = "";
    if (window.confirm("Do you really want to return to ?")) {
        history.back();
        const url = getCurrentURL();
        if (url == "https://chatbot-razouk.vercel.app/") {
            window.alert("In case the functionality encounters an issue, kindly refresh the page. If the problem persists, please do not hesitate to contact us for assistance. We appreciate your valuable feedback!")
        }
    }
}


function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
