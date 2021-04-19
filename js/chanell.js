function addComent(){
    let comment=document.getElementById("text").value;
    let name=document.getElementById("name");
    var li = document.createElement("LI");
    var t = document.createTextNode(comment);
    li.appendChild(t);
    li.className='comment';
    let list=document.getElementById("comments");
    list.insertBefore(li, list.childNodes[0]);
}
function switchBar(or){
    if(or==='comments'){
        document.querySelector(".comments").classList.remove('show');
        document.querySelector(".list").classList.add('show');
    }
    else{
        document.querySelector(".comments").classList.add('show');
        document.querySelector(".list").classList.remove('show');
    }
}
function sendCom(id){
    show('add-comment');
    let element= document.querySelector('.add-comment');
    if(element.classList.contains('show')){
        document.querySelector('.sendCom').innerHTML="want to send a comment?"
    }else{
        document.querySelector('.sendCom').innerHTML = "dont want to send a comment?";
    }
}
function checkBox(){
    let change=document.getElementById('email');
    let checkbox=document.getElementById('anonymous');
    if (checkbox.checked != true){
        change.value="";
    }else{
        change.value="anonymous@gmail.com";
    }
}
