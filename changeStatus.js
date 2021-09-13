var a=document.getElementById('A+')
var b=document.getElementById('B+')
var c=document.getElementById('AB+')
var d=document.getElementById('O+')
var e=document.getElementById('A-')
var f=document.getElementById('B-')
var g=document.getElementById('AB-')
var h=document.getElementById('O-')

function fun(){
 
// if(a.value=="" ||b.value=="" ||c.value=="" ||d.value=="" ||e.value=="" ||f.value=="" ||g.value=="" ||h.value==""){
//     window.alert("Please Enter Blood Data..")
// }
// else{
//     var ele=document.getElementsByClassName("change1")
//     var id;
//     for(i=0;i<ele.length;i++){  
//         id=ele[i].id;
//         if(ele[i].value!=""){
//         localStorage.setItem(id,ele[i].value)
//         }
//         else{
//             localStorage.setItem(localStorage.key(i),localStorage.getItem(localStorage.key(0)))
//         }
//     }  
//   }
  var ele=document.getElementsByClassName("change1")
  var id;
  for(i=0;i<ele.length;i++){  
      id=ele[i].id;
      if(ele[i].value!=""){
      localStorage.setItem(id,ele[i].value)
      }
      else{
          localStorage.setItem(localStorage.key(i),localStorage.getItem(localStorage.key(i)))
      }
  }
}

window.onload=fun1
function fun1(){
    var ele1=document.getElementsByClassName("unique")
    for(i=0;i<ele1.length;i++){ 
    id=ele1[i]
    console.log(`${localStorage.getItem(localStorage.key(i))}%`);
    id.style.width=`${localStorage.getItem(localStorage.key(i))}%`
    id.innerText=`${localStorage.getItem(localStorage.key(i))}%`
    }
}
