$(document).ready(function(){
  $("#submit").click(function(){
    var name = $("#name").val();
    var password = $("#password").val();
    var confirmedpassword = $("#confirmedpassword").val();
    if (password == "") {
      alert("Fill in the line");
    }
    else if (password!=confirmedpassword) {
      alert("Your password doesn't match");
    }
    else if (name == ""){
      alert("Fill in the line");
    }
    else if (confirmedpassword == "") {
      alert("Repeat your password");
    }
    else{
      alert("All fields are filled in");
    }
  });
});
