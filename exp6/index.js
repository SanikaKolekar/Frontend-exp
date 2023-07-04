function validation()
{
    if(document.Formfill.Username.value=="")
    {
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value<6)
    {
        document.getElementById("result").innerHTML="At least six letter*";
        return false;
    }
    else if(document.Formfill.Email.value=="")
    {
        document.getElementById("result").innerHTML="Enter your email*";
        return false;
    }
    else if(document.Formfill.Password.value=="")
    {
        document.getElementById("result").innerHTML="Enter your password*";
        return false;
    }
    else if(document.Formfill.Password.value.length<6)
    {
        document.getElementById("result").innerHTML="password must be six digit*";
        return false;
    }
    else if(document.Formfill.cPassword.value=="")
    {
        document.getElementById("result").innerHTML="Enter your confirm password*";
        return false;
    }
    
    else if(document.Formfill.Password.value!=document.Formfill.cPassword.value)
    {
        document.getElementById("result").innerHTML="password doesn't match*";
        return false;
    }
    else if(document.Formfill.Password.value==document.Formfill.cPassword.value)
    {
        popup.classList.add("open-slide")
        return false;
    }
    

}
var popup=document.getElementById('popup');
{
    function CloseSlide()
    {
        popup.classList.remove("open-slide");
    }
}