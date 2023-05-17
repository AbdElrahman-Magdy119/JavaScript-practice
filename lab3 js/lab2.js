
// // Task(4)
//  var x=location.search;
//  var index = x.indexOf("u")+9;
//  var nam=" ";
//  while( x[index] !='&' )
//  {
//      nam = nam + x[index];
//      index++;
    
//  }

//  document.getElementById("asd").innerHTML="hellow"+nam




// // Task(5)
// function scroll()
// {
//     scrollBy(100,200)
// }
// setInterval(scroll,1000)



// //Task(pones 1)
function graduate()
{ 
    var d=new Date()
    var d1=new Date(2023,6,30,15,30,15)

     var sec = d1.getSeconds();
     var min = d1.getMinutes();
     var mon = d1.getMonth();
     var yea= d1.getFullYear();
     var hou = d1.getHours();
     var da  = d1.getDate();
    
     


    if( sec > d.getSeconds()         )
    {
         sec= sec - d.getSeconds();
    }
    else
    {
        sec= (sec+60) - d.getSeconds();
        min--;
    }

    if( min > d.getMinutes()         )
    {
         min= min - d.getMinutes();
    }
    else
    {
        min= (min+60) - d.getMinutes();
        hou--;
    }

    if( hou > d.getHours()         )
    {
         hou= hou - d.getHours();
    }
    else
    {
        hou= (hou+24) - d.getHours();
        da--;
    }

    if( da > d.getDate()         )
    {
         da= da - d.getDate();
    }
    else
    {
        da= (da+30) - d.getDate();
        mon--;
    }

    if( mon > d.getMonth()         )
    {
         mon= mon - d.getMonth();
    }
    else
    {
        mon= (mon+12) - d.getMonth();
        yea--;
    }


    document.getElementById("asd2").innerHTML= "remaining month          "+mon+"           "+
    "remaining day        "+da+"            "+
    "remaining hour        "+hou+"           "+
    "remaining second       "+sec+"         "+
    "remaining minutes       "+min +"         ";
}
setInterval(graduate,1000)
   

