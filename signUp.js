
function message() {

    var s = document.getElementById('item1');
    // console.log(s);
    var checkFname=document.getElementById('Fname').value
    var checkLname=document.getElementById('Lname').value
    var checkEadd=document.getElementById('Eadd').value
    var checkMonum=document.getElementById('Monum').value
    var checkpass=document.getElementById('pass').value
    var checkblood=document.getElementById('blood').value
    var checkadd=document.getElementById('address').value
    var checksex=document.getElementById('gen').value

    if (s.value=="patient") {
        if(checkFname=="" || checkLname=="" || checkEadd=="" || checkMonum=="" ||checkpass=="" ||checkadd==""||checkblood=="" ||checksex==""){
            window.alert("Please Enter All The Details First...")
        }
        else{
        // document.location.href = "home1.html";
        var spinner=$('#loader')
        spinner.show()
        firebase.auth()
            .createUserWithEmailAndPassword(checkEadd, checkpass)
            .then((userCredential)=>{
                localStorage.setItem('uid',userCredential.user.uid)
                setTimeout(wait,5000)
                setTimeout(Redirect,7000)  
            })
            .catch(function (error) {
                if (error.code == "auth/email-already-in-use" || error.code == "auth/weak-password" || error.code == "auth/invalid-emai") {
                   spinner.hide(100,function(){
                    alert(error.message);
                   })
                    
                }
               
            });
            function wait() {
            firebase.firestore().collection('patients').doc(localStorage.getItem('uid')).set({
                Firstname:checkFname,
                Lastname:checkLname,
                Email:checkEadd,
                Password:checkpass,
                Address:checkadd,
                BloodGroup:checkblood,
                Gender:checksex,
                Phone:checkMonum,
                imageUrl:""
            })    
            console.log("wait function");    
        }
        
        function Redirect(){
            window.location.href = "home1.html"
          }
          
        }
    }
    
    else{
        alert('please select your Role First...');
    }
}
    
function logout() {
    
    firebase.auth()
    .signOut()
    console.log("logged out...");   
    localStorage.removeItem('uid')
    window.location.href="login.html"

}

// Read()