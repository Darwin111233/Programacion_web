//document.getElementById('btnSend').addEventListener('click', () =>{//
    //alert('hola');//
    //let usrname = document.getElementById('inputUsrname').value;//
    //alert(usrname);//
//});

document.getElementById('btn').addEventListener('click', () =>{
    let item = document.getElementById('btn');
    item.style.background = "black",
    item.style.fontSize = "14px",
    item.style.color = "red",
    item.style.borderColor= "red",
    item.style.opacity = "1";
});

//setTimeout(()=>{
   // let item = document.getElementById('btn');
 //   item.style.background = "black",
   // item.style.fontSize = "14px",
  //  item.style.color = "red",
  //  item.style.borderColor= "red",
   // item.style.opacity = "1";
//}, 3000);
//setTimeout(mundo,2000);
//setInterval(mundo,1000)
//function hola(){
   // let item = document.getElementById('btn');
    //item.style.background = "black",
    //item.style.fontSize = "14px",
   // item.style.color = "red",
    //item.style.borderColor= "red",
    //item.style.opacity = "1";
//}

//function mundo(){
    //let fecha = new Date();
    //let item = document.getElementById('btn');
    //item.innerText = fecha;
//}

document.getElementById('btn').addEventListener('click',()=>{
    let Usr = document.getElementById('inputUsrname').value;
    
    let Pass = document.getElementById('inputPassword').value;
    //alert(Pass+" "+Usr);

    if(Usr === "adm" && Pass === "6805"){
        alert( "Sesion Inciada"+" "+Usr+" "+Pass);
        sessionStorage.setItem("login","true");

    }else{
        alert("Usuario o contraeña incorrecta")
        sessionStorage.setItem("login","false");

    }
    let session = sessionStorage.getItem("login")
    console.log(session);
});
setInterval(()=>{
    let red = Math.floor(Math.random()*256);
    let green  = Math.floor(Math.random()*256);
    let blue  = Math.floor(Math.random()*256);
    let item = document.getElementById("body");
    let bck = "rgb("+red+","+green+","+blue+")";

    item.style.background = bck;    

},1000);