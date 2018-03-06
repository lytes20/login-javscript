var username;

function login(){
	username = document.myForm.elements[0].value;

	if(username == ""){
		alert("Please Enter a username");
	}else{
		alert("Welcome " + username);
	}
		
}


