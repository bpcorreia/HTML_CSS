function Load() {
    debugger
    //let usernameValue = document.querySelector('div#username').value
    //let emailValue = document.getElementById('email').value
    //let passwordValue = document.querySelector('div#password').value
    let res = document.querySelector('div#res')
   // alert('Ta feito!')
    
   document.getElementById('username').value = sessionStorage.getItem("username")
   document.getElementById('email').value = sessionStorage.getItem("email")
   document.getElementById('password').value = sessionStorage.getItem("password")

   res.innerHTML = sessionStorage.getItem('email') + sessionStorage.getItem('username')
}