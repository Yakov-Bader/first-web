function addComent(){
    alert("xcvbnbfdsdfgh")
    let comment=document.getElementById("textComent").value;
    let name=document.getElementById("name");
    var li = document.createElement("LI");
    var t = document.createTextNode(comment);
    li.appendChild(t);
    li.className='comment';
    let list=document.getElementById("comments");
    list.insertBefore(li, list.childNodes[0]);
}