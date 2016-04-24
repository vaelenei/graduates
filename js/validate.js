$(document).ready(function(){
  $("#submitButton").on("click",function(){
    var nume = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var website = document.getElementById('websiteInput').value;
    var message=document.getElementById('messageInput').value;

    var namePattern = /^[A-Za-z_-]{3,16}$/ ;
    var emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var websitePattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    if(nume===null || nume==="" || !namePattern.test(nume))
      alert("wrong name");
    else
      if(email===null || email==="" || !emailPattern.test(email))
        alert("wrong email");
    else
      if(website===null || website==="" || !websitePattern.test(website))
        alert("wrong website");
    else
      if(message===null || message==="")
        alert("message is empty");
    else
      alert("message send. Thanks");
  });
});
