document.getElementById("but").addEventListener("click", function(){
  var name = document.getElementsByClassName("inp");
    for (let i = 0; i< name.length; i++) {
      document.getElementById('txtHint').innerHTML += name[i].value + '<br>'; 
    }
})