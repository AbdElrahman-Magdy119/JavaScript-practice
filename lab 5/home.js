// task 1,2
// function submit()
// {
//     var x=document.getElementById("username");
//     var y=document.getElementById("password");

//     var chek=document.getElementById("box");
//      if( chek.checked == true)
//      {
//         localStorage.setItem("user",x.value);
//         localStorage.setItem("password",y.value);  
//      }
//      else
//      {
//         if( x.value == localStorage.getItem("user") && y.value == localStorage.getItem("password") )
//         {
//             localStorage.removeItem("user");
//             localStorage.removeItem("password");
//         }
    
//      }
     
//      alert("data stored")

//     x.value=""
//     y.value=""

// }

// function showdata()
// {
//     var x=document.getElementById("username");
//     var y=document.getElementById("password");
//     var z=localStorage.getItem("user");
//    var c=localStorage.getItem("password");
//     x.value= z;
//     y.setAttribute("type","text");
//     y.value= c;

// }


// task3,4
// var student= {
//         "Id":1,
//         "Name":"Abdelrahman Magdy",
//         "age":25,
//         "IsLeader":true,
//         "address":{
//             "street":"Gomhorya",
//             "city":"Assiut"
//         },
//         "Skills":["swim","football","programming"]
//     }
//     var student1= {
//         "Id":1,
//         "Name":"Abdelrahman Magdy",
//         "age":25,
//         "IsLeader":true,
//         "address":{
//             "street":"Gomhorya",
//             "city":"Assiut"
//         },
//         "Skills":["swim","football","programming"]
//     }

//     var student2= {
//         "Id":1,
//         "Name":"Abdelrahman Magdy",
//         "age":25,
//         "IsLeader":true,
//         "address":{
//             "street":"Gomhorya",
//             "city":"Assiut"
//         },
//         "Skills":["swim","football","programming"]
//     }

// var x=[student,student1,student2];
// x[1].Name = "doha";
// x[2].Name = "rady";
// x[1].Skills =["teniss","fitness","no"];
// x[2].Skills =["skil1","skil2","skil3"];
// x[1].address.city= null;
// x[2].address.street= null;

// for( var i=0; i<3 ;i++)
// {
//       document.getElementById("asd").innerHTML+= x[i].Name+"<br>"
//       document.getElementById("asd").innerHTML+= x[i].address.city+"<br>"
//       document.getElementById("asd").innerHTML+= x[i].address.street+"<br>"
//       for( var j=0;j<3;j++)
//       {
//         console.log( x[i].Skills[j] );
//       }

// }




// task5.1
// var text = document.getElementById("username");
// var img  = document.getElementById("im");
// function getData(){
//     var xhttp= new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(this.status==200 && this.readyState==4)
//         {
//             var dataAfterConvert=JSON.parse(this.responseText);
//             document.getElementById("asd").innerHTML+= dataAfterConvert.data.id+"<br>"
//             document.getElementById("asd").innerHTML+= dataAfterConvert.data.first_name+"<br>"
//             document.getElementById("asd").innerHTML+= dataAfterConvert.data.last_name+"<br>"
//             img.setAttribute("src",dataAfterConvert.data.avatar);
            
//         }
//     }

//     xhttp.open("GET","https://reqres.in/api/users/1",true);
//     xhttp.send();

// }

// task5.2
// var text = document.getElementById("username");
// var img  = document.getElementById("im");

// function getData(){
//         var xhttp= new XMLHttpRequest();
//         xhttp.onreadystatechange=function(){
//             if(this.status==200 && this.readyState==4)
//             {
//                 var dataAfterConvert=JSON.parse(this.responseText);

//                    for(var i=0;i<dataAfterConvert.data.length;i++)
//                    {
//                           if( text.value == dataAfterConvert.data[i].id)
//                           {
//                             document.getElementById("asd").innerHTML+= dataAfterConvert.data[i].id+"<br>"
//                             document.getElementById("asd").innerHTML+= dataAfterConvert.data[i].first_name+"<br>"
//                             document.getElementById("asd").innerHTML+= dataAfterConvert.data[i].last_name+"<br>"
//                             document.getElementById("asd").innerHTML+= dataAfterConvert.data[i].email+"<br>"
//                             img.setAttribute("src",dataAfterConvert.data[i].avatar);
//                           }
//                    }


                
//             }
//         }
    
//         xhttp.open("GET","https://reqres.in/api/users",true);
//         xhttp.send();
    
//     }



//task5.4
// var text = document.getElementById("username");
//  var img  = document.getElementById("im");
//  var selct = document.getElementById("sel")

// function getData(){
//         var xhttp= new XMLHttpRequest();
//       var   i = selct.value-1;
//         xhttp.onreadystatechange=function(){
//             if(this.status==200 && this.readyState==4)
//             {
//                 var dataAfterConvert=JSON.parse(this.responseText);

//                   for(var j=0;j<dataAfterConvert.data.length;j++)
//                   {
//                         var op = document.createElement("option");
//                         op.text=dataAfterConvert.data[i].id;
//                         selct.add(op)
//                   }
                          
//                             document.getElementById("asd").innerHTML= dataAfterConvert.data[i].id+"<br>"
//                             document.getElementById("asd").innerHTML+= dataAfterConvert.data[i].first_name+"<br>"
//                             document.getElementById("asd").innerHTML+= dataAfterConvert.data[i].last_name+"<br>"
//                             document.getElementById("asd").innerHTML+= dataAfterConvert.data[i].email+"<br>"
//                             img.setAttribute("src",dataAfterConvert.data[i].avatar);
                         
                   


                
//             }
//         }
    
//         xhttp.open("GET","https://reqres.in/api/users",true);
//         xhttp.send();
    
    
//     }

//     function show(){
//         var xhttp= new XMLHttpRequest();
//         xhttp.onreadystatechange=function(){
//             if(this.status==200 && this.readyState==4)
//             {
//                 var dataAfterConvert=JSON.parse(this.responseText);

//                   for(var j=0;j<dataAfterConvert.data.length;j++)
//                   {
//                         var op = document.createElement("option");
//                         op.text=dataAfterConvert.data[j].id;
//                         selct.add(op)
//                   }
//             }
//         }
    
//         xhttp.open("GET","https://reqres.in/api/users",true);
//         xhttp.send();
//     }



