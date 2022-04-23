
function myFunction() {/*contact us*/
  alert("Your request has been submit successfully");
};
function myFunction3() {/*buy*/
  alert("Your Transaction has been submit successfully");
   window.location.href = "thanks.html";
};
function myFunction4() {/*profile*/
  alert("Your information has been saved successfully");
};
function myFunction5() {/*thanks*/
  alert("Thanks for your rating");
};
function validateEm(elementValue) {/*pattern*/
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

function validate() {/*sign in pattern*/
    var validation = true;

    if (document.logForm.Email.value == "") {
        validation = false;
        alert("The email can not be empty");
    } else if (!validateEm(document.logForm.Email.value)) {
        validation = false;
        alert("Invalid email format");
    } else if (document.logForm.Password.value == "") {
        validation = false;
        alert("The password can not be empty");
    }
    return validation;
}
function validateEm(elementValue) {/* sign up patern*/
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}
function Validation() {

    var val=true;

    if(document.regisForm.fName.value == "") {
        alert("First Name Can not be EMPTY !!");
        val=false;
    }
    else if(document.regisForm.lName.value == "") {
        alert("Second Name Can not be EMPTY !!");
        val=false;
    }
    else if(document.regisForm.Email.value == ""){
        alert("E-mail Can not be EMPTY !!");
        val=false;
    }
    else if(!validateEm(document.regisForm.Email.value))
    {
      val = false;
      alert("Invalid email format");
    }
    else if(document.regisForm.pass.value == "" || document.regisForm.passConfirm.value == ""){
        alert("The Password Can not be EMPTY !!");
        val=false;
    }
    else if((document.regisForm.pass.value !== document.regisForm.passConfirm.value)) {
        alert("The Password Does not MATCH !!");
        val=false;
    }
    
    return val;
}

function register()/*sign up*/
{
    if(Validation())
    {
        alert("You Have Registered Successfully");
        sessionStorage.setItem("logged", document.regisForm.Email.value);
        window.location.href = "Progect_it.html";
    }
}


function login() {/*sign in*/
    if (validate()) {
        sessionStorage.setItem("logged", document.logForm.Email.value);
        window.location.href="Progect_it.html";
    }
}