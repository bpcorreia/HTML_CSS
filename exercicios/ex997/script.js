//debugger
const form = document.getElementById('form')
const username = document.getElementById('username')
const  email= document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit',(e) => {
    e.preventDefault()

    checkInputs()
    submitData()
})

function checkInputs() {
    //debugger
    const usernameValue = username.value 
    const emailValue = email.value 
    const passwordValue = password.value 
    const password2Value = password2.value 


    if(usernameValue === '') {
        setErrorFor(username, 'Username nao pode ser vazio!')
    }else {
        setSucessFor(username)
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email nao pode ser vazio!')
    }else {
        setSucessFor(email)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password nao pode ser vazio!')
    }else if( (!isPassword(passwordValue)) | (passwordValue.length < 10) ) {
        setErrorFor(password, 'Password tem que ter mais complexa!')
    }
    else {
        setSucessFor(password)
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Password2 nao pode ser vazio!')
    }else if(passwordValue != password2Value) {
        setErrorFor(password2, 'Passwords não são iguais!')
    } else {
        setSucessFor(password2)
    }
       
}

function setErrorFor(input, message){
    const formControl = input.parentElement //.form-control
    const small = formControl.querySelector('small')

    //add error message inside small
    small.innerText = message

    //add error class
    formControl.className = 'form-control error'
}

function setSucessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control sucess'
}

function isPassword(password) {
    const regex = /[A-Za-z0-9_]+[^A-Za-z0-9_]|[^A-Za-z0-9_]+[A-Za-z0-9_]/
    return  regex.test(password);
}

function submitData() {
    window.alert('SubmitData!!')
//debugger
    //Submit Data Form to Excel
    $.ajax({
        url:'https://api.apispreadsheets.com/data/13080/',
        type:'post',
        data:$("#form").serializeArray(),
        success: function(){
          //sessionStorage.setItem("email", document.getElementById('email').value) 
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
    window.location = 'area.html'
}

function Read(){
    const usernameValue = username.value
  //  window.alert('Read')
    debugger

    //Ler Username do Excel
    fetch("https://api.apispreadsheets.com/data/13080/?query=select*from13080whereusername=" + "'" + usernameValue + "'").then(res=>{
	if (res.status === 200){
		
        // SUCCESS
		res.json().then(data=>{
			const yourData = data
           
            document.getElementById('email').value =  yourData.data[0].email
            document.getElementById('password').value = yourData.data[0].password
           // document.getElementById('password2').value = yourData[0].password2
            
           let usernameValue = yourData.data[0].username
           let emailValue = yourData.data[0].email
           let passwordValue = yourData.data[0].password

            alert('Username: ' + yourData.data[0].username + '\r\n' + 'Email: ' + yourData.data[0].email)
                   
            sessionStorage.setItem('username',usernameValue)
            sessionStorage.setItem('email', emailValue)
            sessionStorage.setItem('password', passwordValue)
            
        }).catch(err => console.log(err))
        
        ler.innerHTML =  'Dados Lidos'
        
        
        window.location = 'area.html'
        	}
	else{
		// ERROR
        alert('O Username não existe em Base de Dados!')
	}
})

}

function Reset() {
    document.getElementById('username').value =  ''
    document.getElementById('email').value =  ''
    document.getElementById('password').value = ''
    document.getElementById('password2').value = ''
    
}