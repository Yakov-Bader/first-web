function addComent(){
    let comment=document.getElementById("textComent").value;
    let name=document.getElementById("name");
    var li = document.createElement("LI");
    var t = document.createTextNode(comment);
    li.appendChild(t);
    li.className='comment';
    let list=document.getElementById("comments");
    list.insertBefore(li, list.childNodes[0]);
}
function switchBar(or){
    if(or==='comments-cover'){
        document.getElementById("comments-cover").classList.remove('show');
        document.getElementById("phone-list").classList.add('show');
    }
    else{
        document.getElementById("comments-cover").classList.add('show');
        document.getElementById("phone-list").classList.remove('show');
    }
}
function mobileMenu(){
    show('mobile-menu');
    document.getElementById("lines/x").classList.toggle("lines");
    document.getElementById("lines/x").classList.toggle("x");
}
function sendCom(id){
    show('add-comment');
    let element= document.getElementById('add-comment');
    if(element.classList.contains('show')){
        document.getElementById("sendCom").innerHTML="want to send a comment?"
    }else{
        document.getElementById("sendCom").innerHTML = "dont want to send a comment?";
    }
}