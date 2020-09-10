function show(id){
    let element = document.getElementById(id);
    element.classList.toggle("show");
}
function openMainClass(mainNum){
    let pic = document.getElementById(`down${mainNum}`);
        pic.classList.toggle("down");
        pic.classList.toggle("up");
    show(`mainClass${mainNum}`);
}