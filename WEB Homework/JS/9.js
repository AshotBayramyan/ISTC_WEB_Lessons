var name = document.getElementById("name");
// var surname = document.getElementById("surname");
var email = document.getElementById("email");
var but = document.getElementById("button");

submitButton.addEventListener("click", function(event){
    var textName= name.value;
    // var textName= surname.value;
    var textEmail = email.value;
   
  document.getElementById("result").innerHTML ="Information about your profile; </b>" + "<b><br/> Your Name Is </b>" + textName 
   + textEmail + "<b><br/> Your Address Is </b>";
})