// task1
// function chnageImageopacty(image)
// {
//        if( image.style.opacity == 0.5 )
//        {
//          image.style.opacity="1"
//        }
//        else
//          {
//             image.style.opacity="0.5"
//          }
      
// }


// task2
// function set_color()
// {
//     var x=document.getElementsByClassName("span");
//     var arrcolor=['red','green','blue','orange','yellow','brown','gray','lightgray','gold']
    
//     for(var i=0;i<x.length;i++)
//     {
//         var c= Math.floor(  Math.random()*10  )
//         x[i].style.backgroundColor=arrcolor[c]
//     }
// }


// task3
// function show_password()
// {
//     var x=document.getElementById("text");
//     if( x.getAttribute("type") == "text")
//     {
//         x.setAttribute("type","password");
//     }
//     else
//     {
//         x.setAttribute("type","text");
//     }   
// }


// task4
// var qus =["question 1","question 2","question 3","question 4","question 5","question 6","question 7","question 8","question 9","question 10"]
// var count =-1;
// function next()
// {
   
//       count++;
//      document.getElementById("asd").innerHTML=qus[count];

   
// }
// function previous()
// {
//     count--;
//     document.getElementById("asd").innerHTML=qus[count];

// }


// function show()
// {
//     //alert("Thank you");
//     
// }

// function loadImage() {

//     alert("Image is loaded");
 

// }

// window.onload=myScript;

// function myScript()
// {
//     alert("hellow")
// }






// task5
var tex = document.getElementById("t1");
var text=' ';
tex.value = " "
function calculate(num)
{ 
    var y=num.getAttribute("value");
    text = text + y
    tex.value = text;
}

function del()
{
    tex.value = " "
    text=" "
}

function Result()
{
  
     tex.value = eval(text);
     alert(tex.value)
    
}