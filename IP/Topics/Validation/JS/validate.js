const Uname=document.getElementById('username');
const pwd=document.getElementById('password');
const Cpwd=document.querySelector('#confirmpwd');
const form=document.querySelector('#signup');

const Required=value=>value===''?false:true;
const isBetween=(length,min,max)=>length<min||length>max?false:true;

const ValidPwd=(password)=>
{
    const pat=new RegExp("^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*!@#\$%\^&)(?=.{8,})");
    return pat.test(password);
}

const checkUsername=()=>
{
    let valid=false;
    let min=5,max=15;
    const username=Uname.value;
    if(!Required(username))
    {
        showError(Uname,"Username is blank");
    }
    else if(!isBetween(username.length,min,max)){
        showError(Uname,"Invalid length");
    }
    else{
        valid=true;
    }
}
const checkPwd=()=>
{
    let valid=false;
    const confirmPassword=Cpwd.value;
    const password=pwd.value;
    if(!Required(confirmPassword))
    {
        showError(Cpwd,'Please enter password');
    }
    else if(password!==confirmPassword)
    {
        showError(Cpwd,'The password does not match');
    }
    else{
        valid=true;
    }
return valid;
}
const showError=(input,message)=>
{
    const formField=input.parentElement;
    const error=formField.querySelector('samll');
    error.textContent=message;
}
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    let UsernameValid=


})
