let i=0;
//users array
let users=[
    {
        firstName :"yakov",
        lastName :"bader",
        userName :"yakovBader",
        email : "yakovbader@gmail.com",
        passward : "12345678"
    }
];

function addUser(){
    let first= document.getElementById("fistName").value;
    let last= document.getElementById("lastName").value;
    let mail= document.getElementById("email").value;
    let user= document.getElementById("userName").value;
    let pass= document.getElementById("passward").value;
    let passAgain = document.getElementById("confirm-passward").value;
    if((passAgain!==pass)||(user==undefined)||(mail==undefined)){
      //TODO: does not completly work 
        alert("you need to have a.......");
    }
    alert(user)
   for(i;i<users.length;i++){
       if((user===users[i].userName)&& ((mail===users[i].email)||(pass===users[i].passward)) ){
           alert("this user is in use");
           location.reload();
       } 
   }
    //add a user to the users array
    users.push({
        firstName: first,
        lastName: last,
        userName: user,
        email : mail,
        passward: pass
        });
   window.location.href = "home.html";    
}
//go in to the web
function enter(){
    let passward= document.getElementById("passward").value;
    let user= document.getElementById("user").value;
    for(i; i<users.length;i++){
        if((user=== users[i].userName) && (passward===users[i].passward)){
            window.location.href ="home.html";
        }
    }
    alert("this user is not in use")
}



