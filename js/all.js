function show(id){
    let element = document.getElementById(id);
    element.classList.toggle("show");
    let clas = id.substring(0, 9);
    if(clas==="mainClass"){
        let picNum=id.substring(9, 10);
        let pic = document.getElementById(`down${picNum}`);
        pic.classList.toggle("down");
        pic.classList.toggle("up");
    }
}