
function create_label()
{
  var x=document.getElementById('username');
  var y=document.createElement("label");
  document.querySelector('button').disabled=true;
}
function required_ele()
{
    document.getElementById('username').required=true;
    document.getElementById('password').required=true;
    document.getElementById('confirmPassword').required=true;
    
}
function pass()
{
    var x=document.getElementById('password').value;
    var y=document.getElementById('confirmPassword').value;
    if(x==y)
    {
        document.querySelector('button').disabled=false;
        document.getElementById('pass_val').innerHTML='';
     
    }
    else
    {
        document.querySelector('button').disabled=true;
        document.getElementById('pass_val').innerHTML='Values dont match';
    }
}
function register()
{
    alert("User Successfully Registered");
}

required_ele();
create_label();