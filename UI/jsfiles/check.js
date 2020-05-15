
function checkLogin() {

var user = document.getElementById('uid').value
var pass = document.getElementById('pwd').value

  if (user == "admin" && pass == "admin") {
     window.location.href = "WelcomePage.html"
  } else {
     document.getElementById('valmsg').innerHTML = "Warning !! Correct credentials are admin/admin"
  }
}