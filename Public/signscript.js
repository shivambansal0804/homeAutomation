$(()=>{
    const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$("#sign_up_submit").click(()=>{

	$(location).attr('href','index.html');
});

$('#in_submit').click((e)=>{

	e.preventDefault();
	var passw = $('#in_password').val();
	var usname = $('#in_username').val();
	if(usname == 'shivam'&& passw == '1234'){
	$(location).attr('href','dashBoard.html');
	}
	else{
		console.log(passw);
		console.log(usname);
		alert(" Incorrect username Or Password ");
	}
});
})