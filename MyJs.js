function check(form) {

  document.getElementById("error-red").style.display = "none";

/*the following code checkes whether the entered userid and password are matching*/

if(form.userid.value == "admin-geymofking" 

    && form.pswrd.value == "e209dd32")

{

 window.open("/p/adminkey.html"); 

 

}

else

{

  

  document.getElementById("error-red").style.display = "block";

alert("Lutfen dogru bir hesap giriniz!")/*displays error message*/

}

}
