function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "webapploginpoint@gmail.com",
    Password: "yzppmfisqjmgdgvx",
    To: "webapploginpoint@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New User",
    Body: "And this is the body",
  }).then((message) => alert(message));
}