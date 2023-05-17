// Task(1)
function check()
{
    var x= document.getElementById("asd").value
     var exp = /^([a-zA-Z]+)$/im;
     var t =exp.test(x);
     if(t == true)
     alert("true")
     else
     alert("false")
}


// Task(2)
var x;
function Start_clock()
{
    
    x=setInterval(show,1000);
}
function show()
{
    var d=new Date();
    document.getElementById("showclock").innerHTML=d.toLocaleTimeString();
}
function stop_clock()
{
    clearInterval(x);
}


// Task(3)
function transport()
{
    setTimeout(show,3000)
    
}

function show()
{
    open("lab2.html","_blank")
   
}
function close_page()
{
    close();
}





