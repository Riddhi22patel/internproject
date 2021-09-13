
function message() {

	var s = document.getElementById('item1');
	var checkUname = document.getElementById('U_name').value
	var checkPass = document.getElementById('pass').value

	if (s.value == "patient") {
		if (checkUname == "" || checkPass == "") {
			window.alert("Please Enter All The Details First...")
		}
		else {
			if (checkUname == "newcivil@gmail.com" || checkUname == "loksamarpan@gmail.com" || checkUname == "healthcare@gmail.com" || checkUname == "kiran@gmail.com" || checkUname == "smmimer@gmail.com") {
				alert("Please Enter Correct Email....")
			}
			else{
				var spinner=$('#loader')
				spinner.show()
				console.log(checkUname);
				console.log(s.value);
				firebase.auth().signInWithEmailAndPassword(checkUname, checkPass)
					.then((userCredential) => {
						var user = userCredential.user
						if (user != null) {
							window.location.href = "home1.html"
							localStorage.setItem('uid', user.uid)
							// console.log(user.uid);
						}
					})
					.catch(function (error) {
						console.log(error.code);
						console.log(error.message);
						spinner.hide(100,function(){
							alert(error.message)
						})
						
					});			
			}
		}
	}
	else if (s.value == "doctor") {
		if (checkUname == "" || checkPass == "") {
			window.alert("Please Enter All The Details First...")
		}
		else {
			// document.location.href = "D_home.html";
			if (checkUname == "newcivil@gmail.com" || checkUname == "loksamarpan@gmail.com" || checkUname == "healthcare@gmail.com" || checkUname == "kiran@gmail.com" || checkUname == "smmimer@gmail.com") {
				var spinner=$('#loader')
				spinner.show()
				firebase.auth().signInWithEmailAndPassword(checkUname, checkPass)
					.then((userCredential) => {
						var user = userCredential.user
						if (user != null) {
							window.location.href = "D_home.html"
							localStorage.setItem('uid', user.uid)
							// console.log(user.uid);
						}
					})
					.catch(function (error) {
						console.log(error.code);
						console.log(error.message);
						spinner.hide(100,function(){
							alert(error.message)
						})
						
					});
			}
			else {
				alert("Please Enter Correct Email....")
			}
		}
	}
	else if (s.value == "") {
		alert('please select your Role First...');
	}


}




